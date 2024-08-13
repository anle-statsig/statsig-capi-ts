# MetricSources
(*metricSources*)

### Available Operations

* [create](#create) - Create Metric Source
* [get](#get) - Read Metric Source
* [delete](#delete) - Delete Metric Source
* [update](#update) - Update Metric Source
* [list](#list) - List metric source

## create

Create Metric Source

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.metricSources.create({
    metricSourceCreationContractDto: {
      name: "<value>",
      sql: "<value>",
      timestampColumn: "<value>",
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
import { metricSourcesCreate } from "statsig/funcs/metricSourcesCreate.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await metricSourcesCreate(statsig, {
    metricSourceCreationContractDto: {
      name: "<value>",
      sql: "<value>",
      timestampColumn: "<value>",
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

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ConsoleV1MetricsControllerGenCreateMetricSourceRequest](../../models/operations/consolev1metricscontrollergencreatemetricsourcerequest.md)                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1MetricsControllerGenCreateMetricSourceResponseBody](../../models/operations/consolev1metricscontrollergencreatemetricsourceresponsebody.md)\>**
### Errors

| Error Object                                                                    | Status Code                                                                     | Content Type                                                                    |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| errors.ConsoleV1MetricsControllerGenCreateMetricSourceResponseBody              | 400                                                                             | application/json                                                                |
| errors.ConsoleV1MetricsControllerGenCreateMetricSourceMetricSourcesResponseBody | 401                                                                             | application/json                                                                |
| errors.SDKError                                                                 | 4xx-5xx                                                                         | */*                                                                             |

## get

Read Metric Source

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.metricSources.get({
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
import { metricSourcesGet } from "statsig/funcs/metricSourcesGet.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await metricSourcesGet(statsig, {
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
| `request`                                                                                                                                                                      | [operations.ConsoleV1MetricsControllerGenReadMetricSourceRequest](../../models/operations/consolev1metricscontrollergenreadmetricsourcerequest.md)                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1MetricsControllerGenReadMetricSourceResponseBody](../../models/operations/consolev1metricscontrollergenreadmetricsourceresponsebody.md)\>**
### Errors

| Error Object                                                                  | Status Code                                                                   | Content Type                                                                  |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| errors.ConsoleV1MetricsControllerGenReadMetricSourceResponseBody              | 400                                                                           | application/json                                                              |
| errors.ConsoleV1MetricsControllerGenReadMetricSourceMetricSourcesResponseBody | 401                                                                           | application/json                                                              |
| errors.SDKError                                                               | 4xx-5xx                                                                       | */*                                                                           |

## delete

Delete Metric Source

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.metricSources.delete({
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
import { metricSourcesDelete } from "statsig/funcs/metricSourcesDelete.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await metricSourcesDelete(statsig, {
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
| `request`                                                                                                                                                                      | [operations.ConsoleV1MetricsControllerGenDeleteMetricSourceRequest](../../models/operations/consolev1metricscontrollergendeletemetricsourcerequest.md)                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1MetricsControllerGenDeleteMetricSourceResponseBody](../../models/operations/consolev1metricscontrollergendeletemetricsourceresponsebody.md)\>**
### Errors

| Error Object                                                                    | Status Code                                                                     | Content Type                                                                    |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| errors.ConsoleV1MetricsControllerGenDeleteMetricSourceResponseBody              | 400                                                                             | application/json                                                                |
| errors.ConsoleV1MetricsControllerGenDeleteMetricSourceMetricSourcesResponseBody | 401                                                                             | application/json                                                                |
| errors.SDKError                                                                 | 4xx-5xx                                                                         | */*                                                                             |

## update

Update Metric Source

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.metricSources.update({
    name: "<value>",
    metricSourceUpdateContractDto: {
      sql: "<value>",
      timestampColumn: "<value>",
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
import { metricSourcesUpdate } from "statsig/funcs/metricSourcesUpdate.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await metricSourcesUpdate(statsig, {
    name: "<value>",
    metricSourceUpdateContractDto: {
      sql: "<value>",
      timestampColumn: "<value>",
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

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ConsoleV1MetricsControllerUpdateMetricSourceRequest](../../models/operations/consolev1metricscontrollerupdatemetricsourcerequest.md)                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1MetricsControllerUpdateMetricSourceResponseBody](../../models/operations/consolev1metricscontrollerupdatemetricsourceresponsebody.md)\>**
### Errors

| Error Object                                                                 | Status Code                                                                  | Content Type                                                                 |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| errors.ConsoleV1MetricsControllerUpdateMetricSourceResponseBody              | 400                                                                          | application/json                                                             |
| errors.ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesResponseBody | 401                                                                          | application/json                                                             |
| errors.SDKError                                                              | 4xx-5xx                                                                      | */*                                                                          |

## list

List metric source

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.metricSources.list({
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
import { metricSourcesList } from "statsig/funcs/metricSourcesList.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await metricSourcesList(statsig, {
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
| `request`                                                                                                                                                                      | [operations.ConsoleV1MetricsControllerGenListMetricSourcesRequest](../../models/operations/consolev1metricscontrollergenlistmetricsourcesrequest.md)                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1MetricsControllerGenListMetricSourcesResponseBody](../../models/operations/consolev1metricscontrollergenlistmetricsourcesresponsebody.md)\>**
### Errors

| Error Object                                                                   | Status Code                                                                    | Content Type                                                                   |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| errors.ConsoleV1MetricsControllerGenListMetricSourcesResponseBody              | 400                                                                            | application/json                                                               |
| errors.ConsoleV1MetricsControllerGenListMetricSourcesMetricSourcesResponseBody | 401                                                                            | application/json                                                               |
| errors.SDKError                                                                | 4xx-5xx                                                                        | */*                                                                            |
