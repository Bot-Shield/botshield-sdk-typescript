// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Queued pattern: agent proposes an action async, user attests in BotShield app, BotShield signs a Resolution JWT and POSTs it to the agent's callback URL.
 */
export class Actions extends APIResource {
  /**
   * Stand down a queued action before the user responds. No-op if the proposal is
   * already in a terminal state (TTL is cancel — silent expiry produces no
   * Resolution).
   */
  cancelAction(
    body: ActionCancelActionParams,
    options?: RequestOptions,
  ): APIPromise<ActionCancelActionResponse> {
    return this._client.post('/authlink/cancel', { body, ...options });
  }

  /**
   * Poll the current state of a previously-proposed action. For terminal states
   * (approved/denied), the response carries the signed Resolution JWT.
   */
  checkActionStatus(
    query: ActionCheckActionStatusParams,
    options?: RequestOptions,
  ): APIPromise<ActionCheckActionStatusResponse> {
    return this._client.get('/authlink/check-status', { query, ...options });
  }

  /**
   * Queue a human-presence-gated action for a BotShield user. The user receives a
   * card on their iOS app, attests via biometric ceremony, and BotShield delivers a
   * signed Resolution JWT to your registered callback URL. Authentication: agent key
   * (bs*agent*<name>\_\_<secret>) in Authorization header.
   */
  proposeAction(
    body: ActionProposeActionParams,
    options?: RequestOptions,
  ): APIPromise<ActionProposeActionResponse> {
    return this._client.post('/authlink/inquire', { body, ...options });
  }
}

export interface ActionCancelActionResponse {
  data: ActionCancelActionResponse.Data;
}

export namespace ActionCancelActionResponse {
  export interface Data {
    already_terminal?: boolean;

    cancelled?: boolean;
  }
}

export interface ActionCheckActionStatusResponse {
  data: ActionCheckActionStatusResponse.Data;
}

export namespace ActionCheckActionStatusResponse {
  export interface Data {
    status: 'queued' | 'approved' | 'denied' | 'expired' | 'cancelled';

    ceremony_id?: string;

    /**
     * Whether the callback webhook has been confirmed delivered.
     */
    delivered?: boolean;

    /**
     * BotShield-signed Resolution JWT. Present only when status is approved or denied.
     * Verify with BotShield's public key.
     */
    resolution_jwt?: string;

    /**
     * Present only when status is approved or denied.
     */
    verdict?: 'approve' | 'denied';
  }
}

export interface ActionProposeActionResponse {
  data: ActionProposeActionResponse.Data;
}

export namespace ActionProposeActionResponse {
  export interface Data {
    card_id: string;

    status: 'queued';

    ttl_at: string;
  }
}

export interface ActionCancelActionParams {
  request_id: string;
}

export interface ActionCheckActionStatusParams {
  request_id: string;
}

export interface ActionProposeActionParams {
  action: ActionProposeActionParams.Action;

  /**
   * Agent-supplied UUID for idempotency. Re-proposing with the same request_id
   * returns the existing card_id.
   */
  request_id: string;

  /**
   * Email of the BotShield user to receive this proposal.
   */
  user_email: string;

  /**
   * Optional Adaptive Card v1.5 JSON shown when the user expands the card.
   * Allowlist: TextBlock, FactSet, ColumnSet, Container, Table, Image (bundled-asset
   * only).
   */
  adaptive_card_payload?: { [key: string]: unknown };

  /**
   * How long the user has to respond before the proposal expires. Bounds locked by
   * V3 spec §3.4.
   */
  ttl_seconds?: number;
}

export namespace ActionProposeActionParams {
  export interface Action {
    /**
     * Must be in agent.allowed_action_categories AND in the partner's approved scopes
     * for this environment.
     */
    category: string;

    /**
     * Plain-English action description shown on the card (e.g. 'Has an Uber ride ready
     * to book').
     */
    summary_title: string;

    /**
     * Primary KPI shown on the card chrome.
     */
    summary_detail?: Action.SummaryDetail;

    /**
     * Optional link to the user's MultiPass-linked account.
     */
    trusted_account_id?: string;
  }

  export namespace Action {
    /**
     * Primary KPI shown on the card chrome.
     */
    export interface SummaryDetail {
      label?: string;

      value?: string;
    }
  }
}

export declare namespace Actions {
  export {
    type ActionCancelActionResponse as ActionCancelActionResponse,
    type ActionCheckActionStatusResponse as ActionCheckActionStatusResponse,
    type ActionProposeActionResponse as ActionProposeActionResponse,
    type ActionCancelActionParams as ActionCancelActionParams,
    type ActionCheckActionStatusParams as ActionCheckActionStatusParams,
    type ActionProposeActionParams as ActionProposeActionParams,
  };
}
