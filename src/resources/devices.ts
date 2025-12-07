// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Devices extends APIResource {
  remove(body: DeviceRemoveParams, options?: RequestOptions): APIPromise<DeviceRemoveResponse> {
    return this._client.post('/devices/remove', { body, ...options });
  }
}

export interface DeviceRemoveResponse {
  data?: DeviceRemoveResponse.Data;
}

export namespace DeviceRemoveResponse {
  export interface Data {
    message: string;

    passkeys_deleted: unknown;

    success: boolean;
  }
}

export interface DeviceRemoveParams {
  clerk_user_id: string;
}

export declare namespace Devices {
  export { type DeviceRemoveResponse as DeviceRemoveResponse, type DeviceRemoveParams as DeviceRemoveParams };
}
