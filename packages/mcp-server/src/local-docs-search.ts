// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

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
    name: 'create_session',
    endpoint: '/sdk/create-session',
    httpMethod: 'post',
    summary: 'Create an Anchor Grant Window',
    description:
      'Creates a short-lived anchor grant token (5 minutes) from an API token or site key. Use this to get a token before creating verification links.',
    stainlessPath: '(resource) sdk > (method) create_session',
    qualified: 'client.sdk.createSession',
    params: ['metadata?: object;', 'partner_user_id?: string;'],
    response:
      '{ data: { anchor_grant_expires_at: string; anchor_grant_expires_in_seconds: number; anchor_grant_token: string; expires_at: string; expires_in_seconds: number; organization: { id: string; environment: string; }; session_token: string; }; }',
    markdown:
      "## create_session\n\n`client.sdk.createSession(metadata?: object, partner_user_id?: string): { data: object; }`\n\n**post** `/sdk/create-session`\n\nCreates a short-lived anchor grant token (5 minutes) from an API token or site key. Use this to get a token before creating verification links.\n\n### Parameters\n\n- `metadata?: object`\n\n- `partner_user_id?: string`\n  Your internal user identifier for correlation\n\n### Returns\n\n- `{ data: { anchor_grant_expires_at: string; anchor_grant_expires_in_seconds: number; anchor_grant_token: string; expires_at: string; expires_in_seconds: number; organization: { id: string; environment: string; }; session_token: string; }; }`\n\n  - `data: { anchor_grant_expires_at: string; anchor_grant_expires_in_seconds: number; anchor_grant_token: string; expires_at: string; expires_in_seconds: number; organization: { id: string; environment: string; }; session_token: string; }`\n\n### Example\n\n```typescript\nimport BotShield from 'botshield-sdk';\n\nconst client = new BotShield();\n\nconst response = await client.sdk.createSession();\n\nconsole.log(response);\n```",
  },
  {
    name: 'create_verification_link',
    endpoint: '/sdk/create-verification-link',
    httpMethod: 'post',
    summary: 'Create a verification request',
    description:
      'Creates a verification request with deep link, web URL, and QR code. Requires an anchor grant token from create-session.',
    stainlessPath: '(resource) sdk > (method) create_verification_link',
    qualified: 'client.sdk.createVerificationLink',
    params: [
      'botshield_user_id?: string;',
      'metadata?: object;',
      "mode?: 'linked-account' | 'private';",
      'return_url?: string;',
      'scope?: string;',
      "sdk_type?: 'signal' | 'presence';",
      'signal_token?: string;',
      'user_email?: string;',
      'webhook_url?: string;',
    ],
    response:
      "{ data: { deep_link: string; expires_at: string; qr_code_url: string; request_id: string; web_url: string; auth_mode?: 'linked-account' | 'private'; organization?: { id?: string; }; scope?: string; sdk_type?: 'signal' | 'presence'; }; }",
    markdown:
      "## create_verification_link\n\n`client.sdk.createVerificationLink(botshield_user_id?: string, metadata?: object, mode?: 'linked-account' | 'private', return_url?: string, scope?: string, sdk_type?: 'signal' | 'presence', signal_token?: string, user_email?: string, webhook_url?: string): { data: object; }`\n\n**post** `/sdk/create-verification-link`\n\nCreates a verification request with deep link, web URL, and QR code. Requires an anchor grant token from create-session.\n\n### Parameters\n\n- `botshield_user_id?: string`\n  Returning user ID to skip onboarding\n\n- `metadata?: object`\n\n- `mode?: 'linked-account' | 'private'`\n  linked-account = OAuth+passkey, private = direct WebAuthn (no PII)\n\n- `return_url?: string`\n\n- `scope?: string`\n\n- `sdk_type?: 'signal' | 'presence'`\n\n- `signal_token?: string`\n  Tamper-proof Signal Pixel token (bs_sig_...) for server-side score correlation\n\n- `user_email?: string`\n\n- `webhook_url?: string`\n\n### Returns\n\n- `{ data: { deep_link: string; expires_at: string; qr_code_url: string; request_id: string; web_url: string; auth_mode?: 'linked-account' | 'private'; organization?: { id?: string; }; scope?: string; sdk_type?: 'signal' | 'presence'; }; }`\n\n  - `data: { deep_link: string; expires_at: string; qr_code_url: string; request_id: string; web_url: string; auth_mode?: 'linked-account' | 'private'; organization?: { id?: string; }; scope?: string; sdk_type?: 'signal' | 'presence'; }`\n\n### Example\n\n```typescript\nimport BotShield from 'botshield-sdk';\n\nconst client = new BotShield();\n\nconst response = await client.sdk.createVerificationLink();\n\nconsole.log(response);\n```",
  },
  {
    name: 'get_partner_config',
    endpoint: '/sdk/partner-config',
    httpMethod: 'get',
    summary: 'Get partner configuration',
    description:
      'Returns enabled integrations (Turnstile, etc.) for a site key. Public config only — secret keys never exposed.',
    stainlessPath: '(resource) sdk > (method) get_partner_config',
    qualified: 'client.sdk.getPartnerConfig',
    params: ['site_key: string;'],
    response: "{ environment?: 'test' | 'live'; integrations?: object; }",
    markdown:
      "## get_partner_config\n\n`client.sdk.getPartnerConfig(site_key: string): { environment?: 'test' | 'live'; integrations?: object; }`\n\n**get** `/sdk/partner-config`\n\nReturns enabled integrations (Turnstile, etc.) for a site key. Public config only — secret keys never exposed.\n\n### Parameters\n\n- `site_key: string`\n\n### Returns\n\n- `{ environment?: 'test' | 'live'; integrations?: object; }`\n\n  - `environment?: 'test' | 'live'`\n  - `integrations?: object`\n\n### Example\n\n```typescript\nimport BotShield from 'botshield-sdk';\n\nconst client = new BotShield();\n\nconst response = await client.sdk.getPartnerConfig({ site_key: 'site_key' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'logout',
    endpoint: '/sdk/logout',
    httpMethod: 'post',
    summary: 'Revoke an Anchor Grant Window token',
    description: 'Revoke an Anchor Grant Window token',
    stainlessPath: '(resource) sdk > (method) logout',
    qualified: 'client.sdk.logout',
    params: ['session_token: string;'],
    response: '{ message?: string; revoked_at?: string; success?: boolean; token_found?: boolean; }',
    markdown:
      "## logout\n\n`client.sdk.logout(session_token: string): { message?: string; revoked_at?: string; success?: boolean; token_found?: boolean; }`\n\n**post** `/sdk/logout`\n\nRevoke an Anchor Grant Window token\n\n### Parameters\n\n- `session_token: string`\n  The anchor grant token (bss_*) to revoke\n\n### Returns\n\n- `{ message?: string; revoked_at?: string; success?: boolean; token_found?: boolean; }`\n\n  - `message?: string`\n  - `revoked_at?: string`\n  - `success?: boolean`\n  - `token_found?: boolean`\n\n### Example\n\n```typescript\nimport BotShield from 'botshield-sdk';\n\nconst client = new BotShield();\n\nconst response = await client.sdk.logout({ session_token: 'session_token' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'revoke_verification',
    endpoint: '/sdk/revoke-verification',
    httpMethod: 'post',
    summary: 'Revoke a pending verification',
    description:
      'Soft-expires a pending verification for a scope and user. Use when create-verification-link returns 409.',
    stainlessPath: '(resource) sdk > (method) revoke_verification',
    qualified: 'client.sdk.revokeVerification',
    params: ['scope: string;', 'partner_user_id?: string;', 'user_email?: string;'],
    response: '{ data: { message?: string; revoked_count?: number; success?: boolean; }; }',
    markdown:
      "## revoke_verification\n\n`client.sdk.revokeVerification(scope: string, partner_user_id?: string, user_email?: string): { data: object; }`\n\n**post** `/sdk/revoke-verification`\n\nSoft-expires a pending verification for a scope and user. Use when create-verification-link returns 409.\n\n### Parameters\n\n- `scope: string`\n\n- `partner_user_id?: string`\n\n- `user_email?: string`\n\n### Returns\n\n- `{ data: { message?: string; revoked_count?: number; success?: boolean; }; }`\n\n  - `data: { message?: string; revoked_count?: number; success?: boolean; }`\n\n### Example\n\n```typescript\nimport BotShield from 'botshield-sdk';\n\nconst client = new BotShield();\n\nconst response = await client.sdk.revokeVerification({ scope: 'scope' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'store_signal',
    endpoint: '/sdk/store-signal',
    httpMethod: 'post',
    summary: 'Store a Signal Pixel bot score',
    description:
      "Stores a behavioral fingerprint score server-side and returns an opaque signal_token (bs_sig_...). The client-side score can be spoofed — the signal_token maps to the real score in BotShield's database.",
    stainlessPath: '(resource) sdk > (method) store_signal',
    qualified: 'client.sdk.storeSignal',
    params: [
      'score: number;',
      'site_key: string;',
      'client_score?: number;',
      'country?: string;',
      'edge_score?: number;',
      'fp_hash?: string;',
      'ip_hash?: string;',
      'signals?: object;',
      'ua_hash?: string;',
    ],
    response: '{ expires_at?: string; signal_token?: string; }',
    markdown:
      "## store_signal\n\n`client.sdk.storeSignal(score: number, site_key: string, client_score?: number, country?: string, edge_score?: number, fp_hash?: string, ip_hash?: string, signals?: object, ua_hash?: string): { expires_at?: string; signal_token?: string; }`\n\n**post** `/sdk/store-signal`\n\nStores a behavioral fingerprint score server-side and returns an opaque signal_token (bs_sig_...). The client-side score can be spoofed — the signal_token maps to the real score in BotShield's database.\n\n### Parameters\n\n- `score: number`\n\n- `site_key: string`\n\n- `client_score?: number`\n\n- `country?: string`\n\n- `edge_score?: number`\n\n- `fp_hash?: string`\n\n- `ip_hash?: string`\n\n- `signals?: object`\n\n- `ua_hash?: string`\n\n### Returns\n\n- `{ expires_at?: string; signal_token?: string; }`\n\n  - `expires_at?: string`\n  - `signal_token?: string`\n\n### Example\n\n```typescript\nimport BotShield from 'botshield-sdk';\n\nconst client = new BotShield();\n\nconst response = await client.sdk.storeSignal({ score: 0, site_key: 'site_key' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'validate_signal',
    endpoint: '/sdk/validate-signal',
    httpMethod: 'post',
    summary: 'Validate a signal token',
    description:
      'Validates a signal_token and returns the real server-side bot score. One-time use, 10-minute expiry. This is the tamper-proof check.',
    stainlessPath: '(resource) sdk > (method) validate_signal',
    qualified: 'client.sdk.validateSignal',
    params: ['signal_token: string;', 'verification_event_id?: string;'],
    response:
      '{ client_score?: number; country?: string; created_at?: string; edge_score?: number; fp_hash?: string; reason?: string; score?: number; site_key?: string; valid?: boolean; }',
    markdown:
      "## validate_signal\n\n`client.sdk.validateSignal(signal_token: string, verification_event_id?: string): { client_score?: number; country?: string; created_at?: string; edge_score?: number; fp_hash?: string; reason?: string; score?: number; site_key?: string; valid?: boolean; }`\n\n**post** `/sdk/validate-signal`\n\nValidates a signal_token and returns the real server-side bot score. One-time use, 10-minute expiry. This is the tamper-proof check.\n\n### Parameters\n\n- `signal_token: string`\n\n- `verification_event_id?: string`\n\n### Returns\n\n- `{ client_score?: number; country?: string; created_at?: string; edge_score?: number; fp_hash?: string; reason?: string; score?: number; site_key?: string; valid?: boolean; }`\n\n  - `client_score?: number`\n  - `country?: string`\n  - `created_at?: string`\n  - `edge_score?: number`\n  - `fp_hash?: string`\n  - `reason?: string`\n  - `score?: number`\n  - `site_key?: string`\n  - `valid?: boolean`\n\n### Example\n\n```typescript\nimport BotShield from 'botshield-sdk';\n\nconst client = new BotShield();\n\nconst response = await client.sdk.validateSignal({ signal_token: 'signal_token' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'verify_token',
    endpoint: '/sdk/verify-token',
    httpMethod: 'post',
    summary: 'Validate a verification token',
    description:
      'Validates a signed JWT verification receipt. This is the primary server-side check. Optionally include signal_token for combined confidence scoring with Signal Pixel + Turnstile + passkey results.',
    stainlessPath: '(resource) sdk > (method) verify_token',
    qualified: 'client.sdk.verifyToken',
    params: ['token: string;', 'signal_token?: string;'],
    response:
      "{ claims?: { auth_mode?: 'linked-account' | 'private'; botshield_user_id?: string; expires_at?: number; issued_at?: number; organization_id?: string; partner_user_id?: string; request_id?: string; timestamp?: string; user_email?: string; verified?: boolean; }; confidence?: number; reason?: string; signals?: { botshield_score?: number; passkey?: { verified?: boolean; }; turnstile?: { success?: boolean; }; }; valid?: boolean; }",
    markdown:
      "## verify_token\n\n`client.sdk.verifyToken(token: string, signal_token?: string): { claims?: object; confidence?: number; reason?: string; signals?: object; valid?: boolean; }`\n\n**post** `/sdk/verify-token`\n\nValidates a signed JWT verification receipt. This is the primary server-side check. Optionally include signal_token for combined confidence scoring with Signal Pixel + Turnstile + passkey results.\n\n### Parameters\n\n- `token: string`\n  JWT verification receipt\n\n- `signal_token?: string`\n  Optional Signal Pixel token for combined confidence\n\n### Returns\n\n- `{ claims?: { auth_mode?: 'linked-account' | 'private'; botshield_user_id?: string; expires_at?: number; issued_at?: number; organization_id?: string; partner_user_id?: string; request_id?: string; timestamp?: string; user_email?: string; verified?: boolean; }; confidence?: number; reason?: string; signals?: { botshield_score?: number; passkey?: { verified?: boolean; }; turnstile?: { success?: boolean; }; }; valid?: boolean; }`\n\n  - `claims?: { auth_mode?: 'linked-account' | 'private'; botshield_user_id?: string; expires_at?: number; issued_at?: number; organization_id?: string; partner_user_id?: string; request_id?: string; timestamp?: string; user_email?: string; verified?: boolean; }`\n  - `confidence?: number`\n  - `reason?: string`\n  - `signals?: { botshield_score?: number; passkey?: { verified?: boolean; }; turnstile?: { success?: boolean; }; }`\n  - `valid?: boolean`\n\n### Example\n\n```typescript\nimport BotShield from 'botshield-sdk';\n\nconst client = new BotShield();\n\nconst response = await client.sdk.verifyToken({ token: 'token' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'get_status',
    endpoint: '/verification/status',
    httpMethod: 'get',
    summary: 'Check verification status',
    description: 'Poll for verification request status. Returns signed token on completion.',
    stainlessPath: '(resource) verification > (method) get_status',
    qualified: 'client.verification.getStatus',
    params: ['request_id: string;'],
    response:
      "{ auth_mode?: 'linked-account' | 'private'; confidence?: number; created_at?: string; error_message?: string; expires_at?: string; found?: boolean; metadata?: object; organization_id?: string; partner_user_id?: string; presence_address?: string; request_id?: string; scope?: string; sdk_type?: 'signal' | 'presence'; signal_score?: number; signed_token?: string; status?: 'pending' | 'completed' | 'expired' | 'failed' | 'not_found'; user_email?: string; verification_token?: string; verified_at?: string; }",
    markdown:
      "## get_status\n\n`client.verification.getStatus(request_id: string): { auth_mode?: 'linked-account' | 'private'; confidence?: number; created_at?: string; error_message?: string; expires_at?: string; found?: boolean; metadata?: object; organization_id?: string; partner_user_id?: string; presence_address?: string; request_id?: string; scope?: string; sdk_type?: 'signal' | 'presence'; signal_score?: number; signed_token?: string; status?: 'pending' | 'completed' | 'expired' | 'failed' | 'not_found'; user_email?: string; verification_token?: string; verified_at?: string; }`\n\n**get** `/verification/status`\n\nPoll for verification request status. Returns signed token on completion.\n\n### Parameters\n\n- `request_id: string`\n\n### Returns\n\n- `{ auth_mode?: 'linked-account' | 'private'; confidence?: number; created_at?: string; error_message?: string; expires_at?: string; found?: boolean; metadata?: object; organization_id?: string; partner_user_id?: string; presence_address?: string; request_id?: string; scope?: string; sdk_type?: 'signal' | 'presence'; signal_score?: number; signed_token?: string; status?: 'pending' | 'completed' | 'expired' | 'failed' | 'not_found'; user_email?: string; verification_token?: string; verified_at?: string; }`\n\n  - `auth_mode?: 'linked-account' | 'private'`\n  - `confidence?: number`\n  - `created_at?: string`\n  - `error_message?: string`\n  - `expires_at?: string`\n  - `found?: boolean`\n  - `metadata?: object`\n  - `organization_id?: string`\n  - `partner_user_id?: string`\n  - `presence_address?: string`\n  - `request_id?: string`\n  - `scope?: string`\n  - `sdk_type?: 'signal' | 'presence'`\n  - `signal_score?: number`\n  - `signed_token?: string`\n  - `status?: 'pending' | 'completed' | 'expired' | 'failed' | 'not_found'`\n  - `user_email?: string`\n  - `verification_token?: string`\n  - `verified_at?: string`\n\n### Example\n\n```typescript\nimport BotShield from 'botshield-sdk';\n\nconst client = new BotShield();\n\nconst response = await client.verification.getStatus({ request_id: 'request_id' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'lookup_user_by_email',
    endpoint: '/verification/lookup-user-by-email',
    httpMethod: 'get',
    summary: 'Look up user by email',
    description: 'Check whether a user exists and has a registered passkey before initiating verification.',
    stainlessPath: '(resource) verification > (method) lookup_user_by_email',
    qualified: 'client.verification.lookupUserByEmail',
    params: ['email: string;'],
    response:
      '{ data: { clerk_user_id?: string; found?: boolean; has_passkey?: boolean; is_active?: boolean; }; }',
    markdown:
      "## lookup_user_by_email\n\n`client.verification.lookupUserByEmail(email: string): { data: object; }`\n\n**get** `/verification/lookup-user-by-email`\n\nCheck whether a user exists and has a registered passkey before initiating verification.\n\n### Parameters\n\n- `email: string`\n\n### Returns\n\n- `{ data: { clerk_user_id?: string; found?: boolean; has_passkey?: boolean; is_active?: boolean; }; }`\n\n  - `data: { clerk_user_id?: string; found?: boolean; has_passkey?: boolean; is_active?: boolean; }`\n\n### Example\n\n```typescript\nimport BotShield from 'botshield-sdk';\n\nconst client = new BotShield();\n\nconst response = await client.verification.lookupUserByEmail({ email: 'dev@stainless.com' });\n\nconsole.log(response);\n```",
  },
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
    fuzzy: 0.2,
    boost: {
      name: 3,
      endpoint: 2,
      summary: 2,
      qualified: 2,
      content: 1,
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
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  // Note: Language is accepted for interface consistency with remote search, but currently has no
  // effect since this local search only supports TypeScript docs.
  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex.search(query).map((hit) => ({ ...hit, _kind: 'prose' as const }));
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
          fullResults.push({
            method: m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
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
          this.indexProse(content, file.name);
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
