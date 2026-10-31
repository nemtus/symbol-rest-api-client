
# NamespaceRegistrationTypeEnum

Type of namespace registration. A namespace can either be registered as a top-level root namespace or as a subnamespace under an existing parent namespace.  - `0`: Root namespace. The namespace has no parent and defines the first level of   the namespace path. - `1`: Subnamespace. The namespace is registered under an existing parent   namespace and extends the namespace path by one level. 

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { NamespaceRegistrationTypeEnum } from ''

// TODO: Update the object below with actual values
const example = {
} satisfies NamespaceRegistrationTypeEnum

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NamespaceRegistrationTypeEnum
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


