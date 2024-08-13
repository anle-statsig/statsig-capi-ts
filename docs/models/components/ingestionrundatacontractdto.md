# IngestionRunDataContractDto


## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `runID`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `latestStatus`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastUpdatedAt`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `trigger`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sources`                                                                                     | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `dateStamps`                                                                                  | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `runHistory`                                                                                  | [components.RunHistory](../../models/components/runhistory.md)[]                              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `granularHistory`                                                                             | [components.GranularHistory](../../models/components/granularhistory.md)[]                    | :heavy_check_mark:                                                                            | N/A                                                                                           |