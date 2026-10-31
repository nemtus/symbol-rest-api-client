
# EmbeddedAccountMetadataTransactionDTO

Embedded transaction variant of `AccountMetadataTransactionDTO`.

## Properties

Name | Type
------------ | -------------
`signerPublicKey` | string
`version` | number
`network` | [NetworkTypeEnum](NetworkTypeEnum.md)
`type` | number
`targetAddress` | string
`scopedMetadataKey` | string
`valueSizeDelta` | number
`valueSize` | number
`value` | string

## Example

```typescript
import type { EmbeddedAccountMetadataTransactionDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "signerPublicKey": null,
  "version": null,
  "network": null,
  "type": null,
  "targetAddress": null,
  "scopedMetadataKey": null,
  "valueSizeDelta": null,
  "valueSize": null,
  "value": null,
} satisfies EmbeddedAccountMetadataTransactionDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmbeddedAccountMetadataTransactionDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


