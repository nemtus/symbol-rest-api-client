
# AggregateTransactionBodyDTO

Aggregate transaction body with the hash of embedded transactions and the cosignatures attached to the aggregate transaction. 

## Properties

Name | Type
------------ | -------------
`transactionsHash` | string
`cosignatures` | [Array&lt;CosignatureDTO&gt;](CosignatureDTO.md)

## Example

```typescript
import type { AggregateTransactionBodyDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "transactionsHash": null,
  "cosignatures": null,
} satisfies AggregateTransactionBodyDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AggregateTransactionBodyDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


