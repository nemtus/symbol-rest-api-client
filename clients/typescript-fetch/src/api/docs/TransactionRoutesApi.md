# TransactionRoutesApi

All URIs are relative to *https://reference.symboltest.net:3001*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**announceCosignatureTransaction**](TransactionRoutesApi.md#announcecosignaturetransaction) | **PUT** /transactions/cosignature | Announce a cosignature transaction |
| [**announcePartialTransaction**](TransactionRoutesApi.md#announcepartialtransaction) | **PUT** /transactions/partial | Announce an aggregate bonded transaction |
| [**announceTransaction**](TransactionRoutesApi.md#announcetransaction) | **PUT** /transactions | Announce a new transaction |
| [**getConfirmedTransaction**](TransactionRoutesApi.md#getconfirmedtransaction) | **GET** /transactions/confirmed/{transactionId} | Get confirmed transaction information |
| [**getConfirmedTransactions**](TransactionRoutesApi.md#getconfirmedtransactions) | **POST** /transactions/confirmed | Get confirmed transactions information |
| [**getPartialTransaction**](TransactionRoutesApi.md#getpartialtransaction) | **GET** /transactions/partial/{transactionId} | Get partial transaction information |
| [**getPartialTransactions**](TransactionRoutesApi.md#getpartialtransactions) | **POST** /transactions/partial | Get information about partial transactions |
| [**getUnconfirmedTransaction**](TransactionRoutesApi.md#getunconfirmedtransaction) | **GET** /transactions/unconfirmed/{transactionId} | Get unconfirmed transaction information |
| [**getUnconfirmedTransactions**](TransactionRoutesApi.md#getunconfirmedtransactions) | **POST** /transactions/unconfirmed | Get information about unconfirmed transactions |
| [**searchConfirmedTransactions**](TransactionRoutesApi.md#searchconfirmedtransactions) | **GET** /transactions/confirmed | Search confirmed transactions |
| [**searchPartialTransactions**](TransactionRoutesApi.md#searchpartialtransactions) | **GET** /transactions/partial | Search partial transactions |
| [**searchUnconfirmedTransactions**](TransactionRoutesApi.md#searchunconfirmedtransactions) | **GET** /transactions/unconfirmed | Search unconfirmed transactions |



## announceCosignatureTransaction

> AnnounceTransactionInfoDTO announceCosignatureTransaction(cosignature)

Announce a cosignature transaction

Broadcasts a detached cosignature for an aggregate bonded transaction to the network through this node.  The request must contain the detached cosignature fields: cosignature version, signer public key, cosignature signature, and the parent aggregate transaction hash. Detached cosignatures are normally created client-side with a [Symbol SDK](https://docs.symbol.dev/sdk.html) and then announced with this endpoint.  Acceptance by this node does not mean the parent aggregate bonded transaction is already confirmed on-chain. The cosignature still needs to be propagated and processed by the network.  To verify the effect of the cosignature, query the **parent aggregate bonded transaction**, for example with [&#x60;GET /transactionStatus/{hash}&#x60;](/transactionStatus/{hash}) using the parent aggregate transaction hash. Transaction status availability is not guaranteed indefinitely: failed statuses are stored in a capped collection and may be evicted as new entries arrive. 

### Example

```ts
import {
  Configuration,
  TransactionRoutesApi,
} from '';
import type { AnnounceCosignatureTransactionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new TransactionRoutesApi();

  const body = {
    // Cosignature | Request body for announcing one detached cosignature for an aggregate bonded transaction.
    cosignature: ...,
  } satisfies AnnounceCosignatureTransactionRequest;

  try {
    const data = await api.announceCosignatureTransaction(body);
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
| **cosignature** | [Cosignature](Cosignature.md) | Request body for announcing one detached cosignature for an aggregate bonded transaction. | |

### Return type

[**AnnounceTransactionInfoDTO**](AnnounceTransactionInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Detached cosignature accepted for processing and broadcast by the node. |  -  |
| **400** | The provided argument was not an acceptable input. Returned with HTTP status 400. Typically indicates malformed request body (e.g. invalid JSON) or content that cannot be parsed. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidContent&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## announcePartialTransaction

> AnnounceTransactionInfoDTO announcePartialTransaction(transactionPayload)

Announce an aggregate bonded transaction

Broadcasts a signed aggregate bonded transaction to the network through this node.  The request must contain the serialized aggregate bonded transaction payload in hexadecimal form. Transactions are normally created and signed client-side with a [Symbol SDK](https://docs.symbol.dev/sdk.html) and then announced with this endpoint.  Acceptance by this node does not mean the transaction is already part of the blockchain. The transaction still needs to be validated and confirmed by the network.  To verify the final result, query &#x60;GET /transactionStatus/{hash}&#x60; on the same node that received the announce request. If that node drops the transaction before propagation, other nodes may not know the transaction at all and can return &#x60;404&#x60; for the same hash. Transaction status availability is not guaranteed indefinitely: failed statuses are stored in a capped collection and may be evicted as new entries arrive. 

### Example

```ts
import {
  Configuration,
  TransactionRoutesApi,
} from '';
import type { AnnouncePartialTransactionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new TransactionRoutesApi();

  const body = {
    // TransactionPayload | Request body for transaction announcement.  Contains one signed transaction payload serialized in hexadecimal form. 
    transactionPayload: ...,
  } satisfies AnnouncePartialTransactionRequest;

  try {
    const data = await api.announcePartialTransaction(body);
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
| **transactionPayload** | [TransactionPayload](TransactionPayload.md) | Request body for transaction announcement.  Contains one signed transaction payload serialized in hexadecimal form.  | |

### Return type

[**AnnounceTransactionInfoDTO**](AnnounceTransactionInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Aggregate bonded transaction accepted for processing and broadcast by the node. |  -  |
| **400** | The provided argument was not an acceptable input. Returned with HTTP status 400. Typically indicates malformed request body (e.g. invalid JSON) or content that cannot be parsed. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidContent&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## announceTransaction

> AnnounceTransactionInfoDTO announceTransaction(transactionPayload)

Announce a new transaction

Broadcasts a signed transaction to the network through this node.  The request must contain the serialized transaction payload in hexadecimal form. Transactions are normally created and signed client-side with a [Symbol SDK](https://docs.symbol.dev/sdk.html) and then announced with this endpoint.  The [catbuffer library](https://github.com/symbol/symbol/tree/main/catbuffer) defines the binary serialization format used by Symbol entities.  Acceptance by this node does not mean the transaction is already part of the blockchain. The transaction still needs to be validated and confirmed by the network.  To verify the final result, query &#x60;GET /transactionStatus/{hash}&#x60; on the same node that received the announce request. If that node drops the transaction before propagation, other nodes may not know the transaction at all and can return &#x60;404&#x60; for the same hash. Transaction status availability is not guaranteed indefinitely: failed statuses are stored in a capped collection and may be evicted as new entries arrive. 

### Example

```ts
import {
  Configuration,
  TransactionRoutesApi,
} from '';
import type { AnnounceTransactionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new TransactionRoutesApi();

  const body = {
    // TransactionPayload | Request body for transaction announcement.  Contains one signed transaction payload serialized in hexadecimal form. 
    transactionPayload: ...,
  } satisfies AnnounceTransactionRequest;

  try {
    const data = await api.announceTransaction(body);
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
| **transactionPayload** | [TransactionPayload](TransactionPayload.md) | Request body for transaction announcement.  Contains one signed transaction payload serialized in hexadecimal form.  | |

### Return type

[**AnnounceTransactionInfoDTO**](AnnounceTransactionInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Transaction accepted for processing and broadcast by the node. |  -  |
| **400** | The provided argument was not an acceptable input. Returned with HTTP status 400. Typically indicates malformed request body (e.g. invalid JSON) or content that cannot be parsed. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidContent&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getConfirmedTransaction

> TransactionInfoDTO getConfirmedTransaction(transactionId)

Get confirmed transaction information

Returns confirmed transaction information given a transaction ID assigned by the node or transaction hash.  Use this endpoint when you need on-chain transaction data (the transaction is already included in a block). Use &#x60;getUnconfirmedTransaction&#x60; while the transaction is still in a node\&#39;s unconfirmed pool, and use &#x60;getPartialTransaction&#x60; for aggregate bonded transactions waiting for cosignatures. 

### Example

```ts
import {
  Configuration,
  TransactionRoutesApi,
} from '';
import type { GetConfirmedTransactionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new TransactionRoutesApi();

  const body = {
    // string | Transaction hash (64 hexadecimal characters) or node-assigned transaction ID (16 hexadecimal characters). 
    transactionId: 73C5E3F46E2D24A3A1B9959DD62A42A54A0882F3DF2D72A6917C57C67D7A5B8A,
  } satisfies GetConfirmedTransactionRequest;

  try {
    const data = await api.getConfirmedTransaction(body);
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
| **transactionId** | `string` | Transaction hash (64 hexadecimal characters) or node-assigned transaction ID (16 hexadecimal characters).  | [Defaults to `undefined`] |

### Return type

[**TransactionInfoDTO**](TransactionInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Confirmed transaction information. |  -  |
| **404** | The requested resource does not exist. Returned with HTTP status 404. The response body contains &#x60;code&#x60; (e.g. &#x60;ResourceNotFound&#x60;) and &#x60;message&#x60; with the missing resource identifier.  |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getConfirmedTransactions

> Array&lt;TransactionInfoDTO&gt; getConfirmedTransactions(transactionIds)

Get confirmed transactions information

Returns confirmed transactions for the list of identifiers in the request body. Each request item can be either a transaction ID assigned by the node or a transaction hash. Both values are returned by transaction retrieval and search endpoints, for example &#x60;GET /transactions/confirmed&#x60; and &#x60;GET /transactions/confirmed/{transactionId}&#x60;.  Use this endpoint when you need on-chain data for multiple transactions in one call. Use &#x60;getUnconfirmedTransactions&#x60; for transactions still pending in a node pool, and use &#x60;getPartialTransactions&#x60; for aggregate bonded transactions waiting for cosignatures. 

### Example

```ts
import {
  Configuration,
  TransactionRoutesApi,
} from '';
import type { GetConfirmedTransactionsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new TransactionRoutesApi();

  const body = {
    // TransactionIds | Request body containing transaction IDs or hashes to retrieve in batch.
    transactionIds: ...,
  } satisfies GetConfirmedTransactionsRequest;

  try {
    const data = await api.getConfirmedTransactions(body);
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
| **transactionIds** | [TransactionIds](TransactionIds.md) | Request body containing transaction IDs or hashes to retrieve in batch. | |

### Return type

[**Array&lt;TransactionInfoDTO&gt;**](TransactionInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Confirmed transaction information for the requested identifiers. |  -  |
| **400** | The provided argument was not an acceptable input. Returned with HTTP status 400. Typically indicates malformed request body (e.g. invalid JSON) or content that cannot be parsed. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidContent&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPartialTransaction

> TransactionInfoDTO getPartialTransaction(transactionId)

Get partial transaction information

Returns one partial transaction identified by the path value. Partial transactions are aggregate bonded transactions waiting for the remaining cosignatures.  The path accepts either the transaction ID assigned by the node or the transaction hash. Both values are returned by transaction retrieval and search endpoints, for example &#x60;GET /transactions/partial&#x60; and &#x60;GET /transactions/partial/{transactionId}&#x60;.  Use this endpoint for aggregate bonded transactions before they are fully cosigned. Use &#x60;getUnconfirmedTransaction&#x60; for non-partial transactions that are in a node\&#39;s unconfirmed pool, and use &#x60;getConfirmedTransaction&#x60; once the transaction is confirmed on-chain. 

### Example

```ts
import {
  Configuration,
  TransactionRoutesApi,
} from '';
import type { GetPartialTransactionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new TransactionRoutesApi();

  const body = {
    // string | Transaction hash (64 hexadecimal characters) or node-assigned transaction ID (16 hexadecimal characters). 
    transactionId: 73C5E3F46E2D24A3A1B9959DD62A42A54A0882F3DF2D72A6917C57C67D7A5B8A,
  } satisfies GetPartialTransactionRequest;

  try {
    const data = await api.getPartialTransaction(body);
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
| **transactionId** | `string` | Transaction hash (64 hexadecimal characters) or node-assigned transaction ID (16 hexadecimal characters).  | [Defaults to `undefined`] |

### Return type

[**TransactionInfoDTO**](TransactionInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Partial transaction information. |  -  |
| **404** | The requested resource does not exist. Returned with HTTP status 404. The response body contains &#x60;code&#x60; (e.g. &#x60;ResourceNotFound&#x60;) and &#x60;message&#x60; with the missing resource identifier.  |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPartialTransactions

> Array&lt;TransactionInfoDTO&gt; getPartialTransactions(transactionIds)

Get information about partial transactions

Returns partial transactions for the list of identifiers in the request body. Partial transactions are aggregate bonded transactions waiting for the remaining cosignatures.  Each request item can be either a transaction ID assigned by the node or a transaction hash. Both values are returned by transaction retrieval and search endpoints, for example &#x60;GET /transactions/partial&#x60; and &#x60;GET /transactions/partial/{transactionId}&#x60;.  Use this endpoint for aggregate bonded transactions that still wait for required cosignatures. Use &#x60;getUnconfirmedTransactions&#x60; for non-partial pending transactions accepted by a node but not yet included in a block, and use &#x60;getConfirmedTransactions&#x60; once transactions are confirmed on-chain. 

### Example

```ts
import {
  Configuration,
  TransactionRoutesApi,
} from '';
import type { GetPartialTransactionsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new TransactionRoutesApi();

  const body = {
    // TransactionIds | Request body containing transaction IDs or hashes to retrieve in batch.
    transactionIds: ...,
  } satisfies GetPartialTransactionsRequest;

  try {
    const data = await api.getPartialTransactions(body);
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
| **transactionIds** | [TransactionIds](TransactionIds.md) | Request body containing transaction IDs or hashes to retrieve in batch. | |

### Return type

[**Array&lt;TransactionInfoDTO&gt;**](TransactionInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Partial transaction information for the requested identifiers. |  -  |
| **400** | The provided argument was not an acceptable input. Returned with HTTP status 400. Typically indicates malformed request body (e.g. invalid JSON) or content that cannot be parsed. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidContent&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUnconfirmedTransaction

> TransactionInfoDTO getUnconfirmedTransaction(transactionId)

Get unconfirmed transaction information

Returns one unconfirmed transaction identified by the path value. An unconfirmed transaction is accepted by a node and pending inclusion in a block.  The path accepts either the transaction ID assigned by the node or the transaction hash. Both values are returned by transaction retrieval and search endpoints, for example &#x60;GET /transactions/unconfirmed&#x60; and &#x60;GET /transactions/unconfirmed/{transactionId}&#x60;.  Use this endpoint while a transaction is accepted by a node but not yet included in a block. Use &#x60;getConfirmedTransaction&#x60; once it is confirmed on-chain, and use &#x60;getPartialTransaction&#x60; for aggregate bonded transactions waiting for cosignatures. 

### Example

```ts
import {
  Configuration,
  TransactionRoutesApi,
} from '';
import type { GetUnconfirmedTransactionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new TransactionRoutesApi();

  const body = {
    // string | Transaction hash (64 hexadecimal characters) or node-assigned transaction ID (16 hexadecimal characters). 
    transactionId: 73C5E3F46E2D24A3A1B9959DD62A42A54A0882F3DF2D72A6917C57C67D7A5B8A,
  } satisfies GetUnconfirmedTransactionRequest;

  try {
    const data = await api.getUnconfirmedTransaction(body);
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
| **transactionId** | `string` | Transaction hash (64 hexadecimal characters) or node-assigned transaction ID (16 hexadecimal characters).  | [Defaults to `undefined`] |

### Return type

[**TransactionInfoDTO**](TransactionInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Unconfirmed transaction information. |  -  |
| **404** | The requested resource does not exist. Returned with HTTP status 404. The response body contains &#x60;code&#x60; (e.g. &#x60;ResourceNotFound&#x60;) and &#x60;message&#x60; with the missing resource identifier.  |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUnconfirmedTransactions

> Array&lt;TransactionInfoDTO&gt; getUnconfirmedTransactions(transactionIds)

Get information about unconfirmed transactions

Returns unconfirmed transactions for the list of identifiers in the request body. Unconfirmed transactions are accepted by a node and pending inclusion in a block.  Each request item can be either a transaction ID assigned by the node or a transaction hash. Both values are returned by transaction retrieval and search endpoints, for example &#x60;GET /transactions/unconfirmed&#x60; and &#x60;GET /transactions/unconfirmed/{transactionId}&#x60;.  Use this endpoint when checking multiple transactions that are accepted by a node but not yet included in a block. Use &#x60;getConfirmedTransactions&#x60; for on-chain transactions, and use &#x60;getPartialTransactions&#x60; for aggregate bonded transactions waiting for cosignatures. 

### Example

```ts
import {
  Configuration,
  TransactionRoutesApi,
} from '';
import type { GetUnconfirmedTransactionsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new TransactionRoutesApi();

  const body = {
    // TransactionIds | Request body containing transaction IDs or hashes to retrieve in batch.
    transactionIds: ...,
  } satisfies GetUnconfirmedTransactionsRequest;

  try {
    const data = await api.getUnconfirmedTransactions(body);
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
| **transactionIds** | [TransactionIds](TransactionIds.md) | Request body containing transaction IDs or hashes to retrieve in batch. | |

### Return type

[**Array&lt;TransactionInfoDTO&gt;**](TransactionInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Unconfirmed transaction information for the requested identifiers. |  -  |
| **400** | The provided argument was not an acceptable input. Returned with HTTP status 400. Typically indicates malformed request body (e.g. invalid JSON) or content that cannot be parsed. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidContent&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchConfirmedTransactions

> TransactionPage searchConfirmedTransactions(address, recipientAddress, signerPublicKey, height, fromHeight, toHeight, fromTransferAmount, toTransferAmount, type, embedded, transferMosaicId, pageSize, pageNumber, offset, order)

Search confirmed transactions

Returns a paginated list of confirmed transactions matching the supplied filters.  Use this endpoint when you need on-chain transactions only (already included in blocks). Use &#x60;searchUnconfirmedTransactions&#x60; for transactions that are still pending in a node pool, and use &#x60;searchPartialTransactions&#x60; for aggregate bonded transactions waiting for cosignatures.  If a transaction was announced with an alias rather than an address, the address considered during filtering is the one resolved from that alias at confirmation time.  For cursor-style pagination on this endpoint, set &#x60;offset&#x60; to the &#x60;id&#x60; of the last transaction from the previous page. For general pagination strategy guidance, see the &#x60;offset&#x60; and &#x60;pageNumber&#x60; query parameter descriptions. 

### Example

```ts
import {
  Configuration,
  TransactionRoutesApi,
} from '';
import type { SearchConfirmedTransactionsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new TransactionRoutesApi();

  const body = {
    // string | Filter by address (include), in Base32 format.  The exact meaning depends on the endpoint: - transaction search: returns transactions where the address appears as the sender, recipient, or cosigner - account search: matches the account address - account restriction search: matches the restricted account address - hash lock and secret lock search: matches the lock owner address  On transaction search endpoints, this filter cannot be combined with `recipientAddress` and `signerPublicKey`.  (optional)
    address: address_example,
    // string | Filter transactions by recipient address in Base32 format (include). (optional)
    recipientAddress: recipientAddress_example,
    // string | Filter transactions by the public key of the signing account (include). (optional)
    signerPublicKey: signerPublicKey_example,
    // string | Filter by height (include). The exact meaning depends on the endpoint, for example block height for blocks or inclusion height for confirmed transactions.  (optional)
    height: height_example,
    // string | Only transactions at or above this block height are returned. (optional)
    fromHeight: fromHeight_example,
    // string | Only transactions at or below this block height are returned. (optional)
    toHeight: toHeight_example,
    // string | Requires providing the `transferMosaicId` filter. Only transfer transactions with an amount greater than or equal to this value for the specified mosaic ID are returned.  (optional)
    fromTransferAmount: fromTransferAmount_example,
    // string | Requires providing the `transferMosaicId` filter. Only transfer transactions with an amount less than or equal to this value for the specified mosaic ID are returned.  (optional)
    toTransferAmount: toTransferAmount_example,
    // Array<TransactionTypeEnum> | Filter by transaction type (include). To match multiple transaction types, add more query parameters like: `type=16974&type=16718`.  (optional)
    type: ...,
    // boolean | When `true`, the search also includes transactions embedded inside aggregate transactions. Otherwise, only top-level transactions are returned.  Results are **flattened**. Embedded transactions are returned as separate entries in the same `data` array as top-level transactions, not nested under their parent aggregate transaction. Sorting, filtering, and pagination are therefore applied to one combined result set containing both top-level and embedded transaction records.  In the database, embedded transactions are stored as separate documents linked to their parent aggregate by `meta.aggregateId` and `meta.aggregateHash`. When `embedded=false`, the search excludes documents with `meta.aggregateId`. When `embedded=true`, those documents are included in the page result alongside regular transactions. In REST responses, embedded entries are identified by `meta.aggregateId`, `meta.aggregateHash`, and their inner `meta.index`; unlike top-level transactions, they do not carry their own `meta.hash`.  **Note:** This field does not work as expected with the `address` filter. That filter matches the internal `meta.addresses` field used on top-level transaction documents, while embedded transaction documents do not carry that field. As a result, embedded transactions involving the specified address will not be returned even when `embedded=true`. Filters such as `recipientAddress` and `signerPublicKey` do not have this limitation.  (optional)
    embedded: true,
    // string | Filter transfer transactions by the mosaic ID in the transfer payload (include). (optional)
    transferMosaicId: transferMosaicId_example,
    // number | Select the number of entries to return per page. Values outside the allowed range are clamped to the schema minimum or maximum.  (optional)
    pageSize: 56,
    // number | Page number for numbered pagination (1-based).  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep `pageNumber=1` and advance pages by updating only `offset`. For numbered pagination flows, omit `offset` and advance pages by incrementing `pageNumber`.  (optional)
    pageNumber: 56,
    // string | Cursor for pagination. Provide the value of the sort field (`orderBy`) from the last entry of the previous page. **The offset type must match `orderBy`:** - `orderBy=id`: use the entry\'s `id` (ObjectId, 24-char hex). - `orderBy=height`: use the block height (string, e.g. `\"17592\"`). - `orderBy=balance`: use the mosaic balance amount (string, e.g. `\"1000000\"`).  Allowed `orderBy` values depend on the endpoint. If `orderBy` is omitted, `id` is used by default.  Set `offset` to the sort-field value of the last entry from the previous page. Across pages, this value decreases with `order=desc` and increases with `order=asc`.  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep `pageNumber=1` and advance pages by updating only `offset`. For numbered pagination flows, omit `offset` and advance pages by incrementing `pageNumber`.  (optional)
    offset: offset_example,
    // Order | Sort responses in ascending or descending order based on the collection property set on the param `orderBy`. If the request does not specify `orderBy`, REST returns the collection ordered by id. The default sort direction depends on the endpoint implementation.  (optional)
    order: ...,
  } satisfies SearchConfirmedTransactionsRequest;

  try {
    const data = await api.searchConfirmedTransactions(body);
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
| **recipientAddress** | `string` | Filter transactions by recipient address in Base32 format (include). | [Optional] [Defaults to `undefined`] |
| **signerPublicKey** | `string` | Filter transactions by the public key of the signing account (include). | [Optional] [Defaults to `undefined`] |
| **height** | `string` | Filter by height (include). The exact meaning depends on the endpoint, for example block height for blocks or inclusion height for confirmed transactions.  | [Optional] [Defaults to `undefined`] |
| **fromHeight** | `string` | Only transactions at or above this block height are returned. | [Optional] [Defaults to `undefined`] |
| **toHeight** | `string` | Only transactions at or below this block height are returned. | [Optional] [Defaults to `undefined`] |
| **fromTransferAmount** | `string` | Requires providing the &#x60;transferMosaicId&#x60; filter. Only transfer transactions with an amount greater than or equal to this value for the specified mosaic ID are returned.  | [Optional] [Defaults to `undefined`] |
| **toTransferAmount** | `string` | Requires providing the &#x60;transferMosaicId&#x60; filter. Only transfer transactions with an amount less than or equal to this value for the specified mosaic ID are returned.  | [Optional] [Defaults to `undefined`] |
| **type** | `Array<TransactionTypeEnum>` | Filter by transaction type (include). To match multiple transaction types, add more query parameters like: &#x60;type&#x3D;16974&amp;type&#x3D;16718&#x60;.  | [Optional] |
| **embedded** | `boolean` | When &#x60;true&#x60;, the search also includes transactions embedded inside aggregate transactions. Otherwise, only top-level transactions are returned.  Results are **flattened**. Embedded transactions are returned as separate entries in the same &#x60;data&#x60; array as top-level transactions, not nested under their parent aggregate transaction. Sorting, filtering, and pagination are therefore applied to one combined result set containing both top-level and embedded transaction records.  In the database, embedded transactions are stored as separate documents linked to their parent aggregate by &#x60;meta.aggregateId&#x60; and &#x60;meta.aggregateHash&#x60;. When &#x60;embedded&#x3D;false&#x60;, the search excludes documents with &#x60;meta.aggregateId&#x60;. When &#x60;embedded&#x3D;true&#x60;, those documents are included in the page result alongside regular transactions. In REST responses, embedded entries are identified by &#x60;meta.aggregateId&#x60;, &#x60;meta.aggregateHash&#x60;, and their inner &#x60;meta.index&#x60;; unlike top-level transactions, they do not carry their own &#x60;meta.hash&#x60;.  **Note:** This field does not work as expected with the &#x60;address&#x60; filter. That filter matches the internal &#x60;meta.addresses&#x60; field used on top-level transaction documents, while embedded transaction documents do not carry that field. As a result, embedded transactions involving the specified address will not be returned even when &#x60;embedded&#x3D;true&#x60;. Filters such as &#x60;recipientAddress&#x60; and &#x60;signerPublicKey&#x60; do not have this limitation.  | [Optional] [Defaults to `false`] |
| **transferMosaicId** | `string` | Filter transfer transactions by the mosaic ID in the transfer payload (include). | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Select the number of entries to return per page. Values outside the allowed range are clamped to the schema minimum or maximum.  | [Optional] [Defaults to `10`] |
| **pageNumber** | `number` | Page number for numbered pagination (1-based).  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep &#x60;pageNumber&#x3D;1&#x60; and advance pages by updating only &#x60;offset&#x60;. For numbered pagination flows, omit &#x60;offset&#x60; and advance pages by incrementing &#x60;pageNumber&#x60;.  | [Optional] [Defaults to `1`] |
| **offset** | `string` | Cursor for pagination. Provide the value of the sort field (&#x60;orderBy&#x60;) from the last entry of the previous page. **The offset type must match &#x60;orderBy&#x60;:** - &#x60;orderBy&#x3D;id&#x60;: use the entry\&#39;s &#x60;id&#x60; (ObjectId, 24-char hex). - &#x60;orderBy&#x3D;height&#x60;: use the block height (string, e.g. &#x60;\&quot;17592\&quot;&#x60;). - &#x60;orderBy&#x3D;balance&#x60;: use the mosaic balance amount (string, e.g. &#x60;\&quot;1000000\&quot;&#x60;).  Allowed &#x60;orderBy&#x60; values depend on the endpoint. If &#x60;orderBy&#x60; is omitted, &#x60;id&#x60; is used by default.  Set &#x60;offset&#x60; to the sort-field value of the last entry from the previous page. Across pages, this value decreases with &#x60;order&#x3D;desc&#x60; and increases with &#x60;order&#x3D;asc&#x60;.  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep &#x60;pageNumber&#x3D;1&#x60; and advance pages by updating only &#x60;offset&#x60;. For numbered pagination flows, omit &#x60;offset&#x60; and advance pages by incrementing &#x60;pageNumber&#x60;.  | [Optional] [Defaults to `undefined`] |
| **order** | `Order` | Sort responses in ascending or descending order based on the collection property set on the param &#x60;orderBy&#x60;. If the request does not specify &#x60;orderBy&#x60;, REST returns the collection ordered by id. The default sort direction depends on the endpoint implementation.  | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |

### Return type

[**TransactionPage**](TransactionPage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Page of confirmed transactions. |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchPartialTransactions

> TransactionPage searchPartialTransactions(address, recipientAddress, signerPublicKey, height, fromHeight, toHeight, fromTransferAmount, toTransferAmount, type, embedded, transferMosaicId, pageSize, pageNumber, offset, order)

Search partial transactions

Returns a paginated list of partial transactions matching the supplied filters.  Use this endpoint for aggregate bonded transactions that still wait for required cosignatures. Use &#x60;searchUnconfirmedTransactions&#x60; for non-partial pending transactions, and use &#x60;searchConfirmedTransactions&#x60; once transactions are confirmed on-chain.  For cursor-style pagination on this endpoint, set &#x60;offset&#x60; to the &#x60;id&#x60; of the last transaction from the previous page. For general pagination strategy guidance, see the &#x60;offset&#x60; and &#x60;pageNumber&#x60; query parameter descriptions. 

### Example

```ts
import {
  Configuration,
  TransactionRoutesApi,
} from '';
import type { SearchPartialTransactionsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new TransactionRoutesApi();

  const body = {
    // string | Filter by address (include), in Base32 format.  The exact meaning depends on the endpoint: - transaction search: returns transactions where the address appears as the sender, recipient, or cosigner - account search: matches the account address - account restriction search: matches the restricted account address - hash lock and secret lock search: matches the lock owner address  On transaction search endpoints, this filter cannot be combined with `recipientAddress` and `signerPublicKey`.  (optional)
    address: address_example,
    // string | Filter transactions by recipient address in Base32 format (include). (optional)
    recipientAddress: recipientAddress_example,
    // string | Filter transactions by the public key of the signing account (include). (optional)
    signerPublicKey: signerPublicKey_example,
    // string | Filter by height (include). The exact meaning depends on the endpoint, for example block height for blocks or inclusion height for confirmed transactions.  (optional)
    height: height_example,
    // string | Only transactions at or above this block height are returned. (optional)
    fromHeight: fromHeight_example,
    // string | Only transactions at or below this block height are returned. (optional)
    toHeight: toHeight_example,
    // string | Requires providing the `transferMosaicId` filter. Only transfer transactions with an amount greater than or equal to this value for the specified mosaic ID are returned.  (optional)
    fromTransferAmount: fromTransferAmount_example,
    // string | Requires providing the `transferMosaicId` filter. Only transfer transactions with an amount less than or equal to this value for the specified mosaic ID are returned.  (optional)
    toTransferAmount: toTransferAmount_example,
    // Array<TransactionTypeEnum> | Filter by transaction type (include). To match multiple transaction types, add more query parameters like: `type=16974&type=16718`.  (optional)
    type: ...,
    // boolean | When `true`, the search also includes transactions embedded inside aggregate transactions. Otherwise, only top-level transactions are returned.  Results are **flattened**. Embedded transactions are returned as separate entries in the same `data` array as top-level transactions, not nested under their parent aggregate transaction. Sorting, filtering, and pagination are therefore applied to one combined result set containing both top-level and embedded transaction records.  In the database, embedded transactions are stored as separate documents linked to their parent aggregate by `meta.aggregateId` and `meta.aggregateHash`. When `embedded=false`, the search excludes documents with `meta.aggregateId`. When `embedded=true`, those documents are included in the page result alongside regular transactions. In REST responses, embedded entries are identified by `meta.aggregateId`, `meta.aggregateHash`, and their inner `meta.index`; unlike top-level transactions, they do not carry their own `meta.hash`.  **Note:** This field does not work as expected with the `address` filter. That filter matches the internal `meta.addresses` field used on top-level transaction documents, while embedded transaction documents do not carry that field. As a result, embedded transactions involving the specified address will not be returned even when `embedded=true`. Filters such as `recipientAddress` and `signerPublicKey` do not have this limitation.  (optional)
    embedded: true,
    // string | Filter transfer transactions by the mosaic ID in the transfer payload (include). (optional)
    transferMosaicId: transferMosaicId_example,
    // number | Select the number of entries to return per page. Values outside the allowed range are clamped to the schema minimum or maximum.  (optional)
    pageSize: 56,
    // number | Page number for numbered pagination (1-based).  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep `pageNumber=1` and advance pages by updating only `offset`. For numbered pagination flows, omit `offset` and advance pages by incrementing `pageNumber`.  (optional)
    pageNumber: 56,
    // string | Cursor for pagination. Provide the value of the sort field (`orderBy`) from the last entry of the previous page. **The offset type must match `orderBy`:** - `orderBy=id`: use the entry\'s `id` (ObjectId, 24-char hex). - `orderBy=height`: use the block height (string, e.g. `\"17592\"`). - `orderBy=balance`: use the mosaic balance amount (string, e.g. `\"1000000\"`).  Allowed `orderBy` values depend on the endpoint. If `orderBy` is omitted, `id` is used by default.  Set `offset` to the sort-field value of the last entry from the previous page. Across pages, this value decreases with `order=desc` and increases with `order=asc`.  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep `pageNumber=1` and advance pages by updating only `offset`. For numbered pagination flows, omit `offset` and advance pages by incrementing `pageNumber`.  (optional)
    offset: offset_example,
    // Order | Sort responses in ascending or descending order based on the collection property set on the param `orderBy`. If the request does not specify `orderBy`, REST returns the collection ordered by id. The default sort direction depends on the endpoint implementation.  (optional)
    order: ...,
  } satisfies SearchPartialTransactionsRequest;

  try {
    const data = await api.searchPartialTransactions(body);
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
| **recipientAddress** | `string` | Filter transactions by recipient address in Base32 format (include). | [Optional] [Defaults to `undefined`] |
| **signerPublicKey** | `string` | Filter transactions by the public key of the signing account (include). | [Optional] [Defaults to `undefined`] |
| **height** | `string` | Filter by height (include). The exact meaning depends on the endpoint, for example block height for blocks or inclusion height for confirmed transactions.  | [Optional] [Defaults to `undefined`] |
| **fromHeight** | `string` | Only transactions at or above this block height are returned. | [Optional] [Defaults to `undefined`] |
| **toHeight** | `string` | Only transactions at or below this block height are returned. | [Optional] [Defaults to `undefined`] |
| **fromTransferAmount** | `string` | Requires providing the &#x60;transferMosaicId&#x60; filter. Only transfer transactions with an amount greater than or equal to this value for the specified mosaic ID are returned.  | [Optional] [Defaults to `undefined`] |
| **toTransferAmount** | `string` | Requires providing the &#x60;transferMosaicId&#x60; filter. Only transfer transactions with an amount less than or equal to this value for the specified mosaic ID are returned.  | [Optional] [Defaults to `undefined`] |
| **type** | `Array<TransactionTypeEnum>` | Filter by transaction type (include). To match multiple transaction types, add more query parameters like: &#x60;type&#x3D;16974&amp;type&#x3D;16718&#x60;.  | [Optional] |
| **embedded** | `boolean` | When &#x60;true&#x60;, the search also includes transactions embedded inside aggregate transactions. Otherwise, only top-level transactions are returned.  Results are **flattened**. Embedded transactions are returned as separate entries in the same &#x60;data&#x60; array as top-level transactions, not nested under their parent aggregate transaction. Sorting, filtering, and pagination are therefore applied to one combined result set containing both top-level and embedded transaction records.  In the database, embedded transactions are stored as separate documents linked to their parent aggregate by &#x60;meta.aggregateId&#x60; and &#x60;meta.aggregateHash&#x60;. When &#x60;embedded&#x3D;false&#x60;, the search excludes documents with &#x60;meta.aggregateId&#x60;. When &#x60;embedded&#x3D;true&#x60;, those documents are included in the page result alongside regular transactions. In REST responses, embedded entries are identified by &#x60;meta.aggregateId&#x60;, &#x60;meta.aggregateHash&#x60;, and their inner &#x60;meta.index&#x60;; unlike top-level transactions, they do not carry their own &#x60;meta.hash&#x60;.  **Note:** This field does not work as expected with the &#x60;address&#x60; filter. That filter matches the internal &#x60;meta.addresses&#x60; field used on top-level transaction documents, while embedded transaction documents do not carry that field. As a result, embedded transactions involving the specified address will not be returned even when &#x60;embedded&#x3D;true&#x60;. Filters such as &#x60;recipientAddress&#x60; and &#x60;signerPublicKey&#x60; do not have this limitation.  | [Optional] [Defaults to `false`] |
| **transferMosaicId** | `string` | Filter transfer transactions by the mosaic ID in the transfer payload (include). | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Select the number of entries to return per page. Values outside the allowed range are clamped to the schema minimum or maximum.  | [Optional] [Defaults to `10`] |
| **pageNumber** | `number` | Page number for numbered pagination (1-based).  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep &#x60;pageNumber&#x3D;1&#x60; and advance pages by updating only &#x60;offset&#x60;. For numbered pagination flows, omit &#x60;offset&#x60; and advance pages by incrementing &#x60;pageNumber&#x60;.  | [Optional] [Defaults to `1`] |
| **offset** | `string` | Cursor for pagination. Provide the value of the sort field (&#x60;orderBy&#x60;) from the last entry of the previous page. **The offset type must match &#x60;orderBy&#x60;:** - &#x60;orderBy&#x3D;id&#x60;: use the entry\&#39;s &#x60;id&#x60; (ObjectId, 24-char hex). - &#x60;orderBy&#x3D;height&#x60;: use the block height (string, e.g. &#x60;\&quot;17592\&quot;&#x60;). - &#x60;orderBy&#x3D;balance&#x60;: use the mosaic balance amount (string, e.g. &#x60;\&quot;1000000\&quot;&#x60;).  Allowed &#x60;orderBy&#x60; values depend on the endpoint. If &#x60;orderBy&#x60; is omitted, &#x60;id&#x60; is used by default.  Set &#x60;offset&#x60; to the sort-field value of the last entry from the previous page. Across pages, this value decreases with &#x60;order&#x3D;desc&#x60; and increases with &#x60;order&#x3D;asc&#x60;.  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep &#x60;pageNumber&#x3D;1&#x60; and advance pages by updating only &#x60;offset&#x60;. For numbered pagination flows, omit &#x60;offset&#x60; and advance pages by incrementing &#x60;pageNumber&#x60;.  | [Optional] [Defaults to `undefined`] |
| **order** | `Order` | Sort responses in ascending or descending order based on the collection property set on the param &#x60;orderBy&#x60;. If the request does not specify &#x60;orderBy&#x60;, REST returns the collection ordered by id. The default sort direction depends on the endpoint implementation.  | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |

### Return type

[**TransactionPage**](TransactionPage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Page of partial transactions. |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchUnconfirmedTransactions

> TransactionPage searchUnconfirmedTransactions(address, recipientAddress, signerPublicKey, height, fromHeight, toHeight, fromTransferAmount, toTransferAmount, type, embedded, transferMosaicId, pageSize, pageNumber, offset, order)

Search unconfirmed transactions

Returns a paginated list of unconfirmed transactions matching the supplied filters.  Use this endpoint for transactions accepted by a node but not yet included in a block. Use &#x60;searchConfirmedTransactions&#x60; for on-chain transactions, and use &#x60;searchPartialTransactions&#x60; for aggregate bonded transactions waiting for cosignatures.  For cursor-style pagination on this endpoint, set &#x60;offset&#x60; to the &#x60;id&#x60; of the last transaction from the previous page. For general pagination strategy guidance, see the &#x60;offset&#x60; and &#x60;pageNumber&#x60; query parameter descriptions. 

### Example

```ts
import {
  Configuration,
  TransactionRoutesApi,
} from '';
import type { SearchUnconfirmedTransactionsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new TransactionRoutesApi();

  const body = {
    // string | Filter by address (include), in Base32 format.  The exact meaning depends on the endpoint: - transaction search: returns transactions where the address appears as the sender, recipient, or cosigner - account search: matches the account address - account restriction search: matches the restricted account address - hash lock and secret lock search: matches the lock owner address  On transaction search endpoints, this filter cannot be combined with `recipientAddress` and `signerPublicKey`.  (optional)
    address: address_example,
    // string | Filter transactions by recipient address in Base32 format (include). (optional)
    recipientAddress: recipientAddress_example,
    // string | Filter transactions by the public key of the signing account (include). (optional)
    signerPublicKey: signerPublicKey_example,
    // string | Filter by height (include). The exact meaning depends on the endpoint, for example block height for blocks or inclusion height for confirmed transactions.  (optional)
    height: height_example,
    // string | Only transactions at or above this block height are returned. (optional)
    fromHeight: fromHeight_example,
    // string | Only transactions at or below this block height are returned. (optional)
    toHeight: toHeight_example,
    // string | Requires providing the `transferMosaicId` filter. Only transfer transactions with an amount greater than or equal to this value for the specified mosaic ID are returned.  (optional)
    fromTransferAmount: fromTransferAmount_example,
    // string | Requires providing the `transferMosaicId` filter. Only transfer transactions with an amount less than or equal to this value for the specified mosaic ID are returned.  (optional)
    toTransferAmount: toTransferAmount_example,
    // Array<TransactionTypeEnum> | Filter by transaction type (include). To match multiple transaction types, add more query parameters like: `type=16974&type=16718`.  (optional)
    type: ...,
    // boolean | When `true`, the search also includes transactions embedded inside aggregate transactions. Otherwise, only top-level transactions are returned.  Results are **flattened**. Embedded transactions are returned as separate entries in the same `data` array as top-level transactions, not nested under their parent aggregate transaction. Sorting, filtering, and pagination are therefore applied to one combined result set containing both top-level and embedded transaction records.  In the database, embedded transactions are stored as separate documents linked to their parent aggregate by `meta.aggregateId` and `meta.aggregateHash`. When `embedded=false`, the search excludes documents with `meta.aggregateId`. When `embedded=true`, those documents are included in the page result alongside regular transactions. In REST responses, embedded entries are identified by `meta.aggregateId`, `meta.aggregateHash`, and their inner `meta.index`; unlike top-level transactions, they do not carry their own `meta.hash`.  **Note:** This field does not work as expected with the `address` filter. That filter matches the internal `meta.addresses` field used on top-level transaction documents, while embedded transaction documents do not carry that field. As a result, embedded transactions involving the specified address will not be returned even when `embedded=true`. Filters such as `recipientAddress` and `signerPublicKey` do not have this limitation.  (optional)
    embedded: true,
    // string | Filter transfer transactions by the mosaic ID in the transfer payload (include). (optional)
    transferMosaicId: transferMosaicId_example,
    // number | Select the number of entries to return per page. Values outside the allowed range are clamped to the schema minimum or maximum.  (optional)
    pageSize: 56,
    // number | Page number for numbered pagination (1-based).  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep `pageNumber=1` and advance pages by updating only `offset`. For numbered pagination flows, omit `offset` and advance pages by incrementing `pageNumber`.  (optional)
    pageNumber: 56,
    // string | Cursor for pagination. Provide the value of the sort field (`orderBy`) from the last entry of the previous page. **The offset type must match `orderBy`:** - `orderBy=id`: use the entry\'s `id` (ObjectId, 24-char hex). - `orderBy=height`: use the block height (string, e.g. `\"17592\"`). - `orderBy=balance`: use the mosaic balance amount (string, e.g. `\"1000000\"`).  Allowed `orderBy` values depend on the endpoint. If `orderBy` is omitted, `id` is used by default.  Set `offset` to the sort-field value of the last entry from the previous page. Across pages, this value decreases with `order=desc` and increases with `order=asc`.  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep `pageNumber=1` and advance pages by updating only `offset`. For numbered pagination flows, omit `offset` and advance pages by incrementing `pageNumber`.  (optional)
    offset: offset_example,
    // Order | Sort responses in ascending or descending order based on the collection property set on the param `orderBy`. If the request does not specify `orderBy`, REST returns the collection ordered by id. The default sort direction depends on the endpoint implementation.  (optional)
    order: ...,
  } satisfies SearchUnconfirmedTransactionsRequest;

  try {
    const data = await api.searchUnconfirmedTransactions(body);
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
| **recipientAddress** | `string` | Filter transactions by recipient address in Base32 format (include). | [Optional] [Defaults to `undefined`] |
| **signerPublicKey** | `string` | Filter transactions by the public key of the signing account (include). | [Optional] [Defaults to `undefined`] |
| **height** | `string` | Filter by height (include). The exact meaning depends on the endpoint, for example block height for blocks or inclusion height for confirmed transactions.  | [Optional] [Defaults to `undefined`] |
| **fromHeight** | `string` | Only transactions at or above this block height are returned. | [Optional] [Defaults to `undefined`] |
| **toHeight** | `string` | Only transactions at or below this block height are returned. | [Optional] [Defaults to `undefined`] |
| **fromTransferAmount** | `string` | Requires providing the &#x60;transferMosaicId&#x60; filter. Only transfer transactions with an amount greater than or equal to this value for the specified mosaic ID are returned.  | [Optional] [Defaults to `undefined`] |
| **toTransferAmount** | `string` | Requires providing the &#x60;transferMosaicId&#x60; filter. Only transfer transactions with an amount less than or equal to this value for the specified mosaic ID are returned.  | [Optional] [Defaults to `undefined`] |
| **type** | `Array<TransactionTypeEnum>` | Filter by transaction type (include). To match multiple transaction types, add more query parameters like: &#x60;type&#x3D;16974&amp;type&#x3D;16718&#x60;.  | [Optional] |
| **embedded** | `boolean` | When &#x60;true&#x60;, the search also includes transactions embedded inside aggregate transactions. Otherwise, only top-level transactions are returned.  Results are **flattened**. Embedded transactions are returned as separate entries in the same &#x60;data&#x60; array as top-level transactions, not nested under their parent aggregate transaction. Sorting, filtering, and pagination are therefore applied to one combined result set containing both top-level and embedded transaction records.  In the database, embedded transactions are stored as separate documents linked to their parent aggregate by &#x60;meta.aggregateId&#x60; and &#x60;meta.aggregateHash&#x60;. When &#x60;embedded&#x3D;false&#x60;, the search excludes documents with &#x60;meta.aggregateId&#x60;. When &#x60;embedded&#x3D;true&#x60;, those documents are included in the page result alongside regular transactions. In REST responses, embedded entries are identified by &#x60;meta.aggregateId&#x60;, &#x60;meta.aggregateHash&#x60;, and their inner &#x60;meta.index&#x60;; unlike top-level transactions, they do not carry their own &#x60;meta.hash&#x60;.  **Note:** This field does not work as expected with the &#x60;address&#x60; filter. That filter matches the internal &#x60;meta.addresses&#x60; field used on top-level transaction documents, while embedded transaction documents do not carry that field. As a result, embedded transactions involving the specified address will not be returned even when &#x60;embedded&#x3D;true&#x60;. Filters such as &#x60;recipientAddress&#x60; and &#x60;signerPublicKey&#x60; do not have this limitation.  | [Optional] [Defaults to `false`] |
| **transferMosaicId** | `string` | Filter transfer transactions by the mosaic ID in the transfer payload (include). | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Select the number of entries to return per page. Values outside the allowed range are clamped to the schema minimum or maximum.  | [Optional] [Defaults to `10`] |
| **pageNumber** | `number` | Page number for numbered pagination (1-based).  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep &#x60;pageNumber&#x3D;1&#x60; and advance pages by updating only &#x60;offset&#x60;. For numbered pagination flows, omit &#x60;offset&#x60; and advance pages by incrementing &#x60;pageNumber&#x60;.  | [Optional] [Defaults to `1`] |
| **offset** | `string` | Cursor for pagination. Provide the value of the sort field (&#x60;orderBy&#x60;) from the last entry of the previous page. **The offset type must match &#x60;orderBy&#x60;:** - &#x60;orderBy&#x3D;id&#x60;: use the entry\&#39;s &#x60;id&#x60; (ObjectId, 24-char hex). - &#x60;orderBy&#x3D;height&#x60;: use the block height (string, e.g. &#x60;\&quot;17592\&quot;&#x60;). - &#x60;orderBy&#x3D;balance&#x60;: use the mosaic balance amount (string, e.g. &#x60;\&quot;1000000\&quot;&#x60;).  Allowed &#x60;orderBy&#x60; values depend on the endpoint. If &#x60;orderBy&#x60; is omitted, &#x60;id&#x60; is used by default.  Set &#x60;offset&#x60; to the sort-field value of the last entry from the previous page. Across pages, this value decreases with &#x60;order&#x3D;desc&#x60; and increases with &#x60;order&#x3D;asc&#x60;.  Numbered and cursor pagination can be combined, but this is not recommended because the semantics are harder to reason about. For cursor-style flows, keep &#x60;pageNumber&#x3D;1&#x60; and advance pages by updating only &#x60;offset&#x60;. For numbered pagination flows, omit &#x60;offset&#x60; and advance pages by incrementing &#x60;pageNumber&#x60;.  | [Optional] [Defaults to `undefined`] |
| **order** | `Order` | Sort responses in ascending or descending order based on the collection property set on the param &#x60;orderBy&#x60;. If the request does not specify &#x60;orderBy&#x60;, REST returns the collection ordered by id. The default sort direction depends on the endpoint implementation.  | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |

### Return type

[**TransactionPage**](TransactionPage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Page of unconfirmed transactions. |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

