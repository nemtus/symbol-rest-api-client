
# MerkleTreeBranchLinkDTO

Child link in a [Merkle tree branch](https://docs.symbol.dev/concepts/data-validation.html) node. Each link points to a child node (branch or leaf) via its hash. 

## Properties

Name | Type
------------ | -------------
`bit` | string
`link` | string

## Example

```typescript
import type { MerkleTreeBranchLinkDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "bit": null,
  "link": null,
} satisfies MerkleTreeBranchLinkDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MerkleTreeBranchLinkDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


