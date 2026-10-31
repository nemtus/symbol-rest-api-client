
# MosaicAddressRestrictionEntryWrapperDTO

Wrapper object containing one mosaic address restriction entry.

## Properties

Name | Type
------------ | -------------
`version` | number
`compositeHash` | string
`entryType` | [MosaicRestrictionEntryTypeEnum](MosaicRestrictionEntryTypeEnum.md)
`mosaicId` | string
`targetAddress` | string
`restrictions` | [Array&lt;MosaicAddressRestrictionEntryDTO&gt;](MosaicAddressRestrictionEntryDTO.md)

## Example

```typescript
import type { MosaicAddressRestrictionEntryWrapperDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "version": null,
  "compositeHash": null,
  "entryType": null,
  "mosaicId": null,
  "targetAddress": null,
  "restrictions": null,
} satisfies MosaicAddressRestrictionEntryWrapperDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MosaicAddressRestrictionEntryWrapperDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


