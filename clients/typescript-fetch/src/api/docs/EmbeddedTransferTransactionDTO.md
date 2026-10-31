
# EmbeddedTransferTransactionDTO

Embedded transaction variant of `TransferTransactionDTO`.

## Properties

Name | Type
------------ | -------------
`signerPublicKey` | string
`version` | number
`network` | [NetworkTypeEnum](NetworkTypeEnum.md)
`type` | number
`recipientAddress` | string
`mosaics` | [Array&lt;UnresolvedMosaic&gt;](UnresolvedMosaic.md)
`message` | string

## Example

```typescript
import type { EmbeddedTransferTransactionDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "signerPublicKey": null,
  "version": null,
  "network": null,
  "type": null,
  "recipientAddress": null,
  "mosaics": null,
  "message": null,
} satisfies EmbeddedTransferTransactionDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmbeddedTransferTransactionDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


