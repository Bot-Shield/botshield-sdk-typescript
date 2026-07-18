# Bot Shield TypeScript API Library

[![NPM version](<https://img.shields.io/npm/v/botshield-sdk.svg?label=npm%20(stable)>)](https://npmjs.org/package/botshield-sdk) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/botshield-sdk)

This library provides convenient access to the Bot Shield REST API from server-side TypeScript or JavaScript.

The REST API documentation can be found on [docs.botshield.ai](https://docs.botshield.ai). The full API of this library can be found in [api.md](api.md).

It is generated with [Stainless](https://www.stainless.com/).

## MCP Server

Use the Bot Shield MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.

[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=botshield-sdk-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImJvdHNoaWVsZC1zZGstbWNwIl0sImVudiI6eyJCT1RTSElFTERfQVBJX0tFWSI6Ik15IEFQSSBLZXkiLCJCT1RTSElFTERfQUdFTlRfS0VZIjoiTXkgQWdlbnQgS2V5In19)
[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22botshield-sdk-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22botshield-sdk-mcp%22%5D%2C%22env%22%3A%7B%22BOTSHIELD_API_KEY%22%3A%22My%20API%20Key%22%2C%22BOTSHIELD_AGENT_KEY%22%3A%22My%20Agent%20Key%22%7D%7D)

> Note: You may need to set environment variables in your MCP client.

## Installation

```sh
npm install botshield-sdk
```

## Usage

The full API of this library can be found in [api.md](api.md).

<!-- prettier-ignore -->
```js
import BotShield from 'botshield-sdk';

const client = new BotShield({
  apiKey: process.env['BOTSHIELD_API_KEY'], // This is the default and can be omitted
  environment: 'development', // defaults to 'production'
});

const response = await client.sdk.createVerificationLink({
  return_url: 'https://yourapp.com/verified',
  user_email: 'user@example.com',
});

console.log(response.data);
```

### Request & Response types

This library includes TypeScript definitions for all request params and response fields. You may import and use them like so:

<!-- prettier-ignore -->
```ts
import BotShield from 'botshield-sdk';

const client = new BotShield({
  apiKey: process.env['BOTSHIELD_API_KEY'], // This is the default and can be omitted
  environment: 'development', // defaults to 'production'
});

const params: BotShield.SDKCreateVerificationLinkParams = {
  metadata: { cart_id: 'cart_123', action: 'checkout' },
  mode: 'linked-account',
  return_url: 'https://yourapp.com/verified',
  user_email: 'user@example.com',
};
const response: BotShield.SDKCreateVerificationLinkResponse =
  await client.sdk.createVerificationLink(params);
```

Documentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.

## Handling errors

When the library is unable to connect to the API,
or if the API returns a non-success status code (i.e., 4xx or 5xx response),
a subclass of `APIError` will be thrown:

<!-- prettier-ignore -->
```ts
const response = await client.sdk
  .createVerificationLink({
    metadata: { cart_id: 'cart_123', action: 'checkout' },
    mode: 'linked-account',
    return_url: 'https://yourapp.com/verified',
    user_email: 'user@example.com',
  })
  .catch(async (err) => {
    if (err instanceof BotShield.APIError) {
      console.log(err.status); // 400
      console.log(err.name); // BadRequestError
      console.log(err.headers); // {server: 'nginx', ...}
    } else {
      throw err;
    }
  });
```

Error codes are as follows:

| Status Code | Error Type                 |
| ----------- | -------------------------- |
| 400         | `BadRequestError`          |
| 401         | `AuthenticationError`      |
| 403         | `PermissionDeniedError`    |
| 404         | `NotFoundError`            |
| 422         | `UnprocessableEntityError` |
| 429         | `RateLimitError`           |
| >=500       | `InternalServerError`      |
| N/A         | `APIConnectionError`       |

### Retries

Certain errors will be automatically retried 2 times by default, with a short exponential backoff.
Connection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,
429 Rate Limit, and >=500 Internal errors will all be retried by default.

You can use the `maxRetries` option to configure or disable this:

<!-- prettier-ignore -->
```js
// Configure the default for all requests:
const client = new BotShield({
  maxRetries: 0, // default is 2
});

// Or, configure per-request:
await client.sdk.createVerificationLink({
  metadata: { cart_id: 'cart_123', action: 'checkout' },
  mode: 'linked-account',
  return_url: 'https://yourapp.com/verified',
  user_email: 'user@example.com',
}, {
  maxRetries: 5,
});
```

### Timeouts

Requests time out after 1 minute by default. You can configure this with a `timeout` option:

<!-- prettier-ignore -->
```ts
// Configure the default for all requests:
const client = new BotShield({
  timeout: 20 * 1000, // 20 seconds (default is 1 minute)
});

// Override per-request:
await client.sdk.createVerificationLink({
  metadata: { cart_id: 'cart_123', action: 'checkout' },
  mode: 'linked-account',
  return_url: 'https://yourapp.com/verified',
  user_email: 'user@example.com',
}, {
  timeout: 5 * 1000,
});
```

On timeout, an `APIConnectionTimeoutError` is thrown.

Note that requests which time out will be [retried twice by default](#retries).

## Advanced Usage

### Accessing raw Response data (e.g., headers)

The "raw" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.
This method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.

You can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.
Unlike `.asResponse()` this method consumes the body, returning once it is parsed.

<!-- prettier-ignore -->
```ts
const client = new BotShield();

const response = await client.sdk
  .createVerificationLink({
    metadata: { cart_id: 'cart_123', action: 'checkout' },
    mode: 'linked-account',
    return_url: 'https://yourapp.com/verified',
    user_email: 'user@example.com',
  })
  .asResponse();
console.log(response.headers.get('X-My-Header'));
console.log(response.statusText); // access the underlying Response object

const { data: response, response: raw } = await client.sdk
  .createVerificationLink({
    metadata: { cart_id: 'cart_123', action: 'checkout' },
    mode: 'linked-account',
    return_url: 'https://yourapp.com/verified',
    user_email: 'user@example.com',
  })
  .withResponse();
console.log(raw.headers.get('X-My-Header'));
console.log(response.data);
```

### Logging

> [!IMPORTANT]
> All log messages are intended for debugging only. The format and content of log messages
> may change between releases.

#### Log levels

The log level can be configured in two ways:

1. Via the `BOT_SHIELD_LOG` environment variable
2. Using the `logLevel` client option (overrides the environment variable if set)

```ts
import BotShield from 'botshield-sdk';

const client = new BotShield({
  logLevel: 'debug', // Show all log messages
});
```

Available log levels, from most to least verbose:

- `'debug'` - Show debug messages, info, warnings, and errors
- `'info'` - Show info messages, warnings, and errors
- `'warn'` - Show warnings and errors (default)
- `'error'` - Show only errors
- `'off'` - Disable all logging

At the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.
Some authentication-related headers are redacted, but sensitive data in request and response bodies
may still be visible.

#### Custom logger

By default, this library logs to `globalThis.console`. You can also provide a custom logger.
Most logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.

When providing a custom logger, the `logLevel` option still controls which messages are emitted, messages
below the configured level will not be sent to your logger.

```ts
import BotShield from 'botshield-sdk';
import pino from 'pino';

const logger = pino();

const client = new BotShield({
  logger: logger.child({ name: 'BotShield' }),
  logLevel: 'debug', // Send all messages to pino, allowing it to filter
});
```

### Making custom/undocumented requests

This library is typed for convenient access to the documented API. If you need to access undocumented
endpoints, params, or response properties, the library can still be used.

#### Undocumented endpoints

To make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.
Options on the client, such as retries, will be respected when making these requests.

```ts
await client.post('/some/path', {
  body: { some_prop: 'foo' },
  query: { some_query_arg: 'bar' },
});
```

#### Undocumented request params

To make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented
parameter. This library doesn't validate at runtime that the request matches the type, so any extra values you
send will be sent as-is.

```ts
client.sdk.createVerificationLink({
  // ...
  // @ts-expect-error baz is not yet public
  baz: 'undocumented option',
});
```

For requests with the `GET` verb, any extra params will be in the query, all other requests will send the
extra param in the body.

If you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request
options.

#### Undocumented response properties

To access undocumented response properties, you may access the response object with `// @ts-expect-error` on
the response object, or cast the response object to the requisite type. Like the request params, we do not
validate or strip extra properties from the response from the API.

### Customizing the fetch client

By default, this library expects a global `fetch` function is defined.

If you want to use a different `fetch` function, you can either polyfill the global:

```ts
import fetch from 'my-fetch';

globalThis.fetch = fetch;
```

Or pass it to the client:

```ts
import BotShield from 'botshield-sdk';
import fetch from 'my-fetch';

const client = new BotShield({ fetch });
```

### Fetch options

If you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)

```ts
import BotShield from 'botshield-sdk';

const client = new BotShield({
  fetchOptions: {
    // `RequestInit` options
  },
});
```

#### Configuring proxies

To modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy
options to requests:

<img src="https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg" align="top" width="18" height="21"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>

```ts
import BotShield from 'botshield-sdk';
import * as undici from 'undici';

const proxyAgent = new undici.ProxyAgent('http://localhost:8888');
const client = new BotShield({
  fetchOptions: {
    dispatcher: proxyAgent,
  },
});
```

<img src="https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg" align="top" width="18" height="21"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>

```ts
import BotShield from 'botshield-sdk';

const client = new BotShield({
  fetchOptions: {
    proxy: 'http://localhost:8888',
  },
});
```

<img src="https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg" align="top" width="18" height="21"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>

```ts
import BotShield from 'npm:botshield-sdk';

const httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });
const client = new BotShield({
  fetchOptions: {
    client: httpClient,
  },
});
```

## Frequently Asked Questions

## Semantic versioning

This package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:

1. Changes that only affect static types, without breaking runtime behavior.
2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_
3. Changes that we do not expect to impact the vast majority of users in practice.

We take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.

We are keen for your feedback; please open an [issue](https://www.github.com/Bot-Shield/botshield-sdk-typescript/issues) with questions, bugs, or suggestions.

## Requirements

TypeScript >= 4.9 is supported.

The following runtimes are supported:

- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)
- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.
- Deno v1.28.0 or higher.
- Bun 1.0 or later.
- Cloudflare Workers.
- Vercel Edge Runtime.
- Jest 28 or greater with the `"node"` environment (`"jsdom"` is not supported at this time).
- Nitro v2.6 or greater.

Note that React Native is not supported at this time.

If you are interested in other runtime environments, please open or upvote an issue on GitHub.

## Contributing

See [the contributing documentation](./CONTRIBUTING.md).

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
* [Bot Shield TypeScript API Library](#bot-shield-typescript-api-library)
  * [MCP Server](#mcp-server)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Handling errors](#handling-errors)
  * [Advanced Usage](#advanced-usage)
  * [Frequently Asked Questions](#frequently-asked-questions)
  * [Semantic versioning](#semantic-versioning)
  * [Requirements](#requirements)
  * [Contributing](#contributing)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements-1)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)

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
        "--agent-key-auth1", "..."
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
        "--agent-key-auth1", "..."
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

| Name            | Type   | Scheme  |
| --------------- | ------ | ------- |
| `agentKeyAuth`  | apiKey | API key |
| `agentKeyAuth1` | apiKey | API key |

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
