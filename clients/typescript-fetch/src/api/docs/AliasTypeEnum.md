
# AliasTypeEnum

Type of alias currently linked to the namespace. A namespace can either have no alias assigned, point to a mosaic ID, or point to an account address.  - 0: No alias is linked to the namespace. - 1: The namespace is linked to a mosaic ID and can be used as a mosaic alias. - 2: The namespace is linked to an account address and can be used as an address alias. 

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { AliasTypeEnum } from ''

// TODO: Update the object below with actual values
const example = {
} satisfies AliasTypeEnum

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AliasTypeEnum
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


