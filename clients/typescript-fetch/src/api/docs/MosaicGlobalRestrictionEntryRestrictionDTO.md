
# MosaicGlobalRestrictionEntryRestrictionDTO

Rule definition for a global mosaic restriction key.

## Properties

Name | Type
------------ | -------------
`referenceMosaicId` | string
`restrictionValue` | string
`restrictionType` | [MosaicRestrictionTypeEnum](MosaicRestrictionTypeEnum.md)

## Example

```typescript
import type { MosaicGlobalRestrictionEntryRestrictionDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "referenceMosaicId": null,
  "restrictionValue": null,
  "restrictionType": null,
} satisfies MosaicGlobalRestrictionEntryRestrictionDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MosaicGlobalRestrictionEntryRestrictionDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


