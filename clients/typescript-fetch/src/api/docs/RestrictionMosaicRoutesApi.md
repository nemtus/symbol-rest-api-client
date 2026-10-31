# RestrictionMosaicRoutesApi

All URIs are relative to *https://reference.symboltest.net:3001*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getMosaicRestrictions**](RestrictionMosaicRoutesApi.md#getmosaicrestrictions) | **GET** /restrictions/mosaic/{compositeHash} | Get mosaic restrictions |
| [**getMosaicRestrictionsBatch**](RestrictionMosaicRoutesApi.md#getmosaicrestrictionsbatch) | **POST** /restrictions/mosaic | Get mosaic restrictions for an array of composite hashes |
| [**getMosaicRestrictionsMerkle**](RestrictionMosaicRoutesApi.md#getmosaicrestrictionsmerkle) | **GET** /restrictions/mosaic/{compositeHash}/merkle | Get mosaic restrictions Merkle information |
| [**searchMosaicRestrictions**](RestrictionMosaicRoutesApi.md#searchmosaicrestrictions) | **GET** /restrictions/mosaic | Search mosaic restrictions |



## getMosaicRestrictions

> MosaicRestrictionDTO getMosaicRestrictions(compositeHash)

Get mosaic restrictions

Returns the mosaic restriction entry associated with the given composite hash.

### Example

```ts
import {
  Configuration,
  RestrictionMosaicRoutesApi,
} from '';
import type { GetMosaicRestrictionsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new RestrictionMosaicRoutesApi();

  const body = {
    // string | Composite hash encoded as a 64-character hexadecimal string.
    compositeHash: compositeHash_example,
  } satisfies GetMosaicRestrictionsRequest;

  try {
    const data = await api.getMosaicRestrictions(body);
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
| **compositeHash** | `string` | Composite hash encoded as a 64-character hexadecimal string. | [Defaults to `undefined`] |

### Return type

[**MosaicRestrictionDTO**](MosaicRestrictionDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Mosaic restriction entry successfully retrieved. |  -  |
| **404** | The requested resource does not exist. Returned with HTTP status 404. The response body contains &#x60;code&#x60; (e.g. &#x60;ResourceNotFound&#x60;) and &#x60;message&#x60; with the missing resource identifier.  |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMosaicRestrictionsBatch

> Array&lt;MosaicRestrictionDTO&gt; getMosaicRestrictionsBatch(compositeHashes)

Get mosaic restrictions for an array of composite hashes

Returns mosaic restriction entries for the given composite hashes.

### Example

```ts
import {
  Configuration,
  RestrictionMosaicRoutesApi,
} from '';
import type { GetMosaicRestrictionsBatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new RestrictionMosaicRoutesApi();

  const body = {
    // CompositeHashes
    compositeHashes: ...,
  } satisfies GetMosaicRestrictionsBatchRequest;

  try {
    const data = await api.getMosaicRestrictionsBatch(body);
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
| **compositeHashes** | [CompositeHashes](CompositeHashes.md) |  | |

### Return type

[**Array&lt;MosaicRestrictionDTO&gt;**](MosaicRestrictionDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Mosaic restriction entries successfully retrieved. |  -  |
| **400** | The provided argument was not an acceptable input. Returned with HTTP status 400. Typically indicates malformed request body (e.g. invalid JSON) or content that cannot be parsed. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidContent&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMosaicRestrictionsMerkle

> MerkleStateInfoDTO getMosaicRestrictionsMerkle(compositeHash)

Get mosaic restrictions Merkle information

Returns the Merkle state proof for the mosaic restriction entry associated with the given composite hash. If no mosaic restriction entry exists for the supplied composite hash, the endpoint still returns a Merkle proof response, but it is a negative proof showing that no mosaic restriction state entry exists for the requested composite hash. 

### Example

```ts
import {
  Configuration,
  RestrictionMosaicRoutesApi,
} from '';
import type { GetMosaicRestrictionsMerkleRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new RestrictionMosaicRoutesApi();

  const body = {
    // string | Composite hash encoded as a 64-character hexadecimal string.
    compositeHash: compositeHash_example,
  } satisfies GetMosaicRestrictionsMerkleRequest;

  try {
    const data = await api.getMosaicRestrictionsMerkle(body);
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
| **compositeHash** | `string` | Composite hash encoded as a 64-character hexadecimal string. | [Defaults to `undefined`] |

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
| **200** | Merkle proof for the requested mosaic restriction entry. |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchMosaicRestrictions

> MosaicRestrictionsPage searchMosaicRestrictions(mosaicId, entryType, targetAddress, pageSize, pageNumber, offset, order)

Search mosaic restrictions

Returns a paginated list of mosaic restriction entries, optionally filtered by mosaic ID, entry type, and target address.

### Example

```ts
import {
  Configuration,
  RestrictionMosaicRoutesApi,
} from '';
import type { SearchMosaicRestrictionsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new RestrictionMosaicRoutesApi();

  const body = {
    // string | Filter by mosaic identifier (include). (optional)
    mosaicId: mosaicId_example,
    // MosaicRestrictionEntryTypeEnum | Filter by entry type (include). (optional)
    entryType: ...,
    // string | Filter by target address in Base32 (include). (optional)
    targetAddress: targetAddress_example,
    // number | Select the number of entries to return per page. Values outside the allowed range are clamped to the schema minimum or maximum.  (optional)
    pageSize: 56,
    // number | Page number for numbered pagination (1-based).  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep `pageNumber=1` and advance pages by updating only `offset`. For numbered pagination flows, omit `offset` and advance pages by incrementing `pageNumber`.  (optional)
    pageNumber: 56,
    // string | Cursor for pagination. Provide the value of the sort field (`orderBy`) from the last entry of the previous page. **The offset type must match `orderBy`:** - `orderBy=id`: use the entry\'s `id` (ObjectId, 24-char hex). - `orderBy=height`: use the block height (string, e.g. `\"17592\"`). - `orderBy=balance`: use the mosaic balance amount (string, e.g. `\"1000000\"`).  Allowed `orderBy` values depend on the endpoint. If `orderBy` is omitted, `id` is used by default.  Set `offset` to the sort-field value of the last entry from the previous page. Across pages, this value decreases with `order=desc` and increases with `order=asc`.  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep `pageNumber=1` and advance pages by updating only `offset`. For numbered pagination flows, omit `offset` and advance pages by incrementing `pageNumber`.  (optional)
    offset: offset_example,
    // Order | Sort responses in ascending or descending order based on the collection property set on the param `orderBy`. If the request does not specify `orderBy`, REST returns the collection ordered by id. The default sort direction depends on the endpoint implementation.  (optional)
    order: ...,
  } satisfies SearchMosaicRestrictionsRequest;

  try {
    const data = await api.searchMosaicRestrictions(body);
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
| **mosaicId** | `string` | Filter by mosaic identifier (include). | [Optional] [Defaults to `undefined`] |
| **entryType** | `MosaicRestrictionEntryTypeEnum` | Filter by entry type (include). | [Optional] [Defaults to `undefined`] [Enum: 0, 1] |
| **targetAddress** | `string` | Filter by target address in Base32 (include). | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Select the number of entries to return per page. Values outside the allowed range are clamped to the schema minimum or maximum.  | [Optional] [Defaults to `10`] |
| **pageNumber** | `number` | Page number for numbered pagination (1-based).  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep &#x60;pageNumber&#x3D;1&#x60; and advance pages by updating only &#x60;offset&#x60;. For numbered pagination flows, omit &#x60;offset&#x60; and advance pages by incrementing &#x60;pageNumber&#x60;.  | [Optional] [Defaults to `1`] |
| **offset** | `string` | Cursor for pagination. Provide the value of the sort field (&#x60;orderBy&#x60;) from the last entry of the previous page. **The offset type must match &#x60;orderBy&#x60;:** - &#x60;orderBy&#x3D;id&#x60;: use the entry\&#39;s &#x60;id&#x60; (ObjectId, 24-char hex). - &#x60;orderBy&#x3D;height&#x60;: use the block height (string, e.g. &#x60;\&quot;17592\&quot;&#x60;). - &#x60;orderBy&#x3D;balance&#x60;: use the mosaic balance amount (string, e.g. &#x60;\&quot;1000000\&quot;&#x60;).  Allowed &#x60;orderBy&#x60; values depend on the endpoint. If &#x60;orderBy&#x60; is omitted, &#x60;id&#x60; is used by default.  Set &#x60;offset&#x60; to the sort-field value of the last entry from the previous page. Across pages, this value decreases with &#x60;order&#x3D;desc&#x60; and increases with &#x60;order&#x3D;asc&#x60;.  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep &#x60;pageNumber&#x3D;1&#x60; and advance pages by updating only &#x60;offset&#x60;. For numbered pagination flows, omit &#x60;offset&#x60; and advance pages by incrementing &#x60;pageNumber&#x60;.  | [Optional] [Defaults to `undefined`] |
| **order** | `Order` | Sort responses in ascending or descending order based on the collection property set on the param &#x60;orderBy&#x60;. If the request does not specify &#x60;orderBy&#x60;, REST returns the collection ordered by id. The default sort direction depends on the endpoint implementation.  | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |

### Return type

[**MosaicRestrictionsPage**](MosaicRestrictionsPage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated list of matching mosaic restriction entries. |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

