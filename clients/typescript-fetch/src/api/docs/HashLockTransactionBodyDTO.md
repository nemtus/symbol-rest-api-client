
# HashLockTransactionBodyDTO

Hash lock transaction body that locks mosaics as a prerequisite for announcing an aggregate bonded transaction.

## Properties

Name | Type
------------ | -------------
`mosaicId` | string
`amount` | string
`duration` | string
`hash` | string

## Example

```typescript
import type { HashLockTransactionBodyDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "mosaicId": null,
  "amount": null,
  "duration": null,
  "hash": null,
} satisfies HashLockTransactionBodyDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HashLockTransactionBodyDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


