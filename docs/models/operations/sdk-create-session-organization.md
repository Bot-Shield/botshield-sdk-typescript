# SDKCreateSessionOrganization

## Example Usage

```typescript
import { SDKCreateSessionOrganization } from "botshield-sdk/models/operations";

let value: SDKCreateSessionOrganization = {
  id: "<id>",
  environment: "development",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `environment`                                                                                                    | [operations.SDKCreateSessionEnvironment](../../models/operations/sdk-create-session-environment.md)              | :heavy_check_mark:                                                                                               | Resolved from the credential: API token environment, or site key pk_test_ → development / pk_live_ → production. |