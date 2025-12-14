// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SDK extends APIResource {
  /**
   * Create a verification session
   */
  createSession(
    body: SDKCreateSessionParams,
    options?: RequestOptions,
  ): APIPromise<SDKCreateSessionResponse> {
    return this._client.post('/sdk/create-session', { body, ...options });
  }

  /**
   * Create a verification link
   */
  createVerificationLink(
    body: SDKCreateVerificationLinkParams,
    options?: RequestOptions,
  ): APIPromise<SDKCreateVerificationLinkResponse> {
    return this._client.post('/sdk/create-verification-link', { body, ...options });
  }

  /**
   * Logout and invalidate a session token
   */
  logout(body: SDKLogoutParams, options?: RequestOptions): APIPromise<SDKLogoutResponse> {
    return this._client.post('/sdk/logout', { body, ...options });
  }
}

export interface SDKCreateSessionResponse {
  data: unknown;
}

export interface SDKCreateVerificationLinkResponse {
  data: unknown;
}

export interface SDKLogoutResponse {
  data: unknown;
}

export interface SDKCreateSessionParams {}

export interface SDKCreateVerificationLinkParams {}

export interface SDKLogoutParams {}

export declare namespace SDK {
  export {
    type SDKCreateSessionResponse as SDKCreateSessionResponse,
    type SDKCreateVerificationLinkResponse as SDKCreateVerificationLinkResponse,
    type SDKLogoutResponse as SDKLogoutResponse,
    type SDKCreateSessionParams as SDKCreateSessionParams,
    type SDKCreateVerificationLinkParams as SDKCreateVerificationLinkParams,
    type SDKLogoutParams as SDKLogoutParams,
  };
}
