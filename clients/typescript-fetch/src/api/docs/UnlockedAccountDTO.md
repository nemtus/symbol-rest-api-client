
# UnlockedAccountDTO

Public keys of accounts with [harvesting](https://docs.symbol.dev/concepts/harvesting.html) unlocked. **Only accounts harvesting on the node you are querying** are returned. The scope is limited to this node, not the entire network. 

## Properties

Name | Type
------------ | -------------
`unlockedAccount` | Array&lt;string&gt;

## Example

```typescript
import type { UnlockedAccountDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "unlockedAccount": null,
} satisfies UnlockedAccountDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UnlockedAccountDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


