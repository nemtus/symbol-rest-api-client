#!/usr/bin/env node
// Monorepo-aware release helper: opens a release PR, never pushes to main or pushes a tag.
//
// Run via `npm run release:patch|minor|major` from inside a clients/<generator>/ directory.
// It bumps that client's version with `npm version <type> --no-git-tag-version`, commits the
// bump on a `release/<generator>-vX.Y.Z` branch, pushes the branch, and opens a PR.
//
// Merging that PR is what releases: once CI passes on the merge commit,
// .github/workflows/release-tag.yml creates the `<generator>-vX.Y.Z` tag on it and
// dispatches cd-<generator>.yml, which publishes after the `npm-production` approval.
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import path from 'node:path';

const TYPES = ['patch', 'minor', 'major'];
const type = process.argv[2];
if (!TYPES.includes(type)) {
  console.error(`usage: node scripts/release.mjs <${TYPES.join('|')}> (run from clients/<generator>/)`);
  process.exit(1);
}

const run = (cmd, args, opts = {}) => execFileSync(cmd, args, { stdio: 'inherit', ...opts });
const out = (cmd, args, opts = {}) => execFileSync(cmd, args, { encoding: 'utf8', ...opts }).trim();
const fail = (msg) => {
  console.error(`release: ${msg}`);
  process.exit(1);
};

const clientDir = process.cwd();
const generator = path.basename(clientDir);
const root = out('git', ['rev-parse', '--show-toplevel']);
const git = (...args) => run('git', ['-C', root, ...args]);
const gitOut = (...args) => out('git', ['-C', root, ...args]);

if (path.relative(root, path.dirname(clientDir)) !== 'clients') {
  fail(`run this from a clients/<generator>/ directory, not '${clientDir}'.`);
}

// Preflight, before anything is changed.
const branch = gitOut('rev-parse', '--abbrev-ref', 'HEAD');
if (branch !== 'main') fail(`refusing to release from '${branch}'; switch to 'main' first.`);
if (gitOut('status', '--porcelain') !== '') fail('the working tree is not clean; commit or stash first.');
try {
  run('gh', ['auth', 'status'], { stdio: 'ignore' });
} catch {
  fail('the GitHub CLI (`gh`) is required and must be logged in (`gh auth login`).');
}
git('fetch', '--quiet', 'origin', 'main');
if (gitOut('rev-parse', 'HEAD') !== gitOut('rev-parse', 'origin/main')) {
  fail("local 'main' is not in sync with 'origin/main'; run `git pull` first.");
}

run('npm', ['version', type, '--no-git-tag-version'], { cwd: clientDir });
const version = JSON.parse(readFileSync(path.join(clientDir, 'package.json'), 'utf8')).version;
const tag = `${generator}-v${version}`;
const releaseBranch = `release/${tag}`;
const title = `chore(${generator}): release ${version}`;
const files = ['package.json', 'package-lock.json'].map((f) => path.relative(root, path.join(clientDir, f)));

console.log(`release: ${generator} -> ${version} (PR from ${releaseBranch})`);
git('switch', '--quiet', '-c', releaseBranch);
try {
  git('add', ...files);
  git('commit', '--quiet', '-m', title);
  git('push', '--quiet', '-u', 'origin', releaseBranch);
  const body = [
    `Release \`${generator}\` ${version}.`,
    '',
    `Merging this PR releases it: once CI passes on the merge commit, \`release-tag.yml\` creates the`,
    `\`${tag}\` tag on that commit and dispatches \`cd-${generator}.yml\`, which publishes to npm after`,
    'the `npm-production` approval.',
  ].join('\n');
  run('gh', ['pr', 'create', '--base', 'main', '--head', releaseBranch, '--title', title, '--body', body], {
    cwd: root,
  });
} finally {
  // Leave the user back on a clean main, whether or not the PR step succeeded. On failure the
  // bump commit is kept on the release branch, so nothing is lost.
  git('switch', '--quiet', 'main');
}
console.log(`release: opened the release PR for ${tag}. Merge it to release; approve the CD run afterwards.`);
