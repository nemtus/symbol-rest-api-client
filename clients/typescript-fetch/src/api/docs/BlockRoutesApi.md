# BlockRoutesApi

All URIs are relative to *https://reference.symboltest.net:3001*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getBlockByHeight**](BlockRoutesApi.md#getblockbyheight) | **GET** /blocks/{height} | Get block information |
| [**getMerkleReceipts**](BlockRoutesApi.md#getmerklereceipts) | **GET** /blocks/{height}/statements/{hash}/merkle | Get the Merkle path for a given receipt statement hash and block |
| [**getMerkleTransaction**](BlockRoutesApi.md#getmerkletransaction) | **GET** /blocks/{height}/transactions/{hash}/merkle | Get the Merkle path for a given transaction and block |
| [**searchBlocks**](BlockRoutesApi.md#searchblocks) | **GET** /blocks | Search blocks |



## getBlockByHeight

> BlockInfoDTO getBlockByHeight(height)

Get block information

Returns the block at the given height. The response includes the block header, harvester signature, and block metadata (hash, total fee, generation hash, transaction and statement counts).  If the block is an importance block, the response additionally contains voting-eligible and harvesting-eligible account counts, total voting balance, and the previous importance block hash. 

### Example

```ts
import {
  Configuration,
  BlockRoutesApi,
} from '';
import type { GetBlockByHeightRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BlockRoutesApi();

  const body = {
    // string | Filter by block height (include). Sequential block position in the chain; starts at 1 and increments by one.
    height: 1,
  } satisfies GetBlockByHeightRequest;

  try {
    const data = await api.getBlockByHeight(body);
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
| **height** | `string` | Filter by block height (include). Sequential block position in the chain; starts at 1 and increments by one. | [Defaults to `undefined`] |

### Return type

[**BlockInfoDTO**](BlockInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Block information successfully retrieved. |  -  |
| **404** | The requested resource does not exist. Returned with HTTP status 404. The response body contains &#x60;code&#x60; (e.g. &#x60;ResourceNotFound&#x60;) and &#x60;message&#x60; with the missing resource identifier.  |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMerkleReceipts

> MerkleProofInfoDTO getMerkleReceipts(height, hash)

Get the Merkle path for a given receipt statement hash and block

Returns the [Merkle path](https://docs.symbol.dev/concepts/data-validation.html#merkle-proof) for a [receipt statement or resolution](https://docs.symbol.dev/concepts/receipt.html) linked to a block. The &#x60;hash&#x60; parameter is the receipt statement hash, not the transaction hash. The Merkle path is the minimum number of nodes needed to calculate the Merkle root.  Steps to calculate the Merkle root: 1. proofHash &#x3D; hash (leaf). 2. Concatenate proofHash with the first unprocessed item from the merklePath list as follows: - &#x60;left&#x60;: the item hash is concatenated before the proofHash (proofHash &#x3D; sha_256(item.hash + proofHash)). - &#x60;right&#x60;: the item hash is concatenated after the proofHash (proofHash &#x3D; sha_256(proofHash + item.hash)). 3. Repeat 2. for every item in the merklePath list. 4. Compare if the calculated proofHash equals the one recorded in the [block header](https://docs.symbol.dev/concepts/block.html) (&#x60;block.receiptsHash&#x60;) to verify if the statement was linked with the block. 

### Example

```ts
import {
  Configuration,
  BlockRoutesApi,
} from '';
import type { GetMerkleReceiptsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BlockRoutesApi();

  const body = {
    // string | Filter by block height (include). Sequential block position in the chain; starts at 1 and increments by one.
    height: 1,
    // string | Receipt statement hash.
    hash: C8FC3FB54FDDFBCE0E8C71224990124E4EEC5AD5D30E592EDFA9524669A23810,
  } satisfies GetMerkleReceiptsRequest;

  try {
    const data = await api.getMerkleReceipts(body);
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
| **height** | `string` | Filter by block height (include). Sequential block position in the chain; starts at 1 and increments by one. | [Defaults to `undefined`] |
| **hash** | `string` | Receipt statement hash. | [Defaults to `undefined`] |

### Return type

[**MerkleProofInfoDTO**](MerkleProofInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Merkle path for the receipt statement successfully retrieved. |  -  |
| **404** | The requested resource does not exist. Returned with HTTP status 404. The response body contains &#x60;code&#x60; (e.g. &#x60;ResourceNotFound&#x60;) and &#x60;message&#x60; with the missing resource identifier.  |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMerkleTransaction

> MerkleProofInfoDTO getMerkleTransaction(height, hash)

Get the Merkle path for a given transaction and block

Returns the [Merkle path](https://docs.symbol.dev/concepts/data-validation.html#merkle-proof) for a [transaction](https://docs.symbol.dev/concepts/transaction.html) included in a block. The Merkle path is the minimum number of nodes needed to calculate the Merkle root.  Steps to calculate the Merkle root: 1. proofHash &#x3D; hash (leaf). 2. Concatenate proofHash with the first unprocessed item from the merklePath list as follows: - &#x60;left&#x60;: the item hash is concatenated before the proofHash (proofHash &#x3D; sha_256(item.hash + proofHash)). - &#x60;right&#x60;: the item hash is concatenated after the proofHash (proofHash &#x3D; sha_256(proofHash + item.hash)). 3. Repeat 2. for every item in the merklePath list. 4. Compare if the calculated proofHash equals the one recorded in the [block header](https://docs.symbol.dev/concepts/block.html) (&#x60;block.transactionsHash&#x60;) to verify if the transaction was included in the block. 

### Example

```ts
import {
  Configuration,
  BlockRoutesApi,
} from '';
import type { GetMerkleTransactionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BlockRoutesApi();

  const body = {
    // string | Filter by block height (include). Sequential block position in the chain; starts at 1 and increments by one.
    height: 1,
    // string | Transaction hash encoded as a 64-character hexadecimal string.
    hash: C8FC3FB54FDDFBCE0E8C71224990124E4EEC5AD5D30E592EDFA9524669A23810,
  } satisfies GetMerkleTransactionRequest;

  try {
    const data = await api.getMerkleTransaction(body);
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
| **height** | `string` | Filter by block height (include). Sequential block position in the chain; starts at 1 and increments by one. | [Defaults to `undefined`] |
| **hash** | `string` | Transaction hash encoded as a 64-character hexadecimal string. | [Defaults to `undefined`] |

### Return type

[**MerkleProofInfoDTO**](MerkleProofInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Merkle path for the transaction successfully retrieved. |  -  |
| **404** | The requested resource does not exist. Returned with HTTP status 404. The response body contains &#x60;code&#x60; (e.g. &#x60;ResourceNotFound&#x60;) and &#x60;message&#x60; with the missing resource identifier.  |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchBlocks

> BlockPage searchBlocks(signerPublicKey, beneficiaryAddress, pageSize, pageNumber, offset, order, orderBy, fromTimestamp, toTimestamp)

Search blocks

Returns a paginated list of blocks matching the given criteria.  Results can be filtered by harvester (&#x60;signerPublicKey&#x60;), &#x60;beneficiaryAddress&#x60;, and timestamp range. Standard pagination parameters (&#x60;pageSize&#x60;, &#x60;pageNumber&#x60;, &#x60;offset&#x60;, &#x60;order&#x60;) apply. The &#x60;orderBy&#x60; parameter supports &#x60;id&#x60; and &#x60;height&#x60;. The &#x60;offset&#x60; value must match the &#x60;orderBy&#x60; field. 

### Example

```ts
import {
  Configuration,
  BlockRoutesApi,
} from '';
import type { SearchBlocksRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BlockRoutesApi();

  const body = {
    // string | Filter transactions by the public key of the signing account (include). (optional)
    signerPublicKey: signerPublicKey_example,
    // string | Filter by beneficiary address (include). (optional)
    beneficiaryAddress: beneficiaryAddress_example,
    // number | Select the number of entries to return per page. Values outside the allowed range are clamped to the schema minimum or maximum.  (optional)
    pageSize: 56,
    // number | Page number for numbered pagination (1-based).  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep `pageNumber=1` and advance pages by updating only `offset`. For numbered pagination flows, omit `offset` and advance pages by incrementing `pageNumber`.  (optional)
    pageNumber: 56,
    // string | Cursor for pagination. Provide the value of the sort field (`orderBy`) from the last entry of the previous page. **The offset type must match `orderBy`:** - `orderBy=id`: use the entry\'s `id` (ObjectId, 24-char hex). - `orderBy=height`: use the block height (string, e.g. `\"17592\"`). - `orderBy=balance`: use the mosaic balance amount (string, e.g. `\"1000000\"`).  Allowed `orderBy` values depend on the endpoint. If `orderBy` is omitted, `id` is used by default.  Set `offset` to the sort-field value of the last entry from the previous page. Across pages, this value decreases with `order=desc` and increases with `order=asc`.  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep `pageNumber=1` and advance pages by updating only `offset`. For numbered pagination flows, omit `offset` and advance pages by incrementing `pageNumber`.  (optional)
    offset: offset_example,
    // Order | Sort responses in ascending or descending order based on the collection property set on the param `orderBy`. If the request does not specify `orderBy`, REST returns the collection ordered by id. The default sort direction depends on the endpoint implementation.  (optional)
    order: ...,
    // BlockOrderByEnum | Sort responses by the property set. Defaults to `id` when not specified.  (optional)
    orderBy: ...,
    // string | Only blocks with timestamp greater or equal than this one are returned. The timestamp is expressed in milliseconds since the nemesis block.  (optional)
    fromTimestamp: fromTimestamp_example,
    // string | Only blocks with timestamp smaller or equal than this one are returned. The timestamp is expressed in milliseconds since the nemesis block.  (optional)
    toTimestamp: toTimestamp_example,
  } satisfies SearchBlocksRequest;

  try {
    const data = await api.searchBlocks(body);
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
| **signerPublicKey** | `string` | Filter transactions by the public key of the signing account (include). | [Optional] [Defaults to `undefined`] |
| **beneficiaryAddress** | `string` | Filter by beneficiary address (include). | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Select the number of entries to return per page. Values outside the allowed range are clamped to the schema minimum or maximum.  | [Optional] [Defaults to `10`] |
| **pageNumber** | `number` | Page number for numbered pagination (1-based).  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep &#x60;pageNumber&#x3D;1&#x60; and advance pages by updating only &#x60;offset&#x60;. For numbered pagination flows, omit &#x60;offset&#x60; and advance pages by incrementing &#x60;pageNumber&#x60;.  | [Optional] [Defaults to `1`] |
| **offset** | `string` | Cursor for pagination. Provide the value of the sort field (&#x60;orderBy&#x60;) from the last entry of the previous page. **The offset type must match &#x60;orderBy&#x60;:** - &#x60;orderBy&#x3D;id&#x60;: use the entry\&#39;s &#x60;id&#x60; (ObjectId, 24-char hex). - &#x60;orderBy&#x3D;height&#x60;: use the block height (string, e.g. &#x60;\&quot;17592\&quot;&#x60;). - &#x60;orderBy&#x3D;balance&#x60;: use the mosaic balance amount (string, e.g. &#x60;\&quot;1000000\&quot;&#x60;).  Allowed &#x60;orderBy&#x60; values depend on the endpoint. If &#x60;orderBy&#x60; is omitted, &#x60;id&#x60; is used by default.  Set &#x60;offset&#x60; to the sort-field value of the last entry from the previous page. Across pages, this value decreases with &#x60;order&#x3D;desc&#x60; and increases with &#x60;order&#x3D;asc&#x60;.  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep &#x60;pageNumber&#x3D;1&#x60; and advance pages by updating only &#x60;offset&#x60;. For numbered pagination flows, omit &#x60;offset&#x60; and advance pages by incrementing &#x60;pageNumber&#x60;.  | [Optional] [Defaults to `undefined`] |
| **order** | `Order` | Sort responses in ascending or descending order based on the collection property set on the param &#x60;orderBy&#x60;. If the request does not specify &#x60;orderBy&#x60;, REST returns the collection ordered by id. The default sort direction depends on the endpoint implementation.  | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **orderBy** | `BlockOrderByEnum` | Sort responses by the property set. Defaults to &#x60;id&#x60; when not specified.  | [Optional] [Defaults to `undefined`] [Enum: id, height] |
| **fromTimestamp** | `string` | Only blocks with timestamp greater or equal than this one are returned. The timestamp is expressed in milliseconds since the nemesis block.  | [Optional] [Defaults to `undefined`] |
| **toTimestamp** | `string` | Only blocks with timestamp smaller or equal than this one are returned. The timestamp is expressed in milliseconds since the nemesis block.  | [Optional] [Defaults to `undefined`] |

### Return type

[**BlockPage**](BlockPage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated list of matching blocks. |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

