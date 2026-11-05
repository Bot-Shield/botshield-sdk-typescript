# Gates

## Overview

### Available Operations

* [create](#create) - Place a gate
* [activate](#activate) - Activate a gate
* [close](#close) - Close a gate
* [extend](#extend) - Extend a gate's window
* [cancel](#cancel) - Cancel a gate
* [get](#get) - Get a gate
* [list](#list) - List gates

## create

Place a gate from your server. It is placed as a `draft`; send `activate: true` to make it live in the same call. In Production the Console's checks apply to activation — business verified, a verified domain, the plan's gate allowance — and if they block it the gate is still placed: the call succeeds with `activated: false` and `activation_error`. The policy document is the `preset`'s pre-fill overlaid by `policy`, validated whole (`version` defaults to 3 when neither sends one). A key is never auto-suffixed: a key already placed in this environment is refused with `gate_key_taken`. Nothing is half-placed — if the policy cannot be saved, the gate is removed.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GatesApiCreate" method="post" path="/gates-api/create" -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.gates.create({
    gatesKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    key: "presale-nyc-1120",
    name: "NYC presale",
    message: "Two tickets per fan.",
    preset: "presale",
    policy: {
      version: 3,
      link: "required",
      schedule: {
        opensAt: new Date("2026-11-20T17:00:00Z"),
      },
    },
    destinationUrl: "https://example.com/presale/nyc",
    activate: true,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BotShieldCore } from "botshield-sdk/core.js";
import { gatesCreate } from "botshield-sdk/funcs/gates-create.js";

// Use `BotShieldCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const botShield = new BotShieldCore();

async function run() {
  const res = await gatesCreate(botShield, {
    gatesKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    key: "presale-nyc-1120",
    name: "NYC presale",
    message: "Two tickets per fan.",
    preset: "presale",
    policy: {
      version: 3,
      link: "required",
      schedule: {
        opensAt: new Date("2026-11-20T17:00:00Z"),
      },
    },
    destinationUrl: "https://example.com/presale/nyc",
    activate: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("gatesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GatesApiCreateRequest](../../models/operations/gates-api-create-request.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GatesApiCreateSecurity](../../models/operations/gates-api-create-security.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GatesApiCreateResponse](../../models/operations/gates-api-create-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.InvalidInputError     | 400                          | application/json             |
| errors.ErrorResponse         | 500                          | application/json             |
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |

## activate

Make a draft gate live. Idempotent — an active gate is returned as-is. In Production the gate goes live only when the business is verified, a domain is verified and the plan's gate allowance has room.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GatesApiActivate" method="post" path="/gates-api/activate" -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.gates.activate({
    gatesKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    key: "presale-nyc-1120",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BotShieldCore } from "botshield-sdk/core.js";
import { gatesActivate } from "botshield-sdk/funcs/gates-activate.js";

// Use `BotShieldCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const botShield = new BotShieldCore();

async function run() {
  const res = await gatesActivate(botShield, {
    gatesKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    key: "presale-nyc-1120",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("gatesActivate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GatesApiActivateRequest](../../models/operations/gates-api-activate-request.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GatesApiActivateSecurity](../../models/operations/gates-api-activate-security.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GatesApiActivateResponse](../../models/operations/gates-api-activate-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.InvalidInputError     | 400                          | application/json             |
| errors.ErrorResponse         | 500                          | application/json             |
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |

## close

Close a gate now: it stops issuing passes; passes already out still work until they run out; its log is kept. A closed gate cannot be reopened and its key is free to be placed again. Idempotent — closing a key with no open gate answers `{ closed: true, already_closed: true }`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GatesApiClose" method="post" path="/gates-api/close" -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.gates.close({
    gatesKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    key: "presale-nyc-1120",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BotShieldCore } from "botshield-sdk/core.js";
import { gatesClose } from "botshield-sdk/funcs/gates-close.js";

// Use `BotShieldCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const botShield = new BotShieldCore();

async function run() {
  const res = await gatesClose(botShield, {
    gatesKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    key: "presale-nyc-1120",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("gatesClose failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GatesApiCloseRequest](../../models/operations/gates-api-close-request.md)                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GatesApiCloseSecurity](../../models/operations/gates-api-close-security.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GatesApiCloseResponse](../../models/operations/gates-api-close-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.InvalidInputError     | 400                          | application/json             |
| errors.ErrorResponse         | 500                          | application/json             |
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |

## extend

Move a placed gate's closing time later. Extend-only: never earlier, never on a gate that has already closed (a closed gate is never reopened), never on a gate with no end time. Saved as the next version of the gate's policy document; every other setting is unchanged.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GatesApiExtend" method="post" path="/gates-api/extend" -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.gates.extend({
    gatesKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    key: "presale-nyc-1120",
    closesAt: new Date("2026-11-21T04:00:00Z"),
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BotShieldCore } from "botshield-sdk/core.js";
import { gatesExtend } from "botshield-sdk/funcs/gates-extend.js";

// Use `BotShieldCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const botShield = new BotShieldCore();

async function run() {
  const res = await gatesExtend(botShield, {
    gatesKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    key: "presale-nyc-1120",
    closesAt: new Date("2026-11-21T04:00:00Z"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("gatesExtend failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GatesApiExtendRequest](../../models/operations/gates-api-extend-request.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GatesApiExtendSecurity](../../models/operations/gates-api-extend-security.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GatesApiExtendResponse](../../models/operations/gates-api-extend-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.InvalidInputError     | 400                          | application/json             |
| errors.ErrorResponse         | 500                          | application/json             |
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |

## cancel

Remove a gate nobody has passed through. A gate with any verification on it is refused with `gate_in_use` — close it instead, so its log is kept.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GatesApiCancel" method="post" path="/gates-api/cancel" -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.gates.cancel({
    gatesKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    key: "presale-nyc-1120",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BotShieldCore } from "botshield-sdk/core.js";
import { gatesCancel } from "botshield-sdk/funcs/gates-cancel.js";

// Use `BotShieldCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const botShield = new BotShieldCore();

async function run() {
  const res = await gatesCancel(botShield, {
    gatesKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    key: "presale-nyc-1120",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("gatesCancel failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GatesApiCancelRequest](../../models/operations/gates-api-cancel-request.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GatesApiCancelSecurity](../../models/operations/gates-api-cancel-security.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GatesApiCancelResponse](../../models/operations/gates-api-cancel-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.InvalidInputError     | 400                          | application/json             |
| errors.ErrorResponse         | 500                          | application/json             |
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |

## get

One draft or active gate by key in the key's environment: status, schedule state and its effective policy.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GatesApiGet" method="get" path="/gates-api/get" -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.gates.get({
    gatesKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    key: "presale-nyc-1120",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BotShieldCore } from "botshield-sdk/core.js";
import { gatesGet } from "botshield-sdk/funcs/gates-get.js";

// Use `BotShieldCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const botShield = new BotShieldCore();

async function run() {
  const res = await gatesGet(botShield, {
    gatesKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    key: "presale-nyc-1120",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("gatesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GatesApiGetRequest](../../models/operations/gates-api-get-request.md)                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GatesApiGetSecurity](../../models/operations/gates-api-get-security.md)                                                                                            | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GatesApiGetResponse](../../models/operations/gates-api-get-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.InvalidInputError     | 400                          | application/json             |
| errors.ErrorResponse         | 500                          | application/json             |
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |

## list

Your draft and active gates in the key's environment, newest first. Closed gates are not listed.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GatesApiList" method="get" path="/gates-api/list" -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.gates.list({
    gatesKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BotShieldCore } from "botshield-sdk/core.js";
import { gatesList } from "botshield-sdk/funcs/gates-list.js";

// Use `BotShieldCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const botShield = new BotShieldCore();

async function run() {
  const res = await gatesList(botShield, {
    gatesKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("gatesList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GatesApiListRequest](../../models/operations/gates-api-list-request.md)                                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GatesApiListSecurity](../../models/operations/gates-api-list-security.md)                                                                                          | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GatesApiListResponse](../../models/operations/gates-api-list-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.InvalidInputError     | 400                          | application/json             |
| errors.ErrorResponse         | 500                          | application/json             |
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |