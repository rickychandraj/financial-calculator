import assert from 'node:assert/strict';
import { readdir } from 'node:fs/promises';

const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:3125';
const routes = (await readdir(new URL('../src/app/forms/', import.meta.url), { withFileTypes: true }))
  .filter(entry => entry.isDirectory()).map(entry => entry.name);
assert(routes.length > 0);
for (const route of routes) {
  const response = await fetch(`${base}/forms/${route}`);
  assert.equal(response.status, 200, route);
  const html = await response.text();
  assert(html.includes('calculator-home calculator-form-layout'), `${route}: missing shared layout`);
  // Some routes defer their header until client hydration (e.g. couple-test).
  assert(html.includes('<title>Kalkulator Mama berUANG by Ayu Sara</title>'), `${route}: wrong document`);
}
console.log(`${routes.length} calculator routes passed shared-layout checks.`);
