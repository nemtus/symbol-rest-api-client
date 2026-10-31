# NodeRoutesApi

All URIs are relative to *https://reference.symboltest.net:3001*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getNodeHealth**](NodeRoutesApi.md#getnodehealth) | **GET** /node/health | Get the node health information |
| [**getNodeInfo**](NodeRoutesApi.md#getnodeinfo) | **GET** /node/info | Get the node information |
| [**getNodeMetadata**](NodeRoutesApi.md#getnodemetadata) | **GET** /node/metadata | Retrieve node metadata |
| [**getNodePeers**](NodeRoutesApi.md#getnodepeers) | **GET** /node/peers | Get peers information |
| [**getNodeStorage**](NodeRoutesApi.md#getnodestorage) | **GET** /node/storage | Get the storage information of the node |
| [**getNodeTime**](NodeRoutesApi.md#getnodetime) | **GET** /node/time | Get the node time |
| [**getServerInfo**](NodeRoutesApi.md#getserverinfo) | **GET** /node/server | Get the version of the running REST component |
| [**getUnlockedAccount**](NodeRoutesApi.md#getunlockedaccount) | **GET** /node/unlockedaccount | Get the unlocked harvesting account public keys |



## getNodeHealth

> NodeHealthInfoDTO getNodeHealth()

Get the node health information

Supplies information regarding the connection and services status.

### Example

```ts
import {
  Configuration,
  NodeRoutesApi,
} from '';
import type { GetNodeHealthRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new NodeRoutesApi();

  try {
    const data = await api.getNodeHealth();
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

[**NodeHealthInfoDTO**](NodeHealthInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Both API node and database services are reachable from REST server. |  -  |
| **503** | Either API node or database service is unavailable or unreachable from REST server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getNodeInfo

> NodeInfoDTO getNodeInfo()

Get the node information

Supplies additional information about the application running on a node.

### Example

```ts
import {
  Configuration,
  NodeRoutesApi,
} from '';
import type { GetNodeInfoRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new NodeRoutesApi();

  try {
    const data = await api.getNodeInfo();
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

[**NodeInfoDTO**](NodeInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Node information successfully retrieved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getNodeMetadata

> { [key: string]: string; } getNodeMetadata()

Retrieve node metadata

Gets the node metadata information that has been set by the node operator.  **How to set:** Add a top-level &#x60;nodeMetadata&#x60; object in the REST server JSON configuration file. Example:  &#x60;&#x60;&#x60;json {   \&quot;nodeMetadata\&quot;: {     \&quot;deploymentTool\&quot;: \&quot;symbol-shoestring\&quot;,     \&quot;version\&quot;: \&quot;1.0.0\&quot;,     \&quot;customLabel\&quot;: \&quot;my-node\&quot;   } } &#x60;&#x60;&#x60;  The entire &#x60;nodeMetadata&#x60; object is served as-is; add any key-value pairs to personalize your node. 

### Example

```ts
import {
  Configuration,
  NodeRoutesApi,
} from '';
import type { GetNodeMetadataRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new NodeRoutesApi();

  try {
    const data = await api.getNodeMetadata();
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

**{ [key: string]: string; }**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Node metadata successfully retrieved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getNodePeers

> Array&lt;NodeInfoDTO&gt; getNodePeers()

Get peers information

Gets the list of peers visible by the node.

### Example

```ts
import {
  Configuration,
  NodeRoutesApi,
} from '';
import type { GetNodePeersRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new NodeRoutesApi();

  try {
    const data = await api.getNodePeers();
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

[**Array&lt;NodeInfoDTO&gt;**](NodeInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Node peers successfully retrieved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getNodeStorage

> StorageInfoDTO getNodeStorage()

Get the storage information of the node

Returns estimated counts of blocks, transactions, and accounts in the REST server\&#39;s MongoDB database, along with database size statistics (&#x60;db.stats()&#x60;). 

### Example

```ts
import {
  Configuration,
  NodeRoutesApi,
} from '';
import type { GetNodeStorageRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new NodeRoutesApi();

  try {
    const data = await api.getNodeStorage();
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

[**StorageInfoDTO**](StorageInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Storage information successfully retrieved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getNodeTime

> NodeTimeDTO getNodeTime()

Get the node time

Gets the node time at the moment the reply was sent and received.

### Example

```ts
import {
  Configuration,
  NodeRoutesApi,
} from '';
import type { GetNodeTimeRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new NodeRoutesApi();

  try {
    const data = await api.getNodeTime();
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

[**NodeTimeDTO**](NodeTimeDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Node time successfully retrieved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getServerInfo

> ServerInfoDTO getServerInfo()

Get the version of the running REST component

Returns the version of the running catapult-rest component.

### Example

```ts
import {
  Configuration,
  NodeRoutesApi,
} from '';
import type { GetServerInfoRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new NodeRoutesApi();

  try {
    const data = await api.getServerInfo();
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

[**ServerInfoDTO**](ServerInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Server information successfully retrieved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUnlockedAccount

> UnlockedAccountDTO getUnlockedAccount()

Get the unlocked harvesting account public keys

Returns array of unlocked account public keys.

### Example

```ts
import {
  Configuration,
  NodeRoutesApi,
} from '';
import type { GetUnlockedAccountRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new NodeRoutesApi();

  try {
    const data = await api.getUnlockedAccount();
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

[**UnlockedAccountDTO**](UnlockedAccountDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Unlocked harvesting accounts successfully retrieved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

