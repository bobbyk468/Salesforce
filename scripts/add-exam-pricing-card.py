#!/usr/bin/env python3
"""
Injects ExamPricingCard into all study-guide pages after the CertInsightBlock.
Shows exam fee, retake fee, tier label, AP no-discount note, and India GST note.

Run:
    python3 scripts/add-exam-pricing-card.py
"""

import re
from pathlib import Path

ROOT = Path(__file__).parent.parent
APP = ROOT / "src" / "app"

# Maps study-guide dir → (certSlug for getExamCost, certName, certPageSlug)
STUDY_GUIDE_MAP: dict[str, tuple[str, str, str]] = {
    "adm-201-study-guide":                                ("administrator",           "Salesforce Administrator",                  "administrator-practice-test"),
    "advanced-administrator-study-guide":                 ("advanced-administrator",  "Advanced Administrator",                    "advanced-administrator"),
    "agentforce-specialist-study-guide":                  ("agentforce-specialist",   "Agentforce Specialist",                     "agentforce-specialist"),
    "ai-associate-study-guide":                           ("ai-associate",            "AI Associate",                              "ai-associate"),
    "app-builder-study-guide":                            ("app-builder",             "Platform App Builder",                      "app-builder"),
    "application-architect-study-guide":                  ("application-architect",   "Application Architect",                     "application-architect"),
    "b2b-solution-architect-study-guide":                 ("b2b-solution-architect",  "B2B Solution Architect",                    "b2b-solution-architect"),
    "b2c-commerce-architect-study-guide":                 ("b2c-commerce-architect",  "B2C Commerce Architect",                    "b2c-commerce-architect"),
    "b2c-commerce-developer-study-guide":                 ("b2c-commerce-developer",  "B2C Commerce Developer",                    "b2c-commerce-developer-ap"),
    "b2c-solution-architect-study-guide":                 ("b2c-solution-architect",  "B2C Solution Architect",                    "b2c-solution-architect"),
    "business-analyst-study-guide":                       ("business-analyst",        "Business Analyst",                          "business-analyst"),
    "cpq-administrator-study-guide":                      ("cpq-administrator",       "CPQ Administrator",                         "cpq-administrator"),
    "crm-analytics-study-guide":                          ("crm-analytics-einstein-discovery-consultant", "CRM Analytics Consultant", "crm-analytics-einstein-discovery-consultant"),
    "data-architect-study-guide":                         ("data-architect",          "Data Architect",                            "data-architect"),
    "data-cloud-consultant-study-guide":                  ("data-cloud-consultant",   "Data Cloud Consultant",                     "data-cloud-consultant"),
    "dev-lifecycle-deployment-architect-study-guide":     ("dev-lifecycle-deployment-architect", "Dev Lifecycle & Deployment Architect", "dev-lifecycle-deployment-architect"),
    "education-cloud-consultant-study-guide":             ("education-cloud-consultant", "Education Cloud Consultant",              "education-cloud-consultant"),
    "email-specialist-study-guide":                       ("email-specialist",        "Marketing Cloud Email Specialist",           "email-specialist"),
    "experience-cloud-consultant-study-guide":            ("experience-cloud",        "Experience Cloud Consultant",               "experience-cloud"),
    "field-service-consultant-study-guide":               ("field-service",           "Field Service Consultant",                  "field-service"),
    "identity-access-management-architect-study-guide":   ("identity-access-management-architect", "Identity & Access Management Architect", "identity-access-management-architect"),
    "integration-architect-study-guide":                  ("integration-architect",   "Integration Architect",                     "integration-architect"),
    "javascript-developer-i-study-guide":                 ("javascript-developer-i",  "JavaScript Developer I",                    "javascript-developer-i"),
    "marketing-cloud-consultant-study-guide":             ("marketing-cloud-consultant", "Marketing Cloud Consultant",              "marketing-cloud-consultant"),
    "marketing-cloud-engagement-admin-study-guide":       ("marketing-cloud-engagement-admin", "Marketing Cloud Engagement Admin",  "marketing-cloud-engagement-admin"),
    "marketing-cloud-engagement-developer-study-guide":   ("marketing-cloud-engagement-developer", "Marketing Cloud Engagement Developer", "marketing-cloud-engagement-developer"),
    "marketing-cloud-engagement-foundations-study-guide": ("marketing-cloud-engagement-foundations", "Marketing Cloud Engagement Foundations", "marketing-cloud-engagement-foundations"),
    "mulesoft-developer-i-study-guide":                   ("mulesoft-developer-i",    "MuleSoft Developer I",                      "mulesoft-developer-i"),
    "mulesoft-developer-ii-study-guide":                  ("mulesoft-developer-ii",   "MuleSoft Developer II",                     "mulesoft-developer-ii"),
    "mulesoft-integration-architect-study-guide":         ("mulesoft-integration-architect", "MuleSoft Integration Architect",       "mulesoft-integration-architect"),
    "mulesoft-integration-foundations-study-guide":       ("mulesoft-integration-foundations", "MuleSoft Integration Foundations",   "mulesoft-integration-foundations"),
    "mulesoft-platform-architect-study-guide":            ("mulesoft-platform-architect", "MuleSoft Platform Architect",            "mulesoft-platform-architect"),
    "nonprofit-cloud-consultant-study-guide":             ("nonprofit-cloud",          "Nonprofit Cloud Consultant",                "nonprofit-cloud"),
    "nonprofit-success-pack-consultant-study-guide":      ("nonprofit-success-pack-consultant", "Nonprofit Success Pack Consultant", "nonprofit-success-pack-consultant"),
    "omnistudio-consultant-study-guide":                  ("omnistudio-consultant",    "OmniStudio Consultant",                     "omnistudio-consultant"),
    "omnistudio-developer-study-guide":                   ("omnistudio-developer",     "OmniStudio Developer",                      "omnistudio-developer"),
    "pardot-consultant-study-guide":                      ("pardot-consultant",        "Pardot Consultant",                         "pardot-consultant"),
    "pardot-specialist-study-guide":                      ("pardot-specialist",        "Pardot Specialist",                         "pardot-specialist"),
    "pd1-study-guide":                                    ("developer-1",              "Platform Developer I",                      "developer-1"),
    "pd2-study-guide":                                    ("developer-2",              "Platform Developer II",                     "developer-2"),
    "platform-foundations-study-guide":                   ("platform-foundations",     "Platform Foundations",                      "platform-foundations"),
    "revenue-cloud-consultant-study-guide":               ("revenue-cloud-consultant", "Revenue Cloud Consultant",                  "revenue-cloud-consultant"),
    "sales-cloud-consultant-study-guide":                 ("sales-cloud",              "Sales Cloud Consultant",                    "sales-cloud"),
    "service-cloud-consultant-study-guide":               ("service-cloud",            "Service Cloud Consultant",                  "service-cloud"),
    "service-cloud-study-guide":                          ("service-cloud",            "Service Cloud Consultant",                  "service-cloud"),
    "sharing-visibility-architect-study-guide":           ("sharing-visibility-architect", "Sharing & Visibility Architect",         "sharing-visibility-architect"),
    "slack-administrator-study-guide":                    ("slack-administrator",      "Slack Administrator",                       "slack-administrator"),
    "strategy-designer-study-guide":                      ("strategy-designer",        "Strategy Designer",                         "strategy-designer"),
    "system-architect-study-guide":                       ("system-architect",         "System Architect",                          "system-architect"),
    "tableau-data-analyst-study-guide":                   ("tableau-data-analyst",     "Tableau Data Analyst",                      "tableau-data-analyst"),
    "technical-architect-study-guide":                    ("technical-architect",      "Technical Architect",                       "technical-architect"),
    "ux-designer-study-guide":                            ("ux-designer",              "UX Designer",                               "ux-designer"),
}

IMPORT_LINE = "import ExamPricingCard from '@/components/ExamPricingCard'\n"


def patch(page_path: Path, cert_slug: str, cert_name: str, cert_page_slug: str) -> bool:
    src = page_path.read_text(encoding="utf-8")

    if "ExamPricingCard" in src:
        print(f"  SKIP (already has ExamPricingCard): {page_path.parent.name}")
        return False

    # Add import
    last_import = list(re.finditer(r"^import .+$", src, re.MULTILINE))
    if not last_import:
        print(f"  SKIP (no imports): {page_path.parent.name}")
        return False
    pos = last_import[-1].end()
    src = src[:pos] + "\n" + IMPORT_LINE + src[pos:]

    cert_name_safe = cert_name.replace('"', '\\"')
    jsx = (
        f'\n      <ExamPricingCard'
        f'\n        certSlug="{cert_slug}"'
        f'\n        certName="{cert_name_safe}"'
        f'\n        certPageSlug="{cert_page_slug}"'
        f'\n      />'
    )

    # Insert after <CertInsightBlock ... /> if present, else after <ExamTipsCrossLink ... />
    for pattern in [
        r'(<CertInsightBlock\b[^<]*/>)',
        r'(<ExamTipsCrossLink\b[^<]*/>)',
        r'(<ContentPageAuthor[^<]*/>)',
    ]:
        new_src, count = re.subn(pattern, r'\1' + jsx, src, count=1)
        if count:
            page_path.write_text(new_src, encoding="utf-8")
            print(f"  PATCHED: {page_path.parent.name}")
            return True

    print(f"  SKIP (no insertion point): {page_path.parent.name}")
    return False


def main() -> None:
    patched = 0
    print("=== Injecting ExamPricingCard into study-guide pages ===\n")
    for dir_name, (cert_slug, cert_name, cert_page_slug) in sorted(STUDY_GUIDE_MAP.items()):
        page_path = APP / dir_name / "page.tsx"
        if not page_path.exists():
            print(f"  MISSING: {dir_name}")
            continue
        if patch(page_path, cert_slug, cert_name, cert_page_slug):
            patched += 1
    print(f"\nDone. Patched {patched} pages.")


if __name__ == "__main__":
    main()
