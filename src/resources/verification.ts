// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Verification extends APIResource {
  getStatus(
    query: VerificationGetStatusParams,
    options?: RequestOptions,
  ): APIPromise<VerificationGetStatusResponse> {
    return this._client.get('/verification/status', { query, ...options });
  }

  lookupUserByEmail(
    query: VerificationLookupUserByEmailParams,
    options?: RequestOptions,
  ): APIPromise<VerificationLookupUserByEmailResponse> {
    return this._client.get('/verification/lookup-user-by-email', { query, ...options });
  }
}

export interface VerificationGetStatusResponse {
  data?: VerificationGetStatusResponse.UnionMember0 | VerificationGetStatusResponse.UnionMember1;
}

export namespace VerificationGetStatusResponse {
  export interface UnionMember0 {
    created_at: unknown;

    error_message: unknown;

    expires_at: unknown;

    found: boolean;

    metadata: unknown;

    organization_id: unknown;

    partner_user_id: unknown;

    request_id: unknown;

    status: unknown;

    user_email: unknown;

    verified_at: unknown;

    message?: unknown;
  }

  export interface UnionMember1 {
    found: boolean;

    message: unknown;

    status: string;

    created_at?: unknown;

    error_message?: unknown;

    expires_at?: unknown;

    metadata?: unknown;

    organization_id?: unknown;

    partner_user_id?: unknown;

    request_id?: unknown;

    user_email?: unknown;

    verified_at?: unknown;
  }
}

export interface VerificationLookupUserByEmailResponse {
  data?:
    | VerificationLookupUserByEmailResponse.UnionMember0
    | VerificationLookupUserByEmailResponse.UnionMember1;
}

export namespace VerificationLookupUserByEmailResponse {
  export interface UnionMember0 {
    found: boolean;

    has_passkey: boolean;

    is_active: boolean;

    clerk_user_id?: unknown;
  }

  export interface UnionMember1 {
    clerk_user_id: string;

    found: boolean;

    has_passkey: boolean;

    is_active: boolean;
  }
}

export interface VerificationGetStatusParams {
  /**
   * Type: string
   */
  request_id: string;
}

export interface VerificationLookupUserByEmailParams {
  /**
   * Type: string
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
