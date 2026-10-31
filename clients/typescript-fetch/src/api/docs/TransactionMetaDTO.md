
# TransactionMetaDTO

Metadata for a top-level (non-embedded) transaction entry returned by the transaction endpoints. For confirmed transactions, these fields describe the transaction\'s position in the block and the proof-related hashes associated with that block entry.  For unconfirmed top-level transactions, REST returns: - `height` = `\"0\"` - `index` = `0` - `hash` = transaction hash - `merkleComponentHash` = transaction hash  Block-derived fields such as `timestamp` and `feeMultiplier` are not present until the transaction is included in a block. 

## Properties

Name | Type
------------ | -------------
`height` | string
`hash` | string
`merkleComponentHash` | string
`index` | number
`timestamp` | string
`feeMultiplier` | number

## Example

```typescript
import type { TransactionMetaDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "height": null,
  "hash": null,
  "merkleComponentHash": null,
  "index": null,
  "timestamp": null,
  "feeMultiplier": null,
} satisfies TransactionMetaDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransactionMetaDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


