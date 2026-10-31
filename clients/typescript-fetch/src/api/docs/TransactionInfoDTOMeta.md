
# TransactionInfoDTOMeta

Metadata for the returned transaction entry. Top-level entries use `TransactionMetaDTO`. Embedded entries use `EmbeddedTransactionMetaDTO`. 

## Properties

Name | Type
------------ | -------------
`height` | string
`hash` | string
`merkleComponentHash` | string
`index` | number
`timestamp` | string
`feeMultiplier` | number
`aggregateHash` | string
`aggregateId` | string

## Example

```typescript
import type { TransactionInfoDTOMeta } from ''

// TODO: Update the object below with actual values
const example = {
  "height": null,
  "hash": null,
  "merkleComponentHash": null,
  "index": null,
  "timestamp": null,
  "feeMultiplier": null,
  "aggregateHash": null,
  "aggregateId": null,
} satisfies TransactionInfoDTOMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransactionInfoDTOMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


