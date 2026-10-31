
# BlockDTO

Block header data. Contains the height, timestamp, difficulty, VRF proof, hashes linking to the previous block, transactions, receipts, and state, plus `feeMultiplier` and optional `beneficiaryAddress` (reward recipient). The harvester is identified by `signerPublicKey`. 

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

## Example

```typescript
import type { BlockDTO } from ''

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
} satisfies BlockDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BlockDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


