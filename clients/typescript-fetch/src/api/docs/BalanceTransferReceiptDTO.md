
# BalanceTransferReceiptDTO

Receipt emitted when transaction execution transfers a mosaic balance between accounts. For example, this receipt is emitted when mosaic or namespace rental fees are paid. In that case, the sender address is the account registering the mosaic or namespace, and the recipient address is the configured rental fee sink address. 

## Properties

Name | Type
------------ | -------------
`version` | number
`type` | [ReceiptTypeEnum](ReceiptTypeEnum.md)
`mosaicId` | string
`amount` | string
`senderAddress` | string
`recipientAddress` | string

## Example

```typescript
import type { BalanceTransferReceiptDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "version": null,
  "type": null,
  "mosaicId": null,
  "amount": null,
  "senderAddress": null,
  "recipientAddress": null,
} satisfies BalanceTransferReceiptDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BalanceTransferReceiptDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


