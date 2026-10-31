
# EmbeddedMosaicAddressRestrictionTransactionDTO

Embedded transaction variant of `MosaicAddressRestrictionTransactionDTO`.

## Properties

Name | Type
------------ | -------------
`signerPublicKey` | string
`version` | number
`network` | [NetworkTypeEnum](NetworkTypeEnum.md)
`type` | number
`mosaicId` | string
`restrictionKey` | string
`previousRestrictionValue` | string
`newRestrictionValue` | string
`targetAddress` | string

## Example

```typescript
import type { EmbeddedMosaicAddressRestrictionTransactionDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "signerPublicKey": null,
  "version": null,
  "network": null,
  "type": null,
  "mosaicId": null,
  "restrictionKey": null,
  "previousRestrictionValue": null,
  "newRestrictionValue": null,
  "targetAddress": null,
} satisfies EmbeddedMosaicAddressRestrictionTransactionDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmbeddedMosaicAddressRestrictionTransactionDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


