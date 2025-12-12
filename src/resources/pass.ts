// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Pass extends APIResource {
  /**
   * Create a new BotShield pass
   */
  create(body: PassCreateParams, options?: RequestOptions): APIPromise<PassCreateResponse> {
    return this._client.post('/pass/create', { body, ...options });
  }
}

export interface PassCreateResponse {
  data: PassCreateResponse.BotshieldUserID | PassCreateResponse.Error;
}

export namespace PassCreateResponse {
  export interface BotshieldUserID {
    /**
     * Anonymous BotShield user ID
     */
    botshield_user_id: string;
  }

  export interface Error {
    error: Error.Error;
  }

  export namespace Error {
    export interface Error {
      message: string;

      statusCode: number;
    }
  }
}

export interface PassCreateParams {
  /**
   * Organization ID (optional)
   */
  organization_id?: string;
}

export declare namespace Pass {
  export { type PassCreateResponse as PassCreateResponse, type PassCreateParams as PassCreateParams };
}
