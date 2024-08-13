# ConsoleV1ExperimentsControllerGenListAssignmentSourcesResponseBody

List Assignment Sources response


## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `message`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | A simple string explaining the result of the operation.                                              |
| `data`                                                                                               | [components.AssignmentSourceContractDto](../../models/components/assignmentsourcecontractdto.md)[]   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `pagination`                                                                                         | [components.PaginationResponseMetadataDto](../../models/components/paginationresponsemetadatadto.md) | :heavy_check_mark:                                                                                   | Pagination metadata for checking if there is next page for example.                                  |