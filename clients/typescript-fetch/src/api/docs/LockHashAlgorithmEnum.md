
# LockHashAlgorithmEnum

Hash algorithm used to derive the secret from the revealed proof in secret lock and secret proof transactions: - `0` (`SHA3_256`): proof hashed once with SHA3-256. - `1` (`HASH_160`): proof hashed with SHA-256 and then with RIPEMD-160, similar to Bitcoin `OP_HASH160`. - `2` (`HASH_256`): proof hashed twice with SHA-256, similar to Bitcoin `OP_HASH256`. 

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { LockHashAlgorithmEnum } from ''

// TODO: Update the object below with actual values
const example = {
} satisfies LockHashAlgorithmEnum

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LockHashAlgorithmEnum
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


