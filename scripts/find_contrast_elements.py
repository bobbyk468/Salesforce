"""Find the specific HTML elements failing contrast on study guide and cert pages."""
import json

with open('scripts/psi_results_trailblaze.json') as f:
    raw = json.load(f)

# We only have scores+metrics+failing in the stored output, not full lighthouse data.
# Let's re-fetch one page with full details to see the contrast nodes.
# For now show what we have.

# Find the unique failing audit IDs on pages at A11y 96
at_96 = [r for r in raw if r.get('scores', {}).get('accessibility') == 96]
at_100 = [r for r in raw if r.get('scores', {}).get('accessibility') == 100]

print(f"Pages at A11y=96: {len(at_96)}")
print(f"Pages at A11y=100: {len(at_100)}")

# Get the contrast-related failing audit for a 96-page
print("\n--- Failing audits on A11y=96 pages (first page) ---")
if at_96:
    r = at_96[0]
    print(f"Page: {r['url']}")
    for a in r.get('failing', []):
        print(f"  [{a.get('score','?')}] {a['title']}")

print("\n--- Failing audits on A11y=97 pages (first page) ---")
at_97 = [r for r in raw if r.get('scores', {}).get('accessibility') == 97]
if at_97:
    r = at_97[0]
    print(f"Page: {r['url']}")
    for a in r.get('failing', []):
        print(f"  [{a.get('score','?')}] {a['title']}")

# What audits do A11y=100 pages NOT have that A11y=96 pages DO?
failing_96 = set()
for r in at_96[:5]:
    for a in r.get('failing', []):
        if 'contrast' in a['title'].lower() or 'accessible' in a['title'].lower():
            failing_96.add(a['title'])

failing_100 = set()
for r in at_100[:10]:
    for a in r.get('failing', []):
        failing_100.add(a['title'])

print("\n--- A11y-specific failures on 96-pages NOT on 100-pages ---")
diff = failing_96 - failing_100
for t in diff:
    print(f"  {t}")
