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
}

export interface SDKCreateSessionResponse {
  data: SDKCreateSessionResponse.Data | SDKCreateSessionResponse.Error;
}

export namespace SDKCreateSessionResponse {
  export interface Data {
    data: Data.Data;
  }

  export namespace Data {
    export interface Data {
      /**
       * ISO 8601 expiration timestamp
       */
      expires_at: string;

      /**
       * Seconds until expiration
       */
      expires_in_seconds: number;

      organization: Data.Organization;

      /**
       * Session token for verification
       */
      session_token: string;
    }

    export namespace Data {
      export interface Organization {
        /**
         * Organization ID
         */
        id: string;

        /**
         * Environment
         */
        environment: 'development' | 'production';
      }
    }
  }

  export interface Error {
    error: Error.Error;
  }

  export namespace Error {
    export interface Error {
      /**
       * Error message
       */
      message: string;

      statusCode: number;
    }
  }
}

export interface SDKCreateVerificationLinkResponse {
  data: SDKCreateVerificationLinkResponse.Data | SDKCreateVerificationLinkResponse.Error;
}

export namespace SDKCreateVerificationLinkResponse {
  export interface Data {
    data: Data.Data;
  }

  export namespace Data {
    export interface Data {
      /**
       * Deep link for mobile app
       */
      deep_link: string;

      /**
       * ISO 8601 expiration timestamp
       */
      expires_at: string;

      organization: Data.Organization;

      /**
       * QR code image URL
       */
      qr_code_url: string;

      /**
       * Unique verification request ID
       */
      request_id: string;

      /**
       * Web URL for verification
       */
      web_url: string;
    }

    export namespace Data {
      export interface Organization {
        /**
         * Organization ID
         */
        id: string;
      }
    }
  }

  export interface Error {
    error: Error.Error;
  }

  export namespace Error {
    export interface Error {
      /**
       * Error message
       */
      message: string;

      statusCode: number;
    }
  }
}

export interface SDKCreateSessionParams {
  /**
   * Custom metadata to attach to session
   */
  metadata?: { [key: string]: unknown };

  /**
   * Partner's user identifier
   */
  partner_user_id?: string;
}

export interface SDKCreateVerificationLinkParams {
  /**
   * Custom metadata
   */
  metadata?: { [key: string]: unknown };

  /**
   * URL to return to after verification
   */
  return_url?: string;

  /**
   * User's email address (optional, for tracking)
   */
  user_email?: string;
}

export declare namespace SDK {
  export {
    type SDKCreateSessionResponse as SDKCreateSessionResponse,
    type SDKCreateVerificationLinkResponse as SDKCreateVerificationLinkResponse,
    type SDKCreateSessionParams as SDKCreateSessionParams,
    type SDKCreateVerificationLinkParams as SDKCreateVerificationLinkParams,
  };
}
