# HashLockRoutesApi

All URIs are relative to *https://reference.symboltest.net:3001*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getHashLock**](HashLockRoutesApi.md#gethashlock) | **GET** /lock/hash/{hash} | Get hash lock information |
| [**getHashLockMerkle**](HashLockRoutesApi.md#gethashlockmerkle) | **GET** /lock/hash/{hash}/merkle | Get hash lock Merkle information |
| [**getHashLocks**](HashLockRoutesApi.md#gethashlocks) | **POST** /lock/hash | Get hash lock information for an array of hashes |
| [**searchAccountHashLocks**](HashLockRoutesApi.md#searchaccounthashlocks) | **GET** /account/{address}/lock/hash | Search hash lock entries by account |
| [**searchHashLock**](HashLockRoutesApi.md#searchhashlock) | **GET** /lock/hash | Search hash lock entries |



## getHashLock

> HashLockInfoDTO getHashLock(hash)

Get hash lock information

Returns the hash lock entry associated with the given aggregate bonded transaction hash.

### Example

```ts
import {
  Configuration,
  HashLockRoutesApi,
} from '';
import type { GetHashLockRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HashLockRoutesApi();

  const body = {
    // string | Filter by hash (include).
    hash: hash_example,
  } satisfies GetHashLockRequest;

  try {
    const data = await api.getHashLock(body);
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
| **hash** | `string` | Filter by hash (include). | [Defaults to `undefined`] |

### Return type

[**HashLockInfoDTO**](HashLockInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Hash lock entry successfully retrieved. |  -  |
| **404** | The requested resource does not exist. Returned with HTTP status 404. The response body contains &#x60;code&#x60; (e.g. &#x60;ResourceNotFound&#x60;) and &#x60;message&#x60; with the missing resource identifier.  |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getHashLockMerkle

> MerkleStateInfoDTO getHashLockMerkle(hash)

Get hash lock Merkle information

Returns the state Merkle proof for the hash lock entry associated with the given aggregate bonded transaction hash.

### Example

```ts
import {
  Configuration,
  HashLockRoutesApi,
} from '';
import type { GetHashLockMerkleRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HashLockRoutesApi();

  const body = {
    // string | Filter by hash (include).
    hash: hash_example,
  } satisfies GetHashLockMerkleRequest;

  try {
    const data = await api.getHashLockMerkle(body);
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
| **hash** | `string` | Filter by hash (include). | [Defaults to `undefined`] |

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
| **200** | Merkle proof for the hash lock entry successfully retrieved. |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getHashLocks

> Array&lt;HashLockInfoDTO&gt; getHashLocks(transactionHashes)

Get hash lock information for an array of hashes

Returns hash lock entries for the given array of aggregate bonded transaction hashes.

### Example

```ts
import {
  Configuration,
  HashLockRoutesApi,
} from '';
import type { GetHashLocksRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HashLockRoutesApi();

  const body = {
    // TransactionHashes | Request body containing an array of transaction hashes to look up.
    transactionHashes: ...,
  } satisfies GetHashLocksRequest;

  try {
    const data = await api.getHashLocks(body);
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
| **transactionHashes** | [TransactionHashes](TransactionHashes.md) | Request body containing an array of transaction hashes to look up. | |

### Return type

[**Array&lt;HashLockInfoDTO&gt;**](HashLockInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Hash lock entries successfully retrieved. |  -  |
| **400** | The provided argument was not an acceptable input. Returned with HTTP status 400. Typically indicates malformed request body (e.g. invalid JSON) or content that cannot be parsed. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidContent&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchAccountHashLocks

> HashLockPage searchAccountHashLocks(address, pageSize, pageNumber, offset, order)

Search hash lock entries by account

Returns a paginated list of hash lock entries created by the given account address.

### Example

```ts
import {
  Configuration,
  HashLockRoutesApi,
} from '';
import type { SearchAccountHashLocksRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HashLockRoutesApi();

  const body = {
    // string | Account address in Base32-encoded format.
    address: address_example,
    // number | Select the number of entries to return per page. Values outside the allowed range are clamped to the schema minimum or maximum.  (optional)
    pageSize: 56,
    // number | Page number for numbered pagination (1-based).  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep `pageNumber=1` and advance pages by updating only `offset`. For numbered pagination flows, omit `offset` and advance pages by incrementing `pageNumber`.  (optional)
    pageNumber: 56,
    // string | Cursor for pagination. Provide the value of the sort field (`orderBy`) from the last entry of the previous page. **The offset type must match `orderBy`:** - `orderBy=id`: use the entry\'s `id` (ObjectId, 24-char hex). - `orderBy=height`: use the block height (string, e.g. `\"17592\"`). - `orderBy=balance`: use the mosaic balance amount (string, e.g. `\"1000000\"`).  Allowed `orderBy` values depend on the endpoint. If `orderBy` is omitted, `id` is used by default.  Set `offset` to the sort-field value of the last entry from the previous page. Across pages, this value decreases with `order=desc` and increases with `order=asc`.  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep `pageNumber=1` and advance pages by updating only `offset`. For numbered pagination flows, omit `offset` and advance pages by incrementing `pageNumber`.  (optional)
    offset: offset_example,
    // Order | Sort responses in ascending or descending order based on the collection property set on the param `orderBy`. If the request does not specify `orderBy`, REST returns the collection ordered by id. The default sort direction depends on the endpoint implementation.  (optional)
    order: ...,
  } satisfies SearchAccountHashLocksRequest;

  try {
    const data = await api.searchAccountHashLocks(body);
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
| **address** | `string` | Account address in Base32-encoded format. | [Defaults to `undefined`] |
| **pageSize** | `number` | Select the number of entries to return per page. Values outside the allowed range are clamped to the schema minimum or maximum.  | [Optional] [Defaults to `10`] |
| **pageNumber** | `number` | Page number for numbered pagination (1-based).  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep &#x60;pageNumber&#x3D;1&#x60; and advance pages by updating only &#x60;offset&#x60;. For numbered pagination flows, omit &#x60;offset&#x60; and advance pages by incrementing &#x60;pageNumber&#x60;.  | [Optional] [Defaults to `1`] |
| **offset** | `string` | Cursor for pagination. Provide the value of the sort field (&#x60;orderBy&#x60;) from the last entry of the previous page. **The offset type must match &#x60;orderBy&#x60;:** - &#x60;orderBy&#x3D;id&#x60;: use the entry\&#39;s &#x60;id&#x60; (ObjectId, 24-char hex). - &#x60;orderBy&#x3D;height&#x60;: use the block height (string, e.g. &#x60;\&quot;17592\&quot;&#x60;). - &#x60;orderBy&#x3D;balance&#x60;: use the mosaic balance amount (string, e.g. &#x60;\&quot;1000000\&quot;&#x60;).  Allowed &#x60;orderBy&#x60; values depend on the endpoint. If &#x60;orderBy&#x60; is omitted, &#x60;id&#x60; is used by default.  Set &#x60;offset&#x60; to the sort-field value of the last entry from the previous page. Across pages, this value decreases with &#x60;order&#x3D;desc&#x60; and increases with &#x60;order&#x3D;asc&#x60;.  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep &#x60;pageNumber&#x3D;1&#x60; and advance pages by updating only &#x60;offset&#x60;. For numbered pagination flows, omit &#x60;offset&#x60; and advance pages by incrementing &#x60;pageNumber&#x60;.  | [Optional] [Defaults to `undefined`] |
| **order** | `Order` | Sort responses in ascending or descending order based on the collection property set on the param &#x60;orderBy&#x60;. If the request does not specify &#x60;orderBy&#x60;, REST returns the collection ordered by id. The default sort direction depends on the endpoint implementation.  | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |

### Return type

[**HashLockPage**](HashLockPage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated list of hash lock entries for the requested account. |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchHashLock

> HashLockPage searchHashLock(address, pageSize, pageNumber, offset, order)

Search hash lock entries

Returns a paginated list of hash lock entries, optionally filtered by owner address.

### Example

```ts
import {
  Configuration,
  HashLockRoutesApi,
} from '';
import type { SearchHashLockRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HashLockRoutesApi();

  const body = {
    // string | Filter by address (include), in Base32 format.  The exact meaning depends on the endpoint: - transaction search: returns transactions where the address appears as the sender, recipient, or cosigner - account search: matches the account address - account restriction search: matches the restricted account address - hash lock and secret lock search: matches the lock owner address  On transaction search endpoints, this filter cannot be combined with `recipientAddress` and `signerPublicKey`.  (optional)
    address: address_example,
    // number | Select the number of entries to return per page. Values outside the allowed range are clamped to the schema minimum or maximum.  (optional)
    pageSize: 56,
    // number | Page number for numbered pagination (1-based).  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep `pageNumber=1` and advance pages by updating only `offset`. For numbered pagination flows, omit `offset` and advance pages by incrementing `pageNumber`.  (optional)
    pageNumber: 56,
    // string | Cursor for pagination. Provide the value of the sort field (`orderBy`) from the last entry of the previous page. **The offset type must match `orderBy`:** - `orderBy=id`: use the entry\'s `id` (ObjectId, 24-char hex). - `orderBy=height`: use the block height (string, e.g. `\"17592\"`). - `orderBy=balance`: use the mosaic balance amount (string, e.g. `\"1000000\"`).  Allowed `orderBy` values depend on the endpoint. If `orderBy` is omitted, `id` is used by default.  Set `offset` to the sort-field value of the last entry from the previous page. Across pages, this value decreases with `order=desc` and increases with `order=asc`.  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep `pageNumber=1` and advance pages by updating only `offset`. For numbered pagination flows, omit `offset` and advance pages by incrementing `pageNumber`.  (optional)
    offset: offset_example,
    // Order | Sort responses in ascending or descending order based on the collection property set on the param `orderBy`. If the request does not specify `orderBy`, REST returns the collection ordered by id. The default sort direction depends on the endpoint implementation.  (optional)
    order: ...,
  } satisfies SearchHashLockRequest;

  try {
    const data = await api.searchHashLock(body);
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
| **address** | `string` | Filter by address (include), in Base32 format.  The exact meaning depends on the endpoint: - transaction search: returns transactions where the address appears as the sender, recipient, or cosigner - account search: matches the account address - account restriction search: matches the restricted account address - hash lock and secret lock search: matches the lock owner address  On transaction search endpoints, this filter cannot be combined with &#x60;recipientAddress&#x60; and &#x60;signerPublicKey&#x60;.  | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Select the number of entries to return per page. Values outside the allowed range are clamped to the schema minimum or maximum.  | [Optional] [Defaults to `10`] |
| **pageNumber** | `number` | Page number for numbered pagination (1-based).  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep &#x60;pageNumber&#x3D;1&#x60; and advance pages by updating only &#x60;offset&#x60;. For numbered pagination flows, omit &#x60;offset&#x60; and advance pages by incrementing &#x60;pageNumber&#x60;.  | [Optional] [Defaults to `1`] |
| **offset** | `string` | Cursor for pagination. Provide the value of the sort field (&#x60;orderBy&#x60;) from the last entry of the previous page. **The offset type must match &#x60;orderBy&#x60;:** - &#x60;orderBy&#x3D;id&#x60;: use the entry\&#39;s &#x60;id&#x60; (ObjectId, 24-char hex). - &#x60;orderBy&#x3D;height&#x60;: use the block height (string, e.g. &#x60;\&quot;17592\&quot;&#x60;). - &#x60;orderBy&#x3D;balance&#x60;: use the mosaic balance amount (string, e.g. &#x60;\&quot;1000000\&quot;&#x60;).  Allowed &#x60;orderBy&#x60; values depend on the endpoint. If &#x60;orderBy&#x60; is omitted, &#x60;id&#x60; is used by default.  Set &#x60;offset&#x60; to the sort-field value of the last entry from the previous page. Across pages, this value decreases with &#x60;order&#x3D;desc&#x60; and increases with &#x60;order&#x3D;asc&#x60;.  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep &#x60;pageNumber&#x3D;1&#x60; and advance pages by updating only &#x60;offset&#x60;. For numbered pagination flows, omit &#x60;offset&#x60; and advance pages by incrementing &#x60;pageNumber&#x60;.  | [Optional] [Defaults to `undefined`] |
| **order** | `Order` | Sort responses in ascending or descending order based on the collection property set on the param &#x60;orderBy&#x60;. If the request does not specify &#x60;orderBy&#x60;, REST returns the collection ordered by id. The default sort direction depends on the endpoint implementation.  | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |

### Return type

[**HashLockPage**](HashLockPage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated list of matching hash lock entries. |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

