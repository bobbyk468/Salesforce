# Credential audit: Agentforce Specialist and MuleSoft Developer

Audit date: 2026-10-05. Scope: the rendered promoted-associate JSON data modules, their sample-question sets, and issuer materials for credential identity/lifecycle, format, passing score, fees, domains, and prerequisites. Only the two credential-specific JSON data modules were changed. No page components, shared data, KB, package files, or deployment configuration were changed.

## Primary sources

### Salesforce Certified Agentforce Specialist

- Exam guide: https://help.salesforce.com/s/articleView?id=005298924&language=en_US&type=1
- Credential page: https://trailhead.salesforce.com/credentials/agentforcespecialist
- Pricing: https://help.salesforce.com/s/articleView?id=005298916&language=en_US&type=1
- Summer '26 maintenance: https://trailhead.salesforce.com/content/learn/modules/agentforce-specialist-certification-maintenance-summer-26
- Trust and Agentforce: https://help.salesforce.com/s/articleView?id=sf.copilot_trust.htm&language=en_US&type=5
- Data Masking Limitations in Agentforce: https://help.salesforce.com/s/articleView?id=ai.agent_trust_data_masking.htm&language=en_US
- Agentforce (Default) Considerations: https://help.salesforce.com/s/articleView?id=ai.agent_default_considerations.htm&language=en_US&type=5
- The Building Blocks of Agents: https://help.salesforce.com/s/articleView?id=ai.copilot_building_blocks.htm&language=en_US
- Ground Agentforce in Data: https://help.salesforce.com/s/articleView?id=ai.agent_parent_data.htm&language=en_US&type=5

### Salesforce Certified MuleSoft Developer (site route: MuleSoft Developer I)

- Exam guide: https://help.salesforce.com/s/articleView?id=005298959&language=en_US&type=1
- Credential page: https://trailhead.salesforce.com/credentials/mulesoftdeveloperi
- Pricing: https://help.salesforce.com/s/articleView?id=005298916&language=en_US&type=1
- Winter '26 maintenance: https://trailhead.salesforce.com/content/learn/modules/mulesoft-developer-certification-maintenance-winter-26
- Mule 4 event variables: https://docs.mulesoft.com/mule-runtime/4.9/about-mule-variables
- Mule 4 message model: https://docs.mulesoft.com/mule-runtime/4.4/intro-mule-message

## Facts checked and changes

### Agentforce Specialist

- The current issuer exam guide identifies 60 multiple-choice questions, up to five unscored questions, 105 minutes, 72% passing score, and no prerequisite. It describes about one year of related experience as typical audience background, not an eligibility condition. Platform Administrator and Platform App Builder are recommended credentials, not required prerequisites.
- The current exam outline is Prompt Engineering 20%, Data 360 Fundamentals 20%, AI Agents 35%, Testing, Deployment, and Maintenance 10%, Governance and Observability 10%, and Multi-Agent Orchestration 5%.
- Issuer pricing lists Agentforce Specialist at USD 200 registration and USD 100 retake, before applicable taxes. The credential page describes managing and optimizing Agentforce. Salesforce's Summer '26 maintenance module confirms the credential's current maintenance lifecycle.
- Corrected the promoted module's stale ~65% passing score and obsolete outline. Removed unsupported first-hand exam claims, question counts/frequency, scenario-percentage claims, score/pass-rate advice, and categorical claims about required hands-on preparation.
- Corrected Trust Layer statements: Salesforce Help states pattern-based and field-based data masking is disabled for agents. The revised paragraph and sample question no longer imply automatic PII masking; they distinguish the documented third-party zero-data-retention policy and note that supported services/configuration matter.
- Removed the claim that Data Cloud is required for all agent data access. Salesforce describes agents as integrated with CRM data and separately documents configured Data 360/Data Library grounding sources. The relevant sample question now asks when that grounding option is appropriate, not when it is universally necessary.
- Updated the sample question asking the primary exam focus to ask about the official domains. This aligns that item to the current outline; it does not certify every answer or distractor in the question set.

### MuleSoft Developer

- Salesforce currently names the credential “Salesforce Certified MuleSoft Developer”; its credential page describes design/build/test/debug/deploy/manage skills for basic APIs and integrations. The credential is a prerequisite for MuleSoft Developer II. The Winter '26 maintenance module is evidence of a maintained credential lifecycle.
- The available official exam guide states 60 multiple-choice questions plus up to five unscored questions, 120 minutes, 70% passing score, USD 200 registration, USD 100 retake, and no prerequisite certification. **Important limitation:** that guide says its questions align to Spring '24. Those logistics and outline are issuer-published, but this audit did not find a newer MuleSoft Developer exam guide that resolves whether the guide's exam details or outline have changed since Spring '24. Treat currentness of those exam-guide details as unresolved and confirm before booking.
- That published guide lists 12 domains: Creating Application Networks 7%, Designing APIs 8%, Accessing and Modifying Mule Events 10%, Structuring Mule Applications 10%, Building API Implementation Interfaces 7%, Using Connectors 10%, Processing Records 10%, Transforming Data 10%, Routing Events 8%, Handling Errors 8%, Debugging and Troubleshooting Mule Applications 5%, and Deploying and Managing APIs and Integrations 7%. These listed weights total 100%.
- Corrected the promoted module's approximate score label to the guide's stated 70%, replaced unsupported claims about pass rates, required app counts, relative difficulty, and scenario-question percentage with neutral objective-based preparation, and updated the card identity to the current issuer credential name.
- Corrected the Mule 4 sample question that used Mule 3 `flowVars`; Mule 4 event variables are referenced with `vars` (for example, `vars.myVar`).

## Source-backed shared changes needed (not applied)

The following are exact per-entry replacements proposed for the shared source maps. They were deliberately left untouched as requested.

### `src/lib/cert-seo-data.ts`

In `SLUG_TO_EXAM_LOGISTICS`, replace:

```ts
'agentforce-specialist': { questions: 60, passingScore: '~65%', duration: '105 min' },
```

with:

```ts
'agentforce-specialist': { questions: 60, passingScore: '72%', duration: '105 min' },
```

The existing MuleSoft Developer I logistics entry (`60`, `70%`, `120 min`) matches the available issuer guide; currentness is subject to the Spring '24 version caveat above.

In the page-description overrides, replace the Agentforce entry:

```ts
'agentforce-specialist': `${getCertPrimaryName(slug, certName)}: Free sample questions; official exam format: 60 questions, ~65% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
```

with:

```ts
'agentforce-specialist': `${getCertPrimaryName(slug, certName)}: Free sample questions; official exam format: 60 multiple-choice questions plus up to 5 unscored, 72% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
```

Replace the MuleSoft Developer I approximate score in its matching description:

```ts
'mulesoft-developer-i': `${getCertPrimaryName(slug, certName)}: Free sample questions; official exam format: 60 questions, ~70% passing score, 120 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
```

with:

```ts
'mulesoft-developer-i': `${getCertPrimaryName(slug, certName)}: Free sample questions; official exam guide (Spring '24 alignment): 60 multiple-choice questions plus up to 5 unscored, 70% passing score, 120 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
```

### `src/lib/exam-weightage-data.ts`

Replace only the `'agentforce-specialist'` array with:

```ts
'agentforce-specialist': [
  { name: 'Prompt Engineering', percentage: 20 },
  { name: 'Data 360 Fundamentals', percentage: 20 },
  { name: 'AI Agents', percentage: 35 },
  { name: 'Testing, Deployment, and Maintenance', percentage: 10 },
  { name: 'Governance and Observability', percentage: 10 },
  { name: 'Multi-Agent Orchestration', percentage: 5 },
],
```

Replace only the `'mulesoft-developer-i'` array with the domain list in this guide (the available official outline is Spring '24-aligned):

```ts
'mulesoft-developer-i': [
  { name: 'Creating Application Networks', percentage: 7 },
  { name: 'Designing APIs', percentage: 8 },
  { name: 'Accessing and Modifying Mule Events', percentage: 10 },
  { name: 'Structuring Mule Applications', percentage: 10 },
  { name: 'Building API Implementation Interfaces', percentage: 7 },
  { name: 'Using Connectors', percentage: 10 },
  { name: 'Processing Records', percentage: 10 },
  { name: 'Transforming Data', percentage: 10 },
  { name: 'Routing Events', percentage: 8 },
  { name: 'Handling Errors', percentage: 8 },
  { name: 'Debugging and Troubleshooting Mule Applications', percentage: 5 },
  { name: 'Deploying and Managing APIs and Integrations', percentage: 7 },
],
```

The MuleSoft outline weights are copied as published and sum to 100%; they have not been normalized or inferred.

## Not changed / unresolved

- The four standalone study/tips pages have now been edited under the later explicit authorization; see “Promoted page alignment” below. The page edit does not extend to other credential pages.
- `src/components/CertAdminStyleSections.tsx` hardcodes “Multiple-choice & multiple-select” as the question type for every credential. Both current Agentforce guide and the published MuleSoft guide specify multiple-choice questions (plus unscored items), not multiple-select. This shared renderer needs a credential-specific value or should omit that generic claim; it was not edited.
- `src/lib/cert-prerequisites.ts` renders one recommended Agentforce prerequisite (Platform Administrator); the current Agentforce guide recommends both Platform Administrator and Platform App Builder, neither required. Consider whether to add the second recommendation in a separate shared-data change.
- Full product-level truth of every sample-question answer, distractor, and rationale was not independently revalidated. This was a bounded source-backed credential/logistics/domain audit plus the targeted Agentforce Trust Layer/grounding review, not a blanket technical-content or answer-bank verification.

The shared `src/lib/cert-seo-data.ts` and `src/lib/exam-weightage-data.ts` already had user modifications in the working tree before this task. Their status was preserved; no edits to those shared files were made here.

## Promoted page alignment (2026-10-05)

Updated only the four explicitly authorized pages: Agentforce study guide and exam tips, and MuleSoft Developer I study guide and exam tips. The visible exam logistics and page FAQ arrays (also consumed by FAQ schema) now reflect the linked Salesforce guides. The Agentforce pages use the current guide's six names/weights and 72% pass score. Agentforce masking language now states that Salesforce documents masking disabled for agents by default and avoids a blanket claim; Data 360 is not presented as a universal grounding prerequisite. The MuleSoft pages use the published 12 objective names/weights, exact 70% score, no-prerequisite detail, and explicitly flag the exam guide's Spring '24 alignment rather than implying a current product release. Generic page freshness labels use `RELEASE_YEAR` only.

Primary sources linked in the pages:
- Agentforce exam guide: https://help.salesforce.com/s/articleView?id=005298924&language=en_US&type=1
- Agentforce credential: https://trailhead.salesforce.com/credentials/agentforcespecialist
- Salesforce exam pricing: https://help.salesforce.com/s/articleView?id=005298916&language=en_US&type=1
- Agentforce data masking: https://help.salesforce.com/s/articleView?id=ai.agent_trust_data_masking.htm&language=en_US
- Agentforce Trust Layer: https://help.salesforce.com/s/articleView?id=sf.copilot_trust.htm&language=en_US&type=5
- Agentforce configured grounding sources: https://help.salesforce.com/s/articleView?id=ai.agent_parent_data.htm&language=en_US&type=5
- MuleSoft Developer exam guide: https://help.salesforce.com/s/articleView?id=005298959&language=en_US&type=1
- MuleSoft Developer credential: https://trailhead.salesforce.com/credentials/mulesoftdeveloperi

Scoped facts checked on pages: credential identity, guide-stated logistics and prerequisite, published objective names/weights, guide release/version alignment, and Agentforce data-masking / grounding caveats. Salesforce guide pages are the authority for the displayed fees and score; local tax applies as described by issuer. The MuleSoft exam guide itself labels its content Spring '24, so no assertion is made that its objective list reflects a later exam version.

Unresolved / bounded review: page prose and the full practice banks were not independently fact-checked question by question; this is not an all-technical-content or answer-key verification. No unsupported exam weights, pass rates, candidate-frequency statements, or mock-score thresholds are intended as issuer claims. Parent-owned `src/lib/cert-seo-data.ts` page-description overrides remain outside this write scope; parent handles those and other shared slices. No shared modules, package files, or deployment/build artifacts were changed.
