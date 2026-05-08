# Changelog

## 1.8.0 (2026-05-08)

Full Changelog: [v1.7.0...v1.8.0](https://github.com/Bot-Shield/botshield-sdk-typescript/compare/v1.7.0...v1.8.0)

### Features

* **api:** manual updates ([dbec7b8](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/dbec7b83088faba21f9c225b95a3647025e745e9))
* **api:** manual updates ([092fa35](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/092fa35de6601a91cf4ae479f776783b3aaa2de7))
* **api:** manual updates ([8e36669](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/8e36669b68a18181db9492071ae30bb6a617b477))

## 1.7.0 (2026-05-08)

Full Changelog: [v1.6.0...v1.7.0](https://github.com/Bot-Shield/botshield-sdk-typescript/compare/v1.6.0...v1.7.0)

### Features

* **api:** manual updates ([b4b9a9c](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/b4b9a9c63ed0d3d63803008a02aac030ee053dd3))

## 1.6.0 (2026-05-08)

Full Changelog: [v1.5.1...v1.6.0](https://github.com/Bot-Shield/botshield-sdk-typescript/compare/v1.5.1...v1.6.0)

### Features

* **api:** manual updates ([448a1f8](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/448a1f809684689193a4878126d23f8512e8388f))


### Chores

* redact api-key headers in debug logs ([cc8fb77](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/cc8fb7708489f93ea0db186710fb206b8d6ff006))

## 1.5.1 (2026-05-01)

Full Changelog: [v1.5.0...v1.5.1](https://github.com/Bot-Shield/botshield-sdk-typescript/compare/v1.5.0...v1.5.1)

### Chores

* avoid formatting file that gets changed during releases ([34a2d33](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/34a2d335cc9934aede77c28f0a568b9701707187))
* **format:** run eslint and prettier separately ([1640918](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/16409187d2f6894fb1580a108801f735dbebcd5d))

## 1.5.0 (2026-04-28)

Full Changelog: [v1.4.1...v1.5.0](https://github.com/Bot-Shield/botshield-sdk-typescript/compare/v1.4.1...v1.5.0)

### Features

* support setting headers via env ([455431f](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/455431f777142e0dbac92323e521a416c0bd5eeb))


### Chores

* **formatter:** run prettier and eslint separately ([a9490ba](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/a9490ba4a63e16636644e53fa1c4c2b5bd412adb))
* **internal:** codegen related update ([c091b90](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/c091b90c207f7425e15b2afbbe752c31d4bea394))
* **internal:** codegen related update ([cb32c29](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/cb32c29487ab7dcfe3bf7bbbc276cc864d881c81))
* **internal:** fix MCP server import ordering ([60ca537](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/60ca5376929686db1933480f65bd593d77433767))
* **internal:** more robust bootstrap script ([0c01cbd](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/0c01cbd7d8d44623b801be05e24bbd19a0703623))
* **internal:** show error causes in MCP servers when running in local mode ([3bacef9](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/3bacef9c7ad3d005c69248de4d308bdac592812e))
* **internal:** support type annotations when running MCP in local execution mode ([aeed14b](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/aeed14bf545996bf431d3d117914a4f944b63185))
* **mcp-server:** increase local docs search result count from 5 to 10 ([8b20761](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/8b20761e719a79c218c1dacb5b7567b1a491b238))
* **mcp-server:** log client info ([2b00967](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/2b0096772c73522733735791f79752c7e5bfc070))
* restructure docs search code ([6c685e1](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/6c685e1a8ea718b3ecd03d8c776a3d98aa5e0ce4))

## 1.4.1 (2026-04-01)

Full Changelog: [v1.4.0...v1.4.1](https://github.com/Bot-Shield/botshield-sdk-typescript/compare/v1.4.0...v1.4.1)

### Bug Fixes

* **internal:** gitignore generated `oidc` dir ([78a5fcb](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/78a5fcb73bcbe43021f92ddde1372ad923bd029d))


### Chores

* **ci:** escape input path in publish-npm workflow ([f27ba22](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/f27ba22c8d09443341da87bee49fc8ceb2560a83))
* **ci:** skip lint on metadata-only changes ([a9afccd](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/a9afccde4620e2b8ce8671e45fc81a5b49477d11))
* **internal:** fix MCP server TS errors that occur with required client options ([4fa6325](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/4fa6325c8bfb46ee8f4eeaef24b6d3ebc88f0e93))
* **internal:** improve local docs search for MCP servers ([0db9e04](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/0db9e04c8789d7bf9a83749837b029a56192f02a))
* **internal:** improve local docs search for MCP servers ([a8d180e](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/a8d180e333d920f35a12539c6110ccf96bac1b2b))
* **internal:** support custom-instructions-path flag in MCP servers ([6bf0177](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/6bf017759e7f37311f10dbf7b7f05d5d09a67d04))
* **internal:** support local docs search in MCP servers ([9316a35](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/9316a35ef60ca867d6166a32aafb14f48e6dba4e))
* **internal:** update gitignore ([469d12a](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/469d12aff02609ebfbb8a041279fb97be1af28ff))
* **mcp-server:** add support for session id, forward client info ([0faee4f](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/0faee4f77876f75cf41af7cd70083cc9713522f9))

## 1.4.0 (2026-03-22)

Full Changelog: [v1.3.1...v1.4.0](https://github.com/Bot-Shield/botshield-sdk-typescript/compare/v1.3.1...v1.4.0)

### Features

* **api:** manual updates ([d601328](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/d60132816b9520f7c7208a4e71d9f7cb11b425d2))


### Chores

* configure new SDK language ([0d23467](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/0d23467e288e96d92f158eacda88cfb579d0fdca))

## 1.3.1 (2026-03-17)

Full Changelog: [v1.3.0...v1.3.1](https://github.com/Bot-Shield/botshield-sdk-typescript/compare/v1.3.0...v1.3.1)

### Chores

* update SDK settings ([a72f8b2](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/a72f8b20e7474060ee195249b5b694916677eb1f))

## 1.3.0 (2026-03-17)

Full Changelog: [v1.2.4...v1.3.0](https://github.com/Bot-Shield/botshield-sdk-typescript/compare/v1.2.4...v1.3.0)

### Features

* **api:** manual updates ([3f1cab5](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/3f1cab5930e180fbb26a2a1f5673b0249040fdaa))


### Chores

* **internal:** tweak CI branches ([0b358d3](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/0b358d336c13334f4a4363c2b6a06908ad1e79a0))
* **internal:** update dependencies to address dependabot vulnerabilities ([1a03dd8](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/1a03dd8d075e3067ca690481b3d11b373d05e358))

## 1.2.4 (2026-03-08)

Full Changelog: [v1.2.3...v1.2.4](https://github.com/Bot-Shield/botshield-sdk-typescript/compare/v1.2.3...v1.2.4)

### Bug Fixes

* **client:** preserve URL params already embedded in path ([51c9b78](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/51c9b78d1093cbef5f128c5ad010a007053d3dc0))


### Chores

* **ci:** skip uploading artifacts on stainless-internal branches ([d8ac934](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/d8ac9348ab11d6e2c79c4ed4df3ade22d64ecf43))
* **internal:** codegen related update ([0b481cd](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/0b481cd53192a2e498dd750213989fbc2e174d17))
* **internal:** codegen related update ([436b126](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/436b126c95c4d0c7f473f4504732a5aaa482368f))
* **internal:** move stringifyQuery implementation to internal function ([88d0408](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/88d04086f82f0851e2aa842028a4edec219398f6))

## 1.2.3 (2026-02-24)

Full Changelog: [v1.2.2...v1.2.3](https://github.com/Bot-Shield/botshield-sdk-typescript/compare/v1.2.2...v1.2.3)

### Bug Fixes

* **docs/contributing:** correct pnpm link command ([b1befc8](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/b1befc8ad3e86eab887e116f01c54092a3e7ead7))


### Chores

* **internal/client:** fix form-urlencoded requests ([082f87e](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/082f87e55045c4440be04dbc81dbfdc105857fb7))
* **internal:** avoid type checking errors with ts-reset ([8b7d7b5](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/8b7d7b5f3a47cda279c3cb1b835e244b0751f9f8))
* **internal:** remove mock server code ([a3f7669](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/a3f76693c8abad6d6e6c460b4618b96d44426739))
* **internal:** upgrade pnpm ([48f3154](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/48f3154c50ef3ffee90f342a199d44272e2d0254))
* **internal:** upgrade pnpm version ([fe98b57](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/fe98b57d8a504c111db024a271d85801c7e0c4a1))
* update mock server docs ([51dd9bf](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/51dd9bf9c8303f90e769bd8d5ade5259cf17c8ae))

## 1.2.2 (2026-02-06)

Full Changelog: [v1.2.1...v1.2.2](https://github.com/Bot-Shield/botshield-sdk-typescript/compare/v1.2.1...v1.2.2)

### Bug Fixes

* **client:** avoid removing abort listener too early ([a77884d](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/a77884dc1ee67520de0309d81d6a61bb7f25516f))


### Chores

* **client:** do not parse responses with empty content-length ([91d2068](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/91d2068cff02145bf21117155c625ca2283bcb7c))
* **client:** restructure abort controller binding ([9f2f09e](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/9f2f09e8a5ea65d5a53b1b5d25931f1cd5e04a99))

## 1.2.1 (2026-02-03)

Full Changelog: [v1.2.0...v1.2.1](https://github.com/Bot-Shield/botshield-sdk-typescript/compare/v1.2.0...v1.2.1)

### Bug Fixes

* **client:** avoid memory leak with abort signals ([3eacbb4](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/3eacbb499d97a203ba7e2ddc9746659c57fc3ed0))


### Chores

* break long lines in snippets into multiline ([5c9fbdb](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/5c9fbdb6eade8fa9baf43129ecd916c7a9d9162e))
* **ci:** upgrade `actions/github-script` ([3bcf3de](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/3bcf3dea85ed6656e6a6e0eec3ee2be3630afb6b))
* **internal:** codegen related update ([286e4fd](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/286e4fd3a7fdb9b8184fd22ffc44e37aa853dd64))
* **internal:** update `actions/checkout` version ([b521781](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/b52178163af9aae9c6e1e937b4bfd9d100017b5a))
* **internal:** update lock file ([f44d4d0](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/f44d4d0ea52a1933ad2e68b7cdbddff58a2b0e3c))
* **internal:** upgrade babel, qs, js-yaml ([b4282f5](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/b4282f5d44210e89f9152635962f575b161f7458))
* **internal:** upgrade brace-expansion and @babel/helpers ([9618e38](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/9618e385feace4f8b233f02b170ce015fcb149b2))

## 1.2.0 (2025-12-14)

Full Changelog: [v1.1.0...v1.2.0](https://github.com/Bot-Shield/botshield-sdk-typescript/compare/v1.1.0...v1.2.0)

### Features

* **api:** manual updates ([55a1942](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/55a19427f39fd14f7a1fc7a5cd391f7cffb72228))

## 1.1.0 (2025-12-14)

Full Changelog: [v1.0.0...v1.1.0](https://github.com/Bot-Shield/botshield-sdk-typescript/compare/v1.0.0...v1.1.0)

### Features

* **api:** manual updates ([52634fc](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/52634fc0060c810351fd42edb5e1b59873285fde))

## 1.0.0 (2025-12-12)

Full Changelog: [v0.2.0...v1.0.0](https://github.com/Bot-Shield/botshield-sdk-typescript/compare/v0.2.0...v1.0.0)

### Chores

* update SDK settings ([188cb1c](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/188cb1c86b64f53aa90b59be109f2cf7fcaaf59f))

## 0.2.0 (2025-12-12)

Full Changelog: [v0.1.0...v0.2.0](https://github.com/Bot-Shield/botshield-sdk-typescript/compare/v0.1.0...v0.2.0)

### Features

* **api:** manual updates ([c244b23](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/c244b234d65d00c3d9ae642220ce17156bf2c1ab))

## 0.1.0 (2025-12-12)

Full Changelog: [v0.0.1...v0.1.0](https://github.com/Bot-Shield/botshield-sdk-typescript/compare/v0.0.1...v0.1.0)

### Features

* **api:** manual updates ([ca78fd0](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/ca78fd0e636eb412507b09f13561a58c084e35d2))
* **api:** manual updates ([6b855d4](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/6b855d4d52b742d447903268d94943c4cf413ca5))


### Chores

* update SDK settings ([769983b](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/769983b1c8ee4adfd3a4d11367ef2fc8217009d9))
* update SDK settings ([e30aeba](https://github.com/Bot-Shield/botshield-sdk-typescript/commit/e30aebaa946c0ae6c0443f78804621203c7f1491))
