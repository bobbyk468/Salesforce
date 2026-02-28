#!/usr/bin/env python3
"""
Migrate all cert pages from direct QuestionCard usage to dynamic PracticeQuestionsSection.

Before (87 pages):
  import QuestionCard from '@/components/QuestionCard'
  ...
  <div id="practice-questions" className="mt-12">
    <h2>{getCertPracticeQuestionsHeading(slug)}</h2>
    <p>{getPracticeQuestionsIntro(sampleQuestions.length)}</p>
    {sampleQuestions.map((q, index) => (<QuestionCard ... />))}
  </div>

After:
  const PracticeQuestionsSection = dynamic(() => import('@/components/PracticeQuestionsSection'), {
    ssr: false,
    loading: () => <div id="practice-questions" className="mt-12 min-h-[440px] w-full" aria-hidden="true" />,
  })
  ...
  <PracticeQuestionsSection
    heading={getCertPracticeQuestionsHeading(slug)}
    introText={getPracticeQuestionsIntro(sampleQuestions.length)}
    questions={sampleQuestions}
  />
"""

import os
import re

CERT_DIR = '/Users/brahmajikatragadda/Downloads/salesforce-certifications/src/app/certifications'

DYNAMIC_DECL = """
import dynamic from 'next/dynamic'
const PracticeQuestionsSection = dynamic(
  () => import('@/components/PracticeQuestionsSection'),
  {
    ssr: false,
    loading: () => (
      <div id="practice-questions" className="mt-12 min-h-[440px] w-full" aria-hidden="true" />
    ),
  }
)
"""

def find_matching_close_div(content, open_pos):
    """
    Given position of '<div id="practice-questions"...>' opening tag,
    find the position just past the matching '</div>'.

    Strategy: skip past the opening tag's '>' first, then track depth starting
    at 1 (we're already inside the div). Return when depth reaches 0.
    """
    # Skip past the '>' that closes the opening tag
    tag_close = content.find('>', open_pos)
    if tag_close == -1:
        return -1
    pos = tag_close + 1
    depth = 1  # we are now inside the practice-questions div
    length = len(content)

    while pos < length:
        next_open = content.find('<div', pos)
        next_close = content.find('</div>', pos)

        if next_close == -1:
            return -1

        # Process the nearest event first
        if next_open != -1 and next_open < next_close:
            # Could be a self-closing tag (e.g. <div ... />)
            gt_pos = content.find('>', next_open)
            if gt_pos == -1:
                return -1
            slash_close = content.find('/>', next_open)
            if slash_close != -1 and slash_close < gt_pos:
                # Self-closing <div ... /> — skip it, does not change depth
                pos = slash_close + 2
            else:
                depth += 1
                pos = next_open + 4
        else:
            depth -= 1
            if depth == 0:
                return next_close + 6  # len('</div>') == 6
            pos = next_close + 6

    return -1


def migrate_page(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Skip if already converted
    if 'PracticeQuestionsSection' in content:
        return 'SKIP (already uses PracticeQuestionsSection)'

    # Skip if no QuestionCard import (nothing to do)
    if "import QuestionCard from '@/components/QuestionCard'" not in content:
        return 'SKIP (no QuestionCard import)'

    # ── Step 1: detect intro suffix ──────────────────────────────────────────
    suffix_match = re.search(
        r'getPracticeQuestionsIntro\(sampleQuestions\.length,\s*("(?:[^"\\]|\\.)*?")\)',
        content
    )
    if suffix_match:
        suffix_arg = suffix_match.group(1)
        intro_expr = f'getPracticeQuestionsIntro(sampleQuestions.length, {suffix_arg})'
    else:
        intro_expr = 'getPracticeQuestionsIntro(sampleQuestions.length)'

    # ── Step 2: find the <div id="practice-questions" ...> block ─────────────
    marker = '<div id="practice-questions"'
    div_start = content.find(marker)
    if div_start == -1:
        return 'ERROR (no practice-questions div found)'

    # Find start of that line (to capture indentation)
    line_start = content.rfind('\n', 0, div_start) + 1
    indent = ''
    for ch in content[line_start:div_start]:
        if ch in (' ', '\t'):
            indent += ch
        else:
            break

    div_end = find_matching_close_div(content, div_start)
    if div_end == -1:
        return 'ERROR (could not find matching </div>)'

    # ── Step 3: build replacement JSX ─────────────────────────────────────────
    replacement = (
        f'{indent}<PracticeQuestionsSection\n'
        f'{indent}  heading={{getCertPracticeQuestionsHeading(slug)}}\n'
        f'{indent}  introText={{{intro_expr}}}\n'
        f'{indent}  questions={{sampleQuestions}}\n'
        f'{indent}/>'
    )

    content = content[:line_start] + replacement + '\n' + content[div_end:]

    # ── Step 4: remove QuestionCard import ────────────────────────────────────
    content = re.sub(
        r"import QuestionCard from '@/components/QuestionCard'\n",
        '',
        content
    )

    # ── Step 5: add dynamic import + PracticeQuestionsSection declaration ──────
    # Insert after the last top-level 'import ... from ...' line
    # Find the position right after the last import line
    last_import_end = 0
    for m in re.finditer(r"^import (?:.|\n)*? from '.*?'\n", content, re.MULTILINE):
        last_import_end = m.end()

    if last_import_end == 0:
        return 'ERROR (could not find import block)'

    content = content[:last_import_end] + DYNAMIC_DECL + content[last_import_end:]

    with open(filepath, 'w') as f:
        f.write(content)

    return 'OK'


# ── Main ──────────────────────────────────────────────────────────────────────
updated = skipped = errors = 0

for cert_slug in sorted(os.listdir(CERT_DIR)):
    page_path = os.path.join(CERT_DIR, cert_slug, 'page.tsx')
    if not os.path.exists(page_path):
        continue

    result = migrate_page(page_path)
    print(f'{result}: {cert_slug}')

    if result.startswith('OK'):
        updated += 1
    elif result.startswith('SKIP'):
        skipped += 1
    else:
        errors += 1

print(f'\nDone — updated: {updated}, skipped: {skipped}, errors: {errors}')
