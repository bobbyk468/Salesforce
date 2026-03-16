#!/usr/bin/env python3
"""
Add FAQ item 'What concepts do most [Cert] candidates get wrong?' to all 87 exam tips pages.
Extracts the 3 concept titles from the amber bg-amber-50 section.
Skips pages that already have 'What concepts do most' in faqItems.
"""
import os
import re

BASE = '/Users/brahmajikatragadda/Downloads/salesforce-certifications/src/app'

# HTML entity → plain text
def unescape(s):
    s = s.replace('&apos;', "'")
    s = s.replace('&amp;', '&')
    s = s.replace('&rarr;', '→')
    s = s.replace('&mdash;', '—')
    s = s.replace('&middot;', '·')
    s = s.replace('&times;', '×')
    s = s.replace('&bull;', '•')
    s = s.replace('&#39;', "'")
    s = s.replace('&lt;', '<')
    s = s.replace('&gt;', '>')
    return s

# Strip leading number prefix: "1. Title Here" → "Title Here"
def strip_num(s):
    return re.sub(r'^\d+\.\s*', '', s).strip()

def process_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Skip if already has the FAQ item
    if 'What concepts do most' in content:
        print(f'  SKIP (already has FAQ): {os.path.basename(os.path.dirname(path))}')
        return

    # Skip if no amber section
    if 'bg-amber-50' not in content:
        print(f'  SKIP (no amber section): {os.path.basename(os.path.dirname(path))}')
        return

    # Extract cert name from amber heading
    cert_name_match = re.search(
        r'3 Concepts That Fail Most ([^<"]+?) Candidates',
        content
    )
    if not cert_name_match:
        print(f'  SKIP (no heading match): {os.path.basename(os.path.dirname(path))}')
        return
    cert_name = unescape(cert_name_match.group(1).strip())

    # Find the amber section boundaries
    amber_start = content.find('bg-amber-50')
    # Find the concept title paragraphs within the amber section
    # They are: <p className="font-semibold text-gray-900 mb-1">...</p>
    # But we need to only look in the amber section, not the FAQ section (which uses <dt>)
    # Find end of amber section (the </section> that closes it)
    amber_section_content = content[amber_start:]
    # Find closing </section>
    section_end = amber_section_content.find('</section>')
    if section_end == -1:
        print(f'  SKIP (no section end): {os.path.basename(os.path.dirname(path))}')
        return
    amber_section_content = amber_section_content[:section_end]

    # Extract concept titles — pattern: <p className="font-semibold text-gray-900 mb-1">TITLE</p>
    concept_pattern = re.compile(
        r'<p className="font-semibold text-gray-900 mb-1">([^<]+)</p>'
    )
    titles = concept_pattern.findall(amber_section_content)

    if len(titles) < 3:
        print(f'  SKIP (found {len(titles)} titles): {os.path.basename(os.path.dirname(path))}')
        return

    # Take first 3 titles (in case there are more)
    t1 = strip_num(unescape(titles[0]))
    t2 = strip_num(unescape(titles[1]))
    t3 = strip_num(unescape(titles[2]))

    # Build answer
    answer = (
        f'The most commonly misunderstood topics for the {cert_name} exam are: '
        f'(1) {t1}; (2) {t2}; (3) {t3}. '
        f'Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.'
    )

    # New FAQ item
    new_item = f"""  {{
    question: 'What concepts do most {cert_name} candidates get wrong?',
    answer: '{answer}',
  }},
"""

    # Find faqItems array and add before the closing ]
    # Pattern: look for `  },\n]` that closes the array
    # The faqItems array ends with `  },\n]\n`
    faq_array_match = re.search(r'(const faqItems\s*=\s*\[)', content)
    if not faq_array_match:
        print(f'  SKIP (no faqItems): {os.path.basename(os.path.dirname(path))}')
        return

    array_start = faq_array_match.end()
    # Find the closing ] by counting brackets
    depth = 1
    i = array_start
    while i < len(content) and depth > 0:
        if content[i] == '[':
            depth += 1
        elif content[i] == ']':
            depth -= 1
        i += 1
    # i now points to char after the closing ]
    close_bracket_pos = i - 1  # position of the ]

    # Insert new item just before the closing ]
    new_content = content[:close_bracket_pos] + new_item + content[close_bracket_pos:]

    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f'  DONE: {os.path.basename(os.path.dirname(path))}')

def main():
    exam_tips_dirs = []
    for name in os.listdir(BASE):
        if 'exam-tips' in name:
            page = os.path.join(BASE, name, 'page.tsx')
            if os.path.isfile(page):
                exam_tips_dirs.append(page)
    exam_tips_dirs.sort()
    print(f'Processing {len(exam_tips_dirs)} exam tips pages...')
    for path in exam_tips_dirs:
        process_file(path)
    print('Done.')

if __name__ == '__main__':
    main()
