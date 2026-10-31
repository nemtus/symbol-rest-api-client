
# MosaicGlobalRestrictionTransactionDTO

Transaction to set a network-wide restriction rule to a mosaic.

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
`referenceMosaicId` | string
`restrictionKey` | string
`previousRestrictionValue` | string
`newRestrictionValue` | string
`previousRestrictionType` | [MosaicRestrictionTypeEnum](MosaicRestrictionTypeEnum.md)
`newRestrictionType` | [MosaicRestrictionTypeEnum](MosaicRestrictionTypeEnum.md)

## Example

```typescript
import type { MosaicGlobalRestrictionTransactionDTO } from ''

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
  "referenceMosaicId": null,
  "restrictionKey": null,
  "previousRestrictionValue": null,
  "newRestrictionValue": null,
  "previousRestrictionType": null,
  "newRestrictionType": null,
} satisfies MosaicGlobalRestrictionTransactionDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MosaicGlobalRestrictionTransactionDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


