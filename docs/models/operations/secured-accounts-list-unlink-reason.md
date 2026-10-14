# SecuredAccountsListUnlinkReason

Why it ended: `credential_changed` (you reported a sign-in detail changed), `platform` (you revoked it), `human` (the person unlinked it). null while active.

## Example Usage

```typescript
import { SecuredAccountsListUnlinkReason } from "botshield-sdk/models/operations";

let value: SecuredAccountsListUnlinkReason = "human";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"credential_changed" | "platform" | "human" | Unrecognized<string>
```