# Owner

Schema for owner data including ID, type, name. Note that if Entity is created by CONSOLE API, owner will be undefined.


## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `ownerID`                                      | *string*                                       | :heavy_minus_sign:                             | ID of the owner                                | abc123                                         |
| `ownerType`                                    | *string*                                       | :heavy_minus_sign:                             | Type of the owner (e.g., SDK_KEY or USER)      | USER                                           |
| `ownerName`                                    | *string*                                       | :heavy_minus_sign:                             | The name of the owner. This field is optional. | John Doe                                       |