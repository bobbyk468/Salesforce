"""
Add "Compare Certifications" link cards to study guide / exam-tips pages
to give each thin comparison page additional inbound internal links.
This fixes the Ahrefs "page has only 1 inlink" issue.
"""
import os, re

BASE = "/Users/brahmajikatragadda/Downloads/salesforce-certifications/src/app"

# Map: source page slug → list of (href, anchor_text) to add as comparison links
ADDITIONS = {
    "ux-designer-study-guide": [
        ("/ux-designer-vs-strategy-designer", "UX Designer vs Strategy Designer — which cert should you take first?"),
    ],
    "strategy-designer-study-guide": [
        ("/ux-designer-vs-strategy-designer", "UX Designer vs Strategy Designer — full certification comparison"),
    ],
    "mulesoft-integration-foundations-exam-tips": [
        ("/mulesoft-integration-foundations-study-guide", "MuleSoft Integration Foundations full study guide"),
        ("/mulesoft-developer-i-vs-integration-foundations", "MuleSoft Developer I vs Integration Foundations — which to take?"),
    ],
    "pardot-consultant-study-guide": [
        ("/pardot-consultant-vs-marketing-cloud-consultant", "Pardot Consultant vs Marketing Cloud Consultant comparison"),
        ("/pardot-specialist-vs-pardot-consultant", "Pardot Specialist vs Pardot Consultant — key differences"),
    ],
    "pardot-specialist-study-guide": [
        ("/pardot-specialist-vs-pardot-consultant", "Pardot Specialist vs Pardot Consultant — which level to target?"),
        ("/pardot-consultant-vs-marketing-cloud-consultant", "Pardot Consultant vs Marketing Cloud Consultant"),
    ],
    "system-architect-study-guide": [
        ("/system-architect-vs-application-architect", "System Architect vs Application Architect — full comparison"),
        ("/how-to-become-salesforce-architect", "How to become a Salesforce Architect — career path guide"),
    ],
    "application-architect-study-guide": [
        ("/system-architect-vs-application-architect", "System Architect vs Application Architect — which to take first?"),
    ],
    "business-analyst-exam-tips": [
        ("/business-analyst-study-guide", "Salesforce Business Analyst full study guide"),
    ],
    "platform-foundations-study-guide": [
        ("/platform-foundations-vs-ai-associate", "Platform Foundations vs AI Associate — comparison guide"),
    ],
    "ai-associate-study-guide": [
        ("/platform-foundations-vs-ai-associate", "Platform Foundations vs AI Associate — which cert is right for you?"),
    ],
    "field-service-consultant-study-guide": [
        ("/field-service-vs-service-cloud-consultant", "Field Service vs Service Cloud Consultant — full comparison"),
    ],
    "service-cloud-consultant-study-guide": [
        ("/field-service-vs-service-cloud-consultant", "Field Service vs Service Cloud Consultant — which cert to take?"),
    ],
    "cpq-administrator-study-guide": [
        ("/cpq-admin-vs-revenue-cloud-consultant", "CPQ Admin vs Revenue Cloud Consultant — comparison"),
    ],
    "revenue-cloud-consultant-study-guide": [
        ("/cpq-admin-vs-revenue-cloud-consultant", "CPQ Admin vs Revenue Cloud Consultant — which cert is right?"),
    ],
    "app-builder-study-guide": [
        ("/app-builder-vs-developer-i", "App Builder vs Platform Developer I — full comparison"),
    ],
    "javascript-developer-i-study-guide": [
        ("/javascript-developer-i-vs-pd1", "JavaScript Developer I vs Platform Developer I — comparison"),
    ],
    "platform-developer-i-study-guide": [
        ("/app-builder-vs-developer-i", "App Builder vs Platform Developer I — which to take?"),
        ("/javascript-developer-i-vs-pd1", "JavaScript Developer I vs Platform Developer I comparison"),
    ],
    "marketing-cloud-engagement-admin-study-guide": [
        ("/marketing-cloud-admin-vs-developer", "Marketing Cloud Admin vs Developer — which cert to take?"),
    ],
    "marketing-cloud-engagement-developer-study-guide": [
        ("/marketing-cloud-admin-vs-developer", "Marketing Cloud Admin vs Developer — full comparison"),
    ],
    "mulesoft-integration-foundations-study-guide": [
        ("/mulesoft-developer-i-vs-integration-foundations", "MuleSoft Developer I vs Integration Foundations — which to pursue?"),
    ],
    "mulesoft-developer-i-study-guide": [
        ("/mulesoft-developer-i-vs-integration-foundations", "MuleSoft Developer I vs Integration Foundations comparison"),
    ],
    "b2b-solution-architect-study-guide": [
        ("/b2b-vs-b2c-solution-architect", "B2B vs B2C Solution Architect — full certification comparison"),
    ],
    "b2c-solution-architect-study-guide": [
        ("/b2b-vs-b2c-solution-architect", "B2B vs B2C Solution Architect — which path fits your role?"),
    ],
    "tableau-data-analyst-exam-tips": [
        ("/tableau-data-analyst-study-guide", "Tableau Data Analyst full study guide"),
    ],
    "nonprofit-cloud-consultant-study-guide": [
        ("/education-cloud-vs-nonprofit-cloud-consultant", "Education Cloud vs Nonprofit Cloud Consultant — comparison"),
    ],
    "education-cloud-consultant-study-guide": [
        ("/education-cloud-vs-nonprofit-cloud-consultant", "Education Cloud vs Nonprofit Cloud Consultant — which to take?"),
    ],
    "architect-certification-path": [
        ("/how-to-become-salesforce-architect", "How to become a Salesforce Architect — step-by-step guide"),
        ("/system-architect-vs-application-architect", "System Architect vs Application Architect comparison"),
    ],
    "how-to-study-for-salesforce-certification": [
        ("/salesforce-certification-passing-score", "Salesforce certification passing scores by tier"),
        ("/salesforce-exam-retake-policy", "Salesforce exam retake policy — what happens if you fail?"),
    ],
    "which-salesforce-certification-first": [
        ("/is-salesforce-certification-worth-it", "Is Salesforce certification worth it? — honest analysis"),
        ("/salesforce-free-certification", "How to get a free Salesforce certification"),
    ],
    "how-to-register-salesforce-exam": [
        ("/salesforce-certification-passing-score", "Salesforce certification passing scores by tier"),
        ("/salesforce-certification-validity", "How long is a Salesforce certification valid?"),
        ("/salesforce-exam-retake-policy", "Salesforce exam retake policy"),
    ],
    "certification-path": [
        ("/is-salesforce-certification-worth-it", "Is Salesforce certification worth it?"),
    ],
    "salesforce-certification-maintenance": [
        ("/salesforce-certification-validity", "Salesforce certification validity & expiry guide"),
    ],
}

CTA_PATTERN = re.compile(
    r'(\s+(?:<div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">|<section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">|{/\* CTA \*/}\s*\n\s*<section))',
    re.MULTILINE
)

def build_compare_section(links):
    items = '\n'.join(
        f'          <li><Link href="{href}" className="text-sm text-salesforce-blue hover:underline font-medium">'
        f'→ {text}</Link></li>'
        for href, text in links
    )
    return f'''
      <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 mb-8">
        <h2 className="text-base font-bold text-gray-900 mb-3">Compare Certifications</h2>
        <ul className="space-y-2">
{items}
        </ul>
      </div>
'''

updated = 0
skipped = 0
not_found = 0

for slug, links in ADDITIONS.items():
    filepath = os.path.join(BASE, slug, "page.tsx")
    if not os.path.exists(filepath):
        print(f"NOT FOUND: {slug}")
        not_found += 1
        continue

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check if Link is already imported
    has_link_import = "import Link from 'next/link'" in content

    # Check if compare section already added
    if 'Compare Certifications' in content:
        print(f"  skip (already has Compare section): {slug}")
        skipped += 1
        continue

    # Find the CTA section and insert before it
    match = CTA_PATTERN.search(content)
    if not match:
        print(f"  WARN: no CTA div found in {slug}")
        skipped += 1
        continue

    compare_block = build_compare_section(links)
    insert_pos = match.start()
    new_content = content[:insert_pos] + compare_block + content[insert_pos:]

    # Add Link import if missing
    if not has_link_import and "import Link" not in new_content:
        new_content = new_content.replace(
            "import type { Metadata }",
            "import Link from 'next/link'\nimport type { Metadata }"
        )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"  ✅ updated: {slug} (+{len(links)} link{'s' if len(links)>1 else ''})")
    updated += 1

print(f"\nDone. {updated} files updated, {skipped} skipped, {not_found} not found.")
