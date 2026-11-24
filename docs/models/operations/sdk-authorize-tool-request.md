# SDKAuthorizeToolRequest

## Example Usage

```typescript
import { SDKAuthorizeToolRequest } from "botshield-sdk/models/operations";

let value: SDKAuthorizeToolRequest = {
  resolution: "<value>",
  tool: "<value>",
  opaqueId: "<id>",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `resolution`                                                                          | *string*                                                                              | :heavy_check_mark:                                                                    | The Resolution the agent presented.                                                   |
| `tool`                                                                                | *string*                                                                              | :heavy_check_mark:                                                                    | The MCP tool being called.                                                            |
| `args`                                                                                | [operations.SDKAuthorizeToolArgs](../../models/operations/sdk-authorize-tool-args.md) | :heavy_minus_sign:                                                                    | The call's arguments, exactly as the tool will receive them.                          |
| `opaqueId`                                                                            | *string*                                                                              | :heavy_check_mark:                                                                    | The opaque ID from the linked agent's bind token.                                     |