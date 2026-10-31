# MetadataRoutesApi

All URIs are relative to *https://reference.symboltest.net:3001*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getMetadata**](MetadataRoutesApi.md#getmetadata) | **GET** /metadata/{compositeHash} | Get metadata information |
| [**getMetadataEntries**](MetadataRoutesApi.md#getmetadataentries) | **POST** /metadata | Get metadata information for an array of composite hashes |
| [**getMetadataMerkle**](MetadataRoutesApi.md#getmetadatamerkle) | **GET** /metadata/{compositeHash}/merkle | Get metadata Merkle information |
| [**getMetadataMetal**](MetadataRoutesApi.md#getmetadatametal) | **GET** /metadata/metal/{metalId} | Get Metal metadata binary data |
| [**searchMetadataEntries**](MetadataRoutesApi.md#searchmetadataentries) | **GET** /metadata | Search metadata entries |



## getMetadata

> MetadataInfoDTO getMetadata(compositeHash)

Get metadata information

Returns the metadata entry associated with the given composite hash.

### Example

```ts
import {
  Configuration,
  MetadataRoutesApi,
} from '';
import type { GetMetadataRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new MetadataRoutesApi();

  const body = {
    // string | Composite hash encoded as a 64-character hexadecimal string.
    compositeHash: compositeHash_example,
  } satisfies GetMetadataRequest;

  try {
    const data = await api.getMetadata(body);
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

[**MetadataInfoDTO**](MetadataInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Metadata entry successfully retrieved. |  -  |
| **404** | The requested resource does not exist. Returned with HTTP status 404. The response body contains &#x60;code&#x60; (e.g. &#x60;ResourceNotFound&#x60;) and &#x60;message&#x60; with the missing resource identifier.  |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMetadataEntries

> Array&lt;MetadataInfoDTO&gt; getMetadataEntries(compositeHashes)

Get metadata information for an array of composite hashes

Returns the metadata entries associated with the given composite hashes.

### Example

```ts
import {
  Configuration,
  MetadataRoutesApi,
} from '';
import type { GetMetadataEntriesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new MetadataRoutesApi();

  const body = {
    // CompositeHashes
    compositeHashes: ...,
  } satisfies GetMetadataEntriesRequest;

  try {
    const data = await api.getMetadataEntries(body);
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

[**Array&lt;MetadataInfoDTO&gt;**](MetadataInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Metadata entries successfully retrieved. |  -  |
| **400** | The provided argument was not an acceptable input. Returned with HTTP status 400. Typically indicates malformed request body (e.g. invalid JSON) or content that cannot be parsed. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidContent&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMetadataMerkle

> MerkleStateInfoDTO getMetadataMerkle(compositeHash)

Get metadata Merkle information

Returns the Merkle proof for the metadata state entry associated with the given composite hash.

### Example

```ts
import {
  Configuration,
  MetadataRoutesApi,
} from '';
import type { GetMetadataMerkleRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new MetadataRoutesApi();

  const body = {
    // string | Composite hash encoded as a 64-character hexadecimal string.
    compositeHash: compositeHash_example,
  } satisfies GetMetadataMerkleRequest;

  try {
    const data = await api.getMetadataMerkle(body);
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
| **200** | Merkle proof for the requested metadata state entry. |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMetadataMetal

> Blob getMetadataMetal(metalId, mimeType, fileName, download)

Get Metal metadata binary data

Returns the decoded binary payload stored in Metal metadata entries identified by the given metal id. Metal is a convention for storing chunked binary payloads in metadata entries. See the [metal-on-symbol repository](https://github.com/OPENSPHERE-Inc/metal-on-symbol). The response content type is derived from the stored Metal seal when available, or defaults to &#x60;application/octet-stream&#x60;. Optional query parameters can override the response headers for content type and filename. 

### Example

```ts
import {
  Configuration,
  MetadataRoutesApi,
} from '';
import type { GetMetadataMetalRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new MetadataRoutesApi();

  const body = {
    // string | Metal identifier: Base58-encoded composite hash of the first metadata chunk. 
    metalId: metalId_example,
    // string | Override the MIME type of the response. (optional)
    mimeType: image/png,
    // string | Override the filename in the Content-Disposition header. (optional)
    fileName: fileName_example,
    // boolean | When true, sets Content-Disposition to attachment. (optional)
    download: true,
  } satisfies GetMetadataMetalRequest;

  try {
    const data = await api.getMetadataMetal(body);
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
| **metalId** | `string` | Metal identifier: Base58-encoded composite hash of the first metadata chunk.  | [Defaults to `undefined`] |
| **mimeType** | `string` | Override the MIME type of the response. | [Optional] [Defaults to `undefined`] |
| **fileName** | `string` | Override the filename in the Content-Disposition header. | [Optional] [Defaults to `undefined`] |
| **download** | `boolean` | When true, sets Content-Disposition to attachment. | [Optional] [Defaults to `false`] |

### Return type

**Blob**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Binary payload of the Metal metadata. |  * Content-Disposition - Indicates whether the payload is returned inline or as an attachment and, when available, includes the resolved filename.  <br>  * Content-MetalText - Original decoded Metal seal text associated with the payload, when the payload was stored with a Metal seal.  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchMetadataEntries

> MetadataPage searchMetadataEntries(sourceAddress, targetAddress, scopedMetadataKey, targetId, metadataType, pageSize, pageNumber, offset, order)

Search metadata entries

Returns a paginated list of metadata entries.  Results can be filtered by source address, target address, scoped metadata key, target ID, and metadata type. 

### Example

```ts
import {
  Configuration,
  MetadataRoutesApi,
} from '';
import type { SearchMetadataEntriesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new MetadataRoutesApi();

  const body = {
    // string | Filter by address sending the metadata entry (include). (optional)
    sourceAddress: sourceAddress_example,
    // string | Filter by target address in Base32 (include). (optional)
    targetAddress: targetAddress_example,
    // string | Filter by metadata key (include). (optional)
    scopedMetadataKey: scopedMetadataKey_example,
    // string | Filter by namespace or mosaic ID (include). (optional)
    targetId: 0DC67FBE1CAD29E3,
    // MetadataTypeEnum | Filter by metadata type (include): - `0`: Account metadata - `1`: Mosaic metadata - `2`: Namespace metadata  (optional)
    metadataType: ...,
    // number | Select the number of entries to return per page. Values outside the allowed range are clamped to the schema minimum or maximum.  (optional)
    pageSize: 56,
    // number | Page number for numbered pagination (1-based).  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep `pageNumber=1` and advance pages by updating only `offset`. For numbered pagination flows, omit `offset` and advance pages by incrementing `pageNumber`.  (optional)
    pageNumber: 56,
    // string | Cursor for pagination. Provide the value of the sort field (`orderBy`) from the last entry of the previous page. **The offset type must match `orderBy`:** - `orderBy=id`: use the entry\'s `id` (ObjectId, 24-char hex). - `orderBy=height`: use the block height (string, e.g. `\"17592\"`). - `orderBy=balance`: use the mosaic balance amount (string, e.g. `\"1000000\"`).  Allowed `orderBy` values depend on the endpoint. If `orderBy` is omitted, `id` is used by default.  Set `offset` to the sort-field value of the last entry from the previous page. Across pages, this value decreases with `order=desc` and increases with `order=asc`.  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep `pageNumber=1` and advance pages by updating only `offset`. For numbered pagination flows, omit `offset` and advance pages by incrementing `pageNumber`.  (optional)
    offset: offset_example,
    // Order | Sort responses in ascending or descending order based on the collection property set on the param `orderBy`. If the request does not specify `orderBy`, REST returns the collection ordered by id. The default sort direction depends on the endpoint implementation.  (optional)
    order: ...,
  } satisfies SearchMetadataEntriesRequest;

  try {
    const data = await api.searchMetadataEntries(body);
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
| **sourceAddress** | `string` | Filter by address sending the metadata entry (include). | [Optional] [Defaults to `undefined`] |
| **targetAddress** | `string` | Filter by target address in Base32 (include). | [Optional] [Defaults to `undefined`] |
| **scopedMetadataKey** | `string` | Filter by metadata key (include). | [Optional] [Defaults to `undefined`] |
| **targetId** | `string` | Filter by namespace or mosaic ID (include). | [Optional] [Defaults to `undefined`] |
| **metadataType** | `MetadataTypeEnum` | Filter by metadata type (include): - &#x60;0&#x60;: Account metadata - &#x60;1&#x60;: Mosaic metadata - &#x60;2&#x60;: Namespace metadata  | [Optional] [Defaults to `undefined`] [Enum: 0, 1, 2] |
| **pageSize** | `number` | Select the number of entries to return per page. Values outside the allowed range are clamped to the schema minimum or maximum.  | [Optional] [Defaults to `10`] |
| **pageNumber** | `number` | Page number for numbered pagination (1-based).  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep &#x60;pageNumber&#x3D;1&#x60; and advance pages by updating only &#x60;offset&#x60;. For numbered pagination flows, omit &#x60;offset&#x60; and advance pages by incrementing &#x60;pageNumber&#x60;.  | [Optional] [Defaults to `1`] |
| **offset** | `string` | Cursor for pagination. Provide the value of the sort field (&#x60;orderBy&#x60;) from the last entry of the previous page. **The offset type must match &#x60;orderBy&#x60;:** - &#x60;orderBy&#x3D;id&#x60;: use the entry\&#39;s &#x60;id&#x60; (ObjectId, 24-char hex). - &#x60;orderBy&#x3D;height&#x60;: use the block height (string, e.g. &#x60;\&quot;17592\&quot;&#x60;). - &#x60;orderBy&#x3D;balance&#x60;: use the mosaic balance amount (string, e.g. &#x60;\&quot;1000000\&quot;&#x60;).  Allowed &#x60;orderBy&#x60; values depend on the endpoint. If &#x60;orderBy&#x60; is omitted, &#x60;id&#x60; is used by default.  Set &#x60;offset&#x60; to the sort-field value of the last entry from the previous page. Across pages, this value decreases with &#x60;order&#x3D;desc&#x60; and increases with &#x60;order&#x3D;asc&#x60;.  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep &#x60;pageNumber&#x3D;1&#x60; and advance pages by updating only &#x60;offset&#x60;. For numbered pagination flows, omit &#x60;offset&#x60; and advance pages by incrementing &#x60;pageNumber&#x60;.  | [Optional] [Defaults to `undefined`] |
| **order** | `Order` | Sort responses in ascending or descending order based on the collection property set on the param &#x60;orderBy&#x60;. If the request does not specify &#x60;orderBy&#x60;, REST returns the collection ordered by id. The default sort direction depends on the endpoint implementation.  | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |

### Return type

[**MetadataPage**](MetadataPage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated metadata entries matching the supplied filters. |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

