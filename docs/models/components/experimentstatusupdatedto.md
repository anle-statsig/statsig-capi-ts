# ExperimentStatusUpdateDto

Schema for updating the status of an experiment


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_minus_sign:                                                 | The unique identifier for the experiment                           | experiment123                                                      |
| `decisionReason`                                                   | *string*                                                           | :heavy_check_mark:                                                 | The reason for making the decision to update the experiment status | Your reason for stopping early                                     |
| `removeTargeting`                                                  | *boolean*                                                          | :heavy_check_mark:                                                 | Indicates whether to remove targeting from the experiment          | false                                                              |