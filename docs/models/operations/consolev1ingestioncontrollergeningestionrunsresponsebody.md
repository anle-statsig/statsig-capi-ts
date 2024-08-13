# ConsoleV1IngestionControllerGenIngestionRunsResponseBody

List Ingestion Runs Success


## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `message`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | A simple string explaining the result of the operation.                                              |
| `data`                                                                                               | [components.IngestionRunDataContractDto](../../models/components/ingestionrundatacontractdto.md)[]   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `pagination`                                                                                         | [components.PaginationResponseMetadataDto](../../models/components/paginationresponsemetadatadto.md) | :heavy_check_mark:                                                                                   | Pagination metadata for checking if there is next page for example.                                  |