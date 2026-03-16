#!/usr/bin/env python3
"""
Fix unescaped apostrophes in the FAQ answers added by add_3concepts_faq.py.
The answers are in single-quoted JS strings, so apostrophes must be escaped as \'.
"""
import os
import re

BASE = '/Users/brahmajikatragadda/Downloads/salesforce-certifications/src/app'

MARKER_Q = "question: 'What concepts do most "
MARKER_A = "answer: 'The most commonly misunderstood"

def fix_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    if MARKER_Q not in content:
        return

    # Find the answer line
    a_idx = content.find(MARKER_A)
    if a_idx == -1:
        return

    # Find the end of the answer string — it ends with ',\n  },'
    # The string is 'The most commonly misunderstood ... right.',
    # We need to find the closing ',\n  },' after our answer line
    # Strategy: find the position of the opening ' of the answer value,
    # then scan forward for the matching closing ' followed by ','
    # The opening ' is right after "answer: "
    open_quote_pos = content.index("'", a_idx + len("answer: "))

    # Now scan from open_quote_pos+1 to find the closing quote
    # The closing quote is followed by ','
    i = open_quote_pos + 1
    answer_chars = []
    while i < len(content):
        ch = content[i]
        if ch == '\\':
            # escaped char - keep as-is
            answer_chars.append(ch)
            i += 1
            if i < len(content):
                answer_chars.append(content[i])
                i += 1
        elif ch == "'":
            # potential end of string - check if followed by ','
            if i + 1 < len(content) and content[i+1] == ',':
                close_quote_pos = i
                break
            else:
                # unescaped apostrophe inside string - this is the bug
                answer_chars.append("\\'")
                i += 1
        else:
            answer_chars.append(ch)
            i += 1
    else:
        print(f'  SKIP (could not find end of answer): {os.path.basename(os.path.dirname(path))}')
        return

    fixed_answer = ''.join(answer_chars)
    original_answer = content[open_quote_pos+1:close_quote_pos]

    if fixed_answer == original_answer:
        # No changes needed
        return

    # Replace in content
    new_content = content[:open_quote_pos+1] + fixed_answer + content[close_quote_pos:]

    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f'  FIXED: {os.path.basename(os.path.dirname(path))}')

def main():
    exam_tips_dirs = []
    for name in os.listdir(BASE):
        if 'exam-tips' in name:
            page = os.path.join(BASE, name, 'page.tsx')
            if os.path.isfile(page):
                exam_tips_dirs.append(page)
    exam_tips_dirs.sort()
    print(f'Checking {len(exam_tips_dirs)} exam tips pages for apostrophe issues...')
    for path in exam_tips_dirs:
        fix_file(path)
    print('Done.')

if __name__ == '__main__':
    main()
