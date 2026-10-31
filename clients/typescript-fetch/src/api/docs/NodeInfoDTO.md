
# NodeInfoDTO

Identity and configuration of the connected node: version, public key, network generation hash, roles (peer/api/voting), host, port, and friendly name. 

## Properties

Name | Type
------------ | -------------
`version` | number
`publicKey` | string
`networkGenerationHashSeed` | string
`roles` | number
`port` | number
`networkIdentifier` | [NetworkTypeEnum](NetworkTypeEnum.md)
`friendlyName` | string
`host` | string
`nodePublicKey` | string

## Example

```typescript
import type { NodeInfoDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "version": null,
  "publicKey": null,
  "networkGenerationHashSeed": null,
  "roles": null,
  "port": null,
  "networkIdentifier": null,
  "friendlyName": null,
  "host": null,
  "nodePublicKey": null,
} satisfies NodeInfoDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NodeInfoDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


