
# ChainPropertiesDTO

Chain related configuration properties.

## Properties

Name | Type
------------ | -------------
`enableVerifiableState` | boolean
`enableVerifiableReceipts` | boolean
`currencyMosaicId` | string
`harvestingMosaicId` | string
`blockGenerationTargetTime` | string
`blockTimeSmoothingFactor` | string
`blockFinalizationInterval` | string
`importanceGrouping` | string
`importanceActivityPercentage` | string
`maxRollbackBlocks` | string
`maxDifficultyBlocks` | string
`defaultDynamicFeeMultiplier` | string
`maxTransactionLifetime` | string
`maxBlockFutureTime` | string
`initialCurrencyAtomicUnits` | string
`maxMosaicAtomicUnits` | string
`totalChainImportance` | string
`minHarvesterBalance` | string
`maxHarvesterBalance` | string
`minVoterBalance` | string
`votingSetGrouping` | string
`maxVotingKeysPerAccount` | string
`minVotingKeyLifetime` | string
`maxVotingKeyLifetime` | string
`harvestBeneficiaryPercentage` | string
`harvestNetworkPercentage` | string
`harvestNetworkFeeSinkAddressV1` | string
`harvestNetworkFeeSinkAddress` | string
`blockPruneInterval` | string
`maxTransactionsPerBlock` | string

## Example

```typescript
import type { ChainPropertiesDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "enableVerifiableState": null,
  "enableVerifiableReceipts": null,
  "currencyMosaicId": null,
  "harvestingMosaicId": null,
  "blockGenerationTargetTime": null,
  "blockTimeSmoothingFactor": null,
  "blockFinalizationInterval": null,
  "importanceGrouping": null,
  "importanceActivityPercentage": null,
  "maxRollbackBlocks": null,
  "maxDifficultyBlocks": null,
  "defaultDynamicFeeMultiplier": null,
  "maxTransactionLifetime": null,
  "maxBlockFutureTime": null,
  "initialCurrencyAtomicUnits": null,
  "maxMosaicAtomicUnits": null,
  "totalChainImportance": null,
  "minHarvesterBalance": null,
  "maxHarvesterBalance": null,
  "minVoterBalance": null,
  "votingSetGrouping": null,
  "maxVotingKeysPerAccount": null,
  "minVotingKeyLifetime": null,
  "maxVotingKeyLifetime": null,
  "harvestBeneficiaryPercentage": null,
  "harvestNetworkPercentage": null,
  "harvestNetworkFeeSinkAddressV1": null,
  "harvestNetworkFeeSinkAddress": null,
  "blockPruneInterval": null,
  "maxTransactionsPerBlock": null,
} satisfies ChainPropertiesDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChainPropertiesDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


