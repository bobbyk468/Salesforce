/**
 * One-time helper: flatten CERTIFICATION_CATEGORIES order from certifications-data.ts
 * Run: node scripts/build-weekly-cert-rotation.mjs
 * Prints unique slug count + JSON snippet for x-content-weekly-cert-focus.json
 */
const hrefsInOrder = [
  '/certifications/platform-foundations',
  '/certifications/ai-associate',
  '/certifications/marketing-cloud-engagement-foundations',
  '/certifications/mulesoft-integration-foundations',
  '/certifications/administrator',
  '/certifications/advanced-administrator',
  '/certifications/app-builder',
  '/certifications/agentforce-specialist',
  '/certifications/business-analyst',
  '/certifications/cpq-administrator',
  '/certifications/marketing-cloud-engagement-admin',
  '/certifications/slack-administrator',
  '/certifications/developer-1',
  '/certifications/developer-2',
  '/certifications/javascript-developer-i',
  '/certifications/b2c-commerce-developer',
  '/certifications/industries-cpq-developer',
  '/certifications/marketing-cloud-engagement-developer',
  '/certifications/mulesoft-developer-i',
  '/certifications/mulesoft-developer-ii',
  '/certifications/mulesoft-hyperautomation-developer',
  '/certifications/omnistudio-developer',
  '/certifications/slack-developer',
  '/certifications/crm-analytics-einstein-discovery-consultant',
  '/certifications/data-360-consultant',
  '/certifications/education-cloud-consultant',
  '/certifications/experience-cloud',
  '/certifications/field-service',
  '/certifications/pardot-consultant',
  '/certifications/marketing-cloud-consultant',
  '/certifications/nonprofit-cloud',
  '/certifications/nonprofit-success-pack-consultant',
  '/certifications/omnistudio-consultant',
  '/certifications/revenue-cloud-consultant',
  '/certifications/sales-cloud',
  '/certifications/service-cloud',
  '/certifications/slack-consultant',
  '/certifications/email-specialist',
  '/certifications/pardot-specialist',
  '/certifications/application-architect',
  '/certifications/data-architect',
  '/certifications/integration-architect',
  '/certifications/sharing-visibility-architect',
  '/certifications/system-architect',
  '/certifications/identity-access-management-architect',
  '/certifications/dev-lifecycle-deployment-architect',
  '/certifications/technical-architect',
  '/certifications/technical-architect-evaluation',
  '/certifications/technical-architect-review-board',
  '/certifications/b2b-solution-architect',
  '/certifications/b2c-commerce-architect',
  '/certifications/b2c-solution-architect',
  '/certifications/heroku-architect',
  '/certifications/mulesoft-catalyst-consultant',
  '/certifications/mulesoft-platform-architect',
  '/certifications/mulesoft-integration-architect',
  '/certifications/advanced-field-service-ap',
  '/certifications/b2b-commerce-admin-ap',
  '/certifications/b2b-commerce-developer-ap',
  '/certifications/communications-cloud-ap',
  '/certifications/consumer-goods-cloud-ap',
  '/certifications/consumer-goods-tpm-ap',
  '/certifications/contact-center-ap',
  '/certifications/cpq-billing-ap',
  '/certifications/energy-utilities-ap',
  '/certifications/financial-services-cloud-ap',
  '/certifications/health-cloud-ap',
  '/certifications/heroku-developer-ap',
  '/certifications/loyalty-management-ap',
  '/certifications/manufacturing-cloud-ap',
  '/certifications/marketing-cloud-advanced-cross-channel-ap',
  '/certifications/marketing-cloud-intelligence-ap',
  '/certifications/marketing-cloud-personalization-ap',
  '/certifications/media-cloud-ap',
  '/certifications/net-zero-cloud-ap',
  '/certifications/order-management-admin-ap',
  '/certifications/order-management-developer-ap',
  '/certifications/process-automation-ap',
  '/certifications/public-sector-solutions-ap',
  '/certifications/sales-foundations',
  '/certifications/strategy-designer',
  '/certifications/ux-designer',
  '/certifications/tableau-architect',
  '/certifications/tableau-consultant',
  '/certifications/tableau-data-analyst',
  '/certifications/tableau-desktop-foundations',
  '/certifications/tableau-server-administrator',
];

const skip = new Set(['administrator-practice-test', 'email-specialist-practice-test']);
const seen = new Set();
const rotation = [];
for (const href of hrefsInOrder) {
  const slug = href.replace('/certifications/', '').replace(/\/$/, '');
  if (skip.has(slug)) continue;
  if (seen.has(slug)) continue;
  seen.add(slug);
  rotation.push(slug);
}

/** Monday 00:00 local for week index 0 (adjust to align editorial Week 1 with your calendar). */
function mondayYMD(year, monthIndex, dayOfMonth) {
  const d = new Date(year, monthIndex, dayOfMonth);
  const dow = d.getDay();
  const diff = dow === 0 ? -6 : 1 - dow;
  d.setDate(d.getDate() + diff);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

const week0Monday = mondayYMD(2026, 4, 7); // week containing May 7, 2026 → 2026-05-04

function weekMonday(offset) {
  const base = new Date(week0Monday + 'T12:00:00');
  base.setDate(base.getDate() + offset * 7);
  const y = base.getFullYear();
  const m = String(base.getMonth() + 1).padStart(2, '0');
  const day = String(base.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

const weeks = rotation.map((certFocus, i) => ({
  weekIndex: i + 1,
  weekStarting: weekMonday(i),
  certFocus,
  certPath: `https://www.trailblazeprep.com/certifications/${certFocus}`,
}));

console.log('Unique certs (one per week):', rotation.length);
console.log(JSON.stringify(weeks.slice(0, 8), null, 2));

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(__dirname, 'x-content-weekly-cert-focus.json');
fs.writeFileSync(
  out,
  JSON.stringify(
    {
      generated: new Date().toISOString(),
      anchorNote: `weekStarting is each Monday; week 1 = ${week0Monday}. Change week0Monday in this script to realign the calendar.`,
      totalWeeks: weeks.length,
      weeks,
    },
    null,
    2,
  ),
);
console.log('Wrote', out);
