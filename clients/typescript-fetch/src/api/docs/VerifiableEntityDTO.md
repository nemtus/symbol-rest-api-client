
# VerifiableEntityDTO

Verifiable entity base. Adds the `signature` field proving the entity was signed by the account identified in `signerPublicKey` (EntityDTO). Used by BlockDTO and TransactionDTO. The signature covers the serialized entity payload and can be verified using the signer\'s public key. 

## Properties

Name | Type
------------ | -------------
`signature` | string

## Example

```typescript
import type { VerifiableEntityDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "signature": null,
} satisfies VerifiableEntityDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VerifiableEntityDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


