# SDKVerifyTokenEnvironment

The environment of the key that started the request. Null on a token issued before 4.0, or when it was not known.

## Example Usage

```typescript
import { SDKVerifyTokenEnvironment } from "botshield-sdk/models/operations";

let value: SDKVerifyTokenEnvironment = "production";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"development" | "production" | Unrecognized<string>
```