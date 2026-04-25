#!/usr/bin/env python3
"""
Injects EducationalOccupationalCredential + Occupation JSON-LD schema
into all study-guide pages via the CredentialSchema component.

Inserted immediately after the existing <ContentPageSchemas .../> tag.

Run:
    python3 scripts/add-credential-schema.py
"""

import re
from pathlib import Path

ROOT = Path(__file__).parent.parent
APP = ROOT / "src" / "app"

# Maps study-guide directory name → (certSlug for cert-insights-data, certName)
STUDY_GUIDE_MAP: dict[str, tuple[str, str]] = {
    "adm-201-study-guide":                                ("adm-201",                       "Salesforce Administrator"),
    "advanced-administrator-study-guide":                 ("advanced-administrator",         "Advanced Administrator"),
    "agentforce-specialist-study-guide":                  ("agentforce-specialist",           "Agentforce Specialist"),
    "ai-associate-study-guide":                           ("ai-associate",                    "AI Associate"),
    "app-builder-study-guide":                            ("app-builder",                     "Platform App Builder"),
    "application-architect-study-guide":                  ("application-architect",            "Application Architect"),
    "b2b-solution-architect-study-guide":                 ("b2b-solution-architect",           "B2B Solution Architect"),
    "b2c-commerce-architect-study-guide":                 ("b2c-commerce-architect",           "B2C Commerce Architect"),
    "b2c-commerce-developer-study-guide":                 ("b2c-commerce-developer",           "B2C Commerce Developer"),
    "b2c-solution-architect-study-guide":                 ("b2c-solution-architect",           "B2C Solution Architect"),
    "business-analyst-study-guide":                       ("business-analyst",                 "Business Analyst"),
    "cpq-administrator-study-guide":                      ("cpq-administrator",                "CPQ Administrator"),
    "crm-analytics-study-guide":                          ("crm-analytics",                    "CRM Analytics Consultant"),
    "data-architect-study-guide":                         ("data-architect",                   "Data Architect"),
    "data-cloud-consultant-study-guide":                  ("data-cloud-consultant",            "Data Cloud Consultant"),
    "dev-lifecycle-deployment-architect-study-guide":     ("dev-lifecycle-deployment-architect","Dev Lifecycle & Deployment Architect"),
    "education-cloud-consultant-study-guide":             ("education-cloud-consultant",       "Education Cloud Consultant"),
    "email-specialist-study-guide":                       ("email-specialist",                 "Marketing Cloud Email Specialist"),
    "experience-cloud-consultant-study-guide":            ("experience-cloud-consultant",      "Experience Cloud Consultant"),
    "field-service-consultant-study-guide":               ("field-service-consultant",         "Field Service Consultant"),
    "identity-access-management-architect-study-guide":   ("identity-access-management-architect", "Identity & Access Management Architect"),
    "integration-architect-study-guide":                  ("integration-architect",            "Integration Architect"),
    "javascript-developer-i-study-guide":                 ("javascript-developer-i",           "JavaScript Developer I"),
    "marketing-cloud-consultant-study-guide":             ("marketing-cloud-consultant",       "Marketing Cloud Consultant"),
    "marketing-cloud-engagement-admin-study-guide":       ("marketing-cloud-engagement-admin", "Marketing Cloud Engagement Admin"),
    "marketing-cloud-engagement-developer-study-guide":   ("marketing-cloud-engagement-developer", "Marketing Cloud Engagement Developer"),
    "marketing-cloud-engagement-foundations-study-guide": ("marketing-cloud-engagement-foundations", "Marketing Cloud Engagement Foundations"),
    "mulesoft-developer-i-study-guide":                   ("mulesoft-developer-i",             "MuleSoft Developer I"),
    "mulesoft-developer-ii-study-guide":                  ("mulesoft-developer-ii",            "MuleSoft Developer II"),
    "mulesoft-integration-architect-study-guide":         ("mulesoft-integration-architect",   "MuleSoft Integration Architect"),
    "mulesoft-integration-foundations-study-guide":       ("mulesoft-integration-foundations", "MuleSoft Integration Foundations"),
    "mulesoft-platform-architect-study-guide":            ("mulesoft-platform-architect",      "MuleSoft Platform Architect"),
    "nonprofit-cloud-consultant-study-guide":             ("nonprofit-cloud-consultant",       "Nonprofit Cloud Consultant"),
    "nonprofit-success-pack-consultant-study-guide":      ("nonprofit-success-pack-consultant","Nonprofit Success Pack Consultant"),
    "omnistudio-consultant-study-guide":                  ("omnistudio-consultant",            "OmniStudio Consultant"),
    "omnistudio-developer-study-guide":                   ("omnistudio-developer",             "OmniStudio Developer"),
    "pardot-consultant-study-guide":                      ("pardot-consultant",                "Pardot Consultant"),
    "pardot-specialist-study-guide":                      ("pardot-specialist",                "Pardot Specialist"),
    "pd1-study-guide":                                    ("pd1",                              "Platform Developer I"),
    "pd2-study-guide":                                    ("pd2",                              "Platform Developer II"),
    "platform-foundations-study-guide":                   ("platform-foundations",             "Platform Foundations"),
    "revenue-cloud-consultant-study-guide":               ("revenue-cloud-consultant",         "Revenue Cloud Consultant"),
    "sales-cloud-consultant-study-guide":                 ("sales-cloud-consultant",           "Sales Cloud Consultant"),
    "service-cloud-consultant-study-guide":               ("service-cloud-consultant",         "Service Cloud Consultant"),
    "service-cloud-study-guide":                          ("service-cloud-consultant",         "Service Cloud Consultant"),
    "sharing-visibility-architect-study-guide":           ("sharing-visibility-architect",     "Sharing & Visibility Architect"),
    "slack-administrator-study-guide":                    ("slack-administrator",              "Slack Administrator"),
    "strategy-designer-study-guide":                      ("strategy-designer",                "Strategy Designer"),
    "system-architect-study-guide":                       ("system-architect",                 "System Architect"),
    "tableau-data-analyst-study-guide":                   ("tableau-data-analyst",             "Tableau Data Analyst"),
    "technical-architect-study-guide":                    ("technical-architect",              "Technical Architect"),
    "ux-designer-study-guide":                            ("ux-designer",                      "UX Designer"),
}

IMPORT_LINE = "import CredentialSchema from '@/components/CredentialSchema'\n"


def patch_study_guide(
    page_path: Path,
    dir_name: str,
    cert_slug: str,
    cert_name: str,
) -> bool:
    src = page_path.read_text(encoding="utf-8")

    if "CredentialSchema" in src:
        print(f"  SKIP (already has CredentialSchema): {dir_name}")
        return False

    # Add import after last existing import
    last_import = list(re.finditer(r"^import .+$", src, re.MULTILINE))
    if not last_import:
        print(f"  SKIP (no imports): {dir_name}")
        return False
    pos = last_import[-1].end()
    src = src[:pos] + "\n" + IMPORT_LINE + src[pos:]

    # Escape single quotes in cert_name for JSX
    cert_name_escaped = cert_name.replace("'", "\\'")
    page_url = f"/{dir_name}"

    jsx = (
        f'\n      <CredentialSchema'
        f'\n        certSlug="{cert_slug}"'
        f'\n        certName="{cert_name_escaped}"'
        f'\n        description={{pageDescription}}'
        f'\n        pageUrl="{page_url}"'
        f'\n      />'
    )

    # Insert after <ContentPageSchemas ... />  (allow / in props, stop at next tag)
    pattern = r'(<ContentPageSchemas\b[^<]*/>)'
    new_src, count = re.subn(pattern, r'\1' + jsx, src, count=1)

    if count == 0:
        print(f"  SKIP (ContentPageSchemas not found): {dir_name}")
        return False

    page_path.write_text(new_src, encoding="utf-8")
    print(f"  PATCHED: {dir_name}")
    return True


def main() -> None:
    patched = 0
    print("=== Injecting CredentialSchema into study-guide pages ===\n")

    for dir_name, (cert_slug, cert_name) in sorted(STUDY_GUIDE_MAP.items()):
        page_path = APP / dir_name / "page.tsx"
        if not page_path.exists():
            print(f"  MISSING: {dir_name}")
            continue
        if patch_study_guide(page_path, dir_name, cert_slug, cert_name):
            patched += 1

    print(f"\nDone. Patched {patched} pages.")


if __name__ == "__main__":
    main()
