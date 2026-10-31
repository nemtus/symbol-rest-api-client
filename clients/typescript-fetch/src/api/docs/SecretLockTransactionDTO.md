
# SecretLockTransactionDTO

Transaction to sends mosaics to a recipient if the proof used is revealed. If the duration is reached, the locked funds go back to the sender of the transaction. 

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
`secret` | string
`mosaicId` | string
`amount` | string
`duration` | string
`hashAlgorithm` | [LockHashAlgorithmEnum](LockHashAlgorithmEnum.md)

## Example

```typescript
import type { SecretLockTransactionDTO } from ''

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
  "secret": null,
  "mosaicId": null,
  "amount": null,
  "duration": null,
  "hashAlgorithm": null,
} satisfies SecretLockTransactionDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SecretLockTransactionDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


