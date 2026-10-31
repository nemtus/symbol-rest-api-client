
# InflationReceiptDTO

Receipt emitted when new network currency mosaic units are created by inflation.

## Properties

Name | Type
------------ | -------------
`version` | number
`type` | [ReceiptTypeEnum](ReceiptTypeEnum.md)
`mosaicId` | string
`amount` | string

## Example

```typescript
import type { InflationReceiptDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "version": null,
  "type": null,
  "mosaicId": null,
  "amount": null,
} satisfies InflationReceiptDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InflationReceiptDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


