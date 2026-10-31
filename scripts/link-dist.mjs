#!/usr/bin/env node
// Link a client's freshly built ./dist into a consumer test suite's node_modules under the
// package's PUBLISHED name, so the suite imports it exactly as a real consumer does
// (`require('@nemtus/symbol-rest-api-client-fetch')`).
//
// Why a script instead of a `file:` dependency: declaring the built output as
// `"@nemtus/symbol-rest-api-client-axios": "../../dist"` in the suite's package.json made
// Dependabot abort EVERY update job for this repo with
//   path_dependencies_not_reachable: @nemtus/symbol-rest-api-client-axios
// because ./dist is a build artifact that is not committed, so Dependabot's file fetcher
// cannot resolve the path. With `directories:` globs grouping several manifests into one
// job, that single unresolvable path silently blocked security updates repo-wide.
//
// Run from a test suite directory (it is wired into each suite's `test` script, which keeps
// it working under `.npmrc` `ignore-scripts`, where pre/post lifecycle scripts do not run):
//   node ../../../../scripts/link-dist.mjs
// Must run AFTER `npm ci` — `npm ci` wipes node_modules, symlink included.
import { existsSync, lstatSync, mkdirSync, readFileSync, rmSync, symlinkSync } from 'node:fs';
import path from 'node:path';

const suiteDir = process.cwd();
// clients/<generator>/tests/<suite> -> clients/<generator>/dist
const distDir = path.resolve(suiteDir, '../../dist');
const distManifest = path.join(distDir, 'package.json');

if (!existsSync(distManifest)) {
  console.error(
    `link-dist: ${path.relative(suiteDir, distManifest)} not found.\n` +
      `link-dist: build the client first (npm run build in clients/<generator>/), or download the dist CI artifact.`,
  );
  process.exit(1);
}

const name = JSON.parse(readFileSync(distManifest, 'utf8')).name;
if (!name) {
  console.error(`link-dist: ${distManifest} has no "name" field.`);
  process.exit(1);
}

const linkPath = path.join(suiteDir, 'node_modules', name);
mkdirSync(path.dirname(linkPath), { recursive: true });
// lstatSync, not existsSync: a symlink left over from a previous run may dangle, and
// existsSync follows the link and would report false for one that still needs removing.
try {
  lstatSync(linkPath);
  rmSync(linkPath, { recursive: true, force: true });
} catch {
  // nothing to replace
}
// Relative target so the link survives the tree being moved or mounted elsewhere
// (e.g. the Playwright container bind-mounting the workspace at another path).
symlinkSync(path.relative(path.dirname(linkPath), distDir), linkPath, 'dir');
console.log(`link-dist: ${name} -> ${path.relative(suiteDir, distDir)}`);
