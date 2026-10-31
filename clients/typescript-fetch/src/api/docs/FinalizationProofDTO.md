
# FinalizationProofDTO

Cryptographic proof that a block was finalized. Contains the finalized block identity (epoch, point, height, hash) and message groups (prevote, precommit, count) with BLS signatures. 

## Properties

Name | Type
------------ | -------------
`version` | number
`finalizationEpoch` | number
`finalizationPoint` | number
`height` | string
`hash` | string
`messageGroups` | [Array&lt;MessageGroup&gt;](MessageGroup.md)

## Example

```typescript
import type { FinalizationProofDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "version": null,
  "finalizationEpoch": null,
  "finalizationPoint": null,
  "height": null,
  "hash": null,
  "messageGroups": null,
} satisfies FinalizationProofDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FinalizationProofDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


