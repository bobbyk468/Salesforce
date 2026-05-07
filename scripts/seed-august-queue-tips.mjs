/**
 * One-shot: append 2 pending tips per ET day for 2026-06-11 .. 2026-07-31
 * so the main queue stays ≥2 rows/day after Series E. Re-run only if you truncate those dates.
 *
 *   node scripts/seed-june-july-queue-tips.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const QUEUE = path.join(__dirname, 'x-content-queue.json');

const BODIES = [
  "formula fields crossing objects bite on 201 when you forget relationship limits.\n\nif the stem whispers 'rollup without rollup summary,' slow down.\n\n#ADM201",
  "custom report types are boring until the stem wants a join you didn't model.\n\nknow what CRT can and can't see before you burn time.\n\n#SalesforceAdmin",
  "hierarchy columns in reports aren't decoration.\n\nsometimes they're the difference between 'looks right' and 'answers the question.'\n\n#SalesforceAdmin",
  "dashboard filters vs report filters stack wrong in people's heads.\n\nread which layer the scenario is actually testing.\n\n#ADM201",
  "data skew on lookups is real exam vocabulary.\n\none parent with 50k children is a different problem than 'sharing is hard.'\n\n#SalesforceAdmin",
  "person accounts show up rarely — and people panic.\n\nif the stem mentions consumers + b2c, don't force a b2b mental model.\n\n#SalesforceAdmin",
  "territory management vs role hierarchy: pick the story the stem is telling, not your favorite feature.\n\n#SalesforceAdmin",
  "manual sharing is the 'break glass' answer.\n\nif the stem wants maintainability at scale, it's usually not manual.\n\n#ADM201",
  "criteria-based sharing rules vs owner-based: different triggers, same exam noise.\n\n#SalesforceAdmin",
  "login flows vs post-login flows: timing matters for 'first screen' stories.\n\n#SalesforceAdmin",
  "experience cloud vs internal security: guests exist. read for external user language.\n\n#SalesforceAdmin",
  "field-level security vs page layout read-only: users feel it differently — exam cares which tool you picked.\n\n#ADM201",
  "record-triggered flow 'only when' conditions save you from infinite loops — know that toggle exists.\n\n#SalesforceFlow",
  "subflow error handling isn't glamorous — it's where production vs exam scenarios meet.\n\n#SalesforceFlow",
  "platform events for integrations: exam might test publish vs subscribe mental model, not your kafka opinions.\n\n#SalesforceAdmin",
  "outbound messages still haunt older orgs — if your prep skipped integrations entirely, fix the gap.\n\n#SalesforceAdmin",
  "custom settings vs custom metadata: one is data-ish, one is config-ish — the exam loves that distinction.\n\n#ADM201",
  "hierarchy custom settings: sneaky way to branch behavior without hardcoding profile names.\n\n#SalesforceAdmin",
  "named credentials abstract auth — exam items sometimes test 'who runs the call,' not the endpoint string.\n\n#SalesforceAdmin",
  "external objects and indirect lookups: if you only studied core CRM, skim this once.\n\n#SalesforceAdmin",
  "big objects: know the 'when you can't use normal soql like a toddler' story at a high level.\n\n#SalesforceAdmin",
  "softphone vs omni: service cloud stems sometimes telegraph which routing world you're in.\n\n#SalesforceAdmin",
  "macros vs quick actions: both save clicks — different constraints.\n\n#SalesforceAdmin",
  "quick actions vs buttons: screen vs url vs create — read the verb in the stem.\n\n#ADM201",
  "path vs kanban: path is guidance; kanban is a list view mood — don't swap them under stress.\n\n#SalesforceAdmin",
  "forecasting categories vs stages: sales cloud scenarios punish sloppy vocabulary.\n\n#SalesforceAdmin",
  "campaign influence: if marketing cloud engagement leaks into your admin exam brain, know the 101 version.\n\n#SalesforceAdmin",
  "lead conversion mapping isn't trivia — it's how ops survives messy stacks.\n\n#SalesforceAdmin",
  "duplicate lead handling: matching on email only vs fuzzy — stem usually hints which evil you picked.\n\n#ADM201",
  "assignment rules run once on insert — if the scenario needs re-evaluation, that's a different tool.\n\n#SalesforceAdmin",
  "escalation rules vs milestone: service cloud loves 'timer' language — learn which one owns clocks.\n\n#SalesforceAdmin",
  "entitlement processes: you won't implement one on the exam, but you might recognize the shape.\n\n#SalesforceAdmin",
  "survey vs feedback: newer features show up as 'pick the native option' stems.\n\n#SalesforceAdmin",
  "dynamic forms: visibility rules vs FLS — both can hide fields, different knobs.\n\n#ADM201",
  "dependent lookups: if the stem says 'only show contacts for selected account,' that's relationship filters.\n\n#SalesforceAdmin",
  "junction objects: many-to-many stories almost always want the junction named explicitly.\n\n#ADM201",
  "master-detail vs lookup cascade: delete behavior is the exam's favorite cudgel.\n\n#SalesforceAdmin",
  "roll-up summary eligibility: master-detail isn't the only story anymore — know current guide language.\n\n#ADM201",
  "cross filters in reports: 'with / without' language is a tell.\n\n#SalesforceAdmin",
  "bucket vs summary formula: buckets are for bands; summaries aggregate — don't swap under pressure.\n\n#ADM201",
  "joined reports: when one dataset isn't enough — stem usually screams 'different objects.'\n\n#SalesforceAdmin",
  "row-level formulas in reports: quick math without a field — exam likes 'no new custom field' constraints.\n\n#ADM201",
  "conditional highlighting: sounds cosmetic — sometimes it's the 'flag outliers' answer.\n\n#SalesforceAdmin",
  "export reports vs data loader: one is snapshot; one is operational — read the stem's job.\n\n#SalesforceAdmin",
  "sandbox refresh: devs forget admins own the calendar — maintenance beats heroics.\n\n#SalesforceCertification",
  "change sets + profiles: the exam loves 'forgot to include the tab' tragedies.\n\n#SalesforceAdmin",
  "metadata coverage: if your study plan is 100% ui clicking, add one hour reading deployment boundaries.\n\n#SalesforceAdmin",
  "api names vs labels: automation breaks on renames — stems sometimes test whether you know that.\n\n#SalesforceAdmin",
  "custom metadata in formulas: not every org uses it — exam might still mention the pattern.\n\n#ADM201",
  "summer '26 prep: same ritual — exam guide date first, youtube second.\n\n#SalesforceCertification",
  "if you're burnt out, swap depth for one timed practice block.\n\nconsistency beats another passive module.\n\n#Trailblazer",
  "teach one concept out loud before you call the day done.\n\nif you can't say it, you don't own it yet.\n\n#SalesforceCertified",
  "exam anxiety is often hydration + sleep pretending to be 'i forgot everything.'\n\nboring fixes work.\n\n#SalesforceCertification",
  "retake mindset: narrow the syllabus to the score report, not your ego.\n\n#SalesforceCertified",
  "community answers are helpful — verify against the guide for your cert generation.\n\n#SalesforceOhana",
  "linkedin is loud — the exam is quiet and specific.\n\ntrain on stems, not hot takes.\n\n#ADM201",
  "pd1 reading: trace variable scope in the snippet before you admire the syntax.\n\n#SalesforceDev",
  "test data factories in real life; on pd1 you mostly predict assert failures.\n\n#SalesforceDev",
  "lwc bundle size won't save you if you miss @api vs @track semantics.\n\n#SalesforceDev",
  "agentforce study: one broken action teaches more than ten perfect demos.\n\n#Agentforce",
  "data cloud stems on admin exams: high level identity + consent language — don't deep-dive the wrong cert.\n\n#SalesforceAdmin",
];

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
