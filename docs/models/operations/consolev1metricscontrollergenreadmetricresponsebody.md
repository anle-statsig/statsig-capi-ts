# ConsoleV1MetricsControllerGenReadMetricResponseBody

Get metric data on given date response


## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `message`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | A simple string explaining the result of the operation.                                              |
| `data`                                                                                               | [components.MetricValuesDto](../../models/components/metricvaluesdto.md)[]                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `pagination`                                                                                         | [components.PaginationResponseMetadataDto](../../models/components/paginationresponsemetadatadto.md) | :heavy_check_mark:                                                                                   | Pagination metadata for checking if there is next page for example.                                  |