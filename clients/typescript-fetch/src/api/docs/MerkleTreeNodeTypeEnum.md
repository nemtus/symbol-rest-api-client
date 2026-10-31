
# MerkleTreeNodeTypeEnum

Type of [Merkle tree](https://docs.symbol.dev/concepts/data-validation.html) node used in state proofs: - `0`: Branch node (internal node with child links). - `255`: Leaf node (terminal node with value). 

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { MerkleTreeNodeTypeEnum } from ''

// TODO: Update the object below with actual values
const example = {
} satisfies MerkleTreeNodeTypeEnum

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MerkleTreeNodeTypeEnum
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


