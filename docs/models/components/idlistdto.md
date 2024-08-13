# IDListDto

Schema for a list of IDs with a name and count


## Fields

| Field                                    | Type                                     | Required                                 | Description                              | Example                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `name`                                   | *string*                                 | :heavy_check_mark:                       | The name associated with the list of IDs | Example List                             |
| `count`                                  | *number*                                 | :heavy_check_mark:                       | The count of IDs in the list             | 5                                        |
| `ids`                                    | *string*[]                               | :heavy_check_mark:                       | The array of IDs                         | [<br/>"id1",<br/>"id2",<br/>"id3",<br/>"id4",<br/>"id5"<br/>] |