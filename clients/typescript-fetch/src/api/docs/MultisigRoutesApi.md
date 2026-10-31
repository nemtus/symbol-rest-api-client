# MultisigRoutesApi

All URIs are relative to *https://reference.symboltest.net:3001*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAccountMultisig**](MultisigRoutesApi.md#getaccountmultisig) | **GET** /account/{address}/multisig | Get multisig account information |
| [**getAccountMultisigGraph**](MultisigRoutesApi.md#getaccountmultisiggraph) | **GET** /account/{address}/multisig/graph | Get multisig account graph information |
| [**getAccountMultisigMerkle**](MultisigRoutesApi.md#getaccountmultisigmerkle) | **GET** /account/{address}/multisig/merkle | Get multisig account Merkle information |



## getAccountMultisig

> MultisigAccountInfoDTO getAccountMultisig(address)

Get multisig account information

Returns the current multisig state for an account.  The response includes the approval thresholds for the multisig account, its direct cosignatories, and the multisig accounts where the queried account is itself acting as a cosignatory.  If the queried account is only a cosignatory, the endpoint still returns &#x60;200&#x60;, with &#x60;minApproval &#x3D; 0&#x60;, &#x60;minRemoval &#x3D; 0&#x60;, an empty &#x60;cosignatoryAddresses&#x60; array, and the related multisig accounts listed in &#x60;multisigAddresses&#x60;.  If the account is neither a multisig account nor a cosignatory of any multisig account, the endpoint returns &#x60;404&#x60;. 

### Example

```ts
import {
  Configuration,
  MultisigRoutesApi,
} from '';
import type { GetAccountMultisigRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new MultisigRoutesApi();

  const body = {
    // string | Account address in Base32-encoded format.
    address: address_example,
  } satisfies GetAccountMultisigRequest;

  try {
    const data = await api.getAccountMultisig(body);
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

### Return type

[**MultisigAccountInfoDTO**](MultisigAccountInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Multisig state for the requested account. |  -  |
| **404** | The requested resource does not exist. Returned with HTTP status 404. The response body contains &#x60;code&#x60; (e.g. &#x60;ResourceNotFound&#x60;) and &#x60;message&#x60; with the missing resource identifier.  |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAccountMultisigGraph

> Array&lt;MultisigAccountGraphInfoDTO&gt; getAccountMultisigGraph(address)

Get multisig account graph information

Returns the multisig graph centered on the requested account.  Level &#x60;0&#x60; contains the requested account. Negative levels contain multisig accounts for which the queried account acts as a cosignatory. Positive levels contain multisig relationships discovered through the queried account\&#39;s cosignatories.  If the requested account is a cosignatory but is not itself managed as a multisig account, the response still includes level &#x60;0&#x60; for that account. In this case, the level &#x60;0&#x60; entry has &#x60;minApproval &#x3D; 0&#x60;, &#x60;minRemoval &#x3D; 0&#x60;, an empty &#x60;cosignatoryAddresses&#x60; array, and &#x60;multisigAddresses&#x60; listing the multisig accounts it can cosign.  If the requested account is neither a multisig account nor a cosignatory of any multisig account, no multisig state entry exists for it and the endpoint returns &#x60;404&#x60;.  If the requested account is itself a multisig account, the response includes its multisig state at level &#x60;0&#x60; together with any reachable negative and positive graph levels. 

### Example

```ts
import {
  Configuration,
  MultisigRoutesApi,
} from '';
import type { GetAccountMultisigGraphRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new MultisigRoutesApi();

  const body = {
    // string | Account address in Base32-encoded format.
    address: address_example,
  } satisfies GetAccountMultisigGraphRequest;

  try {
    const data = await api.getAccountMultisigGraph(body);
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

### Return type

[**Array&lt;MultisigAccountGraphInfoDTO&gt;**](MultisigAccountGraphInfoDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Multisig graph grouped by level around the requested account. |  -  |
| **404** | The requested resource does not exist. Returned with HTTP status 404. The response body contains &#x60;code&#x60; (e.g. &#x60;ResourceNotFound&#x60;) and &#x60;message&#x60; with the missing resource identifier.  |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAccountMultisigMerkle

> MerkleStateInfoDTO getAccountMultisigMerkle(address)

Get multisig account Merkle information

Returns the [Merkle proof](https://docs.symbol.dev/concepts/data-validation.html#merkle-proof) for the multisig state entry associated with the requested account.  If the requested account is a cosignatory, the endpoint returns the Merkle proof for that account\&#39;s multisig state entry. Cosignatory-only accounts still have a multisig state entry with &#x60;minApproval &#x3D; 0&#x60;, &#x60;minRemoval &#x3D; 0&#x60;, an empty &#x60;cosignatoryAddresses&#x60; array, and &#x60;multisigAddresses&#x60; listing the multisig accounts they can cosign.  If the requested account is itself a multisig account, the endpoint returns the Merkle proof for that multisig account state entry.  If the requested account is neither a multisig account nor a cosignatory, the endpoint still returns a Merkle proof response, but it is a negative proof showing that no multisig state entry exists for the supplied address. 

### Example

```ts
import {
  Configuration,
  MultisigRoutesApi,
} from '';
import type { GetAccountMultisigMerkleRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new MultisigRoutesApi();

  const body = {
    // string | Account address in Base32-encoded format.
    address: address_example,
  } satisfies GetAccountMultisigMerkleRequest;

  try {
    const data = await api.getAccountMultisigMerkle(body);
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
| **200** | Merkle proof for the requested multisig state entry. |  -  |
| **409** | The required arguments were missing or unacceptable for the request. Returned with HTTP status 409. The response body contains &#x60;code&#x60; (e.g. &#x60;InvalidArgument&#x60;) and &#x60;message&#x60; with a human-readable description.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

