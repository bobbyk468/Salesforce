#!/usr/bin/env python3
"""
Wire shared SEO title helpers into exam tips and study guide pages.

Strategy:
- Parse SLUG_TO_EXAM_TIPS and SLUG_TO_STUDY_GUIDE from src/lib/cert-seo-data.ts
  to build a mapping of page path -> cert slug.
- For each matching Next.js route (src/app/[path]/page.tsx):
  - Import the appropriate helper from '@/lib/seo-title-helpers'
  - Add a `const slug = '...'` binding if not present
  - Replace the existing `const pageTitle = ...` with a helper call:
      - Exam tips:  pageTitle = buildExamTipsTitle(slug)
      - Study guide: pageTitle = buildStudyGuideTitle(slug)

This keeps existing descriptions / OG metadata but standardises titles.
"""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CERT_SEO_PATH = ROOT / "src" / "lib" / "cert-seo-data.ts"
APP_ROOT = ROOT / "src" / "app"


def parse_slug_map(const_name: str) -> dict[str, str]:
  """Extract {path_without_leading_slash: slug} from a TS const record."""
  text = CERT_SEO_PATH.read_text(encoding="utf-8")
  # Roughly match: const SLUG_TO_EXAM_TIPS: Record<string, string> = { ... }
  m = re.search(
    rf"{const_name}\s*:\s*Record<string,\s*string>\s*=\s*\{{(.*?)\n\}}",
    text,
    flags=re.DOTALL,
  )
  if not m:
    return {}
  body = m.group(1)
  # Entries look like: 'administrator': '/adm-201-exam-tips-2026',
  entries = re.findall(r"'([^']+)'\s*:\s*'(/[^']+)'", body)
  path_to_slug: dict[str, str] = {}
  for slug, path in entries:
    clean_path = path.lstrip("/").rstrip("/")
    path_to_slug[clean_path] = slug
  return path_to_slug


def ensure_import(text: str, import_line: str) -> str:
  """Insert an import line if it's not already present."""
  if import_line in text:
    return text
  # Insert after last existing import.
  lines = text.splitlines()
  last_import_idx = -1
  for i, line in enumerate(lines):
    if line.strip().startswith("import "):
      last_import_idx = i
  if last_import_idx >= 0:
    lines.insert(last_import_idx + 1, import_line)
  else:
    lines.insert(0, import_line)
  return "\n".join(lines)


def ensure_slug_const(text: str, slug: str) -> str:
  """Ensure there is a `const slug = '...'` near the top of the file."""
  if "const slug =" in text:
    return text
  lines = text.splitlines()
  insert_idx = 0
  for i, line in enumerate(lines):
    # After imports and siteUrl/RELEASE_CURRENT consts if present.
    if line.startswith("const siteUrl") or line.startswith("const pageTitle") or line.startswith("const ogImageUrl"):
      insert_idx = i
  slug_line = f"const slug = '{slug}'"
  lines.insert(insert_idx + 1, slug_line)
  return "\n".join(lines)


def replace_page_title_with_helper(text: str, helper_name: str) -> str:
  """Replace `const pageTitle = ...` with helper call if found."""
  pattern = re.compile(r"const pageTitle\s*=\s*`[^`]*`", flags=re.MULTILINE)
  if not pattern.search(text):
    return text
  return pattern.sub(f"const pageTitle = {helper_name}(slug)", text, count=1)


def update_file(path: Path, slug: str, helper_name: str, import_line: str) -> None:
  text = path.read_text(encoding="utf-8")
  original = text
  text = ensure_import(text, import_line)
  text = ensure_slug_const(text, slug)
  text = replace_page_title_with_helper(text, helper_name)
  if text != original:
    path.write_text(text, encoding="utf-8")


def main() -> None:
  exam_map = parse_slug_map("SLUG_TO_EXAM_TIPS")
  study_map = parse_slug_map("SLUG_TO_STUDY_GUIDE")

  # Exam tips pages
  for route, slug in exam_map.items():
    page_tsx = APP_ROOT / route / "page.tsx"
    if page_tsx.exists():
      update_file(
        page_tsx,
        slug,
        helper_name="buildExamTipsTitle",
        import_line="import { buildExamTipsTitle } from '@/lib/seo-title-helpers'\n",
      )

  # Study guide pages
  for route, slug in study_map.items():
    page_tsx = APP_ROOT / route / "page.tsx"
    if page_tsx.exists():
      update_file(
        page_tsx,
        slug,
        helper_name="buildStudyGuideTitle",
        import_line="import { buildStudyGuideTitle } from '@/lib/seo-title-helpers'\n",
      )


if __name__ == "__main__":
  main()

