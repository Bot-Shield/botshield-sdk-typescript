# botshield-sdk

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *botshield-sdk* API.

[![Built by Speakeasy](https://img.shields.io/badge/Built_by-SPEAKEASY-374151?style=for-the-badge&labelColor=f3f4f6)](https://www.speakeasy.com/?utm_source=botshield-sdk&utm_campaign=typescript)
[![License: MIT](https://img.shields.io/badge/LICENSE_//_MIT-3b5bdb?style=for-the-badge&labelColor=eff6ff)](https://opensource.org/licenses/MIT)


<br /><br />
> [!IMPORTANT]

<!-- Start Summary [summary] -->
## Summary

BotShield API: Human presence verification protocol with Signal Pixel passive bot scoring and third-party integrations.

BotShield provides three layers of defense:
1. **Signal Pixel** — passive behavioral fingerprinting (opt-in via `signals="true"`)
2. **Passkey Verification** — cryptographic human proof via device biometrics
3. **Third-party Integrations** — Cloudflare Turnstile, reCAPTCHA, and more

**Frontend SDK:** Load the BotShield script from `https://cdn.botshield.ai/sdk.js` and use `BotShield.render()` or the `botshield-verify` HTML element.

**Backend SDK:** Install `botshield-sdk` from npm and use `client.sdk.*` methods.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [botshield-sdk](#botshield-sdk)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add botshield-sdk
```

### PNPM

```bash
pnpm add botshield-sdk
```

### Bun

```bash
bun add botshield-sdk
```

### Yarn

```bash
yarn add botshield-sdk
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.


### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "BotShield": {
      "command": "npx",
      "args": [
        "-y", "--package", "botshield-sdk",
        "--",
        "mcp", "start",
        "--agent-key-auth", "...",
        "--agent-key-auth1", "...",
        "--agent-key-auth2", "...",
        "--agent-key-auth3", "...",
        "--agent-key-auth4", "...",
        "--agent-key-auth5", "...",
        "--agent-key-auth6", "...",
        "--agent-key-auth7", "...",
        "--agent-key-auth8", "...",
        "--agent-key-auth9", "...",
        "--agent-key-auth10", "...",
        "--agent-key-auth11", "...",
        "--agent-key-auth12", "...",
        "--agent-key-auth13", "...",
        "--agent-key-auth14", "...",
        "--agent-key-auth15", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "BotShield": {
      "command": "npx",
      "args": [
        "-y", "--package", "botshield-sdk",
        "--",
        "mcp", "start",
        "--agent-key-auth", "...",
        "--agent-key-auth1", "...",
        "--agent-key-auth2", "...",
        "--agent-key-auth3", "...",
        "--agent-key-auth4", "...",
        "--agent-key-auth5", "...",
        "--agent-key-auth6", "...",
        "--agent-key-auth7", "...",
        "--agent-key-auth8", "...",
        "--agent-key-auth9", "...",
        "--agent-key-auth10", "...",
        "--agent-key-auth11", "...",
        "--agent-key-auth12", "...",
        "--agent-key-auth13", "...",
        "--agent-key-auth14", "...",
        "--agent-key-auth15", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package botshield-sdk -- mcp start --help
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.sdk.createSession({
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {});

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name             | Type   | Scheme  |
| ---------------- | ------ | ------- |
| `agentKeyAuth`   | apiKey | API key |
| `agentKeyAuth1`  | apiKey | API key |
| `agentKeyAuth2`  | apiKey | API key |
| `agentKeyAuth3`  | apiKey | API key |
| `agentKeyAuth4`  | apiKey | API key |
| `agentKeyAuth5`  | apiKey | API key |
| `agentKeyAuth6`  | apiKey | API key |
| `agentKeyAuth7`  | apiKey | API key |
| `agentKeyAuth8`  | apiKey | API key |
| `agentKeyAuth9`  | apiKey | API key |
| `agentKeyAuth10` | apiKey | API key |
| `agentKeyAuth11` | apiKey | API key |
| `agentKeyAuth12` | apiKey | API key |
| `agentKeyAuth13` | apiKey | API key |
| `agentKeyAuth14` | apiKey | API key |
| `agentKeyAuth15` | apiKey | API key |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
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

### Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.sdk.createSession({
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {});

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [Actions](docs/sdks/actions/README.md)

* [proposeAction](docs/sdks/actions/README.md#proposeaction) - Propose a BotShield Action
* [checkActionStatus](docs/sdks/actions/README.md#checkactionstatus) - Check action proposal status
* [cancelAction](docs/sdks/actions/README.md#cancelaction) - Cancel a queued action proposal

### [SDK](docs/sdks/sdk/README.md)

* [createSession](docs/sdks/sdk/README.md#createsession) - Create an Anchor Grant Window
* [createVerificationLink](docs/sdks/sdk/README.md#createverificationlink) - Create a verification request
* [verifyToken](docs/sdks/sdk/README.md#verifytoken) - Validate a verification token
* [storeSignal](docs/sdks/sdk/README.md#storesignal) - Store a Signal Pixel bot score
* [validateSignal](docs/sdks/sdk/README.md#validatesignal) - Validate a signal token
* [getPartnerConfig](docs/sdks/sdk/README.md#getpartnerconfig) - Get partner configuration
* [revokeVerification](docs/sdks/sdk/README.md#revokeverification) - Revoke a pending verification
* [logout](docs/sdks/sdk/README.md#logout) - Revoke an Anchor Grant Window token

### [Verification](docs/sdks/verification/README.md)

* [lookupUserByEmail](docs/sdks/verification/README.md#lookupuserbyemail) - Look up user by email
* [getStatus](docs/sdks/verification/README.md#getstatus) - Check verification status

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`actionsCancelAction`](docs/sdks/actions/README.md#cancelaction) - Cancel a queued action proposal
- [`actionsCheckActionStatus`](docs/sdks/actions/README.md#checkactionstatus) - Check action proposal status
- [`actionsProposeAction`](docs/sdks/actions/README.md#proposeaction) - Propose a BotShield Action
- [`sdkCreateSession`](docs/sdks/sdk/README.md#createsession) - Create an Anchor Grant Window
- [`sdkCreateVerificationLink`](docs/sdks/sdk/README.md#createverificationlink) - Create a verification request
- [`sdkGetPartnerConfig`](docs/sdks/sdk/README.md#getpartnerconfig) - Get partner configuration
- [`sdkLogout`](docs/sdks/sdk/README.md#logout) - Revoke an Anchor Grant Window token
- [`sdkRevokeVerification`](docs/sdks/sdk/README.md#revokeverification) - Revoke a pending verification
- [`sdkStoreSignal`](docs/sdks/sdk/README.md#storesignal) - Store a Signal Pixel bot score
- [`sdkValidateSignal`](docs/sdks/sdk/README.md#validatesignal) - Validate a signal token
- [`sdkVerifyToken`](docs/sdks/sdk/README.md#verifytoken) - Validate a verification token
- [`verificationGetStatus`](docs/sdks/verification/README.md#getstatus) - Check verification status
- [`verificationLookupUserByEmail`](docs/sdks/verification/README.md#lookupuserbyemail) - Look up user by email

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.sdk.createSession(
    {
      apiKeyAuth: "<YOUR_API_KEY_HERE>",
    },
    {},
    {
      retries: {
        strategy: "backoff",
        backoff: {
          initialInterval: 1,
          maxInterval: 50,
          exponent: 1.1,
          maxElapsedTime: 100,
        },
        retryConnectionErrors: false,
      },
    },
  );

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
});

async function run() {
  const result = await botShield.sdk.createSession({
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {});

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`BotShieldError`](./src/models/errors/bot-shield-error.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { BotShield } from "botshield-sdk";
import * as errors from "botshield-sdk/models/errors";

const botShield = new BotShield();

async function run() {
  try {
    const result = await botShield.sdk.createSession({
      apiKeyAuth: "<YOUR_API_KEY_HERE>",
    }, {});

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.BotShieldError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.InvalidInputError) {
        console.log(error.data$.message); // string
        console.log(error.data$.input); // { [k: string]: any }
        console.log(error.data$.errors); // InvalidInputErrorError[]
      }
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`BotShieldError`](./src/models/errors/bot-shield-error.ts): The base class for HTTP error responses.

<details><summary>Less common errors (8)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/http-client-errors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/http-client-errors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/http-client-errors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/http-client-errors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/http-client-errors.ts): Unrecognised or unexpected error.


**Inherit from [`BotShieldError`](./src/models/errors/bot-shield-error.ts)**:
* [`InvalidInputError`](./src/models/errors/invalid-input-error.ts): Invalid input. Status code `400`. Applicable to 8 of 13 methods.*
* [`ErrorResponse`](./src/models/errors/error-response.ts): Unauthorized. Applicable to 8 of 13 methods.*
* [`ResponseValidationError`](./src/models/errors/response-validation-error.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| #   | Server                                | Description       |
| --- | ------------------------------------- | ----------------- |
| 0   | `http://localhost:9991/operations`    | Local development |
| 1   | `https://api.botshield.ai/operations` | Production        |

#### Example

```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield({
  serverIdx: 0,
});

async function run() {
  const result = await botShield.sdk.createSession({
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {});

  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield({
  serverURL: "https://api.botshield.ai/operations",
});

async function run() {
  const result = await botShield.sdk.createSession({
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {});

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to:
- route requests through a proxy server using [undici](https://www.npmjs.com/package/undici)'s ProxyAgent
- use the `"beforeRequest"` hook to add a custom header and a timeout to requests
- use the `"requestError"` hook to log errors

```typescript
import { BotShield } from "botshield-sdk";
import { ProxyAgent } from "undici";
import { HTTPClient } from "botshield-sdk/lib/http";

const dispatcher = new ProxyAgent("http://proxy.example.com:8080");

const httpClient = new HTTPClient({
  // 'fetcher' takes a function that has the same signature as native 'fetch'.
  fetcher: (input, init) =>
    // 'dispatcher' is specific to undici and not part of the standard Fetch API.
    fetch(input, { ...init, dispatcher } as RequestInit),
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new BotShield({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { BotShield } from "botshield-sdk";

const sdk = new BotShield({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=botshield-sdk&utm_campaign=typescript)
