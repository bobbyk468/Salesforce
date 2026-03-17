#!/usr/bin/env python3
"""
Ensure `slug` is declared before it is used in pageTitle helpers.

Fixes files where we have:
  const pageTitle = buildExamTipsTitle(slug)
  const ogImageUrl = ...
  const slug = '...'

Reorders to:
  const siteUrl = ...
  const slug = '...'
  const pageTitle = buildExamTipsTitle(slug)
  const ogImageUrl = ...
"""

from __future__ import annotations

from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
APP_ROOT = ROOT / "src" / "app"


def fix_file(path: Path) -> bool:
  text = path.read_text(encoding="utf-8")
  if "buildExamTipsTitle(slug)" not in text and "buildStudyGuideTitle(slug)" not in text:
    return False
  if "const slug =" not in text:
    return False

  lines = text.splitlines()
  # Find indices of slug declaration and pageTitle line.
  slug_idx = next((i for i, l in enumerate(lines) if "const slug =" in l), None)
  pt_idx = next(
    (i for i, l in enumerate(lines) if "const pageTitle" in l and "buildExamTipsTitle" in l or "buildStudyGuideTitle" in l),
    None,
  )
  if slug_idx is None or pt_idx is None:
    return False

  # If slug already before pageTitle, nothing to do.
  if slug_idx < pt_idx:
    return False

  slug_line = lines.pop(slug_idx)

  # Insert slug immediately after siteUrl const if present, else just before pageTitle.
  site_idx = next((i for i, l in enumerate(lines) if "const siteUrl" in l), None)
  insert_idx = site_idx + 1 if site_idx is not None else pt_idx
  lines.insert(insert_idx, slug_line)

  new_text = "\n".join(lines)
  if new_text != text:
    path.write_text(new_text, encoding="utf-8")
    return True
  return False


def main() -> None:
  changed = 0
  for tsx in APP_ROOT.rglob("*exam-tips*/page.tsx"):
    if fix_file(tsx):
      changed += 1
  for tsx in APP_ROOT.rglob("*study-guide/page.tsx"):
    if fix_file(tsx):
      changed += 1
  print(f"Updated slug order in {changed} files")


if __name__ == "__main__":
  main()

