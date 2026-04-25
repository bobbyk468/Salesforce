#!/usr/bin/env python3
"""
Injects ExamPricingCard into exam-tips pages that have a matching study guide.
Inserted after StudyGuideCrossLink (the hub cross-link banner).

Run:
    python3 scripts/add-pricing-to-exam-tips.py
"""

import re
from pathlib import Path

ROOT = Path(__file__).parent.parent
APP = ROOT / "src" / "app"

# Maps exam-tips dir → (certSlug for getExamCost, certName, certPageSlug)
EXAM_TIPS_MAP: dict[str, tuple[str, str, str]] = {
    "adm-201-exam-tips":                                  ("administrator",            "Salesforce Administrator",                  "administrator-practice-test"),
    "advanced-administrator-exam-tips":                   ("advanced-administrator",   "Advanced Administrator",                    "advanced-administrator"),
    "agentforce-specialist-exam-tips":                    ("agentforce-specialist",    "Agentforce Specialist",                     "agentforce-specialist"),
    "ai-associate-exam-tips":                             ("ai-associate",             "AI Associate",                              "ai-associate"),
    "app-builder-exam-tips":                              ("app-builder",              "Platform App Builder",                      "app-builder"),
    "application-architect-exam-tips":                    ("application-architect",    "Application Architect",                     "application-architect"),
    "b2b-solution-architect-exam-tips":                   ("b2b-solution-architect",   "B2B Solution Architect",                    "b2b-solution-architect"),
    "b2c-commerce-architect-exam-tips":                   ("b2c-commerce-architect",   "B2C Commerce Architect",                    "b2c-commerce-architect"),
    "b2c-commerce-developer-exam-tips":                   ("b2c-commerce-developer",   "B2C Commerce Developer",                    "b2c-commerce-developer-ap"),
    "b2c-solution-architect-exam-tips":                   ("b2c-solution-architect",   "B2C Solution Architect",                    "b2c-solution-architect"),
    "business-analyst-exam-tips":                         ("business-analyst",         "Business Analyst",                          "business-analyst"),
    "cpq-administrator-exam-tips":                        ("cpq-administrator",        "CPQ Administrator",                         "cpq-administrator"),
    "crm-analytics-exam-tips":                            ("crm-analytics-einstein-discovery-consultant", "CRM Analytics Consultant", "crm-analytics-einstein-discovery-consultant"),
    "data-architect-exam-tips":                           ("data-architect",           "Data Architect",                            "data-architect"),
    "data-cloud-consultant-exam-tips":                    ("data-cloud-consultant",    "Data Cloud Consultant",                     "data-cloud-consultant"),
    "dev-lifecycle-deployment-architect-exam-tips":       ("dev-lifecycle-deployment-architect", "Dev Lifecycle & Deployment Architect", "dev-lifecycle-deployment-architect"),
    "education-cloud-consultant-exam-tips":               ("education-cloud-consultant", "Education Cloud Consultant",              "education-cloud-consultant"),
    "email-specialist-exam-tips":                         ("email-specialist",         "Marketing Cloud Email Specialist",           "email-specialist"),
    "experience-cloud-exam-tips":                         ("experience-cloud",         "Experience Cloud Consultant",               "experience-cloud"),
    "field-service-exam-tips":                            ("field-service",            "Field Service Consultant",                  "field-service"),
    "identity-access-management-architect-exam-tips":     ("identity-access-management-architect", "Identity & Access Management Architect", "identity-access-management-architect"),
    "integration-architect-exam-tips":                    ("integration-architect",    "Integration Architect",                     "integration-architect"),
    "javascript-developer-i-exam-tips":                   ("javascript-developer-i",   "JavaScript Developer I",                    "javascript-developer-i"),
    "marketing-cloud-consultant-exam-tips":               ("marketing-cloud-consultant", "Marketing Cloud Consultant",              "marketing-cloud-consultant"),
    "marketing-cloud-engagement-admin-exam-tips":         ("marketing-cloud-engagement-admin", "Marketing Cloud Engagement Admin",  "marketing-cloud-engagement-admin"),
    "marketing-cloud-engagement-developer-exam-tips":     ("marketing-cloud-engagement-developer", "Marketing Cloud Engagement Developer", "marketing-cloud-engagement-developer"),
    "marketing-cloud-engagement-foundations-exam-tips":   ("marketing-cloud-engagement-foundations", "Marketing Cloud Engagement Foundations", "marketing-cloud-engagement-foundations"),
    "mulesoft-developer-i-exam-tips":                     ("mulesoft-developer-i",     "MuleSoft Developer I",                      "mulesoft-developer-i"),
    "mulesoft-developer-ii-exam-tips":                    ("mulesoft-developer-ii",    "MuleSoft Developer II",                     "mulesoft-developer-ii"),
    "mulesoft-integration-architect-exam-tips":           ("mulesoft-integration-architect", "MuleSoft Integration Architect",       "mulesoft-integration-architect"),
    "mulesoft-integration-foundations-exam-tips":         ("mulesoft-integration-foundations", "MuleSoft Integration Foundations",   "mulesoft-integration-foundations"),
    "mulesoft-platform-architect-exam-tips":              ("mulesoft-platform-architect", "MuleSoft Platform Architect",            "mulesoft-platform-architect"),
    "nonprofit-cloud-exam-tips":                          ("nonprofit-cloud",           "Nonprofit Cloud Consultant",                "nonprofit-cloud"),
    "nonprofit-success-pack-consultant-exam-tips":        ("nonprofit-success-pack-consultant", "Nonprofit Success Pack Consultant", "nonprofit-success-pack-consultant"),
    "omnistudio-consultant-exam-tips":                    ("omnistudio-consultant",     "OmniStudio Consultant",                     "omnistudio-consultant"),
    "omnistudio-developer-exam-tips":                     ("omnistudio-developer",      "OmniStudio Developer",                      "omnistudio-developer"),
    "pardot-consultant-exam-tips":                        ("pardot-consultant",         "Pardot Consultant",                         "pardot-consultant"),
    "pardot-specialist-exam-tips":                        ("pardot-specialist",         "Pardot Specialist",                         "pardot-specialist"),
    "pd1-exam-tips":                                      ("developer-1",               "Platform Developer I",                      "developer-1"),
    "pd2-exam-tips":                                      ("developer-2",               "Platform Developer II",                     "developer-2"),
    "platform-foundations-exam-tips":                     ("platform-foundations",      "Platform Foundations",                      "platform-foundations"),
    "revenue-cloud-consultant-exam-tips":                 ("revenue-cloud-consultant",  "Revenue Cloud Consultant",                  "revenue-cloud-consultant"),
    "sales-cloud-exam-tips":                              ("sales-cloud",               "Sales Cloud Consultant",                    "sales-cloud"),
    "service-cloud-consultant-exam-tips":                 ("service-cloud",             "Service Cloud Consultant",                  "service-cloud"),
    "sharing-visibility-architect-exam-tips":             ("sharing-visibility-architect", "Sharing & Visibility Architect",         "sharing-visibility-architect"),
    "slack-administrator-exam-tips":                      ("slack-administrator",       "Slack Administrator",                       "slack-administrator"),
    "strategy-designer-exam-tips":                        ("strategy-designer",         "Strategy Designer",                         "strategy-designer"),
    "system-architect-exam-tips":                         ("system-architect",          "System Architect",                          "system-architect"),
    "tableau-data-analyst-exam-tips":                     ("tableau-data-analyst",      "Tableau Data Analyst",                      "tableau-data-analyst"),
    "technical-architect-exam-tips":                      ("technical-architect",       "Technical Architect",                       "technical-architect"),
    "ux-designer-exam-tips":                              ("ux-designer",               "UX Designer",                               "ux-designer"),
}

IMPORT_LINE = "import ExamPricingCard from '@/components/ExamPricingCard'\n"


def patch(page_path: Path, cert_slug: str, cert_name: str, cert_page_slug: str) -> bool:
    src = page_path.read_text(encoding="utf-8")

    if "ExamPricingCard" in src:
        print(f"  SKIP (already has ExamPricingCard): {page_path.parent.name}")
        return False

    last_import = list(re.finditer(r"^import .+$", src, re.MULTILINE))
    if not last_import:
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

    # Insert after StudyGuideCrossLink, else after ExamTipsCertLink
    for pattern in [
        r'(<StudyGuideCrossLink\b[^<]*/>)',
        r'(<ExamTipsCertLink\b[^<]*/>)',
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
    print("=== Injecting ExamPricingCard into exam-tips pages ===\n")
    for dir_name, (cert_slug, cert_name, cert_page_slug) in sorted(EXAM_TIPS_MAP.items()):
        page_path = APP / dir_name / "page.tsx"
        if not page_path.exists():
            print(f"  MISSING: {dir_name}")
            continue
        if patch(page_path, cert_slug, cert_name, cert_page_slug):
            patched += 1
    print(f"\nDone. Patched {patched} pages.")


if __name__ == "__main__":
    main()
