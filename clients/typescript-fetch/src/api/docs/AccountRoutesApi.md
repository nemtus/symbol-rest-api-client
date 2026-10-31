# AccountRoutesApi

All URIs are relative to *https://reference.symboltest.net:3001*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAccountInfo**](AccountRoutesApi.md#getaccountinfo) | **GET** /accounts/{accountId} | Get account information |
| [**getAccountInfoMerkle**](AccountRoutesApi.md#getaccountinfomerkle) | **GET** /accounts/{accountId}/merkle | Get account Merkle information |
| [**getAccountsInfo**](AccountRoutesApi.md#getaccountsinfo) | **POST** /accounts | Get accounts information |
| [**searchAccounts**](AccountRoutesApi.md#searchaccounts) | **GET** /accounts | Search accounts |



## getAccountInfo

> AccountInfoDTO getAccountInfo(accountId)

Get account information

Retrieves account data for a given account identifier. The response contains the account state including balance, importance, public key, linked keys, and activity buckets.  The &#x60;accountId&#x60; path parameter accepts either a public key or a Base32-encoded address. 

### Example

```ts
import {
  Configuration,
  AccountRoutesApi,
} from '';
import type { GetAccountInfoRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AccountRoutesApi();

  const body = {
    // string | Account public key as 64 hexadecimal characters, or account address as 39 Base32 (network prefix `T` for testnet, `N` for mainnet). 
    accountId: TADP6C2GVEG654OP5LZI32P2GYJSCMEGQBYB7QY,
  } satisfies GetAccountInfoRequest;

  try {
    const data = await api.getAccountInfo(body);
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
| **accountId** | `string` | Account public key as 64 hexadecimal characters, or account address as 39 Base32 (network prefix &#x60;T&#x60; for testnet, &#x60;N&#x60; for mainnet).  | [Defaults to `undefined`] |

### Return type

[**AccountInfoDTO**](AccountInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Account information successfully retrieved. |  -  |
| **404** | The requested resource does not exist. Returned with HTTP status 404. The response body contains &#x60;code&#x60; (e.g. &#x60;ResourceNotFound&#x60;) and &#x60;message&#x60; with the missing resource identifier.  |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAccountInfoMerkle

> MerkleStateInfoDTO getAccountInfoMerkle(accountId)

Get account Merkle information

Retrieves the Merkle proof data for a given account. The Merkle path can be used to independently verify that the account state is included in the block state hash.  If no account state entry exists for the supplied account ID, the endpoint still returns a Merkle proof response, but it is a negative proof showing that no account state entry exists for the requested account.  The &#x60;accountId&#x60; path parameter accepts either a public key or a Base32-encoded address. 

### Example

```ts
import {
  Configuration,
  AccountRoutesApi,
} from '';
import type { GetAccountInfoMerkleRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AccountRoutesApi();

  const body = {
    // string | Account public key as 64 hexadecimal characters, or account address as 39 Base32 (network prefix `T` for testnet, `N` for mainnet). 
    accountId: TADP6C2GVEG654OP5LZI32P2GYJSCMEGQBYB7QY,
  } satisfies GetAccountInfoMerkleRequest;

  try {
    const data = await api.getAccountInfoMerkle(body);
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
| **accountId** | `string` | Account public key as 64 hexadecimal characters, or account address as 39 Base32 (network prefix &#x60;T&#x60; for testnet, &#x60;N&#x60; for mainnet).  | [Defaults to `undefined`] |

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
| **200** | Account Merkle information successfully retrieved. |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAccountsInfo

> Array&lt;AccountInfoDTO&gt; getAccountsInfo(accountIds)

Get accounts information

Retrieves account data for multiple accounts in a single request. This is the batch equivalent of the single-account endpoint.  The request body accepts either an array of public keys or an array of addresses (not both). If both &#x60;publicKeys&#x60; and &#x60;addresses&#x60; are provided, the request is invalid and the server returns &#x60;409&#x60; error. 

### Example

```ts
import {
  Configuration,
  AccountRoutesApi,
} from '';
import type { GetAccountsInfoRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AccountRoutesApi();

  const body = {
    // AccountIds (optional)
    accountIds: {publicKeys=[AC1A6E1D8DE5B17D2C6B1293F1CAD3829EEACF38D09311BB3C8E5A880092DE26]},
  } satisfies GetAccountsInfoRequest;

  try {
    const data = await api.getAccountsInfo(body);
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
| **accountIds** | [AccountIds](AccountIds.md) |  | [Optional] |

### Return type

[**Array&lt;AccountInfoDTO&gt;**](AccountInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully fetched list of account data. |  -  |
| **400** | The provided argument was not an acceptable input. Returned with HTTP status 400. Typically indicates malformed request body (e.g. invalid JSON) or content that cannot be parsed. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidContent&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchAccounts

> AccountPage searchAccounts(address, pageSize, pageNumber, offset, order, orderBy, mosaicId)

Search accounts

Returns a paginated list of accounts matching the given criteria.  Results can be filtered by &#x60;address&#x60; and &#x60;mosaicId&#x60; (mosaic ownership), and ordered by &#x60;id&#x60; or &#x60;balance&#x60;. Standard pagination parameters (&#x60;pageSize&#x60;, &#x60;pageNumber&#x60;, &#x60;offset&#x60;, &#x60;order&#x60;) apply. The &#x60;orderBy&#x60; parameter supports &#x60;id&#x60; and &#x60;balance&#x60;; when using &#x60;orderBy&#x3D;balance&#x60;, the &#x60;mosaicId&#x60; filter is required. The &#x60;offset&#x60; value must match the &#x60;orderBy&#x60; field. 

### Example

```ts
import {
  Configuration,
  AccountRoutesApi,
} from '';
import type { SearchAccountsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AccountRoutesApi();

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
    // AccountOrderByEnum | Sort responses by the property set. If `balance` option is selected, the request must define the `mosaicId` filter.  (optional)
    orderBy: ...,
    // string | Filter by mosaic identifier (include). (optional)
    mosaicId: mosaicId_example,
  } satisfies SearchAccountsRequest;

  try {
    const data = await api.searchAccounts(body);
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
| **orderBy** | `AccountOrderByEnum` | Sort responses by the property set. If &#x60;balance&#x60; option is selected, the request must define the &#x60;mosaicId&#x60; filter.  | [Optional] [Defaults to `undefined`] [Enum: id, balance] |
| **mosaicId** | `string` | Filter by mosaic identifier (include). | [Optional] [Defaults to `undefined`] |

### Return type

[**AccountPage**](AccountPage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated list of matching accounts. |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

