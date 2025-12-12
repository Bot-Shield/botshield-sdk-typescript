// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Pass extends APIResource {
  create(body: PassCreateParams, options?: RequestOptions): APIPromise<PassCreateResponse> {
    return this._client.post('/pass/create', { body, ...options });
  }
}

export interface PassCreateResponse {
  data?: PassCreateResponse.UnionMember0 | PassCreateResponse.UnionMember1;
}

export namespace PassCreateResponse {
  export interface UnionMember0 {
    error: UnionMember0.Error;

    botshield_user_id?: unknown;
  }

  export namespace UnionMember0 {
    export interface Error {
      message: string;

      statusCode: number;
    }
  }

  export interface UnionMember1 {
    botshield_user_id: unknown;

    error?: unknown;
  }
}

export interface PassCreateParams {
  organization_id?: string;
}

export declare namespace Pass {
  export { type PassCreateResponse as PassCreateResponse, type PassCreateParams as PassCreateParams };
}
