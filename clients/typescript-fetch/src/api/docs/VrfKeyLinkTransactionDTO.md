
# VrfKeyLinkTransactionDTO

Transaction to link an account with a VRF public key. The key is used to randomize block production and leader/participant selection. Required for all harvesting eligible accounts. 

## Properties

Name | Type
------------ | -------------
`size` | number
`signature` | string
`signerPublicKey` | string
`version` | number
`network` | [NetworkTypeEnum](NetworkTypeEnum.md)
`type` | number
`maxFee` | string
`deadline` | string
`linkedPublicKey` | string
`linkAction` | [LinkActionEnum](LinkActionEnum.md)

## Example

```typescript
import type { VrfKeyLinkTransactionDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "size": null,
  "signature": null,
  "signerPublicKey": null,
  "version": null,
  "network": null,
  "type": null,
  "maxFee": null,
  "deadline": null,
  "linkedPublicKey": null,
  "linkAction": null,
} satisfies VrfKeyLinkTransactionDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VrfKeyLinkTransactionDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


