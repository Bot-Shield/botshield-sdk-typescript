// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Verification extends APIResource {
  /**
   * Check verification status
   */
  getStatus(options?: RequestOptions): APIPromise<VerificationGetStatusResponse> {
    return this._client.get('/verification/status', options);
  }

  /**
   * Look up user by email
   */
  lookupUserByEmail(options?: RequestOptions): APIPromise<VerificationLookupUserByEmailResponse> {
    return this._client.get('/verification/lookup-user-by-email', options);
  }
}

export interface VerificationGetStatusResponse {
  data: unknown;
}

export interface VerificationLookupUserByEmailResponse {
  data: unknown;
}

export declare namespace Verification {
  export {
    type VerificationGetStatusResponse as VerificationGetStatusResponse,
    type VerificationLookupUserByEmailResponse as VerificationLookupUserByEmailResponse,
  };
}
