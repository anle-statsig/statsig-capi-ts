# MetricValuesDto


## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `value`                                                    | *number*                                                   | :heavy_check_mark:                                         | Metric value for the given unit_type                       |
| `unitType`                                                 | *string*                                                   | :heavy_check_mark:                                         | Unit of the metric: stableID, userID, and other custom ids |
| `rowCount`                                                 | *number*                                                   | :heavy_minus_sign:                                         | Row count for imported metric, optional                    |
| `numerator`                                                | *number*                                                   | :heavy_minus_sign:                                         | Numerator of a ratio metric, optional                      |
| `denominator`                                              | *number*                                                   | :heavy_minus_sign:                                         | Denominator of a ratio metric, optional                    |