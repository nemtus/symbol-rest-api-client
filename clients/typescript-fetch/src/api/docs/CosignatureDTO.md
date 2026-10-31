
# CosignatureDTO


## Properties

Name | Type
------------ | -------------
`signature` | string
`version` | string
`signerPublicKey` | string

## Example

```typescript
import type { CosignatureDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "signature": null,
  "version": null,
  "signerPublicKey": null,
} satisfies CosignatureDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CosignatureDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


