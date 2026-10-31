
# ChainInfoDTO

Chain state: block height, chain score, and the latest finalized block (most recent block made permanent; it will never be rolled back). The chain score is the sum of all block scores in the chain; each block contributes `difficulty − time elapsed since previous block`. Higher score = better chain. Used during synchronization to select the canonical chain when forks exist. 

## Properties

Name | Type
------------ | -------------
`height` | string
`scoreHigh` | string
`scoreLow` | string
`latestFinalizedBlock` | [FinalizedBlockDTO](FinalizedBlockDTO.md)

## Example

```typescript
import type { ChainInfoDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "height": null,
  "scoreHigh": null,
  "scoreLow": null,
  "latestFinalizedBlock": null,
} satisfies ChainInfoDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChainInfoDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


