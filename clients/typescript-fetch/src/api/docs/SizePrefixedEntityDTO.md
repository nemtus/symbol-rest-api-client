
# SizePrefixedEntityDTO

Size-prefixed entity base. Adds the `size` field indicating the total byte length of the serialized entity. Used by BlockDTO and TransactionDTO. In Symbol\'s binary format, entities are prefixed with their size for efficient parsing. 

## Properties

Name | Type
------------ | -------------
`size` | number

## Example

```typescript
import type { SizePrefixedEntityDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "size": null,
} satisfies SizePrefixedEntityDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SizePrefixedEntityDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


