
# MerkleStateInfoDTO

The Merkle path information clients can use to prove the state of the given entity. 

## Properties

Name | Type
------------ | -------------
`raw` | string
`tree` | [Array&lt;MerkleStateInfoDTOTreeInner&gt;](MerkleStateInfoDTOTreeInner.md)

## Example

```typescript
import type { MerkleStateInfoDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "raw": null,
  "tree": null,
} satisfies MerkleStateInfoDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MerkleStateInfoDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


