# MosaicRoutesApi

All URIs are relative to *https://reference.symboltest.net:3001*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getMosaic**](MosaicRoutesApi.md#getmosaic) | **GET** /mosaics/{mosaicId} | Get mosaic information |
| [**getMosaicMerkle**](MosaicRoutesApi.md#getmosaicmerkle) | **GET** /mosaics/{mosaicId}/merkle | Get mosaic Merkle information |
| [**getMosaics**](MosaicRoutesApi.md#getmosaics) | **POST** /mosaics | Get mosaics information for an array of mosaics |
| [**searchMosaics**](MosaicRoutesApi.md#searchmosaics) | **GET** /mosaics | Search mosaics |



## getMosaic

> MosaicInfoDTO getMosaic(mosaicId)

Get mosaic information

Retrieves the current on-chain state for a mosaic. The response includes the mosaic definition, such as supply, divisibility, owner address, duration, and behavior flags. 

### Example

```ts
import {
  Configuration,
  MosaicRoutesApi,
} from '';
import type { GetMosaicRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new MosaicRoutesApi();

  const body = {
    // string | Mosaic identifier encoded as a 16-character hexadecimal string.
    mosaicId: mosaicId_example,
  } satisfies GetMosaicRequest;

  try {
    const data = await api.getMosaic(body);
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
| **mosaicId** | `string` | Mosaic identifier encoded as a 16-character hexadecimal string. | [Defaults to `undefined`] |

### Return type

[**MosaicInfoDTO**](MosaicInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Mosaic information successfully retrieved. |  -  |
| **404** | The requested resource does not exist. Returned with HTTP status 404. The response body contains &#x60;code&#x60; (e.g. &#x60;ResourceNotFound&#x60;) and &#x60;message&#x60; with the missing resource identifier.  |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMosaicMerkle

> MerkleStateInfoDTO getMosaicMerkle(mosaicId)

Get mosaic Merkle information

Returns the [Merkle proof](https://docs.symbol.dev/concepts/data-validation.html#merkle-proof) for a mosaic.  Clients can use this information to verify that the mosaic state is included in the node\&#39;s state Merkle tree. If the supplied mosaic ID does not exist, the endpoint still returns a Merkle proof response, but it is a negative proof showing that no mosaic state entry exists for the requested mosaic ID. See [Data Validation](https://docs.symbol.dev/concepts/data-validation.html) for an overview of Patricia Merkle trees and state proofs on Symbol. 

### Example

```ts
import {
  Configuration,
  MosaicRoutesApi,
} from '';
import type { GetMosaicMerkleRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new MosaicRoutesApi();

  const body = {
    // string | Mosaic identifier encoded as a 16-character hexadecimal string.
    mosaicId: mosaicId_example,
  } satisfies GetMosaicMerkleRequest;

  try {
    const data = await api.getMosaicMerkle(body);
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
| **mosaicId** | `string` | Mosaic identifier encoded as a 16-character hexadecimal string. | [Defaults to `undefined`] |

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
| **200** | Mosaic Merkle information successfully retrieved. |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMosaics

> Array&lt;MosaicInfoDTO&gt; getMosaics(mosaicIds)

Get mosaics information for an array of mosaics

Retrieves the current on-chain state for multiple mosaics. The response includes only mosaics that were found, so its length can be smaller than the number of requested identifiers. Response entries are not guaranteed to preserve the order of the requested identifiers. 

### Example

```ts
import {
  Configuration,
  MosaicRoutesApi,
} from '';
import type { GetMosaicsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new MosaicRoutesApi();

  const body = {
    // MosaicIds | Request body containing mosaic identifiers.
    mosaicIds: ...,
  } satisfies GetMosaicsRequest;

  try {
    const data = await api.getMosaics(body);
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

[**Array&lt;MosaicInfoDTO&gt;**](MosaicInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Mosaic information successfully retrieved. |  -  |
| **400** | The provided argument was not an acceptable input. Returned with HTTP status 400. Typically indicates malformed request body (e.g. invalid JSON) or content that cannot be parsed. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidContent&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchMosaics

> MosaicPage searchMosaics(ownerAddress, pageSize, pageNumber, offset, order)

Search mosaics

Returns a paginated list of mosaics matching the given criteria. Results can be filtered by mosaic owner address. Standard pagination parameters apply. 

### Example

```ts
import {
  Configuration,
  MosaicRoutesApi,
} from '';
import type { SearchMosaicsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new MosaicRoutesApi();

  const body = {
    // string | Filter by owner address in Base32 format (include). (optional)
    ownerAddress: ownerAddress_example,
    // number | Select the number of entries to return per page. Values outside the allowed range are clamped to the schema minimum or maximum.  (optional)
    pageSize: 56,
    // number | Page number for numbered pagination (1-based).  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep `pageNumber=1` and advance pages by updating only `offset`. For numbered pagination flows, omit `offset` and advance pages by incrementing `pageNumber`.  (optional)
    pageNumber: 56,
    // string | Cursor for pagination. Provide the value of the sort field (`orderBy`) from the last entry of the previous page. **The offset type must match `orderBy`:** - `orderBy=id`: use the entry\'s `id` (ObjectId, 24-char hex). - `orderBy=height`: use the block height (string, e.g. `\"17592\"`). - `orderBy=balance`: use the mosaic balance amount (string, e.g. `\"1000000\"`).  Allowed `orderBy` values depend on the endpoint. If `orderBy` is omitted, `id` is used by default.  Set `offset` to the sort-field value of the last entry from the previous page. Across pages, this value decreases with `order=desc` and increases with `order=asc`.  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep `pageNumber=1` and advance pages by updating only `offset`. For numbered pagination flows, omit `offset` and advance pages by incrementing `pageNumber`.  (optional)
    offset: offset_example,
    // Order | Sort responses in ascending or descending order based on the collection property set on the param `orderBy`. If the request does not specify `orderBy`, REST returns the collection ordered by id. The default sort direction depends on the endpoint implementation.  (optional)
    order: ...,
  } satisfies SearchMosaicsRequest;

  try {
    const data = await api.searchMosaics(body);
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
| **pageSize** | `number` | Select the number of entries to return per page. Values outside the allowed range are clamped to the schema minimum or maximum.  | [Optional] [Defaults to `10`] |
| **pageNumber** | `number` | Page number for numbered pagination (1-based).  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep &#x60;pageNumber&#x3D;1&#x60; and advance pages by updating only &#x60;offset&#x60;. For numbered pagination flows, omit &#x60;offset&#x60; and advance pages by incrementing &#x60;pageNumber&#x60;.  | [Optional] [Defaults to `1`] |
| **offset** | `string` | Cursor for pagination. Provide the value of the sort field (&#x60;orderBy&#x60;) from the last entry of the previous page. **The offset type must match &#x60;orderBy&#x60;:** - &#x60;orderBy&#x3D;id&#x60;: use the entry\&#39;s &#x60;id&#x60; (ObjectId, 24-char hex). - &#x60;orderBy&#x3D;height&#x60;: use the block height (string, e.g. &#x60;\&quot;17592\&quot;&#x60;). - &#x60;orderBy&#x3D;balance&#x60;: use the mosaic balance amount (string, e.g. &#x60;\&quot;1000000\&quot;&#x60;).  Allowed &#x60;orderBy&#x60; values depend on the endpoint. If &#x60;orderBy&#x60; is omitted, &#x60;id&#x60; is used by default.  Set &#x60;offset&#x60; to the sort-field value of the last entry from the previous page. Across pages, this value decreases with &#x60;order&#x3D;desc&#x60; and increases with &#x60;order&#x3D;asc&#x60;.  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep &#x60;pageNumber&#x3D;1&#x60; and advance pages by updating only &#x60;offset&#x60;. For numbered pagination flows, omit &#x60;offset&#x60; and advance pages by incrementing &#x60;pageNumber&#x60;.  | [Optional] [Defaults to `undefined`] |
| **order** | `Order` | Sort responses in ascending or descending order based on the collection property set on the param &#x60;orderBy&#x60;. If the request does not specify &#x60;orderBy&#x60;, REST returns the collection ordered by id. The default sort direction depends on the endpoint implementation.  | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |

### Return type

[**MosaicPage**](MosaicPage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated list of matching mosaics. |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

