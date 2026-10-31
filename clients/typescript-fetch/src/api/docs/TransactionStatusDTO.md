
# TransactionStatusDTO

Current processing status of a transaction identified by its hash.

## Properties

Name | Type
------------ | -------------
`group` | [TransactionGroupEnum](TransactionGroupEnum.md)
`code` | [TransactionStatusEnum](TransactionStatusEnum.md)
`hash` | string
`deadline` | string
`height` | string

## Example

```typescript
import type { TransactionStatusDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "group": null,
  "code": null,
  "hash": null,
  "deadline": null,
  "height": null,
} satisfies TransactionStatusDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransactionStatusDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


