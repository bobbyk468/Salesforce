/**
 * Adds calendar rotation + optional topic metadata to x-content-queue.json.
 *
 * - certFocus / certPath — weekly site spotlight from x-content-weekly-cert-focus.json
 *   (America/New_York week, Mon–Sun). Omitted if scheduledFor is before the first rotation Monday.
 * - topicCert / topicCertPath — primary cert the copy is about, when it differs from certFocus
 *   or when there is no calendar week (pre-rotation dates). Omitted when redundant.
 *
 * Run: node scripts/tag-queue-cert-focus.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TZ = 'America/New_York';
const BASE = 'https://www.trailblazeprep.com/certifications/';

function nyYmd(iso) {
  return new Date(iso).toLocaleDateString('en-CA', { timeZone: TZ });
}

function lookupWeek(weeks, nyYmdStr) {
  if (!weeks.length || nyYmdStr < weeks[0].weekStarting) return null;
  for (let i = 0; i < weeks.length; i++) {
    const start = weeks[i].weekStarting;
    const next = weeks[i + 1]?.weekStarting;
    if (nyYmdStr >= start && (!next || nyYmdStr < next)) return weeks[i];
  }
  return weeks[weeks.length - 1];
}

function topicForItem(item) {
  const id = (item.id || '').toLowerCase();
  const title = (item.title || '').toLowerCase();
  const sid = (item.series?.id || '').toLowerCase();
  const tweets = (item.tweets || []).join(' ').toLowerCase();
  const blob = `${id} ${title} ${sid} ${tweets}`;

  if (sid === 'resume-reality-2026') return null;

  if (id.includes('quiz-adm') || sid === 'adm201-traps-2026' || /\badm[- ]?201\b/.test(title) || /\badm201\b/.test(id))
    return { topicCert: 'administrator', topicCertPath: `${BASE}administrator` };
  if (/\badm[- ]?211\b/.test(title) || id.includes('adm211'))
    return { topicCert: 'advanced-administrator', topicCertPath: `${BASE}advanced-administrator` };
  if (id.includes('quiz-agentforce') || /\bagentforce\b/.test(blob))
    return { topicCert: 'agentforce-specialist', topicCertPath: `${BASE}agentforce-specialist` };
  if (id.includes('pd1') || /\bpd1\b/.test(title) || sid === 'pd1-without-java')
    return { topicCert: 'developer-1', topicCertPath: `${BASE}developer-1` };
  if (id.includes('app-builder') || title.includes('app builder'))
    return { topicCert: 'app-builder', topicCertPath: `${BASE}app-builder` };

  if (/#adm201\b|\badm[- ]?201\b/.test(tweets) && !/\bagentforce\b/.test(blob))
    return { topicCert: 'administrator', topicCertPath: `${BASE}administrator` };

  return null;
}

const queuePath = path.join(__dirname, 'x-content-queue.json');
const focusPath = path.join(__dirname, 'x-content-weekly-cert-focus.json');

const queue = JSON.parse(fs.readFileSync(queuePath, 'utf8'));
const { weeks } = JSON.parse(fs.readFileSync(focusPath, 'utf8'));

let weekTagged = 0;
let topicTagged = 0;
let skippedNoSchedule = 0;

for (const item of queue) {
  delete item.certFocus;
  delete item.certPath;
  delete item.topicCert;
  delete item.topicCertPath;

  if (!item.scheduledFor) {
    skippedNoSchedule++;
    continue;
  }

  const week = lookupWeek(weeks, nyYmd(item.scheduledFor));
  if (week) {
    item.certFocus = week.certFocus;
    item.certPath = week.certPath;
    weekTagged++;
  }

  const topic = topicForItem(item);
  if (topic) {
    const weekSlug = week?.certFocus;
    if (!weekSlug || topic.topicCert !== weekSlug) {
      item.topicCert = topic.topicCert;
      item.topicCertPath = topic.topicCertPath;
      topicTagged++;
    }
  }
}

fs.writeFileSync(queuePath, JSON.stringify(queue, null, 2) + '\n');
console.log(
  `week certFocus: ${weekTagged}, topicCert (override or pre-rotation): ${topicTagged}, no scheduledFor: ${skippedNoSchedule}`,
);
