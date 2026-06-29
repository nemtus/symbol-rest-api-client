# @nemtus/symbol-rest-api-client-fetch

Symbol REST API client for TypeScript, generated with OpenAPI Generator (`typescript-fetch`). No runtime dependencies — uses the native Fetch API.

Part of the [`nemtus/symbol-rest-api-client`](https://github.com/nemtus/symbol-rest-api-client) monorepo (this package lives in `clients/typescript-fetch`). The sister package [`@nemtus/symbol-rest-api-client-axios`](https://www.npmjs.com/package/@nemtus/symbol-rest-api-client-axios) provides an axios-based variant.

> Formerly published as `@nemtus/symbol-sdk-openapi-generator-typescript-fetch` (now deprecated). This client targets the [`@nemtus/symbol-openapi`](https://www.npmjs.com/package/@nemtus/symbol-openapi) spec `1.0.5`.

Note: Currently, This is a very experimental level.

| Type | Status/Link |
| --------- | -------------------- |
| CI status | [![CI typescript-fetch](https://github.com/nemtus/symbol-rest-api-client/actions/workflows/ci-typescript-fetch.yml/badge.svg)](https://github.com/nemtus/symbol-rest-api-client/actions/workflows/ci-typescript-fetch.yml) |
| Latest npm publish status | [![CD typescript-fetch](https://github.com/nemtus/symbol-rest-api-client/actions/workflows/cd-typescript-fetch.yml/badge.svg)](https://github.com/nemtus/symbol-rest-api-client/actions/workflows/cd-typescript-fetch.yml) |
| npm package link | [https://www.npmjs.com/package/@nemtus/symbol-rest-api-client-fetch](https://www.npmjs.com/package/@nemtus/symbol-rest-api-client-fetch) |

## For package users

### Install

```bash
npm install @nemtus/symbol-rest-api-client-fetch
```

### Usage

Example with no requestParameters

```typescript
import {
  Configuration,
  ConfigurationParameters,
  NodeInfoDTO,
  NodeRoutesApi,
} from '@nemtus/symbol-rest-api-client-fetch';

const configurationParameters: ConfigurationParameters = {
  basePath: 'https://symbol-main-1.nemtus.com:3001',
};
const configuration: Configuration = new Configuration(configurationParameters);
const nodeRoutesApi: NodeRoutesApi = new NodeRoutesApi(configuration);
const response: NodeInfoDTO = await nodeRoutesApi.getNodeInfo();
console.dir(response, { depth: null });
/* Example: 
{
  version: 16777991,
  publicKey: '2CEFBCE2E5EA5DD5BA61B302C33002CDA1EDB122EFD18713AF02ABFA9C73A28C',
  networkGenerationHashSeed: '57F7DA205008026C776CB6AED843393F04CD458E0AA2D9F1D5F31A402072B2D6',
  roles: 3,
  port: 7900,
  networkIdentifier: 104,
  friendlyName: 'NEMTUS',
  host: 'symbol-main-1.nemtus.com',
  nodePublicKey: 'B56A3C73CA345A00CDDC84CFDF711CD67B2CCE10BEB82CB74835086774FE587F',
}
*/
```

Example with requestParameters

```typescript
import {
  AccountInfoDTO,
  AccountRoutesApi,
  AccountRoutesApiGetAccountInfoRequest,
  Configuration,
  ConfigurationParameters,
} from '@nemtus/symbol-rest-api-client-fetch';

const configurationParameters: ConfigurationParameters = {
  basePath: 'https://symbol-main-1.nemtus.com:3001',
};
const configuration: Configuration = new Configuration(configurationParameters);
const accountRoutesApi: AccountRoutesApi = new AccountRoutesApi(configuration);
const requestParameters: AccountRoutesApiGetAccountInfoRequest = {
  accountId: 'NCSIOEWE2364XXP65426W3RUGBRYOAGR3KMMCIA',
};
const response: AccountInfoDTO = await accountRoutesApi.getAccountInfo(requestParameters);
console.dir(response, { depth: null });
// Example: 
/*
{
  account: {
    version: 1,
    address: '68A48712C4D6FDCBDDFEEF35EB6E3430638700D1DA98C120',
    addressHeight: '1',
    publicKey: 'B86304B01045894ED9250B3DCD6313DC2EC0DD529B4E864EA376A2F341D3CFD4',
    publicKeyHeight: '447',
    accountType: 1,
    supplementalPublicKeys: {
      linked: {
        publicKey: '5F87A37D1EAD570F4D0FD4C11A9D5EED5ABE82EF2E992B97CCDAC84F241470E0'
      },
      vrf: {
        publicKey: '806E9448598C922B371DA8CFD7E16E8F5F53594B3AECE13F0708778A4480A752'
      }
    },
    activityBuckets: [
      {
        startHeight: '1447200',
        totalFeesPaid: '0',
        beneficiaryCount: 0,
        rawScore: '476538883720'
      },
      {
        startHeight: '1446480',
        totalFeesPaid: '0',
        beneficiaryCount: 1,
        rawScore: '476509686441'
      },
      {
        startHeight: '1445760',
        totalFeesPaid: '0',
        beneficiaryCount: 1,
        rawScore: '476481049034'
      },
      {
        startHeight: '1445040',
        totalFeesPaid: '0',
        beneficiaryCount: 1,
        rawScore: '476353869759'
      },
      {
        startHeight: '1444320',
        totalFeesPaid: '0',
        beneficiaryCount: 1,
        rawScore: '476325431930'
      }
    ],
    mosaics: [
      { id: '6BED913FA20223F8', amount: '516203401572' },
      { id: '24F7CF825DBCDD42', amount: '499999886' },
      { id: '310378C18A140D1B', amount: '923' },
      { id: '6AE25FA5E8CA0646', amount: '1000000000' }
    ],
    importance: '476509686441',
    importanceHeight: '1447200'
  },
  id: '60517BE5CCA17918A561056D'
}
*/
```

Example with CDN

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- Load from CDN or a single file bundled with webpack -->
    <script src="https://cdn.jsdelivr.net/npm/@nemtus/symbol-rest-api-client-fetch@1.0.0/index.min.js"></script>
  </head>
  <body>
    <script>
      (async () => {
        const symbolSdk = window.symbolSdkOpenAPIGeneratorTypeScriptFetch;
        const configurationParameters = {
          basePath: 'http://symbol-main-1.nemtus.com:3000',
        };
        const configuration = new symbolSdk.Configuration(configurationParameters);

        const nodeRoutesApi = new symbolSdk.NodeRoutesApi(configuration);
        const responseNodeInfo = await nodeRoutesApi.getNodeInfo();
        console.log(responseNodeInfo);

        const accountRoutesApi = new symbolSdk.AccountRoutesApi(configuration);
        const requestParameters = {
          accountId: 'NCSIOEWE2364XXP65426W3RUGBRYOAGR3KMMCIA',
        };
        const responseAccountInfo = await accountRoutesApi.getAccountInfo(requestParameters);
        console.log(responseAccountInfo);
      })();
    </script>
  </body>
</html>
```

## For Package Developers

### 0. Prerequisite

- Clone the monorepo and change into this client's directory

```bash
git clone git@github.com:nemtus/symbol-rest-api-client.git
cd symbol-rest-api-client/clients/typescript-fetch
```

or

```bash
git clone https://github.com/nemtus/symbol-rest-api-client.git
cd symbol-rest-api-client/clients/typescript-fetch
```

All commands below are run from this client directory (`clients/typescript-fetch`); there is no root `package.json`.

- Install Java

If you don't have java installed, you need to install it (required by the OpenAPI Generator).

### 1. Install the OpenAPI spec package

This project consumes the OpenAPI spec from the
[`@nemtus/symbol-openapi`](https://www.npmjs.com/package/@nemtus/symbol-openapi) npm package (a
devDependency), which is built and published from the [`nemtus/symbol`](https://github.com/nemtus/symbol/tree/dev/openapi)
mirror fork. `npm ci` installs the bundled `openapi3.yml` into
`node_modules/@nemtus/symbol-openapi/` — no HTTP fetch is required. (Previously this spec was
downloaded as a release asset, and before that built locally from a git submodule, which pulled in
vulnerable build tooling.)

```bash
npm ci
```

To bump the spec, bump the `@nemtus/symbol-openapi` version in `package.json` (or merge the
Dependabot PR) and regenerate.

### 2. Generate REST API Client Code

```bash
npm run openapi:set:version
npm run openapi:generate
npm run build
```

Then, REST API client code will be generated in `src/api` and bundled into `dist`.
Do not edit `src/api` manually.

### 3. Tests

#### Test for CDN with Playwright

```bash
cd tests/browser-cdn
npm ci
npx playwright install chromium
npm run test
```

#### Test for Node.js CommonJS JavaScript with vitest

```bash
cd tests/nodejs-javascript
npm ci
npm run test
```

#### Test for Node.js ES Modules TypeScript with vitest

```bash
cd tests/nodejs-typescript
npm ci
npm run test
```

## We use

- [@nemtus/symbol-openapi](https://www.npmjs.com/package/@nemtus/symbol-openapi) (built/published from the [nemtus/symbol](https://github.com/nemtus/symbol/tree/dev/openapi) mirror fork) for the `openapi3.yml` spec
- [OpenAPI Generator](https://openapi-generator.tech/) to generate REST API client codes
  - Especially [typescript-fetch Generator](https://openapi-generator.tech/docs/generators/typescript-fetch)
- [cosmos-client/cosmos-client-ts](https://github.com/cosmos-client/cosmos-client-ts) as a reference of package structure

We would like to thank all the contributors to the above tools.
