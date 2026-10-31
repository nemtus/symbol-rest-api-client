
# MosaicRestrictionTypeEnum

Comparison operator used to evaluate a mosaic global restriction rule. - `0` (`NONE`) - Uninitialized value indicating no restriction. - `1` (`EQ`) - Allow if the compared value is equal to the restriction value. - `2` (`NE`) - Allow if the compared value is not equal to the restriction value. - `3` (`LT`) - Allow if the compared value is less than the restriction value. - `4` (`LE`) - Allow if the compared value is less than or equal to the restriction value. - `5` (`GT`) - Allow if the compared value is greater than the restriction value. - `6` (`GE`) - Allow if the compared value is greater than or equal to the restriction value. 

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { MosaicRestrictionTypeEnum } from ''

// TODO: Update the object below with actual values
const example = {
} satisfies MosaicRestrictionTypeEnum

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MosaicRestrictionTypeEnum
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


