
# NamespaceNetworkPropertiesDTO

Namespace plugin configuration.

## Properties

Name | Type
------------ | -------------
`maxNameSize` | string
`maxChildNamespaces` | string
`maxNamespaceDepth` | string
`minNamespaceDuration` | string
`maxNamespaceDuration` | string
`namespaceGracePeriodDuration` | string
`reservedRootNamespaceNames` | string
`namespaceRentalFeeSinkAddressV1` | string
`namespaceRentalFeeSinkAddress` | string
`rootNamespaceRentalFeePerBlock` | string
`childNamespaceRentalFee` | string

## Example

```typescript
import type { NamespaceNetworkPropertiesDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "maxNameSize": null,
  "maxChildNamespaces": null,
  "maxNamespaceDepth": null,
  "minNamespaceDuration": null,
  "maxNamespaceDuration": null,
  "namespaceGracePeriodDuration": null,
  "reservedRootNamespaceNames": null,
  "namespaceRentalFeeSinkAddressV1": null,
  "namespaceRentalFeeSinkAddress": null,
  "rootNamespaceRentalFeePerBlock": null,
  "childNamespaceRentalFee": null,
} satisfies NamespaceNetworkPropertiesDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NamespaceNetworkPropertiesDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


