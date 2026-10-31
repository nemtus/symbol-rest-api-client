
# MerklePathItemDTO

A single node in the Merkle proof path. Each item contains a hash and its position (left or right) relative to the proofHash being evaluated. 

## Properties

Name | Type
------------ | -------------
`position` | [PositionEnum](PositionEnum.md)
`hash` | string

## Example

```typescript
import type { MerklePathItemDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "position": null,
  "hash": null,
} satisfies MerklePathItemDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MerklePathItemDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


