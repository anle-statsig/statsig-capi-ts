# Autotunes
(*autotunes*)

### Available Operations

* [create](#create) - Create Autotune
* [list](#list) - List Autotune
* [read](#read) - Read Autotune
* [partialUpdate](#partialupdate) - Partially Update Autotune
* [fullUpdate](#fullupdate) - Fully Update Autotune
* [delete](#delete) - Delete Autotune
* [start](#start) - Start Autotune Experiment
* [makeDecision](#makedecision) - Finish Experiment Early
* [reset](#reset) - Reset Experiment

## create

Create Autotune

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.autotunes.create({
    autotuneCreateDto: {
      variants: [
        {
          name: "<value>",
          json: "<value>",
        },
      ],
      successEvent: "<value>",
      explorationWindow: "24",
      attributionWindow: "2hrs",
      winnerThreshold: "98%",
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
import { autotunesCreate } from "statsig/funcs/autotunesCreate.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await autotunesCreate(statsig, {
    autotuneCreateDto: {
      variants: [
        {
          name: "<value>",
          json: "<value>",
        },
      ],
      successEvent: "<value>",
      explorationWindow: "24hr",
      attributionWindow: "2",
      winnerThreshold: "80%",
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
| `request`                                                                                                                                                                      | [operations.ConsoleV1AutotunesControllerGenCreateRequest](../../models/operations/consolev1autotunescontrollergencreaterequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1AutotunesControllerGenCreateResponseBody](../../models/operations/consolev1autotunescontrollergencreateresponsebody.md)\>**
### Errors

| Error Object                                                      | Status Code                                                       | Content Type                                                      |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| errors.ConsoleV1AutotunesControllerGenCreateResponseBody          | 400                                                               | application/json                                                  |
| errors.ConsoleV1AutotunesControllerGenCreateAutotunesResponseBody | 401                                                               | application/json                                                  |
| errors.SDKError                                                   | 4xx-5xx                                                           | */*                                                               |

## list

List Autotune

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.autotunes.list({
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
import { autotunesList } from "statsig/funcs/autotunesList.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await autotunesList(statsig, {
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
| `request`                                                                                                                                                                      | [operations.ConsoleV1AutotunesControllerGenListRequest](../../models/operations/consolev1autotunescontrollergenlistrequest.md)                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1AutotunesControllerGenListResponseBody](../../models/operations/consolev1autotunescontrollergenlistresponsebody.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## read

Read Autotune

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.autotunes.read({
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
import { autotunesRead } from "statsig/funcs/autotunesRead.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await autotunesRead(statsig, {
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
| `request`                                                                                                                                                                      | [operations.ConsoleV1AutotunesControllerGenReadRequest](../../models/operations/consolev1autotunescontrollergenreadrequest.md)                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1AutotunesControllerGenReadResponseBody](../../models/operations/consolev1autotunescontrollergenreadresponsebody.md)\>**
### Errors

| Error Object                                                    | Status Code                                                     | Content Type                                                    |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| errors.ConsoleV1AutotunesControllerGenReadResponseBody          | 401                                                             | application/json                                                |
| errors.ConsoleV1AutotunesControllerGenReadAutotunesResponseBody | 404                                                             | application/json                                                |
| errors.SDKError                                                 | 4xx-5xx                                                         | */*                                                             |

## partialUpdate

Update selected properties of the experiment

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.autotunes.partialUpdate({
    id: "<id>",
    autotunePartialUpdateDto: {},
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
import { autotunesPartialUpdate } from "statsig/funcs/autotunesPartialUpdate.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await autotunesPartialUpdate(statsig, {
    id: "<id>",
    autotunePartialUpdateDto: {},
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
| `request`                                                                                                                                                                      | [operations.ConsoleV1AutotunesControllerGenPartialUpdateRequest](../../models/operations/consolev1autotunescontrollergenpartialupdaterequest.md)                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1AutotunesControllerGenPartialUpdateResponseBody](../../models/operations/consolev1autotunescontrollergenpartialupdateresponsebody.md)\>**
### Errors

| Error Object                                                                     | Status Code                                                                      | Content Type                                                                     |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| errors.ConsoleV1AutotunesControllerGenPartialUpdateResponseBody                  | 400                                                                              | application/json                                                                 |
| errors.ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseBody         | 401                                                                              | application/json                                                                 |
| errors.ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseResponseBody | 404                                                                              | application/json                                                                 |
| errors.SDKError                                                                  | 4xx-5xx                                                                          | */*                                                                              |

## fullUpdate

Update all properties of the experiment

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.autotunes.fullUpdate({
    id: "<id>",
    autotuneFullUpdateDto: {
      description: "helpful summary of what this Autotune is",
      variants: [
        {
          name: "red",
          json: {
          "foo": "boo",
        },
        },
        {
          name: "blue",
          json: {
  
        },
        },
      ],
      successEvent: "purchase_item",
      successEventValue: "",
      explorationWindow: "1hr",
      attributionWindow: "2hrs",
      winnerThreshold: "99%",
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
import { autotunesFullUpdate } from "statsig/funcs/autotunesFullUpdate.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await autotunesFullUpdate(statsig, {
    id: "<id>",
    autotuneFullUpdateDto: {
      description: "helpful summary of what this Autotune is",
      variants: [
        {
          name: "red",
          json: {
          "foo": "boo",
        },
        },
        {
          name: "blue",
          json: {
  
        },
        },
      ],
      successEvent: "purchase_item",
      successEventValue: "",
      explorationWindow: "1hr",
      attributionWindow: "2hrs",
      winnerThreshold: "99%",
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
| `request`                                                                                                                                                                      | [operations.ConsoleV1AutotunesControllerGenFullUpdateRequest](../../models/operations/consolev1autotunescontrollergenfullupdaterequest.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1AutotunesControllerGenFullUpdateResponseBody](../../models/operations/consolev1autotunescontrollergenfullupdateresponsebody.md)\>**
### Errors

| Error Object                                                          | Status Code                                                           | Content Type                                                          |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| errors.ConsoleV1AutotunesControllerGenFullUpdateResponseBody          | 401                                                                   | application/json                                                      |
| errors.ConsoleV1AutotunesControllerGenFullUpdateAutotunesResponseBody | 404                                                                   | application/json                                                      |
| errors.SDKError                                                       | 4xx-5xx                                                               | */*                                                                   |

## delete

Delete Autotune

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.autotunes.delete({
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
import { autotunesDelete } from "statsig/funcs/autotunesDelete.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await autotunesDelete(statsig, {
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
| `request`                                                                                                                                                                      | [operations.ConsoleV1AutotunesControllerGenRemoveRequest](../../models/operations/consolev1autotunescontrollergenremoverequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1AutotunesControllerGenRemoveResponseBody](../../models/operations/consolev1autotunescontrollergenremoveresponsebody.md)\>**
### Errors

| Error Object                                                      | Status Code                                                       | Content Type                                                      |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| errors.ConsoleV1AutotunesControllerGenRemoveResponseBody          | 401                                                               | application/json                                                  |
| errors.ConsoleV1AutotunesControllerGenRemoveAutotunesResponseBody | 404                                                               | application/json                                                  |
| errors.SDKError                                                   | 4xx-5xx                                                           | */*                                                               |

## start

Start Autotune Experiment

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.autotunes.start({
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
import { autotunesStart } from "statsig/funcs/autotunesStart.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await autotunesStart(statsig, {
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
| `request`                                                                                                                                                                      | [operations.ConsoleV1AutotunesControllerGenStartRequest](../../models/operations/consolev1autotunescontrollergenstartrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1AutotunesControllerGenStartResponseBody](../../models/operations/consolev1autotunescontrollergenstartresponsebody.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## makeDecision

Finish Experiment Early

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.autotunes.makeDecision({
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
import { autotunesMakeDecision } from "statsig/funcs/autotunesMakeDecision.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await autotunesMakeDecision(statsig, {
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
| `request`                                                                                                                                                                      | [operations.ConsoleV1AutotunesControllerGenMakeDecisionRequest](../../models/operations/consolev1autotunescontrollergenmakedecisionrequest.md)                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1AutotunesControllerGenMakeDecisionResponseBody](../../models/operations/consolev1autotunescontrollergenmakedecisionresponsebody.md)\>**
### Errors

| Error Object                                                                    | Status Code                                                                     | Content Type                                                                    |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| errors.ConsoleV1AutotunesControllerGenMakeDecisionResponseBody                  | 400                                                                             | application/json                                                                |
| errors.ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseBody         | 401                                                                             | application/json                                                                |
| errors.ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseResponseBody | 404                                                                             | application/json                                                                |
| errors.SDKError                                                                 | 4xx-5xx                                                                         | */*                                                                             |

## reset

Reset Experiment

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.autotunes.reset({
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
import { autotunesReset } from "statsig/funcs/autotunesReset.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await autotunesReset(statsig, {
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
| `request`                                                                                                                                                                      | [operations.ConsoleV1AutotunesControllerGenResetRequest](../../models/operations/consolev1autotunescontrollergenresetrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1AutotunesControllerGenResetResponseBody](../../models/operations/consolev1autotunescontrollergenresetresponsebody.md)\>**
### Errors

| Error Object                                                             | Status Code                                                              | Content Type                                                             |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| errors.ConsoleV1AutotunesControllerGenResetResponseBody                  | 400                                                                      | application/json                                                         |
| errors.ConsoleV1AutotunesControllerGenResetAutotunesResponseBody         | 401                                                                      | application/json                                                         |
| errors.ConsoleV1AutotunesControllerGenResetAutotunesResponseResponseBody | 404                                                                      | application/json                                                         |
| errors.SDKError                                                          | 4xx-5xx                                                                  | */*                                                                      |
