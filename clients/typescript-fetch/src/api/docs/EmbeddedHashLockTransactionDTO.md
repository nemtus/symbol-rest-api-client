
# EmbeddedHashLockTransactionDTO

Embedded transaction variant of `HashLockTransactionDTO`.

## Properties

Name | Type
------------ | -------------
`signerPublicKey` | string
`version` | number
`network` | [NetworkTypeEnum](NetworkTypeEnum.md)
`type` | number
`mosaicId` | string
`amount` | string
`duration` | string
`hash` | string

## Example

```typescript
import type { EmbeddedHashLockTransactionDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "signerPublicKey": null,
  "version": null,
  "network": null,
  "type": null,
  "mosaicId": null,
  "amount": null,
  "duration": null,
  "hash": null,
} satisfies EmbeddedHashLockTransactionDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmbeddedHashLockTransactionDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


