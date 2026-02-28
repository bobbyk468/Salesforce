#!/usr/bin/env python3
"""
P3: Update FAQ questions to PAA format.

For each exam-tips page:
1. Find the first FAQ question that matches 'What is the X exam format?' pattern
2. Replace it with a PAA-aligned 'How hard is X to pass?' question
3. The answer keeps format details but leads with a difficulty assessment

This makes FAQs more likely to appear in Google's 'People Also Ask' boxes.
"""
import os
import re

APP_DIR = "/Users/brahmajikatragadda/Downloads/salesforce-certifications/src/app"

# Per-cert PAA override: slug -> (paa_question, paa_answer)
# These are the highest-traffic certs — custom-crafted answers
CERT_PAA_OVERRIDES: dict[str, tuple[str, str]] = {
    'adm-201-exam-tips-2026': (
        'Is ADM-201 hard to pass on the first attempt?',
        'ADM-201 has roughly a 70% first-attempt pass rate, making it moderately challenging. The exam is scenario-based — it rewards candidates who understand the &apos;why&apos; behind admin decisions, not just feature lists. Candidates with hands-on Salesforce admin experience typically pass in 4–6 weeks of focused study, while those coming in cold may need 8–10 weeks. Consistently scoring 75%+ on timed mock tests before booking is the best readiness signal.',
    ),
    'pd1-exam-tips-2026': (
        'How hard is Platform Developer I to pass?',
        'PD1 is moderately difficult — it requires genuine Apex coding knowledge, not just configuration familiarity. The exam tests governor limits, trigger patterns, asynchronous Apex (Batch, Queueable, Future), and SOQL/DML best practices at a depth that surprises candidates who rely solely on Trailhead. Developers with 6+ months of Salesforce development experience typically pass in 6–8 weeks. Consistently scoring 75%+ on mock tests is the recommended readiness benchmark.',
    ),
    'pd2-exam-tips-2026': (
        'How hard is Platform Developer II to pass?',
        'PD2 is one of the hardest Salesforce certifications — it has a multiple-choice component plus a superbadge, and the overall pass rate is estimated below 50% on the first attempt. It requires advanced Apex (integration patterns, complex triggers, test strategy), JavaScript, and Lightning Web Component architecture. Most candidates need 3–6 months of dedicated advanced development experience beyond PD1. Attempt PD1 first and ensure you can score 80%+ on PD2 practice tests before booking.',
    ),
    'app-builder-exam-tips': (
        'How hard is the Salesforce App Builder exam?',
        'App Builder is considered moderately easy for candidates with admin experience, with a first-attempt pass rate of around 75%. The 63% passing score is achievable with a strong foundation in Lightning App Builder, page layouts, record types, and basic automation (Flow). Candidates who hold or are studying for Administrator certification typically need 3–4 additional weeks of focused prep. The hardest section is Lightning App Builder — understanding when to use standard vs custom components is a common exam differentiator.',
    ),
    'service-cloud-consultant-exam-tips': (
        'How hard is the Service Cloud Consultant exam?',
        'Service Cloud Consultant requires a 67% passing score, making it more demanding than the standard 65% threshold. It is considered one of the harder consultant-level certifications due to the breadth of omni-channel routing, entitlements, knowledge management, and field service integration topics tested. Candidates with 12+ months of Service Cloud implementation experience typically pass in 6–8 weeks. Most candidates who fail do so on entitlements and omni-channel routing — prioritise those sections.',
    ),
    'agentforce-specialist-exam-tips': (
        'How hard is the Agentforce Specialist exam?',
        'Agentforce Specialist is a newer certification with a 65% passing score and moderate difficulty. The exam focuses heavily on Agentforce configuration — Topics, Actions, prompt templates, and agent testing — rather than deep platform development. Candidates with Salesforce admin or developer background and hands-on Agentforce sandbox experience typically pass in 4–6 weeks. Because the technology is evolving rapidly, using the most current Trailhead Agentforce Trailmix is essential.',
    ),
    'business-analyst-exam-tips': (
        'How hard is the Salesforce Business Analyst exam?',
        'Business Analyst has a 72% passing score — one of the highest in the Salesforce ecosystem — making it one of the more demanding non-architect certifications. It heavily tests business analysis techniques (user stories, process mapping, stakeholder interviews) applied in Salesforce project contexts, which requires real consulting or BA experience. Candidates with genuine requirements-gathering experience pass in 4–6 weeks; those without BA backgrounds typically need longer. The 72% bar means there is very little margin for error on any exam section.',
    ),
    'data-cloud-consultant-exam-tips': (
        'How hard is the Data Cloud Consultant exam?',
        'Data Cloud Consultant is considered challenging because it covers a rapidly evolving product across a wide range of domains: data ingestion, identity resolution, segmentation, data actions, and Einstein integration. The 65% passing threshold is standard, but the breadth of content — especially Data Cloud&apos;s distinct data model (DMOs, data bundles, activation) — catches candidates off guard. Implementation experience with real Data Cloud orgs is strongly recommended before attempting. Most candidates need 6–8 weeks of dedicated study.',
    ),
    'ai-associate-exam-tips': (
        'How hard is the Salesforce AI Associate exam?',
        'AI Associate is the most accessible Salesforce certification — it has only 40 questions, a 65% passing score, a 70-minute time limit, and a $75 fee. First-attempt pass rates are high (80%+) for candidates with basic AI literacy. The exam focuses on AI concepts (bias, grounding, NLP), Salesforce AI features (Einstein, Agentforce), and ethical AI principles rather than technical implementation. Most candidates pass with 2–3 weeks of study using the official Trailhead AI Associate Trailmix.',
    ),
    'experience-cloud-exam-tips': (
        'How hard is the Experience Cloud Consultant exam?',
        'Experience Cloud Consultant requires 65% to pass and is considered moderately difficult. The exam tests a wide range of portal configuration topics: site templates, sharing settings for guest users, CMS, member management, and Lightning Web Runtime (LWR). Candidates who have built and deployed actual Experience Cloud sites (portals, partner hubs, customer communities) typically pass in 6–8 weeks. Guest user sharing — including sharing sets, sharing rules, and public access settings — is the section most candidates find hardest.',
    ),
    'sales-cloud-exam-tips': (
        'How hard is the Sales Cloud Consultant exam?',
        'Sales Cloud Consultant requires 65% to pass and is moderate to challenging. It tests the full sales process — leads, accounts, opportunities, forecasting, territory management, and Sales Engagement — at a consulting depth that requires knowing which Salesforce feature to configure for a given business scenario. Candidates with 12+ months of Sales Cloud implementation experience typically pass in 6–8 weeks. Forecasting and territory management are the hardest sections due to their complex configuration options.',
    ),
    'advanced-administrator-exam-tips': (
        'How hard is the Salesforce Advanced Administrator exam?',
        'Advanced Administrator requires 65% to pass and is considered harder than the standard Administrator exam. It tests advanced automation (complex Flow logic, error handling), advanced security (delegated administration, profile vs permission set strategies at scale), and advanced data management (duplicate rules, external data sources). Most candidates need active admin experience and 6–8 weeks of targeted study beyond Administrator certification. The exam rewards practical troubleshooting experience over theoretical knowledge.',
    ),
    'marketing-cloud-consultant-exam-tips': (
        'How hard is the Marketing Cloud Consultant exam?',
        'Marketing Cloud Consultant has a 67% passing score and is considered one of the more challenging Marketing Cloud certifications. It tests full campaign architecture — journey design, segmentation strategy, data extension schema, deliverability, and cross-channel reporting — at a consultant depth. Most candidates need 12+ months of hands-on Marketing Cloud Engagement experience and 8–10 weeks of focused study. The hardest sections are Journey Builder logic and deliverability/sender reputation — prioritise those.',
    ),
    'field-service-exam-tips': (
        'How hard is the Field Service Consultant exam?',
        'Field Service Consultant has a 67% passing score and is considered one of the harder consultant-level certifications due to the complexity of work order management, scheduling optimisation, and mobile worker configuration. It requires understanding the full field service lifecycle: service territories, resources, scheduling policies, and appointment booking. Most candidates need hands-on Field Service Lightning experience and 8–10 weeks of dedicated study. Scheduling optimisation rules and service territory setup are the most commonly missed sections.',
    ),
    'cpq-administrator-exam-tips': (
        'How hard is the CPQ Specialist exam?',
        'CPQ Specialist (formerly CPQ Administrator) requires 65% to pass and is considered moderately difficult due to the complex product catalogue and pricing engine configuration it tests. Understanding the CPQ data model — Products, Price Books, Price Rules, Quote Line Editor, and Approval workflows — requires hands-on CPQ sandbox experience. Most candidates need 8–10 weeks of dedicated study with access to a CPQ sandbox. Pricing waterfall and Guided Selling are the most tested — and most commonly missed — sections.',
    ),
    'education-cloud-consultant-exam-tips': (
        'How hard is the Education Cloud Consultant exam?',
        'Education Cloud Consultant has a 67% passing score and is considered moderately challenging. It tests Education Cloud&apos;s purpose-built data model (Education Data Architecture), student recruitment and admissions flows, student success features, and integration with institutional systems. Candidates with hands-on Education Cloud implementation experience typically pass in 6–8 weeks. The Education Data Architecture (EDA) relationships — Account-based student model, affiliations, relationships, and program plans — are the most heavily tested topics.',
    ),
    'pardot-specialist-exam-tips': (
        'How hard is the Pardot Specialist exam?',
        'Pardot Specialist requires 65% to pass and is considered moderate difficulty. It tests marketing automation in Pardot/Account Engagement: campaigns, lists, forms, landing pages, email templates, automation rules, and scoring. Candidates with hands-on Pardot experience typically pass in 4–6 weeks. The hardest section is automation rules vs segmentation rules vs dynamic lists — understanding when each fires and their priority order is the key differentiator between passing and failing candidates.',
    ),
    'ux-designer-exam-tips': (
        'How hard is the Salesforce UX Designer exam?',
        'UX Designer requires 65% to pass and is considered moderate difficulty. Uniquely, it focuses on UX research and design principles rather than Salesforce configuration — design thinking methodology, accessibility standards, user research techniques, and wireframing concepts are the core topics. Salesforce platform knowledge helps for Lightning-specific UX questions, but the exam rewards design methodology knowledge more than admin/dev experience. Most candidates need 4–6 weeks, and those with UX or product design backgrounds have a strong advantage.',
    ),
    'omnistudio-consultant-exam-tips': (
        'How hard is the OmniStudio Consultant exam?',
        'OmniStudio Consultant requires 65% to pass and is considered moderate difficulty for those with OmniStudio implementation experience. It tests FlexCard configuration, OmniScript design, DataRaptor mappings, and when to use each tool for a given use case — without coding. Consultants who have delivered OmniStudio implementations typically pass in 4–6 weeks. The hardest section is DataRaptor type selection (Extract, Transform, Load, Turbo) — understanding which DataRaptor to use in which scenario is heavily tested.',
    ),
    'omnistudio-developer-exam-tips': (
        'How hard is the OmniStudio Developer exam?',
        'OmniStudio Developer requires 65% to pass and is more challenging than the Consultant track because it adds LWC customisation of OmniStudio components, TypeScript, and Apex integration patterns to the core OmniStudio knowledge. Developers with 6+ months of OmniStudio development experience typically pass in 6–8 weeks. The hardest sections are custom LWC integration with OmniStudio and Integration Procedures — understanding how Integration Procedures call external APIs and chain DataRaptors is the most tested advanced topic.',
    ),
    'system-architect-exam-tips': (
        'How hard is the Salesforce System Architect exam?',
        'System Architect is the consolidating credential for the System Architect track — it requires passing Integration Architect, Identity &amp; Access Management Architect, and Dev Lifecycle &amp; Deployment Architect first. The System Architect exam itself requires 65% to pass and tests breadth across all three domains rather than depth in any one area. Most candidates who have passed all three component exams find the System Architect exam manageable with 4–6 weeks of integrated review. The hardest sections combine topics across all three domains — cross-domain scenario questions are the primary differentiator.',
    ),
    'data-architect-exam-tips': (
        'How hard is the Salesforce Data Architect exam?',
        'Data Architect requires 62% to pass — the lowest threshold among architect-level exams — but is still considered challenging due to the depth of data modelling, Master Data Management (MDM), Large Data Volume (LDV) strategies, and data governance concepts tested. Candidates without real-world data architecture experience often underestimate the LDV sections: skinny tables, custom indexing, and archiving strategies require practical understanding. Most candidates need 8–12 weeks of dedicated study with hands-on org experience.',
    ),
    'integration-architect-exam-tips': (
        'How hard is the Salesforce Integration Architect exam?',
        'Integration Architect is widely considered the hardest of the three System Architect track exams, with a 62% passing score. It requires deep knowledge of enterprise integration patterns, API-led connectivity, MuleSoft Anypoint Platform capabilities, middleware selection criteria, and Salesforce governor limits in integration contexts. Candidates without real integration architecture experience — designing both synchronous and asynchronous patterns at enterprise scale — typically struggle. Most candidates need 10–14 weeks of preparation, with hands-on MuleSoft and Salesforce API experience strongly recommended.',
    ),
    'application-architect-exam-tips': (
        'How hard is the Salesforce Application Architect exam?',
        'Application Architect is the consolidating credential for the Application Architect track — requiring Data Architect, Sharing &amp; Visibility Architect, and Platform App Builder as prerequisites. The exam requires 67% to pass and tests breadth across all three application architect domains. Most candidates who have passed all three component exams find the Application Architect exam achievable with 4–6 weeks of integrated review, focusing on cross-domain scenario questions. The hardest questions combine data architecture with sharing and visibility constraints simultaneously.',
    ),
    'sharing-visibility-architect-exam-tips': (
        'How hard is the Sharing &amp; Visibility Architect exam?',
        'Sharing &amp; Visibility Architect requires 65% to pass and is considered one of the more conceptually challenging architect-level exams. It tests the full Salesforce sharing model at enterprise scale: OWD settings, role hierarchy design, sharing rules (criteria-based vs owner-based), manual sharing, Apex managed sharing, and the performance implications of each approach with large data volumes. Understanding the interaction between sharing model components — especially in complex orgs with millions of records — requires real-world experience. Most candidates need 8–12 weeks of study.',
    ),
    'identity-access-management-architect-exam-tips': (
        'How hard is the Identity &amp; Access Management Architect exam?',
        'IAM Architect requires 65% to pass and is considered moderately challenging among the System Architect track exams. It tests SAML SSO, OAuth flows, connected apps, delegated authentication, and external identity management in Salesforce and Experience Cloud contexts. The hardest sections are OAuth flow selection (which flow for which scenario: Web Server, JWT Bearer, Device, PKCE) and managing external identity at scale for Experience Cloud portals. Most candidates need 8–10 weeks of dedicated study with hands-on SSO/OAuth configuration experience.',
    ),
    'dev-lifecycle-deployment-architect-exam-tips': (
        'How hard is the Dev Lifecycle &amp; Deployment Architect exam?',
        'Dev Lifecycle &amp; Deployment Architect requires 65% to pass and is generally considered the most approachable of the three System Architect track exams. It tests release management strategy, scratch org development, CI/CD pipeline design, change set limitations vs package-based development, and deployment best practices. Developers and DevOps professionals with Salesforce DX and CI/CD experience typically pass in 6–8 weeks. The hardest section is packaging strategy — understanding 1GP vs 2GP packages and when each is appropriate is a commonly tested differentiator.',
    ),
    'slack-developer-exam-tips': (
        'How hard is the Slack Developer exam?',
        'Slack Developer requires 65% to pass and is considered moderate difficulty for developers familiar with Slack&apos;s API ecosystem. It tests Slack app architecture (Bolt framework, Socket Mode vs HTTP), Block Kit layout builder, Workflow Builder steps, Events API, and Slack platform governance. Developers with Node.js or Python Bolt experience and hands-on Slack app development typically pass in 4–6 weeks. The hardest sections are Events API subscription vs Web API differences and Block Kit interactivity patterns.',
    ),
    'mulesoft-integration-foundations-exam-tips': (
        'How hard is the MuleSoft Integration Foundations exam?',
        'MuleSoft Integration Foundations has a 70% passing score but only 45 questions in 60 minutes, making it accessible for its price ($75). It is a foundational-level exam covering core integration concepts, basic Anypoint Platform navigation, and MuleSoft&apos;s API-led connectivity framework — not deep technical implementation. Most candidates with basic integration or API familiarity pass in 2–3 weeks using the official Trailhead Trailmix. It is the entry point to the MuleSoft certification path, not a substitute for the Developer I or Integration Architect credentials.',
    ),
    'marketing-cloud-engagement-developer-exam-tips': (
        'How hard is the Marketing Cloud Engagement Developer exam?',
        'Marketing Cloud Engagement Developer requires 65% to pass and is considered one of the harder developer-level Salesforce certifications. It tests AMPscript, SSJS (Server-Side JavaScript), REST/SOAP API integration with Marketing Cloud, data extension manipulation, and automation configuration at a technical depth that requires hands-on development experience. Most candidates need 8–10 weeks of dedicated preparation with access to a Marketing Cloud sandbox for hands-on practice. AMPscript string functions and conditional logic are the most commonly failed sections.',
    ),
    'revenue-cloud-consultant-exam-tips': (
        'How hard is the Revenue Cloud Consultant exam?',
        'Revenue Cloud Consultant (formerly CPQ &amp; Billing Consultant) requires 65% to pass and is considered challenging due to the breadth of Salesforce Revenue Cloud: CPQ product configuration, pricing waterfall, contract amendments, order management, and Revenue Cloud&apos;s Billing engine. Candidates without hands-on Revenue Cloud implementation experience often underestimate the billing-side depth tested. Most candidates need 10–12 weeks of dedicated study with CPQ and Billing sandbox access. Contract amendments and pricing rules are the hardest sections.',
    ),
    'crm-analytics-exam-tips': (
        'How hard is the CRM Analytics &amp; Einstein Discovery Consultant exam?',
        'CRM Analytics &amp; Einstein Discovery Consultant requires 65% to pass and is considered moderately challenging. It tests dashboard and lens creation, SAQL (Salesforce Analytics Query Language), dataset recipes, Einstein Discovery story configuration, and integration with Salesforce objects. SAQL is the most technically demanding element — it requires understanding aggregations, grouping, foreach, and time functions that are not covered by point-and-click configuration. Most candidates need 8–10 weeks of hands-on CRM Analytics studio practice.',
    ),
    'b2b-solution-architect-exam-tips': (
        'How hard is the B2B Solution Architect exam?',
        'B2B Solution Architect requires 65% to pass and is considered challenging because it tests multi-cloud solution design — integrating Sales Cloud, Service Cloud, B2B Commerce, Revenue Cloud, and Marketing Cloud in unified B2B customer journey architectures. The exam rewards candidates who have worked on complex multi-cloud implementations and can reason about the trade-offs between cloud boundaries, data synchronisation, and org strategy. Most candidates need 10–12 weeks of preparation with experience across multiple Salesforce B2B clouds.',
    ),
    'b2c-solution-architect-exam-tips': (
        'How hard is the B2C Solution Architect exam?',
        'B2C Solution Architect requires 65% to pass and tests multi-cloud consumer experience architecture — typically combining B2C Commerce, Marketing Cloud, Service Cloud, and Experience Cloud. Like its B2B counterpart, it rewards candidates who can design across cloud boundaries and reason about identity (single customer view, Marketing Cloud Connect, Commerce Cloud/Service Cloud integration). Most candidates need 10–12 weeks of preparation with multi-cloud implementation experience. Identity resolution and cross-cloud data consistency are the hardest topics.',
    ),
    'tableau-data-analyst-exam-tips': (
        'How hard is the Tableau Data Analyst exam?',
        'Tableau Data Analyst has a 72% passing score — the highest in the Tableau certification family — making it one of the more demanding entry-level data certifications. It requires 55 questions in 120 minutes and tests hands-on Tableau Desktop skills: connecting to data sources, creating calculated fields, building LOD expressions (FIXED, INCLUDE, EXCLUDE), and designing interactive dashboards. LOD calculations are the most commonly failed topic. Most candidates need 6–8 weeks of daily hands-on Tableau practice — this is a skill exam, not a knowledge exam.',
    ),
    'ai-associate-exam-tips': (
        'How hard is the Salesforce AI Associate exam?',
        'AI Associate is the most accessible Salesforce certification — 40 questions, 65% passing score, 70-minute time limit, $75 fee — with first-attempt pass rates estimated above 80%. It tests AI literacy (bias, transparency, NLP basics), Salesforce AI features (Einstein, Agentforce concepts), and ethical AI principles at a foundational level. It does not require coding or deep technical knowledge. Most candidates pass with 2–3 weeks of study using the official Trailhead AI Associate Trailmix. It is the recommended starting point for the Salesforce AI certification path.',
    ),
    'health-cloud-ap-exam-tips': (
        'How hard is the Health Cloud Accredited Professional exam?',
        'Health Cloud AP is a Pass/Fail accredited professional exam (40 questions, 60 minutes, $150) designed for practitioners with hands-on Health Cloud implementation experience. It is considered moderately difficult for those who have configured Health Cloud on real healthcare projects. Candidates without implementation experience often find the exam harder due to the healthcare-specific data model (person accounts, care teams, care plans, provider networks) that requires contextual understanding. Most experienced practitioners pass with 3–4 weeks of focused review of the official Health Cloud Trailmix.',
    ),
    'financial-services-cloud-ap-exam-tips': (
        'How hard is the Financial Services Cloud Accredited Professional exam?',
        'Financial Services Cloud AP is a Pass/Fail accredited professional exam (40 questions, 60 minutes, $150) designed for practitioners with hands-on FSC implementation experience. It tests FSC&apos;s specialised data model: household and individual accounts, financial accounts, financial goals, action plans, and referrals. Candidates with real FSC project experience typically pass in 3–4 weeks of focused study. Those without FSC hands-on experience find the financial services data model and referral management workflows the hardest sections.',
    ),
    'manufacturing-cloud-ap-exam-tips': (
        'How hard is the Manufacturing Cloud Accredited Professional exam?',
        'Manufacturing Cloud AP is a Pass/Fail accredited professional exam (40 questions, 60 minutes, $150). It tests Manufacturing Cloud&apos;s specialised capabilities: account-based forecasting, sales agreements, rebate management, and the Manufacturing Cloud data model for complex B2B relationships. Practitioners with hands-on Manufacturing Cloud experience typically pass in 3–4 weeks. Sales agreements — including agreement terms, actuals calculation, and renewal workflows — are the most tested and most commonly missed topic.',
    ),
}


def slug_to_display_name(slug: str) -> str:
    """Derive a human-readable cert name from the slug for generic templates."""
    name = slug.replace('-exam-tips-2026', '').replace('-exam-tips', '')
    name = name.replace('-ap-', ' AP ').replace('-ap', ' AP')
    parts = name.split('-')
    title_parts = []
    for p in parts:
        if p.upper() in ('AP', 'CTA', 'CRM', 'CPQ', 'UX', 'LWC', 'B2B', 'B2C', 'AI'):
            title_parts.append(p.upper())
        elif p.lower() in ('i', 'ii', 'iii'):
            title_parts.append(p.upper())
        else:
            title_parts.append(p.capitalize())
    return ' '.join(title_parts)


def get_cert_type(slug: str) -> str:
    if '-ap-' in slug or slug.endswith('-ap-exam-tips'):
        return 'ap'
    if slug.startswith('mulesoft-') and 'foundations' not in slug:
        return 'mulesoft'
    if slug.startswith('tableau-'):
        return 'tableau'
    if 'foundations' in slug:
        return 'foundations'
    if 'technical-architect' in slug:
        return 'cta'
    return 'standard'


def make_generic_paa(slug: str) -> tuple[str, str]:
    """Generate a generic PAA question+answer for certs not in the override dict."""
    display = slug_to_display_name(slug)
    cert_type = get_cert_type(slug)

    if cert_type == 'ap':
        q = f'How hard is the {display} exam?'
        a = (
            f'The {display} is a Pass/Fail accredited professional exam (40 questions, 60 minutes, $150) '
            f'designed for practitioners with hands-on implementation experience. '
            f'It is considered moderately challenging for those who have configured {display.replace(" AP", "").replace(" Accredited Professional", "")} '
            f'on real customer projects. Candidates without hands-on experience often find the specialised data model '
            f'and feature configuration scenarios harder than expected. Most experienced practitioners pass '
            f'with 3–4 weeks of focused review using the official Salesforce Trailmix for this accreditation.'
        )
    elif cert_type == 'mulesoft':
        q = f'How hard is the {display} exam?'
        a = (
            f'The {display} requires 70% to pass — higher than most Salesforce certifications — '
            f'making it among the more demanding exams in the ecosystem. '
            f'It tests MuleSoft Anypoint Platform capabilities, API design patterns, and integration architecture '
            f'at a depth that requires hands-on MuleSoft Studio and Runtime experience. '
            f'Most candidates need 8–12 weeks of dedicated preparation and access to a MuleSoft trial environment. '
            f'Dataweave transformation logic and error handling patterns are typically the hardest sections.'
        )
    elif cert_type == 'tableau':
        q = f'How hard is the {display} exam?'
        a = (
            f'The {display} requires a 70%+ passing score and tests hands-on Tableau platform skills '
            f'that cannot be mastered through reading alone. '
            f'Daily practice in Tableau Desktop or Tableau Cloud is essential — this is a skills-based exam. '
            f'Most candidates need 6–8 weeks of consistent hands-on practice. '
            f'Calculated fields, LOD expressions, and dashboard interactivity actions are the most commonly '
            f'missed topics.'
        )
    elif cert_type == 'foundations':
        q = f'How hard is the {display} exam?'
        a = (
            f'The {display} is an entry-level foundational exam with a lower price point ($75–$150) '
            f'and fewer questions (40–45), designed to validate baseline knowledge rather than deep expertise. '
            f'It is considered accessible for candidates who complete the official Trailhead Trailmix. '
            f'Most candidates with basic familiarity with the subject area pass with 2–3 weeks of study.'
        )
    elif cert_type == 'cta':
        q = f'Is the {display} worth pursuing?'
        a = (
            f'The {display} is the most prestigious credential in the Salesforce ecosystem — '
            f'held by fewer than 1% of certified professionals. It validates the ability to design '
            f'enterprise-scale Salesforce architectures across all domains simultaneously. '
            f'CTAs command the highest salaries in the Salesforce job market and are sought by top SIs and consulting firms. '
            f'The investment is significant (time, study, and fees), but for architects targeting the top of the Salesforce career ladder, '
            f'it is widely considered the most valuable credential available.'
        )
    else:
        # Standard cert
        q = f'How hard is the {display} exam?'
        a = (
            f'The {display} requires 65% to pass (105 minutes, 60 questions, $200) and is considered '
            f'moderately challenging. It rewards candidates with hands-on Salesforce experience over those '
            f'who study theory alone. Most candidates with relevant platform experience need 6–8 weeks of '
            f'dedicated study. Taking timed mock exams and consistently scoring 75%+ before booking is the '
            f'best readiness indicator for first-attempt success.'
        )

    return q, a


# Pattern to find the first FAQ question line
FORMAT_QUESTION_PATTERNS = [
    r"question: '(What is the .+? exam format[^']*)'",
    r'question: "(What is the .+? exam format[^"]*)"',
    r"question: '(What is the .+?Accredited Professional exam format[^']*)'",
    r"question: '(What is the .+? exam\?)'",  # broad fallback
]

updated = []
skipped = []
errors = []

for dirname in sorted(os.listdir(APP_DIR)):
    is_exam_tips = (
        dirname.endswith('-exam-tips')
        or dirname.endswith('-exam-tips-2026')
        or dirname == 'pd2-exam-tips-2026'
    )
    if not is_exam_tips:
        continue

    page_file = os.path.join(APP_DIR, dirname, 'page.tsx')
    if not os.path.exists(page_file):
        errors.append(f'MISSING: {page_file}')
        continue

    with open(page_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Already PAA-updated check: if any existing FAQ question is PAA-style, skip
    paa_markers = ['How hard is', 'How long should I study', 'Is it hard to pass', 'Is .+ hard to pass',
                   'worth it', 'pass rate', 'first attempt']
    has_paa = any(marker.lower() in content.lower() for marker in
                  ['How hard is', 'How long should I study', 'first attempt', 'worth it', 'worth pursuing'])
    if has_paa:
        skipped.append(f'{dirname} (already has PAA-style question)')
        continue

    # Get the PAA question+answer for this slug
    if dirname in CERT_PAA_OVERRIDES:
        paa_q, paa_a = CERT_PAA_OVERRIDES[dirname]
    else:
        paa_q, paa_a = make_generic_paa(dirname)

    # Find and replace the first 'What is the ... exam format?' question
    # We look for the question field in the faqItems array
    format_pattern = re.compile(
        r"(question:\s*['\"])What is the .+? exam format[^'\"]*(['\"])",
        re.IGNORECASE
    )
    # Also try broader pattern for AP pages
    ap_pattern = re.compile(
        r"(question:\s*['\"])What is the .+? exam format.*?(['\"])",
        re.IGNORECASE
    )

    new_content = format_pattern.sub(
        lambda m: m.group(1) + paa_q + m.group(2),
        content,
        count=1
    )

    if new_content == content:
        # Try broader replacement: replace FIRST question in faqItems with PAA version
        # Find the first `question:` in the faqItems block
        faq_start = content.find('const faqItems = [')
        if faq_start == -1:
            errors.append(f'NO faqItems: {dirname}')
            continue

        first_q_match = re.search(
            r"(question:\s*['\"])([^'\"]+)(['\"])",
            content[faq_start:],
        )
        if not first_q_match:
            errors.append(f'NO question found: {dirname}')
            continue

        # Check if first question is informational (not already PAA)
        first_q_text = first_q_match.group(2)
        if any(kw.lower() in first_q_text.lower() for kw in
               ['How hard', 'How long', 'worth it', 'first attempt', 'worth pursuing']):
            skipped.append(f'{dirname} (first question is already PAA)')
            continue

        # Replace only the first occurrence in faqItems
        faq_portion = content[faq_start:]
        new_faq_portion = re.sub(
            r"(question:\s*['\"])([^'\"]+)(['\"])",
            lambda m: m.group(1) + paa_q + m.group(3),
            faq_portion,
            count=1,
        )
        new_content = content[:faq_start] + new_faq_portion

    # Also replace the corresponding answer for that first question
    # Find the answer immediately following the question we just replaced
    # (It's the first `answer:` after the faqItems start)
    faq_start_new = new_content.find('const faqItems = [')
    if faq_start_new != -1:
        faq_portion_new = new_content[faq_start_new:]
        # Replace first answer in faqItems with our PAA answer
        answer_match = re.search(r"(answer:\s*')(.*?)(?=',$|',\s*$)", faq_portion_new, re.DOTALL | re.MULTILINE)
        if answer_match:
            new_faq_portion_2 = faq_portion_new[:answer_match.start()] + \
                                f"answer: '{paa_a}'" + \
                                faq_portion_new[answer_match.end():]
            new_content = new_content[:faq_start_new] + new_faq_portion_2

    if new_content == content:
        errors.append(f'NO CHANGE: {dirname}')
        continue

    with open(page_file, 'w', encoding='utf-8') as f:
        f.write(new_content)

    updated.append(dirname)


print(f'\n✅ Updated:  {len(updated)} pages')
print(f'⏭  Skipped:  {len(skipped)} pages')
print(f'❌ Errors:   {len(errors)}')
if errors:
    for e in errors:
        print(f'   {e}')
if skipped:
    print('\nSkipped pages:')
    for s in skipped:
        print(f'   {s}')
if updated:
    print('\nUpdated pages:')
    for u in updated:
        print(f'   {u}')
