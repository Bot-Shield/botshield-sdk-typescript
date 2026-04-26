// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    "name": "create_session",
    "endpoint": "/sdk/create-session",
    "httpMethod": "post",
    "summary": "Create an Anchor Grant Window",
    "description": "Creates a short-lived anchor grant token (5 minutes) from an API token or site key. Use this to get a token before creating verification links.",
    "stainlessPath": "(resource) sdk > (method) create_session",
    "qualified": "client.sdk.createSession",
    "params": [
      "metadata?: object;",
      "partner_user_id?: string;"
    ],
    "response": "{ data: { anchor_grant_expires_at: string; anchor_grant_expires_in_seconds: number; anchor_grant_token: string; expires_at: string; expires_in_seconds: number; organization: { id: string; environment: string; }; session_token: string; }; }",
    "markdown": "## create_session\n\n`client.sdk.createSession(metadata?: object, partner_user_id?: string): { data: object; }`\n\n**post** `/sdk/create-session`\n\nCreates a short-lived anchor grant token (5 minutes) from an API token or site key. Use this to get a token before creating verification links.\n\n### Parameters\n\n- `metadata?: object`\n\n- `partner_user_id?: string`\n  Your internal user identifier for correlation\n\n### Returns\n\n- `{ data: { anchor_grant_expires_at: string; anchor_grant_expires_in_seconds: number; anchor_grant_token: string; expires_at: string; expires_in_seconds: number; organization: { id: string; environment: string; }; session_token: string; }; }`\n\n  - `data: { anchor_grant_expires_at: string; anchor_grant_expires_in_seconds: number; anchor_grant_token: string; expires_at: string; expires_in_seconds: number; organization: { id: string; environment: string; }; session_token: string; }`\n\n### Example\n\n```typescript\nimport BotShield from 'botshield-sdk';\n\nconst client = new BotShield();\n\nconst response = await client.sdk.createSession();\n\nconsole.log(response);\n```",
    "perLanguage": {
      "typescript": {
        "method": "client.sdk.createSession",
        "example": "import BotShield from 'botshield-sdk';\n\nconst client = new BotShield({\n  apiKey: process.env['BOTSHIELD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.sdk.createSession();\n\nconsole.log(response.data);"
      },
      "http": {
        "example": "curl https://api.botshield.ai/operations/sdk/create-session \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: $BOTSHIELD_API_KEY\" \\\n    -d '{}'"
      }
    }
  },
  {
    "name": "create_verification_link",
    "endpoint": "/sdk/create-verification-link",
    "httpMethod": "post",
    "summary": "Create a verification request",
    "description": "Creates a verification request with deep link, web URL, and QR code. Requires an anchor grant token from create-session.",
    "stainlessPath": "(resource) sdk > (method) create_verification_link",
    "qualified": "client.sdk.createVerificationLink",
    "params": [
      "botshield_user_id?: string;",
      "metadata?: object;",
      "mode?: 'linked-account' | 'private';",
      "return_url?: string;",
      "scope?: string;",
      "sdk_type?: 'signal' | 'presence';",
      "signal_token?: string;",
      "user_email?: string;",
      "webhook_url?: string;"
    ],
    "response": "{ data: { deep_link: string; expires_at: string; qr_code_url: string; request_id: string; web_url: string; auth_mode?: 'linked-account' | 'private'; organization?: { id?: string; }; scope?: string; sdk_type?: 'signal' | 'presence'; }; }",
    "markdown": "## create_verification_link\n\n`client.sdk.createVerificationLink(botshield_user_id?: string, metadata?: object, mode?: 'linked-account' | 'private', return_url?: string, scope?: string, sdk_type?: 'signal' | 'presence', signal_token?: string, user_email?: string, webhook_url?: string): { data: object; }`\n\n**post** `/sdk/create-verification-link`\n\nCreates a verification request with deep link, web URL, and QR code. Requires an anchor grant token from create-session.\n\n### Parameters\n\n- `botshield_user_id?: string`\n  Returning user ID to skip onboarding\n\n- `metadata?: object`\n\n- `mode?: 'linked-account' | 'private'`\n  linked-account = OAuth+passkey, private = direct WebAuthn (no PII)\n\n- `return_url?: string`\n\n- `scope?: string`\n\n- `sdk_type?: 'signal' | 'presence'`\n\n- `signal_token?: string`\n  Tamper-proof Signal Pixel token (bs_sig_...) for server-side score correlation\n\n- `user_email?: string`\n\n- `webhook_url?: string`\n\n### Returns\n\n- `{ data: { deep_link: string; expires_at: string; qr_code_url: string; request_id: string; web_url: string; auth_mode?: 'linked-account' | 'private'; organization?: { id?: string; }; scope?: string; sdk_type?: 'signal' | 'presence'; }; }`\n\n  - `data: { deep_link: string; expires_at: string; qr_code_url: string; request_id: string; web_url: string; auth_mode?: 'linked-account' | 'private'; organization?: { id?: string; }; scope?: string; sdk_type?: 'signal' | 'presence'; }`\n\n### Example\n\n```typescript\nimport BotShield from 'botshield-sdk';\n\nconst client = new BotShield();\n\nconst response = await client.sdk.createVerificationLink();\n\nconsole.log(response);\n```",
    "perLanguage": {
      "typescript": {
        "method": "client.sdk.createVerificationLink",
        "example": "import BotShield from 'botshield-sdk';\n\nconst client = new BotShield({\n  apiKey: process.env['BOTSHIELD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.sdk.createVerificationLink();\n\nconsole.log(response.data);"
      },
      "http": {
        "example": "curl https://api.botshield.ai/operations/sdk/create-verification-link \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: $BOTSHIELD_API_KEY\" \\\n    -d '{}'"
      }
    }
  },
  {
    "name": "verify_token",
    "endpoint": "/sdk/verify-token",
    "httpMethod": "post",
    "summary": "Validate a verification token",
    "description": "Validates a signed JWT verification receipt. This is the primary server-side check. Optionally include signal_token for combined confidence scoring with Signal Pixel + Turnstile + passkey results.",
    "stainlessPath": "(resource) sdk > (method) verify_token",
    "qualified": "client.sdk.verifyToken",
    "params": [
      "token: string;",
      "signal_token?: string;"
    ],
    "response": "{ claims?: { auth_mode?: 'linked-account' | 'private'; botshield_user_id?: string; expires_at?: number; issued_at?: number; organization_id?: string; partner_user_id?: string; request_id?: string; timestamp?: string; user_email?: string; verified?: boolean; }; confidence?: number; reason?: string; signals?: { botshield_score?: number; passkey?: { verified?: boolean; }; turnstile?: { success?: boolean; }; }; valid?: boolean; }",
    "markdown": "## verify_token\n\n`client.sdk.verifyToken(token: string, signal_token?: string): { claims?: object; confidence?: number; reason?: string; signals?: object; valid?: boolean; }`\n\n**post** `/sdk/verify-token`\n\nValidates a signed JWT verification receipt. This is the primary server-side check. Optionally include signal_token for combined confidence scoring with Signal Pixel + Turnstile + passkey results.\n\n### Parameters\n\n- `token: string`\n  JWT verification receipt\n\n- `signal_token?: string`\n  Optional Signal Pixel token for combined confidence\n\n### Returns\n\n- `{ claims?: { auth_mode?: 'linked-account' | 'private'; botshield_user_id?: string; expires_at?: number; issued_at?: number; organization_id?: string; partner_user_id?: string; request_id?: string; timestamp?: string; user_email?: string; verified?: boolean; }; confidence?: number; reason?: string; signals?: { botshield_score?: number; passkey?: { verified?: boolean; }; turnstile?: { success?: boolean; }; }; valid?: boolean; }`\n\n  - `claims?: { auth_mode?: 'linked-account' | 'private'; botshield_user_id?: string; expires_at?: number; issued_at?: number; organization_id?: string; partner_user_id?: string; request_id?: string; timestamp?: string; user_email?: string; verified?: boolean; }`\n  - `confidence?: number`\n  - `reason?: string`\n  - `signals?: { botshield_score?: number; passkey?: { verified?: boolean; }; turnstile?: { success?: boolean; }; }`\n  - `valid?: boolean`\n\n### Example\n\n```typescript\nimport BotShield from 'botshield-sdk';\n\nconst client = new BotShield();\n\nconst response = await client.sdk.verifyToken({ token: 'token' });\n\nconsole.log(response);\n```",
    "perLanguage": {
      "typescript": {
        "method": "client.sdk.verifyToken",
        "example": "import BotShield from 'botshield-sdk';\n\nconst client = new BotShield({\n  apiKey: process.env['BOTSHIELD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.sdk.verifyToken({ token: 'token' });\n\nconsole.log(response.confidence);"
      },
      "http": {
        "example": "curl https://api.botshield.ai/operations/sdk/verify-token \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: $BOTSHIELD_API_KEY\" \\\n    -d '{\n          \"token\": \"token\"\n        }'"
      }
    }
  },
  {
    "name": "store_signal",
    "endpoint": "/sdk/store-signal",
    "httpMethod": "post",
    "summary": "Store a Signal Pixel bot score",
    "description": "Stores a behavioral fingerprint score server-side and returns an opaque signal_token (bs_sig_...). The client-side score can be spoofed — the signal_token maps to the real score in BotShield's database.",
    "stainlessPath": "(resource) sdk > (method) store_signal",
    "qualified": "client.sdk.storeSignal",
    "params": [
      "score: number;",
      "site_key: string;",
      "client_score?: number;",
      "country?: string;",
      "edge_score?: number;",
      "fp_hash?: string;",
      "ip_hash?: string;",
      "signals?: object;",
      "ua_hash?: string;"
    ],
    "response": "{ expires_at?: string; signal_token?: string; }",
    "markdown": "## store_signal\n\n`client.sdk.storeSignal(score: number, site_key: string, client_score?: number, country?: string, edge_score?: number, fp_hash?: string, ip_hash?: string, signals?: object, ua_hash?: string): { expires_at?: string; signal_token?: string; }`\n\n**post** `/sdk/store-signal`\n\nStores a behavioral fingerprint score server-side and returns an opaque signal_token (bs_sig_...). The client-side score can be spoofed — the signal_token maps to the real score in BotShield's database.\n\n### Parameters\n\n- `score: number`\n\n- `site_key: string`\n\n- `client_score?: number`\n\n- `country?: string`\n\n- `edge_score?: number`\n\n- `fp_hash?: string`\n\n- `ip_hash?: string`\n\n- `signals?: object`\n\n- `ua_hash?: string`\n\n### Returns\n\n- `{ expires_at?: string; signal_token?: string; }`\n\n  - `expires_at?: string`\n  - `signal_token?: string`\n\n### Example\n\n```typescript\nimport BotShield from 'botshield-sdk';\n\nconst client = new BotShield();\n\nconst response = await client.sdk.storeSignal({ score: 0, site_key: 'site_key' });\n\nconsole.log(response);\n```",
    "perLanguage": {
      "typescript": {
        "method": "client.sdk.storeSignal",
        "example": "import BotShield from 'botshield-sdk';\n\nconst client = new BotShield({\n  apiKey: process.env['BOTSHIELD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.sdk.storeSignal({ score: 0, site_key: 'site_key' });\n\nconsole.log(response.expires_at);"
      },
      "http": {
        "example": "curl https://api.botshield.ai/operations/sdk/store-signal \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: $BOTSHIELD_API_KEY\" \\\n    -d '{\n          \"score\": 0,\n          \"site_key\": \"site_key\"\n        }'"
      }
    }
  },
  {
    "name": "validate_signal",
    "endpoint": "/sdk/validate-signal",
    "httpMethod": "post",
    "summary": "Validate a signal token",
    "description": "Validates a signal_token and returns the real server-side bot score. One-time use, 10-minute expiry. This is the tamper-proof check.",
    "stainlessPath": "(resource) sdk > (method) validate_signal",
    "qualified": "client.sdk.validateSignal",
    "params": [
      "signal_token: string;",
      "verification_event_id?: string;"
    ],
    "response": "{ client_score?: number; country?: string; created_at?: string; edge_score?: number; fp_hash?: string; reason?: string; score?: number; site_key?: string; valid?: boolean; }",
    "markdown": "## validate_signal\n\n`client.sdk.validateSignal(signal_token: string, verification_event_id?: string): { client_score?: number; country?: string; created_at?: string; edge_score?: number; fp_hash?: string; reason?: string; score?: number; site_key?: string; valid?: boolean; }`\n\n**post** `/sdk/validate-signal`\n\nValidates a signal_token and returns the real server-side bot score. One-time use, 10-minute expiry. This is the tamper-proof check.\n\n### Parameters\n\n- `signal_token: string`\n\n- `verification_event_id?: string`\n\n### Returns\n\n- `{ client_score?: number; country?: string; created_at?: string; edge_score?: number; fp_hash?: string; reason?: string; score?: number; site_key?: string; valid?: boolean; }`\n\n  - `client_score?: number`\n  - `country?: string`\n  - `created_at?: string`\n  - `edge_score?: number`\n  - `fp_hash?: string`\n  - `reason?: string`\n  - `score?: number`\n  - `site_key?: string`\n  - `valid?: boolean`\n\n### Example\n\n```typescript\nimport BotShield from 'botshield-sdk';\n\nconst client = new BotShield();\n\nconst response = await client.sdk.validateSignal({ signal_token: 'signal_token' });\n\nconsole.log(response);\n```",
    "perLanguage": {
      "typescript": {
        "method": "client.sdk.validateSignal",
        "example": "import BotShield from 'botshield-sdk';\n\nconst client = new BotShield({\n  apiKey: process.env['BOTSHIELD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.sdk.validateSignal({ signal_token: 'signal_token' });\n\nconsole.log(response.valid);"
      },
      "http": {
        "example": "curl https://api.botshield.ai/operations/sdk/validate-signal \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: $BOTSHIELD_API_KEY\" \\\n    -d '{\n          \"signal_token\": \"signal_token\"\n        }'"
      }
    }
  },
  {
    "name": "get_partner_config",
    "endpoint": "/sdk/partner-config",
    "httpMethod": "get",
    "summary": "Get partner configuration",
    "description": "Returns enabled integrations (Turnstile, etc.) for a site key. Public config only — secret keys never exposed.",
    "stainlessPath": "(resource) sdk > (method) get_partner_config",
    "qualified": "client.sdk.getPartnerConfig",
    "params": [
      "site_key: string;"
    ],
    "response": "{ environment?: 'test' | 'live'; integrations?: object; }",
    "markdown": "## get_partner_config\n\n`client.sdk.getPartnerConfig(site_key: string): { environment?: 'test' | 'live'; integrations?: object; }`\n\n**get** `/sdk/partner-config`\n\nReturns enabled integrations (Turnstile, etc.) for a site key. Public config only — secret keys never exposed.\n\n### Parameters\n\n- `site_key: string`\n\n### Returns\n\n- `{ environment?: 'test' | 'live'; integrations?: object; }`\n\n  - `environment?: 'test' | 'live'`\n  - `integrations?: object`\n\n### Example\n\n```typescript\nimport BotShield from 'botshield-sdk';\n\nconst client = new BotShield();\n\nconst response = await client.sdk.getPartnerConfig({ site_key: 'site_key' });\n\nconsole.log(response);\n```",
    "perLanguage": {
      "typescript": {
        "method": "client.sdk.getPartnerConfig",
        "example": "import BotShield from 'botshield-sdk';\n\nconst client = new BotShield({\n  apiKey: process.env['BOTSHIELD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.sdk.getPartnerConfig({ site_key: 'site_key' });\n\nconsole.log(response.environment);"
      },
      "http": {
        "example": "curl https://api.botshield.ai/operations/sdk/partner-config \\\n    -H \"Authorization: $BOTSHIELD_API_KEY\""
      }
    }
  },
  {
    "name": "revoke_verification",
    "endpoint": "/sdk/revoke-verification",
    "httpMethod": "post",
    "summary": "Revoke a pending verification",
    "description": "Soft-expires a pending verification for a scope and user. Use when create-verification-link returns 409.",
    "stainlessPath": "(resource) sdk > (method) revoke_verification",
    "qualified": "client.sdk.revokeVerification",
    "params": [
      "scope: string;",
      "partner_user_id?: string;",
      "user_email?: string;"
    ],
    "response": "{ data: { message?: string; revoked_count?: number; success?: boolean; }; }",
    "markdown": "## revoke_verification\n\n`client.sdk.revokeVerification(scope: string, partner_user_id?: string, user_email?: string): { data: object; }`\n\n**post** `/sdk/revoke-verification`\n\nSoft-expires a pending verification for a scope and user. Use when create-verification-link returns 409.\n\n### Parameters\n\n- `scope: string`\n\n- `partner_user_id?: string`\n\n- `user_email?: string`\n\n### Returns\n\n- `{ data: { message?: string; revoked_count?: number; success?: boolean; }; }`\n\n  - `data: { message?: string; revoked_count?: number; success?: boolean; }`\n\n### Example\n\n```typescript\nimport BotShield from 'botshield-sdk';\n\nconst client = new BotShield();\n\nconst response = await client.sdk.revokeVerification({ scope: 'scope' });\n\nconsole.log(response);\n```",
    "perLanguage": {
      "typescript": {
        "method": "client.sdk.revokeVerification",
        "example": "import BotShield from 'botshield-sdk';\n\nconst client = new BotShield({\n  apiKey: process.env['BOTSHIELD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.sdk.revokeVerification({ scope: 'scope' });\n\nconsole.log(response.data);"
      },
      "http": {
        "example": "curl https://api.botshield.ai/operations/sdk/revoke-verification \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: $BOTSHIELD_API_KEY\" \\\n    -d '{\n          \"scope\": \"scope\"\n        }'"
      }
    }
  },
  {
    "name": "logout",
    "endpoint": "/sdk/logout",
    "httpMethod": "post",
    "summary": "Revoke an Anchor Grant Window token",
    "description": "Revoke an Anchor Grant Window token",
    "stainlessPath": "(resource) sdk > (method) logout",
    "qualified": "client.sdk.logout",
    "params": [
      "session_token: string;"
    ],
    "response": "{ message?: string; revoked_at?: string; success?: boolean; token_found?: boolean; }",
    "markdown": "## logout\n\n`client.sdk.logout(session_token: string): { message?: string; revoked_at?: string; success?: boolean; token_found?: boolean; }`\n\n**post** `/sdk/logout`\n\nRevoke an Anchor Grant Window token\n\n### Parameters\n\n- `session_token: string`\n  The anchor grant token (bss_*) to revoke\n\n### Returns\n\n- `{ message?: string; revoked_at?: string; success?: boolean; token_found?: boolean; }`\n\n  - `message?: string`\n  - `revoked_at?: string`\n  - `success?: boolean`\n  - `token_found?: boolean`\n\n### Example\n\n```typescript\nimport BotShield from 'botshield-sdk';\n\nconst client = new BotShield();\n\nconst response = await client.sdk.logout({ session_token: 'session_token' });\n\nconsole.log(response);\n```",
    "perLanguage": {
      "typescript": {
        "method": "client.sdk.logout",
        "example": "import BotShield from 'botshield-sdk';\n\nconst client = new BotShield({\n  apiKey: process.env['BOTSHIELD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.sdk.logout({ session_token: 'session_token' });\n\nconsole.log(response.message);"
      },
      "http": {
        "example": "curl https://api.botshield.ai/operations/sdk/logout \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: $BOTSHIELD_API_KEY\" \\\n    -d '{\n          \"session_token\": \"session_token\"\n        }'"
      }
    }
  },
  {
    "name": "lookup_user_by_email",
    "endpoint": "/verification/lookup-user-by-email",
    "httpMethod": "get",
    "summary": "Look up user by email",
    "description": "Check whether a user exists and has a registered passkey before initiating verification.",
    "stainlessPath": "(resource) verification > (method) lookup_user_by_email",
    "qualified": "client.verification.lookupUserByEmail",
    "params": [
      "email: string;"
    ],
    "response": "{ data: { clerk_user_id?: string; found?: boolean; has_passkey?: boolean; is_active?: boolean; }; }",
    "markdown": "## lookup_user_by_email\n\n`client.verification.lookupUserByEmail(email: string): { data: object; }`\n\n**get** `/verification/lookup-user-by-email`\n\nCheck whether a user exists and has a registered passkey before initiating verification.\n\n### Parameters\n\n- `email: string`\n\n### Returns\n\n- `{ data: { clerk_user_id?: string; found?: boolean; has_passkey?: boolean; is_active?: boolean; }; }`\n\n  - `data: { clerk_user_id?: string; found?: boolean; has_passkey?: boolean; is_active?: boolean; }`\n\n### Example\n\n```typescript\nimport BotShield from 'botshield-sdk';\n\nconst client = new BotShield();\n\nconst response = await client.verification.lookupUserByEmail({ email: 'dev@stainless.com' });\n\nconsole.log(response);\n```",
    "perLanguage": {
      "typescript": {
        "method": "client.verification.lookupUserByEmail",
        "example": "import BotShield from 'botshield-sdk';\n\nconst client = new BotShield({\n  apiKey: process.env['BOTSHIELD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.verification.lookupUserByEmail({ email: 'dev@stainless.com' });\n\nconsole.log(response.data);"
      },
      "http": {
        "example": "curl https://api.botshield.ai/operations/verification/lookup-user-by-email \\\n    -H \"Authorization: $BOTSHIELD_API_KEY\""
      }
    }
  },
  {
    "name": "get_status",
    "endpoint": "/verification/status",
    "httpMethod": "get",
    "summary": "Check verification status",
    "description": "Poll for verification request status. Returns signed token on completion.",
    "stainlessPath": "(resource) verification > (method) get_status",
    "qualified": "client.verification.getStatus",
    "params": [
      "request_id: string;"
    ],
    "response": "{ auth_mode?: 'linked-account' | 'private'; confidence?: number; created_at?: string; error_message?: string; expires_at?: string; found?: boolean; metadata?: object; organization_id?: string; partner_user_id?: string; presence_address?: string; request_id?: string; scope?: string; sdk_type?: 'signal' | 'presence'; signal_score?: number; signed_token?: string; status?: 'pending' | 'completed' | 'expired' | 'failed' | 'not_found'; user_email?: string; verification_token?: string; verified_at?: string; }",
    "markdown": "## get_status\n\n`client.verification.getStatus(request_id: string): { auth_mode?: 'linked-account' | 'private'; confidence?: number; created_at?: string; error_message?: string; expires_at?: string; found?: boolean; metadata?: object; organization_id?: string; partner_user_id?: string; presence_address?: string; request_id?: string; scope?: string; sdk_type?: 'signal' | 'presence'; signal_score?: number; signed_token?: string; status?: 'pending' | 'completed' | 'expired' | 'failed' | 'not_found'; user_email?: string; verification_token?: string; verified_at?: string; }`\n\n**get** `/verification/status`\n\nPoll for verification request status. Returns signed token on completion.\n\n### Parameters\n\n- `request_id: string`\n\n### Returns\n\n- `{ auth_mode?: 'linked-account' | 'private'; confidence?: number; created_at?: string; error_message?: string; expires_at?: string; found?: boolean; metadata?: object; organization_id?: string; partner_user_id?: string; presence_address?: string; request_id?: string; scope?: string; sdk_type?: 'signal' | 'presence'; signal_score?: number; signed_token?: string; status?: 'pending' | 'completed' | 'expired' | 'failed' | 'not_found'; user_email?: string; verification_token?: string; verified_at?: string; }`\n\n  - `auth_mode?: 'linked-account' | 'private'`\n  - `confidence?: number`\n  - `created_at?: string`\n  - `error_message?: string`\n  - `expires_at?: string`\n  - `found?: boolean`\n  - `metadata?: object`\n  - `organization_id?: string`\n  - `partner_user_id?: string`\n  - `presence_address?: string`\n  - `request_id?: string`\n  - `scope?: string`\n  - `sdk_type?: 'signal' | 'presence'`\n  - `signal_score?: number`\n  - `signed_token?: string`\n  - `status?: 'pending' | 'completed' | 'expired' | 'failed' | 'not_found'`\n  - `user_email?: string`\n  - `verification_token?: string`\n  - `verified_at?: string`\n\n### Example\n\n```typescript\nimport BotShield from 'botshield-sdk';\n\nconst client = new BotShield();\n\nconst response = await client.verification.getStatus({ request_id: 'request_id' });\n\nconsole.log(response);\n```",
    "perLanguage": {
      "typescript": {
        "method": "client.verification.getStatus",
        "example": "import BotShield from 'botshield-sdk';\n\nconst client = new BotShield({\n  apiKey: process.env['BOTSHIELD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.verification.getStatus({ request_id: 'request_id' });\n\nconsole.log(response.confidence);"
      },
      "http": {
        "example": "curl https://api.botshield.ai/operations/verification/status \\\n    -H \"Authorization: $BOTSHIELD_API_KEY\""
      }
    }
  }
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    "language": "typescript",
    "content": "# Bot Shield TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/botshield-sdk.svg?label=npm%20(stable))](https://npmjs.org/package/botshield-sdk) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/botshield-sdk)\n\nThis library provides convenient access to the Bot Shield REST API from server-side TypeScript or JavaScript.\n\n\n\nThe REST API documentation can be found on [docs.botshield.ai](https://docs.botshield.ai). The full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Bot Shield MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=botshield-sdk-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImJvdHNoaWVsZC1zZGstbWNwIl0sImVudiI6eyJCT1RTSElFTERfQVBJX0tFWSI6Ik15IEFQSSBLZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22botshield-sdk-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22botshield-sdk-mcp%22%5D%2C%22env%22%3A%7B%22BOTSHIELD_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install botshield-sdk\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport BotShield from 'botshield-sdk';\n\nconst client = new BotShield({\n  apiKey: process.env['BOTSHIELD_API_KEY'], // This is the default and can be omitted\n  environment: 'development', // defaults to 'production'\n});\n\nconst response = await client.sdk.createVerificationLink({\n  return_url: 'https://yourapp.com/verified',\n  user_email: 'user@example.com',\n});\n\nconsole.log(response.data);\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport BotShield from 'botshield-sdk';\n\nconst client = new BotShield({\n  apiKey: process.env['BOTSHIELD_API_KEY'], // This is the default and can be omitted\n  environment: 'development', // defaults to 'production'\n});\n\nconst params: BotShield.SDKCreateVerificationLinkParams = {\n  metadata: { cart_id: 'cart_123', action: 'checkout' },\n  mode: 'linked-account',\n  return_url: 'https://yourapp.com/verified',\n  user_email: 'user@example.com',\n};\nconst response: BotShield.SDKCreateVerificationLinkResponse =\n  await client.sdk.createVerificationLink(params);\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst response = await client.sdk\n  .createVerificationLink({\n    metadata: { cart_id: 'cart_123', action: 'checkout' },\n    mode: 'linked-account',\n    return_url: 'https://yourapp.com/verified',\n    user_email: 'user@example.com',\n  })\n  .catch(async (err) => {\n    if (err instanceof BotShield.APIError) {\n      console.log(err.status); // 400\n      console.log(err.name); // BadRequestError\n      console.log(err.headers); // {server: 'nginx', ...}\n    } else {\n      throw err;\n    }\n  });\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new BotShield({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.sdk.createVerificationLink({\n  metadata: { cart_id: 'cart_123', action: 'checkout' },\n  mode: 'linked-account',\n  return_url: 'https://yourapp.com/verified',\n  user_email: 'user@example.com',\n}, {\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new BotShield({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.sdk.createVerificationLink({\n  metadata: { cart_id: 'cart_123', action: 'checkout' },\n  mode: 'linked-account',\n  return_url: 'https://yourapp.com/verified',\n  user_email: 'user@example.com',\n}, {\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new BotShield();\n\nconst response = await client.sdk\n  .createVerificationLink({\n    metadata: { cart_id: 'cart_123', action: 'checkout' },\n    mode: 'linked-account',\n    return_url: 'https://yourapp.com/verified',\n    user_email: 'user@example.com',\n  })\n  .asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: response, response: raw } = await client.sdk\n  .createVerificationLink({\n    metadata: { cart_id: 'cart_123', action: 'checkout' },\n    mode: 'linked-account',\n    return_url: 'https://yourapp.com/verified',\n    user_email: 'user@example.com',\n  })\n  .withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(response.data);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `BOT_SHIELD_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport BotShield from 'botshield-sdk';\n\nconst client = new BotShield({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport BotShield from 'botshield-sdk';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new BotShield({\n  logger: logger.child({ name: 'BotShield' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.sdk.createVerificationLink({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport BotShield from 'botshield-sdk';\nimport fetch from 'my-fetch';\n\nconst client = new BotShield({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport BotShield from 'botshield-sdk';\n\nconst client = new BotShield({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport BotShield from 'botshield-sdk';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new BotShield({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport BotShield from 'botshield-sdk';\n\nconst client = new BotShield({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport BotShield from 'npm:botshield-sdk';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new BotShield({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/Bot-Shield/botshield-sdk-typescript/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n"
  }
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const {
      query,
      language = 'typescript',
      detail = 'default',
      maxResults = 5,
      maxLength = 100_000,
    } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex.search(query).map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex.search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
