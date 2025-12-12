// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import BotshieldSDK from 'botshield-sdk';

const client = new BotshieldSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource verification', () => {
  // Prism tests are disabled
  test.skip('getStatus: only required params', async () => {
    const responsePromise = client.verification.getStatus({ request_id: 'request_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getStatus: required and optional params', async () => {
    const response = await client.verification.getStatus({ request_id: 'request_id' });
  });

  // Prism tests are disabled
  test.skip('lookupUserByEmail: only required params', async () => {
    const responsePromise = client.verification.lookupUserByEmail({ email: 'email' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('lookupUserByEmail: required and optional params', async () => {
    const response = await client.verification.lookupUserByEmail({ email: 'email' });
  });
});
