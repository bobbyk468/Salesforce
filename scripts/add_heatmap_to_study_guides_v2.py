#!/usr/bin/env python3
"""
Add DifficultyHeatmap to study guide pages that were skipped in v1 (no Hub CTA marker).
These pages have a blue CTA box: 'bg-salesforce-blue rounded-xl p-8 text-center text-white'
We insert the heatmap component just before that box.
"""
import os, re

BASE = '/Users/brahmajikatragadda/Downloads/salesforce-certifications/src/app'

SLUG_OVERRIDE = {
    'adm-201': 'administrator',
    'pd1': 'developer-1',
    'pd2': 'developer-2',
    'sales-cloud-consultant': 'sales-cloud',
    'service-cloud-consultant': 'service-cloud',
    'experience-cloud-consultant': 'experience-cloud',
    'field-service-consultant': 'field-service',
    'nonprofit-cloud-consultant': 'nonprofit-cloud',
    'javascript-developer-i': 'javascript-developer-i',
    'crm-analytics': 'crm-analytics-einstein-discovery-consultant',
}

BLUE_CTA_MARKER = 'bg-salesforce-blue rounded-xl p-8 text-center text-white'
IMPORT_MARKER = "import DifficultyHeatmap from '@/components/DifficultyHeatmap'"

def get_slug(dirname):
    base = dirname.replace('-study-guide', '')
    return SLUG_OVERRIDE.get(base, base)

def process(dir_name):
    slug = get_slug(dir_name)
    path = os.path.join(BASE, dir_name, 'page.tsx')

    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    if 'DifficultyHeatmap' in content:
        print(f'  SKIP (already has heatmap): {dir_name}')
        return

    if BLUE_CTA_MARKER not in content:
        print(f'  SKIP (no blue CTA box): {dir_name}')
        return

    # 1. Add import after last import line
    lines = content.split('\n')
    last_import_idx = -1
    for i, line in enumerate(lines):
        if line.startswith('import '):
            last_import_idx = i
    if last_import_idx == -1:
        print(f'  SKIP (no imports): {dir_name}')
        return

    lines.insert(last_import_idx + 1, IMPORT_MARKER)
    content = '\n'.join(lines)

    # 2. Find the blue CTA div and insert heatmap before the containing element
    # The pattern is typically:
    #   \n      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
    # or preceded by a comment like {/* CTA */} or {/* RelatedGuides */}
    # Find the last occurrence (in case there are multiple), insert before it
    idx = content.rfind('\n      <div className="' + BLUE_CTA_MARKER)
    if idx == -1:
        # Try single-line version without newline prefix
        idx = content.rfind('<div className="' + BLUE_CTA_MARKER)
        if idx == -1:
            print(f'  SKIP (could not find insertion point): {dir_name}')
            return
        heatmap_jsx = f'\n      <DifficultyHeatmap slug="{slug}" />\n\n      '
        content = content[:idx] + heatmap_jsx + content[idx:]
    else:
        heatmap_jsx = f'\n      <DifficultyHeatmap slug="{slug}" />'
        content = content[:idx] + heatmap_jsx + content[idx:]

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f'  DONE (slug={slug}): {dir_name}')

def main():
    dirs = sorted(
        d for d in os.listdir(BASE)
        if 'study-guide' in d and os.path.isfile(os.path.join(BASE, d, 'page.tsx'))
    )
    print(f'Processing {len(dirs)} study guide pages...')
    for d in dirs:
        process(d)
    print('Done.')

if __name__ == '__main__':
    main()
