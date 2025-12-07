// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { BotshieldSDK } from '../client';

export abstract class APIResource {
  protected _client: BotshieldSDK;

  constructor(client: BotshieldSDK) {
    this._client = client;
  }
}
