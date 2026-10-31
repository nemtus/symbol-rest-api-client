
# NetworkConfigurationDTO

Full network configuration: network identity, chain parameters, plugin settings, and fork heights. Combines data from catapult-server config files (network, chain, plugins). 

## Properties

Name | Type
------------ | -------------
`network` | [NetworkPropertiesDTO](NetworkPropertiesDTO.md)
`chain` | [ChainPropertiesDTO](ChainPropertiesDTO.md)
`plugins` | [PluginsPropertiesDTO](PluginsPropertiesDTO.md)
`forkHeights` | [ForkHeightsDTO](ForkHeightsDTO.md)
`treasuryReissuanceTransactionSignatures` | Array&lt;string&gt;
`corruptAggregateTransactionHashes` | Array&lt;string&gt;

## Example

```typescript
import type { NetworkConfigurationDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "network": null,
  "chain": null,
  "plugins": null,
  "forkHeights": null,
  "treasuryReissuanceTransactionSignatures": null,
  "corruptAggregateTransactionHashes": null,
} satisfies NetworkConfigurationDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NetworkConfigurationDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


