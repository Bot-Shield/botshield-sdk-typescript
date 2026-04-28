// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Core SDK operations — session management, verification, token validation, and Signal Pixel scoring
 */
export class SDK extends APIResource {
  /**
   * Creates a short-lived anchor grant token (5 minutes) from an API token or site
   * key. Use this to get a token before creating verification links.
   */
  createSession(
    body: SDKCreateSessionParams,
    options?: RequestOptions,
  ): APIPromise<SDKCreateSessionResponse> {
    return this._client.post('/sdk/create-session', { body, ...options });
  }

  /**
   * Creates a verification request with deep link, web URL, and QR code. Requires an
   * anchor grant token from create-session.
   */
  createVerificationLink(
    body: SDKCreateVerificationLinkParams,
    options?: RequestOptions,
  ): APIPromise<SDKCreateVerificationLinkResponse> {
    return this._client.post('/sdk/create-verification-link', { body, ...options });
  }

  /**
   * Returns enabled integrations (Turnstile, etc.) for a site key. Public config
   * only — secret keys never exposed.
   */
  getPartnerConfig(
    query: SDKGetPartnerConfigParams,
    options?: RequestOptions,
  ): APIPromise<SDKGetPartnerConfigResponse> {
    return this._client.get('/sdk/partner-config', { query, ...options });
  }

  /**
   * Revoke an Anchor Grant Window token
   */
  logout(body: SDKLogoutParams, options?: RequestOptions): APIPromise<SDKLogoutResponse> {
    return this._client.post('/sdk/logout', { body, ...options });
  }

  /**
   * Soft-expires a pending verification for a scope and user. Use when
   * create-verification-link returns 409.
   */
  revokeVerification(
    body: SDKRevokeVerificationParams,
    options?: RequestOptions,
  ): APIPromise<SDKRevokeVerificationResponse> {
    return this._client.post('/sdk/revoke-verification', { body, ...options });
  }

  /**
   * Stores a behavioral fingerprint score server-side and returns an opaque
   * signal*token (bs_sig*...). The client-side score can be spoofed — the
   * signal_token maps to the real score in BotShield's database.
   */
  storeSignal(body: SDKStoreSignalParams, options?: RequestOptions): APIPromise<SDKStoreSignalResponse> {
    return this._client.post('/sdk/store-signal', { body, ...options });
  }

  /**
   * Validates a signal_token and returns the real server-side bot score. One-time
   * use, 10-minute expiry. This is the tamper-proof check.
   */
  validateSignal(
    body: SDKValidateSignalParams,
    options?: RequestOptions,
  ): APIPromise<SDKValidateSignalResponse> {
    return this._client.post('/sdk/validate-signal', { body, ...options });
  }

  /**
   * Validates a signed JWT verification receipt. This is the primary server-side
   * check. Optionally include signal_token for combined confidence scoring with
   * Signal Pixel + Turnstile + passkey results.
   */
  verifyToken(body: SDKVerifyTokenParams, options?: RequestOptions): APIPromise<SDKVerifyTokenResponse> {
    return this._client.post('/sdk/verify-token', { body, ...options });
  }
}

export interface SDKCreateSessionResponse {
  data: SDKCreateSessionResponse.Data;
}

export namespace SDKCreateSessionResponse {
  export interface Data {
    anchor_grant_expires_at: string;

    anchor_grant_expires_in_seconds: number;

    /**
     * Canonical grant token (Bearer bss\_\*)
     */
    anchor_grant_token: string;

    expires_at: string;

    expires_in_seconds: number;

    organization: Data.Organization;

    /**
     * Legacy alias (backward compatibility)
     */
    session_token: string;
  }

  export namespace Data {
    export interface Organization {
      id: string;

      environment: string;
    }
  }
}

export interface SDKCreateVerificationLinkResponse {
  data: SDKCreateVerificationLinkResponse.Data;
}

export namespace SDKCreateVerificationLinkResponse {
  export interface Data {
    deep_link: string;

    expires_at: string;

    qr_code_url: string;

    request_id: string;

    web_url: string;

    auth_mode?: 'linked-account' | 'private';

    organization?: Data.Organization;

    scope?: string;

    sdk_type?: 'signal' | 'presence';
  }

  export namespace Data {
    export interface Organization {
      id?: string;
    }
  }
}

export interface SDKGetPartnerConfigResponse {
  environment?: 'test' | 'live';

  integrations?: { [key: string]: SDKGetPartnerConfigResponse.Integrations };
}

export namespace SDKGetPartnerConfigResponse {
  export interface Integrations {
    config?: unknown;

    enabled?: boolean;

    site_key?: string;
  }
}

export interface SDKLogoutResponse {
  message?: string;

  revoked_at?: string;

  success?: boolean;

  token_found?: boolean;
}

export interface SDKRevokeVerificationResponse {
  data: SDKRevokeVerificationResponse.Data;
}

export namespace SDKRevokeVerificationResponse {
  export interface Data {
    message?: string;

    revoked_count?: number;

    success?: boolean;
  }
}

export interface SDKStoreSignalResponse {
  expires_at?: string;

  /**
   * Opaque tamper-proof token (bs*sig*...)
   */
  signal_token?: string;
}

export interface SDKValidateSignalResponse {
  client_score?: number;

  country?: string;

  created_at?: string;

  edge_score?: number;

  fp_hash?: string;

  reason?: string;

  score?: number;

  site_key?: string;

  valid?: boolean;
}

export interface SDKVerifyTokenResponse {
  claims?: SDKVerifyTokenResponse.Claims;

  /**
   * Combined confidence (passkey + signals + integrations)
   */
  confidence?: number;

  reason?: string;

  signals?: SDKVerifyTokenResponse.Signals;

  valid?: boolean;
}

export namespace SDKVerifyTokenResponse {
  export interface Claims {
    auth_mode?: 'linked-account' | 'private';

    botshield_user_id?: string;

    expires_at?: number;

    issued_at?: number;

    organization_id?: string;

    partner_user_id?: string;

    request_id?: string;

    timestamp?: string;

    user_email?: string;

    verified?: boolean;
  }

  export interface Signals {
    /**
     * Signal Pixel score (0-100)
     */
    botshield_score?: number;

    passkey?: Signals.Passkey;

    turnstile?: Signals.Turnstile;
  }

  export namespace Signals {
    export interface Passkey {
      verified?: boolean;
    }

    export interface Turnstile {
      success?: boolean;
    }
  }
}

export interface SDKCreateSessionParams {
  metadata?: { [key: string]: unknown };

  /**
   * Your internal user identifier for correlation
   */
  partner_user_id?: string;
}

export interface SDKCreateVerificationLinkParams {
  /**
   * Returning user ID to skip onboarding
   */
  botshield_user_id?: string;

  metadata?: { [key: string]: unknown };

  /**
   * linked-account = OAuth+passkey, private = direct WebAuthn (no PII)
   */
  mode?: 'linked-account' | 'private';

  return_url?: string;

  scope?: string;

  sdk_type?: 'signal' | 'presence';

  /**
   * Tamper-proof Signal Pixel token (bs*sig*...) for server-side score correlation
   */
  signal_token?: string;

  user_email?: string;

  webhook_url?: string;
}

export interface SDKGetPartnerConfigParams {
  site_key: string;
}

export interface SDKLogoutParams {
  /**
   * The anchor grant token (bss\_\*) to revoke
   */
  session_token: string;
}

export interface SDKRevokeVerificationParams {
  scope: string;

  partner_user_id?: string;

  user_email?: string;
}

export interface SDKStoreSignalParams {
  score: number;

  site_key: string;

  client_score?: number;

  country?: string;

  edge_score?: number;

  fp_hash?: string;

  ip_hash?: string;

  signals?: unknown;

  ua_hash?: string;
}

export interface SDKValidateSignalParams {
  signal_token: string;

  verification_event_id?: string;
}

export interface SDKVerifyTokenParams {
  /**
   * JWT verification receipt
   */
  token: string;

  /**
   * Optional Signal Pixel token for combined confidence
   */
  signal_token?: string;
}

export declare namespace SDK {
  export {
    type SDKCreateSessionResponse as SDKCreateSessionResponse,
    type SDKCreateVerificationLinkResponse as SDKCreateVerificationLinkResponse,
    type SDKGetPartnerConfigResponse as SDKGetPartnerConfigResponse,
    type SDKLogoutResponse as SDKLogoutResponse,
    type SDKRevokeVerificationResponse as SDKRevokeVerificationResponse,
    type SDKStoreSignalResponse as SDKStoreSignalResponse,
    type SDKValidateSignalResponse as SDKValidateSignalResponse,
    type SDKVerifyTokenResponse as SDKVerifyTokenResponse,
    type SDKCreateSessionParams as SDKCreateSessionParams,
    type SDKCreateVerificationLinkParams as SDKCreateVerificationLinkParams,
    type SDKGetPartnerConfigParams as SDKGetPartnerConfigParams,
    type SDKLogoutParams as SDKLogoutParams,
    type SDKRevokeVerificationParams as SDKRevokeVerificationParams,
    type SDKStoreSignalParams as SDKStoreSignalParams,
    type SDKValidateSignalParams as SDKValidateSignalParams,
    type SDKVerifyTokenParams as SDKVerifyTokenParams,
  };
}
