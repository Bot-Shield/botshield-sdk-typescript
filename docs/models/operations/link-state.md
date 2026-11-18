# LinkState

Where the link stands on this request. Null on a plain check and on a link from before 4.0. A pass whose link is not live carries no destination.

## Example Usage

```typescript
import { LinkState } from "botshield-sdk/models/operations";

let value: LinkState = "expired";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pending" | "live" | "expired" | "refused" | Unrecognized<string>
```