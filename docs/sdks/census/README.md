# Census

## Overview

### Available Operations

* [createSession](#createsession) - Create a grant token
* [createVerificationLink](#createverificationlink) - Create a verification request
* [verifyToken](#verifytoken) - Validate a verification token
* [~~storeSignal~~](#storesignal) - Store a Signal Pixel bot score :warning: **Deprecated**
* [~~validateSignal~~](#validatesignal) - Validate a signal token :warning: **Deprecated**
* [getPartnerConfig](#getpartnerconfig) - Get partner configuration
* [revokeVerification](#revokeverification) - Revoke a pending verification
* [logout](#logout) - Revoke a grant token
* [confirmLink](#confirmlink) - Confirm a pending link
* [updateLink](#updatelink) - Update a verified account's sign-in
* [sendByNumber](#sendbynumber) - Send a request to verify by phone number

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

**A check sent to one person** (a request with `partner_user_ref` whose account is linked, pushed to the person's phones): one is open at a time per organization, environment and person. A newer one that is pushed replaces the open one, which ends `cancelled` with reason `superseded` (verification/status) and fires `gate.unavailable` once with `failure_code: "superseded"`. Pushes are capped per person per day (default 5 in 24 hours); over the cap the request is still created and its QR / deep link work, but nothing is pushed (`push_skipped: "daily_cap"`).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="SdkCreateVerificationLink" method="post" path="/sdk/create-verification-link" -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.census.createVerificationLink({
    grantTokenAuth: "<YOUR_API_KEY_HERE>",
  }, {
    act: "dibs:listing_4417",
    actLabel: "Trade with sam_k — 2 GA for $180",
  });

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
    grantTokenAuth: "<YOUR_API_KEY_HERE>",
  }, {
    act: "dibs:listing_4417",
    actLabel: "Trade with sam_k — 2 GA for $180",
  });
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

Validates a BotShield attestation JWT — the primary server-side check. Attestations are ES256-signed; the public key is published at /.well-known/jwks.json (kid in the header), so you may also verify locally with any JWT library. Claims are anonymous by construction: the token attests the event, never the person. Each attestation is for one organization (aud = its organization_id; pass `audience` to enforce it) and one check: a repeat check is refused (`valid: false`, `replayed: true`). Check it once, on your server. Each token names its `kind` (`verification` or `action`) and the `environment` it was issued in. A token of any other kind is refused, and when you call with your secret key (`Authorization: Bearer bs_…`) a token from the other environment is refused (a development token never passes a production check). A refused token is not spent. The check needs your secret key (`Authorization: Bearer bs_…`); without it the answer is `valid: false, code: secret_key_required` and the token is not spent. Send `expected_request_id` (the request your server made) and a token for any other request is refused (`code: request_mismatch`), unspent. A passkey sign-in's token is refused here: redeem a sign-in with signin/confirm.

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

## ~~storeSignal~~

RETIRED (Loop 198, 2026-11-22). BotShield no longer scores visitors. Always answers data.error {code: 'retired', statusCode: 410}. Will be removed.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

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

## ~~validateSignal~~

RETIRED (Loop 198, 2026-11-22). BotShield no longer scores visitors. Always answers data.error {code: 'retired', statusCode: 410}. Will be removed.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

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
  }, {});

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
  }, {});
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

Revoke a grant token

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

## confirmLink

On a key with “Pending until your server confirms” on, a link waits after the person's tap (account.link_pending). Confirm it from your server with your SECRET key, sending the account your own session shows. The same account makes the link live (account.link_live, account.secured) and returns the finished token on this response only. Another account is refused and the waiting link is dropped. A link not confirmed within 24 hours expires. You can also confirm by passing `partner_user_ref` to sdk/verify-token with your secret key.

Send `signin_passkey` to say how this account signs in to your site: `true` when it has a passkey at your sign-in, `false` when it signs in with a password. Either way the customer is BotShield Verified. `false` is the password shape (the app shows a password icon), not a refusal. It is refused (`signin_passkey_required`) only when your company requires a passkey at your sign-in; then leaving the field out is refused the same way. Send `password_reset_at` when you know the account's password was reset: a reset in the last 7 days is refused (`password_reset_recent`) and the error's `retry_after` says when to confirm again.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="SdkConfirmLink" method="post" path="/sdk/confirm-link" -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.census.confirmLink({
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
import { censusConfirmLink } from "botshield-sdk/funcs/census-confirm-link.js";

// Use `BotShieldCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const botShield = new BotShieldCore();

async function run() {
  const res = await censusConfirmLink(botShield, {
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    requestId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("censusConfirmLink failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SDKConfirmLinkRequest](../../models/operations/sdk-confirm-link-request.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.SDKConfirmLinkSecurity](../../models/operations/sdk-confirm-link-security.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SDKConfirmLinkResponse](../../models/operations/sdk-confirm-link-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |

## updateLink

Tell BotShield that a verified account now signs in to your site with a password: the customer removed their last passkey at your sign-in. Call it from your server with your SECRET key, naming the account by your own reference. It sets `signin_passkey` to false and nothing else; `true` is only ever set by sdk/confirm-link.

The customer stays BotShield Verified and the app shows the password icon (`state: verified`). Only when your company requires a passkey at your sign-in is the account paused (`state: unfinished`): its requests are refused (`signin_passkey_required`) until the customer adds a passkey at your sign-in, taps Get BotShield Verified again and your server confirms with `signin_passkey: true`. Agents and history are kept either way.

Idempotent: an account already false answers the same with `changed: false`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="SdkUpdateLink" method="post" path="/sdk/update-link" -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.census.updateLink({
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    signinPasskey: false,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BotShieldCore } from "botshield-sdk/core.js";
import { censusUpdateLink } from "botshield-sdk/funcs/census-update-link.js";

// Use `BotShieldCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const botShield = new BotShieldCore();

async function run() {
  const res = await censusUpdateLink(botShield, {
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    signinPasskey: false,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("censusUpdateLink failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SDKUpdateLinkRequest](../../models/operations/sdk-update-link-request.md)                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.SDKUpdateLinkSecurity](../../models/operations/sdk-update-link-security.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SDKUpdateLinkResponse](../../models/operations/sdk-update-link-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |

## sendByNumber

From your server, with your SECRET key, send a request to verify to the person whose BotShield ID carries this phone number. BotShield keeps none of your customer data: the number is used once and is not stored, logged or returned. The answer is the same whether or not anyone holds the number: status `sent`, the request id, its expiry and a two-digit `match_number` — show it to your customer; they pick it in the BotShield app before their passkey. Outcomes arrive as webhooks (or verification/status with this key): verified, declined, or expired. A person who has not linked your company first sees an introduction from you; your request can be answered only after they allow it. Production sends need a verified business. Limits: a cap per key per hour and on unanswered sends per company.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="SdkSendByNumber" method="post" path="/sdk/send-by-number" -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.census.sendByNumber({
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    phoneNumber: "733-309-2891",
    act: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BotShieldCore } from "botshield-sdk/core.js";
import { censusSendByNumber } from "botshield-sdk/funcs/census-send-by-number.js";

// Use `BotShieldCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const botShield = new BotShieldCore();

async function run() {
  const res = await censusSendByNumber(botShield, {
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    phoneNumber: "733-309-2891",
    act: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("censusSendByNumber failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SDKSendByNumberRequest](../../models/operations/sdk-send-by-number-request.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.SDKSendByNumberSecurity](../../models/operations/sdk-send-by-number-security.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SDKSendByNumberResponse](../../models/operations/sdk-send-by-number-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 500                          | application/json             |
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |