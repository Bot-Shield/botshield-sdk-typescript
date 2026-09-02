# Actions

## Overview

### Available Operations

* [proposeAction](#proposeaction) - Propose an action for human confirmation
* [checkActionStatus](#checkactionstatus) - Check action proposal status
* [cancelAction](#cancelaction) - Cancel a queued action proposal

## proposeAction

Queue a human-presence-gated action for a BotShield user. The user receives the card in the BotShield app (Agents Ask), confirms or denies with a biometric ceremony, and BotShield delivers a signed Proof of Resolution JWT to your registered callback URL (or poll check-status). Identify the user by opaque_id — the pairwise id from the bind ceremony. Authentication: agent key (bs_agent_<name>__<secret>) in the Authorization header.

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