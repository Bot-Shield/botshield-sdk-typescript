# Actions

## Overview

### Available Operations

* [verifyResolution](#verifyresolution) - Check a Proof of Resolution (works once)
* [authorizeTool](#authorizetool) - Authorize one protected tool call (works once)
* [proposeAction](#proposeaction) - Propose an action for human confirmation
* [checkActionStatus](#checkactionstatus) - Check action proposal status
* [cancelAction](#cancelaction) - Cancel a queued action proposal

## verifyResolution

An approved ask mints a proof that the agent reads with agentlink/check-status. Send it here before acting on it. The first check answers valid true with what was approved; every later check answers valid false with replayed true. Checking the signature yourself against the public keys shows the proof is real, not that it is unused. Call with the agent's own key (for a proof minted for that agent) or the company's secret key (for a proof minted for one of its agents).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="SdkVerifyResolution" method="post" path="/sdk/verify-resolution" -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.actions.verifyResolution({
    agentKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    token: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BotShieldCore } from "botshield-sdk/core.js";
import { actionsVerifyResolution } from "botshield-sdk/funcs/actions-verify-resolution.js";

// Use `BotShieldCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const botShield = new BotShieldCore();

async function run() {
  const res = await actionsVerifyResolution(botShield, {
    agentKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    token: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("actionsVerifyResolution failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SDKVerifyResolutionRequest](../../models/operations/sdk-verify-resolution-request.md)                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.SDKVerifyResolutionSecurity](../../models/operations/sdk-verify-resolution-security.md)                                                                            | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SDKVerifyResolutionResponse](../../models/operations/sdk-verify-resolution-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.InvalidInputError     | 400                          | application/json             |
| errors.ErrorResponse         | 500                          | application/json             |
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |

## authorizeTool

Before a protected tool runs, send the Resolution the agent presented, the tool name, the call's arguments and the linked agent's opaque ID. BotShield answers allow true only when the approval is a passkey approve for this tool, these exact arguments, this linked agent, the link is still active, and it is the first use. A refusal gives a reason and does not spend the approval. Call with the agent's own key or the company's secret key.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="SdkAuthorizeTool" method="post" path="/sdk/authorize-tool" -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.actions.authorizeTool({
    agentKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    resolution: "<value>",
    tool: "<value>",
    opaqueId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BotShieldCore } from "botshield-sdk/core.js";
import { actionsAuthorizeTool } from "botshield-sdk/funcs/actions-authorize-tool.js";

// Use `BotShieldCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const botShield = new BotShieldCore();

async function run() {
  const res = await actionsAuthorizeTool(botShield, {
    agentKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    resolution: "<value>",
    tool: "<value>",
    opaqueId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("actionsAuthorizeTool failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SDKAuthorizeToolRequest](../../models/operations/sdk-authorize-tool-request.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.SDKAuthorizeToolSecurity](../../models/operations/sdk-authorize-tool-security.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SDKAuthorizeToolResponse](../../models/operations/sdk-authorize-tool-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |

## proposeAction

Queue a human-presence-gated action for a BotShield user. The user receives the card in the BotShield app (Agents Ask), confirms or denies with their passkey, and BotShield delivers a signed Proof of Resolution JWT to your registered callback URL (or poll check-status). Identify the user by opaque_id — the pairwise id from the bind ceremony. Authentication: agent key (bs_agent_<name>__<secret>) in the Authorization header. Or address the person by `phone_number` (no link needed beforehand; see the field).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ActionsPropose" method="post" path="/agentlink/inquire" -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield({
  security: {
    agentKeyAuth: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await botShield.actions.proposeAction({
    requestId: "362873d8-19a4-46e6-b883-916c05dd0283",
    phoneNumber: "+1 415 555 0142",
    action: {
      summaryTitle: "<value>",
      summaryDetail: {
        label: "TOTAL",
        value: "$100.90",
      },
      category: "travel.book",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BotShieldCore } from "botshield-sdk/core.js";
import { actionsProposeAction } from "botshield-sdk/funcs/actions-propose-action.js";

// Use `BotShieldCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const botShield = new BotShieldCore({
  security: {
    agentKeyAuth: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await actionsProposeAction(botShield, {
    requestId: "362873d8-19a4-46e6-b883-916c05dd0283",
    phoneNumber: "+1 415 555 0142",
    action: {
      summaryTitle: "<value>",
      summaryDetail: {
        label: "TOTAL",
        value: "$100.90",
      },
      category: "travel.book",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("actionsProposeAction failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ActionsProposeRequest](../../models/operations/actions-propose-request.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ActionsProposeResponse](../../models/operations/actions-propose-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.InvalidInputError     | 400                          | application/json             |
| errors.ErrorResponse         | 500                          | application/json             |
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |

## checkActionStatus

Poll the state of a proposed action. Terminal states (approved/denied) carry the signed Proof of Resolution JWT (ES256; verify against /.well-known/jwks.json — the request_id is the JWT jti). Pass wait_seconds to long-poll: the call holds up to 25s and returns as soon as the card leaves queued.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ActionsCheckStatus" method="get" path="/agentlink/check-status" -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield({
  security: {
    agentKeyAuth: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await botShield.actions.checkActionStatus({
    requestId: "c70e5773-b2a4-4308-9fd3-dc42bdecfa67",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BotShieldCore } from "botshield-sdk/core.js";
import { actionsCheckActionStatus } from "botshield-sdk/funcs/actions-check-action-status.js";

// Use `BotShieldCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const botShield = new BotShieldCore({
  security: {
    agentKeyAuth: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await actionsCheckActionStatus(botShield, {
    requestId: "c70e5773-b2a4-4308-9fd3-dc42bdecfa67",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("actionsCheckActionStatus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ActionsCheckStatusRequest](../../models/operations/actions-check-status-request.md)                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ActionsCheckStatusResponse](../../models/operations/actions-check-status-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.InvalidInputError     | 400                          | application/json             |
| errors.ErrorResponse         | 500                          | application/json             |
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |

## cancelAction

Stand down a queued action before the user responds. Idempotent: if the card is already terminal, returns its current status with already_resolved=true (TTL expiry produces no Resolution).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ActionsCancel" method="post" path="/agentlink/cancel" -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield({
  security: {
    agentKeyAuth: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await botShield.actions.cancelAction({
    requestId: "12d74077-1e08-42a1-952e-3b34360158b0",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BotShieldCore } from "botshield-sdk/core.js";
import { actionsCancelAction } from "botshield-sdk/funcs/actions-cancel-action.js";

// Use `BotShieldCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const botShield = new BotShieldCore({
  security: {
    agentKeyAuth: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await actionsCancelAction(botShield, {
    requestId: "12d74077-1e08-42a1-952e-3b34360158b0",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("actionsCancelAction failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ActionsCancelRequest](../../models/operations/actions-cancel-request.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ActionsCancelResponse](../../models/operations/actions-cancel-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.InvalidInputError     | 400                          | application/json             |
| errors.ErrorResponse         | 500                          | application/json             |
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |