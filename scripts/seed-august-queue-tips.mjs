/**
 * One-shot: append 2 pending tips per ET day for 2026-06-11 .. 2026-07-31
 * so the main queue stays ≥2 rows/day after Series E. Re-run only if you truncate those dates.
 *
 *   node scripts/seed-june-july-queue-tips.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { TIP_BODIES as BODIES } from './queue-tip-bodies.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const QUEUE = path.join(__dirname, 'x-content-queue.json');

function* ymdRange(start, end) {
  let t = Date.parse(`${start}T12:00:00`);
  const endT = Date.parse(`${end}T12:00:00`);
  while (t <= endT) {
    yield new Date(t).toLocaleDateString('en-CA', { timeZone: 'America/New_York' });
    t += 86400000;
  }
}

const queue = JSON.parse(fs.readFileSync(QUEUE, 'utf8'));
if (queue.some((e) => e.id?.startsWith('gw-aug26-'))) {
  console.error('Already contains gw-aug26-* rows; delete those entries first if you need to re-seed.');
  process.exit(1);
}
const existing = new Set(queue.map((e) => e.id));
let seq = 1;
let bi = 0;
const newRows = [];

for (const ymd of ymdRange('2026-08-01', '2026-08-31')) {
  const slots = [
    [`${ymd}T09:45:00-04:00`, 'Tip — exam grind'],
    [`${ymd}T15:45:00-04:00`, 'Tip — platform pattern'],
  ];
  for (const [iso, titlePrefix] of slots) {
    let id = `gw-aug26-${String(seq).padStart(4, '0')}`;
    while (existing.has(id)) {
      seq++;
      id = `gw-aug26-${String(seq).padStart(4, '0')}`;
    }
    existing.add(id);
    const text = BODIES[bi % BODIES.length];
    bi++;
    newRows.push({
      id,
      title: `${titlePrefix} (${ymd})`,
      status: 'pending',
      tweets: [text],
      scheduledFor: iso,
    });
    seq++;
  }
}

queue.push(...newRows);
fs.writeFileSync(QUEUE, JSON.stringify(queue, null, 2) + '\n');
console.log(`Appended ${newRows.length} tips (Aug 1 – Aug 31, 2/day ET). Run: npm run x:tag-cert-focus`);
