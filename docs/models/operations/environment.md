# Environment

Resolved from the credential: API token environment, or site key pk_test_ → development / pk_live_ → production.

## Example Usage

```typescript
import { Environment } from "botshield-sdk/models/operations";

let value: Environment = "production";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"development" | "production" | Unrecognized<string>
```