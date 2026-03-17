// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * SDK integration endpoints
 */
export class SDK extends APIResource {
  /**
   * Create an Anchor Grant Window (legacy: session token)
   */
  createSession(
    body: SDKCreateSessionParams,
    options?: RequestOptions,
  ): APIPromise<SDKCreateSessionResponse> {
    return this._client.post('/sdk/create-session', { body, ...options });
  }

  /**
   * Create a verification request (scope/action-scoped)
   */
  createVerificationLink(
    body: SDKCreateVerificationLinkParams,
    options?: RequestOptions,
  ): APIPromise<SDKCreateVerificationLinkResponse> {
    return this._client.post('/sdk/create-verification-link', { body, ...options });
  }

  /**
   * Revoke an Anchor Grant Window token (legacy: logout session)
   */
  logout(body: SDKLogoutParams, options?: RequestOptions): APIPromise<SDKLogoutResponse> {
    return this._client.post('/sdk/logout', { body, ...options });
  }

  /**
   * Soft-expires an active or pending verification for a given scope and user. Use
   * this when a 409 conflict from create-verification-link indicates an existing
   * pending verification is blocking a new request.
   */
  revokeVerification(
    body: SDKRevokeVerificationParams,
    options?: RequestOptions,
  ): APIPromise<SDKRevokeVerificationResponse> {
    return this._client.post('/sdk/revoke-verification', { body, ...options });
  }

  /**
   * Validate a verification receipt (JWT) and return its claims
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
     * Canonical grant token (Bearer bss\_\*). Not an auth session.
     */
    anchor_grant_token: string;

    expires_at: string;

    expires_in_seconds: number;

    organization: Data.Organization;

    /**
     * Legacy alias of anchor_grant_token (kept for backward compatibility).
     */
    session_token: string;
  }

  export namespace Data {
    export interface Organization {
      /**
       * Clerk Organization ID (partner)
       */
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

    organization: Data.Organization;

    qr_code_url: string;

    request_id: string;

    web_url: string;

    /**
     * Auth mode used for this verification
     */
    auth_mode?: 'email' | 'anonymous';

    /**
     * Explicit action scope. Evaluated at action time.
     */
    scope?: string;

    sdk_type?: 'signal' | 'presence';
  }

  export namespace Data {
    export interface Organization {
      id: string;
    }
  }
}

export interface SDKLogoutResponse {
  success: boolean;

  message?: string;

  revoked_at?: string;

  token_found?: boolean;
}

export interface SDKRevokeVerificationResponse {
  data: SDKRevokeVerificationResponse.Data;
}

export namespace SDKRevokeVerificationResponse {
  export interface Data {
    /**
     * Number of pending verifications that were revoked
     */
    revoked_count: number;

    success: boolean;

    message?: string;
  }
}

export interface SDKVerifyTokenResponse {
  claims?: SDKVerifyTokenResponse.Claims;

  reason?: string;

  valid?: boolean;
}

export namespace SDKVerifyTokenResponse {
  export interface Claims {
    auth_mode?: 'email' | 'anonymous';

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
}

export interface SDKCreateSessionParams {
  metadata?: { [key: string]: unknown };

  partner_user_id?: string;
}

export interface SDKCreateVerificationLinkParams {
  /**
   * Returning anonymous user: pass back the botshield_user_id from a previous
   * verification to skip onboarding
   */
  botshield_user_id?: string;

  metadata?: { [key: string]: unknown };

  /**
   * Auth mode: email = Clerk OAuth+passkey, anonymous = direct WebAuthn (no PII)
   */
  mode?: 'email' | 'anonymous';

  return_url?: string;

  scope?: string;

  sdk_type?: 'signal' | 'presence';

  user_email?: string;

  webhook_url?: string;
}

export interface SDKLogoutParams {
  /**
   * Legacy field name. Provide the anchor grant token (bss\_\*).
   */
  session_token: string;
}

export interface SDKRevokeVerificationParams {
  /**
   * The scope/action name to revoke pending verifications for
   */
  scope: string;

  /**
   * Partner user ID to match. At least one of user_email or partner_user_id is
   * required.
   */
  partner_user_id?: string;

  /**
   * User email to match. At least one of user_email or partner_user_id is required.
   */
  user_email?: string;
}

export interface SDKVerifyTokenParams {
  /**
   * The JWT verification receipt to validate
   */
  token: string;
}

export declare namespace SDK {
  export {
    type SDKCreateSessionResponse as SDKCreateSessionResponse,
    type SDKCreateVerificationLinkResponse as SDKCreateVerificationLinkResponse,
    type SDKLogoutResponse as SDKLogoutResponse,
    type SDKRevokeVerificationResponse as SDKRevokeVerificationResponse,
    type SDKVerifyTokenResponse as SDKVerifyTokenResponse,
    type SDKCreateSessionParams as SDKCreateSessionParams,
    type SDKCreateVerificationLinkParams as SDKCreateVerificationLinkParams,
    type SDKLogoutParams as SDKLogoutParams,
    type SDKRevokeVerificationParams as SDKRevokeVerificationParams,
    type SDKVerifyTokenParams as SDKVerifyTokenParams,
  };
}
