
# AccountRestrictionFlagsEnum

The value is a **bitwise OR** of protocol flags (one **restriction type**, then optional modifiers):  - **Restriction type** (pick one): **Address** `0x0001`, **MosaicId** `0x0002`, **TransactionType** `0x0004`. - **Outgoing** `0x4000` (optional): restriction applies to transactions **from** this account; omit it for **incoming**. - **Block** `0x8000` (optional): **block** listed values; omit it for **allow** lists.  **Example:** block outgoing transactions of a given type = `Block` + `Outgoing` + `TransactionType` -> `0x8000 | 0x4000 | 0x0004` = `0xC004` = **49156**.  All values accepted on-chain (other OR combinations are rejected by the node): - `0x0001` (`1`): Allow only incoming transactions from a given address. - `0x0002` (`2`): Allow only incoming transactions containing a given mosaic ID. - `0x4001` (`16385`): Allow only outgoing transactions to a given address. - `0x4004` (`16388`): Allow only outgoing transactions with a given transaction type. - `0x8001` (`32769`): Block incoming transactions from a given address. - `0x8002` (`32770`): Block incoming transactions containing a given mosaic ID. - `0xC001` (`49153`): Block outgoing transactions to a given address. - `0xC004` (`49156`): Block outgoing transactions with a given transaction type. 

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { AccountRestrictionFlagsEnum } from ''

// TODO: Update the object below with actual values
const example = {
} satisfies AccountRestrictionFlagsEnum

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AccountRestrictionFlagsEnum
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


