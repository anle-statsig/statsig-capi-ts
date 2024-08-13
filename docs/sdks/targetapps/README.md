# TargetApps
(*targetApps*)

### Available Operations

* [get](#get) - Read Target App
* [update](#update) - Update Target App
* [delete](#delete) - Delete Target App
* [list](#list) - List Target Apps
* [bulkUpdate](#bulkupdate) - Bulk Assign Target Apps
* [create](#create) - Create Target App

## get

Read Target App

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.targetApps.get({
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
import { targetAppsGet } from "statsig/funcs/targetAppsGet.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await targetAppsGet(statsig, {
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
| `request`                                                                                                                                                                      | [operations.ConsoleV1TargetAppControllerGenReadRequest](../../models/operations/consolev1targetappcontrollergenreadrequest.md)                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1TargetAppControllerGenReadResponseBody](../../models/operations/consolev1targetappcontrollergenreadresponsebody.md)\>**
### Errors

| Error Object                                           | Status Code                                            | Content Type                                           |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| errors.ConsoleV1TargetAppControllerGenReadResponseBody | 401                                                    | application/json                                       |
| errors.SDKError                                        | 4xx-5xx                                                | */*                                                    |

## update

Update Target App

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.targetApps.update({
    id: "<id>",
    updateTargetAppDto: {
      name: "string",
      description: "a description",
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
import { targetAppsUpdate } from "statsig/funcs/targetAppsUpdate.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await targetAppsUpdate(statsig, {
    id: "<id>",
    updateTargetAppDto: {
      name: "string",
      description: "a description",
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
| `request`                                                                                                                                                                      | [operations.ConsoleV1TargetAppControllerGenUpdateRequest](../../models/operations/consolev1targetappcontrollergenupdaterequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1TargetAppControllerGenUpdateResponseBody](../../models/operations/consolev1targetappcontrollergenupdateresponsebody.md)\>**
### Errors

| Error Object                                                       | Status Code                                                        | Content Type                                                       |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| errors.ConsoleV1TargetAppControllerGenUpdateResponseBody           | 401                                                                | application/json                                                   |
| errors.ConsoleV1TargetAppControllerGenUpdateTargetAppsResponseBody | 404                                                                | application/json                                                   |
| errors.SDKError                                                    | 4xx-5xx                                                            | */*                                                                |

## delete

Delete Target App

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.targetApps.delete({
    id: "string",
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
import { targetAppsDelete } from "statsig/funcs/targetAppsDelete.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await targetAppsDelete(statsig, {
    id: "string",
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
| `request`                                                                                                                                                                      | [operations.ConsoleV1TargetAppControllerGenDeleteRequest](../../models/operations/consolev1targetappcontrollergendeleterequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1TargetAppControllerGenDeleteResponseBody](../../models/operations/consolev1targetappcontrollergendeleteresponsebody.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## list

List Target Apps

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.targetApps.list({
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
import { targetAppsList } from "statsig/funcs/targetAppsList.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await targetAppsList(statsig, {
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
| `request`                                                                                                                                                                      | [operations.ConsoleV1TargetAppControllerGenListRequest](../../models/operations/consolev1targetappcontrollergenlistrequest.md)                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1TargetAppControllerGenListResponseBody](../../models/operations/consolev1targetappcontrollergenlistresponsebody.md)\>**
### Errors

| Error Object                                           | Status Code                                            | Content Type                                           |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| errors.ConsoleV1TargetAppControllerGenListResponseBody | 401                                                    | application/json                                       |
| errors.SDKError                                        | 4xx-5xx                                                | */*                                                    |

## bulkUpdate

Bulk Assign Target Apps

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.targetApps.bulkUpdate({
    bulkAssignConfigTargetAppDto: {
      targetApps: [
        "<value>",
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
import { targetAppsBulkUpdate } from "statsig/funcs/targetAppsBulkUpdate.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await targetAppsBulkUpdate(statsig, {
    bulkAssignConfigTargetAppDto: {
      targetApps: [
        "<value>",
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
| `request`                                                                                                                                                                      | [operations.ConsoleV1TargetAppControllerBulkUpdateRequest](../../models/operations/consolev1targetappcontrollerbulkupdaterequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1TargetAppControllerBulkUpdateResponseBody](../../models/operations/consolev1targetappcontrollerbulkupdateresponsebody.md)\>**
### Errors

| Error Object                                                        | Status Code                                                         | Content Type                                                        |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| errors.ConsoleV1TargetAppControllerBulkUpdateResponseBody           | 401                                                                 | application/json                                                    |
| errors.ConsoleV1TargetAppControllerBulkUpdateTargetAppsResponseBody | 404                                                                 | application/json                                                    |
| errors.SDKError                                                     | 4xx-5xx                                                             | */*                                                                 |

## create

Create Target App

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.targetApps.create({
    targetAppCreateDto: {
      name: "string",
      description: "a description",
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
import { targetAppsCreate } from "statsig/funcs/targetAppsCreate.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await targetAppsCreate(statsig, {
    targetAppCreateDto: {
      name: "string",
      description: "a description",
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
| `request`                                                                                                                                                                      | [operations.ConsoleV1TargetAppControllerGenCreateRequest](../../models/operations/consolev1targetappcontrollergencreaterequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1TargetAppControllerGenCreateResponseBody](../../models/operations/consolev1targetappcontrollergencreateresponsebody.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
