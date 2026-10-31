
# NamespaceMetadataTransactionDTO

Transaction to create or modify metadata attached to a namespace.

## Properties

Name | Type
------------ | -------------
`size` | number
`signature` | string
`signerPublicKey` | string
`version` | number
`network` | [NetworkTypeEnum](NetworkTypeEnum.md)
`type` | number
`maxFee` | string
`deadline` | string
`targetAddress` | string
`scopedMetadataKey` | string
`targetNamespaceId` | string
`valueSizeDelta` | number
`valueSize` | number
`value` | string

## Example

```typescript
import type { NamespaceMetadataTransactionDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "size": null,
  "signature": null,
  "signerPublicKey": null,
  "version": null,
  "network": null,
  "type": null,
  "maxFee": null,
  "deadline": null,
  "targetAddress": null,
  "scopedMetadataKey": null,
  "targetNamespaceId": null,
  "valueSizeDelta": null,
  "valueSize": null,
  "value": null,
} satisfies NamespaceMetadataTransactionDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NamespaceMetadataTransactionDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


