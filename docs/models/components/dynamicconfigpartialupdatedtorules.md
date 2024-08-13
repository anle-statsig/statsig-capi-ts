# DynamicConfigPartialUpdateDtoRules


## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                     | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The name of this rule.                                                                                                     |
| `passPercentage`                                                                                                           | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | Of the users that meet the conditions of this rule, what percent should return true.                                       |
| `conditions`                                                                                                               | [components.DynamicConfigPartialUpdateDtoConditions](../../models/components/dynamicconfigpartialupdatedtoconditions.md)[] | :heavy_check_mark:                                                                                                         | An array of Condition objects.                                                                                             |
| `environments`                                                                                                             | *string*[]                                                                                                                 | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `id`                                                                                                                       | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The Statsig ID of this rule.                                                                                               |
| `baseID`                                                                                                                   | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The base ID of this rule, i.e. without any added metadata. Will remain the exact same throughout                           |
| `returnValue`                                                                                                              | Record<string, *any*>                                                                                                      | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `returnValueJson5`                                                                                                         | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |