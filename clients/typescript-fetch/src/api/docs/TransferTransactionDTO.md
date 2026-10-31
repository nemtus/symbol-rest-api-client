
# TransferTransactionDTO

Transaction to transfer mosaics and a message to another account.

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
`recipientAddress` | string
`mosaics` | [Array&lt;UnresolvedMosaic&gt;](UnresolvedMosaic.md)
`message` | string

## Example

```typescript
import type { TransferTransactionDTO } from ''

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
  "recipientAddress": null,
  "mosaics": null,
  "message": null,
} satisfies TransferTransactionDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransferTransactionDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


