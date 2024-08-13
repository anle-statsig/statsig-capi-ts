# TargetAppCreateDto


## Fields

| Field                                         | Type                                          | Required                                      | Description                                   | Example                                       |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `name`                                        | *string*                                      | :heavy_check_mark:                            | name of the target app                        | string                                        |
| `description`                                 | *string*                                      | :heavy_check_mark:                            | a description of the target app               | a description                                 |
| `gates`                                       | *string*[]                                    | :heavy_minus_sign:                            | Gate IDs to assign to target app(s)           |                                               |
| `dynamicConfigs`                              | *string*[]                                    | :heavy_minus_sign:                            | Dynamic Config IDs to assign to target app(s) |                                               |
| `experiments`                                 | *string*[]                                    | :heavy_minus_sign:                            | Experiment IDs to assign to target app(s)     |                                               |