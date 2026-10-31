
# MetadataEntryDTO

Full on-chain metadata entry identified by a composite hash.

## Properties

Name | Type
------------ | -------------
`version` | number
`compositeHash` | string
`sourceAddress` | string
`targetAddress` | string
`scopedMetadataKey` | string
`targetId` | [MetadataEntryDTOTargetId](MetadataEntryDTOTargetId.md)
`metadataType` | [MetadataTypeEnum](MetadataTypeEnum.md)
`valueSize` | number
`value` | string

## Example

```typescript
import type { MetadataEntryDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "version": null,
  "compositeHash": null,
  "sourceAddress": null,
  "targetAddress": null,
  "scopedMetadataKey": null,
  "targetId": null,
  "metadataType": null,
  "valueSize": null,
  "value": null,
} satisfies MetadataEntryDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MetadataEntryDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


