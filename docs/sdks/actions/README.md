# Actions

## Overview

### Available Operations

* [proposeAction](#proposeaction) - Propose a BotShield Action
* [checkActionStatus](#checkactionstatus) - Check action proposal status
* [cancelAction](#cancelaction) - Cancel a queued action proposal

## proposeAction

Queue a human-presence-gated action for a BotShield user. The user receives a card on their iOS app, attests via biometric ceremony, and BotShield delivers a signed Resolution JWT to your registered callback URL. Authentication: agent key (bs_agent_<name>__<secret>) in Authorization header.

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
    userEmail: "Corine63@hotmail.com",
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
    userEmail: "Corine63@hotmail.com",
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
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |

## checkActionStatus

Poll the current state of a previously-proposed action. For terminal states (approved/denied), the response carries the signed Resolution JWT.

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
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |

## cancelAction

Stand down a queued action before the user responds. No-op if the proposal is already in a terminal state (TTL is cancel — silent expiry produces no Resolution).

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
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |