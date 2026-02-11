# ADM-201 Page: Verification, Final Polish & Competitor Gaps

## 1. Verification checklist (schema & meta)

Use this to confirm the live ADM-201 page has correct schema and meta.

### Meta description
- **In code:** Set in `src/app/certifications/administrator/page.tsx` via `generateMetadata()` and `descriptionText`.
- **Check on live site:**
  ```bash
  curl -s 'https://www.trailblazeprep.com/certifications/administrator' | grep -o '<meta name="description" content="[^"]*"'
  ```
  Expected to include: "Free practice questions", "no sign-up required", "Winter '26", "ADM-201", "$200".
- **If missing:** Clear Vercel cache, redeploy, or check root layout isn’t overriding (this page explicitly sets `description`).

### FAQ schema (FAQPage)
- **In code:** `CertPageSeo` outputs `faqJsonLd` from `getCertFaqJsonLd(slug, certTitle)` as a `<script type="application/ld+json">`.
- **Check on live site:**
  ```bash
  curl -s 'https://www.trailblazeprep.com/certifications/administrator' | grep -o '"@type":"FAQPage"'
  ```
  Should return at least one match.
- **Validate:** [Google Rich Results Test](https://search.google.com/test/rich-results) → enter the ADM-201 page URL.

### HowTo schema
- **In code:** `CertPageSeo` outputs `howToJsonLd` from `getCertHowToJsonLd(slug, certTitle)`.
- **Check on live site:**
  ```bash
  curl -s 'https://www.trailblazeprep.com/certifications/administrator' | grep -o '"@type":"HowTo"'
  ```
  Should return at least one match.

### Quick one-liner (all three)
```bash
curl -s 'https://www.trailblazeprep.com/certifications/administrator' | grep -E 'meta name="description"|"@type":"FAQPage"|"@type":"HowTo"'
```

---

## 2. Sections to keep as-is (don’t change further)

These are working well; avoid structural or tone changes.

- **Title tag** — “Salesforce Certified Platform Administrator (ADM-201) Study Guide & Practice Questions | Trailblaze Prep”
- **H1** — Single, clear cert name (from `getCertH1Text`)
- **Trust block** — “10,000+ exam takers” + two testimonials
- **Primary CTA** — “Start Free ADM-201 Practice Test” (single dominant CTA)
- **Exam snapshot** — Fee, questions, duration, passing score
- **Section weightage table** — Keep as table; don’t remove or collapse
- **Suggested study timeline** — 4–6 weeks with clear milestones
- **Comparison section** — ADM-201 vs Advanced Admin, vs App Builder
- **FAQ section** — Keep questions and answers; schema is tied to this content
- **Disclaimer** — Not affiliated with Salesforce; no braindumps

---

## 3. Final polish only (small copy/label tweaks)

Safe, minimal edits that don’t change structure.

| Where | Current | Suggested | Why |
|-------|--------|-----------|-----|
| Trust block | “10,000+ exam takers” | “10,000+ exam takers” (optional: add “and growing” or keep as-is) | Optional; current is fine. |
| Full question bank CTA | “Get Full Question Bank” | Keep; already clear with bullets and “Mention ADM-201” | No change needed. |
| Syllabus checklist summary | “(click to expand)” | “(expand to view or print)” | Clarifies print option. |
| Contact sidebar (when on cert page) | Generic “Exam / Certification” | Already has autocomplete; no change | — |

**Recommended polish (one line):** In the syllabus `<summary>`, change “(click to expand)” to “(expand to view or print)” so the print option is obvious.

---

## 4. Competitor comparison & gaps

Typical top results for “ADM-201 study guide” / “Salesforce Administrator certification” include Trailhead, Udemy, Focus on Force, Whizlabs, and other prep sites. Common features and how ADM-201 page compares:

| Competitor feature | ADM-201 page status | Recommendation |
|-------------------|---------------------|-----------------|
| Official exam outline / weightage | ✅ Section weightage table + key areas | Keep as-is. |
| Practice questions (free sample) | ✅ 14+ with key takeaways + full explanations on check | Keep; consider adding 1–2 more over time. |
| “Updated for [release]” | ✅ Winter ’26, last reviewed | Keep. |
| FAQ section | ✅ Present + FAQ schema | Keep. |
| Single clear CTA | ✅ “Start Free ADM-201 Practice Test” | Keep. |
| Video / walkthrough | ❌ None | **Gap.** Optional later: one short “How to use this guide” or “Exam day tips” video (YouTube embed). |
| PDF / downloadable checklist | ✅ Print checklist (browser print) | Good; optional: add “Save as PDF” in print dialog hint. |
| Price for paid product | ⚠️ “Contact us for pricing” | **Gap.** Competitors often show a price (e.g. “Full bank $X”). If you add a fixed price, show it here; otherwise keep “Contact us”. |
| Pass rate / “X% pass” claim | ❌ Not stated | **Gap.** Only add if you have real data; otherwise skip. |
| Course / learning path (multi-step) | ⚠️ HowTo schema + timeline | You have timeline + HowTo; no need for a full “course” unless you add video or modules. |
| Internal links to other certs | ✅ Comparison + related certs | Keep. |
| Mobile-first / short nav | ✅ Role bar hidden on cert pages | Keep. |

**Summary of gaps (optional, not required):**
1. **Video** — One short, focused video (e.g. “How to use this guide” or “Exam day tips”) could help engagement and SERP (video snippet). Low priority.
2. **Price clarity** — If you offer a fixed price for the full question bank, state it; otherwise “Contact us for pricing” is fine.
3. **Pass rate** — Only if you have a real, defensible number; otherwise omit.

---

## 5. Do-not-touch list (ADM-201)

**Do not change, remove, or dilute these.** They are what make the page production-grade and 5/5 in intent, content, and trust.

| Element | Location | Why preserve |
|--------|----------|---------------|
| **Title tag** | `getCertMetaTitle('administrator')` / page metadata | CTR-optimized; exact match for “ADM-201 study guide” intent. |
| **Single H1** | CertificationCard `h1Text` | One H1, exam-aligned; required for SEO and clarity. |
| **Meta description** | `descriptionText` in administrator `page.tsx` | Benefit-led, Winter ’26, no sign-up; drives CTR. |
| **Primary CTA** | CertPageCta with `examCode="ADM-201"` | “Start Free ADM-201 Practice Test” — single dominant action. |
| **Trust block** | 10,000+ learners + two testimonials | Social proof; do not remove or weaken. |
| **Exam snapshot** | Fee, questions, duration, passing score | Full transparency; expected by candidates. |
| **Section weightage table** | CertificationCard + syllabus table | Core differentiator; keep table + subtopics. |
| **Syllabus subtopics** | `ADM_201_SECTION_SUBTOPICS` + table rows | Reference-grade depth; do not trim. |
| **Suggested study timeline** | 4–6 weeks section | Actionable; weightage-driven. |
| **Practice questions** | Sample questions + key takeaway + why wrong | Teaching, not just testing; keep structure and depth. |
| **“What you get” block** | Access / Includes / Validity | Sets expectations; reduces hesitation. |
| **75%+ and 10–14 days lines** | Readiness + soft urgency | Advisory; no fake scarcity. |
| **Comparison section** | ADM-201 vs Advanced Admin, vs App Builder | Internal links + intent capture. |
| **FAQ section** | CertPageFaq + same content as schema | Do not change Q&A; schema is tied to it. |
| **Disclaimer / maintenance** | CertPageIntro “How this content is maintained” | E-E-A-T and compliance. |
| **FAQ + HowTo schema** | CertPageSeo (faqJsonLd, howToJsonLd) | Rich results; do not remove. |
| **Cert mega-menu hidden** | Header on `/certifications/administrator` | Reduces topical dilution; keep. |

**Safe to change (polish only):** Wording of one testimonial, exact date in “Last reviewed,” or microcopy in the upgrade block—as long as intent and structure stay the same.

---

## 6. Next steps

1. **Run the verification checklist** (Section 1) on the live URL after the next deploy.
2. **Apply the one polish** in Section 3 (syllabus summary: “expand to view or print”) if you want.
3. **Leave structure and high-impact sections unchanged** (Section 2).
4. **Treat competitor gaps** (Section 4) as optional roadmap items, not blockers.
