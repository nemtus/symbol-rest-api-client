# tests — consumer integration tests

## Test strategy (big picture)

| Layer | Location | Runner | Deterministic? | Purpose |
|---|---|---|---|---|
| Export smoke | `src/index.spec.ts`, `src/cdn.spec.ts` | vitest | ✅ | public surface re-export invariant, constructors, Factory/Fp helpers |
| Behaviour (mocked transport) | `src/client.spec.ts` | vitest | ✅ | request building, `response.data`, `RequiredError`, non-2xx `AxiosError`, via an injected custom axios adapter |
| Every endpoint (mocked transport) | `src/all-endpoints.spec.ts` | vitest | ✅ | introspects all `*RoutesApi` classes and asserts **every** method issues one well-formed request; auto-covers new endpoints on regeneration |
| Consumer / live | `tests/nodejs-javascript`, `tests/nodejs-typescript`, `tests/browser-cdn` | vitest / Playwright | ❌ live node | the published artifact loads and works in real runtimes (CJS / ESM / browser-CDN) |

The deterministic `src/**` specs (run by the **test-unit** and **lint** CI jobs) are
the primary gate. The consumer/live jobs hit an external mainnet node and ALSO gate the
run — they are no longer `continue-on-error`, so a transient outage of the public node
means re-running the job, not ignoring a red check. When adding hand-written logic to the
SDK, prefer the mocked-transport layer.

The mocked transport for this (axios) variant is a custom `axios.create({ adapter })`
instance passed as the **3rd `*RoutesApi` constructor argument**; the adapter records
the request config and returns a canned response (axios still applies its default
`validateStatus`, so non-2xx rejects with `AxiosError`).

These are **separate npm projects**, not part of the root workspace. Each has its
own `package.json` / `package-lock.json` / `node_modules` and consumes the built
SDK from `../../dist`, so the root must be built first (`npm run build`) before
running them. axios works natively in Node, so the consumer tests need no `node-fetch`
injection; they read the DTO from `response.data`.

**How `../../dist` is consumed (do not change back to a `file:` dependency).** The
`nodejs-*` projects import the SDK by its published name
(`@nemtus/symbol-rest-api-client-axios`); `scripts/link-dist.mjs` COPIES `../../dist`
into the project's `node_modules` under that name, and each project's `test` script runs
it before vitest. It must run after `npm ci` (which wipes `node_modules`) — the `test`
script ordering guarantees that locally and in CI, so no workflow step is needed.
This replaced a `"@nemtus/symbol-rest-api-client-axios": "../../dist"` dependency:
`dist/` is an uncommitted build artifact, so Dependabot's file fetcher could not resolve
it and aborted the **entire** update job with `path_dependencies_not_reachable` — which,
because `.github/dependabot.yml` groups several manifests per job via `directories:`
globs, silently blocked every npm update in this repo (security updates included) from
2026-08 to 2026-10.

**`axios` is declared by the nodejs projects themselves.** The SDK ships `axios` as a
runtime dependency, so the copied `dist` has to be able to resolve it from inside this
project's tree. Each `nodejs-*` project therefore lists `axios` in its own `package.json`,
with **the same range as the client's `package.json`** — keep the two in sync when that
range changes.

This is also why `link-dist.mjs` copies instead of symlinking, and **must not be
"optimised" back to a symlink.** Node resolves a module to its REAL path before walking up
for `node_modules`, so a symlinked package searches `clients/typescript-axios/dist/…` ->
`clients/typescript-axios/node_modules` -> `clients/node_modules` -> repo root, and never
looks in `tests/<suite>/node_modules`. The suite's own locked axios is then invisible and
the import dies with `Cannot find module 'axios'` (require stack rooted at
`clients/typescript-axios/dist/cjs/api/api.js`). It *appears* to work locally because
`clients/typescript-axios/node_modules` is usually populated by the client's own `npm ci`
and quietly satisfies the lookup — the CI test jobs have no such tree, so only CI catches
it. Copying is precisely what npm's `install-links=true` did for the old `file:`
dependency. This also keeps `axios` lockfile-pinned, under the `npm audit --package-lock-only`
gate, and visible to Dependabot, none of which held when it arrived only as a transitive
of the path dependency. (This supersedes the old `install-links=true` setting in those
projects' `.npmrc`, which only mattered for `file:` deps.) The `browser-cdn` project loads
the CDN bundle over `file://` and has no SDK package dependency, so it needs none of this.
The fetch variant needs none of it either (it has no runtime dependencies).

Subprojects:
- `nodejs-javascript/` — CommonJS consumer, vitest. Run: `npm ci && npm test`.
- `nodejs-typescript/` — TypeScript consumer, vitest. Run: `npm ci && npm test`.
- `browser-cdn/` — loads the CDN bundle in a real browser via Playwright. CI runs it
  inside the `mcr.microsoft.com/playwright:<version>-noble` container, whose tag MUST
  match the `@playwright/test` / `playwright` version. That tag is **derived
  automatically**: the `detect-playwright-version` job in
  `.github/workflows/{ci,cd}-typescript-axios.yml` reads the locked `playwright`
  version from `package-lock.json` and the container uses
  `v${{ needs.detect-playwright-version.outputs.version }}-noble`. So a Dependabot
  Playwright bump needs **no** manual container-tag edit — it just works. (Dependabot is
  intentionally NOT set to ignore Playwright, so security-update PRs are not hidden.)

Conventions:
- Each project has a local `vitest.config.mts` so it does NOT inherit the client's
  `vitest.config.mts` (which targets `src/**` and enables v8 coverage). Do not remove it.
- Tests hit a **live Symbol mainnet node** (`https://symbol-main-1.nemtus.com:3001`).
  Expected values and the relaxing of volatile fields live in one place,
  `tests/_shared/fixtures.cjs` (`expect` is injected so the same helpers work in
  vitest and Playwright). Only genuinely stable identity fields are matched exactly;
  values that drift — node `version`, account-response `id`, token holdings,
  activity buckets, importance — are asserted by type/shape. Edit the fixture, not
  the per-project copies.
- Use `npm ci` (not `npm install`) to match CI. `npm test` runs
  `node ../../../../scripts/link-dist.mjs && vitest run` in the `nodejs-*` projects
  (`playwright test` in `browser-cdn`).

## Coverage

`vitest.config.mts` keeps coverage **enabled** but it is **not a meaningful metric
here**: the real client is generated under `src/api/**` and excluded, so coverage
effectively measures only the tiny `src/index.ts` / `src/cdn.ts`. Do not gate on it
or read into the number; assess testing by the strategy table above.
