# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) and other coding agents
when working in this repository.

## Project Overview

`symbol-rest-api-client` is a **polyglot monorepo** that hosts REST API client libraries
for the [Symbol](https://symbol.dev) blockchain, generated from the Symbol OpenAPI spec
via [OpenAPI Generator](https://openapi-generator.tech). Each client targets one generator
(language + HTTP stack) and is published as its own package to the relevant registry.

This repo consolidates two formerly separate repositories — preserving their full git
history under `clients/typescript-fetch/` and `clients/typescript-axios/` (the original
`v0.x` tags are namespaced as `typescript-fetch-legacy-v*` / `typescript-axios-legacy-v*`).

## Layout

```
clients/
  typescript-fetch/   → @nemtus/symbol-rest-api-client-fetch   (no runtime deps; native fetch)
  typescript-axios/   → @nemtus/symbol-rest-api-client-axios   (axios runtime dependency)
  _shared/            → (optional) cross-language / per-language shared assets
```

Directories are **flat and named after the OpenAPI generator id** (`typescript-fetch`,
`typescript-axios`, and future `python`, `go`, `csharp`, …). The generator id maps 1:1 to
the directory name, so adding a language is "add one `clients/<generator>/` directory".
See `docs/ADDING_A_NEW_CLIENT.md`.

## Where configuration lives

- **Repo-wide (root):** editor/agent tooling and repo-singleton services —
  `.editorconfig`, `.prettierrc`, `.pinact.yaml`, `cspell.json`, `.coderabbit.yaml`,
  `socket.yml`, `.gitignore`, `.claude/` (settings + hooks), `.gemini/`, `.vscode/`,
  and this `CLAUDE.md`.
- **Per-client (`clients/<generator>/`):** everything tied to that package's build/lint —
  `package.json` / lockfile, `.npmrc`, `tsconfig.json`, `vitest.config.mts`,
  `webpack.config.js`, `eslint.config.js`, `.prettierignore`, build scripts, `src/`,
  `tests/`, and a client-specific `CLAUDE.md`. **Read the per-client `CLAUDE.md` for the
  details of the client you are working on.**

There is no root `package.json`; run npm commands inside the relevant `clients/<generator>/`.

## Versioning

Client versions track the `@nemtus/symbol-openapi` spec at the **MAJOR.MINOR** level; the
**PATCH** is each client's own revision lane (toolchain bumps, security fixes) and advances
independently per language. The exact spec version a client targets is pinned via its
`@nemtus/symbol-openapi` devDependency and noted in the client README.

## Releasing

Per-client, via tag prefixes: `typescript-fetch-v*` / `typescript-axios-v*`, and always
through a PR — nothing is pushed to `main` directly and no one pushes tags by hand. Run
`npm run release:*` on a clean, up-to-date `main` inside a client: `scripts/release.mjs`
bumps with `npm version --no-git-tag-version`, commits on a `release/<generator>-vX.Y.Z`
branch, pushes it, and opens a PR. Merging the PR releases: once CI passes on the merge
commit, `release-tag.yml` creates the `<generator>-vX.Y.Z` tag on it and dispatches that
client's `cd-<generator>.yml`. Publishing uses npm OIDC Trusted Publishing (no token),
gated by the `npm-production` environment approval.

## Repo-wide workflows

Besides the per-client `ci-`/`cd-` pairs, three workflows cover the whole monorepo:
`release-tag.yml` (turns a merged release PR into a tag plus a CD dispatch; see Releasing),
`codeql-analysis.yml` (JS/TS analysis over the entire checkout) and
`maintenance-watchdog.yml` — a daily scheduled job that runs `npm audit` across every
`clients/**/package-lock.json` and checks that Dependabot's updater is still succeeding.
It is the only scheduled signal for rot that no push would reveal; see either client's
`CLAUDE.md` for what it watches and why.

## AI assistant configuration

Coding agents share one set of project instructions, single-sourced in `CLAUDE.md` files;
`AGENTS.md` (Codex CLI) and `GEMINI.md` (Gemini CLI) are symlinks to the `CLAUDE.md` at each
level (root and each client). Edit `CLAUDE.md`; the others follow.

Root `.claude/settings.json` wires permissions plus three monorepo-aware hooks in
`.claude/hooks/`: `guard-bash.mjs` (PreToolUse footgun blocker), `format-edited.mjs`
(PostToolUse — resolves the edited file's owning client and runs that client's
Prettier/ESLint), and `check.mjs` (Stop — runs `type:check` + `lint` in each installed
client).
