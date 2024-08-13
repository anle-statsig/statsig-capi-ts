# Two

Contract for updating ID overrides


## Fields

| Field                               | Type                                | Required                            | Description                         | Example                             |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `passingUserIDs`                    | *string*[]                          | :heavy_check_mark:                  | List of user IDs                    | [<br/>"user123",<br/>"user456",<br/>"user789"<br/>] |
| `failingUserIDs`                    | *string*[]                          | :heavy_check_mark:                  | List of user IDs                    | [<br/>"user123",<br/>"user456",<br/>"user789"<br/>] |
| `passingCustomIDs`                  | *string*[]                          | :heavy_minus_sign:                  | Optional list of custom IDs         | [<br/>"custom123",<br/>"custom456"<br/>] |
| `failingCustomIDs`                  | *string*[]                          | :heavy_minus_sign:                  | Optional list of custom IDs         | [<br/>"custom123",<br/>"custom456"<br/>] |