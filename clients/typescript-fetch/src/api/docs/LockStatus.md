
# LockStatus

Status of a hash lock or secret lock. - `0` (`UNUSED`): the lock is active and has not been consumed yet. - `1` (`USED`): the lock has already been consumed and is no longer active. 

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { LockStatus } from ''

// TODO: Update the object below with actual values
const example = {
} satisfies LockStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LockStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


