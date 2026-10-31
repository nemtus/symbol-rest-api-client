
# SecretLockTransactionBodyDTO

Secret lock transaction body that locks a mosaic for a recipient until the secret proof is revealed.

## Properties

Name | Type
------------ | -------------
`recipientAddress` | string
`secret` | string
`mosaicId` | string
`amount` | string
`duration` | string
`hashAlgorithm` | [LockHashAlgorithmEnum](LockHashAlgorithmEnum.md)

## Example

```typescript
import type { SecretLockTransactionBodyDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "recipientAddress": null,
  "secret": null,
  "mosaicId": null,
  "amount": null,
  "duration": null,
  "hashAlgorithm": null,
} satisfies SecretLockTransactionBodyDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SecretLockTransactionBodyDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


