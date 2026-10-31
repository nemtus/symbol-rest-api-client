
# MultisigNetworkPropertiesDTO

Network-level limits that constrain multisig account structure.

## Properties

Name | Type
------------ | -------------
`maxMultisigDepth` | string
`maxCosignatoriesPerAccount` | string
`maxCosignedAccountsPerAccount` | string

## Example

```typescript
import type { MultisigNetworkPropertiesDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "maxMultisigDepth": null,
  "maxCosignatoriesPerAccount": null,
  "maxCosignedAccountsPerAccount": null,
} satisfies MultisigNetworkPropertiesDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MultisigNetworkPropertiesDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


