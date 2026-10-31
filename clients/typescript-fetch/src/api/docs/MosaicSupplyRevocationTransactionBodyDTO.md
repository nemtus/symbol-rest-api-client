
# MosaicSupplyRevocationTransactionBodyDTO

Mosaic supply revocation transaction body with the source account, mosaic, and revoked amount.

## Properties

Name | Type
------------ | -------------
`sourceAddress` | string
`mosaicId` | string
`amount` | string

## Example

```typescript
import type { MosaicSupplyRevocationTransactionBodyDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "sourceAddress": null,
  "mosaicId": null,
  "amount": null,
} satisfies MosaicSupplyRevocationTransactionBodyDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MosaicSupplyRevocationTransactionBodyDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


