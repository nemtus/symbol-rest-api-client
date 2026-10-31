
# StageEnum

Finalization message stage ([docs](https://docs.symbol.dev/concepts/block.html#finalization)): - `0`: Prevote: voters indicate which block hash they support. - `1`: Precommit: voters commit to the block after supermajority prevote. - `2`: Count: tally of votes (internal use). 

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { StageEnum } from ''

// TODO: Update the object below with actual values
const example = {
} satisfies StageEnum

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StageEnum
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


