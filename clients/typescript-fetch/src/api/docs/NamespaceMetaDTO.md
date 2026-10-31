
# NamespaceMetaDTO

Metadata about the namespace entry. Includes whether the namespace is currently active and its internal ordering index. 

## Properties

Name | Type
------------ | -------------
`active` | boolean
`index` | number

## Example

```typescript
import type { NamespaceMetaDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "active": null,
  "index": null,
} satisfies NamespaceMetaDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NamespaceMetaDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


