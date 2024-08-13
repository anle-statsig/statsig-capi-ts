# ExperimentOverridesDto


## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `overrides`                                                                         | [components.Overrides](../../models/components/overrides.md)[]                      | :heavy_check_mark:                                                                  | Array of experiment overrides, each specifying type, ID, and group ID.              |
| `userIDOverrides`                                                                   | [components.UserIDOverrides](../../models/components/useridoverrides.md)[]          | :heavy_check_mark:                                                                  | Array of user ID overrides, specifying which users to force into experiment groups. |