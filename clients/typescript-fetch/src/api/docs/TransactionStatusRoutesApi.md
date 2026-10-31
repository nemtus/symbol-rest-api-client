# TransactionStatusRoutesApi

All URIs are relative to *https://reference.symboltest.net:3001*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getTransactionStatus**](TransactionStatusRoutesApi.md#gettransactionstatus) | **GET** /transactionStatus/{hash} | Get transaction status |
| [**getTransactionStatuses**](TransactionStatusRoutesApi.md#gettransactionstatuses) | **POST** /transactionStatus | Get transaction statuses |



## getTransactionStatus

> TransactionStatusDTO getTransactionStatus(hash)

Get transaction status

Returns the current status of the transaction identified by the given transaction hash.  When checking status after announcing a transaction, it is best to query the same node that received the announce request. If that node rejects the transaction before propagation, only that node may know the detailed rejection reason. Other nodes may not know the transaction at all because it was never propagated. 

### Example

```ts
import {
  Configuration,
  TransactionStatusRoutesApi,
} from '';
import type { GetTransactionStatusRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new TransactionStatusRoutesApi();

  const body = {
    // string | Transaction hash encoded as a 64-character hexadecimal string.
    hash: C8FC3FB54FDDFBCE0E8C71224990124E4EEC5AD5D30E592EDFA9524669A23810,
  } satisfies GetTransactionStatusRequest;

  try {
    const data = await api.getTransactionStatus(body);
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
| **hash** | `string` | Transaction hash encoded as a 64-character hexadecimal string. | [Defaults to `undefined`] |

### Return type

[**TransactionStatusDTO**](TransactionStatusDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Transaction status successfully retrieved. |  -  |
| **404** | The requested resource does not exist. Returned with HTTP status 404. The response body contains &#x60;code&#x60; (e.g. &#x60;ResourceNotFound&#x60;) and &#x60;message&#x60; with the missing resource identifier.  |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTransactionStatuses

> Array&lt;TransactionStatusDTO&gt; getTransactionStatuses(transactionHashes)

Get transaction statuses

Returns the current statuses of the transactions identified by the given array of transaction hashes.  When checking status after announcing transactions, it is best to query the same node that received the announce request. If that node rejects a transaction before propagation, only that node may know the detailed rejection reason. Other nodes may not know the transaction at all because it was never propagated. 

### Example

```ts
import {
  Configuration,
  TransactionStatusRoutesApi,
} from '';
import type { GetTransactionStatusesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new TransactionStatusRoutesApi();

  const body = {
    // TransactionHashes | Request body containing an array of transaction hashes to look up.
    transactionHashes: ...,
  } satisfies GetTransactionStatusesRequest;

  try {
    const data = await api.getTransactionStatuses(body);
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

[**Array&lt;TransactionStatusDTO&gt;**](TransactionStatusDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Transaction statuses successfully retrieved. |  -  |
| **400** | The provided argument was not an acceptable input. Returned with HTTP status 400. Typically indicates malformed request body (e.g. invalid JSON) or content that cannot be parsed. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidContent&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

