
# TransactionStatementDTOReceiptsInner


## Properties

Name | Type
------------ | -------------
`version` | number
`type` | [ReceiptTypeEnum](ReceiptTypeEnum.md)
`mosaicId` | string
`amount` | string
`senderAddress` | string
`recipientAddress` | string
`targetAddress` | string
`artifactId` | string

## Example

```typescript
import type { TransactionStatementDTOReceiptsInner } from ''

// TODO: Update the object below with actual values
const example = {
  "version": null,
  "type": null,
  "mosaicId": null,
  "amount": null,
  "senderAddress": null,
  "recipientAddress": null,
  "targetAddress": null,
  "artifactId": null,
} satisfies TransactionStatementDTOReceiptsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransactionStatementDTOReceiptsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


