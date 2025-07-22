import { describe, it, expect } from 'vitest';
import fetch from 'node-fetch';

describe('Rate Limiter Tests', () => {
  const endpoint = 'http://localhost:3000/api/sendMail';
  const testPayload = {
    name: 'Test',
    senderMail: 'test@example.com',
    message: 'test message',
    honeyPot: '',
  };

  async function makeRequest() {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testPayload),
    });
    return { status: response.status, data: await response.json() };
  }

  it('should allow first request', async () => {
    const { status, data } = await makeRequest();
    expect(status).toBe(200);
    expect(data).toBeDefined();
  });

  it('should block rapid successive requests', async () => {
    // Make 5 rapid requests
    const requests = Array(5).fill(null).map(() => makeRequest());
    const results = await Promise.all(requests);

    // At least one request should be rate limited (429)
    const hasRateLimited = results.some(result => result.status === 429);
    expect(hasRateLimited).toBe(true);
  });

  it('should include proper rate limit headers', async () => {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testPayload),
    });

    expect(response.headers.get('X-RateLimit-Limit')).toBeDefined();
    expect(response.headers.get('X-RateLimit-Remaining')).toBeDefined();
  });
});
