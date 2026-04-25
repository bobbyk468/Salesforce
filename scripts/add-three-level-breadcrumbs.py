#!/usr/bin/env python3
"""
Upgrades breadcrumbs from flat [Home, Page] to three-level
[Home, Cert Page, Study Guide / Exam Tips].

This signals to Google that the cert page is the parent authority
for its study guide and exam tips pages.

Target format:
  Study guide: Home > Salesforce Administrator > ADM-201 Study Guide
  Exam tips:   Home > Salesforce Administrator > ADM-201 Exam Tips

Run:
    python3 scripts/add-three-level-breadcrumbs.py
"""

import re
from pathlib import Path

ROOT = Path(__file__).parent.parent
APP = ROOT / "src" / "app"

# ---------------------------------------------------------------------------
# Maps page-directory slug → (cert_slug, cert_display_name)
# cert_slug is used for /certifications/{cert_slug}
# ---------------------------------------------------------------------------

STUDY_GUIDE_MAP: dict[str, tuple[str, str]] = {
    "adm-201-study-guide":                                ("administrator-practice-test", "Salesforce Administrator"),
    "advanced-administrator-study-guide":                 ("advanced-administrator",      "Advanced Administrator"),
    "agentforce-specialist-study-guide":                  ("agentforce-specialist",        "Agentforce Specialist"),
    "ai-associate-study-guide":                           ("ai-associate",                 "AI Associate"),
    "app-builder-study-guide":                            ("app-builder",                  "Platform App Builder"),
    "application-architect-study-guide":                  ("application-architect",         "Application Architect"),
    "b2b-solution-architect-study-guide":                 ("b2b-solution-architect",        "B2B Solution Architect"),
    "b2c-commerce-architect-study-guide":                 ("b2c-commerce-architect",        "B2C Commerce Architect"),  # no cert page — skip
    "b2c-commerce-developer-study-guide":                 ("b2c-commerce-developer",        "B2C Commerce Developer"),  # no cert page — skip
    "b2c-solution-architect-study-guide":                 ("b2c-solution-architect",        "B2C Solution Architect"),
    "business-analyst-study-guide":                       ("business-analyst",              "Business Analyst"),
    "cpq-administrator-study-guide":                      ("cpq-administrator",             "CPQ Administrator"),
    "crm-analytics-study-guide":                          ("crm-analytics-einstein-discovery-consultant", "CRM Analytics Consultant"),
    "data-architect-study-guide":                         ("data-architect",                "Data Architect"),
    "data-cloud-consultant-study-guide":                  ("data-cloud-consultant",         "Data Cloud Consultant"),
    "dev-lifecycle-deployment-architect-study-guide":     ("dev-lifecycle-deployment-architect", "Dev Lifecycle & Deployment Architect"),
    "education-cloud-consultant-study-guide":             ("education-cloud-consultant",    "Education Cloud Consultant"),
    "email-specialist-study-guide":                       ("email-specialist",              "Marketing Cloud Email Specialist"),
    "experience-cloud-consultant-study-guide":            ("experience-cloud",              "Experience Cloud Consultant"),
    "field-service-consultant-study-guide":               ("field-service",                 "Field Service Consultant"),
    "identity-access-management-architect-study-guide":   ("identity-access-management-architect", "Identity & Access Management Architect"),
    "integration-architect-study-guide":                  ("integration-architect",         "Integration Architect"),
    "javascript-developer-i-study-guide":                 ("javascript-developer-i",        "JavaScript Developer I"),
    "marketing-cloud-consultant-study-guide":             ("marketing-cloud-consultant",    "Marketing Cloud Consultant"),
    "marketing-cloud-engagement-admin-study-guide":       ("marketing-cloud-engagement-admin", "Marketing Cloud Engagement Admin"),
    "marketing-cloud-engagement-developer-study-guide":   ("marketing-cloud-engagement-developer", "Marketing Cloud Engagement Developer"),
    "marketing-cloud-engagement-foundations-study-guide": ("marketing-cloud-engagement-foundations", "Marketing Cloud Engagement Foundations"),
    "mulesoft-developer-i-study-guide":                   ("mulesoft-developer-i",          "MuleSoft Developer I"),
    "mulesoft-developer-ii-study-guide":                  ("mulesoft-developer-ii",         "MuleSoft Developer II"),
    "mulesoft-integration-architect-study-guide":         ("mulesoft-integration-architect","MuleSoft Integration Architect"),
    "mulesoft-integration-foundations-study-guide":       ("mulesoft-integration-foundations", "MuleSoft Integration Foundations"),
    "mulesoft-platform-architect-study-guide":            ("mulesoft-platform-architect",   "MuleSoft Platform Architect"),
    "nonprofit-cloud-consultant-study-guide":             ("nonprofit-cloud",               "Nonprofit Cloud Consultant"),
    "nonprofit-success-pack-consultant-study-guide":      ("nonprofit-success-pack-consultant", "Nonprofit Success Pack Consultant"),
    "omnistudio-consultant-study-guide":                  ("omnistudio-consultant",         "OmniStudio Consultant"),
    "omnistudio-developer-study-guide":                   ("omnistudio-developer",          "OmniStudio Developer"),
    "pardot-consultant-study-guide":                      ("pardot-consultant",             "Pardot Consultant"),
    "pardot-specialist-study-guide":                      ("pardot-specialist",             "Pardot Specialist"),
    "pd1-study-guide":                                    ("developer-1",                   "Platform Developer I"),
    "pd2-study-guide":                                    ("developer-2",                   "Platform Developer II"),
    "platform-foundations-study-guide":                   ("platform-foundations",          "Platform Foundations"),
    "revenue-cloud-consultant-study-guide":               ("revenue-cloud-consultant",      "Revenue Cloud Consultant"),
    "sales-cloud-consultant-study-guide":                 ("sales-cloud",                   "Sales Cloud Consultant"),
    "service-cloud-consultant-study-guide":               ("service-cloud",                 "Service Cloud Consultant"),
    "service-cloud-study-guide":                          ("service-cloud",                 "Service Cloud Consultant"),
    "sharing-visibility-architect-study-guide":           ("sharing-visibility-architect",  "Sharing & Visibility Architect"),
    "slack-administrator-study-guide":                    ("slack-administrator",           "Slack Administrator"),
    "strategy-designer-study-guide":                      ("strategy-designer",             "Strategy Designer"),
    "system-architect-study-guide":                       ("system-architect",              "System Architect"),
    "tableau-data-analyst-study-guide":                   ("tableau-data-analyst",          "Tableau Data Analyst"),
    "technical-architect-study-guide":                    ("technical-architect",           "Technical Architect"),
    "ux-designer-study-guide":                            ("ux-designer",                   "UX Designer"),
}

EXAM_TIPS_MAP: dict[str, tuple[str, str]] = {
    "adm-201-exam-tips":                                  ("administrator-practice-test", "Salesforce Administrator"),
    "advanced-administrator-exam-tips":                   ("advanced-administrator",      "Advanced Administrator"),
    "agentforce-specialist-exam-tips":                    ("agentforce-specialist",        "Agentforce Specialist"),
    "ai-associate-exam-tips":                             ("ai-associate",                 "AI Associate"),
    "app-builder-exam-tips":                              ("app-builder",                  "Platform App Builder"),
    "application-architect-exam-tips":                    ("application-architect",         "Application Architect"),
    "b2b-solution-architect-exam-tips":                   ("b2b-solution-architect",        "B2B Solution Architect"),
    "b2c-commerce-architect-exam-tips":                   ("b2c-commerce-architect",        "B2C Commerce Architect"),
    "b2c-commerce-developer-exam-tips":                   ("b2c-commerce-developer",        "B2C Commerce Developer"),
    "b2c-solution-architect-exam-tips":                   ("b2c-solution-architect",        "B2C Solution Architect"),
    "business-analyst-exam-tips":                         ("business-analyst",              "Business Analyst"),
    "cpq-administrator-exam-tips":                        ("cpq-administrator",             "CPQ Administrator"),
    "crm-analytics-exam-tips":                            ("crm-analytics-einstein-discovery-consultant", "CRM Analytics Consultant"),
    "data-architect-exam-tips":                           ("data-architect",                "Data Architect"),
    "data-cloud-consultant-exam-tips":                    ("data-cloud-consultant",         "Data Cloud Consultant"),
    "dev-lifecycle-deployment-architect-exam-tips":       ("dev-lifecycle-deployment-architect", "Dev Lifecycle & Deployment Architect"),
    "education-cloud-consultant-exam-tips":               ("education-cloud-consultant",    "Education Cloud Consultant"),
    "email-specialist-exam-tips":                         ("email-specialist",              "Marketing Cloud Email Specialist"),
    "experience-cloud-exam-tips":                         ("experience-cloud",              "Experience Cloud Consultant"),
    "field-service-exam-tips":                            ("field-service",                 "Field Service Consultant"),
    "identity-access-management-architect-exam-tips":     ("identity-access-management-architect", "Identity & Access Management Architect"),
    "integration-architect-exam-tips":                    ("integration-architect",         "Integration Architect"),
    "javascript-developer-i-exam-tips":                   ("javascript-developer-i",        "JavaScript Developer I"),
    "marketing-cloud-consultant-exam-tips":               ("marketing-cloud-consultant",    "Marketing Cloud Consultant"),
    "marketing-cloud-engagement-admin-exam-tips":         ("marketing-cloud-engagement-admin", "Marketing Cloud Engagement Admin"),
    "marketing-cloud-engagement-developer-exam-tips":     ("marketing-cloud-engagement-developer", "Marketing Cloud Engagement Developer"),
    "marketing-cloud-engagement-foundations-exam-tips":   ("marketing-cloud-engagement-foundations", "Marketing Cloud Engagement Foundations"),
    "mulesoft-developer-i-exam-tips":                     ("mulesoft-developer-i",          "MuleSoft Developer I"),
    "mulesoft-developer-ii-exam-tips":                    ("mulesoft-developer-ii",         "MuleSoft Developer II"),
    "mulesoft-integration-architect-exam-tips":           ("mulesoft-integration-architect","MuleSoft Integration Architect"),
    "mulesoft-integration-foundations-exam-tips":         ("mulesoft-integration-foundations", "MuleSoft Integration Foundations"),
    "mulesoft-platform-architect-exam-tips":              ("mulesoft-platform-architect",   "MuleSoft Platform Architect"),
    "nonprofit-cloud-exam-tips":                          ("nonprofit-cloud",               "Nonprofit Cloud Consultant"),
    "nonprofit-success-pack-consultant-exam-tips":        ("nonprofit-success-pack-consultant", "Nonprofit Success Pack Consultant"),
    "omnistudio-consultant-exam-tips":                    ("omnistudio-consultant",         "OmniStudio Consultant"),
    "omnistudio-developer-exam-tips":                     ("omnistudio-developer",          "OmniStudio Developer"),
    "pardot-consultant-exam-tips":                        ("pardot-consultant",             "Pardot Consultant"),
    "pardot-specialist-exam-tips":                        ("pardot-specialist",             "Pardot Specialist"),
    "pd1-exam-tips":                                      ("developer-1",                   "Platform Developer I"),
    "pd2-exam-tips":                                      ("developer-2",                   "Platform Developer II"),
    "platform-foundations-exam-tips":                     ("platform-foundations",          "Platform Foundations"),
    "revenue-cloud-consultant-exam-tips":                 ("revenue-cloud-consultant",      "Revenue Cloud Consultant"),
    "sales-cloud-exam-tips":                              ("sales-cloud",                   "Sales Cloud Consultant"),
    "service-cloud-consultant-exam-tips":                 ("service-cloud",                 "Service Cloud Consultant"),
    "sharing-visibility-architect-exam-tips":             ("sharing-visibility-architect",  "Sharing & Visibility Architect"),
    "slack-administrator-exam-tips":                      ("slack-administrator",           "Slack Administrator"),
    "strategy-designer-exam-tips":                        ("strategy-designer",             "Strategy Designer"),
    "system-architect-exam-tips":                         ("system-architect",              "System Architect"),
    "tableau-data-analyst-exam-tips":                     ("tableau-data-analyst",          "Tableau Data Analyst"),
    "technical-architect-exam-tips":                      ("technical-architect",           "Technical Architect"),
    "ux-designer-exam-tips":                              ("ux-designer",                   "UX Designer"),
}


def patch_breadcrumb(page_path: Path, cert_slug: str, cert_name: str) -> bool:
    src = page_path.read_text(encoding="utf-8")

    # Find the breadcrumbItems array
    pattern = re.compile(
        r"(const breadcrumbItems\s*=\s*\[)\s*"
        r"\{[^}]*'Home'[^}]*\}\s*,\s*"
        r"\{[^}]+\}\s*"
        r"(\])",
        re.DOTALL,
    )

    # Extract the last item (the page itself) to preserve its exact text
    array_match = re.search(
        r"const breadcrumbItems\s*=\s*\[(.*?)\]",
        src,
        re.DOTALL,
    )
    if not array_match:
        print(f"  SKIP (breadcrumbItems not found): {page_path.parent.name}")
        return False

    array_body = array_match.group(1)

    # Skip if cert page link already exists inside the breadcrumb array
    if f"/certifications/{cert_slug}" in array_body:
        print(f"  SKIP (already 3-level): {page_path.parent.name}")
        return False
    # Allow one level of nested {} to handle ${RELEASE_CURRENT} template literals
    items = re.findall(r"\{(?:[^{}]|\{[^{}]*\})*\}", array_body)

    if len(items) < 2:
        print(f"  SKIP (unexpected breadcrumb shape): {page_path.parent.name}")
        return False

    # Keep the last item as-is (it's the current page)
    last_item = items[-1].strip()

    # Build the new three-level array
    new_array = (
        f"const breadcrumbItems = [\n"
        f"  {{ name: 'Home', url: '/' }},\n"
        f"  {{ name: '{cert_name}', url: '/certifications/{cert_slug}' }},\n"
        f"  {last_item},\n"
        f"]"
    )

    new_src = re.sub(
        r"const breadcrumbItems\s*=\s*\[.*?\]",
        new_array,
        src,
        count=1,
        flags=re.DOTALL,
    )

    if new_src == src:
        print(f"  SKIP (no change): {page_path.parent.name}")
        return False

    page_path.write_text(new_src, encoding="utf-8")
    print(f"  PATCHED: {page_path.parent.name}  →  Home > {cert_name} > …")
    return True


def main() -> None:
    patched = 0

    print("=== Upgrading study-guide breadcrumbs ===")
    for dir_name, (cert_slug, cert_name) in sorted(STUDY_GUIDE_MAP.items()):
        page_path = APP / dir_name / "page.tsx"
        if not page_path.exists():
            print(f"  MISSING: {dir_name}")
            continue
        if patch_breadcrumb(page_path, cert_slug, cert_name):
            patched += 1

    print("\n=== Upgrading exam-tips breadcrumbs ===")
    for dir_name, (cert_slug, cert_name) in sorted(EXAM_TIPS_MAP.items()):
        page_path = APP / dir_name / "page.tsx"
        if not page_path.exists():
            print(f"  MISSING: {dir_name}")
            continue
        if patch_breadcrumb(page_path, cert_slug, cert_name):
            patched += 1

    print(f"\nDone. Patched {patched} pages.")


if __name__ == "__main__":
    main()
