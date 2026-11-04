# Status

`draft` until activated; `closed` once closed (a closed gate cannot be reopened).

## Example Usage

```typescript
import { Status } from "botshield-sdk/models";

let value: Status = "active";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"draft" | "active" | "closed" | Unrecognized<string>
```