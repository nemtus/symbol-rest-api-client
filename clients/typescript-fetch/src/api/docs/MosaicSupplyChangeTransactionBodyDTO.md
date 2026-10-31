
# MosaicSupplyChangeTransactionBodyDTO

Mosaic supply change transaction body with the target mosaic, supply delta, and direction.

## Properties

Name | Type
------------ | -------------
`mosaicId` | string
`delta` | string
`action` | [MosaicSupplyChangeActionEnum](MosaicSupplyChangeActionEnum.md)

## Example

```typescript
import type { MosaicSupplyChangeTransactionBodyDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "mosaicId": null,
  "delta": null,
  "action": null,
} satisfies MosaicSupplyChangeTransactionBodyDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MosaicSupplyChangeTransactionBodyDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


