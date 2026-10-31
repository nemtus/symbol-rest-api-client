
# VotingKeyLinkTransactionDTO

Transaction to associate a BLS public key with an account. Required for node operators willing to vote finalized blocks. 

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
`startEpoch` | number
`endEpoch` | number
`linkAction` | [LinkActionEnum](LinkActionEnum.md)

## Example

```typescript
import type { VotingKeyLinkTransactionDTO } from ''

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
  "startEpoch": null,
  "endEpoch": null,
  "linkAction": null,
} satisfies VotingKeyLinkTransactionDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VotingKeyLinkTransactionDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


