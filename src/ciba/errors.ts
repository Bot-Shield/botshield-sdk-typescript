/*
 * Hand-written (not generated). Protected from Speakeasy regeneration by .genignore.
 */

/**
 * An OAuth / OpenID CIBA error from BotShield, or a local failure in the helper.
 *
 * `error` is the OAuth error code (e.g. `invalid_client`, `unknown_user_id`,
 * `invalid_grant`) or one of the helper's own codes: `invalid_request` (bad
 * arguments), `network_error`, `invalid_response`, `invalid_token`, `aborted`.
 * `status` is the HTTP status (0 when no response was received).
 */
export class CibaError extends Error {
  readonly error: string;
  readonly description: string | undefined;
  readonly status: number;

  constructor(error: string, description?: string, status = 0) {
    super(description ? `${error}: ${description}` : error);
    this.name = "CibaError";
    this.error = error;
    this.description = description;
    this.status = status;
  }
}
