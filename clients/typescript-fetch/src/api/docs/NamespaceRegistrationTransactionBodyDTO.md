
# NamespaceRegistrationTransactionBodyDTO

Namespace registration transaction body for creating a root namespace or a child namespace.

## Properties

Name | Type
------------ | -------------
`duration` | string
`parentId` | string
`id` | string
`registrationType` | [NamespaceRegistrationTypeEnum](NamespaceRegistrationTypeEnum.md)
`name` | string

## Example

```typescript
import type { NamespaceRegistrationTransactionBodyDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "duration": null,
  "parentId": null,
  "id": null,
  "registrationType": null,
  "name": null,
} satisfies NamespaceRegistrationTransactionBodyDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NamespaceRegistrationTransactionBodyDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


