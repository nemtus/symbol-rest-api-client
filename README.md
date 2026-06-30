# symbol-rest-api-client

REST API client libraries for the [Symbol](https://symbol.dev) blockchain, generated from the [Symbol OpenAPI spec](https://www.npmjs.com/package/@nemtus/symbol-openapi) with [OpenAPI Generator](https://openapi-generator.tech). This is a **polyglot monorepo**: each client targets one generator (language + HTTP stack) and is published to that language's package registry.

> Note: experimental. APIs and packages may change.

## Clients

| Client | Directory | Package | Notes |
| --- | --- | --- | --- |
| TypeScript (fetch) | [`clients/typescript-fetch`](clients/typescript-fetch) | [`@nemtus/symbol-rest-api-client-fetch`](https://www.npmjs.com/package/@nemtus/symbol-rest-api-client-fetch) | No runtime deps; native Fetch API |
| TypeScript (axios) | [`clients/typescript-axios`](clients/typescript-axios) | [`@nemtus/symbol-rest-api-client-axios`](https://www.npmjs.com/package/@nemtus/symbol-rest-api-client-axios) | Ships `axios` as a runtime dependency |

More languages (Python, Go, C#, PHP, Rust, Dart, Kotlin, Java, …) are planned and slot into the same `clients/<generator>/` structure — see [docs/ADDING_A_NEW_CLIENT.md](docs/ADDING_A_NEW_CLIENT.md).

### Status

| Client | CI | Publish |
| --- | --- | --- |
| typescript-fetch | [![CI typescript-fetch](https://github.com/nemtus/symbol-rest-api-client/actions/workflows/ci-typescript-fetch.yml/badge.svg)](https://github.com/nemtus/symbol-rest-api-client/actions/workflows/ci-typescript-fetch.yml) | [![CD typescript-fetch](https://github.com/nemtus/symbol-rest-api-client/actions/workflows/cd-typescript-fetch.yml/badge.svg)](https://github.com/nemtus/symbol-rest-api-client/actions/workflows/cd-typescript-fetch.yml) |
| typescript-axios | [![CI typescript-axios](https://github.com/nemtus/symbol-rest-api-client/actions/workflows/ci-typescript-axios.yml/badge.svg)](https://github.com/nemtus/symbol-rest-api-client/actions/workflows/ci-typescript-axios.yml) | [![CD typescript-axios](https://github.com/nemtus/symbol-rest-api-client/actions/workflows/cd-typescript-axios.yml/badge.svg)](https://github.com/nemtus/symbol-rest-api-client/actions/workflows/cd-typescript-axios.yml) |

## Repository layout

```
clients/
  typescript-fetch/   # @nemtus/symbol-rest-api-client-fetch
  typescript-axios/   # @nemtus/symbol-rest-api-client-axios
  _shared/            # (optional) cross-language / per-language shared assets
docs/
  ADDING_A_NEW_CLIENT.md
.github/workflows/    # one ci-/cd-<generator>.yml per client + codeql
```

Directories are flat and named after the OpenAPI generator id (`typescript-fetch`, `typescript-axios`, …), so the id maps 1:1 to the directory. There is **no root `package.json`**; each client is self-contained — run its build/test commands from inside `clients/<generator>/`. Repo-wide editor/agent and supply-chain config (`.editorconfig`, `.prettierrc`, `cspell.json`, `.coderabbit.yaml`, `socket.yml`, `.pinact.yaml`, `.claude/`, `.gemini/`, `.vscode/`) lives at the root; build/lint config lives per client.

## Versioning

Each client's version tracks the [`@nemtus/symbol-openapi`](https://www.npmjs.com/package/@nemtus/symbol-openapi) spec at the **MAJOR.MINOR** level; the **PATCH** is that client's own revision lane (toolchain bumps, security fixes) and advances independently per language. The exact targeted spec version is pinned via each client's `@nemtus/symbol-openapi` devDependency and recorded in its `package.json` (`symbolOpenapiVersion`) and README.

## Releasing

Per client, from inside `clients/<generator>/`:

```bash
npm run release:patch   # or :minor / :major
```

This bumps the version and pushes a per-client tag (`typescript-fetch-vX.Y.Z` / `typescript-axios-vX.Y.Z`), which triggers that client's `cd-<generator>.yml` workflow. Publishing uses npm [OIDC Trusted Publishing](https://docs.npmjs.com/trusted-publishers) (no token) and is gated by the `release` GitHub Environment.

See [docs/PUBLISHING.md](docs/PUBLISHING.md) for the full runbook, including the one-time bootstrap publish a brand-new package needs before OIDC can take over, the Trusted Publisher / `release` environment setup, and the deprecate/archive cutover.

## History

This repo consolidates two formerly separate repositories, preserving their full git history under `clients/typescript-fetch/` and `clients/typescript-axios/`. The original `v0.x` tags are namespaced as `typescript-fetch-legacy-v*` / `typescript-axios-legacy-v*`. The predecessor packages `@nemtus/symbol-sdk-openapi-generator-typescript-{fetch,axios}` are deprecated.

## Contributing

See [.github/contributing.md](.github/contributing.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md). Security policy: [SECURITY.md](SECURITY.md).

## License

[MIT](LICENSE) © NEMTUS
