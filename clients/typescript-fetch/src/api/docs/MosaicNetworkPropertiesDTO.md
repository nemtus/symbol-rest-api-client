
# MosaicNetworkPropertiesDTO

Mosaic plugin settings from network configuration (`/network/properties`). Values from Symbol mainnet. 

## Properties

Name | Type
------------ | -------------
`maxMosaicsPerAccount` | string
`maxMosaicDuration` | string
`maxMosaicDivisibility` | string
`mosaicRentalFeeSinkAddressV1` | string
`mosaicRentalFeeSinkAddress` | string
`mosaicRentalFee` | string

## Example

```typescript
import type { MosaicNetworkPropertiesDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "maxMosaicsPerAccount": null,
  "maxMosaicDuration": null,
  "maxMosaicDivisibility": null,
  "mosaicRentalFeeSinkAddressV1": null,
  "mosaicRentalFeeSinkAddress": null,
  "mosaicRentalFee": null,
} satisfies MosaicNetworkPropertiesDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MosaicNetworkPropertiesDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


