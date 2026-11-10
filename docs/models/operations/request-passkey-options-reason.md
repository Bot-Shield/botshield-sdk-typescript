# RequestPasskeyOptionsReason

Why `fallback` was returned. `not_linked`: the request's partner_user_ref has no active link (or the request carries none). `no_passkey`: the linked person has no passkey.

## Example Usage

```typescript
import { RequestPasskeyOptionsReason } from "botshield-sdk/models/operations";

let value: RequestPasskeyOptionsReason = "no_passkey";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"not_linked" | "no_passkey" | Unrecognized<string>
```