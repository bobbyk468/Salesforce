import json

with open('scripts/psi_results_trailblaze.json') as f:
    results = json.load(f)

# --- 3 problem pages ---
print("=== PAGES WITH PERFORMANCE < 90 ===")
slugs = ['/data-architect-study-guide', '/integration-architect-vs-system-architect', '/cpq-admin-vs-cpq-billing-ap']
for r in results:
    path = r['url'].replace('https://www.trailblazeprep.com', '')
    if path in slugs:
        print(f'\n--- {path} (Perf: {r["scores"]["performance"]}) ---')
        for a in r.get('failing', []):
            if (a.get('score') or 1) < 0.9:
                sav = f", savings={a['savings']:.0f}ms" if a.get('savings') else ''
                print(f'  score={a["score"]:.2f}  {a["title"]}{sav}')

# --- contrast issue details ---
print("\n\n=== CONTRAST ISSUE (first example) ===")
for r in results:
    for a in r.get('failing', []):
        if 'contrast' in a.get('title', '').lower():
            print(f"Page: {r['url'].replace('https://www.trailblazeprep.com', '')}")
            print(f"Title: {a['title']}")
            print(f"Desc: {a.get('description','')[:200]}")
            break
    else:
        continue
    break

# --- pages at A11y < 100 grouped by score ---
print("\n\n=== ACCESSIBILITY SCORE BREAKDOWN ===")
a11y_buckets = {}
for r in results:
    if 'scores' not in r:
        continue
    score = r['scores']['accessibility']
    a11y_buckets.setdefault(score, []).append(r['url'].replace('https://www.trailblazeprep.com', ''))

for score in sorted(a11y_buckets.keys()):
    pages = a11y_buckets[score]
    print(f"\nA11y={score} ({len(pages)} pages):")
    for p in pages[:5]:
        print(f"  {p}")
    if len(pages) > 5:
        print(f"  ... and {len(pages)-5} more")
