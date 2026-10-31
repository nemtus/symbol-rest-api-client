
# NamespaceMetadataTransactionBodyDTO

Namespace metadata transaction body with the target namespace, metadata key, and metadata value update. 

## Properties

Name | Type
------------ | -------------
`targetAddress` | string
`scopedMetadataKey` | string
`targetNamespaceId` | string
`valueSizeDelta` | number
`valueSize` | number
`value` | string

## Example

```typescript
import type { NamespaceMetadataTransactionBodyDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "targetAddress": null,
  "scopedMetadataKey": null,
  "targetNamespaceId": null,
  "valueSizeDelta": null,
  "valueSize": null,
  "value": null,
} satisfies NamespaceMetadataTransactionBodyDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NamespaceMetadataTransactionBodyDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


