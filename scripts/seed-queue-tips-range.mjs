/**
 * Append 2 pending tips per ET calendar day between --from and --to (inclusive).
 *
 *   node scripts/seed-queue-tips-range.mjs --from 2026-09-01 --to 2026-09-30 --prefix gw-sep26
 *
 * Refuses if any queue id already starts with `${prefix}-`. Then: npm run x:tag-cert-focus
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { TIP_BODIES as BODIES } from './queue-tip-bodies.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const QUEUE = path.join(__dirname, 'x-content-queue.json');

function parseArgs() {
  const a = process.argv.slice(2);
  const out = {};
  for (let i = 0; i < a.length; i++) {
    if (a[i] === '--from') out.from = a[++i];
    else if (a[i] === '--to') out.to = a[++i];
    else if (a[i] === '--prefix') out.prefix = a[++i];
  }
  if (!out.from || !out.to || !out.prefix) {
    console.error('Usage: node scripts/seed-queue-tips-range.mjs --from YYYY-MM-DD --to YYYY-MM-DD --prefix gw-sep26');
    process.exit(1);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(out.from) || !/^\d{4}-\d{2}-\d{2}$/.test(out.to)) {
    console.error('Dates must be YYYY-MM-DD');
    process.exit(1);
  }
  return out;
}

function* ymdRange(start, end) {
  let t = Date.parse(`${start}T12:00:00`);
  const endT = Date.parse(`${end}T12:00:00`);
  if (t > endT) {
    console.error('--from must be <= --to');
    process.exit(1);
  }
  while (t <= endT) {
    yield new Date(t).toLocaleDateString('en-CA', { timeZone: 'America/New_York' });
    t += 86400000;
  }
}

const { from, to, prefix } = parseArgs();
const idStem = `${prefix}-`;

const queue = JSON.parse(fs.readFileSync(QUEUE, 'utf8'));
if (queue.some((e) => e.id?.startsWith(idStem))) {
  console.error(`Already contains ${idStem}* rows; remove those entries first if you need to re-seed.`);
  process.exit(1);
}

const existing = new Set(queue.map((e) => e.id));
let seq = 1;
let bi = 0;
const newRows = [];

for (const ymd of ymdRange(from, to)) {
  const slots = [
    [`${ymd}T09:45:00-04:00`, 'Tip — exam grind'],
    [`${ymd}T15:45:00-04:00`, 'Tip — platform pattern'],
  ];
  for (const [iso, titlePrefix] of slots) {
    let id = `${prefix}-${String(seq).padStart(4, '0')}`;
    while (existing.has(id)) {
      seq++;
      id = `${prefix}-${String(seq).padStart(4, '0')}`;
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
console.log(`Appended ${newRows.length} tips (${from} – ${to}, 2/day ET, prefix ${prefix}). Run: npm run x:tag-cert-focus`);
