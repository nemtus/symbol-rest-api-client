#!/usr/bin/env node
// Stop hook: validate the working tree with type:check and lint when Claude is
// about to finish. If either reports problems, exit 2 so the findings are fed
// back to the model to fix. Guards against infinite loops via stop_hook_active.
//
// Monorepo-aware: there is no root package.json. Each client under clients/<gen>/
// owns its own type:check / lint scripts, so we run them per client (cwd = client
// dir). Clients whose deps aren't installed are skipped gracefully.

import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { execSync } from 'node:child_process';
import path from 'node:path';

const projectDir = process.env.CLAUDE_PROJECT_DIR || process.cwd();

function readStdin() {
  try {
    return readFileSync(0, 'utf8');
  } catch {
    return '';
  }
}

let stopHookActive = false;
try {
  const data = JSON.parse(readStdin() || '{}');
  stopHookActive = Boolean(data.stop_hook_active);
} catch {
  /* ignore */
}
// Already re-entered from a previous block of this hook: don't block again.
if (stopHookActive) process.exit(0);

function tryRun(script, cwd) {
  try {
    execSync(`npm run --silent ${script}`, { cwd, stdio: 'pipe' });
    return null;
  } catch (err) {
    const out = `${err.stdout || ''}${err.stderr || ''}`.trim();
    // Treat "missing tooling / not installed" as an environment issue, not a
    // violation, so we never block when deps aren't installed.
    if (/missing script|ENOENT|command not found|Cannot find module|not found/i.test(out)) {
      return null;
    }
    return out || `npm run ${script} failed`;
  }
}

// Enumerate clients/<generator>/ directories that have a package.json.
const clientsRoot = path.join(projectDir, 'clients');
let clientDirs = [];
try {
  clientDirs = readdirSync(clientsRoot, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith('_'))
    .map((d) => path.join(clientsRoot, d.name))
    .filter((dir) => existsSync(path.join(dir, 'package.json')));
} catch {
  process.exit(0); // no clients/ yet
}

const problems = [];
for (const dir of clientDirs) {
  // Skip clients whose deps aren't installed (avoids noisy "Cannot find module").
  if (!existsSync(path.join(dir, 'node_modules'))) continue;
  const label = path.relative(projectDir, dir);
  for (const script of ['type:check', 'lint']) {
    const result = tryRun(script, dir);
    if (result) problems.push(`# ${label}: ${script}\n${result}`);
  }
}

if (problems.length) {
  process.stderr.write(`Stop blocked: fix these before finishing.\n\n${problems.join('\n\n')}\n`);
  process.exit(2);
}
process.exit(0);
