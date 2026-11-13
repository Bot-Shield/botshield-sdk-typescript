# InlinePasskey

## Overview

### Available Operations

* [getOptions](#getoptions) - Start the inline passkey for one request
* [complete](#complete) - Finish the inline passkey for one request

## getOptions

Partner inline lane, step 1. Returns WebAuthn request options whose `allowCredentials` are the passkeys of the ONE BotShield ID this request is for (the id it was issued for, else the active link for its `partner_user_ref`), or the app fallback. Public — no API key; the request_id is the credential. Works for gate requests and BotShield Action requests (`act`); refuses an Age Gate.

Wire: HTTP 200 with the result at `data.data`; a refusal at `data.error`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="RequestPasskeyOptions" method="post" path="/request/passkey-options" -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.inlinePasskey.getOptions({
    requestId: "req_8c1e…",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BotShieldCore } from "botshield-sdk/core.js";
import { inlinePasskeyGetOptions } from "botshield-sdk/funcs/inline-passkey-get-options.js";

// Use `BotShieldCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const botShield = new BotShieldCore();

async function run() {
  const res = await inlinePasskeyGetOptions(botShield, {
    requestId: "req_8c1e…",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("inlinePasskeyGetOptions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RequestPasskeyOptionsRequest](../../models/operations/request-passkey-options-request.md)                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RequestPasskeyOptionsResponse](../../models/operations/request-passkey-options-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.InvalidInputError     | 400                          | application/json             |
| errors.ErrorResponse         | 500                          | application/json             |
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |

## complete

Partner inline lane, step 2. Verifies the assertion against the challenge bound to THIS request and its one BotShield ID (user verification required), then runs the same completion as the BotShield app (token minted, partner webhook, gate / act events). Returns `{ outcome, code? }` only. The challenge is single use and is burned on every path.

Wire: HTTP 200 with the result at `data.data`; a refusal at `data.error`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="RequestPasskeyComplete" method="post" path="/request/passkey-complete" -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.inlinePasskey.complete({
    requestId: "<id>",
    challengeId: "397a5320-6267-41ce-932c-af68ff966ad9",
    response: {
      id: "<id>",
      rawId: "<id>",
      type: "public-key",
      response: {
        clientDataJSON: "<value>",
        authenticatorData: "<value>",
        signature: "<value>",
      },
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
import { inlinePasskeyComplete } from "botshield-sdk/funcs/inline-passkey-complete.js";

// Use `BotShieldCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const botShield = new BotShieldCore();

async function run() {
  const res = await inlinePasskeyComplete(botShield, {
    requestId: "<id>",
    challengeId: "397a5320-6267-41ce-932c-af68ff966ad9",
    response: {
      id: "<id>",
      rawId: "<id>",
      type: "public-key",
      response: {
        clientDataJSON: "<value>",
        authenticatorData: "<value>",
        signature: "<value>",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("inlinePasskeyComplete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RequestPasskeyCompleteRequest](../../models/operations/request-passkey-complete-request.md)                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RequestPasskeyCompleteResponse](../../models/operations/request-passkey-complete-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.InvalidInputError     | 400                          | application/json             |
| errors.ErrorResponse         | 500                          | application/json             |
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |