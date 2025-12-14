// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Devices extends APIResource {
  /**
   * Remove device and associated passkeys
   */
  remove(body: DeviceRemoveParams, options?: RequestOptions): APIPromise<DeviceRemoveResponse> {
    return this._client.post('/devices/remove', { body, ...options });
  }
}

export interface DeviceRemoveResponse {
  data: unknown;
}

export interface DeviceRemoveParams {}

export declare namespace Devices {
  export { type DeviceRemoveResponse as DeviceRemoveResponse, type DeviceRemoveParams as DeviceRemoveParams };
}
