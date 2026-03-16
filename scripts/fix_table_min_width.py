#!/usr/bin/env python3
"""
Add min-w-[500px] to tables inside overflow-x-auto containers that don't already have a min-w.
Targets: all VS pages, salesforce-certification-cost, salesforce-certification-salary.
Also fixes DifficultyHeatmap.tsx.
"""
import os, re

BASE = '/Users/brahmajikatragadda/Downloads/salesforce-certifications/src/app'
COMPONENTS = '/Users/brahmajikatragadda/Downloads/salesforce-certifications/src/components'

# Pattern: table className="w-full ..."  (no min-w already)
OLD_TABLE = '<table className="w-full text-sm text-left border-collapse">'
NEW_TABLE = '<table className="min-w-[500px] w-full text-sm text-left border-collapse">'

def fix_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    if OLD_TABLE not in content:
        return  # Nothing to fix or already fixed

    new_content = content.replace(OLD_TABLE, NEW_TABLE)
    count = content.count(OLD_TABLE)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f'  FIXED ({count} tables): {os.path.basename(path)} in {os.path.basename(os.path.dirname(path))}')

def main():
    fixed = 0

    # VS pages
    print('--- VS pages ---')
    for name in sorted(os.listdir(BASE)):
        if '-vs-' in name:
            path = os.path.join(BASE, name, 'page.tsx')
            if os.path.isfile(path):
                with open(path) as f:
                    before = f.read()
                fix_file(path)
                with open(path) as f:
                    after = f.read()
                if before != after:
                    fixed += 1

    # Commercial pages
    print('--- Commercial pages ---')
    for name in ['salesforce-certification-cost', 'salesforce-certification-salary']:
        path = os.path.join(BASE, name, 'page.tsx')
        if os.path.isfile(path):
            with open(path) as f:
                before = f.read()
            fix_file(path)
            with open(path) as f:
                after = f.read()
            if before != after:
                fixed += 1

    # DifficultyHeatmap component
    print('--- Components ---')
    path = os.path.join(COMPONENTS, 'DifficultyHeatmap.tsx')
    if os.path.isfile(path):
        with open(path) as f:
            before = f.read()
        fix_file(path)
        with open(path) as f:
            after = f.read()
        if before != after:
            fixed += 1

    print(f'\nTotal files fixed: {fixed}')

if __name__ == '__main__':
    main()
