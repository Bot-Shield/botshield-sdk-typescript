# Gates.Actions

## Overview

### Available Operations

* [create](#create) - Place a BotShield Action
* [list](#list) - List BotShield Actions
* [setState](#setstate) - Turn a BotShield Action on or off
* [request](#request) - Ask a linked person to confirm an action
* [requestStatus](#requeststatus) - Where an action request stands

## create

Place a BotShield Action from your server — the same rules as the Console: live once placed, `actKey` unique per environment. Then send `act` (e.g. `watch` or `dibs:listing_4417`) on `create-verification-link`; the part before ':' must match `actKey`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GatesApiActionsCreate" method="post" path="/gates-api/actions/create" -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.gates.actions.create({
    gatesKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    name: "Watch with passkey",
    actKey: "watch",
    whereUrl: "https://example.com/listings",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BotShieldCore } from "botshield-sdk/core.js";
import { gatesActionsCreate } from "botshield-sdk/funcs/gates-actions-create.js";

// Use `BotShieldCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const botShield = new BotShieldCore();

async function run() {
  const res = await gatesActionsCreate(botShield, {
    gatesKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    name: "Watch with passkey",
    actKey: "watch",
    whereUrl: "https://example.com/listings",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("gatesActionsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GatesApiActionsCreateRequest](../../models/operations/gates-api-actions-create-request.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GatesApiActionsCreateSecurity](../../models/operations/gates-api-actions-create-security.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GatesApiActionsCreateResponse](../../models/operations/gates-api-actions-create-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.InvalidInputError     | 400                          | application/json             |
| errors.ErrorResponse         | 500                          | application/json             |
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |

## list

Your BotShield Actions in the key's environment (live and off), newest first.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GatesApiActionsList" method="get" path="/gates-api/actions/list" -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.gates.actions.list({
    gatesKeyAuth: "<YOUR_API_KEY_HERE>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BotShieldCore } from "botshield-sdk/core.js";
import { gatesActionsList } from "botshield-sdk/funcs/gates-actions-list.js";

// Use `BotShieldCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const botShield = new BotShieldCore();

async function run() {
  const res = await gatesActionsList(botShield, {
    gatesKeyAuth: "<YOUR_API_KEY_HERE>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("gatesActionsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                                                                     | [operations.GatesApiActionsListSecurity](../../models/operations/gates-api-actions-list-security.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GatesApiActionsListResponse](../../models/operations/gates-api-actions-list-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.InvalidInputError     | 400                          | application/json             |
| errors.ErrorResponse         | 500                          | application/json             |
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |

## setState

Turn an action on (`live`) or `off` by its key. Off takes effect at once — new requests are refused with `action_off`, and a tap in flight fails at completion. Idempotent.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GatesApiActionsSetState" method="post" path="/gates-api/actions/set-state" -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.gates.actions.setState({
    gatesKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    actKey: "watch",
    state: "off",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BotShieldCore } from "botshield-sdk/core.js";
import { gatesActionsSetState } from "botshield-sdk/funcs/gates-actions-set-state.js";

// Use `BotShieldCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const botShield = new BotShieldCore();

async function run() {
  const res = await gatesActionsSetState(botShield, {
    gatesKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    actKey: "watch",
    state: "off",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("gatesActionsSetState failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GatesApiActionsSetStateRequest](../../models/operations/gates-api-actions-set-state-request.md)                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GatesApiActionsSetStateSecurity](../../models/operations/gates-api-actions-set-state-security.md)                                                                  | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GatesApiActionsSetStateResponse](../../models/operations/gates-api-actions-set-state-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.InvalidInputError     | 400                          | application/json             |
| errors.ErrorResponse         | 500                          | application/json             |
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |

## request

An agent asks, a person confirms. Puts ONE BotShield Action in front of a person already linked to your company, as a card in their BotShield app naming the agent that asked. The person approves with their passkey, which signs the act itself. Collect the action token with gates-api/actions/request-status and check it with sdk/verify-token (claims.act), exactly as for a tapped action. Idempotent on (agent, request_id).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GatesApiActionsRequest" method="post" path="/gates-api/actions/request" -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.gates.actions.request({
    gatesKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    requestId: "2f889dad-53b3-45e5-ad5d-3dbcdb76f719",
    agent: "couchtour",
    act: "hold:3f1c…:9a0b1c2d3e4f5a6b",
    actLabel: "Hold Summer ’26 tee · $40",
    partnerUserRef: "<value>",
    requestedBy: "Muse",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BotShieldCore } from "botshield-sdk/core.js";
import { gatesActionsRequest } from "botshield-sdk/funcs/gates-actions-request.js";

// Use `BotShieldCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const botShield = new BotShieldCore();

async function run() {
  const res = await gatesActionsRequest(botShield, {
    gatesKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    requestId: "2f889dad-53b3-45e5-ad5d-3dbcdb76f719",
    agent: "couchtour",
    act: "hold:3f1c…:9a0b1c2d3e4f5a6b",
    actLabel: "Hold Summer ’26 tee · $40",
    partnerUserRef: "<value>",
    requestedBy: "Muse",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("gatesActionsRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GatesApiActionsRequestRequest](../../models/operations/gates-api-actions-request-request.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GatesApiActionsRequestSecurity](../../models/operations/gates-api-actions-request-security.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GatesApiActionsRequestResponse](../../models/operations/gates-api-actions-request-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.InvalidInputError     | 400                          | application/json             |
| errors.ErrorResponse         | 500                          | application/json             |
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |

## requestStatus

Status of a request from gates-api/actions/request. `wait_seconds` (≤ 25) holds the call until the status changes. Once `approved`, `token` is the action token (claims.act) for `token_expires_in` seconds — check it with sdk/verify-token; it works once. After the collection window (10 minutes from the approval) the status stays `approved` with `token: null`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GatesApiActionsRequestStatus" method="get" path="/gates-api/actions/request-status" -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.gates.actions.requestStatus({
    gatesKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    requestId: "753c942e-4eb0-46f9-920b-5bedc30126bb",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BotShieldCore } from "botshield-sdk/core.js";
import { gatesActionsRequestStatus } from "botshield-sdk/funcs/gates-actions-request-status.js";

// Use `BotShieldCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const botShield = new BotShieldCore();

async function run() {
  const res = await gatesActionsRequestStatus(botShield, {
    gatesKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    requestId: "753c942e-4eb0-46f9-920b-5bedc30126bb",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("gatesActionsRequestStatus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GatesApiActionsRequestStatusRequest](../../models/operations/gates-api-actions-request-status-request.md)                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GatesApiActionsRequestStatusSecurity](../../models/operations/gates-api-actions-request-status-security.md)                                                        | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GatesApiActionsRequestStatusResponse](../../models/operations/gates-api-actions-request-status-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.InvalidInputError     | 400                          | application/json             |
| errors.ErrorResponse         | 500                          | application/json             |
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |