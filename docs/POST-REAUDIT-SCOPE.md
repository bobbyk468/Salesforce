# Scope: the Gemini re-audit items that survived verification

Gemini's re-audit (`GEMINI-REAUDIT-2026-11-14.md`) was mostly stale. These are
the items left after checking each claim against production on 14 Nov 2026,
re-scoped against what the code and the live pages actually contain.

Verified-dead before scoping, so excluded entirely: its #1–#3 (legacy route
redirects, footer links, html-sitemap — all already done), #4 (stitched
duplicate tables — none exist), #6 (role hub facts — correct as published),
#7 (homepage cards — already hold the target values), #8 (anchor IDs — all
five present), #11 (raw email — zero occurrences), and #10 (comparison-page
anchors — all 27 `-vs-` pages already link to canonical slugs, zero legacy
links).

---

## A. Snippet-shaped direct answers leading every FAQ answer
**Gemini #13. Sitewide, 95 pages. Highest leverage of the survivors.**

**What's true now.** `getCertFaq` in `src/lib/cert-seo-data.ts` builds four
generated base FAQs plus per-cert extras. The coverage answer leads with
section counts and weights, which is already snippet-shaped. What no page has
is a single answer that states the four numbers a candidate actually searches
for together: scored questions, minutes, passing score, fee.

**Why it is cheap.** `getPublishedExamFacts(slug)` already returns exactly
those, sourced from `SLUG_TO_EXAM_LOGISTICS`. 88 of the 95 slugs have an entry.
The seven without are `administrator` (its own data module),
`application-architect` and `system-architect` (component-only, no exam of
their own) and the four Claude credentials (details unverified) — all of which
must skip the new item rather than guess.

**Scope.**
1. Add a generated `baseFormat` FAQ to `getCertFaq`, emitted only when
   `getPublishedExamFacts(slug)` returns facts and the exam is not
   component-only or retired.
2. Question: `How many questions is the {bareName} exam and what is the
   passing score?` Answer: one sentence under 45 words stating scored
   questions, minutes, passing score and fee, then one sentence of context.
3. Insert it second, right after the coverage FAQ, so it is high in both the
   accordion and the `FAQPage` JSON-LD.
4. `VISIBLE_FAQ_COUNT` in `CertPageSeo.tsx` is 5 and the dumps FAQ is appended
   after the slice, so the visible list grows to 7. Either raise the slice
   deliberately or drop one weaker base FAQ — decide, don't let it drift.
5. Verifier: assert the format FAQ renders, and that its numbers match
   `getPublishedExamFacts`, on every slug that has facts.

**Risk.** Low. One generated string from data that already drives the page, so
it cannot contradict the tables above it.

---

## B. The six official integration patterns table
**Gemini #16. One page: `/certifications/integration-architect` (Plat-Arch-204).**

**What's true now.** The live page names three of the six patterns, scattered
in prose: Fire and Forget, Remote Call-In, Data Virtualization. It never says
"Remote Process Invocation", "Batch Data Synchronization" or "UI Update Based
on Data Changes", and there is no table.

**Scope.** Add a six-row table (pattern, when to use it, typical Salesforce
mechanism) covering Remote Process Invocation — Request and Reply, Remote
Process Invocation — Fire and Forget, Batch Data Synchronization, Remote
Call-In, UI Update Based on Data Changes, and Data Virtualization. Source the
wording from the official Integration Patterns and Practices guide, not from
memory. Give it a stable anchor so it can take a sitelink.

**Risk.** Low, provided the mechanisms column is sourced. This is the single
most-searched reference table for this exam.

---

## C. Work Rules vs Service Objectives table
**Gemini #18. One page: `/certifications/field-service` (FS-Con-101).**

**What's true now.** "Service Objective" does not appear anywhere on the live
page. Scheduling Policy does. This sits inside Managing Scheduling and
Optimization, the heaviest domain on the exam at 28%.

**Scope.** Add a table contrasting Work Rules (hard constraints that filter
candidate slots) with Service Objectives (weighted preferences that score the
surviving slots), naming the standard rules and objectives and showing how a
Scheduling Policy combines them. Source from the Field Service documentation.

**Risk.** Low. Real content gap on the highest-weighted domain.

---

## D. B2B Commerce checkout integration interfaces
**Gemini #15. Two pages: `b2b-commerce-admin-ap`, `b2b-commerce-developer-ap`.**

**What's true now.** Neither page mentions `CartPriceCalculations`,
`CartShippingCharges`, `CartInventoryValidation` or `CartTaxCalculations`.
That part is a genuine gap and worth closing on the developer page in
particular.

**Blocked, and deliberately so.** Gemini also wants exam codes `AP-201` and
`AP-202` added. Neither entry in `cert-alias-registry.ts` has a `code`, and
Gemini's stated evidence is a competitor's page, not the issuer. Per our own
sourcing rule, exam codes come from the Trailhead Academy credential pages or
they do not ship. **Do not add AP-201/AP-202 until a Trailhead Academy page is
found that states them.** If no issuer source exists, add the interfaces and
drop the codes.

**Scope.** Add the four checkout extension points to the developer AP page as
a short reference list with what each one overrides; mention them in passing on
the admin AP page. Separately, attempt to source the codes, and add them to the
registry only on an issuer page.

---

## E. Data Mapper type table — downgraded
**Gemini #17. Two pages: `omnistudio-developer`, `omnistudio-consultant`.**

Exam Tip 3 on both pages already reads "Data Mappers (formerly DataRaptors):
Extract, Turbo Extract, Transform and Load, and when each one fits." All four
types are named, and "DataRaptor" is present for the legacy query. The only
thing missing is table formatting. Worth doing when the page is next touched;
not worth a pass of its own.

---

## F. Off-page link acquisition
**Gemini #20. Not a coding task, and the actual ceiling.**

On-page coverage for the seven clusters is complete and verified against
production. Nothing in the re-audit found a current on-page defect. Referring
domains are now the binding constraint, and no further markup work changes
that. The assets to build links against already exist: the CC BY 4.0 benchmark
report and the score calculator.

---

## Suggested order

1. **A** — sitewide, data-driven, one shared code path, biggest reach.
2. **B** and **C** — one page each, real gaps, both target the heaviest domain
   on their exam. Each needs a sourcing step first.
3. **D** — interfaces yes, codes only if the issuer states them.
4. **E** — fold into the next edit of those pages.
5. **F** — not engineering work.
