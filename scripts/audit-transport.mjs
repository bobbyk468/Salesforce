import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const ORIGIN = 'https://www.trailblazeprep.com';
const BASE_PATHS = ['/', '/certifications/administrator', '/robots.txt', '/sitemap.xml', '/favicon-32x32.png'];
const MIN_HSTS_SECONDS = 15552000;
const TIMEOUT_MS = 20000;

export function findAssetPaths(html) {
  const found = new Set();
  for (const match of html.matchAll(/(?:src|href)\s*=\s*(["'])(.*?)\1/gi)) {
    const raw = match[2].trim();
    if (!raw || raw.startsWith('//')) continue;
    let url;
    try { url = new URL(raw, `${ORIGIN}/`); } catch { continue; }
    if (url.origin !== ORIGIN || !url.pathname.startsWith('/_next/static/')) continue;
    if (/\.js$/i.test(url.pathname) || /\.css$/i.test(url.pathname)) found.add(url.pathname + url.search);
  }
  return [...found];
}

export function classifyTransport(result) {
  const failures = [];
  for (const item of result.checks ?? []) {
    if (item.error) { failures.push(`${item.label}: ${item.error}`); continue; }
    if (item.httpsStatus !== 200) failures.push(`${item.label}: HTTPS status ${item.httpsStatus}, expected 200`);
    if (!Number.isFinite(item.hstsMaxAge) || item.hstsMaxAge < MIN_HSTS_SECONDS)
      failures.push(`${item.label}: HSTS max-age ${item.hstsMaxAge ?? 'missing'}, expected >= ${MIN_HSTS_SECONDS}`);
    if (item.httpStatus !== 301 && item.httpStatus !== 308)
      failures.push(`${item.label}: HTTP status ${item.httpStatus}, expected 301 or 308`);
    if (item.httpLocation !== item.expectedHttpsUrl)
      failures.push(`${item.label}: HTTP Location ${item.httpLocation ?? 'missing'}, expected ${item.expectedHttpsUrl}`);
  }
  if (result.discoveryError) failures.push(result.discoveryError);
  if (!result.checks?.length) failures.push('No transport checks were performed');
  return { pass: failures.length === 0, failures };
}

async function request(url, method) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    return await fetch(url, { method, redirect: 'manual', signal: controller.signal });
  } catch (error) {
    const detail = error.name === 'AbortError' ? `timed out after ${TIMEOUT_MS}ms` : error.message;
    throw new Error(`${method} ${url}: ${detail}`);
  } finally { clearTimeout(timer); }
}

async function auditUrl(path, label = path) {
  const httpsUrl = new URL(path, ORIGIN).href;
  const httpUrl = httpsUrl.replace(/^https:/, 'http:');
  try {
    const [https, http] = await Promise.all([request(httpsUrl, 'HEAD'), request(httpUrl, 'HEAD')]);
    const hsts = https.headers.get('strict-transport-security') ?? '';
    const age = /(?:^|;)\s*max-age\s*=\s*(\d+)/i.exec(hsts)?.[1];
    return { label, httpsStatus: https.status, hstsMaxAge: age === undefined ? null : Number(age),
      httpStatus: http.status, httpLocation: http.headers.get('location'), expectedHttpsUrl: httpsUrl };
  } catch (error) { return { label, error: error.message }; }
}

export async function runAudit() {
  let discoveryError;
  let assets = [];
  try {
    const response = await request(`${ORIGIN}/`, 'GET');
    if (response.status !== 200) throw new Error(`HTTPS homepage discovery returned ${response.status}, expected 200`);
    assets = findAssetPaths(await response.text());
    if (!assets.some(path => /\.js(?:\?|$)/i.test(path)) || !assets.some(path => /\.css(?:\?|$)/i.test(path)))
      throw new Error('Asset discovery failed closed: homepage must expose same-origin Next.js JS and CSS assets');
  } catch (error) { discoveryError = error.message; }
  const paths = [...BASE_PATHS, ...assets];
  const checks = await Promise.all(paths.map(path => auditUrl(path, path)));
  return { checks, discoveryError };
}

async function main(args) {
  let outputPath;
  for (const arg of args) {
    if (arg.startsWith('--output=')) {
      if (outputPath !== undefined || !arg.slice(9)) throw new Error(`Invalid argument: ${arg}`);
      outputPath = resolve(arg.slice(9));
    } else throw new Error(`Unknown argument: ${arg}`);
  }
  const result = await runAudit();
  const classified = classifyTransport(result);
  const report = { ...result, ...classified };
  if (outputPath) {
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, `${JSON.stringify(report, null, 2)}\n`);
  }
  for (const failure of classified.failures) console.log(`FAIL ${failure}`);
  if (classified.pass) console.log(`PASS transport audit (${result.checks.length} paths)`);
  process.exitCode = classified.pass ? 0 : 1;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main(process.argv.slice(2)).catch(error => { console.error(`FAIL ${error.message}`); process.exitCode = 1; });
}
