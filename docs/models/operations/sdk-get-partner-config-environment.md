# SDKGetPartnerConfigEnvironment

Site key environment. Omitted when the site key is unknown or has no enabled integrations.

## Example Usage

```typescript
import { SDKGetPartnerConfigEnvironment } from "botshield-sdk/models/operations";

let value: SDKGetPartnerConfigEnvironment = "test";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"test" | "live" | Unrecognized<string>
```