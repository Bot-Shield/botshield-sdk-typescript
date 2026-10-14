# SDKCreateVerificationLinkNotarizeFallbackReason

GA 3.0: present when notarize was requested but could not be applied. notarize_not_enabled = the gate's Console switch is off; the switch is the authority and the request field cannot turn the offer on.

## Example Usage

```typescript
import { SDKCreateVerificationLinkNotarizeFallbackReason } from "botshield-sdk/models/operations";

let value: SDKCreateVerificationLinkNotarizeFallbackReason = "age_gate";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"notarize_not_enabled" | "notarize_requires_user_ref" | "age_gate" | Unrecognized<string>
```