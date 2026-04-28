// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import BotShield from 'botshield-sdk';

const client = new BotShield({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sdk', () => {
  // Mock server tests are disabled
  test.skip('createSession', async () => {
    const responsePromise = client.sdk.createSession({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createVerificationLink', async () => {
    const responsePromise = client.sdk.createVerificationLink({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getPartnerConfig: only required params', async () => {
    const responsePromise = client.sdk.getPartnerConfig({ site_key: 'site_key' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getPartnerConfig: required and optional params', async () => {
    const response = await client.sdk.getPartnerConfig({ site_key: 'site_key' });
  });

  // Mock server tests are disabled
  test.skip('logout: only required params', async () => {
    const responsePromise = client.sdk.logout({ session_token: 'session_token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('logout: required and optional params', async () => {
    const response = await client.sdk.logout({ session_token: 'session_token' });
  });

  // Mock server tests are disabled
  test.skip('revokeVerification: only required params', async () => {
    const responsePromise = client.sdk.revokeVerification({ scope: 'scope' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('revokeVerification: required and optional params', async () => {
    const response = await client.sdk.revokeVerification({
      scope: 'scope',
      partner_user_id: 'partner_user_id',
      user_email: 'dev@stainless.com',
    });
  });

  // Mock server tests are disabled
  test.skip('storeSignal: only required params', async () => {
    const responsePromise = client.sdk.storeSignal({ score: 0, site_key: 'site_key' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('storeSignal: required and optional params', async () => {
    const response = await client.sdk.storeSignal({
      score: 0,
      site_key: 'site_key',
      client_score: 0,
      country: 'country',
      edge_score: 0,
      fp_hash: 'fp_hash',
      ip_hash: 'ip_hash',
      signals: {},
      ua_hash: 'ua_hash',
    });
  });

  // Mock server tests are disabled
  test.skip('validateSignal: only required params', async () => {
    const responsePromise = client.sdk.validateSignal({ signal_token: 'signal_token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('validateSignal: required and optional params', async () => {
    const response = await client.sdk.validateSignal({
      signal_token: 'signal_token',
      verification_event_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('verifyToken: only required params', async () => {
    const responsePromise = client.sdk.verifyToken({ token: 'token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('verifyToken: required and optional params', async () => {
    const response = await client.sdk.verifyToken({ token: 'token', signal_token: 'signal_token' });
  });
});
