# ReceiptRoutesApi

All URIs are relative to *https://reference.symboltest.net:3001*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**searchAddressResolutionStatements**](ReceiptRoutesApi.md#searchaddressresolutionstatements) | **GET** /statements/resolutions/address | Search address resolution statements |
| [**searchMosaicResolutionStatements**](ReceiptRoutesApi.md#searchmosaicresolutionstatements) | **GET** /statements/resolutions/mosaic | Search mosaic resolution statements |
| [**searchTransactionStatements**](ReceiptRoutesApi.md#searchtransactionstatements) | **GET** /statements/transaction | Search transaction statements |



## searchAddressResolutionStatements

> ResolutionStatementPage searchAddressResolutionStatements(height, pageSize, pageNumber, offset, order)

Search address resolution statements

Returns a paginated list of address resolution statements. These statements record how an unresolved address alias used in a transaction was resolved to a concrete address at a given block height. A statement can contain multiple resolution entries because alias resolution may differ by transaction source within the same block. 

### Example

```ts
import {
  Configuration,
  ReceiptRoutesApi,
} from '';
import type { SearchAddressResolutionStatementsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ReceiptRoutesApi();

  const body = {
    // string | Filter by height (include). The exact meaning depends on the endpoint, for example block height for blocks or inclusion height for confirmed transactions.  (optional)
    height: height_example,
    // number | Select the number of entries to return per page. Values outside the allowed range are clamped to the schema minimum or maximum.  (optional)
    pageSize: 56,
    // number | Page number for numbered pagination (1-based).  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep `pageNumber=1` and advance pages by updating only `offset`. For numbered pagination flows, omit `offset` and advance pages by incrementing `pageNumber`.  (optional)
    pageNumber: 56,
    // string | Cursor for pagination. Provide the value of the sort field (`orderBy`) from the last entry of the previous page. **The offset type must match `orderBy`:** - `orderBy=id`: use the entry\'s `id` (ObjectId, 24-char hex). - `orderBy=height`: use the block height (string, e.g. `\"17592\"`). - `orderBy=balance`: use the mosaic balance amount (string, e.g. `\"1000000\"`).  Allowed `orderBy` values depend on the endpoint. If `orderBy` is omitted, `id` is used by default.  Set `offset` to the sort-field value of the last entry from the previous page. Across pages, this value decreases with `order=desc` and increases with `order=asc`.  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep `pageNumber=1` and advance pages by updating only `offset`. For numbered pagination flows, omit `offset` and advance pages by incrementing `pageNumber`.  (optional)
    offset: offset_example,
    // Order | Sort responses in ascending or descending order based on the collection property set on the param `orderBy`. If the request does not specify `orderBy`, REST returns the collection ordered by id. The default sort direction depends on the endpoint implementation.  (optional)
    order: ...,
  } satisfies SearchAddressResolutionStatementsRequest;

  try {
    const data = await api.searchAddressResolutionStatements(body);
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
| **height** | `string` | Filter by height (include). The exact meaning depends on the endpoint, for example block height for blocks or inclusion height for confirmed transactions.  | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Select the number of entries to return per page. Values outside the allowed range are clamped to the schema minimum or maximum.  | [Optional] [Defaults to `10`] |
| **pageNumber** | `number` | Page number for numbered pagination (1-based).  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep &#x60;pageNumber&#x3D;1&#x60; and advance pages by updating only &#x60;offset&#x60;. For numbered pagination flows, omit &#x60;offset&#x60; and advance pages by incrementing &#x60;pageNumber&#x60;.  | [Optional] [Defaults to `1`] |
| **offset** | `string` | Cursor for pagination. Provide the value of the sort field (&#x60;orderBy&#x60;) from the last entry of the previous page. **The offset type must match &#x60;orderBy&#x60;:** - &#x60;orderBy&#x3D;id&#x60;: use the entry\&#39;s &#x60;id&#x60; (ObjectId, 24-char hex). - &#x60;orderBy&#x3D;height&#x60;: use the block height (string, e.g. &#x60;\&quot;17592\&quot;&#x60;). - &#x60;orderBy&#x3D;balance&#x60;: use the mosaic balance amount (string, e.g. &#x60;\&quot;1000000\&quot;&#x60;).  Allowed &#x60;orderBy&#x60; values depend on the endpoint. If &#x60;orderBy&#x60; is omitted, &#x60;id&#x60; is used by default.  Set &#x60;offset&#x60; to the sort-field value of the last entry from the previous page. Across pages, this value decreases with &#x60;order&#x3D;desc&#x60; and increases with &#x60;order&#x3D;asc&#x60;.  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep &#x60;pageNumber&#x3D;1&#x60; and advance pages by updating only &#x60;offset&#x60;. For numbered pagination flows, omit &#x60;offset&#x60; and advance pages by incrementing &#x60;pageNumber&#x60;.  | [Optional] [Defaults to `undefined`] |
| **order** | `Order` | Sort responses in ascending or descending order based on the collection property set on the param &#x60;orderBy&#x60;. If the request does not specify &#x60;orderBy&#x60;, REST returns the collection ordered by id. The default sort direction depends on the endpoint implementation.  | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |

### Return type

[**ResolutionStatementPage**](ResolutionStatementPage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated list of address resolution statements. |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchMosaicResolutionStatements

> ResolutionStatementPage searchMosaicResolutionStatements(height, pageSize, pageNumber, offset, order)

Search mosaic resolution statements

Returns a paginated list of mosaic resolution statements. These statements record how an unresolved mosaic alias used in a transaction was resolved to a concrete mosaic ID at a given block height. A statement can contain multiple resolution entries because alias resolution may differ by transaction source within the same block. 

### Example

```ts
import {
  Configuration,
  ReceiptRoutesApi,
} from '';
import type { SearchMosaicResolutionStatementsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ReceiptRoutesApi();

  const body = {
    // string | Filter by height (include). The exact meaning depends on the endpoint, for example block height for blocks or inclusion height for confirmed transactions.  (optional)
    height: height_example,
    // number | Select the number of entries to return per page. Values outside the allowed range are clamped to the schema minimum or maximum.  (optional)
    pageSize: 56,
    // number | Page number for numbered pagination (1-based).  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep `pageNumber=1` and advance pages by updating only `offset`. For numbered pagination flows, omit `offset` and advance pages by incrementing `pageNumber`.  (optional)
    pageNumber: 56,
    // string | Cursor for pagination. Provide the value of the sort field (`orderBy`) from the last entry of the previous page. **The offset type must match `orderBy`:** - `orderBy=id`: use the entry\'s `id` (ObjectId, 24-char hex). - `orderBy=height`: use the block height (string, e.g. `\"17592\"`). - `orderBy=balance`: use the mosaic balance amount (string, e.g. `\"1000000\"`).  Allowed `orderBy` values depend on the endpoint. If `orderBy` is omitted, `id` is used by default.  Set `offset` to the sort-field value of the last entry from the previous page. Across pages, this value decreases with `order=desc` and increases with `order=asc`.  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep `pageNumber=1` and advance pages by updating only `offset`. For numbered pagination flows, omit `offset` and advance pages by incrementing `pageNumber`.  (optional)
    offset: offset_example,
    // Order | Sort responses in ascending or descending order based on the collection property set on the param `orderBy`. If the request does not specify `orderBy`, REST returns the collection ordered by id. The default sort direction depends on the endpoint implementation.  (optional)
    order: ...,
  } satisfies SearchMosaicResolutionStatementsRequest;

  try {
    const data = await api.searchMosaicResolutionStatements(body);
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
| **height** | `string` | Filter by height (include). The exact meaning depends on the endpoint, for example block height for blocks or inclusion height for confirmed transactions.  | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Select the number of entries to return per page. Values outside the allowed range are clamped to the schema minimum or maximum.  | [Optional] [Defaults to `10`] |
| **pageNumber** | `number` | Page number for numbered pagination (1-based).  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep &#x60;pageNumber&#x3D;1&#x60; and advance pages by updating only &#x60;offset&#x60;. For numbered pagination flows, omit &#x60;offset&#x60; and advance pages by incrementing &#x60;pageNumber&#x60;.  | [Optional] [Defaults to `1`] |
| **offset** | `string` | Cursor for pagination. Provide the value of the sort field (&#x60;orderBy&#x60;) from the last entry of the previous page. **The offset type must match &#x60;orderBy&#x60;:** - &#x60;orderBy&#x3D;id&#x60;: use the entry\&#39;s &#x60;id&#x60; (ObjectId, 24-char hex). - &#x60;orderBy&#x3D;height&#x60;: use the block height (string, e.g. &#x60;\&quot;17592\&quot;&#x60;). - &#x60;orderBy&#x3D;balance&#x60;: use the mosaic balance amount (string, e.g. &#x60;\&quot;1000000\&quot;&#x60;).  Allowed &#x60;orderBy&#x60; values depend on the endpoint. If &#x60;orderBy&#x60; is omitted, &#x60;id&#x60; is used by default.  Set &#x60;offset&#x60; to the sort-field value of the last entry from the previous page. Across pages, this value decreases with &#x60;order&#x3D;desc&#x60; and increases with &#x60;order&#x3D;asc&#x60;.  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep &#x60;pageNumber&#x3D;1&#x60; and advance pages by updating only &#x60;offset&#x60;. For numbered pagination flows, omit &#x60;offset&#x60; and advance pages by incrementing &#x60;pageNumber&#x60;.  | [Optional] [Defaults to `undefined`] |
| **order** | `Order` | Sort responses in ascending or descending order based on the collection property set on the param &#x60;orderBy&#x60;. If the request does not specify &#x60;orderBy&#x60;, REST returns the collection ordered by id. The default sort direction depends on the endpoint implementation.  | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |

### Return type

[**ResolutionStatementPage**](ResolutionStatementPage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated list of mosaic resolution statements. |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchTransactionStatements

> TransactionStatementPage searchTransactionStatements(height, fromHeight, toHeight, receiptType, recipientAddress, senderAddress, targetAddress, artifactId, pageSize, pageNumber, offset, order)

Search transaction statements

Returns a paginated list of transaction statements generated while confirmed transactions change on-chain state. Each statement is grouped by block height and source and contains the receipts produced by transaction execution, including balance transfers, balance changes, expirations, and inflation. Results can be filtered by block height, receipt type, related addresses, and artifact IDs. 

### Example

```ts
import {
  Configuration,
  ReceiptRoutesApi,
} from '';
import type { SearchTransactionStatementsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ReceiptRoutesApi();

  const body = {
    // string | Filter by height (include). The exact meaning depends on the endpoint, for example block height for blocks or inclusion height for confirmed transactions.  (optional)
    height: height_example,
    // string | Only transactions at or above this block height are returned. (optional)
    fromHeight: fromHeight_example,
    // string | Only transactions at or below this block height are returned. (optional)
    toHeight: toHeight_example,
    // Array<ReceiptTypeEnum> | Filter by receipt type code (include). To match multiple receipt types, repeat the query parameter, for example: `receiptType=8515&receiptType=20803`.  (optional)
    receiptType: ...,
    // string | Filter transactions by recipient address in Base32 format (include). (optional)
    recipientAddress: recipientAddress_example,
    // string | Filter by sender address in Base32 (include). (optional)
    senderAddress: senderAddress_example,
    // string | Filter by target address in Base32 (include). (optional)
    targetAddress: targetAddress_example,
    // string | Filter by artifact (mosaic or namespace) identifier (include). (optional)
    artifactId: artifactId_example,
    // number | Select the number of entries to return per page. Values outside the allowed range are clamped to the schema minimum or maximum.  (optional)
    pageSize: 56,
    // number | Page number for numbered pagination (1-based).  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep `pageNumber=1` and advance pages by updating only `offset`. For numbered pagination flows, omit `offset` and advance pages by incrementing `pageNumber`.  (optional)
    pageNumber: 56,
    // string | Cursor for pagination. Provide the value of the sort field (`orderBy`) from the last entry of the previous page. **The offset type must match `orderBy`:** - `orderBy=id`: use the entry\'s `id` (ObjectId, 24-char hex). - `orderBy=height`: use the block height (string, e.g. `\"17592\"`). - `orderBy=balance`: use the mosaic balance amount (string, e.g. `\"1000000\"`).  Allowed `orderBy` values depend on the endpoint. If `orderBy` is omitted, `id` is used by default.  Set `offset` to the sort-field value of the last entry from the previous page. Across pages, this value decreases with `order=desc` and increases with `order=asc`.  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep `pageNumber=1` and advance pages by updating only `offset`. For numbered pagination flows, omit `offset` and advance pages by incrementing `pageNumber`.  (optional)
    offset: offset_example,
    // Order | Sort responses in ascending or descending order based on the collection property set on the param `orderBy`. If the request does not specify `orderBy`, REST returns the collection ordered by id. The default sort direction depends on the endpoint implementation.  (optional)
    order: ...,
  } satisfies SearchTransactionStatementsRequest;

  try {
    const data = await api.searchTransactionStatements(body);
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
| **height** | `string` | Filter by height (include). The exact meaning depends on the endpoint, for example block height for blocks or inclusion height for confirmed transactions.  | [Optional] [Defaults to `undefined`] |
| **fromHeight** | `string` | Only transactions at or above this block height are returned. | [Optional] [Defaults to `undefined`] |
| **toHeight** | `string` | Only transactions at or below this block height are returned. | [Optional] [Defaults to `undefined`] |
| **receiptType** | `Array<ReceiptTypeEnum>` | Filter by receipt type code (include). To match multiple receipt types, repeat the query parameter, for example: &#x60;receiptType&#x3D;8515&amp;receiptType&#x3D;20803&#x60;.  | [Optional] |
| **recipientAddress** | `string` | Filter transactions by recipient address in Base32 format (include). | [Optional] [Defaults to `undefined`] |
| **senderAddress** | `string` | Filter by sender address in Base32 (include). | [Optional] [Defaults to `undefined`] |
| **targetAddress** | `string` | Filter by target address in Base32 (include). | [Optional] [Defaults to `undefined`] |
| **artifactId** | `string` | Filter by artifact (mosaic or namespace) identifier (include). | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Select the number of entries to return per page. Values outside the allowed range are clamped to the schema minimum or maximum.  | [Optional] [Defaults to `10`] |
| **pageNumber** | `number` | Page number for numbered pagination (1-based).  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep &#x60;pageNumber&#x3D;1&#x60; and advance pages by updating only &#x60;offset&#x60;. For numbered pagination flows, omit &#x60;offset&#x60; and advance pages by incrementing &#x60;pageNumber&#x60;.  | [Optional] [Defaults to `1`] |
| **offset** | `string` | Cursor for pagination. Provide the value of the sort field (&#x60;orderBy&#x60;) from the last entry of the previous page. **The offset type must match &#x60;orderBy&#x60;:** - &#x60;orderBy&#x3D;id&#x60;: use the entry\&#39;s &#x60;id&#x60; (ObjectId, 24-char hex). - &#x60;orderBy&#x3D;height&#x60;: use the block height (string, e.g. &#x60;\&quot;17592\&quot;&#x60;). - &#x60;orderBy&#x3D;balance&#x60;: use the mosaic balance amount (string, e.g. &#x60;\&quot;1000000\&quot;&#x60;).  Allowed &#x60;orderBy&#x60; values depend on the endpoint. If &#x60;orderBy&#x60; is omitted, &#x60;id&#x60; is used by default.  Set &#x60;offset&#x60; to the sort-field value of the last entry from the previous page. Across pages, this value decreases with &#x60;order&#x3D;desc&#x60; and increases with &#x60;order&#x3D;asc&#x60;.  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep &#x60;pageNumber&#x3D;1&#x60; and advance pages by updating only &#x60;offset&#x60;. For numbered pagination flows, omit &#x60;offset&#x60; and advance pages by incrementing &#x60;pageNumber&#x60;.  | [Optional] [Defaults to `undefined`] |
| **order** | `Order` | Sort responses in ascending or descending order based on the collection property set on the param &#x60;orderBy&#x60;. If the request does not specify &#x60;orderBy&#x60;, REST returns the collection ordered by id. The default sort direction depends on the endpoint implementation.  | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |

### Return type

[**TransactionStatementPage**](TransactionStatementPage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated list of transaction statements. |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

