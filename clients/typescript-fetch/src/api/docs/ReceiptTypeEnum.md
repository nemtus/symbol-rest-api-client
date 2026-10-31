
# ReceiptTypeEnum

Numeric code identifying the receipt type. Supported values: - `0x124D` (`4685`): Mosaic_Rental_Fee. - `0x134E` (`4942`): Namespace_Rental_Fee. - `0x2143` (`8515`): Harvest_Fee. - `0x2248` (`8776`): LockHash_Completed. - `0x2348` (`9032`): LockHash_Expired. - `0x2252` (`8786`): LockSecret_Completed. - `0x2352` (`9042`): LockSecret_Expired. - `0x3148` (`12616`): LockHash_Created. - `0x3152` (`12626`): LockSecret_Created. - `0x414D` (`16717`): Mosaic_Expired. - `0x414E` (`16718`): Namespace_Expired. - `0x424E` (`16974`): Namespace_Deleted. - `0x5143` (`20803`): Inflation. - `0xE143` (`57667`): Transaction_Group. - `0xF143` (`61763`): Address_Alias_Resolution. - `0xF243` (`62019`): Mosaic_Alias_Resolution. 

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { ReceiptTypeEnum } from ''

// TODO: Update the object below with actual values
const example = {
} satisfies ReceiptTypeEnum

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReceiptTypeEnum
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


