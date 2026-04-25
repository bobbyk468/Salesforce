#!/usr/bin/env python3
"""
Adds WhichFirstBlock to all 20 VS/comparison pages.
Inserts after <ContentPageAuthor /> with page-specific data.

Run:
    python3 scripts/add-which-first-blocks.py
"""

import re
from pathlib import Path

ROOT = Path(__file__).parent.parent
APP = ROOT / "src" / "app"

# ---------------------------------------------------------------------------
# Page-specific WhichFirstBlock data for all 20 VS pages
# certSlug → the certifications/{slug} page
# examTipsSlug → the {slug}-exam-tips page (optional)
# careerPathSlug → a career/path guide page (optional)
# ---------------------------------------------------------------------------

VS_PAGES: dict[str, dict] = {
    "agentforce-specialist-vs-ai-associate": {
        "certA": {
            "name": "Agentforce Specialist",
            "certSlug": "agentforce-specialist",
            "examTipsSlug": "agentforce-specialist-exam-tips",
            "conditions": [
                "You already hold AI Associate or want to build on it",
                "Your org is actively deploying Agentforce or Einstein Copilot",
                "You want hands-on configuration skills, not just AI concepts",
                "You are targeting the highest-demand Salesforce skill in 2026",
            ],
        },
        "certB": {
            "name": "AI Associate",
            "certSlug": "ai-associate",
            "examTipsSlug": "ai-associate-exam-tips",
            "conditions": [
                "You are new to AI and want a conceptual foundation first",
                "You have limited Salesforce hands-on experience",
                "You want the fastest Salesforce credential to earn (2 weeks)",
                "You plan to use it as a stepping stone to Agentforce Specialist",
            ],
        },
        "recommendation": {
            "certName": "AI Associate",
            "certSlug": "ai-associate",
            "examTipsSlug": "ai-associate-exam-tips",
            "reason": "AI Associate takes two weeks and costs $75 — take it first to build the conceptual foundation, then move directly to Agentforce Specialist. Both together represent the strongest AI signal you can add to a Salesforce profile in 2026.",
            "careerPathSlug": "agentforce-specialist-study-guide",
            "careerPathLabel": "Agentforce Specialist Guide",
        },
    },
    "app-builder-vs-developer-i": {
        "certA": {
            "name": "Platform App Builder",
            "certSlug": "app-builder",
            "examTipsSlug": "app-builder-exam-tips",
            "conditions": [
                "You work in a non-developer, admin, or BA role",
                "You have no Apex or LWC coding experience",
                "You want to build toward the Architect path",
                "You are looking for the fastest cert after Admin",
            ],
        },
        "certB": {
            "name": "Platform Developer I",
            "certSlug": "developer-1",
            "examTipsSlug": "pd1-exam-tips",
            "conditions": [
                "You write — or plan to write — Apex code",
                "You work in a developer role and need the credential to match",
                "You want the highest salary ceiling among non-architect certs",
                "You already understand SOQL, triggers, and governor limits",
            ],
        },
        "recommendation": {
            "certName": "Platform App Builder",
            "certSlug": "app-builder",
            "examTipsSlug": "app-builder-exam-tips",
            "reason": "App Builder is the natural next step after Admin for most Salesforce professionals — no coding required, strong salary bump, and it opens the architect path. Only pivot to Platform Developer I first if you are actively writing Apex code in your current role.",
            "careerPathSlug": "admin-certification-path",
            "careerPathLabel": "Admin & Builder Certification Path",
        },
    },
    "adm-201-vs-app-builder": {
        "certA": {
            "name": "Salesforce Administrator",
            "certSlug": "administrator-practice-test",
            "examTipsSlug": "adm-201-exam-tips",
            "conditions": [
                "You are new to Salesforce entirely",
                "Your role involves users, data, security, or reports",
                "You want the most widely required Salesforce credential",
                "You are building a foundation for all future certifications",
            ],
        },
        "certB": {
            "name": "Platform App Builder",
            "certSlug": "app-builder",
            "examTipsSlug": "app-builder-exam-tips",
            "conditions": [
                "You already hold the Admin certification",
                "You build Lightning pages, flows, or custom apps regularly",
                "You want a fast second cert with high overlap to your existing knowledge",
                "You are planning toward the Architect certification path",
            ],
        },
        "recommendation": {
            "certName": "Salesforce Administrator",
            "certSlug": "administrator-practice-test",
            "examTipsSlug": "adm-201-exam-tips",
            "reason": "Always take Administrator first. It is the required foundation — App Builder explicitly builds on ADM-201 content, and many employers list Admin as a prerequisite for App Builder roles. Attempting App Builder without Admin knowledge is the most common reason candidates fail.",
            "careerPathSlug": "admin-certification-path",
            "careerPathLabel": "Admin Certification Path",
        },
    },
    "pd1-vs-pd2": {
        "certA": {
            "name": "Platform Developer I",
            "certSlug": "developer-1",
            "examTipsSlug": "pd1-exam-tips",
            "conditions": [
                "You do not yet hold the PD1 certification",
                "You are building foundational Apex and LWC skills",
                "You have 0–2 years of Salesforce development experience",
                "You want the credential that unlocks developer career paths",
            ],
        },
        "certB": {
            "name": "Platform Developer II",
            "certSlug": "developer-2",
            "examTipsSlug": "pd2-exam-tips",
            "conditions": [
                "You already hold Platform Developer I",
                "You work with Apex design patterns, async jobs, or performance tuning daily",
                "You are targeting senior developer or tech lead roles",
                "You have 3+ years of Salesforce development experience",
            ],
        },
        "recommendation": {
            "certName": "Platform Developer I",
            "certSlug": "developer-1",
            "examTipsSlug": "pd1-exam-tips",
            "reason": "PD1 is the prerequisite — not just logically but in employer expectations. You cannot attempt PD2 credibly without having mastered PD1 content. Most developers spend 6–12 months between PD1 and PD2.",
            "careerPathSlug": "developer-certification-path",
            "careerPathLabel": "Developer Certification Path",
        },
    },
    "integration-architect-vs-system-architect": {
        "certA": {
            "name": "Integration Architect",
            "certSlug": "integration-architect",
            "examTipsSlug": "integration-architect-exam-tips",
            "conditions": [
                "You work on API design, middleware, or enterprise integration projects",
                "You are not yet pursuing the full CTA path",
                "You want a standalone architect credential with a strong salary premium",
                "Your clients regularly need multi-system integration architecture",
            ],
        },
        "certB": {
            "name": "System Architect",
            "certSlug": "system-architect",
            "examTipsSlug": "system-architect-exam-tips",
            "conditions": [
                "You are committed to the full Certified Technical Architect path",
                "You already hold two or more domain architect credentials",
                "You have 8+ years of Salesforce experience across multiple orgs",
                "You are targeting the highest architect salary tier",
            ],
        },
        "recommendation": {
            "certName": "Integration Architect",
            "certSlug": "integration-architect",
            "examTipsSlug": "integration-architect-exam-tips",
            "reason": "Integration Architect is a strong standalone credential with real salary impact — worth pursuing on its own merits. System Architect is a milestone on the CTA path, not a target in isolation. Only pursue System Architect if you are genuinely committed to reaching CTA.",
            "careerPathSlug": "architect-certification-path",
            "careerPathLabel": "Architect Certification Path",
        },
    },
    "business-analyst-vs-strategy-designer": {
        "certA": {
            "name": "Business Analyst",
            "certSlug": "business-analyst",
            "examTipsSlug": "business-analyst-exam-tips",
            "conditions": [
                "You gather requirements, write user stories, or manage stakeholders",
                "You work in a non-technical Salesforce role and want a credential to match",
                "You are transitioning from a BA or project management background",
                "You want a cert that pairs well with a functional consultant credential",
            ],
        },
        "certB": {
            "name": "Strategy Designer",
            "certSlug": "strategy-designer",
            "examTipsSlug": "strategy-designer-exam-tips",
            "conditions": [
                "You lead design thinking workshops or UX research sessions",
                "You translate business needs into Salesforce solutions visually",
                "You work closely with UX teams or run journey mapping exercises",
                "You want to differentiate as a consultant who can lead human-centred design",
            ],
        },
        "recommendation": {
            "certName": "Business Analyst",
            "certSlug": "business-analyst",
            "examTipsSlug": "business-analyst-exam-tips",
            "reason": "Business Analyst has broader employer recognition and pairs naturally with any functional consultant cert. Strategy Designer is a strong differentiator but is best taken after BA — it extends the skillset rather than replacing it.",
        },
    },
    "data-cloud-vs-crm-analytics": {
        "certA": {
            "name": "Data Cloud Consultant",
            "certSlug": "data-cloud-consultant",
            "examTipsSlug": "data-cloud-consultant-exam-tips",
            "conditions": [
                "Your clients are unifying customer data across channels",
                "You work with Salesforce CDP, Data Cloud, or real-time data activation",
                "You want the fastest-growing and most in-demand cert of 2026",
                "You are comfortable with data pipelines and identity resolution concepts",
            ],
        },
        "certB": {
            "name": "CRM Analytics Consultant",
            "certSlug": "crm-analytics-einstein-discovery-consultant",
            "examTipsSlug": "crm-analytics-exam-tips",
            "conditions": [
                "You build dashboards, SAQL queries, and Einstein Discovery models",
                "Your work is analytics and reporting within Salesforce CRM",
                "You work with Tableau CRM or Einstein Analytics regularly",
                "You are in a BI or data analyst role inside a Salesforce org",
            ],
        },
        "recommendation": {
            "certName": "Data Cloud Consultant",
            "certSlug": "data-cloud-consultant",
            "examTipsSlug": "data-cloud-consultant-exam-tips",
            "reason": "Data Cloud Consultant is the higher-growth investment — demand is accelerating and certified talent is genuinely scarce. CRM Analytics is a strong credential for analytics-focused roles, but Data Cloud commands a higher salary premium and broader client demand in 2026.",
        },
    },
    "sales-cloud-vs-service-cloud": {
        "certA": {
            "name": "Sales Cloud Consultant",
            "certSlug": "sales-cloud",
            "examTipsSlug": "sales-cloud-exam-tips",
            "conditions": [
                "Your clients use Salesforce primarily for pipeline, forecasting, or CRM",
                "You come from a sales operations or CRM admin background",
                "You want the most widely needed consultant credential",
                "You work in B2B or enterprise sales environments",
            ],
        },
        "certB": {
            "name": "Service Cloud Consultant",
            "certSlug": "service-cloud",
            "examTipsSlug": "service-cloud-consultant-exam-tips",
            "conditions": [
                "Your clients run call centres, field service, or customer support operations",
                "You work with cases, entitlements, Omni-Channel, or Knowledge",
                "You are in a service-intensive industry — telco, utilities, retail",
                "You want to differentiate from the larger pool of Sales Cloud consultants",
            ],
        },
        "recommendation": {
            "certName": "Sales Cloud Consultant",
            "certSlug": "sales-cloud",
            "examTipsSlug": "sales-cloud-exam-tips",
            "reason": "Sales Cloud Consultant has the broadest demand — almost every Salesforce implementation involves Sales Cloud at some level. Take it first to maximise consulting opportunities, then add Service Cloud to double your client-facing credential coverage.",
            "careerPathSlug": "certification-path",
            "careerPathLabel": "Salesforce Certification Path",
        },
    },
    "mulesoft-developer-i-vs-ii": {
        "certA": {
            "name": "MuleSoft Developer I",
            "certSlug": "mulesoft-developer-i",
            "examTipsSlug": "mulesoft-developer-i-exam-tips",
            "conditions": [
                "You are new to MuleSoft or Anypoint Platform",
                "You want the foundational developer credential first",
                "You have 0–2 years of MuleSoft hands-on experience",
                "You are starting the MuleSoft certification path",
            ],
        },
        "certB": {
            "name": "MuleSoft Developer II",
            "certSlug": "mulesoft-developer-ii",
            "examTipsSlug": "mulesoft-developer-ii-exam-tips",
            "conditions": [
                "You already hold MuleSoft Developer I",
                "You work with advanced DataWeave, performance tuning, or complex flows daily",
                "You are targeting senior developer or integration lead roles",
                "You have 3+ years of MuleSoft development experience",
            ],
        },
        "recommendation": {
            "certName": "MuleSoft Developer I",
            "certSlug": "mulesoft-developer-i",
            "examTipsSlug": "mulesoft-developer-i-exam-tips",
            "reason": "MuleSoft Developer I is the required foundation — both in terms of knowledge and employer expectations. Developer II content assumes full mastery of Developer I concepts. Most candidates take 6–12 months between the two.",
        },
    },
    "administrator-vs-advanced-administrator": {
        "certA": {
            "name": "Salesforce Administrator",
            "certSlug": "administrator-practice-test",
            "examTipsSlug": "adm-201-exam-tips",
            "conditions": [
                "You do not yet hold any Salesforce certification",
                "You are new to the platform or have less than 1 year of hands-on experience",
                "You want the most widely required credential across all Salesforce roles",
                "You are starting any Salesforce career path",
            ],
        },
        "certB": {
            "name": "Advanced Administrator",
            "certSlug": "advanced-administrator",
            "examTipsSlug": "advanced-administrator-exam-tips",
            "conditions": [
                "You already hold the Administrator certification",
                "You have 2+ years of hands-on Salesforce admin experience",
                "You work with advanced automation, territory management, or Salesforce Connect",
                "You are targeting senior admin or platform manager roles",
            ],
        },
        "recommendation": {
            "certName": "Salesforce Administrator",
            "certSlug": "administrator-practice-test",
            "examTipsSlug": "adm-201-exam-tips",
            "reason": "Administrator is the mandatory first step — Advanced Administrator explicitly tests you on Admin concepts plus additional depth. You cannot reasonably attempt Advanced Admin without first having mastered the Admin credential.",
            "careerPathSlug": "admin-certification-path",
            "careerPathLabel": "Admin Certification Path",
        },
    },
    "field-service-vs-service-cloud-consultant": {
        "certA": {
            "name": "Field Service Consultant",
            "certSlug": "field-service",
            "examTipsSlug": "field-service-exam-tips",
            "conditions": [
                "Your clients dispatch technicians, manage work orders, or run field operations",
                "You work in utilities, telco, manufacturing, or facilities management",
                "You want a niche credential with low supply and strong demand",
                "You have hands-on FSL scheduling and configuration experience",
            ],
        },
        "certB": {
            "name": "Service Cloud Consultant",
            "certSlug": "service-cloud",
            "examTipsSlug": "service-cloud-consultant-exam-tips",
            "conditions": [
                "Your clients run contact centres, case management, or customer support",
                "You work with Omni-Channel, entitlements, or Knowledge",
                "You want a broader service credential that applies to more clients",
                "You are earlier in your Salesforce consulting career",
            ],
        },
        "recommendation": {
            "certName": "Service Cloud Consultant",
            "certSlug": "service-cloud",
            "examTipsSlug": "service-cloud-consultant-exam-tips",
            "reason": "Service Cloud Consultant applies to a much wider range of clients. Take it first to build a strong service foundation, then add Field Service as a specialist credential if your clients operate in field-heavy industries.",
        },
    },
    "ux-designer-vs-strategy-designer": {
        "certA": {
            "name": "UX Designer",
            "certSlug": "ux-designer",
            "examTipsSlug": "ux-designer-exam-tips",
            "conditions": [
                "You design interfaces, flows, or Lightning page layouts in Salesforce",
                "You want to demonstrate UX fundamentals and accessibility knowledge",
                "You work closely with developers on component and page design",
                "You are new to the designer certification track",
            ],
        },
        "certB": {
            "name": "Strategy Designer",
            "certSlug": "strategy-designer",
            "examTipsSlug": "strategy-designer-exam-tips",
            "conditions": [
                "You lead discovery workshops, journey mapping, or design sprints",
                "You translate ambiguous business problems into Salesforce solutions",
                "You work at a strategic level with stakeholders, not just on UI",
                "You want the higher-differentiation credential in the designer track",
            ],
        },
        "recommendation": {
            "certName": "UX Designer",
            "certSlug": "ux-designer",
            "examTipsSlug": "ux-designer-exam-tips",
            "reason": "UX Designer covers the foundational design principles that underpin Strategy Designer content. Take it first to build the vocabulary and frameworks, then Strategy Designer becomes a natural, well-supported progression.",
        },
    },
    "education-cloud-vs-nonprofit-cloud-consultant": {
        "certA": {
            "name": "Education Cloud Consultant",
            "certSlug": "education-cloud-consultant",
            "examTipsSlug": "education-cloud-consultant-exam-tips",
            "conditions": [
                "Your clients are universities, K-12 schools, or education departments",
                "You work with student lifecycle, admissions, or advancement use cases",
                "You want to dominate a niche with very low certified competition",
                "Your implementation work is in higher education or ed-tech",
            ],
        },
        "certB": {
            "name": "Nonprofit Cloud Consultant",
            "certSlug": "nonprofit-cloud",
            "examTipsSlug": "nonprofit-cloud-exam-tips",
            "conditions": [
                "Your clients are charities, NGOs, foundations, or social enterprises",
                "You work with NPSP, fundraising, grants, or program management",
                "You serve organisations using Salesforce.org or Nonprofit Success Pack",
                "You want a niche credential with higher brand recognition than Education",
            ],
        },
        "recommendation": {
            "certName": "Nonprofit Cloud Consultant",
            "certSlug": "nonprofit-cloud",
            "examTipsSlug": "nonprofit-cloud-exam-tips",
            "reason": "Nonprofit Cloud Consultant has slightly broader employer recognition and a larger addressable market. Only choose Education Cloud first if your current work is exclusively in the education sector.",
        },
    },
    "platform-foundations-vs-ai-associate": {
        "certA": {
            "name": "Platform Foundations",
            "certSlug": "platform-foundations",
            "examTipsSlug": "platform-foundations-exam-tips",
            "conditions": [
                "You are completely new to Salesforce with zero platform exposure",
                "You want the gentlest possible introduction to the ecosystem",
                "You are evaluating whether a Salesforce career is right for you",
                "You plan to follow up immediately with the Administrator credential",
            ],
        },
        "certB": {
            "name": "AI Associate",
            "certSlug": "ai-associate",
            "examTipsSlug": "ai-associate-exam-tips",
            "conditions": [
                "You have some Salesforce experience and want an AI credential quickly",
                "You want the fastest Salesforce cert with the highest growth relevance",
                "You plan to pursue Agentforce Specialist as your next step",
                "Your organisation is actively using or evaluating Einstein or Agentforce",
            ],
        },
        "recommendation": {
            "certName": "AI Associate",
            "certSlug": "ai-associate",
            "examTipsSlug": "ai-associate-exam-tips",
            "reason": "AI Associate is faster to earn and far more relevant in the 2026 market. Platform Foundations is only worth considering if you have zero Salesforce exposure — otherwise, AI Associate gives you a better return on study time.",
        },
    },
    "pardot-specialist-vs-pardot-consultant": {
        "certA": {
            "name": "Pardot Specialist",
            "certSlug": "pardot-specialist",
            "examTipsSlug": "pardot-specialist-exam-tips",
            "conditions": [
                "You are new to Account Engagement (formerly Pardot)",
                "You work in a B2B marketing role and want a foundational credential",
                "You manage email campaigns, automation rules, or lead scoring",
                "You are building toward the Pardot Consultant certification",
            ],
        },
        "certB": {
            "name": "Pardot Consultant",
            "certSlug": "pardot-consultant",
            "examTipsSlug": "pardot-consultant-exam-tips",
            "conditions": [
                "You already hold Pardot Specialist",
                "You design and implement full Account Engagement solutions for clients",
                "You work at a consulting firm delivering B2B marketing implementations",
                "You have 2+ years of hands-on Pardot/Account Engagement experience",
            ],
        },
        "recommendation": {
            "certName": "Pardot Specialist",
            "certSlug": "pardot-specialist",
            "examTipsSlug": "pardot-specialist-exam-tips",
            "reason": "Pardot Specialist is the required foundation. Consultant content assumes Specialist-level mastery plus additional implementation strategy depth. Take Specialist first, then progress to Consultant after 12+ months of platform experience.",
        },
    },
    "b2b-vs-b2c-solution-architect": {
        "certA": {
            "name": "B2B Solution Architect",
            "certSlug": "b2b-solution-architect",
            "examTipsSlug": "b2b-solution-architect-exam-tips",
            "conditions": [
                "Your clients are enterprise B2B organisations using Sales, Service, and Revenue Cloud",
                "You architect multi-cloud solutions for business-to-business use cases",
                "You work with complex CRM, CPQ, and partner portal implementations",
                "You want an architect credential outside the CTA path",
            ],
        },
        "certB": {
            "name": "B2C Solution Architect",
            "certSlug": "b2c-solution-architect",
            "examTipsSlug": "b2c-solution-architect-exam-tips",
            "conditions": [
                "Your clients are consumer-facing businesses using Commerce, Marketing, and Service Cloud",
                "You design solutions for B2C e-commerce, loyalty, or marketing automation",
                "You work with Salesforce Commerce Cloud or Marketing Cloud integrations",
                "You architect high-volume consumer data flows",
            ],
        },
        "recommendation": {
            "certName": "B2B Solution Architect",
            "certSlug": "b2b-solution-architect",
            "examTipsSlug": "b2b-solution-architect-exam-tips",
            "reason": "B2B Solution Architect applies to a broader range of Salesforce's core CRM clients. B2C is the right choice only if your practice is specifically in consumer e-commerce or B2C Marketing Cloud — otherwise B2B gives you wider applicability.",
            "careerPathSlug": "architect-certification-path",
            "careerPathLabel": "Architect Certification Path",
        },
    },
    "javascript-developer-i-vs-pd1": {
        "certA": {
            "name": "JavaScript Developer I",
            "certSlug": "javascript-developer-i",
            "examTipsSlug": "javascript-developer-i-exam-tips",
            "conditions": [
                "You are a frontend developer moving into Salesforce",
                "You are already strong in JavaScript ES6+ and web components",
                "You build LWC components and want the credential to match",
                "You want to differentiate from pure Apex developers",
            ],
        },
        "certB": {
            "name": "Platform Developer I",
            "certSlug": "developer-1",
            "examTipsSlug": "pd1-exam-tips",
            "conditions": [
                "You write Apex code, triggers, or Salesforce automation",
                "You come from a Java or backend development background",
                "You want the most widely recognised Salesforce developer credential",
                "You plan to build toward Platform Developer II or the Architect track",
            ],
        },
        "recommendation": {
            "certName": "Platform Developer I",
            "certSlug": "developer-1",
            "examTipsSlug": "pd1-exam-tips",
            "reason": "Platform Developer I has broader employer recognition and is the standard entry point for Salesforce developer careers. JavaScript Developer I is a strong complement — take PD1 first to establish your core credentials, then add JavaScript Developer I to demonstrate frontend depth.",
            "careerPathSlug": "developer-certification-path",
            "careerPathLabel": "Developer Certification Path",
        },
    },
    "marketing-cloud-admin-vs-developer": {
        "certA": {
            "name": "Marketing Cloud Engagement Admin",
            "certSlug": "marketing-cloud-engagement-admin",
            "examTipsSlug": "marketing-cloud-engagement-admin-exam-tips",
            "conditions": [
                "You configure Marketing Cloud — Business Units, users, and deliverability",
                "You work in a platform admin or operations role within Marketing Cloud",
                "You do not write AMPscript or SSJS",
                "You want a foundational Marketing Cloud credential",
            ],
        },
        "certB": {
            "name": "Marketing Cloud Engagement Developer",
            "certSlug": "marketing-cloud-engagement-developer",
            "examTipsSlug": "marketing-cloud-engagement-developer-exam-tips",
            "conditions": [
                "You write AMPscript, SSJS, or custom content blocks",
                "You build API integrations with Marketing Cloud",
                "You come from a developer or technical consultant background",
                "You want the higher-salary Marketing Cloud credential",
            ],
        },
        "recommendation": {
            "certName": "Marketing Cloud Engagement Admin",
            "certSlug": "marketing-cloud-engagement-admin",
            "examTipsSlug": "marketing-cloud-engagement-admin-exam-tips",
            "reason": "Admin is the foundational credential — take it first to understand the platform architecture before adding Developer-level complexity. The exception: if you are already a developer with AMPscript experience, Developer is a better direct investment.",
        },
    },
    "salesforce-admin-vs-developer-career": {
        "certA": {
            "name": "Salesforce Administrator",
            "certSlug": "administrator-practice-test",
            "examTipsSlug": "adm-201-exam-tips",
            "conditions": [
                "You prefer configuration, automation, and business process work over coding",
                "You want the broadest range of job opportunities from a single certification",
                "You come from a non-technical, operations, or project management background",
                "You want a faster path to employment — Admin roles are the highest volume",
            ],
        },
        "certB": {
            "name": "Platform Developer I",
            "certSlug": "developer-1",
            "examTipsSlug": "pd1-exam-tips",
            "conditions": [
                "You enjoy writing code and want to build Apex classes and LWC components",
                "You come from a software development or computer science background",
                "You want the highest salary ceiling in the Salesforce non-architect track",
                "You are willing to invest 3–6 months in technical preparation",
            ],
        },
        "recommendation": {
            "certName": "Salesforce Administrator",
            "certSlug": "administrator-practice-test",
            "examTipsSlug": "adm-201-exam-tips",
            "reason": "Administrator is the better starting point for most career switchers — higher job volume, faster time to employment, and it remains useful even if you pivot to developer later. Only start with Developer I if you have an existing coding background and are certain about the technical path.",
            "careerPathSlug": "which-salesforce-certification-first",
            "careerPathLabel": "Which Certification First Guide",
        },
    },
    "cpq-admin-vs-cpq-billing-ap": {
        "certA": {
            "name": "CPQ Administrator",
            "certSlug": "cpq-administrator",
            "examTipsSlug": "cpq-administrator-exam-tips",
            "conditions": [
                "You configure Salesforce CPQ — products, pricing rules, quote templates",
                "You implement quote-to-cash processes for clients",
                "You are earlier in your CPQ journey and need the foundational credential",
                "You want the more widely recognised CPQ certification",
            ],
        },
        "certB": {
            "name": "CPQ Billing Accredited Professional",
            "certSlug": "cpq-administrator",
            "examTipsSlug": "cpq-billing-ap-exam-tips",
            "conditions": [
                "You already hold CPQ Administrator and want a specialist extension",
                "Your clients use Salesforce Billing for invoicing and revenue recognition",
                "You work on full Revenue Cloud implementations including billing workflows",
                "You want to differentiate as a Revenue Cloud specialist",
            ],
        },
        "recommendation": {
            "certName": "CPQ Administrator",
            "certSlug": "cpq-administrator",
            "examTipsSlug": "cpq-administrator-exam-tips",
            "reason": "CPQ Administrator is the essential foundation. Billing AP builds directly on CPQ knowledge — attempting it without CPQ Administrator experience is one of the most common reasons candidates struggle. Take CPQ Admin first, then specialise into Billing AP once you have real CPQ project experience.",
        },
    },
}

IMPORT_LINE = "import WhichFirstBlock from '@/components/WhichFirstBlock'\n"


def build_jsx(data: dict) -> str:
    def fmt_conditions(conds: list[str]) -> str:
        return "\n".join(f'          "{c}",' for c in conds)

    ca = data["certA"]
    cb = data["certB"]
    rec = data["recommendation"]

    tips_a = f'examTipsSlug: "{ca["examTipsSlug"]}",' if ca.get("examTipsSlug") else ""
    tips_b = f'examTipsSlug: "{cb["examTipsSlug"]}",' if cb.get("examTipsSlug") else ""
    tips_r = f'examTipsSlug: "{rec["examTipsSlug"]}",' if rec.get("examTipsSlug") else ""
    path_r = (
        f'careerPathSlug: "{rec["careerPathSlug"]}",\n          careerPathLabel: "{rec["careerPathLabel"]}",'
        if rec.get("careerPathSlug") else ""
    )

    return f"""
      <WhichFirstBlock
        certA={{{{
          name: "{ca["name"]}",
          certSlug: "{ca["certSlug"]}",
          {tips_a}
          conditions: [
{fmt_conditions(ca["conditions"])}
          ],
        }}}}
        certB={{{{
          name: "{cb["name"]}",
          certSlug: "{cb["certSlug"]}",
          {tips_b}
          conditions: [
{fmt_conditions(cb["conditions"])}
          ],
        }}}}
        recommendation={{{{
          certName: "{rec["certName"]}",
          certSlug: "{rec["certSlug"]}",
          {tips_r}
          reason: "{rec["reason"]}",
          {path_r}
        }}}}
      />"""


def patch_vs_page(page_path: Path, jsx: str) -> bool:
    src = page_path.read_text(encoding="utf-8")

    if "WhichFirstBlock" in src:
        print(f"  SKIP (already patched): {page_path.parent.name}")
        return False

    # Add import
    last_import = list(re.finditer(r"^import .+$", src, re.MULTILINE))
    if not last_import:
        print(f"  SKIP (no imports): {page_path.parent.name}")
        return False
    pos = last_import[-1].end()
    src = src[:pos] + "\n" + IMPORT_LINE + src[pos:]

    # Insert after <ContentPageAuthor ... />
    pattern = r"(<ContentPageAuthor[^/]*/?>)"
    new_src, count = re.subn(pattern, r"\1" + jsx, src, count=1)
    if count == 0:
        print(f"  SKIP (ContentPageAuthor not found): {page_path.parent.name}")
        return False

    page_path.write_text(new_src, encoding="utf-8")
    print(f"  PATCHED: {page_path.parent.name}")
    return True


def main() -> None:
    patched = 0
    print("=== Adding WhichFirstBlock to VS pages ===\n")

    for dir_name, data in VS_PAGES.items():
        page_path = APP / dir_name / "page.tsx"
        if not page_path.exists():
            print(f"  MISSING: {dir_name}")
            continue
        jsx = build_jsx(data)
        if patch_vs_page(page_path, jsx):
            patched += 1

    print(f"\nDone. Patched {patched} pages.")


if __name__ == "__main__":
    main()
