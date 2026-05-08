// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import BotShield from 'botshield-sdk';

const client = new BotShield({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  // Mock server tests are disabled
  test.skip('cancelAction: only required params', async () => {
    const responsePromise = client.actions.cancelAction({
      request_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('cancelAction: required and optional params', async () => {
    const response = await client.actions.cancelAction({
      request_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('checkActionStatus: only required params', async () => {
    const responsePromise = client.actions.checkActionStatus({
      request_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('checkActionStatus: required and optional params', async () => {
    const response = await client.actions.checkActionStatus({
      request_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('proposeAction: only required params', async () => {
    const responsePromise = client.actions.proposeAction({
      action: { category: 'travel.book', summary_title: 'summary_title' },
      request_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      user_email: 'dev@stainless.com',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('proposeAction: required and optional params', async () => {
    const response = await client.actions.proposeAction({
      action: {
        category: 'travel.book',
        summary_title: 'summary_title',
        summary_detail: { label: 'TOTAL', value: '$100.90' },
        trusted_account_id: 'trusted_account_id',
      },
      request_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      user_email: 'dev@stainless.com',
      adaptive_card_payload: {},
      ttl_seconds: 60,
    });
  });
});
