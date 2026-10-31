
# BalanceChangeReceiptDTO

Receipt emitted when transaction execution changes an account mosaic balance. For example, this receipt is emitted when harvesting rewards are credited to the harvester or beneficiary account. 

## Properties

Name | Type
------------ | -------------
`version` | number
`type` | [ReceiptTypeEnum](ReceiptTypeEnum.md)
`mosaicId` | string
`amount` | string
`targetAddress` | string

## Example

```typescript
import type { BalanceChangeReceiptDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "version": null,
  "type": null,
  "mosaicId": null,
  "amount": null,
  "targetAddress": null,
} satisfies BalanceChangeReceiptDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BalanceChangeReceiptDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


