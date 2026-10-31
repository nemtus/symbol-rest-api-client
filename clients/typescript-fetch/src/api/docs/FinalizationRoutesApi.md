# FinalizationRoutesApi

All URIs are relative to *https://reference.symboltest.net:3001*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getFinalizationProofAtEpoch**](FinalizationRoutesApi.md#getfinalizationproofatepoch) | **GET** /finalization/proof/epoch/{epoch} | Get finalization proof at epoch |
| [**getFinalizationProofAtHeight**](FinalizationRoutesApi.md#getfinalizationproofatheight) | **GET** /finalization/proof/height/{height} | Get finalization proof at height |



## getFinalizationProofAtEpoch

> FinalizationProofDTO getFinalizationProofAtEpoch(epoch)

Get finalization proof at epoch

Returns the finalization proof for the greatest block height associated with the given finalization epoch.

### Example

```ts
import {
  Configuration,
  FinalizationRoutesApi,
} from '';
import type { GetFinalizationProofAtEpochRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new FinalizationRoutesApi();

  const body = {
    // number | The finalization epoch is a sequential integer. Each epoch groups a set of blocks for finalization voting (interval defined by network config, e.g. 1440 blocks for mainnet). 
    epoch: 789,
  } satisfies GetFinalizationProofAtEpochRequest;

  try {
    const data = await api.getFinalizationProofAtEpoch(body);
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
| **epoch** | `number` | The finalization epoch is a sequential integer. Each epoch groups a set of blocks for finalization voting (interval defined by network config, e.g. 1440 blocks for mainnet).  | [Defaults to `undefined`] |

### Return type

[**FinalizationProofDTO**](FinalizationProofDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Finalization proof successfully retrieved. |  -  |
| **404** | The requested resource does not exist. Returned with HTTP status 404. The response body contains &#x60;code&#x60; (e.g. &#x60;ResourceNotFound&#x60;) and &#x60;message&#x60; with the missing resource identifier.  |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFinalizationProofAtHeight

> FinalizationProofDTO getFinalizationProofAtHeight(height)

Get finalization proof at height

Returns the finalization proof for the block at the given height.

### Example

```ts
import {
  Configuration,
  FinalizationRoutesApi,
} from '';
import type { GetFinalizationProofAtHeightRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new FinalizationRoutesApi();

  const body = {
    // string | Filter by block height (include). Sequential block position in the chain; starts at 1 and increments by one.
    height: 1,
  } satisfies GetFinalizationProofAtHeightRequest;

  try {
    const data = await api.getFinalizationProofAtHeight(body);
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

[**FinalizationProofDTO**](FinalizationProofDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Finalization proof successfully retrieved. |  -  |
| **404** | The requested resource does not exist. Returned with HTTP status 404. The response body contains &#x60;code&#x60; (e.g. &#x60;ResourceNotFound&#x60;) and &#x60;message&#x60; with the missing resource identifier.  |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

