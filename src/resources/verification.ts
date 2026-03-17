// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Verification status and lookup
 */
export class Verification extends APIResource {
  /**
   * Poll for the current status of a verification request. Returns the full
   * verification event including token on completion.
   */
  getStatus(
    query: VerificationGetStatusParams,
    options?: RequestOptions,
  ): APIPromise<VerificationGetStatusResponse> {
    return this._client.get('/verification/status', { query, ...options });
  }

  /**
   * Check whether a user exists in BotShield and has a registered passkey before
   * initiating verification.
   */
  lookupUserByEmail(
    query: VerificationLookupUserByEmailParams,
    options?: RequestOptions,
  ): APIPromise<VerificationLookupUserByEmailResponse> {
    return this._client.get('/verification/lookup-user-by-email', { query, ...options });
  }
}

export interface VerificationGetStatusResponse {
  found: boolean;

  status: 'pending' | 'completed' | 'expired' | 'failed' | 'not_found';

  auth_mode?: 'email' | 'anonymous';

  created_at?: string;

  error_message?: string;

  expires_at?: string;

  metadata?: { [key: string]: unknown };

  organization_id?: string;

  partner_user_id?: string;

  presence_address?: string;

  request_id?: string;

  scope?: string;

  sdk_type?: 'signal' | 'presence';

  /**
   * Signed JWT verification receipt (present when status=completed)
   */
  signed_token?: string;

  user_email?: string;

  /**
   * Legacy alias for signed_token
   */
  verification_token?: string;

  verified_at?: string;
}

export interface VerificationLookupUserByEmailResponse {
  data: VerificationLookupUserByEmailResponse.Data;
}

export namespace VerificationLookupUserByEmailResponse {
  export interface Data {
    /**
     * Whether a user with this email exists in Clerk
     */
    found: boolean;

    /**
     * Whether the user has registered passkeys
     */
    has_passkey: boolean;

    /**
     * Whether the user account is active (not banned/deleted)
     */
    is_active: boolean;

    /**
     * Clerk user ID (only present if found)
     */
    clerk_user_id?: string;
  }
}

export interface VerificationGetStatusParams {
  /**
   * The verification request ID from create-verification-link
   */
  request_id: string;
}

export interface VerificationLookupUserByEmailParams {
  /**
   * The user's email address
   */
  email: string;
}

export declare namespace Verification {
  export {
    type VerificationGetStatusResponse as VerificationGetStatusResponse,
    type VerificationLookupUserByEmailResponse as VerificationLookupUserByEmailResponse,
    type VerificationGetStatusParams as VerificationGetStatusParams,
    type VerificationLookupUserByEmailParams as VerificationLookupUserByEmailParams,
  };
}
