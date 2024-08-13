# ConsoleV1GatesControllerGenMultiRuleUpdateRequest


## Fields

| Field                                                                                                                                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                                                                                                                                | Required                                                                                                                                                                                                                                                                                                                                            | Description                                                                                                                                                                                                                                                                                                                                         | Example                                                                                                                                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                  | id                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                     |
| `xRespectReviewSettings`                                                                                                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                  | Optional header to respect review settings for mutation endpoints.                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                     |
| `multiRuleUpdateDto`                                                                                                                                                                                                                                                                                                                                | [components.MultiRuleUpdateDto](../../models/components/multiruleupdatedto.md)                                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                  | N/A                                                                                                                                                                                                                                                                                                                                                 | {<br/>"rules": [<br/>{<br/>"name": "All Conditions",<br/>"id": "38ttpCpzrQFTMKcqFKk02l:10.00:1",<br/>"baseID": "38ttpCpzrQFTMKcqFKk02l",<br/>"passPercentage": 10,<br/>"conditions": [<br/>{<br/>"type": "user_id",<br/>"operator": "any",<br/>"targetValue": [<br/>0<br/>],<br/>"field": "string",<br/>"customID": "string"<br/>}<br/>],<br/>"returnValue": {},<br/>"returnValueJson5": {},<br/>"environments": [<br/>"string"<br/>]<br/>}<br/>]<br/>} |