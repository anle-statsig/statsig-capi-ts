# ConsoleV1MetricValuesControllerGenListMetricValuesResponseBody

List All Metric Values Response


## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `message`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | A simple string explaining the result of the operation.                                              |
| `data`                                                                                               | [components.MetricValueDto](../../models/components/metricvaluedto.md)[]                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `pagination`                                                                                         | [components.PaginationResponseMetadataDto](../../models/components/paginationresponsemetadatadto.md) | :heavy_check_mark:                                                                                   | Pagination metadata for checking if there is next page for example.                                  |