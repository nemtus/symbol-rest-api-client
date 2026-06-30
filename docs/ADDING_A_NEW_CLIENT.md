# Adding a new client

This monorepo generates one REST API client per [OpenAPI Generator](https://openapi-generator.tech/docs/generators) target. Adding a language/stack is "add one `clients/<generator>/` directory plus its two workflows". Because directories are flat and named after the generator id, the steps are uniform across languages.

Replace `<generator>` below with the OpenAPI Generator id (e.g. `python`, `go`, `csharp`, `php`, `rust`, `dart`, `kotlin`, `java`, or another `typescript-*` variant).

## 1. Scaffold the client directory

```
clients/<generator>/
```

Put everything the client needs to build, test, and publish itself here — it must be **self-contained** (no root `package.json`). Use the existing `clients/typescript-fetch` / `clients/typescript-axios` as references for structure and scripts.

At minimum:

- A generate step that runs OpenAPI Generator against the spec. Both TS clients consume the spec from the **`@nemtus/symbol-openapi`** package (pinned, exact version) and generate into `src/api` (or the language's idiomatic location), e.g.:
  ```bash
  openapi-generator-cli generate \
    -i <spec path, e.g. node_modules/@nemtus/symbol-openapi/openapi3.yml> \
    -g <generator> \
    -o <output dir>
  ```
- A build/package step producing the publishable artifact for that registry.
- Tests (at least a deterministic unit suite; live-node suites optional and non-gating).
- The package manifest with metadata:
  - name following that registry's convention (npm: `@nemtus/symbol-rest-api-client-<variant>`; others per ecosystem),
  - **version `1.0.0`** to start,
  - repository pointing at `nemtus/symbol-rest-api-client` with the subdirectory (`clients/<generator>`),
  - a record of the exact targeted `@nemtus/symbol-openapi` spec version.
- A client-specific `CLAUDE.md` (with `AGENTS.md` / `GEMINI.md` symlinks) if the client needs agent guidance beyond the root one.

Generated code should be excluded from review/lint/format/spell tooling — the root `.coderabbit.yaml` already negates `clients/*/src/api/**`; mirror that in the client's own ESLint/Prettier ignores. Build outputs (`dist`, `lib`, `cdn`, `coverage`, `node_modules`) are already covered by the root `.gitignore`.

## 2. Versioning

Track the `@nemtus/symbol-openapi` spec at **MAJOR.MINOR**; use **PATCH** as this client's own revision lane (toolchain/security releases), independent of the other clients. Start at `1.0.0` and pin the spec exactly.

## 3. Release tagging

Wire the client's `release:*` scripts to `npm version <type> --no-git-tag-version && node ../../scripts/release.mjs`. The shared `scripts/release.mjs` commits the bump, creates the **prefixed tag** `<generator>-vX.Y.Z` (derived from the client directory name), and pushes — which is what the client's CD workflow triggers on, and keeps tags from colliding across clients. (Plain `npm version` does **not** create the git commit/tag when run from a monorepo subdirectory, so don't rely on `.npmrc` `tag-version-prefix`.)

## 4. CI/CD workflows

Copy the closest existing pair and rename:

```
.github/workflows/ci-<generator>.yml
.github/workflows/cd-<generator>.yml
```

When adapting (the TS workflows are the reference):

- **CI triggers**: run on every PR and every push to `main` — **no `paths:` filter**. A client can be broken by a change to repo-wide shared config (`.prettierrc`, `cspell.json`, `.claude/hooks`, …) that a per-client path filter would miss, and always-running keeps the gate check (below) reliable for branch protection. (At large client counts, revisit with a change-detection matrix that runs only affected clients plus all-on-shared-config-change.)
- **All jobs gate.** The live-mainnet integration suites (consumer + browser-cdn) are expected to pass, so they do **not** use `continue-on-error` — a real failure should block. (If a public node is transiently down, re-run the job.)
- **`ci-<generator>-gate`** job: a final aggregator with `needs:` **every** job in the workflow and `if: always()`, which fails if any job didn't succeed. This is the single check to require in the `main` ruleset (the per-workflow job names like `build` / `lint` collide across clients). Don't checkout in it; override its step `working-directory` to `${{ github.workspace }}`.
- **`defaults.run.working-directory`** → `clients/<generator>` so bare `run:` steps execute in the client.
- Inputs that are **workspace-relative and do NOT inherit `working-directory`** must be written in full: `hashFiles('clients/<generator>/...')`, artifact upload/download `path:`, per-sub-suite `working-directory:`, and any publish/pack directory.
- **CD trigger** → `tags: ['<generator>-v*']`; keep the per-workflow `concurrency` group. Add `<generator>-v*` to the `release tags` ruleset's target patterns so the new client's release tags are protected (restrict updates/deletions).
- Keep the supply-chain layers (Socket Firewall, `npm audit` / ecosystem equivalent, `pinact` SHA-pinning) and **pin every action to a full commit SHA**.
- **Publishing**: prefer the registry's OIDC/trusted-publishing flow gated by a **per-registry GitHub Environment** named `<registry>-production` (e.g. `npm-production` for the TypeScript clients, `pypi-production` for a Python client, `crates-production`, …). All clients of the same registry share one environment; you only add a new environment when you add a new registry. Avoid long-lived tokens where the registry supports OIDC.

## 5. Registry-side setup (manual, before first publish)

Most trusted-publishing schemes bind **package → repo + workflow filename + environment**, so configure the publisher on the registry for the new package pointing at `nemtus/symbol-rest-api-client`, workflow `cd-<generator>.yml`, environment `<registry>-production` (e.g. `npm-production`). Create/confirm that GitHub Environment (required reviewers). For npm specifically, note the package must be bootstrap-published once before its trusted publisher can be configured (see [PUBLISHING.md](PUBLISHING.md)). Publishing before this is configured will fail.

## 6. Wire it into the repo

- Add the client row to the root `README.md` (table + status badges).
- The root `.github/dependabot.yml` already covers `clients/*` and `clients/*/tests/*` via globs — no edit needed for npm clients; add an ecosystem entry if the new client uses a non-npm package manager.
- Confirm `.coderabbit.yaml` / `socket.yml` globs (`clients/*/...`) cover the new client.
