
# AccountKeyLinkTransactionBodyDTO

Account key link transaction body that links or unlinks a remote account public key.

## Properties

Name | Type
------------ | -------------
`linkedPublicKey` | string
`linkAction` | [LinkActionEnum](LinkActionEnum.md)

## Example

```typescript
import type { AccountKeyLinkTransactionBodyDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "linkedPublicKey": null,
  "linkAction": null,
} satisfies AccountKeyLinkTransactionBodyDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AccountKeyLinkTransactionBodyDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


