
# ActivityBucketDTO

Supplementary data stored for [importance](https://docs.symbol.dev/concepts/consensus-algorithm.html#importance-calculation) recalculation under the PoS+ consensus algorithm. At the end of each importance period (defined by the `importanceGrouping` network property) the working bucket is finalized, existing buckets are shifted, and a new working bucket is created. Each bucket influences at most five importance recalculations. 

## Properties

Name | Type
------------ | -------------
`startHeight` | string
`totalFeesPaid` | string
`beneficiaryCount` | number
`rawScore` | string

## Example

```typescript
import type { ActivityBucketDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "startHeight": null,
  "totalFeesPaid": null,
  "beneficiaryCount": null,
  "rawScore": null,
} satisfies ActivityBucketDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ActivityBucketDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


