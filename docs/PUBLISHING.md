# Publishing & releasing

How to publish each client to its registry and run releases. The TypeScript clients
(`@nemtus/symbol-rest-api-client-fetch` / `-axios`) publish to npm via **OIDC Trusted
Publishing** (no long-lived token), gated by the `npm-production` GitHub Environment.

## Versioning recap

Each client's version tracks the [`@nemtus/symbol-openapi`](https://www.npmjs.com/package/@nemtus/symbol-openapi)
spec at **MAJOR.MINOR**; **PATCH** is that client's own revision lane (toolchain bumps,
security fixes) and advances independently per language. The exact targeted spec version
is pinned via the `@nemtus/symbol-openapi` devDependency and recorded in the client's
`package.json` (`symbolOpenapiVersion`).

## ⚠️ One-time bootstrap: npm OIDC can't do a brand-new package's first publish

npm Trusted Publishing only works for a package that **already exists** on the registry —
its settings page (where you configure the trusted publisher) can't be opened until the
package exists, and the very first OIDC publish of a non-existent package fails with 404.
So the **first version of each new package must be published manually**, after which all
subsequent releases go through CD/OIDC. (This is an npm limitation; PyPI allows
pre-registration, npm does not — see npm/cli#8544.)

---

## Step 1 — Bootstrap publish (one-time, per package)

Publish `1.0.0` from your machine using `npm login` + MFA (no manually-created token
needed). Run once for **each** client.

```bash
# Authenticate (MFA handled here). npm v11 defaults to web auth (opens a browser);
# on a headless host use: npm login --auth-type=legacy
npm login

# Build and publish from dist/ (uses the built dist/package.json with the real name)
cd clients/typescript-fetch
npm ci && npm run openapi:set:version && npm run openapi:generate && npm run build
cd dist
npm publish --access public
#   - scoped package's first publish requires --access public
#   - if your npm 2FA level is "Authorization and writes", publish prompts for an OTP
#     (or pass --otp=123456); "Authorization only" needs no per-publish OTP
#   - local publish can't attach --provenance (OIDC only); 1.0.1+ via CD will have it

# Repeat for axios
cd ../../typescript-axios
npm ci && npm run openapi:set:version && npm run openapi:generate && npm run build
cd dist
npm publish --access public

# Clean up the credentials npm login wrote to ~/.npmrc
npm logout
```

Prerequisite: your npm account is a member of the `@nemtus` org with publish rights and
satisfies the org's 2FA policy.

> Want provenance on the very first public version too? Instead of publishing `1.0.0`
> here, publish a throwaway version (e.g. `0.0.1`), do Steps 2–3, deprecate `0.0.1`, then
> publish `1.0.0` via CD (Step 4 with a `typescript-<gen>-v1.0.0` tag). More steps; skip
> unless you need it.

## Step 2 — Configure the npm Trusted Publisher (GUI only, per package)

Once the package exists, on npmjs.com open the package → **Settings** → **Trusted
Publisher** → **GitHub Actions**, and set:

| Field | `@nemtus/symbol-rest-api-client-fetch` | `@nemtus/symbol-rest-api-client-axios` |
| --- | --- | --- |
| Organization or user | `nemtus` | `nemtus` |
| Repository | `symbol-rest-api-client` | `symbol-rest-api-client` |
| Workflow filename (name only, no path) | `cd-typescript-fetch.yml` | `cd-typescript-axios.yml` |
| Environment name | `npm-production` | `npm-production` |
| Allowed actions | `npm publish` | `npm publish` |

There is no CLI for this — npm Trusted Publisher config is GUI-only.

## Step 3 — Create the `npm-production` GitHub Environment (approval gate)

The CD `publish` job declares `environment: npm-production`; this name must match the Trusted
Publisher's "Environment name".

**GUI:** repo → **Settings** → **Environments** → **New environment** → name `npm-production` →
**Configure** → enable **Required reviewers** (add yourself / a team) → optionally set
**Deployment branches and tags** to *Selected* and allow only `typescript-fetch-v*` /
`typescript-axios-v*` → **Save protection rules**.

**CLI (if your token has the rights; a scoped PAT may 403 — then use the GUI):**

```bash
gh api -X PUT repos/nemtus/symbol-rest-api-client/environments/npm-production
MYID=$(gh api users/YasunoriMATSUOKA --jq .id)
gh api -X PUT repos/nemtus/symbol-rest-api-client/environments/npm-production \
  -F "reviewers[][type]=User" -F "reviewers[][id]=$MYID"
```

## Step 3b — Branch & tag protection (GitHub rulesets)

One-time repo settings under **Settings → Rules → Rulesets**. These back the release
pipeline (immutable release tags) and keep `main` reviewed/tested.

**`main protection`** (branch ruleset, target = default branch):

- Restrict deletions ✅, Block force pushes ✅
- Require a pull request before merging ✅ (Required approvals: 1, Require review from Code Owners ✅ — see `.github/CODEOWNERS`)
- Require status checks to pass ✅ → add **`ci-fetch-gate`** and **`ci-axios-gate`** (optionally `CodeQL`). These are the per-workflow aggregator jobs; because CI is **not** path-filtered they always run, so requiring them never hangs. "Require branches to be up to date" is optional (off = lower friction).

**`release tags`** (tag ruleset) — makes published release tags immutable:

- Target tags (Include by pattern): `typescript-fetch-v*`, `typescript-axios-v*`
- Restrict updates ✅, Restrict deletions ✅ (Restrict creations left off so `npm run release:*` can push the tag; if you turn it on, add the release maintainers to the bypass list).

**`legacy tags (frozen)`** (tag ruleset) — freezes the imported pre-migration history markers:

- Target tags (Include by pattern): `typescript-fetch-legacy-v*`, `typescript-axios-legacy-v*`
- Restrict updates ✅, Restrict deletions ✅

> Adding a new client: add `<generator>-v*` to the **`release tags`** ruleset's include
> patterns, and add **`ci-<generator>-gate`** to **`main protection`**'s required checks.

## Step 4 — Releases (CD / OIDC, with provenance)

After Step 1 published `1.0.0`, the next release is `1.0.1`. From the client directory:

```bash
cd clients/typescript-fetch     # or clients/typescript-axios
npm run release:patch           # or release:minor / release:major
```

`npm version` bumps `package.json` + lockfile, commits, and tags using the client's
`.npmrc` `tag-version-prefix` → `typescript-fetch-vX.Y.Z`. `git push --follow-tags` pushes
the tag, which triggers `cd-typescript-fetch.yml`. The pipeline builds and tests, then the
`publish` job **waits for approval** in the `npm-production` environment:

- GitHub → **Actions** → the CD run → **Review deployments** → select `npm-production` → **Approve and deploy**.

On approval, npm exchanges the GitHub OIDC token for a short-lived credential and publishes
with `--provenance` (no `NPM_TOKEN`).

Spec-version bumps: when `@nemtus/symbol-openapi` moves to a new MAJOR.MINOR, bump the
devDependency, regenerate, and use `release:minor` / `release:major` so the client version
resets its PATCH at the new MAJOR.MINOR.

## Step 5 — Cutover: deprecate old packages, archive old repos

Only after the new packages are confirmed published and installable.

**Deprecate the old npm packages** (as a maintainer; omit the version range to mark all
versions). 2FA: add `--otp=`:

```bash
npm deprecate @nemtus/symbol-sdk-openapi-generator-typescript-fetch \
  "Renamed. Use @nemtus/symbol-rest-api-client-fetch — https://github.com/nemtus/symbol-rest-api-client"
npm deprecate @nemtus/symbol-sdk-openapi-generator-typescript-axios \
  "Renamed. Use @nemtus/symbol-rest-api-client-axios — https://github.com/nemtus/symbol-rest-api-client"
```

(GUI alternative: each old package → **Settings** → **Deprecate package**.)

**Archive the old GitHub repos** (consider adding a "moved to …" note to each old README
first):

- **GUI:** old repo → **Settings** → **Danger Zone** → **Archive this repository**.
- **CLI:** `gh repo archive nemtus/symbol-sdk-openapi-generator-typescript-fetch --yes`
  (and the axios repo). Needs admin; a scoped PAT may 403 → use the GUI.

## Checklist

1. ☐ `npm login` (MFA) → publish `1.0.0` from each client's `dist/` (`--access public`, `--otp` if prompted) → `npm logout`
2. ☐ Configure the npm Trusted Publisher for both packages (workflow filename differs; Environment = `npm-production`)
3. ☐ Create the `npm-production` GitHub Environment with required reviewers
4. ☐ Rulesets: `main protection` (require `ci-fetch-gate` / `ci-axios-gate`), `release tags`, `legacy tags (frozen)`
5. ☐ `npm run release:patch` → approve the CD run → confirm `1.0.1` published with provenance
6. ☐ `npm deprecate` both old packages → archive both old repos
