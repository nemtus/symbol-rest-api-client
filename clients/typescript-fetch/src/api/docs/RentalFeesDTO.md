
# RentalFeesDTO

Estimated effective rental fees for on-chain resources: root namespace (per block), child namespace, and mosaic creation. All amounts are in **network currency** and expressed in **smallest (atomic) units**. 

## Properties

Name | Type
------------ | -------------
`effectiveRootNamespaceRentalFeePerBlock` | string
`effectiveChildNamespaceRentalFee` | string
`effectiveMosaicRentalFee` | string

## Example

```typescript
import type { RentalFeesDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "effectiveRootNamespaceRentalFeePerBlock": null,
  "effectiveChildNamespaceRentalFee": null,
  "effectiveMosaicRentalFee": null,
} satisfies RentalFeesDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RentalFeesDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


