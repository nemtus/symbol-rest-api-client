#!/usr/bin/env node
// Install a client's freshly built ./dist into a consumer test suite's node_modules under
// the package's PUBLISHED name, so the suite imports it exactly as a real consumer does
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
// Why it COPIES rather than symlinks — do not "optimise" this back to a symlink. Node
// resolves a module to its REAL path and then walks up from there, so with
// `node_modules/<name>` symlinked to `../../dist` the require stack starts at
// `clients/<generator>/dist/cjs/...` and only ever searches
//   clients/<generator>/dist/node_modules
//   clients/<generator>/node_modules
//   clients/node_modules
//   <repo root>/node_modules
// It never reaches the SUITE's node_modules, so the axios client — whose published package
// has `axios` as a runtime dependency — dies at import with
//   Error: Cannot find module 'axios'
//   Require stack: .../clients/typescript-axios/dist/cjs/api/api.js
// even though the suite declares and locks axios itself. Locally the symlink appears to
// work only because `clients/<generator>/node_modules` usually exists from the client's own
// `npm ci` and silently satisfies the lookup; CI test jobs have no such tree, so it fails
// there. Copying puts the package at a real path INSIDE the suite, so resolution walks up
// into `tests/<suite>/node_modules` as it does for any registry dependency. This is exactly
// what npm's `install-links=true` did for the old `file:` dependency.
//
// Run from a test suite directory (it is wired into each suite's `test` script, which keeps
// it working under `.npmrc` `ignore-scripts`, where pre/post lifecycle scripts do not run):
//   node ../../../../scripts/link-dist.mjs
// Must run AFTER `npm ci` — `npm ci` wipes node_modules, this copy included.
import { cpSync, existsSync, lstatSync, mkdirSync, readFileSync, rmSync } from 'node:fs';
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

const target = path.join(suiteDir, 'node_modules', name);
mkdirSync(path.dirname(target), { recursive: true });
// lstatSync, not existsSync: an earlier revision of this script created a symlink here, and
// existsSync follows links — a dangling one would report false and never be cleaned up.
try {
  lstatSync(target);
  rmSync(target, { recursive: true, force: true });
} catch {
  // nothing to replace
}
cpSync(distDir, target, { recursive: true, dereference: true });
console.log(`link-dist: copied ${path.relative(suiteDir, distDir)} -> node_modules/${name}`);
