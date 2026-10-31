
# FinalizedBlockDTO

A block that has been finalized. It is made permanent and irreversible. Contains the finalization epoch, point, block height, and hash. 

## Properties

Name | Type
------------ | -------------
`finalizationEpoch` | number
`finalizationPoint` | number
`height` | string
`hash` | string

## Example

```typescript
import type { FinalizedBlockDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "finalizationEpoch": null,
  "finalizationPoint": null,
  "height": null,
  "hash": null,
} satisfies FinalizedBlockDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FinalizedBlockDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


