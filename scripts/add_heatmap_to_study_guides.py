#!/usr/bin/env python3
"""
Add DifficultyHeatmap component to all 52 study guide pages.
- Adds import statement if not already present
- Inserts <DifficultyHeatmap slug="..." /> just before the {/* Hub CTA */} block
- For certs without heatmap data the component returns null — zero visual impact
"""
import os, re

BASE = '/Users/brahmajikatragadda/Downloads/salesforce-certifications/src/app'

# Non-obvious slug mappings: dirname (without -study-guide) → cert slug
SLUG_OVERRIDE = {
    'adm-201': 'administrator',
    'pd1': 'developer-1',
    'pd2': 'developer-2',
    'sales-cloud-consultant': 'sales-cloud',
    'service-cloud-consultant': 'service-cloud',
    'experience-cloud-consultant': 'experience-cloud',
    'field-service-consultant': 'field-service',
    'nonprofit-cloud-consultant': 'nonprofit-cloud',
    'javascript-developer-i': 'javascript-developer-i',  # same
    'crm-analytics': 'crm-analytics-einstein-discovery-consultant',
}

HUB_CTA_MARKER = '{/* Hub CTA */}'
IMPORT_MARKER = "import DifficultyHeatmap from '@/components/DifficultyHeatmap'"

# First import line that usually exists in these pages
FIRST_IMPORT_ANCHOR = "import type { Metadata } from 'next'"

def get_slug(dirname):
    """Derive cert slug from study guide directory name."""
    base = dirname.replace('-study-guide', '')
    return SLUG_OVERRIDE.get(base, base)

def process(dir_name):
    slug = get_slug(dir_name)
    path = os.path.join(BASE, dir_name, 'page.tsx')

    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Skip if already has heatmap
    if 'DifficultyHeatmap' in content:
        print(f'  SKIP (already has heatmap): {dir_name}')
        return

    # Skip if no Hub CTA marker (safety check)
    if HUB_CTA_MARKER not in content:
        print(f'  SKIP (no Hub CTA marker): {dir_name}')
        return

    # 1. Add import — insert after the last existing import block line
    # Find last 'import' line and insert after it
    lines = content.split('\n')
    last_import_idx = -1
    for i, line in enumerate(lines):
        if line.startswith('import '):
            last_import_idx = i
    if last_import_idx == -1:
        print(f'  SKIP (no import lines found): {dir_name}')
        return

    lines.insert(last_import_idx + 1, IMPORT_MARKER)
    content = '\n'.join(lines)

    # 2. Insert heatmap component before {/* Hub CTA */}
    heatmap_jsx = f'\n      <DifficultyHeatmap slug="{slug}" />\n      '
    content = content.replace(HUB_CTA_MARKER, heatmap_jsx + HUB_CTA_MARKER, 1)

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
