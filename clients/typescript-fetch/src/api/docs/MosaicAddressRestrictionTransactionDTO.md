
# MosaicAddressRestrictionTransactionDTO

Transaction to set a restriction rule to an address.

## Properties

Name | Type
------------ | -------------
`size` | number
`signature` | string
`signerPublicKey` | string
`version` | number
`network` | [NetworkTypeEnum](NetworkTypeEnum.md)
`type` | number
`maxFee` | string
`deadline` | string
`mosaicId` | string
`restrictionKey` | string
`previousRestrictionValue` | string
`newRestrictionValue` | string
`targetAddress` | string

## Example

```typescript
import type { MosaicAddressRestrictionTransactionDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "size": null,
  "signature": null,
  "signerPublicKey": null,
  "version": null,
  "network": null,
  "type": null,
  "maxFee": null,
  "deadline": null,
  "mosaicId": null,
  "restrictionKey": null,
  "previousRestrictionValue": null,
  "newRestrictionValue": null,
  "targetAddress": null,
} satisfies MosaicAddressRestrictionTransactionDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MosaicAddressRestrictionTransactionDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


