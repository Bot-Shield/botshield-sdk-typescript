// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Users extends APIResource {
  /**
   * POST /users/update-metadata
   */
  updateMetadata(
    body: UserUpdateMetadataParams,
    options?: RequestOptions,
  ): APIPromise<UserUpdateMetadataResponse> {
    return this._client.post('/users/update-metadata', { body, ...options });
  }
}

export interface UserUpdateMetadataResponse {
  data: unknown;
}

export interface UserUpdateMetadataParams {}

export declare namespace Users {
  export {
    type UserUpdateMetadataResponse as UserUpdateMetadataResponse,
    type UserUpdateMetadataParams as UserUpdateMetadataParams,
  };
}
