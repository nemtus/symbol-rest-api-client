
# TransactionGroupEnum

Group that indicates the current processing state of a transaction: - `unconfirmed`: the transaction reached the network but is not yet included in a block. - `confirmed`: the transaction was included in a block. - `partial`: the transaction is waiting for additional cosignatures before it can be confirmed. - `failed`: the transaction was rejected during validation. 

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { TransactionGroupEnum } from ''

// TODO: Update the object below with actual values
const example = {
} satisfies TransactionGroupEnum

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransactionGroupEnum
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


