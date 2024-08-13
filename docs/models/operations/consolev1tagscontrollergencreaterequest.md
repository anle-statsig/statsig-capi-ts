# ConsoleV1TagsControllerGenCreateRequest


## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `xRespectReviewSettings`                                                  | *string*                                                                  | :heavy_minus_sign:                                                        | Optional header to respect review settings for mutation endpoints.        |                                                                           |
| `tagCreateDto`                                                            | [components.TagCreateDto](../../models/components/tagcreatedto.md)        | :heavy_check_mark:                                                        | N/A                                                                       | {<br/>"name": "my_tag",<br/>"description": "my tag description",<br/>"isCore": true<br/>} |