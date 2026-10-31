
# MosaicAddressRestrictionTransactionBodyDTO

Mosaic address restriction transaction body that sets a restriction value for a target address and key.

## Properties

Name | Type
------------ | -------------
`mosaicId` | string
`restrictionKey` | string
`previousRestrictionValue` | string
`newRestrictionValue` | string
`targetAddress` | string

## Example

```typescript
import type { MosaicAddressRestrictionTransactionBodyDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "mosaicId": null,
  "restrictionKey": null,
  "previousRestrictionValue": null,
  "newRestrictionValue": null,
  "targetAddress": null,
} satisfies MosaicAddressRestrictionTransactionBodyDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MosaicAddressRestrictionTransactionBodyDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


