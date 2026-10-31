
# ForkHeightsDTO

Block heights at which protocol changes (hard forks) took effect. Used during synchronization to apply correct validation rules for each block range. 

## Properties

Name | Type
------------ | -------------
`totalVotingBalanceCalculationFix` | string
`treasuryReissuance` | string
`strictAggregateTransactionHash` | string
`skipSecretLockUniquenessChecks` | string
`skipSecretLockExpirations` | string
`forceSecretLockExpirations` | string
`uniqueAggregateTransactionHash` | string

## Example

```typescript
import type { ForkHeightsDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "totalVotingBalanceCalculationFix": null,
  "treasuryReissuance": null,
  "strictAggregateTransactionHash": null,
  "skipSecretLockUniquenessChecks": null,
  "skipSecretLockExpirations": null,
  "forceSecretLockExpirations": null,
  "uniqueAggregateTransactionHash": null,
} satisfies ForkHeightsDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ForkHeightsDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


