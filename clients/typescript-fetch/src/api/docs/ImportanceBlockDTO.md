
# ImportanceBlockDTO

Importance block extending the regular block header with additional fields related to importance recalculation and finalization voting eligibility. 

## Properties

Name | Type
------------ | -------------
`size` | number
`signature` | string
`signerPublicKey` | string
`version` | number
`network` | [NetworkTypeEnum](NetworkTypeEnum.md)
`type` | number
`height` | string
`timestamp` | string
`difficulty` | string
`proofGamma` | string
`proofVerificationHash` | string
`proofScalar` | string
`previousBlockHash` | string
`transactionsHash` | string
`receiptsHash` | string
`stateHash` | string
`beneficiaryAddress` | string
`feeMultiplier` | number
`votingEligibleAccountsCount` | number
`harvestingEligibleAccountsCount` | string
`totalVotingBalance` | string
`previousImportanceBlockHash` | string

## Example

```typescript
import type { ImportanceBlockDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "size": null,
  "signature": null,
  "signerPublicKey": null,
  "version": null,
  "network": null,
  "type": null,
  "height": null,
  "timestamp": null,
  "difficulty": null,
  "proofGamma": null,
  "proofVerificationHash": null,
  "proofScalar": null,
  "previousBlockHash": null,
  "transactionsHash": null,
  "receiptsHash": null,
  "stateHash": null,
  "beneficiaryAddress": null,
  "feeMultiplier": null,
  "votingEligibleAccountsCount": null,
  "harvestingEligibleAccountsCount": null,
  "totalVotingBalance": null,
  "previousImportanceBlockHash": null,
} satisfies ImportanceBlockDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ImportanceBlockDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


