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
  data: unknown;
}

export interface PassCreateParams {}

export declare namespace Pass {
  export { type PassCreateResponse as PassCreateResponse, type PassCreateParams as PassCreateParams };
}
