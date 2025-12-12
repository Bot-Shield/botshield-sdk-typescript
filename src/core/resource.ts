// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { BotShield } from '../client';

export abstract class APIResource {
  protected _client: BotShield;

  constructor(client: BotShield) {
    this._client = client;
  }
}
