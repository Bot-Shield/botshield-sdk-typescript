# ActionsCheckStatusVerdict

null until status is approved or denied.

## Example Usage

```typescript
import { ActionsCheckStatusVerdict } from "botshield-sdk/models/operations";

let value: ActionsCheckStatusVerdict = "approve";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"approve" | "denied" | Unrecognized<string>
```