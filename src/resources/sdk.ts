// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SDK extends APIResource {
  createSession(
    body: SDKCreateSessionParams,
    options?: RequestOptions,
  ): APIPromise<SDKCreateSessionResponse> {
    return this._client.post('/sdk/create-session', { body, ...options });
  }

  createVerificationLink(
    body: SDKCreateVerificationLinkParams,
    options?: RequestOptions,
  ): APIPromise<SDKCreateVerificationLinkResponse> {
    return this._client.post('/sdk/create-verification-link', { body, ...options });
  }
}

export interface SDKCreateSessionResponse {
  data?: SDKCreateSessionResponse.UnionMember0 | SDKCreateSessionResponse.UnionMember1;
}

export namespace SDKCreateSessionResponse {
  export interface UnionMember0 {
    data: UnionMember0.Data;

    error?: unknown;
  }

  export namespace UnionMember0 {
    export interface Data {
      expires_at: string;

      expires_in_seconds: number;

      organization: Data.Organization;

      session_token: string;
    }

    export namespace Data {
      export interface Organization {
        id: string;

        environment: string;
      }
    }
  }

  export interface UnionMember1 {
    error: UnionMember1.Error;

    data?: unknown;
  }

  export namespace UnionMember1 {
    export interface Error {
      message: unknown;

      statusCode: number;
    }
  }
}

export interface SDKCreateVerificationLinkResponse {
  data?: SDKCreateVerificationLinkResponse.UnionMember0 | SDKCreateVerificationLinkResponse.UnionMember1;
}

export namespace SDKCreateVerificationLinkResponse {
  export interface UnionMember0 {
    data: UnionMember0.Data;

    error?: unknown;
  }

  export namespace UnionMember0 {
    export interface Data {
      deep_link: string;

      expires_at: string;

      organization: Data.Organization;

      qr_code_url: string;

      request_id: string;

      web_url: string;
    }

    export namespace Data {
      export interface Organization {
        id: string;
      }
    }
  }

  export interface UnionMember1 {
    error: UnionMember1.Error;

    data?: unknown;
  }

  export namespace UnionMember1 {
    export interface Error {
      message: unknown;

      statusCode: number;
    }
  }
}

export interface SDKCreateSessionParams {
  metadata?: { [key: string]: unknown };

  partner_user_id?: string;
}

export interface SDKCreateVerificationLinkParams {
  metadata?: { [key: string]: unknown };

  return_url?: string;

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
