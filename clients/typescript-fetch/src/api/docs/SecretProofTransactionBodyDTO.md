
# SecretProofTransactionBodyDTO

Secret proof transaction body that reveals the proof needed to complete a secret lock.

## Properties

Name | Type
------------ | -------------
`recipientAddress` | string
`secret` | string
`hashAlgorithm` | [LockHashAlgorithmEnum](LockHashAlgorithmEnum.md)
`proof` | string

## Example

```typescript
import type { SecretProofTransactionBodyDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "recipientAddress": null,
  "secret": null,
  "hashAlgorithm": null,
  "proof": null,
} satisfies SecretProofTransactionBodyDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SecretProofTransactionBodyDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


