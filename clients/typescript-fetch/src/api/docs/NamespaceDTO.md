
# NamespaceDTO

State information describing a namespace and its alias configuration.

## Properties

Name | Type
------------ | -------------
`version` | number
`registrationType` | [NamespaceRegistrationTypeEnum](NamespaceRegistrationTypeEnum.md)
`depth` | number
`level0` | string
`level1` | string
`level2` | string
`alias` | [AliasDTO](AliasDTO.md)
`parentId` | string
`ownerAddress` | string
`startHeight` | string
`endHeight` | string

## Example

```typescript
import type { NamespaceDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "version": null,
  "registrationType": null,
  "depth": null,
  "level0": null,
  "level1": null,
  "level2": null,
  "alias": null,
  "parentId": null,
  "ownerAddress": null,
  "startHeight": null,
  "endHeight": null,
} satisfies NamespaceDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NamespaceDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


