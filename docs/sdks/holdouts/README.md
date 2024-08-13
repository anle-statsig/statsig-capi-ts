# Holdouts
(*holdouts*)

### Available Operations

* [create](#create) - Create holdout
* [list](#list) - List Holdouts
* [get](#get) - Get holdout by id
* [updatePartial](#updatepartial) - Patch holdout by id
* [update](#update) - Update holdout by id
* [delete](#delete) - Delete holdout by id
* [getOverride](#getoverride) - Read Holdout Overrides
* [updateOverride](#updateoverride) - Update Holdout Overrides
* [addOverride](#addoverride) - Add Holdout Overrides
* [removeOverride](#removeoverride) - Remove Holdout Overrides

## create

Create holdout

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.holdouts.create({
    holdoutCreateContractDto: {
      name: "team holdout",
      description: "holdout for this team",
      idType: "userID",
      teamID: "4pjeXYDjC2WinSgOiII7wh",
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
import { holdoutsCreate } from "statsig/funcs/holdoutsCreate.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await holdoutsCreate(statsig, {
    holdoutCreateContractDto: {
      name: "team holdout",
      description: "holdout for this team",
      idType: "userID",
      teamID: "4pjeXYDjC2WinSgOiII7wh",
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
| `request`                                                                                                                                                                      | [operations.ConsoleV1HoldoutsControllerGenCreateRequest](../../models/operations/consolev1holdoutscontrollergencreaterequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1HoldoutsControllerGenCreateResponseBody](../../models/operations/consolev1holdoutscontrollergencreateresponsebody.md)\>**
### Errors

| Error Object                                                            | Status Code                                                             | Content Type                                                            |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| errors.ConsoleV1HoldoutsControllerGenCreateResponseBody                 | 400                                                                     | application/json                                                        |
| errors.ConsoleV1HoldoutsControllerGenCreateHoldoutsResponseBody         | 401                                                                     | application/json                                                        |
| errors.ConsoleV1HoldoutsControllerGenCreateHoldoutsResponseResponseBody | 404                                                                     | application/json                                                        |
| errors.SDKError                                                         | 4xx-5xx                                                                 | */*                                                                     |

## list

List Holdouts

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.holdouts.list({
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
import { holdoutsList } from "statsig/funcs/holdoutsList.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await holdoutsList(statsig, {
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
| `request`                                                                                                                                                                      | [operations.ConsoleV1HoldoutsControllerGenListRequest](../../models/operations/consolev1holdoutscontrollergenlistrequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1HoldoutsControllerGenListResponseBody](../../models/operations/consolev1holdoutscontrollergenlistresponsebody.md)\>**
### Errors

| Error Object                                          | Status Code                                           | Content Type                                          |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| errors.ConsoleV1HoldoutsControllerGenListResponseBody | 401                                                   | application/json                                      |
| errors.SDKError                                       | 4xx-5xx                                               | */*                                                   |

## get

Get holdout by id

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.holdouts.get({
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
import { holdoutsGet } from "statsig/funcs/holdoutsGet.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await holdoutsGet(statsig, {
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
| `request`                                                                                                                                                                      | [operations.ConsoleV1HoldoutsControllerGenReadRequest](../../models/operations/consolev1holdoutscontrollergenreadrequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1HoldoutsControllerGenReadResponseBody](../../models/operations/consolev1holdoutscontrollergenreadresponsebody.md)\>**
### Errors

| Error Object                                          | Status Code                                           | Content Type                                          |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| errors.ConsoleV1HoldoutsControllerGenReadResponseBody | 401                                                   | application/json                                      |
| errors.SDKError                                       | 4xx-5xx                                               | */*                                                   |

## updatePartial

Patch holdout by id

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.holdouts.updatePartial({
    id: "<id>",
    holdoutPartialUpdateContractDto: {
      isEnabled: true,
      description: "example holdout description",
      passPercentage: 5,
      gateIDs: [
        "4pjeXYDjC2WinSgOiII7wh",
      ],
      experimentIDs: [
        "70fCNphHGesdLwHdHau99q",
      ],
      layerIDs: [
        "5O908pyGoCqw6QH1nt8v82",
      ],
      isGlobal: false,
      targetingGateID: "4pjeXYDjC2WinSgOiII7wh",
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
import { holdoutsUpdatePartial } from "statsig/funcs/holdoutsUpdatePartial.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await holdoutsUpdatePartial(statsig, {
    id: "<id>",
    holdoutPartialUpdateContractDto: {
      isEnabled: true,
      description: "example holdout description",
      passPercentage: 5,
      gateIDs: [
        "4pjeXYDjC2WinSgOiII7wh",
      ],
      experimentIDs: [
        "70fCNphHGesdLwHdHau99q",
      ],
      layerIDs: [
        "5O908pyGoCqw6QH1nt8v82",
      ],
      isGlobal: false,
      targetingGateID: "4pjeXYDjC2WinSgOiII7wh",
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
| `request`                                                                                                                                                                      | [operations.ConsoleV1HoldoutsControllerGenPartialUpdateRequest](../../models/operations/consolev1holdoutscontrollergenpartialupdaterequest.md)                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1HoldoutsControllerGenPartialUpdateResponseBody](../../models/operations/consolev1holdoutscontrollergenpartialupdateresponsebody.md)\>**
### Errors

| Error Object                                                           | Status Code                                                            | Content Type                                                           |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| errors.ConsoleV1HoldoutsControllerGenPartialUpdateResponseBody         | 401                                                                    | application/json                                                       |
| errors.ConsoleV1HoldoutsControllerGenPartialUpdateHoldoutsResponseBody | 404                                                                    | application/json                                                       |
| errors.SDKError                                                        | 4xx-5xx                                                                | */*                                                                    |

## update

Update holdout by id

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.holdouts.update({
    id: "<id>",
    holdoutFullUpdateContractDto: {
      isEnabled: true,
      description: "example holdout description",
      passPercentage: 5,
      gateIDs: [
        "4pjeXYDjC2WinSgOiII7wh",
      ],
      experimentIDs: [
        "70fCNphHGesdLwHdHau99q",
      ],
      layerIDs: [
        "5O908pyGoCqw6QH1nt8v82",
      ],
      isGlobal: false,
      targetingGateID: "4pjeXYDjC2WinSgOiII7wh",
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
import { holdoutsUpdate } from "statsig/funcs/holdoutsUpdate.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await holdoutsUpdate(statsig, {
    id: "<id>",
    holdoutFullUpdateContractDto: {
      isEnabled: true,
      description: "example holdout description",
      passPercentage: 5,
      gateIDs: [
        "4pjeXYDjC2WinSgOiII7wh",
      ],
      experimentIDs: [
        "70fCNphHGesdLwHdHau99q",
      ],
      layerIDs: [
        "5O908pyGoCqw6QH1nt8v82",
      ],
      isGlobal: false,
      targetingGateID: "4pjeXYDjC2WinSgOiII7wh",
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
| `request`                                                                                                                                                                      | [operations.ConsoleV1HoldoutsControllerGenFullUpdateRequest](../../models/operations/consolev1holdoutscontrollergenfullupdaterequest.md)                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1HoldoutsControllerGenFullUpdateResponseBody](../../models/operations/consolev1holdoutscontrollergenfullupdateresponsebody.md)\>**
### Errors

| Error Object                                                                | Status Code                                                                 | Content Type                                                                |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| errors.ConsoleV1HoldoutsControllerGenFullUpdateResponseBody                 | 400                                                                         | application/json                                                            |
| errors.ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseBody         | 401                                                                         | application/json                                                            |
| errors.ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseResponseBody | 404                                                                         | application/json                                                            |
| errors.SDKError                                                             | 4xx-5xx                                                                     | */*                                                                         |

## delete

Delete holdout by id

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.holdouts.delete({
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
import { holdoutsDelete } from "statsig/funcs/holdoutsDelete.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await holdoutsDelete(statsig, {
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
| `request`                                                                                                                                                                      | [operations.ConsoleV1HoldoutsControllerGenRemoveRequest](../../models/operations/consolev1holdoutscontrollergenremoverequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1HoldoutsControllerGenRemoveResponseBody](../../models/operations/consolev1holdoutscontrollergenremoveresponsebody.md)\>**
### Errors

| Error Object                                                    | Status Code                                                     | Content Type                                                    |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| errors.ConsoleV1HoldoutsControllerGenRemoveResponseBody         | 401                                                             | application/json                                                |
| errors.ConsoleV1HoldoutsControllerGenRemoveHoldoutsResponseBody | 404                                                             | application/json                                                |
| errors.SDKError                                                 | 4xx-5xx                                                         | */*                                                             |

## getOverride

Read Holdout Overrides

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.holdouts.getOverride({
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
import { holdoutsGetOverride } from "statsig/funcs/holdoutsGetOverride.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await holdoutsGetOverride(statsig, {
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
| `request`                                                                                                                                                                      | [operations.ConsoleV1HoldoutOverridesControllerGenReadRequest](../../models/operations/consolev1holdoutoverridescontrollergenreadrequest.md)                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1HoldoutOverridesControllerGenReadResponseBody](../../models/operations/consolev1holdoutoverridescontrollergenreadresponsebody.md)\>**
### Errors

| Error Object                                                  | Status Code                                                   | Content Type                                                  |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| errors.ConsoleV1HoldoutOverridesControllerGenReadResponseBody | 401                                                           | application/json                                              |
| errors.SDKError                                               | 4xx-5xx                                                       | */*                                                           |

## updateOverride

Update Holdout Overrides

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.holdouts.updateOverride({
    id: "<id>",
  updateOverridesContractDto:     {
        passingUserIDs: [
          "user123",
          "user456",
        ],
        failingUserIDs: [
          "user789",
          "user012",
        ],
        passingCustomIDs: [
          "custom123",
        ],
        failingCustomIDs: [
          "custom456",
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
import { holdoutsUpdateOverride } from "statsig/funcs/holdoutsUpdateOverride.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await holdoutsUpdateOverride(statsig, {
    id: "<id>",
  updateOverridesContractDto:     {
        environmentOverrides: [
          {
            environment: "staging",
            unitID: "unit123",
            passingIDs: [
              "id1",
              "id2",
            ],
            failingIDs: [
              "id3",
              "id4",
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
| `request`                                                                                                                                                                      | [operations.ConsoleV1HoldoutOverridesControllerGenUpdateRequest](../../models/operations/consolev1holdoutoverridescontrollergenupdaterequest.md)                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1HoldoutOverridesControllerGenUpdateResponseBody](../../models/operations/consolev1holdoutoverridescontrollergenupdateresponsebody.md)\>**
### Errors

| Error Object                                                    | Status Code                                                     | Content Type                                                    |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| errors.ConsoleV1HoldoutOverridesControllerGenUpdateResponseBody | 401                                                             | application/json                                                |
| errors.SDKError                                                 | 4xx-5xx                                                         | */*                                                             |

## addOverride

Add Holdout Overrides

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.holdouts.addOverride({
    id: "<id>",
  updateOverridesContractDto:     {
        passingUserIDs: [
          "user123",
          "user456",
        ],
        failingUserIDs: [
          "user789",
          "user012",
        ],
        passingCustomIDs: [
          "custom123",
        ],
        failingCustomIDs: [
          "custom456",
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
import { holdoutsAddOverride } from "statsig/funcs/holdoutsAddOverride.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await holdoutsAddOverride(statsig, {
    id: "<id>",
  updateOverridesContractDto:     {
        passingUserIDs: [
          "user123",
          "user456",
        ],
        failingUserIDs: [
          "user789",
          "user012",
        ],
        passingCustomIDs: [
          "custom123",
        ],
        failingCustomIDs: [
          "custom456",
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
| `request`                                                                                                                                                                      | [operations.ConsoleV1HoldoutOverridesControllerGenAddRequest](../../models/operations/consolev1holdoutoverridescontrollergenaddrequest.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1HoldoutOverridesControllerGenAddResponseBody](../../models/operations/consolev1holdoutoverridescontrollergenaddresponsebody.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeOverride

Remove selected ids from an id list

### Example Usage

```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await statsig.holdouts.removeOverride({
    id: "<id>",
  updateOverridesContractDto:     {
        passingUserIDs: [
          "user123",
          "user456",
        ],
        failingUserIDs: [
          "user789",
          "user012",
        ],
        passingCustomIDs: [
          "custom123",
        ],
        failingCustomIDs: [
          "custom456",
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
import { holdoutsRemoveOverride } from "statsig/funcs/holdoutsRemoveOverride.js";

// Use `StatsigCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const statsig = new StatsigCore({
  statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await holdoutsRemoveOverride(statsig, {
    id: "<id>",
  updateOverridesContractDto:     {
        passingUserIDs: [
          "user123",
          "user456",
        ],
        failingUserIDs: [
          "user789",
          "user012",
        ],
        passingCustomIDs: [
          "custom123",
        ],
        failingCustomIDs: [
          "custom456",
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
| `request`                                                                                                                                                                      | [operations.ConsoleV1HoldoutOverridesControllerGenRemoveRequest](../../models/operations/consolev1holdoutoverridescontrollergenremoverequest.md)                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ConsoleV1HoldoutOverridesControllerGenRemoveResponseBody](../../models/operations/consolev1holdoutoverridescontrollergenremoveresponsebody.md)\>**
### Errors

| Error Object                                                            | Status Code                                                             | Content Type                                                            |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| errors.ConsoleV1HoldoutOverridesControllerGenRemoveResponseBody         | 401                                                                     | application/json                                                        |
| errors.ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsResponseBody | 404                                                                     | application/json                                                        |
| errors.SDKError                                                         | 4xx-5xx                                                                 | */*                                                                     |
