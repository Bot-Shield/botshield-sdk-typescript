# Recovery

## Overview

### Available Operations

* [exchange](#exchange) - Redeem a recovery code
* [otherRoute](#otherroute) - Report another sign-in reset

## exchange

Your landing page received `?botshield_recovery_code=…` from the BotShield app. Your SERVER sends the code, your secret key, and the secret it set in that browser's cookie before the tap (the button carried its challenge: SHA-256 of the secret, base64url). BotShield answers only when the secret matches. The first call destroys the code whether or not it matched, so a landing page with no secret must still call this. A second call, a call after 2 minutes, a call with another company's key or the wrong secret all read the same: `recovery_code_invalid`. On success, sign the customer in to the account named by `handle` (the per-company handle given when the account was verified, as on `account.secured`); BotShield tells the person and sends `account.recovered` to your webhook endpoints.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="RecoveryExchange" method="post" path="/recovery/exchange" -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.recovery.exchange({
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    code: "<value>",
    secret: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BotShieldCore } from "botshield-sdk/core.js";
import { recoveryExchange } from "botshield-sdk/funcs/recovery-exchange.js";

// Use `BotShieldCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const botShield = new BotShieldCore();

async function run() {
  const res = await recoveryExchange(botShield, {
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    code: "<value>",
    secret: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("recoveryExchange failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RecoveryExchangeRequest](../../models/operations/recovery-exchange-request.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.RecoveryExchangeSecurity](../../models/operations/recovery-exchange-security.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RecoveryExchangeResponse](../../models/operations/recovery-exchange-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.InvalidInputError     | 400                          | application/json             |
| errors.ErrorResponse         | 500                          | application/json             |
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |

## otherRoute

Tell BotShield that your other way to reset sign-in (a link by email, a code by text) was started for a verified account, by its handle. BotShield tells the person ("<Company> sign-in reset by email · It works from <day>. Not you? Open BotShield."), at most once per account in 6 hours. The answer is the same whether or not the handle is a live verified account.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="RecoveryOtherRoute" method="post" path="/recovery/other-route" -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.recovery.otherRoute({
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    handle: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BotShieldCore } from "botshield-sdk/core.js";
import { recoveryOtherRoute } from "botshield-sdk/funcs/recovery-other-route.js";

// Use `BotShieldCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const botShield = new BotShieldCore();

async function run() {
  const res = await recoveryOtherRoute(botShield, {
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    handle: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("recoveryOtherRoute failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RecoveryOtherRouteRequest](../../models/operations/recovery-other-route-request.md)                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.RecoveryOtherRouteSecurity](../../models/operations/recovery-other-route-security.md)                                                                              | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RecoveryOtherRouteResponse](../../models/operations/recovery-other-route-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.InvalidInputError     | 400                          | application/json             |
| errors.ErrorResponse         | 500                          | application/json             |
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |