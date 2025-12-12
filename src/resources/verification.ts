// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Verification extends APIResource {
  /**
   * Check verification status
   */
  getStatus(
    query: VerificationGetStatusParams,
    options?: RequestOptions,
  ): APIPromise<VerificationGetStatusResponse> {
    return this._client.get('/verification/status', { query, ...options });
  }

  /**
   * Look up user by email
   */
  lookupUserByEmail(
    query: VerificationLookupUserByEmailParams,
    options?: RequestOptions,
  ): APIPromise<VerificationLookupUserByEmailResponse> {
    return this._client.get('/verification/lookup-user-by-email', { query, ...options });
  }
}

export interface VerificationGetStatusResponse {
  data: VerificationGetStatusResponse.UnionMember0 | VerificationGetStatusResponse.UnionMember1;
}

export namespace VerificationGetStatusResponse {
  export interface UnionMember0 {
    created_at: string;

    expires_at: string;

    found: true;

    organization_id: string;

    request_id: string;

    /**
     * Verification status
     */
    status: 'pending' | 'verified' | 'failed' | 'expired' | 'cancelled';

    error_message?: string | null;

    metadata?: { [key: string]: unknown } | null;

    partner_user_id?: string | null;

    user_email?: string | null;

    verified_at?: string | null;
  }

  export interface UnionMember1 {
    found: false;

    /**
     * Error message
     */
    message: string;

    status: 'error';
  }
}

export interface VerificationLookupUserByEmailResponse {
  data:
    | VerificationLookupUserByEmailResponse.UnionMember0
    | VerificationLookupUserByEmailResponse.UnionMember1;
}

export namespace VerificationLookupUserByEmailResponse {
  export interface UnionMember0 {
    /**
     * Clerk user ID
     */
    clerk_user_id: string;

    /**
     * User found
     */
    found: true;

    /**
     * Whether user has registered passkey
     */
    has_passkey: boolean;

    /**
     * Whether user account is active
     */
    is_active: boolean;
  }

  export interface UnionMember1 {
    /**
     * User not found
     */
    found: false;

    has_passkey: false;

    is_active: false;
  }
}

export interface VerificationGetStatusParams {
  /**
   * Verification request ID
   */
  request_id: string;
}

export interface VerificationLookupUserByEmailParams {
  /**
   * Email address to look up
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
