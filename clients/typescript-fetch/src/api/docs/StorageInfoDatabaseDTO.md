
# StorageInfoDatabaseDTO

MongoDB database statistics for the node\'s data store, as returned by [`db.stats()`](https://www.mongodb.com/docs/manual/reference/command/dbStats/). 

## Properties

Name | Type
------------ | -------------
`numIndexes` | [BsonLongDTO](BsonLongDTO.md)
`numObjects` | [BsonLongDTO](BsonLongDTO.md)
`dataSize` | number
`indexSize` | number
`storageSize` | number

## Example

```typescript
import type { StorageInfoDatabaseDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "numIndexes": null,
  "numObjects": null,
  "dataSize": null,
  "indexSize": null,
  "storageSize": null,
} satisfies StorageInfoDatabaseDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StorageInfoDatabaseDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


