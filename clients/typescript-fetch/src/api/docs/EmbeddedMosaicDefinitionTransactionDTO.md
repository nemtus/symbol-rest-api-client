
# EmbeddedMosaicDefinitionTransactionDTO

Embedded transaction variant of `MosaicDefinitionTransactionDTO`.

## Properties

Name | Type
------------ | -------------
`signerPublicKey` | string
`version` | number
`network` | [NetworkTypeEnum](NetworkTypeEnum.md)
`type` | number
`id` | string
`duration` | string
`nonce` | number
`flags` | number
`divisibility` | number

## Example

```typescript
import type { EmbeddedMosaicDefinitionTransactionDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "signerPublicKey": null,
  "version": null,
  "network": null,
  "type": null,
  "id": null,
  "duration": null,
  "nonce": null,
  "flags": null,
  "divisibility": null,
} satisfies EmbeddedMosaicDefinitionTransactionDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmbeddedMosaicDefinitionTransactionDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


