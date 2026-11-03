# Marketing Credential Source Audit

Audit date: 2026-10-05  
Scope: Salesforce Marketing Cloud Engagement Specialist (legacy site slug `email-specialist`) and Salesforce Marketing Cloud Account Engagement Specialist (legacy site slug `pardot-specialist`). This is a bounded source check of identity, exam logistics, prerequisites, domains, the five initially visible questions per card, and the visible FAQ/logistics/weight content in each study-guide and exam-tips page. It is not a review of every paragraph or question in either practice bank.

## Primary Issuer Sources

- [Marketing Cloud Engagement Specialist Exam Guide](https://help.salesforce.com/s/articleView?id=005298950&language=en_US&type=1)
- [Marketing Cloud Account Engagement Specialist Exam Guide](https://help.salesforce.com/s/articleView?id=005298953&language=en_US&type=1)
- [Salesforce Certification Name Changes FAQ](https://help.salesforce.com/s/articleView?id=005298915&language=en_US&type=1)
- [Marketing Cloud Engagement Specialist credential page](https://trailhead.salesforce.com/credentials/marketingcloudengagementspecialist)
- [Marketing Cloud Account Engagement Specialist credential page](https://trailhead.salesforce.com/credentials/marketingcloudaccountengagementspecialist)
- [Account Engagement: Managing Visitors and Prospects](https://help.salesforce.com/s/articleView?id=mktg.pardot_prospects.htm&language=en_US&type=5)
- [Account Engagement scoring and grading overview](https://help.salesforce.com/s/articleView?id=000381489&language=en_US&type=1)
- [Account Engagement: Capture Leads with Forms and Form Handlers](https://help.salesforce.com/s/articleView?id=sf.pardot_forms.htm&language=en_US&type=5)
- [Account Engagement automation rule behavior](https://help.salesforce.com/s/articleView?id=000382472&language=en_US&type=1)
- [Einstein Send Time Optimization](https://help.salesforce.com/s/articleView?id=sf.mc_anb_einstein_sto_app.htm&language=en_US&type=5)
- [All Subscribers List in Email Studio](https://help.salesforce.com/s/articleView?id=mktg.mc_es_all_subscribers_list.htm&language=en_US&type=5)
- [Marketing Cloud unsubscribe behavior](https://help.salesforce.com/s/articleView?id=mktg.mc_co_unsubscribes.htm&language=en_US&type=5)

## Verified Exam Fields

| Field | Marketing Cloud Engagement Specialist | Account Engagement Specialist |
|---|---|---|
| Current issuer name | Salesforce Certified Marketing Cloud Engagement Specialist; “Marketing Cloud Email Specialist” is the former credential name | Salesforce Certified Marketing Cloud Account Engagement Specialist; “Pardot Specialist” is a legacy product/search name |
| Exam content | 60 multiple-choice plus up to 5 unscored | 60 multiple-choice/multiple-select plus up to 5 unscored |
| Time | 90 minutes | 90 minutes |
| Passing score | 67% | 72% |
| Registration | USD 200; JPY 30,000; applicable local taxes | USD 200; JPY 30,000; applicable local taxes |
| Retake | USD 100; JPY 15,000; applicable local taxes | USD 100; JPY 15,000; applicable local taxes |
| Prerequisite | None; MKT 101 is highly recommended | None; course attendance is highly recommended |
| Issuer-published domain weights | Email Marketing Best Practices 10%; Content Creation and Delivery 24%; Marketing Automation 26%; Subscriber and Data Management 26%; Insights and Analytics 14% | Visitors and Prospects 8%; Administration 11%; Forms, Form Handlers and Landing Pages 20%; Lead Management 24%; Email Marketing 20%; Engagement Studio 17% |

The Account Engagement guide describes its typical audience as having 6–12 months of relevant experience; this is an audience description, not a required prerequisite. The Engagement Specialist guide says its exam aligns to Summer ’23; that release label is reproduced from the issuer guide, not independently established as the version currently delivered to candidates.

## First Five Practice Questions

These are Trailblaze Prep-authored questions, not Salesforce sample questions or an official answer key. Findings below check conceptual accuracy against the issuer guide and Salesforce Help.

### Marketing Cloud Engagement Specialist

1. **AMPscript personalization — clarified.** The original phrasing called AMPscript a “content type,” although AMPscript is a scripting language. The question now asks which scripting language personalizes email content using subscriber data. Answer remains AMPscript.
2. **Data Extension purpose — no factual correction.** Answer that Data Extensions store subscriber and relational data is consistent with the product’s data model and exam scope.
3. **Send Time Optimization — explanation qualified.** STO predicts contact-specific send timing from engagement data; it does not guarantee an optimal outcome. The explanation now notes that insufficient data invokes an administrator-configured generalized option.
4. **Delivery Rate — corrected.** “Delivered to subscribers’ inboxes” overstated what delivery reporting establishes. The explanation now says reported successful delivery does not prove inbox placement.
5. **All Subscribers — corrected.** Subscriber records are not automatically removed on unsubscribe. The question now asks which list stores status used to suppress standard sends; the answer remains All Subscribers, where the record remains with its status.

### Marketing Cloud Account Engagement Specialist

1. **Prospect definition — no factual correction.** Salesforce defines prospects as visitors associated with an email address; it also documents manual prospect creation.
2. **Scoring — no factual correction.** Activity such as page views, email opens, form submissions, and downloads can contribute to prospect score.
3. **Scoring versus grading — no factual correction.** Score measures behavior/engagement; grade measures fit against the organization’s profile.
4. **Forms versus form handlers — no factual correction.** Salesforce distinguishes Account Engagement-hosted forms from form handlers that connect external forms to Account Engagement.
5. **Automation rule — explanation narrowed.** Rules continually check updated prospects and apply actions when criteria match. The explanation now avoids implying a schedule; repeat matching requires the Repeat Rule setting.

## Page-Module Corrections

The two disjoint per-cert source modules and four expressly scoped content pages were updated:

- `src/lib/cert-page-spike/promoted-associate/email-specialist.json`: current credential identity, 90-minute duration and official weighted domains; neutral difficulty/preparation language without unsupported pass targets or scenario-frequency percentages; corrections to questions 1, 3, 4, and 5.
- `src/lib/cert-page-spike/promoted-associate/pardot-specialist.json`: neutral credential/legacy-slug distinction, official weighted domains, removal of unsupported highest-pass-mark/practice-score claims and scenario-frequency percentages, and question 5 wording correction.
- `src/app/email-specialist-study-guide/page.tsx` and `src/app/email-specialist-exam-tips/page.tsx`: current 90-minute/67% format including up to five unscored questions, no-prerequisite/MKT 101 advice, issuer domain weights, neutral practice guidance, FAQ structured-data source text, and calendar-year metadata.
- `src/app/pardot-specialist-study-guide/page.tsx` and `src/app/pardot-specialist-exam-tips/page.tsx`: current 90-minute/72% format including up to five unscored questions, no-prerequisite/course-attendance recommendation, issuer domain weights, neutral practice guidance, and FAQ structured-data source text.

Generic release metadata now uses the calendar year rather than asserting that current exam content aligns with a specific seasonal release. Unsupported score thresholds/readiness guarantees and claims about question frequency or candidate error rates were removed or reframed as neutral study suggestions.

## Parent-Integrated Shared Data

The parent integrated the official exam logistics and weighted-domain slices in `src/lib/cert-seo-data.ts` and `src/lib/exam-weightage-data.ts`. Regression assertions compare those shared values, both JSON cards, and the four page modules with the primary exam guides. Those shared source files were not edited in this scoped pass.

## Unresolved Details and Limits

- The official guides do not disclose which questions are unscored, publish scenario-question percentages, or publish candidate pass rates. Page copy must not imply those figures are known.
- The issuer guides identify up to five unscored items, but this audit does not independently observe a live exam or confirm current item delivery.
- The Engagement Specialist exam guide’s Summer ’23 alignment statement may be stale; Salesforce’s guide is the primary source, but the current exam-bank release was not independently verifiable here.
- Fees are issuer-listed USD and JPY amounts plus local taxes; actual booking totals can depend on location and applicable taxes.
- The Account Engagement exam guide does not publish an official sample-question answer key. Review of page questions is conceptual verification against Salesforce Help, not certification of exam-item equivalence or completeness.
- This audit covers identity, listed exam fields/domains, the first five questions visible in each page module, and selected visible FAQ/weight/prerequisite/logistics text in the four named pages. It does not validate the remainder of either sample-question bank, all long-form instructional copy, all shared metadata, or a live exam experience.
