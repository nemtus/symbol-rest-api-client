
# BlockMetaDTO

Block metadata including hash, total fee, generation hash, and transaction/statement counts.

## Properties

Name | Type
------------ | -------------
`hash` | string
`totalFee` | string
`generationHash` | string
`stateHashSubCacheMerkleRoots` | Array&lt;string&gt;
`totalTransactionsCount` | number
`transactionsCount` | number
`statementsCount` | number

## Example

```typescript
import type { BlockMetaDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "hash": null,
  "totalFee": null,
  "generationHash": null,
  "stateHashSubCacheMerkleRoots": null,
  "totalTransactionsCount": null,
  "transactionsCount": null,
  "statementsCount": null,
} satisfies BlockMetaDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BlockMetaDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


