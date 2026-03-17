#!/usr/bin/env python3
"""
Generate templated difficulty heatmap data by certification family.

Uses "family patterns" so you don't research 550 rows manually:
- Consultant family: Solution Design (Hard), Discovery/Requirements (Moderate), etc.
- Architect family: Data Modeling / Architecture (Hard), Governance (Moderate), etc.
- Admin/Developer/AP families: similar pattern rules.

Reads section names from src/lib/exam-weightage-data.ts and outputs TypeScript
snippets you can merge into src/lib/difficulty-data.ts. Optionally outputs
only certs that are missing from difficulty-data (--gaps-only).

Usage:
  python3 scripts/difficulty-family-patterns.py                    # all certs, TS output
  python3 scripts/difficulty-family-patterns.py --gaps-only       # only certs without data
  python3 scripts/difficulty-family-patterns.py --json           # JSON instead of TS
"""

import re
import sys
import json
import argparse
from pathlib import Path

# ---------------------------------------------------------------------------
# Certification family mapping (slug -> family for pattern lookup)
# Families: admin, developer, consultant, architect, marketing, ap, tableau, associate
# ---------------------------------------------------------------------------
CERT_FAMILY = {
    "administrator": "admin",
    "advanced-administrator": "admin",
    "administrator-practice-test": "admin",
    "app-builder": "admin",
    "agentforce-specialist": "admin",
    "platform-foundations": "associate",
    "ai-associate": "associate",
    "marketing-cloud-engagement-foundations": "associate",
    "mulesoft-integration-foundations": "associate",
    "business-analyst": "consultant",
    "sales-cloud": "consultant",
    "service-cloud": "consultant",
    "experience-cloud": "consultant",
    "field-service": "consultant",
    "data-cloud-consultant": "consultant",
    "crm-analytics-einstein-discovery-consultant": "consultant",
    "education-cloud-consultant": "consultant",
    "pardot-consultant": "consultant",
    "pardot-specialist": "consultant",
    "marketing-cloud-consultant": "consultant",
    "nonprofit-cloud": "consultant",
    "nonprofit-success-pack-consultant": "consultant",
    "omnistudio-consultant": "consultant",
    "omnistudio-developer": "developer",
    "revenue-cloud-consultant": "consultant",
    "slack-consultant": "consultant",
    "cpq-administrator": "admin",
    "developer-1": "developer",
    "developer-2": "developer",
    "javascript-developer-i": "developer",
    "b2c-commerce-developer": "developer",
    "industries-cpq-developer": "developer",
    "marketing-cloud-engagement-developer": "developer",
    "mulesoft-developer-i": "developer",
    "mulesoft-developer-ii": "developer",
    "mulesoft-hyperautomation-developer": "developer",
    "slack-developer": "developer",
    "email-specialist": "marketing",
    "email-specialist-practice-test": "marketing",
    "marketing-cloud-engagement-admin": "marketing",
    "application-architect": "architect",
    "data-architect": "architect",
    "integration-architect": "architect",
    "sharing-visibility-architect": "architect",
    "system-architect": "architect",
    "identity-access-management-architect": "architect",
    "dev-lifecycle-deployment-architect": "architect",
    "technical-architect": "architect",
    "technical-architect-evaluation": "architect",
    "technical-architect-review-board": "architect",
    "b2b-solution-architect": "architect",
    "b2c-commerce-architect": "architect",
    "b2c-solution-architect": "architect",
    "heroku-architect": "architect",
    "mulesoft-catalyst-consultant": "architect",
    "mulesoft-platform-architect": "architect",
    "mulesoft-integration-architect": "architect",
}
# AP and Tableau: slug contains -ap or tableau- -> family ap / tableau
for slug in [
    "advanced-field-service-ap", "b2b-commerce-admin-ap", "b2b-commerce-developer-ap",
    "communications-cloud-ap", "consumer-goods-cloud-ap", "consumer-goods-tpm-ap",
    "contact-center-ap", "cpq-administrator", "cpq-billing-ap", "energy-utilities-ap",
    "financial-services-cloud-ap", "health-cloud-ap", "heroku-developer-ap",
    "loyalty-management-ap", "manufacturing-cloud-ap", "marketing-cloud-advanced-cross-channel-ap",
    "marketing-cloud-intelligence-ap", "marketing-cloud-personalization-ap", "media-cloud-ap",
    "net-zero-cloud-ap", "order-management-admin-ap", "order-management-developer-ap",
    "process-automation-ap", "public-sector-solutions-ap",
]:
    CERT_FAMILY[slug] = "ap"
for slug in ["sales-foundations", "strategy-designer", "ux-designer"]:
    CERT_FAMILY[slug] = "consultant"  # designer/strategy
for slug in ["tableau-architect", "tableau-consultant", "tableau-data-analyst",
             "tableau-desktop-foundations", "tableau-server-administrator"]:
    CERT_FAMILY[slug] = "tableau"

# ---------------------------------------------------------------------------
# Family-based section name patterns: (substring in section name) -> (difficulty, tip_template)
# tip_template can use {section} for the section name. Order matters: first match wins.
# ---------------------------------------------------------------------------
SECTION_PATTERNS = {
    "consultant": [
        (r"solution design", "Hard", "Solution design and architecture decisions are heavily tested — know when to recommend which approach."),
        (r"discovery|requirements", "Moderate", "Discovery and requirements gathering — scenario questions often test the right technique for the context."),
        (r"stakeholder|collaboration", "Moderate", "Stakeholder and collaboration topics — focus on deliverable and communication choices."),
        (r"analytics|reporting|success metrics", "Easy", "Reporting and analytics — straightforward if you know the data model and KPIs."),
        (r"salesforce capabilities|best practices", "Moderate", "Best practices and platform capabilities — standard recommendations for the domain."),
        (r"data model|configuration", "Moderate", "Data model and configuration — know the key objects and relationships."),
        (r"automation|integration", "Trap", "Automation and integration — candidates often confuse which tool or pattern to use; scenario context is key."),
    ],
    "architect": [
        (r"architecture|solution design", "Hard", "Architecture and solution design — trade-offs and multi-system decisions are heavily tested."),
        (r"data model|data architecture", "Hard", "Data modeling and architecture — know LDV, sharing, and integration implications."),
        (r"governance|lifecycle|deployment", "Moderate", "Governance and lifecycle — standard architect-level expectations."),
        (r"security|identity|access", "Trap", "Security and identity — identity vs access vs visibility is commonly confused."),
        (r"integration", "Hard", "Integration patterns — when to use which pattern is a frequent exam topic."),
        (r"best practices", "Easy", "Best practices — straightforward recommendations."),
    ],
    "admin": [
        (r"configuration and setup|organization setup|user setup", "Moderate", "Setup and configuration — know the security model and hierarchy."),
        (r"security|access", "Hard", "Security and access — OWD, profiles, permission sets, and sharing are high-difficulty topics."),
        (r"automation|workflow|process", "Trap", "Automation — Record-Triggered Flow vs Process Builder; default to Flow as the recommended answer."),
        (r"data and analytics|reports and dashboards", "Moderate", "Reports and dashboards — joined reports and filter limitations are frequently tested."),
        (r"object manager|data model|standard and custom", "Moderate", "Objects and data model — relationship types and when to use each."),
        (r"sales and marketing|service and support|productivity", "Easy", "Application areas — well-documented; focus on scenario routing."),
    ],
    "developer": [
        (r"architecture|data model", "Hard", "Architecture and data model — design patterns and governor limits are heavily tested."),
        (r"logic and process|automation", "Trap", "Logic and automation — SOQL/DML in loops and declarative-first; exam favours the right pattern."),
        (r"testing|deployment|debugging", "Hard", "Testing and deployment — meaningful assertions and test design are common failure points."),
        (r"integration|api", "Hard", "Integration and APIs — know when to use REST vs SOAP and integration patterns."),
        (r"user interface|lwc|aura", "Moderate", "UI and LWC — lifecycle and when to use which approach."),
        (r"best practices", "Easy", "Best practices — standard recommendations."),
    ],
    "marketing": [
        (r"strategy|overview", "Moderate", "Strategy and overview — know the product set and when to use which channel."),
        (r"subscriber|data management|list", "Trap", "Subscriber and data model — lists vs data extensions and keys are commonly confused."),
        (r"content|email|journey|send", "Moderate", "Content and sends — journey vs email studio and tracking."),
        (r"analytics|reporting", "Easy", "Analytics and reporting — key metrics are well documented."),
    ],
    "ap": [
        (r"configuration|setup", "Moderate", "Configuration and setup — know the product-specific options."),
        (r"best practices", "Easy", "Best practices — straightforward for the domain."),
        (r"integration|analytics", "Moderate", "Integration and analytics — standard patterns for the product."),
    ],
    "tableau": [
        (r"architecture|governance|security", "Hard", "Architecture and governance — deployment and permission model are heavily tested."),
        (r"data|visualization|dashboard", "Trap", "Data and visualization — LOD and chart choice are commonly tested."),
        (r"requirements|design|stakeholder", "Moderate", "Requirements and design — scenario-heavy."),
        (r"best practices", "Easy", "Best practices — straightforward."),
    ],
    "associate": [
        (r"overview|basics|concepts", "Easy", "Foundational concepts — well covered in Trailhead."),
        (r"platform|integration", "Moderate", "Platform and integration — know the product positioning."),
        (r"design|api", "Moderate", "Design and API basics — key concepts for the exam."),
    ],
}

# Fallback when no pattern matches
DEFAULT_DIFFICULTY = "Moderate"
DEFAULT_TIP = "Focus on the key concepts and scenario context for this section — revise the official exam guide."


def parse_exam_weightage_ts(ts_path: Path) -> dict[str, list[str]]:
    """Parse exam-weightage-data.ts and return { slug: [section_name, ...] }."""
    content = ts_path.read_text()
    result = {}
    # Match: 'slug' or slug (word) followed by : [
    # Then collect all { name: 'Section Name', percentage: N } until ],
    block_pattern = re.compile(
        r"(?:'([^']+)'|(\b[a-z][a-z0-9-]*))\s*:\s*\[\s*(.*?)\s*\],",
        re.DOTALL,
    )
    section_pattern = re.compile(r"\{\s*name:\s*'((?:[^'\\]|\\.)*)'\s*,\s*percentage:\s*\d+\s*\}")
    for m in block_pattern.finditer(content):
        slug = m.group(1) or m.group(2)
        block = m.group(3)
        sections = section_pattern.findall(block)
        sections = [s.replace("\\'", "'") for s in sections]
        if sections:
            result[slug] = sections
    return result


def get_difficulty_and_tip(section_name: str, family: str) -> tuple[str, str]:
    section_lower = section_name.lower()
    patterns = SECTION_PATTERNS.get(family, SECTION_PATTERNS["consultant"])
    for pattern, difficulty, tip in patterns:
        if re.search(pattern, section_lower):
            return difficulty, tip.replace("{section}", section_name)
    return DEFAULT_DIFFICULTY, DEFAULT_TIP.replace("{section}", section_name)


def generate_entries(weightage: dict[str, list[str]], gaps_only: bool, difficulty_data_path: Path) -> dict:
    """Generate difficulty entries. If gaps_only, exclude slugs that already have data."""
    existing = set()
    if gaps_only and difficulty_data_path.exists():
        text = difficulty_data_path.read_text()
        for m in re.finditer(r"['\"]?([a-z0-9-]+)['\"]?\s*:\s*\[", text):
            existing.add(m.group(1))
    out = {}
    for slug, sections in weightage.items():
        if gaps_only and slug in existing:
            continue
        family = CERT_FAMILY.get(slug, "consultant")
        entries = []
        for name in sections:
            diff, tip = get_difficulty_and_tip(name, family)
            entries.append({"sectionName": name, "difficulty": diff, "tip": tip})
        out[slug] = entries
    return out


def emit_ts(entries: dict) -> str:
    lines = []
    for slug, sections in sorted(entries.items()):
        key = f"'{slug}'" if "-" in slug else slug
        lines.append(f"  {key}: [")
        for s in sections:
            tip_esc = s["tip"].replace("'", "\\'")
            lines.append(f"    {{ sectionName: '{s['sectionName']}', difficulty: '{s['difficulty']}', tip: '{tip_esc}' }},")
        lines.append("  ],")
    return "\n".join(lines)


def main():
    parser = argparse.ArgumentParser(description="Generate templated difficulty data by cert family.")
    parser.add_argument("--gaps-only", action="store_true", help="Only output certs missing from difficulty-data.ts")
    parser.add_argument("--json", action="store_true", help="Output JSON instead of TypeScript")
    parser.add_argument("--ts-path", default=None, help="Path to exam-weightage-data.ts")
    parser.add_argument("--difficulty-path", default=None, help="Path to difficulty-data.ts (for --gaps-only)")
    args = parser.parse_args()
    root = Path(__file__).resolve().parent.parent
    ts_path = Path(args.ts_path) if args.ts_path else root / "src" / "lib" / "exam-weightage-data.ts"
    difficulty_path = Path(args.difficulty_path) if args.difficulty_path else root / "src" / "lib" / "difficulty-data.ts"
    if not ts_path.exists():
        print(f"Error: {ts_path} not found", file=sys.stderr)
        sys.exit(1)
    weightage = parse_exam_weightage_ts(ts_path)
    entries = generate_entries(weightage, args.gaps_only, difficulty_path)
    if args.json:
        print(json.dumps(entries, indent=2))
    else:
        print("// Generated by scripts/difficulty-family-patterns.py — merge into DIFFICULTY_DATA in difficulty-data.ts")
        print(emit_ts(entries))


if __name__ == "__main__":
    main()
