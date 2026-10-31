
# EmbeddedTransactionMetaDTO

Metadata for an embedded transaction entry returned by the transaction endpoints. These fields identify the parent aggregate transaction and the embedded transaction\'s position inside it. 

## Properties

Name | Type
------------ | -------------
`height` | string
`aggregateHash` | string
`aggregateId` | string
`index` | number
`timestamp` | string
`feeMultiplier` | number

## Example

```typescript
import type { EmbeddedTransactionMetaDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "height": null,
  "aggregateHash": null,
  "aggregateId": null,
  "index": null,
  "timestamp": null,
  "feeMultiplier": null,
} satisfies EmbeddedTransactionMetaDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmbeddedTransactionMetaDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


