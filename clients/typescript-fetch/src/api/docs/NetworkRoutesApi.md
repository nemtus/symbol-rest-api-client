# NetworkRoutesApi

All URIs are relative to *https://reference.symboltest.net:3001*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCirculatingCurrencySupply**](NetworkRoutesApi.md#getcirculatingcurrencysupply) | **GET** /network/currency/supply/circulating | Returns circulating currency supply |
| [**getMaxCurrencySupply**](NetworkRoutesApi.md#getmaxcurrencysupply) | **GET** /network/currency/supply/max | Returns max currency supply |
| [**getNetworkInflation**](NetworkRoutesApi.md#getnetworkinflation) | **GET** /network/inflation | Returns the inflation distribution schedule |
| [**getNetworkInflationAtHeight**](NetworkRoutesApi.md#getnetworkinflationatheight) | **GET** /network/inflation/at/{height} | Returns the inflation distribution data at a specific height |
| [**getNetworkProperties**](NetworkRoutesApi.md#getnetworkproperties) | **GET** /network/properties | Get the network properties |
| [**getNetworkType**](NetworkRoutesApi.md#getnetworktype) | **GET** /network | Get the current network type of the chain |
| [**getRentalFees**](NetworkRoutesApi.md#getrentalfees) | **GET** /network/fees/rental | Get rental fees information |
| [**getTotalCurrencySupply**](NetworkRoutesApi.md#gettotalcurrencysupply) | **GET** /network/currency/supply/total | Returns total currency supply |
| [**getTransactionFees**](NetworkRoutesApi.md#gettransactionfees) | **GET** /network/fees/transaction | Get transaction fees information |



## getCirculatingCurrencySupply

> string getCirculatingCurrencySupply()

Returns circulating currency supply

Returns the current circulating supply of the network currency mosaic.  Circulating supply represents the portion of total on-chain supply that is not held in designated uncirculating or reserved accounts (e.g. nemesis or treasury accounts).  Data sources:   - Mosaic supply and divisibility from blockchain state   - Nemesis signer public key from network properties file   - Uncirculating account public keys defined in rest.json (&#x60;uncirculatingAccountPublicKeys&#x60;) 

### Example

```ts
import {
  Configuration,
  NetworkRoutesApi,
} from '';
import type { GetCirculatingCurrencySupplyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new NetworkRoutesApi();

  try {
    const data = await api.getCirculatingCurrencySupply();
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

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response containing the circulating currency supply.  The value is expressed in whole units with a fractional part determined by the mosaic divisibility and returned as a fixed-decimal string.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMaxCurrencySupply

> string getMaxCurrencySupply()

Returns max currency supply

Returns the maximum possible supply of the network currency mosaic.  Data sources:   - Maximum supply (&#x60;chain.maxMosaicAtomicUnits&#x60;) defined in the network properties file   - Network currency divisibility from blockchain state  This represents the protocol-level supply cap configured for the network currency. 

### Example

```ts
import {
  Configuration,
  NetworkRoutesApi,
} from '';
import type { GetMaxCurrencySupplyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new NetworkRoutesApi();

  try {
    const data = await api.getMaxCurrencySupply();
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

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response containing the max currency supply.  The value is expressed in whole units with a fractional part determined by the mosaic divisibility and returned as a fixed-decimal string.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getNetworkInflation

> Array&lt;NetworkInflationDTO&gt; getNetworkInflation()

Returns the inflation distribution schedule

Retrieves the network inflation table, where each entry specifies a starting block height and the reward amount applied from that height onward. 

### Example

```ts
import {
  Configuration,
  NetworkRoutesApi,
} from '';
import type { GetNetworkInflationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new NetworkRoutesApi();

  try {
    const data = await api.getNetworkInflation();
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

[**Array&lt;NetworkInflationDTO&gt;**](NetworkInflationDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Inflation distribution schedule successfully retrieved. |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getNetworkInflationAtHeight

> NetworkInflationDTO getNetworkInflationAtHeight(height)

Returns the inflation distribution data at a specific height

Retrieves network inflation parameters at a given block height. 

### Example

```ts
import {
  Configuration,
  NetworkRoutesApi,
} from '';
import type { GetNetworkInflationAtHeightRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new NetworkRoutesApi();

  const body = {
    // string | Filter by block height (include). Sequential block position in the chain; starts at 1 and increments by one.
    height: 1,
  } satisfies GetNetworkInflationAtHeightRequest;

  try {
    const data = await api.getNetworkInflationAtHeight(body);
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

[**NetworkInflationDTO**](NetworkInflationDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Inflation parameters at the given height successfully retrieved. |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getNetworkProperties

> NetworkConfigurationDTO getNetworkProperties()

Get the network properties

Returns the content from a catapult-server network configuration file (e.g. &#x60;config-network.properties&#x60;). To enable this feature, the REST setting &#x60;apiNode.networkPropertyFilePath&#x60; in the config file (e.g. &#x60;rest.json&#x60;) must define where the file is located. 

### Example

```ts
import {
  Configuration,
  NetworkRoutesApi,
} from '';
import type { GetNetworkPropertiesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new NetworkRoutesApi();

  try {
    const data = await api.getNetworkProperties();
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

[**NetworkConfigurationDTO**](NetworkConfigurationDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Network configuration successfully retrieved. |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getNetworkType

> NetworkTypeDTO getNetworkType()

Get the current network type of the chain

Returns the current network type.

### Example

```ts
import {
  Configuration,
  NetworkRoutesApi,
} from '';
import type { GetNetworkTypeRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new NetworkRoutesApi();

  try {
    const data = await api.getNetworkType();
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

[**NetworkTypeDTO**](NetworkTypeDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Network type successfully retrieved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRentalFees

> RentalFeesDTO getRentalFees()

Get rental fees information

Returns the estimated effective rental fees for namespaces and mosaics. This endpoint is only available if the REST instance has access to catapult-server &#x60;resources/config-network.properties&#x60; file. To activate this feature, add the setting &#x60;network.propertiesFilePath&#x60; in the configuration file (&#x60;rest/resources/rest.json&#x60;). 

### Example

```ts
import {
  Configuration,
  NetworkRoutesApi,
} from '';
import type { GetRentalFeesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new NetworkRoutesApi();

  try {
    const data = await api.getRentalFees();
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

[**RentalFeesDTO**](RentalFeesDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Rental fees successfully retrieved. |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTotalCurrencySupply

> string getTotalCurrencySupply()

Returns total currency supply

Returns the total current on-chain supply of the network currency mosaic.  Data sources:   - Mosaic supply and divisibility from blockchain state  This value includes both circulating and uncirculating balances and represents the full issued supply currently recorded on-chain. 

### Example

```ts
import {
  Configuration,
  NetworkRoutesApi,
} from '';
import type { GetTotalCurrencySupplyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new NetworkRoutesApi();

  try {
    const data = await api.getTotalCurrencySupply();
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

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response containing the total currency supply.  The value is expressed in whole units with a fractional part determined by the mosaic divisibility and returned as a fixed-decimal string.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTransactionFees

> TransactionFeesDTO getTransactionFees()

Get transaction fees information

Returns the average, median, highest, and lowest fee multiplier over the last &#x60;numBlocksTransactionFeeStats&#x60; blocks. The setting &#x60;numBlocksTransactionFeeStats&#x60; is adjustable in the REST configuration file (&#x60;rest.json&#x60;) per REST instance. 

### Example

```ts
import {
  Configuration,
  NetworkRoutesApi,
} from '';
import type { GetTransactionFeesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new NetworkRoutesApi();

  try {
    const data = await api.getTransactionFees();
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

[**TransactionFeesDTO**](TransactionFeesDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Transaction fees successfully retrieved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

