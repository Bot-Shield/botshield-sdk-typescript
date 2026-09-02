# Census

## Overview

### Available Operations

* [createSession](#createsession) - Create an Anchor Grant Window
* [createVerificationLink](#createverificationlink) - Create a verification request
* [verifyToken](#verifytoken) - Validate a verification token
* [storeSignal](#storesignal) - Store a Signal Pixel bot score
* [validateSignal](#validatesignal) - Validate a signal token
* [getPartnerConfig](#getpartnerconfig) - Get partner configuration
* [revokeVerification](#revokeverification) - Revoke a pending verification
* [logout](#logout) - Revoke an Anchor Grant Window token

## createSession

Creates a short-lived anchor grant token (5 minutes) from an API token or site key. Use this to get a token before creating verification links.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="SdkCreateSession" method="post" path="/sdk/create-session" -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.census.createSession({
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BotShieldCore } from "botshield-sdk/core.js";
import { censusCreateSession } from "botshield-sdk/funcs/census-create-session.js";

// Use `BotShieldCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const botShield = new BotShieldCore();

async function run() {
  const res = await censusCreateSession(botShield, {
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("censusCreateSession failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SDKCreateSessionRequest](../../models/operations/sdk-create-session-request.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.SDKCreateSessionSecurity](../../models/operations/sdk-create-session-security.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SDKCreateSessionResponse](../../models/operations/sdk-create-session-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.InvalidInputError     | 400                          | application/json             |
| errors.ErrorResponse         | 500                          | application/json             |
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |

## createVerificationLink

Creates a verification request (deep link, web URL, QR code) for a gate. Requires an anchor grant token from create-session. Returns 409 when a pending request already exists for the same gate and user.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="SdkCreateVerificationLink" method="post" path="/sdk/create-verification-link" -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.census.createVerificationLink({
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BotShieldCore } from "botshield-sdk/core.js";
import { censusCreateVerificationLink } from "botshield-sdk/funcs/census-create-verification-link.js";

// Use `BotShieldCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const botShield = new BotShieldCore();

async function run() {
  const res = await censusCreateVerificationLink(botShield, {
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("censusCreateVerificationLink failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SDKCreateVerificationLinkRequest](../../models/operations/sdk-create-verification-link-request.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.SDKCreateVerificationLinkSecurity](../../models/operations/sdk-create-verification-link-security.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SDKCreateVerificationLinkResponse](../../models/operations/sdk-create-verification-link-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.InvalidInputError     | 400                          | application/json             |
| errors.ErrorResponse         | 500                          | application/json             |
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |

## verifyToken

Validates a BotShield attestation JWT — the primary server-side check. Attestations are ES256-signed; the public key is published at /.well-known/jwks.json (kid in the header), so you may also verify locally with any JWT library. Claims are anonymous by construction: the token attests the event, never the person.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="SdkVerifyToken" method="post" path="/sdk/verify-token" -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.census.verifyToken({
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
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
import { censusVerifyToken } from "botshield-sdk/funcs/census-verify-token.js";

// Use `BotShieldCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const botShield = new BotShieldCore();

async function run() {
  const res = await censusVerifyToken(botShield, {
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    token: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("censusVerifyToken failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SDKVerifyTokenRequest](../../models/operations/sdk-verify-token-request.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.SDKVerifyTokenSecurity](../../models/operations/sdk-verify-token-security.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SDKVerifyTokenResponse](../../models/operations/sdk-verify-token-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.InvalidInputError     | 400                          | application/json             |
| errors.ErrorResponse         | 500                          | application/json             |
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |

## storeSignal

Stores a behavioral fingerprint score server-side and returns an opaque signal_token (bs_sig_...). The client-side score can be spoofed — the signal_token maps to the real score in BotShield's database. Called by the CDN worker; no partner credential is required.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="SdkStoreSignal" method="post" path="/sdk/store-signal" -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.census.storeSignal({
    siteKey: "<value>",
    score: 229498,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BotShieldCore } from "botshield-sdk/core.js";
import { censusStoreSignal } from "botshield-sdk/funcs/census-store-signal.js";

// Use `BotShieldCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const botShield = new BotShieldCore();

async function run() {
  const res = await censusStoreSignal(botShield, {
    siteKey: "<value>",
    score: 229498,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("censusStoreSignal failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SDKStoreSignalRequest](../../models/operations/sdk-store-signal-request.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SDKStoreSignalResponse](../../models/operations/sdk-store-signal-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.InvalidInputError     | 400                          | application/json             |
| errors.ErrorResponse         | 500                          | application/json             |
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |

## validateSignal

Validates a signal_token and returns the real server-side bot score. One-time use, 10-minute expiry. This is the tamper-proof check.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="SdkValidateSignal" method="post" path="/sdk/validate-signal" -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.census.validateSignal({
    signalToken: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BotShieldCore } from "botshield-sdk/core.js";
import { censusValidateSignal } from "botshield-sdk/funcs/census-validate-signal.js";

// Use `BotShieldCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const botShield = new BotShieldCore();

async function run() {
  const res = await censusValidateSignal(botShield, {
    signalToken: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("censusValidateSignal failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SDKValidateSignalRequest](../../models/operations/sdk-validate-signal-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SDKValidateSignalResponse](../../models/operations/sdk-validate-signal-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.InvalidInputError     | 400                          | application/json             |
| errors.ErrorResponse         | 500                          | application/json             |
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |

## getPartnerConfig

Returns enabled integrations (Turnstile, etc.) for a site key. Public config only — secret keys never exposed.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="SdkGetPartnerConfig" method="get" path="/sdk/partner-config" -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.census.getPartnerConfig({
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    siteKey: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BotShieldCore } from "botshield-sdk/core.js";
import { censusGetPartnerConfig } from "botshield-sdk/funcs/census-get-partner-config.js";

// Use `BotShieldCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const botShield = new BotShieldCore();

async function run() {
  const res = await censusGetPartnerConfig(botShield, {
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    siteKey: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("censusGetPartnerConfig failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SDKGetPartnerConfigRequest](../../models/operations/sdk-get-partner-config-request.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.SDKGetPartnerConfigSecurity](../../models/operations/sdk-get-partner-config-security.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SDKGetPartnerConfigResponse](../../models/operations/sdk-get-partner-config-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.InvalidInputError     | 400                          | application/json             |
| errors.ErrorResponse         | 500                          | application/json             |
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |

## revokeVerification

Soft-expires a pending verification for a gate and user. Use when create-verification-link returns 409.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="SdkRevokeVerification" method="post" path="/sdk/revoke-verification" -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.census.revokeVerification({
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    scope: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BotShieldCore } from "botshield-sdk/core.js";
import { censusRevokeVerification } from "botshield-sdk/funcs/census-revoke-verification.js";

// Use `BotShieldCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const botShield = new BotShieldCore();

async function run() {
  const res = await censusRevokeVerification(botShield, {
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    scope: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("censusRevokeVerification failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SDKRevokeVerificationRequest](../../models/operations/sdk-revoke-verification-request.md)                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.SDKRevokeVerificationSecurity](../../models/operations/sdk-revoke-verification-security.md)                                                                        | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SDKRevokeVerificationResponse](../../models/operations/sdk-revoke-verification-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.InvalidInputError     | 400                          | application/json             |
| errors.ErrorResponse         | 500                          | application/json             |
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |

## logout

Revoke an Anchor Grant Window token

### Example Usage

<!-- UsageSnippet language="typescript" operationID="SdkLogout" method="post" path="/sdk/logout" -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.census.logout({
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    sessionToken: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BotShieldCore } from "botshield-sdk/core.js";
import { censusLogout } from "botshield-sdk/funcs/census-logout.js";

// Use `BotShieldCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const botShield = new BotShieldCore();

async function run() {
  const res = await censusLogout(botShield, {
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    sessionToken: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("censusLogout failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SDKLogoutRequest](../../models/operations/sdk-logout-request.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.SDKLogoutSecurity](../../models/operations/sdk-logout-security.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SDKLogoutResponse](../../models/operations/sdk-logout-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.InvalidInputError     | 400                          | application/json             |
| errors.ErrorResponse         | 500                          | application/json             |
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |