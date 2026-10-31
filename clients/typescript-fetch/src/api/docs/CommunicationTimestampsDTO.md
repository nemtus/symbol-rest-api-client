
# CommunicationTimestampsDTO

Timestamps from the node\'s perspective for round-trip time calculation. Used when computing node time offset and transaction deadlines. The difference between them reflects node processing time and can vary with node load. 

## Properties

Name | Type
------------ | -------------
`sendTimestamp` | string
`receiveTimestamp` | string

## Example

```typescript
import type { CommunicationTimestampsDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "sendTimestamp": null,
  "receiveTimestamp": null,
} satisfies CommunicationTimestampsDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CommunicationTimestampsDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


