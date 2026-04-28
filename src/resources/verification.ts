// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Verification status checking and user lookup
 */
export class Verification extends APIResource {
  /**
   * Poll for verification request status. Returns signed token on completion.
   */
  getStatus(
    query: VerificationGetStatusParams,
    options?: RequestOptions,
  ): APIPromise<VerificationGetStatusResponse> {
    return this._client.get('/verification/status', { query, ...options });
  }

  /**
   * Check whether a user exists and has a registered passkey before initiating
   * verification.
   */
  lookupUserByEmail(
    query: VerificationLookupUserByEmailParams,
    options?: RequestOptions,
  ): APIPromise<VerificationLookupUserByEmailResponse> {
    return this._client.get('/verification/lookup-user-by-email', { query, ...options });
  }
}

export interface VerificationGetStatusResponse {
  auth_mode?: 'linked-account' | 'private';

  confidence?: number;

  created_at?: string;

  error_message?: string;

  expires_at?: string;

  found?: boolean;

  metadata?: { [key: string]: unknown };

  organization_id?: string;

  partner_user_id?: string;

  presence_address?: string;

  request_id?: string;

  scope?: string;

  sdk_type?: 'signal' | 'presence';

  signal_score?: number;

  signed_token?: string;

  status?: 'pending' | 'completed' | 'expired' | 'failed' | 'not_found';

  user_email?: string;

  /**
   * Legacy alias
   */
  verification_token?: string;

  verified_at?: string;
}

export interface VerificationLookupUserByEmailResponse {
  data: VerificationLookupUserByEmailResponse.Data;
}

export namespace VerificationLookupUserByEmailResponse {
  export interface Data {
    clerk_user_id?: string;

    found?: boolean;

    has_passkey?: boolean;

    is_active?: boolean;
  }
}

export interface VerificationGetStatusParams {
  request_id: string;
}

export interface VerificationLookupUserByEmailParams {
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
