#!/usr/bin/env python3
"""
Add canonical cross-links between exam-tips and study-guide pages.

Exam-tips pages  → get StudyGuideCrossLink  (inserted after ExamTipsCertLink)
Study-guide pages → get ExamTipsCrossLink + CertInsightBlock (inserted after ContentPageAuthor)

Run:
    python3 scripts/add-cross-links.py
"""

import os
import re
from pathlib import Path

ROOT = Path(__file__).parent.parent
APP = ROOT / "src" / "app"

# ---------------------------------------------------------------------------
# Slug-to-display-name mapping (cert name for the link text)
# ---------------------------------------------------------------------------
CERT_NAMES: dict[str, str] = {
    "adm-201": "Salesforce Administrator",
    "advanced-administrator": "Advanced Administrator",
    "agentforce-specialist": "Agentforce Specialist",
    "ai-associate": "AI Associate",
    "app-builder": "Platform App Builder",
    "application-architect": "Application Architect",
    "b2b-solution-architect": "B2B Solution Architect",
    "b2c-commerce-architect": "B2C Commerce Architect",
    "b2c-commerce-developer": "B2C Commerce Developer",
    "b2c-solution-architect": "B2C Solution Architect",
    "business-analyst": "Business Analyst",
    "cpq-administrator": "CPQ Administrator",
    "crm-analytics": "CRM Analytics & Einstein Discovery",
    "data-architect": "Data Architect",
    "data-cloud-consultant": "Data Cloud Consultant",
    "dev-lifecycle-deployment-architect": "Development Lifecycle & Deployment Architect",
    "education-cloud-consultant": "Education Cloud Consultant",
    "email-specialist": "Marketing Cloud Email Specialist",
    "experience-cloud-consultant": "Experience Cloud Consultant",
    "field-service-consultant": "Field Service Consultant",
    "identity-access-management-architect": "Identity & Access Management Architect",
    "integration-architect": "Integration Architect",
    "javascript-developer-i": "JavaScript Developer I",
    "marketing-cloud-consultant": "Marketing Cloud Consultant",
    "marketing-cloud-engagement-admin": "Marketing Cloud Engagement Admin",
    "marketing-cloud-engagement-developer": "Marketing Cloud Engagement Developer",
    "marketing-cloud-engagement-foundations": "Marketing Cloud Engagement Foundations",
    "mulesoft-developer-i": "MuleSoft Developer I",
    "mulesoft-developer-ii": "MuleSoft Developer II",
    "mulesoft-integration-architect": "MuleSoft Integration Architect",
    "mulesoft-integration-foundations": "MuleSoft Integration Foundations",
    "mulesoft-platform-architect": "MuleSoft Platform Architect",
    "nonprofit-cloud-consultant": "Nonprofit Cloud Consultant",
    "nonprofit-success-pack-consultant": "Nonprofit Success Pack Consultant",
    "omnistudio-consultant": "OmniStudio Consultant",
    "omnistudio-developer": "OmniStudio Developer",
    "pardot-consultant": "Pardot Consultant",
    "pardot-specialist": "Pardot Specialist",
    "pd1": "Platform Developer I",
    "pd2": "Platform Developer II",
    "platform-foundations": "Platform Foundations",
    "revenue-cloud-consultant": "Revenue Cloud Consultant",
    "sales-cloud-consultant": "Sales Cloud Consultant",
    "service-cloud-consultant": "Service Cloud Consultant",
    "sharing-visibility-architect": "Sharing & Visibility Architect",
    "slack-administrator": "Slack Administrator",
    "strategy-designer": "Strategy Designer",
    "system-architect": "System Architect",
    "tableau-data-analyst": "Tableau Data Analyst",
    "technical-architect": "Technical Architect",
    "ux-designer": "UX Designer",
}

# Exam-tips slug base → study-guide slug base (when not identical)
EXAM_TIPS_EXCEPTIONS: dict[str, str] = {
    "experience-cloud": "experience-cloud-consultant",
    "field-service": "field-service-consultant",
    "nonprofit-cloud": "nonprofit-cloud-consultant",
    "sales-cloud": "sales-cloud-consultant",
}


def get_base(dir_name: str, suffix: str) -> str:
    return dir_name.replace(suffix, "")


def slug_to_cert_name(slug_base: str) -> str:
    return CERT_NAMES.get(slug_base, slug_to_title(slug_base))


def slug_to_title(slug: str) -> str:
    return " ".join(w.capitalize() for w in slug.split("-"))


# ---------------------------------------------------------------------------
# Exam-tips pages → insert StudyGuideCrossLink after ExamTipsCertLink
# ---------------------------------------------------------------------------

def patch_exam_tips(page_path: Path, study_guide_slug: str, cert_name: str) -> bool:
    src = page_path.read_text(encoding="utf-8")

    if "StudyGuideCrossLink" in src:
        print(f"  SKIP (already has StudyGuideCrossLink): {page_path.parent.name}")
        return False

    # Add import after the last import line
    import_line = "import StudyGuideCrossLink from '@/components/StudyGuideCrossLink'\n"
    last_import_match = list(re.finditer(r"^import .+$", src, re.MULTILINE))
    if not last_import_match:
        print(f"  SKIP (no imports found): {page_path.parent.name}")
        return False
    insert_pos = last_import_match[-1].end()
    src = src[:insert_pos] + "\n" + import_line + src[insert_pos:]

    # Insert JSX after <ExamTipsCertLink ... />
    jsx = (
        f'\n      <StudyGuideCrossLink studyGuideSlug="{study_guide_slug}" '
        f'certName="{cert_name}" />'
    )
    pattern = r"(<ExamTipsCertLink[^/]*/?>)"
    new_src, count = re.subn(pattern, r"\1" + jsx, src, count=1)

    if count == 0:
        print(f"  SKIP (ExamTipsCertLink not found): {page_path.parent.name}")
        return False

    page_path.write_text(new_src, encoding="utf-8")
    print(f"  PATCHED exam-tips: {page_path.parent.name}")
    return True


# ---------------------------------------------------------------------------
# Study-guide pages → insert ExamTipsCrossLink + CertInsightBlock after ContentPageAuthor
# ---------------------------------------------------------------------------

def patch_study_guide(
    page_path: Path,
    exam_tips_slug: str,
    cert_name: str,
    cert_insight_slug: str,
) -> bool:
    src = page_path.read_text(encoding="utf-8")

    if "ExamTipsCrossLink" in src:
        print(f"  SKIP (already has ExamTipsCrossLink): {page_path.parent.name}")
        return False

    # Add imports
    import_lines = (
        "import ExamTipsCrossLink from '@/components/ExamTipsCrossLink'\n"
        "import CertInsightBlock from '@/components/CertInsightBlock'\n"
    )
    last_import_match = list(re.finditer(r"^import .+$", src, re.MULTILINE))
    if not last_import_match:
        print(f"  SKIP (no imports found): {page_path.parent.name}")
        return False
    insert_pos = last_import_match[-1].end()
    src = src[:insert_pos] + "\n" + import_lines + src[insert_pos:]

    # Insert JSX after <ContentPageAuthor ... />
    jsx = (
        f'\n      <ExamTipsCrossLink examTipsSlug="{exam_tips_slug}" '
        f'certName="{cert_name}" />'
        f'\n      <CertInsightBlock certSlug="{cert_insight_slug}" />'
    )
    pattern = r"(<ContentPageAuthor[^/]*/?>)"
    new_src, count = re.subn(pattern, r"\1" + jsx, src, count=1)

    if count == 0:
        print(f"  SKIP (ContentPageAuthor not found): {page_path.parent.name}")
        return False

    page_path.write_text(new_src, encoding="utf-8")
    print(f"  PATCHED study-guide: {page_path.parent.name}")
    return True


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main() -> None:
    patched = 0

    # Collect all exam-tips and study-guide directories
    exam_tips_dirs = {
        get_base(d.name, "-exam-tips"): d
        for d in APP.iterdir()
        if d.is_dir() and d.name.endswith("-exam-tips")
    }
    study_guide_dirs = {
        get_base(d.name, "-study-guide"): d
        for d in APP.iterdir()
        if d.is_dir() and d.name.endswith("-study-guide")
    }

    print(f"Found {len(exam_tips_dirs)} exam-tips dirs, {len(study_guide_dirs)} study-guide dirs\n")

    # Patch exam-tips pages
    print("=== Patching exam-tips pages ===")
    for et_base, et_dir in sorted(exam_tips_dirs.items()):
        # Resolve the study-guide base (handle exceptions)
        sg_base = EXAM_TIPS_EXCEPTIONS.get(et_base, et_base)
        if sg_base not in study_guide_dirs:
            print(f"  NO MATCH (no study-guide for {et_base})")
            continue

        page_path = et_dir / "page.tsx"
        if not page_path.exists():
            continue

        study_guide_slug = f"{sg_base}-study-guide"
        cert_name = slug_to_cert_name(sg_base)
        if patch_exam_tips(page_path, study_guide_slug, cert_name):
            patched += 1

    # Patch study-guide pages
    print("\n=== Patching study-guide pages ===")
    for sg_base, sg_dir in sorted(study_guide_dirs.items()):
        # Resolve the exam-tips base
        # Reverse the exceptions map
        et_base = sg_base
        for et_k, sg_v in EXAM_TIPS_EXCEPTIONS.items():
            if sg_v == sg_base:
                et_base = et_k
                break

        if et_base not in exam_tips_dirs:
            print(f"  NO MATCH (no exam-tips for {sg_base})")
            continue

        page_path = sg_dir / "page.tsx"
        if not page_path.exists():
            continue

        exam_tips_slug = f"{et_base}-exam-tips"
        cert_name = slug_to_cert_name(sg_base)
        if patch_study_guide(page_path, exam_tips_slug, cert_name, sg_base):
            patched += 1

    print(f"\nDone. Patched {patched} pages.")


if __name__ == "__main__":
    main()
