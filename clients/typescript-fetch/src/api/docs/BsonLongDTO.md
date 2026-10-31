
# BsonLongDTO

64-bit integer in the BSON Long shape produced by the MongoDB Node.js driver when serialized to JSON. 

## Properties

Name | Type
------------ | -------------
`low` | number
`high` | number
`unsigned` | boolean

## Example

```typescript
import type { BsonLongDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "low": null,
  "high": null,
  "unsigned": null,
} satisfies BsonLongDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BsonLongDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


