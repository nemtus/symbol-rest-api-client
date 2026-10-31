
# Cosignature

Wrapper object containing the detached cosignature fields required to cosign an aggregate bonded transaction.

## Properties

Name | Type
------------ | -------------
`parentHash` | string
`signature` | string
`signerPublicKey` | string
`version` | string

## Example

```typescript
import type { Cosignature } from ''

// TODO: Update the object below with actual values
const example = {
  "parentHash": null,
  "signature": null,
  "signerPublicKey": null,
  "version": null,
} satisfies Cosignature

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Cosignature
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


