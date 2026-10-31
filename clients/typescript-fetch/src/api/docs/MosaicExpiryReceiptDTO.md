
# MosaicExpiryReceiptDTO

Receipt emitted when a mosaic reaches the end of its lifetime and expires.

## Properties

Name | Type
------------ | -------------
`version` | number
`type` | [ReceiptTypeEnum](ReceiptTypeEnum.md)
`artifactId` | string

## Example

```typescript
import type { MosaicExpiryReceiptDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "version": null,
  "type": null,
  "artifactId": null,
} satisfies MosaicExpiryReceiptDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MosaicExpiryReceiptDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


