
# MerkleTreeBranchDTO

Internal node of a [Patricia Merkle tree](https://docs.symbol.dev/concepts/data-validation.html) used in state proofs. A branch has up to 16 child links (one per nibble 0 to F) and a path prefix. 

## Properties

Name | Type
------------ | -------------
`type` | [MerkleTreeNodeTypeEnum](MerkleTreeNodeTypeEnum.md)
`path` | string
`encodedPath` | string
`nibbleCount` | number
`linkMask` | string
`links` | [Array&lt;MerkleTreeBranchLinkDTO&gt;](MerkleTreeBranchLinkDTO.md)
`branchHash` | string

## Example

```typescript
import type { MerkleTreeBranchDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "path": null,
  "encodedPath": null,
  "nibbleCount": null,
  "linkMask": null,
  "links": null,
  "branchHash": null,
} satisfies MerkleTreeBranchDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MerkleTreeBranchDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


