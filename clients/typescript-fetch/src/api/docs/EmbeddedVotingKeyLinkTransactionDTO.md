
# EmbeddedVotingKeyLinkTransactionDTO

Embedded transaction variant of `VotingKeyLinkTransactionDTO`.

## Properties

Name | Type
------------ | -------------
`signerPublicKey` | string
`version` | number
`network` | [NetworkTypeEnum](NetworkTypeEnum.md)
`type` | number
`linkedPublicKey` | string
`startEpoch` | number
`endEpoch` | number
`linkAction` | [LinkActionEnum](LinkActionEnum.md)

## Example

```typescript
import type { EmbeddedVotingKeyLinkTransactionDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "signerPublicKey": null,
  "version": null,
  "network": null,
  "type": null,
  "linkedPublicKey": null,
  "startEpoch": null,
  "endEpoch": null,
  "linkAction": null,
} satisfies EmbeddedVotingKeyLinkTransactionDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmbeddedVotingKeyLinkTransactionDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


