#!/usr/bin/env python3
"""
Batch-update all exam-tips pages:
1. Add "Exam At a Glance" card after </header>
2. Add visible FAQ section before the CTA section
"""
import os
import re

APP_DIR = "/Users/brahmajikatragadda/Downloads/salesforce-certifications/src/app"

# Per-page format data (overrides defaults)
SPECIAL_FORMATS: dict[str, dict] = {
    # ADM-201 / PD variants
    'adm-201-exam-tips-2026':            {'q': '60', 't': '105 min', 'p': '65%',          'f': '$200'},
    'pd1-exam-tips-2026':                {'q': '60', 't': '105 min', 'p': '65%',          'f': '$200'},
    'pd2-exam-tips-2026':                {'q': '60', 't': '105 min', 'p': '65%',          'f': '$200'},
    # Standard certs with non-default passing score
    'email-specialist-exam-tips':        {'q': '60', 't': '105 min', 'p': '67%',          'f': '$200'},
    'app-builder-exam-tips':             {'q': '60', 't': '105 min', 'p': '63%',          'f': '$200'},
    'service-cloud-consultant-exam-tips':{'q': '60', 't': '105 min', 'p': '67%',          'f': '$200'},
    'agentforce-specialist-exam-tips':   {'q': '60', 't': '105 min', 'p': '65%',          'f': '$200'},
    'system-architect-exam-tips':        {'q': '60', 't': '105 min', 'p': '65%',          'f': '$200'},
    'sales-cloud-exam-tips':             {'q': '60', 't': '105 min', 'p': '65%',          'f': '$200'},
    'marketing-cloud-consultant-exam-tips': {'q': '60', 't': '105 min', 'p': '67%',       'f': '$200'},
    'business-analyst-exam-tips':        {'q': '60', 't': '105 min', 'p': '72%',          'f': '$200'},
    'pardot-specialist-exam-tips':       {'q': '60', 't': '105 min', 'p': '65%',          'f': '$200'},
    'ux-designer-exam-tips':             {'q': '60', 't': '105 min', 'p': '65%',          'f': '$200'},
    'experience-cloud-exam-tips':        {'q': '60', 't': '105 min', 'p': '65%',          'f': '$200'},
    'application-architect-exam-tips':   {'q': '60', 't': '105 min', 'p': '67%',          'f': '$200'},
    'data-architect-exam-tips':          {'q': '60', 't': '105 min', 'p': '62%',          'f': '$200'},
    'integration-architect-exam-tips':   {'q': '60', 't': '105 min', 'p': '62%',          'f': '$200'},
    'sharing-visibility-architect-exam-tips': {'q': '60', 't': '105 min', 'p': '65%',     'f': '$200'},
    'identity-access-management-architect-exam-tips': {'q': '60', 't': '105 min', 'p': '65%', 'f': '$200'},
    'dev-lifecycle-deployment-architect-exam-tips': {'q': '60', 't': '105 min', 'p': '65%', 'f': '$200'},
    'advanced-administrator-exam-tips':  {'q': '60', 't': '105 min', 'p': '65%',          'f': '$200'},
    'field-service-exam-tips':           {'q': '60', 't': '105 min', 'p': '67%',          'f': '$200'},
    'education-cloud-consultant-exam-tips': {'q': '60', 't': '105 min', 'p': '67%',       'f': '$200'},
    'ai-associate-exam-tips':            {'q': '40', 't': '70 min',  'p': '65%',          'f': '$75'},
    'cpq-administrator-exam-tips':       {'q': '60', 't': '105 min', 'p': '65%',          'f': '$200'},
    'data-cloud-consultant-exam-tips':   {'q': '60', 't': '105 min', 'p': '65%',          'f': '$200'},
    'crm-analytics-exam-tips':           {'q': '60', 't': '105 min', 'p': '65%',          'f': '$200'},
    'revenue-cloud-consultant-exam-tips':{'q': '60', 't': '105 min', 'p': '65%',          'f': '$200'},
    'b2b-solution-architect-exam-tips':  {'q': '60', 't': '105 min', 'p': '65%',          'f': '$200'},
    'b2c-solution-architect-exam-tips':  {'q': '60', 't': '105 min', 'p': '65%',          'f': '$200'},
    'b2c-commerce-architect-exam-tips':  {'q': '60', 't': '105 min', 'p': '65%',          'f': '$200'},
    'b2c-commerce-developer-exam-tips':  {'q': '60', 't': '105 min', 'p': '65%',          'f': '$200'},
    'industries-cpq-developer-exam-tips':{'q': '60', 't': '105 min', 'p': '65%',          'f': '$200'},
    'javascript-developer-i-exam-tips':  {'q': '60', 't': '105 min', 'p': '65%',          'f': '$200'},
    'marketing-cloud-engagement-developer-exam-tips': {'q': '60', 't': '105 min', 'p': '65%', 'f': '$200'},
    'omnistudio-developer-exam-tips':    {'q': '60', 't': '105 min', 'p': '65%',          'f': '$200'},
    'omnistudio-consultant-exam-tips':   {'q': '60', 't': '105 min', 'p': '65%',          'f': '$200'},
    'heroku-architect-exam-tips':        {'q': '60', 't': '105 min', 'p': '65%',          'f': '$200'},
    'slack-developer-exam-tips':         {'q': '60', 't': '105 min', 'p': '65%',          'f': '$200'},
    'slack-administrator-exam-tips':     {'q': '60', 't': '105 min', 'p': '65%',          'f': '$200'},
    'slack-consultant-exam-tips':        {'q': '60', 't': '105 min', 'p': '65%',          'f': '$200'},
    'strategy-designer-exam-tips':       {'q': '60', 't': '105 min', 'p': '65%',          'f': '$200'},
    'nonprofit-cloud-exam-tips':         {'q': '60', 't': '105 min', 'p': '65%',          'f': '$200'},
    'nonprofit-success-pack-consultant-exam-tips': {'q': '60', 't': '105 min', 'p': '65%','f': '$200'},
    'mulesoft-integration-foundations-exam-tips':{'q': '45', 't': '60 min', 'p': '70%',   'f': '$75'},
    'marketing-cloud-engagement-foundations-exam-tips': {'q': '40', 't': '70 min', 'p': '63%', 'f': '$75'},
    'platform-foundations-exam-tips':    {'q': '40', 't': '70 min',  'p': '65%',          'f': '$75'},
    'sales-foundations-exam-tips':       {'q': '40', 't': '65 min',  'p': '65%',          'f': '$150'},
    # Tableau (different format)
    'tableau-data-analyst-exam-tips':    {'q': '55', 't': '120 min', 'p': '72%',          'f': '$250'},
    'tableau-architect-exam-tips':       {'q': '45', 't': '120 min', 'p': '70%',          'f': '$250'},
    'tableau-consultant-exam-tips':      {'q': '45', 't': '120 min', 'p': '70%',          'f': '$250'},
    'tableau-desktop-foundations-exam-tips': {'q': '45', 't': '60 min', 'p': '70%',       'f': '$250'},
    'tableau-server-administrator-exam-tips': {'q': '45', 't': '120 min', 'p': '70%',     'f': '$250'},
    # CTA
    'technical-architect-exam-tips':     {'q': '2 stages', 't': '~4.5 hr total', 'p': 'Pass / Fail', 'f': '$3,400'},
    'technical-architect-evaluation-exam-tips': {'q': '~60', 't': '120 min', 'p': 'Not disclosed', 'f': '$400'},
    'technical-architect-review-board-exam-tips': {'q': 'Presentation', 't': 'Half-day', 'p': 'Pass / Fail', 'f': '$3,000'},
}

AP_CERT_FORMAT = {'q': '40', 't': '60 min', 'p': 'Pass / Fail', 'f': '$150'}
MULESOFT_FORMAT = {'q': '60', 't': '120 min', 'p': '70%', 'f': '$200'}
DEFAULT_FORMAT   = {'q': '60', 't': '105 min', 'p': '65%', 'f': '$200'}


def get_format(slug: str) -> dict:
    if slug in SPECIAL_FORMATS:
        return SPECIAL_FORMATS[slug]
    if '-ap-' in slug or slug.endswith('-ap-exam-tips'):
        return AP_CERT_FORMAT
    if slug.startswith('mulesoft-') and slug not in SPECIAL_FORMATS:
        return MULESOFT_FORMAT
    return DEFAULT_FORMAT


def make_ataglance(fmt: dict) -> str:
    return f"""
      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Exam At a Glance</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">{fmt['q']}</p>
            <p className="text-xs text-gray-500 mt-0.5">Questions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">{fmt['t']}</p>
            <p className="text-xs text-gray-500 mt-0.5">Time Limit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">{fmt['p']}</p>
            <p className="text-xs text-gray-500 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">{fmt['f']}</p>
            <p className="text-xs text-gray-500 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>"""


FAQ_SECTION = """
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <dl className="space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
              <dd className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: item.answer }} />
            </div>
          ))}
        </dl>
      </section>"""

# Marker that uniquely identifies the start of the CTA section in all new exam-tips pages
CTA_MARKER = '      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">'

updated = []
skipped = []
errors = []

for dirname in sorted(os.listdir(APP_DIR)):
    is_exam_tips = (
        dirname.endswith('-exam-tips')
        or dirname.endswith('-exam-tips-2026')
        or dirname == 'pd2-exam-tips-2026'
    )
    if not is_exam_tips:
        continue

    page_file = os.path.join(APP_DIR, dirname, 'page.tsx')
    if not os.path.exists(page_file):
        errors.append(f"MISSING: {page_file}")
        continue

    with open(page_file, 'r', encoding='utf-8') as f:
        content = f.read()

    already_has_glance = 'Exam At a Glance' in content
    already_has_faq = 'Frequently Asked Questions' in content

    if already_has_glance and already_has_faq:
        skipped.append(dirname)
        continue

    fmt = get_format(dirname)
    ata = make_ataglance(fmt)

    # ------------------------------------------------------------------
    # 1. Insert At-a-Glance right after </header>
    # ------------------------------------------------------------------
    if not already_has_glance:
        header_end = content.find('</header>')
        if header_end == -1:
            errors.append(f"NO </header>: {dirname}")
        else:
            insert_pos = header_end + len('</header>')
            content = content[:insert_pos] + '\n' + ata + '\n' + content[insert_pos:]

    # ------------------------------------------------------------------
    # 2. Insert FAQ section before the CTA section
    # ------------------------------------------------------------------
    if not already_has_faq:
        if CTA_MARKER in content:
            content = content.replace(CTA_MARKER, FAQ_SECTION + '\n\n' + CTA_MARKER, 1)
        else:
            errors.append(f"NO CTA marker: {dirname}")

    with open(page_file, 'w', encoding='utf-8') as f:
        f.write(content)

    updated.append(dirname)

print(f"\n✅ Updated:  {len(updated)} pages")
print(f"⏭  Skipped:  {len(skipped)} pages (already had sections)")
print(f"❌ Errors:   {len(errors)}")
if errors:
    for e in errors:
        print(f"   {e}")
if updated:
    print("\nUpdated pages:")
    for u in updated:
        print(f"   {u}")
