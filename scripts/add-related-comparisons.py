#!/usr/bin/env python3
"""
Adds RelatedComparisons block to all VS pages.
Each page gets 3-4 contextually related VS links from the same career track.

Run:
    python3 scripts/add-related-comparisons.py
"""

import re
from pathlib import Path

ROOT = Path(__file__).parent.parent
APP = ROOT / "src" / "app"

# Maps VS dir → list of related (slug, label) pairs (same track, different certs)
RELATED: dict[str, list[tuple[str, str]]] = {
    "adm-201-vs-app-builder": [
        ("administrator-vs-advanced-administrator", "Admin vs Advanced Admin"),
        ("app-builder-vs-developer-i", "App Builder vs Platform Developer I"),
        ("salesforce-admin-vs-developer-career", "Admin vs Developer Career"),
    ],
    "administrator-vs-advanced-administrator": [
        ("adm-201-vs-app-builder", "ADM-201 vs App Builder"),
        ("app-builder-vs-developer-i", "App Builder vs Platform Developer I"),
        ("salesforce-admin-vs-developer-career", "Admin vs Developer Career"),
    ],
    "app-builder-vs-developer-i": [
        ("adm-201-vs-app-builder", "ADM-201 vs App Builder"),
        ("pd1-vs-pd2", "Platform Developer I vs II"),
        ("javascript-developer-i-vs-pd1", "JavaScript Developer I vs PD1"),
    ],
    "pd1-vs-pd2": [
        ("app-builder-vs-developer-i", "App Builder vs Platform Developer I"),
        ("javascript-developer-i-vs-pd1", "JavaScript Developer I vs PD1"),
        ("mulesoft-developer-i-vs-ii", "MuleSoft Developer I vs II"),
    ],
    "javascript-developer-i-vs-pd1": [
        ("pd1-vs-pd2", "Platform Developer I vs II"),
        ("app-builder-vs-developer-i", "App Builder vs Platform Developer I"),
        ("mulesoft-developer-i-vs-ii", "MuleSoft Developer I vs II"),
    ],
    "mulesoft-developer-i-vs-ii": [
        ("pd1-vs-pd2", "Platform Developer I vs II"),
        ("javascript-developer-i-vs-pd1", "JavaScript Developer I vs PD1"),
        ("integration-architect-vs-system-architect", "Integration vs System Architect"),
    ],
    "agentforce-specialist-vs-ai-associate": [
        ("platform-foundations-vs-ai-associate", "Platform Foundations vs AI Associate"),
        ("adm-201-vs-app-builder", "ADM-201 vs App Builder"),
        ("salesforce-admin-vs-developer-career", "Admin vs Developer Career"),
    ],
    "platform-foundations-vs-ai-associate": [
        ("agentforce-specialist-vs-ai-associate", "Agentforce Specialist vs AI Associate"),
        ("adm-201-vs-app-builder", "ADM-201 vs App Builder"),
        ("salesforce-admin-vs-developer-career", "Admin vs Developer Career"),
    ],
    "sales-cloud-vs-service-cloud": [
        ("field-service-vs-service-cloud-consultant", "Field Service vs Service Cloud"),
        ("data-cloud-vs-crm-analytics", "Data Cloud vs CRM Analytics"),
        ("pardot-specialist-vs-pardot-consultant", "Pardot Specialist vs Consultant"),
    ],
    "field-service-vs-service-cloud-consultant": [
        ("sales-cloud-vs-service-cloud", "Sales Cloud vs Service Cloud"),
        ("data-cloud-vs-crm-analytics", "Data Cloud vs CRM Analytics"),
        ("business-analyst-vs-strategy-designer", "Business Analyst vs Strategy Designer"),
    ],
    "data-cloud-vs-crm-analytics": [
        ("sales-cloud-vs-service-cloud", "Sales Cloud vs Service Cloud"),
        ("field-service-vs-service-cloud-consultant", "Field Service vs Service Cloud"),
        ("agentforce-specialist-vs-ai-associate", "Agentforce Specialist vs AI Associate"),
    ],
    "pardot-specialist-vs-pardot-consultant": [
        ("sales-cloud-vs-service-cloud", "Sales Cloud vs Service Cloud"),
        ("marketing-cloud-admin-vs-developer", "Marketing Cloud Admin vs Developer"),
        ("cpq-admin-vs-cpq-billing-ap", "CPQ Admin vs CPQ Billing AP"),
    ],
    "marketing-cloud-admin-vs-developer": [
        ("pardot-specialist-vs-pardot-consultant", "Pardot Specialist vs Consultant"),
        ("sales-cloud-vs-service-cloud", "Sales Cloud vs Service Cloud"),
        ("data-cloud-vs-crm-analytics", "Data Cloud vs CRM Analytics"),
    ],
    "cpq-admin-vs-cpq-billing-ap": [
        ("sales-cloud-vs-service-cloud", "Sales Cloud vs Service Cloud"),
        ("pardot-specialist-vs-pardot-consultant", "Pardot Specialist vs Consultant"),
        ("integration-architect-vs-system-architect", "Integration vs System Architect"),
    ],
    "integration-architect-vs-system-architect": [
        ("b2b-vs-b2c-solution-architect", "B2B vs B2C Solution Architect"),
        ("mulesoft-developer-i-vs-ii", "MuleSoft Developer I vs II"),
        ("pd1-vs-pd2", "Platform Developer I vs II"),
    ],
    "b2b-vs-b2c-solution-architect": [
        ("integration-architect-vs-system-architect", "Integration vs System Architect"),
        ("business-analyst-vs-strategy-designer", "Business Analyst vs Strategy Designer"),
        ("salesforce-admin-vs-developer-career", "Admin vs Developer Career"),
    ],
    "business-analyst-vs-strategy-designer": [
        ("ux-designer-vs-strategy-designer", "UX Designer vs Strategy Designer"),
        ("salesforce-admin-vs-developer-career", "Admin vs Developer Career"),
        ("sales-cloud-vs-service-cloud", "Sales Cloud vs Service Cloud"),
    ],
    "ux-designer-vs-strategy-designer": [
        ("business-analyst-vs-strategy-designer", "Business Analyst vs Strategy Designer"),
        ("salesforce-admin-vs-developer-career", "Admin vs Developer Career"),
        ("adm-201-vs-app-builder", "ADM-201 vs App Builder"),
    ],
    "education-cloud-vs-nonprofit-cloud-consultant": [
        ("sales-cloud-vs-service-cloud", "Sales Cloud vs Service Cloud"),
        ("business-analyst-vs-strategy-designer", "Business Analyst vs Strategy Designer"),
        ("pardot-specialist-vs-pardot-consultant", "Pardot Specialist vs Consultant"),
    ],
    "salesforce-admin-vs-developer-career": [
        ("adm-201-vs-app-builder", "ADM-201 vs App Builder"),
        ("app-builder-vs-developer-i", "App Builder vs Platform Developer I"),
        ("pd1-vs-pd2", "Platform Developer I vs II"),
    ],
}

# Also handle any VS pages not in the map — give them the hub link at minimum
def get_related(dir_name: str) -> list[tuple[str, str]]:
    return RELATED.get(dir_name, [])


IMPORT_LINE = "import RelatedComparisons from '@/components/RelatedComparisons'\n"


def build_jsx(related: list[tuple[str, str]]) -> str:
    links = "\n".join(
        f'          {{ slug: "{slug}", label: "{label}" }},'
        for slug, label in related
    )
    return (
        f'\n      <RelatedComparisons\n'
        f'        links={{\n[\n{links}\n        ]}}\n'
        f'      />'
    )


def patch(page_path: Path, dir_name: str) -> bool:
    related = get_related(dir_name)
    if not related:
        return False

    src = page_path.read_text(encoding="utf-8")
    if "RelatedComparisons" in src:
        print(f"  SKIP: {dir_name}")
        return False

    # Add import
    last_import = list(re.finditer(r"^import .+$", src, re.MULTILINE))
    if not last_import:
        return False
    pos = last_import[-1].end()
    src = src[:pos] + "\n" + IMPORT_LINE + src[pos:]

    # Build JSX inline to avoid f-string nesting issues
    links_items = "\n".join(
        f'          {{ slug: "{slug}", label: "{label}" }},'
        for slug, label in related
    )
    jsx = (
        f'\n      <RelatedComparisons\n'
        f'        links={{[\n{links_items}\n        ]}}\n'
        f'      />'
    )

    # Insert before closing </div> of the main wrapper (end of page)
    # Find the last </div> in the file
    insert_before = "\n    </div>\n  )\n}"
    if insert_before in src:
        new_src = src.replace(insert_before, jsx + insert_before, 1)
        # Replace only last occurrence
        idx = src.rfind(insert_before)
        if idx != -1:
            new_src = src[:idx] + jsx + src[idx:]
    else:
        # Fallback: insert after WhichFirstBlock
        pattern = r'(<WhichFirstBlock\b[^/]*/?>)'
        new_src, count = re.subn(pattern, r'\1' + jsx, src, count=1)
        if not count:
            print(f"  SKIP (no insertion point): {dir_name}")
            return False

    page_path.write_text(new_src, encoding="utf-8")
    print(f"  PATCHED: {dir_name}")
    return True


def main() -> None:
    patched = 0
    print("=== Adding RelatedComparisons to VS pages ===\n")

    vs_dirs = [d for d in APP.iterdir() if d.is_dir() and "-vs-" in d.name]
    for d in sorted(vs_dirs):
        page = d / "page.tsx"
        if not page.exists():
            continue
        if patch(page, d.name):
            patched += 1

    print(f"\nDone. Patched {patched} VS pages.")


if __name__ == "__main__":
    main()
