# SecuredAccounts

## Overview

### Available Operations

* [list](#list) - List Secured Accounts
* [revoke](#revoke) - Revoke a Secured Account
* [getStatus](#getstatus) - Get Secured Account status

## list

Your Secured Accounts, newest first. Filter to one account with `platform_user_ref` (exact match) or by `status`. Rows carry the handle and binding facts — never your ref or anything that identifies the person. The environment is your API key's: a `bs_dev_…` key sees and changes development Secured Accounts only, a `bs_prod_…` key production only. Server API keys only — site keys (`pk_…`) are refused.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="SecuredAccountsList" method="get" path="/secured-accounts/list" -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.securedAccounts.list({
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BotShieldCore } from "botshield-sdk/core.js";
import { securedAccountsList } from "botshield-sdk/funcs/secured-accounts-list.js";

// Use `BotShieldCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const botShield = new BotShieldCore();

async function run() {
  const res = await securedAccountsList(botShield, {
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("securedAccountsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SecuredAccountsListRequest](../../models/operations/secured-accounts-list-request.md)                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.SecuredAccountsListSecurity](../../models/operations/secured-accounts-list-security.md)                                                                            | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SecuredAccountsListResponse](../../models/operations/secured-accounts-list-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.InvalidInputError     | 400                          | application/json             |
| errors.ErrorResponse         | 500                          | application/json             |
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |

## revoke

End a Secured Account from your server. Send `reason: 'credential_changed'` when a primary sign-in detail changed on your side (password reset, email change, …) — the Secured Accounts spec requires it; the person's app then shows the account as Unlinked with a Re-link action. Your company's agents for that person are revoked with it, `account.unlinked { handle, by: 'platform', unlinked_at, reason, surface_id }` is sent to your webhook endpoints, live widgets for the account update at once, and the person is told. The next passkey ceremony on that account secures it again from scratch. Idempotent: an account that is not secured (or already unlinked) returns `revoked: false`. Select it by `platform_user_ref` or by `handle` — exactly one. The environment is your API key's: a `bs_dev_…` key sees and changes development Secured Accounts only, a `bs_prod_…` key production only. Server API keys only — site keys (`pk_…`) are refused.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="SecuredAccountsRevoke" method="post" path="/secured-accounts/revoke" -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.securedAccounts.revoke({
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
import { securedAccountsRevoke } from "botshield-sdk/funcs/secured-accounts-revoke.js";

// Use `BotShieldCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const botShield = new BotShieldCore();

async function run() {
  const res = await securedAccountsRevoke(botShield, {
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("securedAccountsRevoke failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SecuredAccountsRevokeRequest](../../models/operations/secured-accounts-revoke-request.md)                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.SecuredAccountsRevokeSecurity](../../models/operations/secured-accounts-revoke-security.md)                                                                        | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SecuredAccountsRevokeResponse](../../models/operations/secured-accounts-revoke-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.InvalidInputError     | 400                          | application/json             |
| errors.ErrorResponse         | 500                          | application/json             |
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |

## getStatus

Is this account a Secured Account, and is the person's recent presence fresh? Returns exactly what the embed widget's live presence stream reports for the same account, so your server and the page always agree: `none` (not secured), `fresh` (secured, recent passkey presence until `fresh_until`), `stale` (secured, presence has lapsed — ask for a passkey again). The environment is your API key's: a `bs_dev_…` key sees and changes development Secured Accounts only, a `bs_prod_…` key production only. Server API keys only — site keys (`pk_…`) are refused.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="SecuredAccountsStatus" method="get" path="/secured-accounts/status" -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.securedAccounts.getStatus({
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    platformUserRef: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BotShieldCore } from "botshield-sdk/core.js";
import { securedAccountsGetStatus } from "botshield-sdk/funcs/secured-accounts-get-status.js";

// Use `BotShieldCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const botShield = new BotShieldCore();

async function run() {
  const res = await securedAccountsGetStatus(botShield, {
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    platformUserRef: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("securedAccountsGetStatus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SecuredAccountsStatusRequest](../../models/operations/secured-accounts-status-request.md)                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.SecuredAccountsStatusSecurity](../../models/operations/secured-accounts-status-security.md)                                                                        | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SecuredAccountsStatusResponse](../../models/operations/secured-accounts-status-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.InvalidInputError     | 400                          | application/json             |
| errors.ErrorResponse         | 500                          | application/json             |
| errors.BotShieldDefaultError | 4XX, 5XX                     | \*/\*                        |