
# Mosaic

An instance of a [mosaic](https://docs.symbol.dev/concepts/mosaic.html) held by an account or transferred in a transaction. The amount is always expressed in the mosaic\'s smallest (atomic) unit. For example, if the mosaic has a divisibility of 6, an amount of `1000000` represents `1.000000` whole units. 

## Properties

Name | Type
------------ | -------------
`id` | string
`amount` | string

## Example

```typescript
import type { Mosaic } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "amount": null,
} satisfies Mosaic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Mosaic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


