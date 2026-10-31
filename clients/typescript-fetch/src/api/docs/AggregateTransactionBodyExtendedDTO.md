
# AggregateTransactionBodyExtendedDTO

Extended aggregate transaction body that, in addition to aggregate-level fields, also includes the embedded transactions contained in the aggregate. 

## Properties

Name | Type
------------ | -------------
`transactionsHash` | string
`cosignatures` | [Array&lt;CosignatureDTO&gt;](CosignatureDTO.md)
`transactions` | [Array&lt;EmbeddedTransactionInfoDTO&gt;](EmbeddedTransactionInfoDTO.md)

## Example

```typescript
import type { AggregateTransactionBodyExtendedDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "transactionsHash": null,
  "cosignatures": null,
  "transactions": null,
} satisfies AggregateTransactionBodyExtendedDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AggregateTransactionBodyExtendedDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


