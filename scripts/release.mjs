#!/usr/bin/env node
// Monorepo-aware release helper. `npm version` does NOT create a git commit/tag when run
// from a client subdirectory (the repo's .git lives at the root), so each client's
// `release:*` script bumps the version with `npm version <type> --no-git-tag-version`
// and then runs this to commit, tag (`<generator>-v<version>`), and push from the repo
// root. Run via `npm run release:*` from inside a clients/<generator>/ directory.
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import path from 'node:path';

const clientDir = process.cwd();
const generator = path.basename(clientDir);
const version = JSON.parse(readFileSync(path.join(clientDir, 'package.json'), 'utf8')).version;
const tag = `${generator}-v${version}`;

const git = (...args) => execFileSync('git', args, { stdio: 'inherit' });
const gitOut = (...args) => execFileSync('git', args, { encoding: 'utf8' }).trim();

const root = gitOut('rev-parse', '--show-toplevel');
const branch = gitOut('rev-parse', '--abbrev-ref', 'HEAD');
if (branch !== 'main') {
  console.error(`release: refusing to release from '${branch}'; switch to 'main' first.`);
  process.exit(1);
}

const files = ['package.json', 'package-lock.json'].map((f) => path.relative(root, path.join(clientDir, f)));
console.log(`release: ${generator} -> ${version} (tag ${tag})`);
git('-C', root, 'add', ...files);
git('-C', root, 'commit', '-m', `chore(${generator}): release ${version}`);
git('-C', root, 'tag', '-a', tag, '-m', `${generator} ${version}`);
git('-C', root, 'push', '--follow-tags');
console.log(`release: pushed ${tag}; cd-${generator}.yml will start and wait for npm-production approval.`);
