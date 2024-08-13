# ExperimentPartialUpdateDto


## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `description`                                                                                                                                    | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | A helpful summary of what this experiment does                                                                                                   |
| `idType`                                                                                                                                         | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | The type of ID which the experiment is based on                                                                                                  |
| `hypothesis`                                                                                                                                     | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | A statement that will be tested by this experiment                                                                                               |
| `links`                                                                                                                                          | [components.ExperimentPartialUpdateDtoLinks](../../models/components/experimentpartialupdatedtolinks.md)[]                                       | :heavy_minus_sign:                                                                                                                               | Links to relevant documentation or resources                                                                                                     |
| `groups`                                                                                                                                         | [components.ExperimentPartialUpdateDtoGroups](../../models/components/experimentpartialupdatedtogroups.md)[]                                     | :heavy_minus_sign:                                                                                                                               | The test groups for your experiment                                                                                                              |
| `controlGroupID`                                                                                                                                 | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Optional control group ID                                                                                                                        |
| `allocation`                                                                                                                                     | *number*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Percent of layer allocated to this experiment                                                                                                    |
| `primaryMetricTags`                                                                                                                              | *string*[]                                                                                                                                       | :heavy_minus_sign:                                                                                                                               | Primary metric tags for the experiment                                                                                                           |
| `secondaryMetricTags`                                                                                                                            | *string*[]                                                                                                                                       | :heavy_minus_sign:                                                                                                                               | Secondary metric tags for the experiment                                                                                                         |
| `primaryMetrics`                                                                                                                                 | [components.ExperimentPartialUpdateDtoPrimaryMetrics](../../models/components/experimentpartialupdatedtoprimarymetrics.md)[]                     | :heavy_minus_sign:                                                                                                                               | Main metrics needed to evaluate your hypothesis                                                                                                  |
| `secondaryMetrics`                                                                                                                               | [components.ExperimentPartialUpdateDtoSecondaryMetrics](../../models/components/experimentpartialupdatedtosecondarymetrics.md)[]                 | :heavy_minus_sign:                                                                                                                               | Additional metrics to monitor that might impact the analysis or final decision of the experiment                                                 |
| `targetApps`                                                                                                                                     | *components.ExperimentPartialUpdateDtoTargetApps*                                                                                                | :heavy_minus_sign:                                                                                                                               | Target apps assigned to this experiment                                                                                                          |
| `tags`                                                                                                                                           | *string*[]                                                                                                                                       | :heavy_minus_sign:                                                                                                                               | Tags associated with the experiment                                                                                                              |
| `duration`                                                                                                                                       | *number*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | How long the experiment is expected to last in days                                                                                              |
| `targetExposures`                                                                                                                                | *number*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Target exposures for the experiment                                                                                                              |
| `targetingGateID`                                                                                                                                | *any*                                                                                                                                            | :heavy_minus_sign:                                                                                                                               | Restrict your experiment to users passing the selected feature gate                                                                              |
| `bonferroniCorrection`                                                                                                                           | *boolean*                                                                                                                                        | :heavy_minus_sign:                                                                                                                               | Is Bonferroni correction applied?                                                                                                                |
| `defaultConfidenceInterval`                                                                                                                      | [components.ExperimentPartialUpdateDtoDefaultConfidenceInterval](../../models/components/experimentpartialupdatedtodefaultconfidenceinterval.md) | :heavy_minus_sign:                                                                                                                               | Default error margin used for results                                                                                                            |
| `status`                                                                                                                                         | [components.ExperimentPartialUpdateDtoStatus](../../models/components/experimentpartialupdatedtostatus.md)                                       | :heavy_minus_sign:                                                                                                                               | The current status of the experiment                                                                                                             |
| `launchedGroupID`                                                                                                                                | *any*                                                                                                                                            | :heavy_minus_sign:                                                                                                                               | ID of the launched group, null otherwise                                                                                                         |
| `assignmentSourceName`                                                                                                                           | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Source name of the assignment                                                                                                                    |
| `assignmentSourceExperimentName`                                                                                                                 | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Name of the source experiment for assignment                                                                                                     |
| `creatorID`                                                                                                                                      | *any*                                                                                                                                            | :heavy_minus_sign:                                                                                                                               | The Statsig ID of the creator of this experiment                                                                                                 |
| `creatorEmail`                                                                                                                                   | *any*                                                                                                                                            | :heavy_minus_sign:                                                                                                                               | The email of the creator of this experiment                                                                                                      |
| `isAnalysisOnly`                                                                                                                                 | *any*                                                                                                                                            | :heavy_minus_sign:                                                                                                                               | For Warehouse Native                                                                                                                             |
| `team`                                                                                                                                           | *any*                                                                                                                                            | :heavy_minus_sign:                                                                                                                               | Enterprise only                                                                                                                                  |
| `allocationDuration`                                                                                                                             | *number*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Allocation duration in days                                                                                                                      |
| `cohortedAnalysisDuration`                                                                                                                       | *number*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Cohorted analysis duration in days                                                                                                               |
| `fixedAnalysisDuration`                                                                                                                          | *number*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Fixed analysis duration in days                                                                                                                  |