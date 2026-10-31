# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Monorepo note (read first).** This package now lives at `clients/typescript-fetch/`
> in the [`nemtus/symbol-rest-api-client`](https://github.com/nemtus/symbol-rest-api-client)
> polyglot monorepo and is published as **`@nemtus/symbol-rest-api-client-fetch`** (was
> `@nemtus/symbol-sdk-openapi-generator-typescript-fetch`). Where the text below says "root
> directory", it means **this client directory** (`clients/typescript-fetch`) — there is no
> root `package.json`. Shared tooling (`.editorconfig`, `.prettierrc`, `cspell.json`,
> `.coderabbit.yaml`, `socket.yml`, `.pinact.yaml`, and the Claude/Gemini/VS Code configs
> incl. `.claude/` hooks) is hoisted to the **repo root**, not per-client. CI/CD are the
> root workflows **`ci-typescript-fetch.yml` / `cd-typescript-fetch.yml`** (not
> `ci-nodejs.yml` / `cd-publish-to-npm.yml`). Release tags are prefixed
> **`typescript-fetch-vX.Y.Z`** (set via this client's `.npmrc` `tag-version-prefix`), and
> versions track the spec at MAJOR.MINOR with PATCH as this client's own lane.

## Project Overview

This is the Symbol SDK for TypeScript with OpenAPI Generator typescript-fetch. It generates a TypeScript client library for the Symbol blockchain REST API using OpenAPI specifications.

## Architecture

### Code Generation Pipeline
1. **Published OpenAPI spec** - The spec ships as the npm package
   [`@nemtus/symbol-openapi`](https://www.npmjs.com/package/@nemtus/symbol-openapi), a devDependency.
   `npm ci` installs the bundled `openapi3.yml` to `node_modules/@nemtus/symbol-openapi/openapi3.yml`,
   which `openapi:generate` consumes. The package is built and published from the
   `nemtus/symbol` mirror fork (`dev` branch, `openapi/`); building it locally is not needed here, so
   the vulnerable redocly/postman build tooling never enters this repo. Pinning + integrity are handled
   by `package-lock.json` and the `npm audit` gate (replacing the former `fetch-openapi.js` download +
   SHA-256 verification and the older `symbol-openapi` submodule build).
2. **OpenAPI Generator** - Uses the typescript-fetch generator at **7.26.0** with **no custom templates**
   (`openapi-generator-config.yml` sets only `useSingleRequestParameter: true`). There used to be a
   `custom-templates/` directory with a full copy of the 7.14.0 template set; 28 of its 29 files were
   byte-identical to stock and the 29th carried a one-line tweak that 7.26.0 no longer needs. Do not
   reintroduce a `templateDir` override without a reason that stock cannot cover: it freezes those templates
   at the generator version they were copied from and silently withholds every later upstream fix to them.
3. **Generated API code** (`src/api/`) - Auto-generated, DO NOT edit manually
4. **Build outputs** (`dist/`) - Contains CJS, ESM, and CDN bundles

### Key Components
- **API Routes** (`src/api/apis/`) - Generated API client classes for each endpoint group
- **Models** (`src/api/models/`) - Generated TypeScript interfaces and DTOs
- **Test Suites** (`tests/`) - Separate test directories for Node.js JavaScript, TypeScript, and browser CDN

## Development Commands

### Initial Setup
```bash
git clone git@github.com:nemtus/symbol-rest-api-client.git
cd symbol-rest-api-client/clients/typescript-fetch
```

### Build Commands
```bash
# Generate API client code (run in root directory)
npm ci                        # Installs @nemtus/symbol-openapi (the spec) into node_modules
npm run openapi:set:version   # Set OpenAPI generator version to 7.26.0
npm run openapi:generate      # Generate TypeScript code from node_modules/@nemtus/symbol-openapi/openapi3.yml
npm run build                 # Build CJS, ESM, and CDN bundles
```

To bump the OpenAPI spec, bump the `@nemtus/symbol-openapi` version in `package.json` (or merge the
Dependabot PR) and regenerate. Java is still required for the OpenAPI Generator itself.

### Test Commands
```bash
# Unit tests (in root directory)
npm run test

# Browser CDN tests
cd tests/browser-cdn
npm ci
npx playwright install chromium
npm run test

# Node.js JavaScript tests  (run `npm run build` in the client first)
cd tests/nodejs-javascript
npm ci
npm run test

# Node.js TypeScript tests  (run `npm run build` in the client first)
cd tests/nodejs-typescript
npm ci
npm run test
```

The `nodejs-*` suites import the package by its **published name**
(`@nemtus/symbol-rest-api-client-fetch`) to exercise it exactly as a consumer does. The
built `./dist` is copied into the suite's `node_modules` under that name by
`scripts/link-dist.mjs`, which each suite's `test` script runs before vitest — so the
build must exist first, and the copy must be refreshed after every `npm ci` (which
wipes `node_modules`).

**Do not** reintroduce this as a `"@nemtus/symbol-rest-api-client-fetch": "../../dist"`
dependency in a suite's `package.json`. `./dist` is an uncommitted build artifact, so
Dependabot's file fetcher cannot resolve it and aborts the **entire** update job with
`path_dependencies_not_reachable` — which, because `.github/dependabot.yml` groups several
manifests per job via `directories:` globs, silently blocked every npm update in this
repo (security updates included) from 2026-08 to 2026-10. The linking script exists
specifically to keep that path dependency out of the manifests.

### Quality Checks (lint / format / type-check)
```bash
npm run format:check   # Prettier check (code only; src/api & build outputs ignored)
npm run format         # Prettier write
npm run lint           # ESLint
npm run lint:fix       # ESLint --fix
npm run type:check     # tsc --noEmit
```
The `lint` CI job runs `format:check`, `lint`, and `type:check`. Generated `src/api`
and build outputs are excluded via `.eslintignore` / `.prettierignore`. When the
Claude Code hooks (`.claude/`) are enabled, edited files are auto-formatted and these
checks run on Stop.

### CI/CD Workflows

The project uses GitHub Actions. Both workflows build, lint, publish and run the live-node suites on a
single runtime: **Java 21** and **Node.js 26.x** (Active LTS since 2026-10-28). The one exception is
**`test-unit`**, which runs the deterministic suite on **22.x / 24.x / 26.x** to actually exercise the
`engines.node: ">=22"` floor this package publishes. `.nvmrc` pins local development to 26.

- **CI** (`ci-typescript-fetch.yml`) - On pull requests and pushes to `main`: builds the client, runs all test suites in parallel (unit, nodejs-javascript, nodejs-typescript, browser-cdn), plus a `dry-run-publish` and a `pinact` job that verifies every action is SHA-pinned. **Every** `npm ci` (in both CI and CD, all jobs including the privileged `publish` job) is wrapped with **Socket Firewall Free** (`sfw`, `SocketDev/action` in `firewall-free` mode — no account/token, SHA-pinned) to block confirmed-malicious packages, including transitive deps, at install time — coverage `npm audit` (known CVEs only) does not provide. Each install is a code-execution surface, so all are firewalled, not just the build gate.
- **CD** (`cd-typescript-fetch.yml`) - Triggered by pushing a `vX.Y.Z` tag (use `npm run release:patch|minor|major`, which runs `npm version` + `git push --follow-tags`); also runnable manually via `workflow_dispatch`. Builds, tests, then publishes to npm via **OIDC Trusted Publishing** (no `NPM_TOKEN`; provenance attached). The `publish` job is gated by the `npm-production` GitHub Environment (manual approval), so a tag push starts the pipeline but still waits for approval before publishing.

Both workflows:
1. Build once and share `dist/` via a uniquely-named artifact (`dist-fetch-{run_id}-{run_attempt}`); test jobs download it instead of rebuilding. The name deliberately omits the Java/Node versions: `build` runs on 26.x only, while `test-unit` fans out over 22.x/24.x/26.x, so a version-qualified name could not be matched by every downloading job.
2. Run tests in parallel (unit, nodejs-javascript, nodejs-typescript, browser-cdn).
3. Use `npm ci` for reproducible installs, gated by `npm audit` (fails on any vulnerability). `npm ci` installs lockfile-pinned versions regardless of age, so the `.npmrc` cooldown (`min-release-age`) does not gate it; npm's download cache (`~/.npm`) is cached instead of `node_modules`.
4. Pin all third-party actions to full commit SHAs (managed by `pinact` / `.pinact.yaml`); Dependabot updates npm + actions daily with a 7-day cooldown.

### Maintenance watchdog (`maintenance-watchdog.yml`)

A repo-root, daily (03:17 UTC) scheduled workflow — the only thing in this repo that runs
without a push. It exists because `main` has twice sat red for weeks unnoticed
(2026-06-30 -> 2026-08-13, 2026-08-13 -> 2026-10-31):

1. **`npm audit` on every manifest** (globbed from `clients/**/package-lock.json`, so new
   clients and new test suites are covered the day they land). CI/CD only run on
   `pull_request` / `push: main`, but a newly **published** advisory reds `main` with no
   commit — so without a schedule the breakage is first discovered by whoever opens the
   next PR and inherits a failure they did not cause.
2. **Dependabot updater health.** Updater failures gate no status check and appear only
   under Insights -> Dependency graph -> Dependabot. In 2026-08 they failed on 40+
   consecutive runs and no npm update of any kind landed for 2.5 months. The job flags only
   "every one of the last 10 runs failed" — a repo-level misconfiguration — so single
   transient failures stay quiet. Note that finer-grained `dependabot.yml` entries would NOT
   prevent this: Dependabot batches security updates across directories regardless.

Either failure files (or refreshes) one tracking issue rather than opening a new one daily.

**When `npm audit` and the cooldown conflict.** The gate fails on *any* severity, including
dev-only findings, while `.npmrc` `min-release-age=7` refuses versions published in the last
7 days. These can deadlock — widening an `overrides` entry to the only patched release then
fails with

```text
npm error code ETARGET
npm error notarget No matching version found for minimatch@>=11.0.1 with a date before <date>
```

Re-run that one command with `NPM_CONFIG_MIN_RELEASE_AGE=0`, and prefer the OLDEST patched
version that clears the advisory so the bypass stays as narrow as possible. Exempting a
known CVE — but not a routine bump — from the cooldown is the policy
`.github/dependabot.yml` already applies to Dependabot itself.

### Releasing

One action publishes a new version. From a clean tree on the release branch (usually `main`):

```bash
npm run release:patch   # 0.2.1 -> 0.2.2   (bug fixes)
npm run release:minor   # 0.2.1 -> 0.3.0   (backward-compatible features)
npm run release:major   # 0.2.1 -> 1.0.0   (breaking changes)
```

Each script runs `npm version <type>` (bumps `package.json` + `package-lock.json`,
commits, and creates a `vX.Y.Z` tag) then `git push --follow-tags`. The pushed tag
triggers the CD workflow (`on: push: tags: ['v*']`), which builds, tests, and then
waits on the `npm-production` Environment approval before publishing. `npm version`
requires a clean working tree, so commit or stash first.

## Important Notes

- **DO NOT manually edit** files in `src/api/` - they are auto-generated
- The OpenAPI spec comes from the `@nemtus/symbol-openapi` npm package (a devDependency), built and published from the `nemtus/symbol` mirror fork (`dev` branch, `openapi/`); it is pinned via `package-lock.json` and gated by `npm audit` (no HTTP fetch, no git submodule)
- Java is required for OpenAPI Generator CLI
- Artifacts in CI/CD use unique naming to prevent conflicts between concurrent builds
- **Socket supply-chain layer** (free for this public/OSS repo): `socket.yml` configures the Socket GitHub App, which comments on dependency-changing PRs with 70+ risk types (malware, install scripts, typosquats, etc.). It only activates after an org owner installs the Socket App via the GitHub Marketplace. In CI, Socket Firewall Free additionally blocks malicious installs (see the CI section). Both complement — not replace — `npm audit`, `.npmrc` (`min-release-age` / `ignore-scripts`), and pinact.

## AI assistant configuration

This repo is set up so multiple coding agents share the same project instructions.

- **Instructions are single-sourced in `CLAUDE.md`.** `AGENTS.md` (OpenAI Codex CLI)
  and `GEMINI.md` (Gemini CLI) are symlinks to `CLAUDE.md` at each level (root,
  `src/api/`, `tests/`). Edit `CLAUDE.md`; the others follow automatically.
- **Claude Code** (`.claude/settings.json`): `permissions` deny/ask rules plus hooks —
  a PreToolUse guard that blocks catastrophic/RCE shell commands (`.claude/hooks/guard-bash.mjs`),
  a PostToolUse Prettier/ESLint auto-format, and a Stop-time `type:check` + `lint`.
- **Gemini CLI** (`.gemini/settings.json`): `tools.exclude` blocks dangerous shell
  commands (`sudo`, `rm -rf /`, `rm -rf ~`, `mkfs`, `dd if=`, `chmod 777`). This is
  coarse prefix matching, so it is weaker than the Claude guard (e.g. it won't catch
  `curl … | sh`). You can additionally enable a container sandbox with
  `"tools": { "sandbox": "docker" }` if Docker/Podman is available. Settings keys are
  version-sensitive (current schema is nested under `tools`/`context`).
- **Codex CLI**: command safety is enforced by Codex's built-in OS sandbox and
  `approval_policy`, configured in the user-global `~/.codex/config.toml` (there is no
  committed per-project deny-list, so none is added here).
- **Claude Code-only**: the precise command guard, edit-time auto-format, and Stop-time
  checks have no committed-in-repo equivalent for Codex or Gemini and are intentionally
  not reimplemented for them.