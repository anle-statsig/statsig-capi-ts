# Experiments
(*experiments*)

### Available Operations

* [create](#create) - Create Experiment
* [list](#list) - List Experiments
* [get](#get) - Get Experiment
* [updatePartial](#updatepartial) - Partially Update Experiment
* [updateFull](#updatefull) - Fully Update Experiment
* [delete](#delete) - Deleted Experiment
* [start](#start) - Start Experiment
* [finishEarly](#finishearly) - Finish Experiment Early
* [reset](#reset) - Reset Experiment
* [abandon](#abandon) - Abandon Experiment
* [archive](#archive) - Archive Experiment
* [unarchive](#unarchive) - Unarchive Experiment
* [updateAssignmentSource](#updateassignmentsource) - Post Assignment Source
* [deleteAssignmentSource](#deleteassignmentsource) - Delete Assignment Source
* [getOverrides](#getoverrides) - Get Experiment Overrides
* [updateOverrides](#updateoverrides) - Update Experiment Overrides
* [partialUpdateOverrides](#partialupdateoverrides) - Partially Update Experiment Overrides
* [getExposureCount](#getexposurecount) - Get Exposure Count for Experiment

## create

Create Experiment

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.experiments.create({
    experimentCreateDto: {
      name: "<value>",
    },
  });

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { StatsigCore } from "statsig/core.js";
import { experimentsCreate } from "statsig/funcs/experimentsCreate.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await experimentsCreate(statsig, {
    experimentCreateDto: {
      name: "<value>",
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ConsoleV1ExperimentsControllerGenCreateRequest](../../models/operations/consolev1experimentscontrollergencreaterequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1ExperimentsControllerGenCreateResponseBody](../../models/operations/consolev1experimentscontrollergencreateresponsebody.md)\>**
### Errors

| Error Object                                                          | Status Code                                                           | Content Type                                                          |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| errors.ConsoleV1ExperimentsControllerGenCreateResponseBody            | 400                                                                   | application/json                                                      |
| errors.ConsoleV1ExperimentsControllerGenCreateExperimentsResponseBody | 401                                                                   | application/json                                                      |
| errors.SDKError                                                       | 4xx-5xx                                                               | */*                                                                   |

## list

List Experiments

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.experiments.list({
    tags: {
    "singleTag": {
      "value": "tag1",
    },
    "multipleTags": {
      "value": [
        "tag1",
        "tag2",
      ],
    },
  },
    limit: 10,
    page: 1,
  });

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { StatsigCore } from "statsig/core.js";
import { experimentsList } from "statsig/funcs/experimentsList.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await experimentsList(statsig, {
    tags: {
    "singleTag": {
      "value": "tag1",
    },
    "multipleTags": {
      "value": [
        "tag1",
        "tag2",
      ],
    },
  },
    limit: 10,
    page: 1,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ConsoleV1ExperimentsControllerGenListRequest](../../models/operations/consolev1experimentscontrollergenlistrequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1ExperimentsControllerGenListResponseBody](../../models/operations/consolev1experimentscontrollergenlistresponsebody.md)\>**
### Errors

| Error Object                                             | Status Code                                              | Content Type                                             |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| errors.ConsoleV1ExperimentsControllerGenListResponseBody | 401                                                      | application/json                                         |
| errors.SDKError                                          | 4xx-5xx                                                  | */*                                                      |

## get

Get Experiment

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.experiments.get({
    id: "<id>",
  });

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { StatsigCore } from "statsig/core.js";
import { experimentsGet } from "statsig/funcs/experimentsGet.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await experimentsGet(statsig, {
    id: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ConsoleV1ExperimentsControllerGenReadRequest](../../models/operations/consolev1experimentscontrollergenreadrequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1ExperimentsControllerGenReadResponseBody](../../models/operations/consolev1experimentscontrollergenreadresponsebody.md)\>**
### Errors

| Error Object                                                        | Status Code                                                         | Content Type                                                        |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| errors.ConsoleV1ExperimentsControllerGenReadResponseBody            | 401                                                                 | application/json                                                    |
| errors.ConsoleV1ExperimentsControllerGenReadExperimentsResponseBody | 404                                                                 | application/json                                                    |
| errors.SDKError                                                     | 4xx-5xx                                                             | */*                                                                 |

## updatePartial

Partially Update Experiment

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.experiments.updatePartial({
    id: "<id>",
    experimentPartialUpdateDto: {},
  });

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { StatsigCore } from "statsig/core.js";
import { experimentsUpdatePartial } from "statsig/funcs/experimentsUpdatePartial.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await experimentsUpdatePartial(statsig, {
    id: "<id>",
    experimentPartialUpdateDto: {},
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ConsoleV1ExperimentsControllerGenPartialUpdateRequest](../../models/operations/consolev1experimentscontrollergenpartialupdaterequest.md)                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1ExperimentsControllerGenPartialUpdateResponseBody](../../models/operations/consolev1experimentscontrollergenpartialupdateresponsebody.md)\>**
### Errors

| Error Object                                                                 | Status Code                                                                  | Content Type                                                                 |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| errors.ConsoleV1ExperimentsControllerGenPartialUpdateResponseBody            | 401                                                                          | application/json                                                             |
| errors.ConsoleV1ExperimentsControllerGenPartialUpdateExperimentsResponseBody | 404                                                                          | application/json                                                             |
| errors.SDKError                                                              | 4xx-5xx                                                                      | */*                                                                          |

## updateFull

Fully Update Experiment

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.experiments.updateFull({
    id: "<id>",
    experimentFullUpdateDto: {
      description: "Programmable dynamic interface",
      idType: "<value>",
      hypothesis: "<value>",
      groups: [
        {
          name: "<value>",
          size: 1865.53,
          parameterValues: {
            "key": "<value>",
          },
        },
      ],
      allocation: 2413.36,
      targetingGateID: "<value>",
      bonferroniCorrection: false,
      defaultConfidenceInterval: "90",
      status: "abandoned",
    },
  });

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { StatsigCore } from "statsig/core.js";
import { experimentsUpdateFull } from "statsig/funcs/experimentsUpdateFull.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await experimentsUpdateFull(statsig, {
    id: "<id>",
    experimentFullUpdateDto: {
      description: "Organized national attitude",
      idType: "<value>",
      hypothesis: "<value>",
      groups: [
        {
          name: "<value>",
          size: 3361.08,
          parameterValues: {
            "key": "<value>",
          },
        },
      ],
      allocation: 2036.7,
      targetingGateID: "<value>",
      bonferroniCorrection: false,
      defaultConfidenceInterval: "80",
      status: "abandoned",
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ConsoleV1ExperimentsControllerGenFullUpdateRequest](../../models/operations/consolev1experimentscontrollergenfullupdaterequest.md)                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1ExperimentsControllerGenFullUpdateResponseBody](../../models/operations/consolev1experimentscontrollergenfullupdateresponsebody.md)\>**
### Errors

| Error Object                                                              | Status Code                                                               | Content Type                                                              |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| errors.ConsoleV1ExperimentsControllerGenFullUpdateResponseBody            | 400                                                                       | application/json                                                          |
| errors.ConsoleV1ExperimentsControllerGenFullUpdateExperimentsResponseBody | 401                                                                       | application/json                                                          |
| errors.SDKError                                                           | 4xx-5xx                                                                   | */*                                                                       |

## delete

Deleted Experiment

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.experiments.delete({
    id: "<id>",
  });

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { StatsigCore } from "statsig/core.js";
import { experimentsDelete } from "statsig/funcs/experimentsDelete.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await experimentsDelete(statsig, {
    id: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ConsoleV1ExperimentsControllerGenRemoveRequest](../../models/operations/consolev1experimentscontrollergenremoverequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1ExperimentsControllerGenRemoveResponseBody](../../models/operations/consolev1experimentscontrollergenremoveresponsebody.md)\>**
### Errors

| Error Object                                                          | Status Code                                                           | Content Type                                                          |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| errors.ConsoleV1ExperimentsControllerGenRemoveResponseBody            | 401                                                                   | application/json                                                      |
| errors.ConsoleV1ExperimentsControllerGenRemoveExperimentsResponseBody | 404                                                                   | application/json                                                      |
| errors.SDKError                                                       | 4xx-5xx                                                               | */*                                                                   |

## start

Start Experiment

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.experiments.start({
    id: "<id>",
  });

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { StatsigCore } from "statsig/core.js";
import { experimentsStart } from "statsig/funcs/experimentsStart.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await experimentsStart(statsig, {
    id: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ConsoleV1ExperimentsControllerGenStartRequest](../../models/operations/consolev1experimentscontrollergenstartrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1ExperimentsControllerGenStartResponseBody](../../models/operations/consolev1experimentscontrollergenstartresponsebody.md)\>**
### Errors

| Error Object                                                                 | Status Code                                                                  | Content Type                                                                 |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| errors.ConsoleV1ExperimentsControllerGenStartResponseBody                    | 400                                                                          | application/json                                                             |
| errors.ConsoleV1ExperimentsControllerGenStartExperimentsResponseBody         | 401                                                                          | application/json                                                             |
| errors.ConsoleV1ExperimentsControllerGenStartExperimentsResponseResponseBody | 404                                                                          | application/json                                                             |
| errors.SDKError                                                              | 4xx-5xx                                                                      | */*                                                                          |

## finishEarly

Finish Experiment Early

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.experiments.finishEarly({
    id: "<id>",
    experimentStatusUpdateDto: {
      id: "experiment123",
      decisionReason: "Your reason for stopping early",
      removeTargeting: false,
    },
  });

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { StatsigCore } from "statsig/core.js";
import { experimentsFinishEarly } from "statsig/funcs/experimentsFinishEarly.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await experimentsFinishEarly(statsig, {
    id: "<id>",
    experimentStatusUpdateDto: {
      id: "experiment123",
      decisionReason: "Your reason for stopping early",
      removeTargeting: false,
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ConsoleV1ExperimentsControllerGenMakeDecisionRequest](../../models/operations/consolev1experimentscontrollergenmakedecisionrequest.md)                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1ExperimentsControllerGenMakeDecisionResponseBody](../../models/operations/consolev1experimentscontrollergenmakedecisionresponsebody.md)\>**
### Errors

| Error Object                                                                        | Status Code                                                                         | Content Type                                                                        |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| errors.ConsoleV1ExperimentsControllerGenMakeDecisionResponseBody                    | 400                                                                                 | application/json                                                                    |
| errors.ConsoleV1ExperimentsControllerGenMakeDecisionExperimentsResponseBody         | 401                                                                                 | application/json                                                                    |
| errors.ConsoleV1ExperimentsControllerGenMakeDecisionExperimentsResponseResponseBody | 404                                                                                 | application/json                                                                    |
| errors.SDKError                                                                     | 4xx-5xx                                                                             | */*                                                                                 |

## reset

Reset Experiment

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.experiments.reset({
    id: "<id>",
  });

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { StatsigCore } from "statsig/core.js";
import { experimentsReset } from "statsig/funcs/experimentsReset.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await experimentsReset(statsig, {
    id: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ConsoleV1ExperimentsControllerGenResetRequest](../../models/operations/consolev1experimentscontrollergenresetrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1ExperimentsControllerGenResetResponseBody](../../models/operations/consolev1experimentscontrollergenresetresponsebody.md)\>**
### Errors

| Error Object                                                                 | Status Code                                                                  | Content Type                                                                 |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| errors.ConsoleV1ExperimentsControllerGenResetResponseBody                    | 400                                                                          | application/json                                                             |
| errors.ConsoleV1ExperimentsControllerGenResetExperimentsResponseBody         | 401                                                                          | application/json                                                             |
| errors.ConsoleV1ExperimentsControllerGenResetExperimentsResponseResponseBody | 404                                                                          | application/json                                                             |
| errors.SDKError                                                              | 4xx-5xx                                                                      | */*                                                                          |

## abandon

Abandon Experiment

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.experiments.abandon({
    id: "<id>",
    experimentStatusUpdateDto: {
      id: "experiment123",
      decisionReason: "Your reason for stopping early",
      removeTargeting: false,
    },
  });

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { StatsigCore } from "statsig/core.js";
import { experimentsAbandon } from "statsig/funcs/experimentsAbandon.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await experimentsAbandon(statsig, {
    id: "<id>",
    experimentStatusUpdateDto: {
      id: "experiment123",
      decisionReason: "Your reason for stopping early",
      removeTargeting: false,
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ConsoleV1ExperimentsControllerGenAbandonRequest](../../models/operations/consolev1experimentscontrollergenabandonrequest.md)                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1ExperimentsControllerGenAbandonResponseBody](../../models/operations/consolev1experimentscontrollergenabandonresponsebody.md)\>**
### Errors

| Error Object                                                                   | Status Code                                                                    | Content Type                                                                   |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| errors.ConsoleV1ExperimentsControllerGenAbandonResponseBody                    | 400                                                                            | application/json                                                               |
| errors.ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseBody         | 401                                                                            | application/json                                                               |
| errors.ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseResponseBody | 404                                                                            | application/json                                                               |
| errors.SDKError                                                                | 4xx-5xx                                                                        | */*                                                                            |

## archive

Archive Experiment

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.experiments.archive({
    id: "<id>",
    experimentArchiveDto: {
      archiveReason: "The experiment is no longer needed",
    },
  });

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { StatsigCore } from "statsig/core.js";
import { experimentsArchive } from "statsig/funcs/experimentsArchive.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await experimentsArchive(statsig, {
    id: "<id>",
    experimentArchiveDto: {
      archiveReason: "The experiment is no longer needed",
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ConsoleV1ExperimentsControllerGenArchiveRequest](../../models/operations/consolev1experimentscontrollergenarchiverequest.md)                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1ExperimentsControllerGenArchiveResponseBody](../../models/operations/consolev1experimentscontrollergenarchiveresponsebody.md)\>**
### Errors

| Error Object                                                           | Status Code                                                            | Content Type                                                           |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| errors.ConsoleV1ExperimentsControllerGenArchiveResponseBody            | 401                                                                    | application/json                                                       |
| errors.ConsoleV1ExperimentsControllerGenArchiveExperimentsResponseBody | 404                                                                    | application/json                                                       |
| errors.SDKError                                                        | 4xx-5xx                                                                | */*                                                                    |

## unarchive

Unarchive Experiment

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.experiments.unarchive({
    id: "<id>",
  });

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { StatsigCore } from "statsig/core.js";
import { experimentsUnarchive } from "statsig/funcs/experimentsUnarchive.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await experimentsUnarchive(statsig, {
    id: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ConsoleV1ExperimentsControllerGenUnarchiveRequest](../../models/operations/consolev1experimentscontrollergenunarchiverequest.md)                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1ExperimentsControllerGenUnarchiveResponseBody](../../models/operations/consolev1experimentscontrollergenunarchiveresponsebody.md)\>**
### Errors

| Error Object                                                             | Status Code                                                              | Content Type                                                             |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| errors.ConsoleV1ExperimentsControllerGenUnarchiveResponseBody            | 401                                                                      | application/json                                                         |
| errors.ConsoleV1ExperimentsControllerGenUnarchiveExperimentsResponseBody | 404                                                                      | application/json                                                         |
| errors.SDKError                                                          | 4xx-5xx                                                                  | */*                                                                      |

## updateAssignmentSource

Post Assignment Source

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.experiments.updateAssignmentSource({
    name: "<value>",
    assignmentSourceQueryUpdateDto: {
      sql: "<value>",
      timestampColumn: "<value>",
      experimentIDColumn: "<value>",
      groupIDColumn: "<value>",
      idTypeMapping: [
        {
          statsigUnitID: "<value>",
          column: "<value>",
        },
      ],
    },
  });

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { StatsigCore } from "statsig/core.js";
import { experimentsUpdateAssignmentSource } from "statsig/funcs/experimentsUpdateAssignmentSource.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await experimentsUpdateAssignmentSource(statsig, {
    name: "<value>",
    assignmentSourceQueryUpdateDto: {
      sql: "<value>",
      timestampColumn: "<value>",
      experimentIDColumn: "<value>",
      groupIDColumn: "<value>",
      idTypeMapping: [
        {
          statsigUnitID: "<value>",
          column: "<value>",
        },
      ],
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                        | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                        | [operations.ConsoleV1ExperimentsControllerGenUpdateAssignmentSourceQueryRequest](../../models/operations/consolev1experimentscontrollergenupdateassignmentsourcequeryrequest.md) | :heavy_check_mark:                                                                                                                                                               | The request object to use for the request.                                                                                                                                       |
| `options`                                                                                                                                                                        | RequestOptions                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                          | :heavy_minus_sign:                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.   |
| `options.retries`                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                 |


### Response

**Promise\<[operations.ConsoleV1ExperimentsControllerGenUpdateAssignmentSourceQueryResponseBody](../../models/operations/consolev1experimentscontrollergenupdateassignmentsourcequeryresponsebody.md)\>**
### Errors

| Error Object                                                                                       | Status Code                                                                                        | Content Type                                                                                       |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| errors.ConsoleV1ExperimentsControllerGenUpdateAssignmentSourceQueryResponseBody                    | 400                                                                                                | application/json                                                                                   |
| errors.ConsoleV1ExperimentsControllerGenUpdateAssignmentSourceQueryExperimentsResponseBody         | 401                                                                                                | application/json                                                                                   |
| errors.ConsoleV1ExperimentsControllerGenUpdateAssignmentSourceQueryExperimentsResponseResponseBody | 404                                                                                                | application/json                                                                                   |
| errors.SDKError                                                                                    | 4xx-5xx                                                                                            | */*                                                                                                |

## deleteAssignmentSource

Delete Assignment Source

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.experiments.deleteAssignmentSource({
    name: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { StatsigCore } from "statsig/core.js";
import { experimentsDeleteAssignmentSource } from "statsig/funcs/experimentsDeleteAssignmentSource.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await experimentsDeleteAssignmentSource(statsig, {
    name: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ConsoleV1ExperimentsControllerGenRemoveAssignmentSourceRequest](../../models/operations/consolev1experimentscontrollergenremoveassignmentsourcerequest.md)         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1ExperimentsControllerGenRemoveAssignmentSourceResponseBody](../../models/operations/consolev1experimentscontrollergenremoveassignmentsourceresponsebody.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getOverrides

Get Experiment Overrides

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.experiments.getOverrides({
    id: "<id>",
  });

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { StatsigCore } from "statsig/core.js";
import { experimentsGetOverrides } from "statsig/funcs/experimentsGetOverrides.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await experimentsGetOverrides(statsig, {
    id: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ConsoleV1ExperimentOverridesControllerGenReadRequest](../../models/operations/consolev1experimentoverridescontrollergenreadrequest.md)                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1ExperimentOverridesControllerGenReadResponseBody](../../models/operations/consolev1experimentoverridescontrollergenreadresponsebody.md)\>**
### Errors

| Error Object                                                                | Status Code                                                                 | Content Type                                                                |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| errors.ConsoleV1ExperimentOverridesControllerGenReadResponseBody            | 401                                                                         | application/json                                                            |
| errors.ConsoleV1ExperimentOverridesControllerGenReadExperimentsResponseBody | 404                                                                         | application/json                                                            |
| errors.SDKError                                                             | 4xx-5xx                                                                     | */*                                                                         |

## updateOverrides

Update Experiment Overrides

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.experiments.updateOverrides({
    id: "<id>",
    experimentOverridesDto: {
      overrides: [
        {
          type: "segment",
          id: "<id>",
          groupID: "<value>",
        },
      ],
      userIDOverrides: [
        {
          groupID: "<value>",
          ids: [
            "<value>",
          ],
        },
      ],
    },
  });

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { StatsigCore } from "statsig/core.js";
import { experimentsUpdateOverrides } from "statsig/funcs/experimentsUpdateOverrides.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await experimentsUpdateOverrides(statsig, {
    id: "<id>",
    experimentOverridesDto: {
      overrides: [
        {
          type: "gate",
          id: "<id>",
          groupID: "<value>",
        },
      ],
      userIDOverrides: [
        {
          groupID: "<value>",
          ids: [
            "<value>",
          ],
        },
      ],
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ConsoleV1ExperimentOverridesControllerUpdateRequest](../../models/operations/consolev1experimentoverridescontrollerupdaterequest.md)                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1ExperimentOverridesControllerUpdateResponseBody](../../models/operations/consolev1experimentoverridescontrollerupdateresponsebody.md)\>**
### Errors

| Error Object                                                               | Status Code                                                                | Content Type                                                               |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| errors.ConsoleV1ExperimentOverridesControllerUpdateResponseBody            | 401                                                                        | application/json                                                           |
| errors.ConsoleV1ExperimentOverridesControllerUpdateExperimentsResponseBody | 404                                                                        | application/json                                                           |
| errors.SDKError                                                            | 4xx-5xx                                                                    | */*                                                                        |

## partialUpdateOverrides

Partially Update Experiment Overrides

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.experiments.partialUpdateOverrides({
    id: "<id>",
    experimentOverridesDto: {
      overrides: [
        {
          type: "gate",
          id: "<id>",
          groupID: "<value>",
        },
      ],
      userIDOverrides: [
        {
          groupID: "<value>",
          ids: [
            "<value>",
          ],
        },
      ],
    },
  });

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { StatsigCore } from "statsig/core.js";
import { experimentsPartialUpdateOverrides } from "statsig/funcs/experimentsPartialUpdateOverrides.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await experimentsPartialUpdateOverrides(statsig, {
    id: "<id>",
    experimentOverridesDto: {
      overrides: [
        {
          type: "segment",
          id: "<id>",
          groupID: "<value>",
        },
      ],
      userIDOverrides: [
        {
          groupID: "<value>",
          ids: [
            "<value>",
          ],
        },
      ],
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ConsoleV1ExperimentOverridesControllerAddRequest](../../models/operations/consolev1experimentoverridescontrolleraddrequest.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1ExperimentOverridesControllerAddResponseBody](../../models/operations/consolev1experimentoverridescontrolleraddresponsebody.md)\>**
### Errors

| Error Object                                                            | Status Code                                                             | Content Type                                                            |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| errors.ConsoleV1ExperimentOverridesControllerAddResponseBody            | 401                                                                     | application/json                                                        |
| errors.ConsoleV1ExperimentOverridesControllerAddExperimentsResponseBody | 404                                                                     | application/json                                                        |
| errors.SDKError                                                         | 4xx-5xx                                                                 | */*                                                                     |

## getExposureCount

Get Exposure Count for Experiment

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.experiments.getExposureCount({
    experimentName: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { StatsigCore } from "statsig/core.js";
import { experimentsGetExposureCount } from "statsig/funcs/experimentsGetExposureCount.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await experimentsGetExposureCount(statsig, {
    experimentName: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ConsoleV1ExposuresControllerExposureCountRequest](../../models/operations/consolev1exposurescontrollerexposurecountrequest.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[components.ExposureCountDto](../../models/components/exposurecountdto.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
