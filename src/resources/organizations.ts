// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Organizations extends APIResource {
  /**
   * POST /organizations/add-member
   */
  addMember(
    body: OrganizationAddMemberParams,
    options?: RequestOptions,
  ): APIPromise<OrganizationAddMemberResponse> {
    return this._client.post('/organizations/add-member', { body, ...options });
  }
}

export interface OrganizationAddMemberResponse {
  data: unknown;
}

export interface OrganizationAddMemberParams {}

export declare namespace Organizations {
  export {
    type OrganizationAddMemberResponse as OrganizationAddMemberResponse,
    type OrganizationAddMemberParams as OrganizationAddMemberParams,
  };
}
