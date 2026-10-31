
# SecretLockEntryDTO

Locked mosaic funds that can be claimed by the recipient only after revealing a valid proof. If the proof is not revealed before the lock expires, the locked funds are returned to the sender. 

## Properties

Name | Type
------------ | -------------
`version` | number
`ownerAddress` | string
`mosaicId` | string
`amount` | string
`endHeight` | string
`status` | [LockStatus](LockStatus.md)
`hashAlgorithm` | [LockHashAlgorithmEnum](LockHashAlgorithmEnum.md)
`secret` | string
`recipientAddress` | string
`compositeHash` | string

## Example

```typescript
import type { SecretLockEntryDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "version": null,
  "ownerAddress": null,
  "mosaicId": null,
  "amount": null,
  "endHeight": null,
  "status": null,
  "hashAlgorithm": null,
  "secret": null,
  "recipientAddress": null,
  "compositeHash": null,
} satisfies SecretLockEntryDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SecretLockEntryDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


