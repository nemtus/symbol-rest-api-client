# NamespaceRoutesApi

All URIs are relative to *https://reference.symboltest.net:3001*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAccountsNames**](NamespaceRoutesApi.md#getaccountsnames) | **POST** /namespaces/account/names | Get readable names for a set of accounts |
| [**getMosaicsNames**](NamespaceRoutesApi.md#getmosaicsnames) | **POST** /namespaces/mosaic/names | Get readable names for a set of mosaics |
| [**getNamespace**](NamespaceRoutesApi.md#getnamespace) | **GET** /namespaces/{namespaceId} | Get namespace information |
| [**getNamespaceMerkle**](NamespaceRoutesApi.md#getnamespacemerkle) | **GET** /namespaces/{namespaceId}/merkle | Get namespace Merkle information |
| [**getNamespacesNames**](NamespaceRoutesApi.md#getnamespacesnames) | **POST** /namespaces/names | Get readable names for a set of namespaces |
| [**searchNamespaces**](NamespaceRoutesApi.md#searchnamespaces) | **GET** /namespaces | Search namespaces |



## getAccountsNames

> AccountsNamesDTO getAccountsNames(addresses)

Get readable names for a set of accounts

Resolves namespace names linked to account addresses.  Submit an array of addresses in the request body. For each address, the response returns the namespace names currently linked to that account. 

### Example

```ts
import {
  Configuration,
  NamespaceRoutesApi,
} from '';
import type { GetAccountsNamesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new NamespaceRoutesApi();

  const body = {
    // Addresses | Request body containing account addresses in Base32 format.
    addresses: ...,
  } satisfies GetAccountsNamesRequest;

  try {
    const data = await api.getAccountsNames(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **addresses** | [Addresses](Addresses.md) | Request body containing account addresses in Base32 format. | |

### Return type

[**AccountsNamesDTO**](AccountsNamesDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Account names successfully retrieved. |  -  |
| **400** | The provided argument was not an acceptable input. Returned with HTTP status 400. Typically indicates malformed request body (e.g. invalid JSON) or content that cannot be parsed. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidContent&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMosaicsNames

> MosaicsNamesDTO getMosaicsNames(mosaicIds)

Get readable names for a set of mosaics

Resolves namespace names linked to mosaic identifiers.  Submit an array of mosaic identifiers in the request body. For each requested mosaic identifier, the response returns one entry in the same order as the request. Each entry contains the namespace names currently linked to that identifier. An empty &#x60;names&#x60; array means no namespace aliases were resolved for that identifier. 

### Example

```ts
import {
  Configuration,
  NamespaceRoutesApi,
} from '';
import type { GetMosaicsNamesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new NamespaceRoutesApi();

  const body = {
    // MosaicIds | Request body containing mosaic identifiers.
    mosaicIds: ...,
  } satisfies GetMosaicsNamesRequest;

  try {
    const data = await api.getMosaicsNames(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **mosaicIds** | [MosaicIds](MosaicIds.md) | Request body containing mosaic identifiers. | |

### Return type

[**MosaicsNamesDTO**](MosaicsNamesDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Mosaic names successfully resolved. |  -  |
| **400** | The provided argument was not an acceptable input. Returned with HTTP status 400. Typically indicates malformed request body (e.g. invalid JSON) or content that cannot be parsed. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidContent&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getNamespace

> NamespaceInfoDTO getNamespace(namespaceId)

Get namespace information

Retrieves the current on-chain state for a namespace.

### Example

```ts
import {
  Configuration,
  NamespaceRoutesApi,
} from '';
import type { GetNamespaceRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new NamespaceRoutesApi();

  const body = {
    // string | Namespace identifier encoded as a 16-character hexadecimal string.
    namespaceId: namespaceId_example,
  } satisfies GetNamespaceRequest;

  try {
    const data = await api.getNamespace(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **namespaceId** | `string` | Namespace identifier encoded as a 16-character hexadecimal string. | [Defaults to `undefined`] |

### Return type

[**NamespaceInfoDTO**](NamespaceInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Namespace information successfully retrieved. |  -  |
| **404** | The requested resource does not exist. Returned with HTTP status 404. The response body contains &#x60;code&#x60; (e.g. &#x60;ResourceNotFound&#x60;) and &#x60;message&#x60; with the missing resource identifier.  |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getNamespaceMerkle

> MerkleStateInfoDTO getNamespaceMerkle(namespaceId)

Get namespace Merkle information

Returns the [Merkle proof](https://docs.symbol.dev/concepts/data-validation.html#merkle-proof) for a namespace.  Clients can use this information to verify that the namespace state is included in the node\&#39;s state Merkle tree. If the supplied namespace ID does not exist, the endpoint still returns a Merkle proof response, but it is a negative proof showing that no namespace state entry exists for the requested namespace ID. See [Data Validation](https://docs.symbol.dev/concepts/data-validation.html) for an overview of Patricia Merkle trees and state proofs on Symbol. 

### Example

```ts
import {
  Configuration,
  NamespaceRoutesApi,
} from '';
import type { GetNamespaceMerkleRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new NamespaceRoutesApi();

  const body = {
    // string | Namespace identifier encoded as a 16-character hexadecimal string.
    namespaceId: namespaceId_example,
  } satisfies GetNamespaceMerkleRequest;

  try {
    const data = await api.getNamespaceMerkle(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **namespaceId** | `string` | Namespace identifier encoded as a 16-character hexadecimal string. | [Defaults to `undefined`] |

### Return type

[**MerkleStateInfoDTO**](MerkleStateInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Namespace Merkle state proof successfully retrieved. |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getNamespacesNames

> Array&lt;NamespaceNameDTO&gt; getNamespacesNames(namespaceIds)

Get readable names for a set of namespaces

Resolves human-readable namespace names for namespace identifiers.  Submit an array of namespace identifiers in the request body. For each matching identifier, the response returns the namespace name. When a matching identifier is a subnamespace, the response will also include its parent namespace entry and parent namespace identifier. Identifiers that cannot be resolved are omitted from the response. 

### Example

```ts
import {
  Configuration,
  NamespaceRoutesApi,
} from '';
import type { GetNamespacesNamesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new NamespaceRoutesApi();

  const body = {
    // NamespaceIds | Request body containing namespace identifiers.
    namespaceIds: ...,
  } satisfies GetNamespacesNamesRequest;

  try {
    const data = await api.getNamespacesNames(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **namespaceIds** | [NamespaceIds](NamespaceIds.md) | Request body containing namespace identifiers. | |

### Return type

[**Array&lt;NamespaceNameDTO&gt;**](NamespaceNameDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Namespace names successfully resolved. |  -  |
| **400** | The provided argument was not an acceptable input. Returned with HTTP status 400. Typically indicates malformed request body (e.g. invalid JSON) or content that cannot be parsed. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidContent&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchNamespaces

> NamespacePage searchNamespaces(ownerAddress, registrationType, level0, aliasType, pageSize, pageNumber, offset, order)

Search namespaces

Returns a paginated list of namespaces matching the given criteria.

### Example

```ts
import {
  Configuration,
  NamespaceRoutesApi,
} from '';
import type { SearchNamespacesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new NamespaceRoutesApi();

  const body = {
    // string | Filter by owner address in Base32 format (include). (optional)
    ownerAddress: ownerAddress_example,
    // NamespaceRegistrationTypeEnum | Filter by namespace registration type (include). - 0: Root namespace. - 1: Subnamespace.  (optional)
    registrationType: ...,
    // string | Filter by the root namespace identifier (include). (optional)
    level0: level0_example,
    // AliasTypeEnum | Filter by alias type (include). - 0: Namespace has no alias. - 1: Namespace is linked to a mosaic ID. - 2: Namespace is linked to an address.  (optional)
    aliasType: ...,
    // number | Select the number of entries to return per page. Values outside the allowed range are clamped to the schema minimum or maximum.  (optional)
    pageSize: 56,
    // number | Page number for numbered pagination (1-based).  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep `pageNumber=1` and advance pages by updating only `offset`. For numbered pagination flows, omit `offset` and advance pages by incrementing `pageNumber`.  (optional)
    pageNumber: 56,
    // string | Cursor for pagination. Provide the value of the sort field (`orderBy`) from the last entry of the previous page. **The offset type must match `orderBy`:** - `orderBy=id`: use the entry\'s `id` (ObjectId, 24-char hex). - `orderBy=height`: use the block height (string, e.g. `\"17592\"`). - `orderBy=balance`: use the mosaic balance amount (string, e.g. `\"1000000\"`).  Allowed `orderBy` values depend on the endpoint. If `orderBy` is omitted, `id` is used by default.  Set `offset` to the sort-field value of the last entry from the previous page. Across pages, this value decreases with `order=desc` and increases with `order=asc`.  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep `pageNumber=1` and advance pages by updating only `offset`. For numbered pagination flows, omit `offset` and advance pages by incrementing `pageNumber`.  (optional)
    offset: offset_example,
    // Order | Sort responses in ascending or descending order based on the collection property set on the param `orderBy`. If the request does not specify `orderBy`, REST returns the collection ordered by id. The default sort direction depends on the endpoint implementation.  (optional)
    order: ...,
  } satisfies SearchNamespacesRequest;

  try {
    const data = await api.searchNamespaces(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **ownerAddress** | `string` | Filter by owner address in Base32 format (include). | [Optional] [Defaults to `undefined`] |
| **registrationType** | `NamespaceRegistrationTypeEnum` | Filter by namespace registration type (include). - 0: Root namespace. - 1: Subnamespace.  | [Optional] [Defaults to `undefined`] [Enum: 0, 1] |
| **level0** | `string` | Filter by the root namespace identifier (include). | [Optional] [Defaults to `undefined`] |
| **aliasType** | `AliasTypeEnum` | Filter by alias type (include). - 0: Namespace has no alias. - 1: Namespace is linked to a mosaic ID. - 2: Namespace is linked to an address.  | [Optional] [Defaults to `undefined`] [Enum: 0, 1, 2] |
| **pageSize** | `number` | Select the number of entries to return per page. Values outside the allowed range are clamped to the schema minimum or maximum.  | [Optional] [Defaults to `10`] |
| **pageNumber** | `number` | Page number for numbered pagination (1-based).  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep &#x60;pageNumber&#x3D;1&#x60; and advance pages by updating only &#x60;offset&#x60;. For numbered pagination flows, omit &#x60;offset&#x60; and advance pages by incrementing &#x60;pageNumber&#x60;.  | [Optional] [Defaults to `1`] |
| **offset** | `string` | Cursor for pagination. Provide the value of the sort field (&#x60;orderBy&#x60;) from the last entry of the previous page. **The offset type must match &#x60;orderBy&#x60;:** - &#x60;orderBy&#x3D;id&#x60;: use the entry\&#39;s &#x60;id&#x60; (ObjectId, 24-char hex). - &#x60;orderBy&#x3D;height&#x60;: use the block height (string, e.g. &#x60;\&quot;17592\&quot;&#x60;). - &#x60;orderBy&#x3D;balance&#x60;: use the mosaic balance amount (string, e.g. &#x60;\&quot;1000000\&quot;&#x60;).  Allowed &#x60;orderBy&#x60; values depend on the endpoint. If &#x60;orderBy&#x60; is omitted, &#x60;id&#x60; is used by default.  Set &#x60;offset&#x60; to the sort-field value of the last entry from the previous page. Across pages, this value decreases with &#x60;order&#x3D;desc&#x60; and increases with &#x60;order&#x3D;asc&#x60;.  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep &#x60;pageNumber&#x3D;1&#x60; and advance pages by updating only &#x60;offset&#x60;. For numbered pagination flows, omit &#x60;offset&#x60; and advance pages by incrementing &#x60;pageNumber&#x60;.  | [Optional] [Defaults to `undefined`] |
| **order** | `Order` | Sort responses in ascending or descending order based on the collection property set on the param &#x60;orderBy&#x60;. If the request does not specify &#x60;orderBy&#x60;, REST returns the collection ordered by id. The default sort direction depends on the endpoint implementation.  | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |

### Return type

[**NamespacePage**](NamespacePage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated list of matching namespaces. |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

