#!/usr/bin/env python3
"""
Add "Next certifications to consider" sections to certification hub pages,
study guides, and exam tips. Run in batches; skips pages that already have
a next-step section.
"""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
APP = ROOT / "src" / "app"

# Slug -> role (category) from certifications-data.ts
SLUG_TO_ROLE: dict[str, str] = {}
for role, slugs in [
    ("associate", ["platform-foundations", "ai-associate", "marketing-cloud-engagement-foundations", "mulesoft-integration-foundations"]),
    ("administrator", ["administrator", "advanced-administrator", "app-builder", "agentforce-specialist", "business-analyst", "cpq-administrator", "marketing-cloud-engagement-admin", "slack-administrator", "administrator-practice-test"]),
    ("developer", ["app-builder", "developer-1", "developer-2", "javascript-developer-i", "b2c-commerce-developer", "industries-cpq-developer", "marketing-cloud-engagement-developer", "mulesoft-developer-i", "mulesoft-developer-ii", "mulesoft-hyperautomation-developer", "omnistudio-developer", "slack-developer"]),
    ("consultant", ["business-analyst", "crm-analytics-einstein-discovery-consultant", "data-cloud-consultant", "education-cloud-consultant", "experience-cloud", "field-service", "pardot-consultant", "marketing-cloud-consultant", "nonprofit-cloud", "nonprofit-success-pack-consultant", "omnistudio-consultant", "revenue-cloud-consultant", "sales-cloud", "service-cloud", "slack-consultant"]),
    ("marketing", ["email-specialist", "marketing-cloud-engagement-admin", "marketing-cloud-consultant", "marketing-cloud-engagement-developer", "pardot-specialist", "pardot-consultant", "email-specialist-practice-test"]),
    ("architect", ["application-architect", "data-architect", "integration-architect", "sharing-visibility-architect", "system-architect", "identity-access-management-architect", "dev-lifecycle-deployment-architect", "technical-architect", "technical-architect-evaluation", "technical-architect-review-board", "b2b-solution-architect", "b2c-commerce-architect", "b2c-solution-architect", "heroku-architect", "mulesoft-catalyst-consultant", "mulesoft-platform-architect", "mulesoft-integration-architect"]),
    ("accredited-professional", ["advanced-field-service-ap", "b2b-commerce-admin-ap", "b2b-commerce-developer-ap", "communications-cloud-ap", "consumer-goods-cloud-ap", "consumer-goods-tpm-ap", "contact-center-ap", "cpq-billing-ap", "energy-utilities-ap", "financial-services-cloud-ap", "health-cloud-ap", "heroku-developer-ap", "loyalty-management-ap", "manufacturing-cloud-ap", "marketing-cloud-advanced-cross-channel-ap", "marketing-cloud-intelligence-ap", "marketing-cloud-personalization-ap", "media-cloud-ap", "net-zero-cloud-ap", "order-management-admin-ap", "order-management-developer-ap", "process-automation-ap", "public-sector-solutions-ap"]),
    ("sales", ["sales-foundations"]),
    ("designer", ["strategy-designer", "ux-designer"]),
    ("tableau", ["tableau-architect", "tableau-consultant", "tableau-data-analyst", "tableau-desktop-foundations", "tableau-server-administrator"]),
]:
    for s in slugs:
        SLUG_TO_ROLE[s] = role

# Role -> list of (path_slug, label) for next-step links (max 4)
ROLE_NEXT_LINKS: dict[str, list[tuple[str, str]]] = {
    "associate": [("administrator", "Platform Administrator (ADM-201)"), ("developer-1", "Platform Developer I"), ("ai-associate", "AI Associate")],
    "administrator": [("advanced-administrator", "Advanced Administrator"), ("app-builder", "Platform App Builder"), ("sales-cloud", "Sales Cloud Consultant"), ("service-cloud", "Service Cloud Consultant")],
    "developer": [("developer-2", "Platform Developer II"), ("app-builder", "Platform App Builder"), ("javascript-developer-i", "JavaScript Developer I"), ("certifications/role/developer", "Developer certification path")],
    "consultant": [("sales-cloud", "Sales Cloud Consultant"), ("service-cloud", "Service Cloud Consultant"), ("experience-cloud", "Experience Cloud Consultant"), ("certifications/role/consultant", "Consultant certification path")],
    "marketing": [("marketing-cloud-consultant", "Marketing Cloud Engagement Consultant"), ("pardot-consultant", "Account Engagement (Pardot) Consultant"), ("email-specialist", "Marketing Cloud Email Specialist")],
    "architect": [("application-architect", "Application Architect"), ("system-architect", "System Architect"), ("technical-architect", "Technical Architect (CTA)"), ("architect-certification-path", "Architect certification path")],
    "accredited-professional": [("sales-cloud", "Sales Cloud Consultant"), ("service-cloud", "Service Cloud Consultant"), ("administrator", "Platform Administrator"), ("certifications/role/administrator", "Admin certification path")],
    "sales": [("administrator", "Platform Administrator"), ("sales-cloud", "Sales Cloud Consultant")],
    "designer": [("strategy-designer", "Platform Strategy Designer"), ("ux-designer", "User Experience Designer"), ("experience-cloud", "Experience Cloud Consultant")],
    "tableau": [("tableau-consultant", "Tableau Consultant"), ("tableau-data-analyst", "Tableau Data Analyst"), ("tableau-desktop-foundations", "Tableau Desktop Foundations")],
}

# Headings and intro by role for hub pages
ROLE_HEADING: dict[str, str] = {
    "associate": "Next Certifications After Associate",
    "administrator": "Next Certifications to Consider",
    "developer": "Next Certifications After Developer",
    "consultant": "Next Consultant Certifications",
    "marketing": "Next Marketing Certifications",
    "architect": "Next Architect Certifications",
    "accredited-professional": "Next Certifications After This AP",
    "sales": "Next Certifications",
    "designer": "Next Designer Certifications",
    "tableau": "Next Tableau Certifications",
}

ROLE_INTRO: dict[str, str] = {
    "associate": "After earning an associate credential, many candidates move to role-based certifications:",
    "administrator": "After this certification, common next steps in the admin track or consultant track:",
    "developer": "After this certification, common next steps in the developer track:",
    "consultant": "After this consultant certification, you can add adjacent clouds or deepen your specialisation:",
    "marketing": "After this marketing certification, consider these related credentials:",
    "architect": "After this architect certification, progress toward CTA or other architect domains:",
    "accredited-professional": "AP credentials pair well with core platform certifications. Consider:",
    "sales": "After Sales Foundations, the usual next step is Platform Administrator, then consultant certs:",
    "designer": "After this designer certification, consider the other designer cert or Experience Cloud:",
    "tableau": "After this Tableau certification, consider other Tableau credentials or CRM Analytics:",
}


def build_hub_section(slug: str) -> str | None:
    role = SLUG_TO_ROLE.get(slug)
    if not role or role not in ROLE_NEXT_LINKS:
        return None
    links = ROLE_NEXT_LINKS[role]
    heading = ROLE_HEADING.get(role, "Next Certifications to Consider")
    intro = ROLE_INTRO.get(role, "After this certification, consider these related credentials:")
    items = []
    for path_slug, label in links[:4]:
        if path_slug == "architect-certification-path":
            href = "/architect-certification-path"
        elif path_slug == "certifications/role/administrator":
            href = "/certifications/role/administrator"
        elif path_slug == "certifications/role/developer":
            href = "/certifications/role/developer"
        elif path_slug == "certifications/role/consultant":
            href = "/certifications/role/consultant"
        else:
            href = f"/certifications/{path_slug}"
        items.append(f'              <li><Link href="{href}" className="text-salesforce-blue font-medium hover:underline">{label}</Link></li>')
    block = f'''          <section className="mt-8 rounded-xl border border-blue-100 bg-blue-50/40 p-5 sm:p-6" aria-labelledby="next-certs-heading">
            <h2 id="next-certs-heading" className="text-base font-semibold text-gray-900 mb-3">{heading}</h2>
            <p className="text-sm text-gray-700 mb-2">{intro}</p>
            <ul className="space-y-2 text-sm">
{chr(10).join(items)}
            </ul>
          </section>

          '''
    return block


def already_has_next_section(content: str) -> bool:
    return (
        "Next Certifications" in content
        or "What Comes After" in content
        or "Where to Go After" in content
        or "Next Consultant" in content
        or "Next step" in content
        or "next-certs-heading" in content
    )


def get_slug_from_hub(content: str) -> str | None:
    m = re.search(r"const\s+slug\s*=\s*['\"]([a-z0-9-]+)['\"]", content)
    return m.group(1) if m else None


def add_link_import(content: str) -> str:
    if "import Link from 'next/link'" in content or 'import Link from "next/link"' in content:
        return content
    # Insert after first import block (after first semicolon that ends an import)
    lines = content.split("\n")
    insert_idx = 0
    for i, line in enumerate(lines):
        if line.strip().startswith("import ") and (" from " in line or " from '" in line):
            insert_idx = i + 1
            break
    lines.insert(insert_idx, "import Link from 'next/link'")
    return "\n".join(lines)


def process_hub_page(path: Path) -> bool:
    content = path.read_text(encoding="utf-8")
    if already_has_next_section(content):
        return False
    slug = get_slug_from_hub(content)
    if not slug:
        return False
    section = build_hub_section(slug)
    if not section:
        return False
    # Insert before <div id="related-certs">
    marker = '<div id="related-certs">'
    if marker not in content:
        return False
    content = add_link_import(content)
    content = content.replace(marker, section + marker, 1)
    path.write_text(content, encoding="utf-8")
    return True


def build_study_guide_section(slug: str) -> str | None:
    role = SLUG_TO_ROLE.get(slug)
    if not role or role not in ROLE_NEXT_LINKS:
        return None
    links = ROLE_NEXT_LINKS[role][:3]
    intro = "After this certification, consider: "
    link_parts = []
    for path_slug, label in links:
        if path_slug == "architect-certification-path":
            href = "/architect-certification-path"
        elif path_slug == "certifications/role/administrator":
            href = "/certifications/role/administrator"
        elif path_slug == "certifications/role/developer":
            href = "/certifications/role/developer"
        elif path_slug == "certifications/role/consultant":
            href = "/certifications/role/consultant"
        else:
            href = f"/certifications/{path_slug}"
        link_parts.append(f'<Link href="{href}" className="text-salesforce-blue font-medium hover:underline">{label}</Link>')
    links_text = ", ".join(link_parts[:-1])
    if len(link_parts) > 1:
        links_text += f", or {link_parts[-1]}"
    else:
        links_text = link_parts[0] if link_parts else ""
    block = f'''      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">What Comes After This Certification?</h2>
        <p className="text-sm text-gray-700">
          {intro}{links_text}.
        </p>
      </section>

      '''
    return block


def process_study_guide(path: Path) -> bool:
    content = path.read_text(encoding="utf-8")
    if "What Comes After This Certification?" in content or "What Comes After" in content or "Where to Go After" in content:
        return False
    slug = get_slug_from_hub(content)
    if not slug:
        return False
    section = build_study_guide_section(slug)
    if not section:
        return False
    marker = "<DifficultyHeatmap"
    if marker not in content:
        return False
    content = content.replace(marker, section + marker, 1)
    path.write_text(content, encoding="utf-8")
    return True


def build_exam_tips_paragraph(slug: str) -> str | None:
    role = SLUG_TO_ROLE.get(slug)
    if not role or role not in ROLE_NEXT_LINKS:
        return None
    links = ROLE_NEXT_LINKS[role][:2]
    parts = []
    for path_slug, label in links:
        if path_slug == "architect-certification-path":
            href = "/architect-certification-path"
        elif path_slug == "certifications/role/administrator":
            href = "/certifications/role/administrator"
        elif path_slug == "certifications/role/developer":
            href = "/certifications/role/developer"
        elif path_slug == "certifications/role/consultant":
            href = "/certifications/role/consultant"
        else:
            href = f"/certifications/{path_slug}"
        parts.append(f'<Link href="{href}" className="text-salesforce-blue underline">{label}</Link>')
    if len(parts) == 2:
        text = f'After this exam, consider {parts[0]} or {parts[1]} next.'
    else:
        text = f'After this exam, consider {parts[0]} next.' if parts else ""
    return f'        <p className="text-xs text-gray-500 mt-4">\n          {text}\n        </p>\n'


def process_exam_tips(path: Path) -> bool:
    content = path.read_text(encoding="utf-8")
    if "After this exam, consider" in content or "When you're consistently" in content:
        return False
    slug = get_slug_from_hub(content)
    if not slug:
        return False
    para = build_exam_tips_paragraph(slug)
    if not para:
        return False
    # Insert before the last closing </section> of the main content (before </div> ) })
    last_section_close = content.rfind("      </section>")
    if last_section_close == -1:
        return False
    # Insert our paragraph inside that section, before </section>
    insert_pos = content.rfind("      </section>")
    content = content[:insert_pos] + para + content[insert_pos:]
    path.write_text(content, encoding="utf-8")
    return True


def main() -> None:
    import sys
    batch = sys.argv[1] if len(sys.argv) > 1 else "hubs"
    updated = 0
    if batch == "hubs":
        hubs = sorted(APP.glob("certifications/*/page.tsx"))
        hubs = [p for p in hubs if "role" not in str(p) and p.name == "page.tsx"]
        for path in hubs:
            if process_hub_page(path):
                updated += 1
                print(path.relative_to(ROOT))
        print(f"Updated {updated} hub pages.")
    elif batch == "guides":
        for path in sorted(APP.glob("*study-guide*/page.tsx")):
            if process_study_guide(path):
                updated += 1
                print(path.relative_to(ROOT))
        print(f"Updated {updated} study guide pages.")
    elif batch == "tips":
        for path in sorted(APP.glob("*exam-tips*/page.tsx")):
            if process_exam_tips(path):
                updated += 1
                print(path.relative_to(ROOT))
        print(f"Updated {updated} exam tips pages.")
    else:
        print("Usage: add_next_step_sections.py [hubs|guides|tips]")


if __name__ == "__main__":
    main()
