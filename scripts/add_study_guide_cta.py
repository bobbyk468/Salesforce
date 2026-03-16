#!/usr/bin/env python3
"""Add hub CTA block to study guide pages missing a 'Practice Exam' link-back."""
import os

BASE = '/Users/brahmajikatragadda/Downloads/salesforce-certifications/src/app'

# Mapping: study-guide-dir → (cert_hub_path, cert_display_name)
PAGES = {
    'adm-201-study-guide': ('/certifications/administrator', 'Salesforce Administrator (ADM-201)'),
    'advanced-administrator-study-guide': ('/certifications/advanced-administrator', 'Advanced Administrator'),
    'agentforce-specialist-study-guide': ('/certifications/agentforce-specialist', 'Agentforce Specialist'),
    'ai-associate-study-guide': ('/certifications/ai-associate', 'AI Associate'),
    'app-builder-study-guide': ('/certifications/app-builder', 'Platform App Builder'),
    'application-architect-study-guide': ('/certifications/application-architect', 'Application Architect'),
    'b2c-commerce-architect-study-guide': ('/certifications/b2c-commerce-architect', 'B2C Commerce Architect'),
    'data-cloud-consultant-study-guide': ('/certifications/data-cloud-consultant', 'Data Cloud Consultant'),
    'experience-cloud-consultant-study-guide': ('/certifications/experience-cloud', 'Experience Cloud Consultant'),
    'marketing-cloud-consultant-study-guide': ('/certifications/marketing-cloud-consultant', 'Marketing Cloud Consultant'),
    'pardot-consultant-study-guide': ('/certifications/pardot-consultant', 'Pardot Consultant'),
    'pd1-study-guide': ('/certifications/developer-1', 'Platform Developer I (PD1)'),
    'pd2-study-guide': ('/certifications/developer-2', 'Platform Developer II (PD2)'),
    'sales-cloud-consultant-study-guide': ('/certifications/sales-cloud', 'Sales Cloud Consultant'),
    'service-cloud-consultant-study-guide': ('/certifications/service-cloud', 'Service Cloud Consultant'),
    'service-cloud-study-guide': ('/certifications/service-cloud', 'Service Cloud Consultant'),
    'system-architect-study-guide': ('/certifications/system-architect', 'System Architect'),
    'technical-architect-study-guide': ('/certifications/technical-architect', 'Certified Technical Architect (CTA)'),
}

CTA_TEMPLATE = """
      {{/* Hub CTA */}}
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white mt-10">
        <h2 className="text-2xl font-bold mb-2">Ready to Test Your Knowledge?</h2>
        <p className="text-white/90 mb-6">Try the {cert_name} free practice exam — scored with full explanations.</p>
        <Link
          href="{cert_path}"
          className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          {cert_name} Free Practice Exam &rarr;
        </Link>
      </div>
"""

def process(slug, cert_path, cert_name):
    path = os.path.join(BASE, slug, 'page.tsx')
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Skip if already has a practice exam CTA (any link to the cert path)
    if 'Practice Exam' in content or 'practice-exam' in content or 'Free Practice' in content:
        print(f'  SKIP (already has CTA): {slug}')
        return

    # Insert CTA block just before the last </div>\n  )\n}
    # Pattern: closing `    </div>\n  )\n}`
    insert_marker = '    </div>\n  )\n}'
    idx = content.rfind(insert_marker)
    if idx == -1:
        # Try alternative closing pattern
        insert_marker = '    </div>\n  );\n}'
        idx = content.rfind(insert_marker)
    if idx == -1:
        print(f'  SKIP (no closing marker): {slug}')
        return

    cta = CTA_TEMPLATE.format(cert_name=cert_name, cert_path=cert_path)
    new_content = content[:idx] + cta + content[idx:]

    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f'  DONE: {slug}')

def main():
    for slug, (cert_path, cert_name) in sorted(PAGES.items()):
        process(slug, cert_path, cert_name)
    print('Done.')

if __name__ == '__main__':
    main()
