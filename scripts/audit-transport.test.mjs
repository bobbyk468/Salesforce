import test from 'node:test';
import assert from 'node:assert/strict';
import { classifyTransport, findAssetPaths } from './audit-transport.mjs';

const check = (overrides = {}) => ({ label: '/', httpsStatus: 200, hstsMaxAge: 15552000,
  httpStatus: 301, httpLocation: 'https://www.trailblazeprep.com/',
  expectedHttpsUrl: 'https://www.trailblazeprep.com/', ...overrides });

test('accepts valid HTTPS policy and exact HTTP upgrade', () => {
  assert.deepEqual(classifyTransport({ checks: [check()] }), { pass: true, failures: [] });
});

test('fails when HTTPS HSTS is missing or too short', () => {
  assert.equal(classifyTransport({ checks: [check({ hstsMaxAge: null })] }).pass, false);
  assert.equal(classifyTransport({ checks: [check({ hstsMaxAge: 100 })] }).pass, false);
});

test('fails when HTTP serves content instead of redirecting', () => {
  assert.equal(classifyTransport({ checks: [check({ httpStatus: 200 })] }).pass, false);
});

test('fails when redirect Location is not exact HTTPS www URL', () => {
  assert.equal(classifyTransport({ checks: [check({ httpLocation: 'https://trailblazeprep.com/' })] }).pass, false);
});

test('fails closed when JS or CSS asset discovery is missing', () => {
  assert.equal(classifyTransport({ checks: [check()], discoveryError: 'Asset discovery failed closed' }).pass, false);
  assert.equal(classifyTransport({ checks: [] }).pass, false);
});

test('discovers relative same-origin Next.js JavaScript and CSS assets only', () => {
  const html = `<script src="/_next/static/chunks/app.js"></script>
    <link rel="stylesheet" href="_next/static/css/site.css">
    <script src="https://evil.example/_next/static/no.js"></script>
    <script src="//cdn.example/_next/static/no.js"></script>`;
  assert.deepEqual(findAssetPaths(html), ['/_next/static/chunks/app.js', '/_next/static/css/site.css']);
});
