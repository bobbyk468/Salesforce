"""
PageSpeed Insights audit for trailblazeprep.com
Usage:
  python3 scripts/psi_audit_trailblaze.py
  python3 scripts/psi_audit_trailblaze.py --url https://www.trailblazeprep.com/certifications/administrator
  python3 scripts/psi_audit_trailblaze.py --top 20 --workers 5 --mobile

Saves results to scripts/psi_results_trailblaze.json
"""
import argparse, json, time, sys, threading, os
from urllib.request import urlopen
from urllib.parse import urlencode
from urllib.error import URLError
from concurrent.futures import ThreadPoolExecutor, as_completed

API_KEY   = os.environ.get('PSI_API_KEY', '')
PSI_BASE  = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed'
BASE_URL  = 'https://www.trailblazeprep.com'

# All pages from sitemap.ts (cert pages added via /certifications/* pattern)
STATIC_URLS = [
    '/',
    '/certifications',
    '/certification-path',
    '/become-cta',
    '/adm-201-vs-app-builder',
    '/salesforce-certification-cost',
    '/pd1-vs-pd2',
    '/adm-201-study-guide',
    '/pd1-study-guide',
    '/app-builder-study-guide',
    '/service-cloud-study-guide',
    '/agentforce-specialist-study-guide',
    '/sales-cloud-consultant-study-guide',
    '/data-cloud-consultant-study-guide',
    '/ai-associate-study-guide',
    '/experience-cloud-consultant-study-guide',
    '/advanced-administrator-study-guide',
    '/pd2-study-guide',
    '/service-cloud-consultant-study-guide',
    '/marketing-cloud-consultant-study-guide',
    '/business-analyst-study-guide',
    '/cpq-administrator-study-guide',
    '/field-service-consultant-study-guide',
    '/omnistudio-developer-study-guide',
    '/mulesoft-developer-i-study-guide',
    '/javascript-developer-i-study-guide',
    '/email-specialist-study-guide',
    '/tableau-data-analyst-study-guide',
    '/revenue-cloud-consultant-study-guide',
    '/omnistudio-consultant-study-guide',
    '/mulesoft-developer-ii-study-guide',
    '/how-to-become-salesforce-developer',
    '/how-to-become-salesforce-architect',
    '/how-to-become-salesforce-consultant',
    '/how-to-become-salesforce-administrator',
    '/architect-certification-path',
    '/consultant-certification-path',
    '/sales-cloud-vs-service-cloud',
    '/administrator-vs-advanced-administrator',
    '/omnistudio-developer-vs-consultant',
    '/mulesoft-developer-i-vs-ii',
    '/data-cloud-vs-crm-analytics',
    '/business-analyst-vs-strategy-designer',
    '/cpq-admin-vs-cpq-billing-ap',
    '/marketing-cloud-admin-vs-developer',
    '/agentforce-specialist-vs-ai-associate',
    '/app-builder-vs-developer-i',
    '/sales-cloud-vs-experience-cloud-consultant',
    '/data-cloud-vs-marketing-cloud',
    '/integration-architect-vs-system-architect',
    '/javascript-developer-i-vs-pd1',
    '/field-service-vs-service-cloud-consultant',
    '/mulesoft-developer-i-vs-integration-foundations',
    '/b2b-vs-b2c-solution-architect',
    '/is-salesforce-certification-worth-it',
    '/salesforce-certification-maintenance',
    '/salesforce-certification-difficulty',
    '/integration-architect-study-guide',
    '/data-architect-study-guide',
    '/sharing-visibility-architect-study-guide',
    '/identity-access-management-architect-study-guide',
    '/dev-lifecycle-deployment-architect-study-guide',
    '/pardot-specialist-study-guide',
    '/crm-analytics-study-guide',
    '/b2b-solution-architect-study-guide',
    '/b2c-solution-architect-study-guide',
    '/mulesoft-integration-foundations-study-guide',
    '/marketing-cloud-engagement-admin-study-guide',
    '/b2c-commerce-developer-study-guide',
    '/pardot-specialist-vs-pardot-consultant',
    '/cpq-admin-vs-revenue-cloud-consultant',
    '/salesforce-certification-voucher',
    '/salesforce-exam-retake-policy',
    '/salesforce-certification-validity',
    '/how-to-register-salesforce-exam',
    '/salesforce-free-certification',
    '/system-architect-study-guide',
    '/application-architect-study-guide',
    '/ux-designer-study-guide',
    '/strategy-designer-study-guide',
    '/pardot-consultant-study-guide',
    '/marketing-cloud-engagement-developer-study-guide',
    '/education-cloud-consultant-study-guide',
    '/nonprofit-cloud-consultant-study-guide',
    '/platform-foundations-study-guide',
    '/technical-architect-study-guide',
    '/marketing-cloud-engagement-foundations-study-guide',
    '/slack-administrator-study-guide',
    '/mulesoft-integration-architect-study-guide',
    '/mulesoft-platform-architect-study-guide',
    '/nonprofit-success-pack-consultant-study-guide',
    '/b2c-commerce-architect-study-guide',
    '/ux-designer-vs-strategy-designer',
    '/system-architect-vs-application-architect',
    '/pardot-consultant-vs-marketing-cloud-consultant',
    '/platform-foundations-vs-ai-associate',
    '/education-cloud-vs-nonprofit-cloud-consultant',
    '/which-salesforce-certification-first',
    '/how-to-study-for-salesforce-certification',
    '/salesforce-certification-exam-day-tips',
    '/salesforce-admin-vs-developer-career',
    '/salesforce-certification-passing-score',
    '/salesforce-certification-salary',
    '/developer-certification-path',
    '/admin-certification-path',
    '/salesforce-certifications-list',
    '/about',
    '/team',
    # Key cert pages
    '/certifications/administrator',
    '/certifications/developer-1',
    '/certifications/app-builder',
    '/certifications/service-cloud',
    '/certifications/agentforce-specialist',
    '/certifications/sales-cloud',
    '/certifications/data-cloud-consultant',
    '/certifications/ai-associate',
    '/certifications/advanced-administrator',
    '/certifications/developer-2',
    '/certifications/marketing-cloud-consultant',
    '/certifications/business-analyst',
    '/certifications/cpq-administrator',
    '/certifications/field-service',
    '/certifications/experience-cloud',
    '/certifications/omnistudio-developer',
    '/certifications/mulesoft-developer-i',
    '/certifications/javascript-developer-i',
    '/certifications/email-specialist',
    '/certifications/tableau-data-analyst',
    '/certifications/slack-developer',
    # Role pages
    '/certifications/role/administrator',
    '/certifications/role/developer',
    '/certifications/role/consultant',
    '/certifications/role/architect',
    '/certifications/role/marketing',
    '/certifications/role/designer',
    '/certifications/role/tableau',
    '/certifications/role/accredited-professional',
]

print_lock = threading.Lock()


def run_psi(url, strategy='desktop', retries=2):
    params = [
        ('url', url),
        ('strategy', strategy),
        ('category', 'performance'),
        ('category', 'accessibility'),
        ('category', 'best-practices'),
        ('category', 'seo'),
        ('key', API_KEY),
    ]
    query = urlencode(params)
    for attempt in range(retries + 1):
        try:
            with urlopen(f'{PSI_BASE}?{query}', timeout=120) as r:
                return json.loads(r.read())
        except URLError as e:
            if attempt < retries:
                time.sleep(5 * (attempt + 1))
                continue
            return {'error': str(e)}


def extract_scores(data):
    cats = data.get('lighthouseResult', {}).get('categories', {})
    return {
        'performance':    round((cats.get('performance',    {}).get('score', 0) or 0) * 100),
        'accessibility':  round((cats.get('accessibility',  {}).get('score', 0) or 0) * 100),
        'best-practices': round((cats.get('best-practices', {}).get('score', 0) or 0) * 100),
        'seo':            round((cats.get('seo',            {}).get('score', 0) or 0) * 100),
    }


def extract_metrics(data):
    audits = data.get('lighthouseResult', {}).get('audits', {})
    def ms(key):
        v = audits.get(key, {}).get('numericValue')
        return f'{v/1000:.1f}s' if v else 'n/a'
    return {
        'FCP': ms('first-contentful-paint'),
        'LCP': ms('largest-contentful-paint'),
        'TBT': ms('total-blocking-time'),
        'CLS': audits.get('cumulative-layout-shift', {}).get('displayValue', 'n/a'),
        'SI':  ms('speed-index'),
    }


def extract_failing_audits(data):
    audits = data.get('lighthouseResult', {}).get('audits', {})
    failing = []
    for key, audit in audits.items():
        if audit.get('score') is not None and audit['score'] < 0.9:
            failing.append({
                'id':      key,
                'title':   audit.get('title', key),
                'score':   audit.get('score'),
                'savings': audit.get('details', {}).get('overallSavingsMs', 0),
                'description': audit.get('description', '')[:200],
            })
    return sorted(failing, key=lambda x: x.get('score') or 0)


def audit_url(args):
    idx, total, url, strategy = args
    data = run_psi(url, strategy)
    if 'error' in data:
        with print_lock:
            print(f'[{idx:3d}/{total}] ⚠️  Error: {data["error"][:60]} — {url}')
        return {'url': url, 'error': data['error']}
    scores  = extract_scores(data)
    metrics = extract_metrics(data)
    failing = extract_failing_audits(data)
    s = scores
    flag = '✅' if all(v == 100 for v in s.values()) else ('⚠️ ' if s['performance'] < 90 else '  ')
    with print_lock:
        print(f'[{idx:3d}/{total}] {flag} Perf:{s["performance"]:3d}  A11y:{s["accessibility"]:3d}  '
              f'BP:{s["best-practices"]:3d}  SEO:{s["seo"]:3d}  '
              f'FCP:{metrics["FCP"]}  LCP:{metrics["LCP"]}  {url}')
    return {'url': url, 'scores': scores, 'metrics': metrics, 'failing': failing}


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--url',     default=None,  help='Test a single URL (full URL or path)')
    parser.add_argument('--workers', type=int, default=4, help='Parallel workers (default 4)')
    parser.add_argument('--top',     type=int, default=15, help='Show top N worst pages')
    parser.add_argument('--mobile',  action='store_true', help='Use mobile strategy (default: desktop)')
    args = parser.parse_args()

    strategy = 'mobile' if args.mobile else 'desktop'

    if args.url:
        url = args.url if args.url.startswith('http') else f'{BASE_URL}{args.url}'
        urls = [url]
    else:
        urls = [f'{BASE_URL}{path}' for path in STATIC_URLS]

    total = len(urls)
    print(f'Auditing {total} pages ({strategy.upper()})...\n')

    tasks = [(i+1, total, url, strategy) for i, url in enumerate(urls)]
    results = []

    with ThreadPoolExecutor(max_workers=args.workers) as executor:
        futures = {executor.submit(audit_url, t): t for t in tasks}
        for future in as_completed(futures):
            results.append(future.result())

    # Sort by original order
    url_order = {url: i for i, url in enumerate(urls)}
    results.sort(key=lambda r: url_order.get(r['url'], 9999))

    # Save full results
    out_file = 'scripts/psi_results_trailblaze.json'
    with open(out_file, 'w') as f:
        json.dump(results, f, indent=2)
    print(f'\nFull results saved to {out_file}')

    ok = [r for r in results if 'scores' in r]
    if not ok:
        return

    perfect = [r for r in ok if all(v == 100 for v in r['scores'].values())]
    print(f'\n{"="*70}')
    print(f'SUMMARY — {len(ok)} pages audited ({strategy.upper()})')
    print(f'Perfect 100/100: {len(perfect)}/{len(ok)}')
    print(f'{"="*70}')

    for cat in ['performance', 'accessibility', 'best-practices', 'seo']:
        scores = [r['scores'][cat] for r in ok]
        avg = sum(scores) / len(scores)
        below100 = [r for r in ok if r['scores'][cat] < 100]
        below90  = [r for r in ok if r['scores'][cat] < 90]
        print(f'\n{cat.upper()}  avg={avg:.0f}  below-100={len(below100)}  below-90={len(below90)}')
        if below100:
            for r in sorted(below100, key=lambda x: x['scores'][cat])[:args.top]:
                print(f'  {r["scores"][cat]:3d}  {r["url"].replace(BASE_URL, "")}')

    # Most common failing audits
    audit_counts = {}
    audit_examples = {}
    for r in ok:
        for a in r.get('failing', []):
            t = a['title']
            audit_counts[t] = audit_counts.get(t, 0) + 1
            if t not in audit_examples:
                audit_examples[t] = a.get('description', '')

    print(f'\n{"="*70}')
    print('TOP FAILING AUDITS (across all pages)')
    print(f'{"="*70}')
    for title, cnt in sorted(audit_counts.items(), key=lambda x: -x[1])[:20]:
        print(f'  {cnt:3d} pages  {title}')
        if audit_examples.get(title):
            print(f'           → {audit_examples[title][:100]}')


if __name__ == '__main__':
    main()
