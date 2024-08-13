# ExperimentsWarehouseNative
(*experimentsWarehouseNative*)

### Available Operations

* [loadPulse](#loadpulse) - Load Pulse (Warehouse Native)
* [pulseLoadHistory](#pulseloadhistory) - Pulse Load History (Warehouse Native)
* [createEntityPropertySource](#createentitypropertysource) - Create Entity Property Source
* [listEntityPropertySources](#listentitypropertysources) - List Entity Property Sources
* [updateEntityPropertySource](#updateentitypropertysource) - Patch Entity Property Source
* [updateEntityPropertySourceQuery](#updateentitypropertysourcequery) - Post Entity Property Source
* [removeEntityPropertySource](#removeentitypropertysource) - Delete Entity Property Source
* [createAssignmentSource](#createassignmentsource) - Create Assignment Source
* [listAssignmentSources](#listassignmentsources) - List Assignment Sources
* [updateAssignmentSource](#updateassignmentsource) - Patch Assignment Source

## loadPulse

Load Pulse (Warehouse Native)

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.experimentsWarehouseNative.loadPulse({
    id: "<id>",
    echidnaLoadPulseQueryDto: {},
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
import { experimentsWarehouseNativeLoadPulse } from "statsig/funcs/experimentsWarehouseNativeLoadPulse.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await experimentsWarehouseNativeLoadPulse(statsig, {
    id: "<id>",
    echidnaLoadPulseQueryDto: {},
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
| `request`                                                                                                                                                                      | [operations.ConsoleV1ExperimentsControllerGenLoadPulseRequest](../../models/operations/consolev1experimentscontrollergenloadpulserequest.md)                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1ExperimentsControllerGenLoadPulseResponseBody](../../models/operations/consolev1experimentscontrollergenloadpulseresponsebody.md)\>**
### Errors

| Error Object                                                                            | Status Code                                                                             | Content Type                                                                            |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| errors.ConsoleV1ExperimentsControllerGenLoadPulseResponseBody                           | 400                                                                                     | application/json                                                                        |
| errors.ConsoleV1ExperimentsControllerGenLoadPulseExperimentsWarehouseNativeResponseBody | 401                                                                                     | application/json                                                                        |
| errors.SDKError                                                                         | 4xx-5xx                                                                                 | */*                                                                                     |

## pulseLoadHistory

Pulse Load History (Warehouse Native)

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.experimentsWarehouseNative.pulseLoadHistory({
    id: "<id>",
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
import { experimentsWarehouseNativePulseLoadHistory } from "statsig/funcs/experimentsWarehouseNativePulseLoadHistory.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await experimentsWarehouseNativePulseLoadHistory(statsig, {
    id: "<id>",
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
| `request`                                                                                                                                                                      | [operations.ConsoleV1ExperimentsControllerGenPulseLoadHistoryRequest](../../models/operations/consolev1experimentscontrollergenpulseloadhistoryrequest.md)                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1ExperimentsControllerGenPulseLoadHistoryResponseBody](../../models/operations/consolev1experimentscontrollergenpulseloadhistoryresponsebody.md)\>**
### Errors

| Error Object                                                                                   | Status Code                                                                                    | Content Type                                                                                   |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| errors.ConsoleV1ExperimentsControllerGenPulseLoadHistoryResponseBody                           | 400                                                                                            | application/json                                                                               |
| errors.ConsoleV1ExperimentsControllerGenPulseLoadHistoryExperimentsWarehouseNativeResponseBody | 401                                                                                            | application/json                                                                               |
| errors.SDKError                                                                                | 4xx-5xx                                                                                        | */*                                                                                            |

## createEntityPropertySource

Create Entity Property Source

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.experimentsWarehouseNative.createEntityPropertySource({
    entityPropertySourceCreationDto: {
      name: "<value>",
      sql: "<value>",
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
import { experimentsWarehouseNativeCreateEntityPropertySource } from "statsig/funcs/experimentsWarehouseNativeCreateEntityPropertySource.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await experimentsWarehouseNativeCreateEntityPropertySource(statsig, {
    entityPropertySourceCreationDto: {
      name: "<value>",
      sql: "<value>",
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
| `request`                                                                                                                                                                      | [operations.ConsoleV1ExperimentsControllerGenCreateEntityPropertySourceRequest](../../models/operations/consolev1experimentscontrollergencreateentitypropertysourcerequest.md) | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1ExperimentsControllerGenCreateEntityPropertySourceResponseBody](../../models/operations/consolev1experimentscontrollergencreateentitypropertysourceresponsebody.md)\>**
### Errors

| Error Object                                                                                                     | Status Code                                                                                                      | Content Type                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| errors.ConsoleV1ExperimentsControllerGenCreateEntityPropertySourceResponseBody                                   | 400                                                                                                              | application/json                                                                                                 |
| errors.ConsoleV1ExperimentsControllerGenCreateEntityPropertySourceExperimentsWarehouseNativeResponseBody         | 401                                                                                                              | application/json                                                                                                 |
| errors.ConsoleV1ExperimentsControllerGenCreateEntityPropertySourceExperimentsWarehouseNativeResponseResponseBody | 404                                                                                                              | application/json                                                                                                 |
| errors.SDKError                                                                                                  | 4xx-5xx                                                                                                          | */*                                                                                                              |

## listEntityPropertySources

List Entity Property Sources

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.experimentsWarehouseNative.listEntityPropertySources({
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
import { experimentsWarehouseNativeListEntityPropertySources } from "statsig/funcs/experimentsWarehouseNativeListEntityPropertySources.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await experimentsWarehouseNativeListEntityPropertySources(statsig, {
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
| `request`                                                                                                                                                                      | [operations.ConsoleV1ExperimentsControllerGenListEntityPropertySourcesRequest](../../models/operations/consolev1experimentscontrollergenlistentitypropertysourcesrequest.md)   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1ExperimentsControllerGenListEntityPropertySourcesResponseBody](../../models/operations/consolev1experimentscontrollergenlistentitypropertysourcesresponsebody.md)\>**
### Errors

| Error Object                                                                                            | Status Code                                                                                             | Content Type                                                                                            |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| errors.ConsoleV1ExperimentsControllerGenListEntityPropertySourcesResponseBody                           | 400                                                                                                     | application/json                                                                                        |
| errors.ConsoleV1ExperimentsControllerGenListEntityPropertySourcesExperimentsWarehouseNativeResponseBody | 401                                                                                                     | application/json                                                                                        |
| errors.SDKError                                                                                         | 4xx-5xx                                                                                                 | */*                                                                                                     |

## updateEntityPropertySource

Patch Entity Property Source

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.experimentsWarehouseNative.updateEntityPropertySource({
    name: "<value>",
    entityPropertySourcePartialUpdateDto: {},
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
import { experimentsWarehouseNativeUpdateEntityPropertySource } from "statsig/funcs/experimentsWarehouseNativeUpdateEntityPropertySource.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await experimentsWarehouseNativeUpdateEntityPropertySource(statsig, {
    name: "<value>",
    entityPropertySourcePartialUpdateDto: {},
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
| `request`                                                                                                                                                                      | [operations.ConsoleV1ExperimentsControllerGenUpdateEntityPropertySourceRequest](../../models/operations/consolev1experimentscontrollergenupdateentitypropertysourcerequest.md) | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1ExperimentsControllerGenUpdateEntityPropertySourceResponseBody](../../models/operations/consolev1experimentscontrollergenupdateentitypropertysourceresponsebody.md)\>**
### Errors

| Error Object                                                                                                     | Status Code                                                                                                      | Content Type                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| errors.ConsoleV1ExperimentsControllerGenUpdateEntityPropertySourceResponseBody                                   | 400                                                                                                              | application/json                                                                                                 |
| errors.ConsoleV1ExperimentsControllerGenUpdateEntityPropertySourceExperimentsWarehouseNativeResponseBody         | 401                                                                                                              | application/json                                                                                                 |
| errors.ConsoleV1ExperimentsControllerGenUpdateEntityPropertySourceExperimentsWarehouseNativeResponseResponseBody | 404                                                                                                              | application/json                                                                                                 |
| errors.SDKError                                                                                                  | 4xx-5xx                                                                                                          | */*                                                                                                              |

## updateEntityPropertySourceQuery

Post Entity Property Source

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.experimentsWarehouseNative.updateEntityPropertySourceQuery({
    name: "<value>",
    entityPropertySourceQueryUpdateDto: {
      sql: "<value>",
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
import { experimentsWarehouseNativeUpdateEntityPropertySourceQuery } from "statsig/funcs/experimentsWarehouseNativeUpdateEntityPropertySourceQuery.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await experimentsWarehouseNativeUpdateEntityPropertySourceQuery(statsig, {
    name: "<value>",
    entityPropertySourceQueryUpdateDto: {
      sql: "<value>",
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

| Parameter                                                                                                                                                                                | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                | [operations.ConsoleV1ExperimentsControllerGenUpdateEntityPropertySourceQueryRequest](../../models/operations/consolev1experimentscontrollergenupdateentitypropertysourcequeryrequest.md) | :heavy_check_mark:                                                                                                                                                                       | The request object to use for the request.                                                                                                                                               |
| `options`                                                                                                                                                                                | RequestOptions                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                       | Used to set various options for making HTTP requests.                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                   | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                  | :heavy_minus_sign:                                                                                                                                                                       | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.           |
| `options.retries`                                                                                                                                                                        | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                       | Enables retrying HTTP requests under certain failure conditions.                                                                                                                         |


### Response

**Promise\<[operations.ConsoleV1ExperimentsControllerGenUpdateEntityPropertySourceQueryResponseBody](../../models/operations/consolev1experimentscontrollergenupdateentitypropertysourcequeryresponsebody.md)\>**
### Errors

| Error Object                                                                                                          | Status Code                                                                                                           | Content Type                                                                                                          |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| errors.ConsoleV1ExperimentsControllerGenUpdateEntityPropertySourceQueryResponseBody                                   | 400                                                                                                                   | application/json                                                                                                      |
| errors.ConsoleV1ExperimentsControllerGenUpdateEntityPropertySourceQueryExperimentsWarehouseNativeResponseBody         | 401                                                                                                                   | application/json                                                                                                      |
| errors.ConsoleV1ExperimentsControllerGenUpdateEntityPropertySourceQueryExperimentsWarehouseNativeResponseResponseBody | 404                                                                                                                   | application/json                                                                                                      |
| errors.SDKError                                                                                                       | 4xx-5xx                                                                                                               | */*                                                                                                                   |

## removeEntityPropertySource

Delete Entity Property Source

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.experimentsWarehouseNative.removeEntityPropertySource({
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
import { experimentsWarehouseNativeRemoveEntityPropertySource } from "statsig/funcs/experimentsWarehouseNativeRemoveEntityPropertySource.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await experimentsWarehouseNativeRemoveEntityPropertySource(statsig, {
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
| `request`                                                                                                                                                                      | [operations.ConsoleV1ExperimentsControllerGenRemoveEntityPropertySourceRequest](../../models/operations/consolev1experimentscontrollergenremoveentitypropertysourcerequest.md) | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1ExperimentsControllerGenRemoveEntityPropertySourceResponseBody](../../models/operations/consolev1experimentscontrollergenremoveentitypropertysourceresponsebody.md)\>**
### Errors

| Error Object                                                                                                     | Status Code                                                                                                      | Content Type                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| errors.ConsoleV1ExperimentsControllerGenRemoveEntityPropertySourceResponseBody                                   | 400                                                                                                              | application/json                                                                                                 |
| errors.ConsoleV1ExperimentsControllerGenRemoveEntityPropertySourceExperimentsWarehouseNativeResponseBody         | 401                                                                                                              | application/json                                                                                                 |
| errors.ConsoleV1ExperimentsControllerGenRemoveEntityPropertySourceExperimentsWarehouseNativeResponseResponseBody | 404                                                                                                              | application/json                                                                                                 |
| errors.SDKError                                                                                                  | 4xx-5xx                                                                                                          | */*                                                                                                              |

## createAssignmentSource

Create Assignment Source

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.experimentsWarehouseNative.createAssignmentSource({
    assignmentSourceCreationDto: {
      name: "<value>",
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
import { experimentsWarehouseNativeCreateAssignmentSource } from "statsig/funcs/experimentsWarehouseNativeCreateAssignmentSource.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await experimentsWarehouseNativeCreateAssignmentSource(statsig, {
    assignmentSourceCreationDto: {
      name: "<value>",
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

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ConsoleV1ExperimentsControllerGenCreateAssignmentSourceRequest](../../models/operations/consolev1experimentscontrollergencreateassignmentsourcerequest.md)         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1ExperimentsControllerGenCreateAssignmentSourceResponseBody](../../models/operations/consolev1experimentscontrollergencreateassignmentsourceresponsebody.md)\>**
### Errors

| Error Object                                                                                         | Status Code                                                                                          | Content Type                                                                                         |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| errors.ConsoleV1ExperimentsControllerGenCreateAssignmentSourceResponseBody                           | 400                                                                                                  | application/json                                                                                     |
| errors.ConsoleV1ExperimentsControllerGenCreateAssignmentSourceExperimentsWarehouseNativeResponseBody | 401                                                                                                  | application/json                                                                                     |
| errors.SDKError                                                                                      | 4xx-5xx                                                                                              | */*                                                                                                  |

## listAssignmentSources

List Assignment Sources

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.experimentsWarehouseNative.listAssignmentSources({
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
import { experimentsWarehouseNativeListAssignmentSources } from "statsig/funcs/experimentsWarehouseNativeListAssignmentSources.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await experimentsWarehouseNativeListAssignmentSources(statsig, {
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
| `request`                                                                                                                                                                      | [operations.ConsoleV1ExperimentsControllerGenListAssignmentSourcesRequest](../../models/operations/consolev1experimentscontrollergenlistassignmentsourcesrequest.md)           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1ExperimentsControllerGenListAssignmentSourcesResponseBody](../../models/operations/consolev1experimentscontrollergenlistassignmentsourcesresponsebody.md)\>**
### Errors

| Error Object                                                                                        | Status Code                                                                                         | Content Type                                                                                        |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| errors.ConsoleV1ExperimentsControllerGenListAssignmentSourcesResponseBody                           | 400                                                                                                 | application/json                                                                                    |
| errors.ConsoleV1ExperimentsControllerGenListAssignmentSourcesExperimentsWarehouseNativeResponseBody | 401                                                                                                 | application/json                                                                                    |
| errors.SDKError                                                                                     | 4xx-5xx                                                                                             | */*                                                                                                 |

## updateAssignmentSource

Patch Assignment Source

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.experimentsWarehouseNative.updateAssignmentSource({
    name: "<value>",
    assignmentSourcePartialUpdateDto: {},
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
import { experimentsWarehouseNativeUpdateAssignmentSource } from "statsig/funcs/experimentsWarehouseNativeUpdateAssignmentSource.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await experimentsWarehouseNativeUpdateAssignmentSource(statsig, {
    name: "<value>",
    assignmentSourcePartialUpdateDto: {},
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
| `request`                                                                                                                                                                      | [operations.ConsoleV1ExperimentsControllerGenUpdateAssignmentSourceRequest](../../models/operations/consolev1experimentscontrollergenupdateassignmentsourcerequest.md)         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1ExperimentsControllerGenUpdateAssignmentSourceResponseBody](../../models/operations/consolev1experimentscontrollergenupdateassignmentsourceresponsebody.md)\>**
### Errors

| Error Object                                                                                                 | Status Code                                                                                                  | Content Type                                                                                                 |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| errors.ConsoleV1ExperimentsControllerGenUpdateAssignmentSourceResponseBody                                   | 400                                                                                                          | application/json                                                                                             |
| errors.ConsoleV1ExperimentsControllerGenUpdateAssignmentSourceExperimentsWarehouseNativeResponseBody         | 401                                                                                                          | application/json                                                                                             |
| errors.ConsoleV1ExperimentsControllerGenUpdateAssignmentSourceExperimentsWarehouseNativeResponseResponseBody | 404                                                                                                          | application/json                                                                                             |
| errors.SDKError                                                                                              | 4xx-5xx                                                                                                      | */*                                                                                                          |
