
# EmbeddedNamespaceRegistrationTransactionDTO

Embedded transaction variant of `NamespaceRegistrationTransactionDTO`.

## Properties

Name | Type
------------ | -------------
`signerPublicKey` | string
`version` | number
`network` | [NetworkTypeEnum](NetworkTypeEnum.md)
`type` | number
`duration` | string
`parentId` | string
`id` | string
`registrationType` | [NamespaceRegistrationTypeEnum](NamespaceRegistrationTypeEnum.md)
`name` | string

## Example

```typescript
import type { EmbeddedNamespaceRegistrationTransactionDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "signerPublicKey": null,
  "version": null,
  "network": null,
  "type": null,
  "duration": null,
  "parentId": null,
  "id": null,
  "registrationType": null,
  "name": null,
} satisfies EmbeddedNamespaceRegistrationTransactionDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmbeddedNamespaceRegistrationTransactionDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


