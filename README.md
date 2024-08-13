# statsig

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=<no value>&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasy.com/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasy.com/docs/advanced-setup/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/statsig-ts
```

### PNPM

```bash
pnpm add https://github.com/speakeasy-sdks/statsig-ts
```

### Bun

```bash
bun add https://github.com/speakeasy-sdks/statsig-ts
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/statsig-ts zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
    statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await statsig.dynamicConfigs.create({
        dynamicConfigCreateDto: {
            idType: "userID",
            name: "<value>",
        },
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [dynamicConfigs](docs/sdks/dynamicconfigs/README.md)

* [create](docs/sdks/dynamicconfigs/README.md#create) - Create Dynamic Config
* [list](docs/sdks/dynamicconfigs/README.md#list) - List Dynamic Configs
* [get](docs/sdks/dynamicconfigs/README.md#get) - Get Dynamic Config
* [updatePartial](docs/sdks/dynamicconfigs/README.md#updatepartial) - Partially Update Dynamic Config
* [updateFull](docs/sdks/dynamicconfigs/README.md#updatefull) - Fully Update Dynamic Config
* [delete](docs/sdks/dynamicconfigs/README.md#delete) - Delete Dynamic Config
* [getRules](docs/sdks/dynamicconfigs/README.md#getrules) - Get Dynamic Config Rules
* [addRules](docs/sdks/dynamicconfigs/README.md#addrules) - Add Dynamic Config Rules
* [updateRules](docs/sdks/dynamicconfigs/README.md#updaterules) - Update List of Dynamic Config Rules
* [getRule](docs/sdks/dynamicconfigs/README.md#getrule) - Get Specific Dynamic Config Rule
* [updateRule](docs/sdks/dynamicconfigs/README.md#updaterule) - Update Dynamic Config Rule
* [deleteRule](docs/sdks/dynamicconfigs/README.md#deleterule) - Delete Dynamic Config Rule
* [disable](docs/sdks/dynamicconfigs/README.md#disable) - Disable Dynamic Config
* [enable](docs/sdks/dynamicconfigs/README.md#enable) - Enable Dynamic Config
* [addRule](docs/sdks/dynamicconfigs/README.md#addrule) - Add Dynamic Config Rule

### [holdouts](docs/sdks/holdouts/README.md)

* [create](docs/sdks/holdouts/README.md#create) - Create holdout
* [list](docs/sdks/holdouts/README.md#list) - List Holdouts
* [get](docs/sdks/holdouts/README.md#get) - Get holdout by id
* [updatePartial](docs/sdks/holdouts/README.md#updatepartial) - Patch holdout by id
* [update](docs/sdks/holdouts/README.md#update) - Update holdout by id
* [delete](docs/sdks/holdouts/README.md#delete) - Delete holdout by id
* [getOverride](docs/sdks/holdouts/README.md#getoverride) - Read Holdout Overrides
* [updateOverride](docs/sdks/holdouts/README.md#updateoverride) - Update Holdout Overrides
* [addOverride](docs/sdks/holdouts/README.md#addoverride) - Add Holdout Overrides
* [removeOverride](docs/sdks/holdouts/README.md#removeoverride) - Remove Holdout Overrides

### [gates](docs/sdks/gates/README.md)

* [create](docs/sdks/gates/README.md#create) - Create Gate
* [list](docs/sdks/gates/README.md#list) - List Gates
* [get](docs/sdks/gates/README.md#get) - Read Gate
* [updatePartial](docs/sdks/gates/README.md#updatepartial) - Partially Update Gates
* [update](docs/sdks/gates/README.md#update) - Fully Update Gates
* [delete](docs/sdks/gates/README.md#delete) - Delete Gates
* [getRules](docs/sdks/gates/README.md#getrules) - Read Gate Rules
* [updateRules](docs/sdks/gates/README.md#updaterules) - Update list of Gate Rules
* [addRules](docs/sdks/gates/README.md#addrules) - Add Multiple Gate Rule
* [updateRule](docs/sdks/gates/README.md#updaterule) - Update Gate Rules
* [deleteRule](docs/sdks/gates/README.md#deleterule) - Delete Gate Rules
* [addRule](docs/sdks/gates/README.md#addrule) - Add Gate Rule
* [launch](docs/sdks/gates/README.md#launch) - Launch Gate
* [disable](docs/sdks/gates/README.md#disable) - Disable Gate
* [enable](docs/sdks/gates/README.md#enable) - Enable Gate
* [archive](docs/sdks/gates/README.md#archive) - Archive Gate
* [loadPulse](docs/sdks/gates/README.md#loadpulse) - Load Pulse Gate
* [getOverride](docs/sdks/gates/README.md#getoverride) - Get Gate Override
* [updateOverride](docs/sdks/gates/README.md#updateoverride) - Update Gate Overrides
* [addOverride](docs/sdks/gates/README.md#addoverride) - Add Gate Overrides
* [removeOverride](docs/sdks/gates/README.md#removeoverride) - Delete Gate Overrides

### [experiments](docs/sdks/experiments/README.md)

* [create](docs/sdks/experiments/README.md#create) - Create Experiment
* [list](docs/sdks/experiments/README.md#list) - List Experiments
* [get](docs/sdks/experiments/README.md#get) - Get Experiment
* [updatePartial](docs/sdks/experiments/README.md#updatepartial) - Partially Update Experiment
* [updateFull](docs/sdks/experiments/README.md#updatefull) - Fully Update Experiment
* [delete](docs/sdks/experiments/README.md#delete) - Deleted Experiment
* [start](docs/sdks/experiments/README.md#start) - Start Experiment
* [finishEarly](docs/sdks/experiments/README.md#finishearly) - Finish Experiment Early
* [reset](docs/sdks/experiments/README.md#reset) - Reset Experiment
* [abandon](docs/sdks/experiments/README.md#abandon) - Abandon Experiment
* [archive](docs/sdks/experiments/README.md#archive) - Archive Experiment
* [unarchive](docs/sdks/experiments/README.md#unarchive) - Unarchive Experiment
* [updateAssignmentSource](docs/sdks/experiments/README.md#updateassignmentsource) - Post Assignment Source
* [deleteAssignmentSource](docs/sdks/experiments/README.md#deleteassignmentsource) - Delete Assignment Source
* [getOverrides](docs/sdks/experiments/README.md#getoverrides) - Get Experiment Overrides
* [updateOverrides](docs/sdks/experiments/README.md#updateoverrides) - Update Experiment Overrides
* [partialUpdateOverrides](docs/sdks/experiments/README.md#partialupdateoverrides) - Partially Update Experiment Overrides
* [getExposureCount](docs/sdks/experiments/README.md#getexposurecount) - Get Exposure Count for Experiment

### [experimentsWarehouseNative](docs/sdks/experimentswarehousenative/README.md)

* [loadPulse](docs/sdks/experimentswarehousenative/README.md#loadpulse) - Load Pulse (Warehouse Native)
* [pulseLoadHistory](docs/sdks/experimentswarehousenative/README.md#pulseloadhistory) - Pulse Load History (Warehouse Native)
* [createEntityPropertySource](docs/sdks/experimentswarehousenative/README.md#createentitypropertysource) - Create Entity Property Source
* [listEntityPropertySources](docs/sdks/experimentswarehousenative/README.md#listentitypropertysources) - List Entity Property Sources
* [updateEntityPropertySource](docs/sdks/experimentswarehousenative/README.md#updateentitypropertysource) - Patch Entity Property Source
* [updateEntityPropertySourceQuery](docs/sdks/experimentswarehousenative/README.md#updateentitypropertysourcequery) - Post Entity Property Source
* [removeEntityPropertySource](docs/sdks/experimentswarehousenative/README.md#removeentitypropertysource) - Delete Entity Property Source
* [createAssignmentSource](docs/sdks/experimentswarehousenative/README.md#createassignmentsource) - Create Assignment Source
* [listAssignmentSources](docs/sdks/experimentswarehousenative/README.md#listassignmentsources) - List Assignment Sources
* [updateAssignmentSource](docs/sdks/experimentswarehousenative/README.md#updateassignmentsource) - Patch Assignment Source

### [segments](docs/sdks/segments/README.md)

* [create](docs/sdks/segments/README.md#create) - Create Segment
* [list](docs/sdks/segments/README.md#list) - List Segments
* [get](docs/sdks/segments/README.md#get) - Get Segment
* [delete](docs/sdks/segments/README.md#delete) - Delete Segment
* [getIDList](docs/sdks/segments/README.md#getidlist) - Get IDs in a Segment
* [addIDs](docs/sdks/segments/README.md#addids) - Add IDs to Segment
* [removeIDs](docs/sdks/segments/README.md#removeids) - Remove IDs from Segment
* [resetIDList](docs/sdks/segments/README.md#resetidlist) - Upsert ID List Segment
* [updateConditional](docs/sdks/segments/README.md#updateconditional) - Update Segment Rules

### [events](docs/sdks/events/README.md)

* [list](docs/sdks/events/README.md#list) - List Events
* [getMetrics](docs/sdks/events/README.md#getmetrics) - Get metrics using event name
* [get](docs/sdks/events/README.md#get) - Get specific events

### [autotunes](docs/sdks/autotunes/README.md)

* [create](docs/sdks/autotunes/README.md#create) - Create Autotune
* [list](docs/sdks/autotunes/README.md#list) - List Autotune
* [read](docs/sdks/autotunes/README.md#read) - Read Autotune
* [partialUpdate](docs/sdks/autotunes/README.md#partialupdate) - Partially Update Autotune
* [fullUpdate](docs/sdks/autotunes/README.md#fullupdate) - Fully Update Autotune
* [delete](docs/sdks/autotunes/README.md#delete) - Delete Autotune
* [start](docs/sdks/autotunes/README.md#start) - Start Autotune Experiment
* [makeDecision](docs/sdks/autotunes/README.md#makedecision) - Finish Experiment Early
* [reset](docs/sdks/autotunes/README.md#reset) - Reset Experiment

### [layers](docs/sdks/layers/README.md)

* [create](docs/sdks/layers/README.md#create) - Create a Layer
* [list](docs/sdks/layers/README.md#list) - Get Layers
* [get](docs/sdks/layers/README.md#get) - Get one layer
* [partialUpdate](docs/sdks/layers/README.md#partialupdate) - Partially update a layer
* [update](docs/sdks/layers/README.md#update) - Update a layer
* [remove](docs/sdks/layers/README.md#remove) - Delete a layer
* [listExperiments](docs/sdks/layers/README.md#listexperiments) - Lineage: List Experiment related to Layer

### [metrics](docs/sdks/metrics/README.md)

* [get](docs/sdks/metrics/README.md#get) - Read Single Metric Value
* [getDefinition](docs/sdks/metrics/README.md#getdefinition) - Read Metric Definition
* [update](docs/sdks/metrics/README.md#update) - Update a metric
* [delete](docs/sdks/metrics/README.md#delete) - Delete a metric
* [listExperiments](docs/sdks/metrics/README.md#listexperiments) - Lineage: List experiments related to Metric
* [reload](docs/sdks/metrics/README.md#reload) - Reload metric data

### [metricSources](docs/sdks/metricsources/README.md)

* [create](docs/sdks/metricsources/README.md#create) - Create Metric Source
* [get](docs/sdks/metricsources/README.md#get) - Read Metric Source
* [delete](docs/sdks/metricsources/README.md#delete) - Delete Metric Source
* [update](docs/sdks/metricsources/README.md#update) - Update Metric Source
* [list](docs/sdks/metricsources/README.md#list) - List metric source

### [metricValues](docs/sdks/metricvalues/README.md)

* [list](docs/sdks/metricvalues/README.md#list) - List All Metric Values

### [users](docs/sdks/users/README.md)

* [list](docs/sdks/users/README.md#list) - List Users
* [get](docs/sdks/users/README.md#get) - Get user by id
* [update](docs/sdks/users/README.md#update) - Update user
* [invite](docs/sdks/users/README.md#invite) - Invite user

### [teams](docs/sdks/teams/README.md)

* [list](docs/sdks/teams/README.md#list) - List Teams
* [create](docs/sdks/teams/README.md#create) - Create Team
* [get](docs/sdks/teams/README.md#get) - Get Team
* [update](docs/sdks/teams/README.md#update) - Update Team
* [delete](docs/sdks/teams/README.md#delete) - Delete Team

### [tags](docs/sdks/tags/README.md)

* [get](docs/sdks/tags/README.md#get) - Read Tag
* [update](docs/sdks/tags/README.md#update) - Update Tag
* [delete](docs/sdks/tags/README.md#delete) - Delete Tag
* [list](docs/sdks/tags/README.md#list) - List Tags
* [create](docs/sdks/tags/README.md#create) - Create Tag

### [reports](docs/sdks/reports/README.md)

* [list](docs/sdks/reports/README.md#list) - Get Reports

### [usage](docs/sdks/usage/README.md)

* [getReportUrl](docs/sdks/usage/README.md#getreporturl) - Get Report URL

### [targetApps](docs/sdks/targetapps/README.md)

* [get](docs/sdks/targetapps/README.md#get) - Read Target App
* [update](docs/sdks/targetapps/README.md#update) - Update Target App
* [delete](docs/sdks/targetapps/README.md#delete) - Delete Target App
* [list](docs/sdks/targetapps/README.md#list) - List Target Apps
* [bulkUpdate](docs/sdks/targetapps/README.md#bulkupdate) - Bulk Assign Target Apps
* [create](docs/sdks/targetapps/README.md#create) - Create Target App

### [ingestions](docs/sdks/ingestions/README.md)

* [getRun](docs/sdks/ingestions/README.md#getrun) - Read Ingestion Run
* [listRuns](docs/sdks/ingestions/README.md#listruns) - List Ingestion Runs
* [backfill](docs/sdks/ingestions/README.md#backfill) - Backfill Ingestion
* [getSchedule](docs/sdks/ingestions/README.md#getschedule) - Read Ingestion Schedule
* [updateSchedule](docs/sdks/ingestions/README.md#updateschedule) - Update Ingestion Schedule
* [get](docs/sdks/ingestions/README.md#get) - Read Ingestion
* [createSource](docs/sdks/ingestions/README.md#createsource) - Create Ingestion Source
* [updateSource](docs/sdks/ingestions/README.md#updatesource) - Update Ingestion Source
* [deleteSource](docs/sdks/ingestions/README.md#deletesource) - Delete Ingestion Source
* [createConnectionDatabricks](docs/sdks/ingestions/README.md#createconnectiondatabricks) - Create Ingestion Databricks
* [getEventCount](docs/sdks/ingestions/README.md#geteventcount) - Get Ingestion Event Count
* [getEventDeltaLedger](docs/sdks/ingestions/README.md#geteventdeltaledger) - Get Ingestion Event Delta Ledger

### [configs](docs/sdks/configs/README.md)

* [getExposureCount](docs/sdks/configs/README.md#getexposurecount) - Read Exposure Event Count
* [changeValidation](docs/sdks/configs/README.md#changevalidation) - Change Validation

### [keys](docs/sdks/keys/README.md)

* [get](docs/sdks/keys/README.md#get) - Read Key
* [update](docs/sdks/keys/README.md#update) - Update Key
* [delete](docs/sdks/keys/README.md#delete) - Delete Key
* [list](docs/sdks/keys/README.md#list) - List Keys
* [create](docs/sdks/keys/README.md#create) - Create Key
* [rotate](docs/sdks/keys/README.md#rotate) - Rotate Key
* [deactivate](docs/sdks/keys/README.md#deactivate) - Deactivate Key
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [autotunesCreate](docs/sdks/autotunes/README.md#create)
- [autotunesDelete](docs/sdks/autotunes/README.md#delete)
- [autotunesFullUpdate](docs/sdks/autotunes/README.md#fullupdate)
- [autotunesList](docs/sdks/autotunes/README.md#list)
- [autotunesMakeDecision](docs/sdks/autotunes/README.md#makedecision)
- [autotunesPartialUpdate](docs/sdks/autotunes/README.md#partialupdate)
- [autotunesRead](docs/sdks/autotunes/README.md#read)
- [autotunesReset](docs/sdks/autotunes/README.md#reset)
- [autotunesStart](docs/sdks/autotunes/README.md#start)
- [configsChangeValidation](docs/sdks/configs/README.md#changevalidation)
- [configsGetExposureCount](docs/sdks/configs/README.md#getexposurecount)
- [dynamicConfigsAddRule](docs/sdks/dynamicconfigs/README.md#addrule)
- [dynamicConfigsAddRules](docs/sdks/dynamicconfigs/README.md#addrules)
- [dynamicConfigsCreate](docs/sdks/dynamicconfigs/README.md#create)
- [dynamicConfigsDeleteRule](docs/sdks/dynamicconfigs/README.md#deleterule)
- [dynamicConfigsDelete](docs/sdks/dynamicconfigs/README.md#delete)
- [dynamicConfigsDisable](docs/sdks/dynamicconfigs/README.md#disable)
- [dynamicConfigsEnable](docs/sdks/dynamicconfigs/README.md#enable)
- [dynamicConfigsGetRule](docs/sdks/dynamicconfigs/README.md#getrule)
- [dynamicConfigsGetRules](docs/sdks/dynamicconfigs/README.md#getrules)
- [dynamicConfigsGet](docs/sdks/dynamicconfigs/README.md#get)
- [dynamicConfigsList](docs/sdks/dynamicconfigs/README.md#list)
- [dynamicConfigsUpdateFull](docs/sdks/dynamicconfigs/README.md#updatefull)
- [dynamicConfigsUpdatePartial](docs/sdks/dynamicconfigs/README.md#updatepartial)
- [dynamicConfigsUpdateRule](docs/sdks/dynamicconfigs/README.md#updaterule)
- [dynamicConfigsUpdateRules](docs/sdks/dynamicconfigs/README.md#updaterules)
- [eventsGetMetrics](docs/sdks/events/README.md#getmetrics)
- [eventsGet](docs/sdks/events/README.md#get)
- [eventsList](docs/sdks/events/README.md#list)
- [experimentsAbandon](docs/sdks/experiments/README.md#abandon)
- [experimentsArchive](docs/sdks/experiments/README.md#archive)
- [experimentsCreate](docs/sdks/experiments/README.md#create)
- [experimentsDeleteAssignmentSource](docs/sdks/experiments/README.md#deleteassignmentsource)
- [experimentsDelete](docs/sdks/experiments/README.md#delete)
- [experimentsFinishEarly](docs/sdks/experiments/README.md#finishearly)
- [experimentsGetExposureCount](docs/sdks/experiments/README.md#getexposurecount)
- [experimentsGetOverrides](docs/sdks/experiments/README.md#getoverrides)
- [experimentsGet](docs/sdks/experiments/README.md#get)
- [experimentsList](docs/sdks/experiments/README.md#list)
- [experimentsPartialUpdateOverrides](docs/sdks/experiments/README.md#partialupdateoverrides)
- [experimentsReset](docs/sdks/experiments/README.md#reset)
- [experimentsStart](docs/sdks/experiments/README.md#start)
- [experimentsUnarchive](docs/sdks/experiments/README.md#unarchive)
- [experimentsUpdateAssignmentSource](docs/sdks/experiments/README.md#updateassignmentsource)
- [experimentsUpdateFull](docs/sdks/experiments/README.md#updatefull)
- [experimentsUpdateOverrides](docs/sdks/experiments/README.md#updateoverrides)
- [experimentsUpdatePartial](docs/sdks/experiments/README.md#updatepartial)
- [experimentsWarehouseNativeCreateAssignmentSource](docs/sdks/experimentswarehousenative/README.md#createassignmentsource)
- [experimentsWarehouseNativeCreateEntityPropertySource](docs/sdks/experimentswarehousenative/README.md#createentitypropertysource)
- [experimentsWarehouseNativeListAssignmentSources](docs/sdks/experimentswarehousenative/README.md#listassignmentsources)
- [experimentsWarehouseNativeListEntityPropertySources](docs/sdks/experimentswarehousenative/README.md#listentitypropertysources)
- [experimentsWarehouseNativeLoadPulse](docs/sdks/experimentswarehousenative/README.md#loadpulse)
- [experimentsWarehouseNativePulseLoadHistory](docs/sdks/experimentswarehousenative/README.md#pulseloadhistory)
- [experimentsWarehouseNativeRemoveEntityPropertySource](docs/sdks/experimentswarehousenative/README.md#removeentitypropertysource)
- [experimentsWarehouseNativeUpdateAssignmentSource](docs/sdks/experimentswarehousenative/README.md#updateassignmentsource)
- [experimentsWarehouseNativeUpdateEntityPropertySourceQuery](docs/sdks/experimentswarehousenative/README.md#updateentitypropertysourcequery)
- [experimentsWarehouseNativeUpdateEntityPropertySource](docs/sdks/experimentswarehousenative/README.md#updateentitypropertysource)
- [gatesAddOverride](docs/sdks/gates/README.md#addoverride)
- [gatesAddRule](docs/sdks/gates/README.md#addrule)
- [gatesAddRules](docs/sdks/gates/README.md#addrules)
- [gatesArchive](docs/sdks/gates/README.md#archive)
- [gatesCreate](docs/sdks/gates/README.md#create)
- [gatesDeleteRule](docs/sdks/gates/README.md#deleterule)
- [gatesDelete](docs/sdks/gates/README.md#delete)
- [gatesDisable](docs/sdks/gates/README.md#disable)
- [gatesEnable](docs/sdks/gates/README.md#enable)
- [gatesGetOverride](docs/sdks/gates/README.md#getoverride)
- [gatesGetRules](docs/sdks/gates/README.md#getrules)
- [gatesGet](docs/sdks/gates/README.md#get)
- [gatesLaunch](docs/sdks/gates/README.md#launch)
- [gatesList](docs/sdks/gates/README.md#list)
- [gatesLoadPulse](docs/sdks/gates/README.md#loadpulse)
- [gatesRemoveOverride](docs/sdks/gates/README.md#removeoverride)
- [gatesUpdateOverride](docs/sdks/gates/README.md#updateoverride)
- [gatesUpdatePartial](docs/sdks/gates/README.md#updatepartial)
- [gatesUpdateRule](docs/sdks/gates/README.md#updaterule)
- [gatesUpdateRules](docs/sdks/gates/README.md#updaterules)
- [gatesUpdate](docs/sdks/gates/README.md#update)
- [holdoutsAddOverride](docs/sdks/holdouts/README.md#addoverride)
- [holdoutsCreate](docs/sdks/holdouts/README.md#create)
- [holdoutsDelete](docs/sdks/holdouts/README.md#delete)
- [holdoutsGetOverride](docs/sdks/holdouts/README.md#getoverride)
- [holdoutsGet](docs/sdks/holdouts/README.md#get)
- [holdoutsList](docs/sdks/holdouts/README.md#list)
- [holdoutsRemoveOverride](docs/sdks/holdouts/README.md#removeoverride)
- [holdoutsUpdateOverride](docs/sdks/holdouts/README.md#updateoverride)
- [holdoutsUpdatePartial](docs/sdks/holdouts/README.md#updatepartial)
- [holdoutsUpdate](docs/sdks/holdouts/README.md#update)
- [ingestionsBackfill](docs/sdks/ingestions/README.md#backfill)
- [ingestionsCreateConnectionDatabricks](docs/sdks/ingestions/README.md#createconnectiondatabricks)
- [ingestionsCreateSource](docs/sdks/ingestions/README.md#createsource)
- [ingestionsDeleteSource](docs/sdks/ingestions/README.md#deletesource)
- [ingestionsGetEventCount](docs/sdks/ingestions/README.md#geteventcount)
- [ingestionsGetEventDeltaLedger](docs/sdks/ingestions/README.md#geteventdeltaledger)
- [ingestionsGetRun](docs/sdks/ingestions/README.md#getrun)
- [ingestionsGetSchedule](docs/sdks/ingestions/README.md#getschedule)
- [ingestionsGet](docs/sdks/ingestions/README.md#get)
- [ingestionsListRuns](docs/sdks/ingestions/README.md#listruns)
- [ingestionsUpdateSchedule](docs/sdks/ingestions/README.md#updateschedule)
- [ingestionsUpdateSource](docs/sdks/ingestions/README.md#updatesource)
- [keysCreate](docs/sdks/keys/README.md#create)
- [keysDeactivate](docs/sdks/keys/README.md#deactivate)
- [keysDelete](docs/sdks/keys/README.md#delete)
- [keysGet](docs/sdks/keys/README.md#get)
- [keysList](docs/sdks/keys/README.md#list)
- [keysRotate](docs/sdks/keys/README.md#rotate)
- [keysUpdate](docs/sdks/keys/README.md#update)
- [layersCreate](docs/sdks/layers/README.md#create)
- [layersGet](docs/sdks/layers/README.md#get)
- [layersListExperiments](docs/sdks/layers/README.md#listexperiments)
- [layersList](docs/sdks/layers/README.md#list)
- [layersPartialUpdate](docs/sdks/layers/README.md#partialupdate)
- [layersRemove](docs/sdks/layers/README.md#remove)
- [layersUpdate](docs/sdks/layers/README.md#update)
- [metricSourcesCreate](docs/sdks/metricsources/README.md#create)
- [metricSourcesDelete](docs/sdks/metricsources/README.md#delete)
- [metricSourcesGet](docs/sdks/metricsources/README.md#get)
- [metricSourcesList](docs/sdks/metricsources/README.md#list)
- [metricSourcesUpdate](docs/sdks/metricsources/README.md#update)
- [metricValuesList](docs/sdks/metricvalues/README.md#list)
- [metricsDelete](docs/sdks/metrics/README.md#delete)
- [metricsGetDefinition](docs/sdks/metrics/README.md#getdefinition)
- [metricsGet](docs/sdks/metrics/README.md#get)
- [metricsListExperiments](docs/sdks/metrics/README.md#listexperiments)
- [metricsReload](docs/sdks/metrics/README.md#reload)
- [metricsUpdate](docs/sdks/metrics/README.md#update)
- [reportsList](docs/sdks/reports/README.md#list)
- [segmentsAddIDs](docs/sdks/segments/README.md#addids)
- [segmentsCreate](docs/sdks/segments/README.md#create)
- [segmentsDelete](docs/sdks/segments/README.md#delete)
- [segmentsGetIDList](docs/sdks/segments/README.md#getidlist)
- [segmentsGet](docs/sdks/segments/README.md#get)
- [segmentsList](docs/sdks/segments/README.md#list)
- [segmentsRemoveIDs](docs/sdks/segments/README.md#removeids)
- [segmentsResetIDList](docs/sdks/segments/README.md#resetidlist)
- [segmentsUpdateConditional](docs/sdks/segments/README.md#updateconditional)
- [tagsCreate](docs/sdks/tags/README.md#create)
- [tagsDelete](docs/sdks/tags/README.md#delete)
- [tagsGet](docs/sdks/tags/README.md#get)
- [tagsList](docs/sdks/tags/README.md#list)
- [tagsUpdate](docs/sdks/tags/README.md#update)
- [targetAppsBulkUpdate](docs/sdks/targetapps/README.md#bulkupdate)
- [targetAppsCreate](docs/sdks/targetapps/README.md#create)
- [targetAppsDelete](docs/sdks/targetapps/README.md#delete)
- [targetAppsGet](docs/sdks/targetapps/README.md#get)
- [targetAppsList](docs/sdks/targetapps/README.md#list)
- [targetAppsUpdate](docs/sdks/targetapps/README.md#update)
- [teamsCreate](docs/sdks/teams/README.md#create)
- [teamsDelete](docs/sdks/teams/README.md#delete)
- [teamsGet](docs/sdks/teams/README.md#get)
- [teamsList](docs/sdks/teams/README.md#list)
- [teamsUpdate](docs/sdks/teams/README.md#update)
- [usageGetReportUrl](docs/sdks/usage/README.md#getreporturl)
- [usersGet](docs/sdks/users/README.md#get)
- [usersInvite](docs/sdks/users/README.md#invite)
- [usersList](docs/sdks/users/README.md#list)
- [usersUpdate](docs/sdks/users/README.md#update)


</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
    statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await statsig.dynamicConfigs.create(
        {
            dynamicConfigCreateDto: {
                idType: "userID",
                name: "<value>",
            },
        },
        {
            retries: {
                strategy: "backoff",
                backoff: {
                    initialInterval: 1,
                    maxInterval: 50,
                    exponent: 1.1,
                    maxElapsedTime: 100,
                },
                retryConnectionErrors: false,
            },
        }
    );

    // Handle the result
    console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
    retryConfig: {
        strategy: "backoff",
        backoff: {
            initialInterval: 1,
            maxInterval: 50,
            exponent: 1.1,
            maxElapsedTime: 100,
        },
        retryConnectionErrors: false,
    },
    statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await statsig.dynamicConfigs.create({
        dynamicConfigCreateDto: {
            idType: "userID",
            name: "<value>",
        },
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object                                                                       | Status Code                                                                        | Content Type                                                                       |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| errors.ConsoleV1DynamicConfigControllerGenCreateResponseBody                       | 400                                                                                | application/json                                                                   |
| errors.ConsoleV1DynamicConfigControllerGenCreateDynamicConfigsResponseBody         | 401                                                                                | application/json                                                                   |
| errors.ConsoleV1DynamicConfigControllerGenCreateDynamicConfigsResponseResponseBody | 403                                                                                | application/json                                                                   |
| errors.SDKError                                                                    | 4xx-5xx                                                                            | */*                                                                                |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { Statsig } from "statsig";
import { SDKValidationError } from "statsig/models/errors";

const statsig = new Statsig({
    statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    let result;
    try {
        result = await statsig.dynamicConfigs.create({
            dynamicConfigCreateDto: {
                idType: "userID",
                name: "<value>",
            },
        });
    } catch (err) {
        switch (true) {
            case err instanceof SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            case err instanceof errors.ConsoleV1DynamicConfigControllerGenCreateResponseBody: {
                console.error(err); // handle exception
                return;
            }
            case err instanceof
                errors.ConsoleV1DynamicConfigControllerGenCreateDynamicConfigsResponseBody: {
                console.error(err); // handle exception
                return;
            }
            case err instanceof
                errors.ConsoleV1DynamicConfigControllerGenCreateDynamicConfigsResponseResponseBody: {
                console.error(err); // handle exception
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://statsigapi.net` | None |

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
    serverIdx: 0,
    statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await statsig.dynamicConfigs.create({
        dynamicConfigCreateDto: {
            idType: "userID",
            name: "<value>",
        },
    });

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
    serverURL: "https://statsigapi.net",
    statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await statsig.dynamicConfigs.create({
        dynamicConfigCreateDto: {
            idType: "userID",
            name: "<value>",
        },
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Statsig } from "statsig";
import { HTTPClient } from "statsig/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Statsig({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name            | Type            | Scheme          |
| --------------- | --------------- | --------------- |
| `statsigApiKey` | apiKey          | API key         |

To authenticate with the API the `statsigApiKey` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
    statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await statsig.dynamicConfigs.create({
        dynamicConfigCreateDto: {
            idType: "userID",
            name: "<value>",
        },
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Debugging [debug] -->
## Debugging

To log HTTP requests and responses, you can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Statsig } from "statsig";

const sdk = new Statsig({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=<no value>&utm_campaign=typescript)
