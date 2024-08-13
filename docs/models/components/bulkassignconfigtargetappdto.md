# BulkAssignConfigTargetAppDto


## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `targetApps`                                  | *string*[]                                    | :heavy_check_mark:                            | target app ids                                |
| `gates`                                       | *string*[]                                    | :heavy_minus_sign:                            | Gate IDs to assign to target app(s)           |
| `dynamicConfigs`                              | *string*[]                                    | :heavy_minus_sign:                            | Dynamic Config IDs to assign to target app(s) |
| `experiments`                                 | *string*[]                                    | :heavy_minus_sign:                            | Experiment IDs to assign to target app(s)     |