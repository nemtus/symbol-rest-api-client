
# MerkleTreeLeafDTO

Terminal node of a [Patricia Merkle tree](https://docs.symbol.dev/concepts/data-validation.html) used in state proofs. A leaf stores the final path and the associated value (entity state hash). 

## Properties

Name | Type
------------ | -------------
`type` | [MerkleTreeNodeTypeEnum](MerkleTreeNodeTypeEnum.md)
`path` | string
`encodedPath` | string
`nibbleCount` | number
`value` | string
`leafHash` | string

## Example

```typescript
import type { MerkleTreeLeafDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "path": null,
  "encodedPath": null,
  "nibbleCount": null,
  "value": null,
  "leafHash": null,
} satisfies MerkleTreeLeafDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MerkleTreeLeafDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


