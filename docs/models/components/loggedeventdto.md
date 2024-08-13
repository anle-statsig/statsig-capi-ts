# LoggedEventDto


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `timestamp`                                                        | *string*                                                           | :heavy_check_mark:                                                 | The timestamp when the event occurred, represented as a string.    |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | The name of the event (e.g., "add_to_cart").                       |
| `source`                                                           | *string*                                                           | :heavy_check_mark:                                                 | The source of the event, indicating where it was triggered from.   |
| `value`                                                            | *string*                                                           | :heavy_check_mark:                                                 | The value associated with the event, providing additional context. |
| `userID`                                                           | *string*                                                           | :heavy_check_mark:                                                 | The ID of the user who triggered the event.                        |