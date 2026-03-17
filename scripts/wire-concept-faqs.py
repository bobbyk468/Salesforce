#!/usr/bin/env python3
"""
Wire getConceptFaqs(slug) into all exam-tips pages:
- Add import from '@/lib/exam-tips-concept-faqs'
- Append ...getConceptFaqs('slug') to faqItems
- For adm-201 and app-builder: remove the 3 inline "Why do most..." concept FAQs first
"""

import re
from pathlib import Path

APP = Path(__file__).resolve().parent.parent / "src" / "app"
PAGE_DIRS = sorted(
    d for d in APP.iterdir()
    if d.is_dir() and "exam-tips" in d.name and (d / "page.tsx").exists()
)

IMPORT_LINE = "import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'\n"


def remove_inline_concept_faqs(content: str) -> str:
    """Remove the 3 'Why do most X candidates fail questions about...' entries from faqItems."""
    # One full FAQ object: { question: '...', answer: '...', }
    # Answer is single-quoted and may contain \' and \n
    block = re.compile(
        r"\n  \{\s*\n"
        r"    question: 'Why do most [^']+\?",  # question line
        re.DOTALL,
    )
    count = 0
    while count < 3:
        match = block.search(content)
        if not match:
            break
        start = match.start()
        # From start, find end of this object: "  },"
        # Answer string: '...' with possible \' inside
        rest = content[start:]
        depth = 0
        i = 0
        in_string = None
        escape = False
        end = -1
        for j, c in enumerate(rest):
            if escape:
                escape = False
                continue
            if c == "\\" and in_string:
                escape = True
                continue
            if in_string:
                if c == in_string:
                    in_string = None
                continue
            if c in ("'", '"'):
                in_string = c
                continue
            if in_string is None and c == "{":
                depth += 1
            elif in_string is None and c == "}":
                depth -= 1
                if depth == 0:
                    # Find the comma and newline after },
                    k = j + 1
                    while k < len(rest) and rest[k] in " \t":
                        k += 1
                    if k < len(rest) and rest[k] == ",":
                        k += 1
                    while k < len(rest) and rest[k] in " \t\n":
                        k += 1
                    end = start + k
                    break
            i = j
        if end == -1:
            break
        content = content[:start] + content[end:]
        count += 1
    return content


def add_import(content: str) -> str:
    if "getConceptFaqs" in content:
        return content
    # Insert after ContentPageAuthor import
    if "ContentPageAuthor" in content and IMPORT_LINE not in content:
        content = content.replace(
            "import ContentPageAuthor from '@/components/ContentPageAuthor'\n",
            "import ContentPageAuthor from '@/components/ContentPageAuthor'\n"
            + IMPORT_LINE,
        )
    return content


def add_spread_faqs(content: str, slug: str) -> str:
    if f"getConceptFaqs('{slug}')" in content:
        return content
    # faqItems is the last array before "export default"; it closes with "  },\n]"
    before_export = content.split("export default")[0]
    needle = "  },\n]"
    last_close = before_export.rfind(needle)
    if last_close == -1:
        return content
    spread = f"  ...getConceptFaqs('{slug}'),\n"
    insert_pos = last_close + len("  },\n")
    content = content[:insert_pos] + spread + content[insert_pos:]
    return content


def main():
    for page_dir in PAGE_DIRS:
        slug = page_dir.name
        path = page_dir / "page.tsx"
        content = path.read_text()

        if f"getConceptFaqs('{slug}')" in content:
            continue

        # For adm-201 and app-builder, remove inline concept FAQs (only on first run)
        if slug in ("adm-201-exam-tips-2026", "app-builder-exam-tips"):
            content = remove_inline_concept_faqs(content)

        content = add_import(content)
        content = add_spread_faqs(content, slug)
        path.write_text(content)
        print(f"Wired: {slug}")


if __name__ == "__main__":
    main()
