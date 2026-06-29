#!/usr/bin/env node
// PostToolUse(Edit|Write|MultiEdit) hook: auto-format the file Claude just edited
// with Prettier and ESLint --fix. Best-effort and non-blocking: it always exits 0
// so a formatting hiccup never interrupts the session.
//
// Monorepo-aware: each client under clients/<generator>/ owns its own toolchain
// (Prettier/ESLint live in that client's node_modules, with client-local config).
// We therefore resolve the edited file to its owning client directory and run the
// formatters with cwd set there so `npx --no-install` finds the right binaries and
// configs. Files outside any client (root configs, workflows, hooks) are skipped.

import { readFileSync, realpathSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

const projectDir = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const CODE_EXT = new Set(['.ts', '.mts', '.cts', '.js', '.cjs', '.mjs']);
// Mirror each client's .prettierignore / ESLint ignores so generated and vendored
// code is skipped. Paths are matched relative to the owning client directory.
const IGNORED = ['node_modules', 'dist', 'lib', 'cdn', 'coverage', 'src/api', 'custom-templates'];

function readStdin() {
  try {
    return readFileSync(0, 'utf8');
  } catch {
    return '';
  }
}

let filePath = '';
try {
  const data = JSON.parse(readStdin() || '{}');
  filePath = (data.tool_input && data.tool_input.file_path) || '';
} catch {
  process.exit(0);
}
if (!filePath) process.exit(0);

const abs = path.resolve(projectDir, filePath);
let realAbs = '';
let rel = '';
try {
  const realProjectDir = realpathSync(projectDir);
  realAbs = realpathSync(abs);
  rel = path.relative(realProjectDir, realAbs);
} catch {
  process.exit(0);
}
if (rel.startsWith('..') || path.isAbsolute(rel)) process.exit(0); // outside the project
if (!CODE_EXT.has(path.extname(realAbs))) process.exit(0);

// Resolve the owning client: clients/<generator>/... — skip files outside any client.
const parts = rel.split(path.sep);
if (parts[0] !== 'clients' || parts.length < 3) process.exit(0);
const clientDir = path.join(projectDir, parts[0], parts[1]);
const relInClient = parts.slice(2).join(path.sep);
if (IGNORED.some((d) => relInClient === d || relInClient.startsWith(d + path.sep))) process.exit(0);

const run = (cmd, args) => {
  try {
    execFileSync(cmd, args, { cwd: clientDir, stdio: 'ignore' });
  } catch {
    /* ignore: tool missing, or lint rules the model will see on Stop anyway */
  }
};

run('npx', ['--no-install', 'prettier', '--write', realAbs]);
run('npx', ['--no-install', 'eslint', '--fix', realAbs]);

process.exit(0);
