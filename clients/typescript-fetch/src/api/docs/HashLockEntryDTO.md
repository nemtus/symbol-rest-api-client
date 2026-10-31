
# HashLockEntryDTO

Locked funds deposited before announcing an aggregate bonded transaction. If the aggregate bonded transaction is not completed before the lock expires, the locked funds are credited to the block harvester. 

## Properties

Name | Type
------------ | -------------
`version` | number
`ownerAddress` | string
`mosaicId` | string
`amount` | string
`endHeight` | string
`status` | [LockStatus](LockStatus.md)
`hash` | string

## Example

```typescript
import type { HashLockEntryDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "version": null,
  "ownerAddress": null,
  "mosaicId": null,
  "amount": null,
  "endHeight": null,
  "status": null,
  "hash": null,
} satisfies HashLockEntryDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HashLockEntryDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


