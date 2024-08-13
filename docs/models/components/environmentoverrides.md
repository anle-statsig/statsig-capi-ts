# EnvironmentOverrides

Contract for environment override


## Fields

| Field               | Type                | Required            | Description         | Example             |
| ------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| `environment`       | *any*               | :heavy_minus_sign:  | Environment         | staging             |
| `unitID`            | *any*               | :heavy_check_mark:  | Unit ID             | unit123             |
| `passingIDs`        | *string*[]          | :heavy_check_mark:  | List of passing IDs | [<br/>"id1",<br/>"id2"<br/>] |
| `failingIDs`        | *string*[]          | :heavy_check_mark:  | List of failing IDs | [<br/>"id3",<br/>"id4"<br/>] |