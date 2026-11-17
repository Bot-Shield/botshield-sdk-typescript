# Verification

## Overview

### Available Operations

* [getStatus](#getstatus) - Check verification status

## getStatus

Poll a verification request. Carries the signed attestation on completion and NO identity — no user_email, partner_user_id, auth_mode, or botshield_user_id ever cross this boundary. Called without a key, it is rate-limited per client address (a page polling every 2 seconds stays well inside it); over the limit the call is refused with HTTP 403 and `errors[0].code = "RATE_LIMITED"`. 4.0: knowing the request id is not enough to read the finished tokens. A request started with a site key returns them only with its `read_secret` (`X-BotShield-Request-Secret`); a request your server started, only to your secret key. A passkey sign-in's tokens are never returned here.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="VerificationGetStatus" method="get" path="/verification/status" -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.verification.getStatus({
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    requestId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BotShieldCore } from "botshield-sdk/core.js";
import { verificationGetStatus } from "botshield-sdk/funcs/verification-get-status.js";

// Use `BotShieldCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const botShield = new BotShieldCore();

async function run() {
  const res = await verificationGetStatus(botShield, {
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    requestId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("verificationGetStatus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.VerificationGetStatusRequest](../../models/operations/verification-get-status-request.md)                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.VerificationGetStatusSecurity](../../models/operations/verification-get-status-security.md)                                                                        | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.VerificationGetStatusResponse](../../models/operations/verification-get-status-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.InvalidInputError     | 400                          | application/json             |
| errors.ErrorResponse         | 500                          | application/json             |
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |