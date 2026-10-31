# ChainRoutesApi

All URIs are relative to *https://reference.symboltest.net:3001*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getChainInfo**](ChainRoutesApi.md#getchaininfo) | **GET** /chain/info | Get chain information |



## getChainInfo

> ChainInfoDTO getChainInfo()

Get chain information

Returns the current state of the blockchain: chain height, chain score, and the latest finalized block. 

### Example

```ts
import {
  Configuration,
  ChainRoutesApi,
} from '';
import type { GetChainInfoRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ChainRoutesApi();

  try {
    const data = await api.getChainInfo();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ChainInfoDTO**](ChainInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Chain information successfully retrieved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

