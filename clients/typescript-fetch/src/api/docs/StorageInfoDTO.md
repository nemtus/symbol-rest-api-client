
# StorageInfoDTO

Storage statistics for the node: estimated document counts in the REST server\'s MongoDB collections (blocks, transactions, accounts) plus database allocation stats from `db.stats()`. Counts use estimated collection sizes and may differ slightly from exact figures under load. 

## Properties

Name | Type
------------ | -------------
`numBlocks` | number
`numTransactions` | number
`numAccounts` | number
`database` | [StorageInfoDatabaseDTO](StorageInfoDatabaseDTO.md)

## Example

```typescript
import type { StorageInfoDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "numBlocks": null,
  "numTransactions": null,
  "numAccounts": null,
  "database": null,
} satisfies StorageInfoDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StorageInfoDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


