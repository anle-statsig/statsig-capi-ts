# UserUpdateDto

Schema for updating user information.


## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `role`                                                                                  | *string*                                                                                | :heavy_minus_sign:                                                                      | Update the user's role. Can be 'Admin', 'Read Only', 'Member', or any custom role name. |
| `firstName`                                                                             | *string*                                                                                | :heavy_minus_sign:                                                                      | Update the user's first name.                                                           |
| `lastName`                                                                              | *string*                                                                                | :heavy_minus_sign:                                                                      | Update the user's last name.                                                            |