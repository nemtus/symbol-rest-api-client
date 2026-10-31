
# EmbeddedTransactionInfoDTOTransaction

Concrete embedded transaction payload represented by one of the listed transaction DTOs.

## Properties

Name | Type
------------ | -------------
`signerPublicKey` | string
`version` | number
`network` | [NetworkTypeEnum](NetworkTypeEnum.md)
`type` | number
`linkedPublicKey` | string
`linkAction` | [LinkActionEnum](LinkActionEnum.md)
`startEpoch` | number
`endEpoch` | number
`mosaicId` | string
`amount` | string
`duration` | string
`hash` | string
`recipientAddress` | string
`secret` | string
`hashAlgorithm` | [LockHashAlgorithmEnum](LockHashAlgorithmEnum.md)
`proof` | string
`targetAddress` | string
`scopedMetadataKey` | string
`valueSizeDelta` | number
`valueSize` | number
`value` | string
`targetMosaicId` | string
`targetNamespaceId` | string
`id` | string
`nonce` | number
`flags` | number
`divisibility` | number
`delta` | string
`action` | [MosaicSupplyChangeActionEnum](MosaicSupplyChangeActionEnum.md)
`sourceAddress` | string
`parentId` | string
`registrationType` | [NamespaceRegistrationTypeEnum](NamespaceRegistrationTypeEnum.md)
`name` | string
`namespaceId` | string
`address` | string
`aliasAction` | [AliasActionEnum](AliasActionEnum.md)
`minRemovalDelta` | number
`minApprovalDelta` | number
`addressAdditions` | Array&lt;string&gt;
`addressDeletions` | Array&lt;string&gt;
`restrictionFlags` | [AccountRestrictionFlagsEnum](AccountRestrictionFlagsEnum.md)
`restrictionAdditions` | [Array&lt;TransactionTypeEnum&gt;](TransactionTypeEnum.md)
`restrictionDeletions` | [Array&lt;TransactionTypeEnum&gt;](TransactionTypeEnum.md)
`referenceMosaicId` | string
`restrictionKey` | string
`previousRestrictionValue` | string
`newRestrictionValue` | string
`previousRestrictionType` | [MosaicRestrictionTypeEnum](MosaicRestrictionTypeEnum.md)
`newRestrictionType` | [MosaicRestrictionTypeEnum](MosaicRestrictionTypeEnum.md)
`mosaics` | [Array&lt;UnresolvedMosaic&gt;](UnresolvedMosaic.md)
`message` | string

## Example

```typescript
import type { EmbeddedTransactionInfoDTOTransaction } from ''

// TODO: Update the object below with actual values
const example = {
  "signerPublicKey": null,
  "version": null,
  "network": null,
  "type": null,
  "linkedPublicKey": null,
  "linkAction": null,
  "startEpoch": null,
  "endEpoch": null,
  "mosaicId": null,
  "amount": null,
  "duration": null,
  "hash": null,
  "recipientAddress": null,
  "secret": null,
  "hashAlgorithm": null,
  "proof": null,
  "targetAddress": null,
  "scopedMetadataKey": null,
  "valueSizeDelta": null,
  "valueSize": null,
  "value": null,
  "targetMosaicId": null,
  "targetNamespaceId": null,
  "id": null,
  "nonce": null,
  "flags": null,
  "divisibility": null,
  "delta": null,
  "action": null,
  "sourceAddress": null,
  "parentId": null,
  "registrationType": null,
  "name": null,
  "namespaceId": null,
  "address": null,
  "aliasAction": null,
  "minRemovalDelta": null,
  "minApprovalDelta": null,
  "addressAdditions": null,
  "addressDeletions": null,
  "restrictionFlags": null,
  "restrictionAdditions": null,
  "restrictionDeletions": null,
  "referenceMosaicId": null,
  "restrictionKey": null,
  "previousRestrictionValue": null,
  "newRestrictionValue": null,
  "previousRestrictionType": null,
  "newRestrictionType": null,
  "mosaics": null,
  "message": null,
} satisfies EmbeddedTransactionInfoDTOTransaction

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmbeddedTransactionInfoDTOTransaction
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


