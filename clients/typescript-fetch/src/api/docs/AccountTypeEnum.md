
# AccountTypeEnum

Indicates the [harvesting](https://docs.symbol.dev/concepts/harvesting.html) delegation role of the account. When an account enables [remote](https://docs.symbol.dev/concepts/harvesting.html#remote-harvesting) or [delegated](https://docs.symbol.dev/concepts/harvesting.html#delegated-harvesting) harvesting, it links to a remote proxy account that signs blocks on its behalf. This field reflects which side of that relationship the account is on: - `0`: **Unlinked.** The account has no harvesting delegation relationship. - `1`: **Main.** Balance-holding account (harvester) that is linked to a remote proxy account.   Importance score is calculated from this account\'s balance and activity. - `2`: **Remote.** Proxy account that signs blocks on behalf of a linked main account.   It holds no funds; its sole purpose is to keep the main account\'s private key off the node. - `3`: **Remote unlinked.** An account that was previously used as a remote proxy   but is currently not linked to any main account. 

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { AccountTypeEnum } from ''

// TODO: Update the object below with actual values
const example = {
} satisfies AccountTypeEnum

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AccountTypeEnum
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


