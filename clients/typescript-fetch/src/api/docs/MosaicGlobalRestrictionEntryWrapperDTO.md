
# MosaicGlobalRestrictionEntryWrapperDTO

Wrapper object containing one mosaic global restriction entry.

## Properties

Name | Type
------------ | -------------
`version` | number
`compositeHash` | string
`entryType` | [MosaicRestrictionEntryTypeEnum](MosaicRestrictionEntryTypeEnum.md)
`mosaicId` | string
`restrictions` | [Array&lt;MosaicGlobalRestrictionEntryDTO&gt;](MosaicGlobalRestrictionEntryDTO.md)

## Example

```typescript
import type { MosaicGlobalRestrictionEntryWrapperDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "version": null,
  "compositeHash": null,
  "entryType": null,
  "mosaicId": null,
  "restrictions": null,
} satisfies MosaicGlobalRestrictionEntryWrapperDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MosaicGlobalRestrictionEntryWrapperDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


