# SDK

Types:

- <code><a href="./src/resources/sdk.ts">SDKCreateSessionResponse</a></code>
- <code><a href="./src/resources/sdk.ts">SDKCreateVerificationLinkResponse</a></code>
- <code><a href="./src/resources/sdk.ts">SDKLogoutResponse</a></code>
- <code><a href="./src/resources/sdk.ts">SDKRevokeVerificationResponse</a></code>
- <code><a href="./src/resources/sdk.ts">SDKVerifyTokenResponse</a></code>

Methods:

- <code title="post /sdk/create-session">client.sdk.<a href="./src/resources/sdk.ts">createSession</a>({ ...params }) -> SDKCreateSessionResponse</code>
- <code title="post /sdk/create-verification-link">client.sdk.<a href="./src/resources/sdk.ts">createVerificationLink</a>({ ...params }) -> SDKCreateVerificationLinkResponse</code>
- <code title="post /sdk/logout">client.sdk.<a href="./src/resources/sdk.ts">logout</a>({ ...params }) -> SDKLogoutResponse</code>
- <code title="post /sdk/revoke-verification">client.sdk.<a href="./src/resources/sdk.ts">revokeVerification</a>({ ...params }) -> SDKRevokeVerificationResponse</code>
- <code title="post /sdk/verify-token">client.sdk.<a href="./src/resources/sdk.ts">verifyToken</a>({ ...params }) -> SDKVerifyTokenResponse</code>

# Verification

Types:

- <code><a href="./src/resources/verification.ts">VerificationGetStatusResponse</a></code>
- <code><a href="./src/resources/verification.ts">VerificationLookupUserByEmailResponse</a></code>

Methods:

- <code title="get /verification/status">client.verification.<a href="./src/resources/verification.ts">getStatus</a>({ ...params }) -> VerificationGetStatusResponse</code>
- <code title="get /verification/lookup-user-by-email">client.verification.<a href="./src/resources/verification.ts">lookupUserByEmail</a>({ ...params }) -> VerificationLookupUserByEmailResponse</code>

# Pass

Types:

- <code><a href="./src/resources/pass.ts">PassCreateResponse</a></code>

Methods:

- <code title="post /pass/create">client.pass.<a href="./src/resources/pass.ts">create</a>() -> PassCreateResponse</code>

# Users

Types:

- <code><a href="./src/resources/users.ts">UserUpdateMetadataResponse</a></code>

Methods:

- <code title="post /users/update-metadata">client.users.<a href="./src/resources/users.ts">updateMetadata</a>() -> UserUpdateMetadataResponse</code>

# Devices

Types:

- <code><a href="./src/resources/devices.ts">DeviceRemoveResponse</a></code>

Methods:

- <code title="post /devices/remove">client.devices.<a href="./src/resources/devices.ts">remove</a>() -> DeviceRemoveResponse</code>

# Organizations

Types:

- <code><a href="./src/resources/organizations.ts">OrganizationAddMemberResponse</a></code>

Methods:

- <code title="post /organizations/add-member">client.organizations.<a href="./src/resources/organizations.ts">addMember</a>() -> OrganizationAddMemberResponse</code>
