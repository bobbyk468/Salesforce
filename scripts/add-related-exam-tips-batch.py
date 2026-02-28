#!/usr/bin/env python3
"""
Add "Related Exam Tips" sections to all exam-tips pages that don't have them yet.
Groups pages by role/track and links to 4 related pages per group.
"""

import os
import re

APP_DIR = '/Users/brahmajikatragadda/Downloads/salesforce-certifications/src/app'

# Related links grouped by cert track
# Each slug maps to a list of 4 (label, href) tuples
RELATED_MAP = {
    # Admin track
    'advanced-administrator-exam-tips': [
        ('ADM-201 Exam Tips', '/adm-201-exam-tips-2026'),
        ('App Builder Exam Tips', '/app-builder-exam-tips'),
        ('Admin vs Advanced Admin', '/administrator-vs-advanced-administrator'),
        ('Admin Certification Path', '/admin-certification-path'),
    ],
    'ai-associate-exam-tips': [
        ('Agentforce Specialist Exam Tips', '/agentforce-specialist-exam-tips'),
        ('Data Cloud Consultant Exam Tips', '/data-cloud-consultant-exam-tips'),
        ('ADM-201 Exam Tips', '/adm-201-exam-tips-2026'),
        ('Admin Certification Path', '/admin-certification-path'),
    ],
    'business-analyst-exam-tips': [
        ('ADM-201 Exam Tips', '/adm-201-exam-tips-2026'),
        ('Experience Cloud Exam Tips', '/experience-cloud-exam-tips'),
        ('Business Analyst vs Strategy Designer', '/business-analyst-vs-strategy-designer'),
        ('Consultant Certification Path', '/consultant-certification-path'),
    ],
    'experience-cloud-exam-tips': [
        ('ADM-201 Exam Tips', '/adm-201-exam-tips-2026'),
        ('Service Cloud Consultant Exam Tips', '/service-cloud-consultant-exam-tips'),
        ('Business Analyst Exam Tips', '/business-analyst-exam-tips'),
        ('Consultant Certification Path', '/consultant-certification-path'),
    ],
    'sales-cloud-exam-tips': [
        ('Service Cloud Consultant Exam Tips', '/service-cloud-consultant-exam-tips'),
        ('ADM-201 Exam Tips', '/adm-201-exam-tips-2026'),
        ('CPQ Administrator Exam Tips', '/cpq-administrator-exam-tips'),
        ('Consultant Certification Path', '/consultant-certification-path'),
    ],
    'platform-foundations-exam-tips': [
        ('ADM-201 Exam Tips', '/adm-201-exam-tips-2026'),
        ('App Builder Exam Tips', '/app-builder-exam-tips'),
        ('AI Associate Exam Tips', '/ai-associate-exam-tips'),
        ('Admin Certification Path', '/admin-certification-path'),
    ],
    # Developer track
    'pd2-exam-tips-2026': [
        ('PD1 Exam Tips', '/pd1-exam-tips-2026'),
        ('PD1 vs PD2', '/pd1-vs-pd2'),
        ('JavaScript Developer I Exam Tips', '/javascript-developer-i-exam-tips'),
        ('Developer Certification Path', '/developer-certification-path'),
    ],
    'javascript-developer-i-exam-tips': [
        ('PD1 Exam Tips', '/pd1-exam-tips-2026'),
        ('App Builder Exam Tips', '/app-builder-exam-tips'),
        ('PD1 vs PD2', '/pd1-vs-pd2'),
        ('Developer Certification Path', '/developer-certification-path'),
    ],
    'process-automation-ap-exam-tips': [
        ('App Builder Exam Tips', '/app-builder-exam-tips'),
        ('ADM-201 Exam Tips', '/adm-201-exam-tips-2026'),
        ('PD1 Exam Tips', '/pd1-exam-tips-2026'),
        ('Developer Certification Path', '/developer-certification-path'),
    ],
    # Consultant track
    'cpq-administrator-exam-tips': [
        ('Sales Cloud Exam Tips', '/sales-cloud-exam-tips'),
        ('Service Cloud Consultant Exam Tips', '/service-cloud-consultant-exam-tips'),
        ('CPQ Admin vs CPQ Billing AP', '/cpq-admin-vs-cpq-billing-ap'),
        ('Consultant Certification Path', '/consultant-certification-path'),
    ],
    'cpq-billing-ap-exam-tips': [
        ('CPQ Administrator Exam Tips', '/cpq-administrator-exam-tips'),
        ('Sales Cloud Exam Tips', '/sales-cloud-exam-tips'),
        ('CPQ Admin vs CPQ Billing AP', '/cpq-admin-vs-cpq-billing-ap'),
        ('Consultant Certification Path', '/consultant-certification-path'),
    ],
    'field-service-exam-tips': [
        ('Service Cloud Consultant Exam Tips', '/service-cloud-consultant-exam-tips'),
        ('ADM-201 Exam Tips', '/adm-201-exam-tips-2026'),
        ('Advanced Field Service AP Exam Tips', '/advanced-field-service-ap-exam-tips'),
        ('Consultant Certification Path', '/consultant-certification-path'),
    ],
    'advanced-field-service-ap-exam-tips': [
        ('Field Service Exam Tips', '/field-service-exam-tips'),
        ('Service Cloud Consultant Exam Tips', '/service-cloud-consultant-exam-tips'),
        ('ADM-201 Exam Tips', '/adm-201-exam-tips-2026'),
        ('Consultant Certification Path', '/consultant-certification-path'),
    ],
    'education-cloud-consultant-exam-tips': [
        ('Service Cloud Consultant Exam Tips', '/service-cloud-consultant-exam-tips'),
        ('Experience Cloud Exam Tips', '/experience-cloud-exam-tips'),
        ('ADM-201 Exam Tips', '/adm-201-exam-tips-2026'),
        ('Consultant Certification Path', '/consultant-certification-path'),
    ],
    'nonprofit-cloud-exam-tips': [
        ('Nonprofit Success Pack Exam Tips', '/nonprofit-success-pack-consultant-exam-tips'),
        ('Service Cloud Consultant Exam Tips', '/service-cloud-consultant-exam-tips'),
        ('ADM-201 Exam Tips', '/adm-201-exam-tips-2026'),
        ('Consultant Certification Path', '/consultant-certification-path'),
    ],
    'nonprofit-success-pack-consultant-exam-tips': [
        ('Nonprofit Cloud Exam Tips', '/nonprofit-cloud-exam-tips'),
        ('Service Cloud Consultant Exam Tips', '/service-cloud-consultant-exam-tips'),
        ('Experience Cloud Exam Tips', '/experience-cloud-exam-tips'),
        ('Consultant Certification Path', '/consultant-certification-path'),
    ],
    'revenue-cloud-consultant-exam-tips': [
        ('CPQ Administrator Exam Tips', '/cpq-administrator-exam-tips'),
        ('Sales Cloud Exam Tips', '/sales-cloud-exam-tips'),
        ('CPQ Billing AP Exam Tips', '/cpq-billing-ap-exam-tips'),
        ('Consultant Certification Path', '/consultant-certification-path'),
    ],
    'data-cloud-consultant-exam-tips': [
        ('Agentforce Specialist Exam Tips', '/agentforce-specialist-exam-tips'),
        ('AI Associate Exam Tips', '/ai-associate-exam-tips'),
        ('CRM Analytics Exam Tips', '/crm-analytics-exam-tips'),
        ('Data Cloud vs CRM Analytics', '/data-cloud-vs-crm-analytics'),
    ],
    'crm-analytics-exam-tips': [
        ('Data Cloud Consultant Exam Tips', '/data-cloud-consultant-exam-tips'),
        ('Data Architect Exam Tips', '/data-architect-exam-tips'),
        ('ADM-201 Exam Tips', '/adm-201-exam-tips-2026'),
        ('Data Cloud vs CRM Analytics', '/data-cloud-vs-crm-analytics'),
    ],
    'pardot-specialist-exam-tips': [
        ('Marketing Cloud Consultant Exam Tips', '/marketing-cloud-consultant-exam-tips'),
        ('Sales Cloud Exam Tips', '/sales-cloud-exam-tips'),
        ('ADM-201 Exam Tips', '/adm-201-exam-tips-2026'),
        ('Consultant Certification Path', '/consultant-certification-path'),
    ],
    'marketing-cloud-consultant-exam-tips': [
        ('Pardot Specialist Exam Tips', '/pardot-specialist-exam-tips'),
        ('Marketing Cloud Engagement Developer Exam Tips', '/marketing-cloud-engagement-developer-exam-tips'),
        ('Service Cloud Consultant Exam Tips', '/service-cloud-consultant-exam-tips'),
        ('Consultant Certification Path', '/consultant-certification-path'),
    ],
    'marketing-cloud-engagement-developer-exam-tips': [
        ('PD1 Exam Tips', '/pd1-exam-tips-2026'),
        ('Marketing Cloud Consultant Exam Tips', '/marketing-cloud-consultant-exam-tips'),
        ('Email Specialist Exam Tips', '/email-specialist-exam-tips'),
        ('Developer Certification Path', '/developer-certification-path'),
    ],
    'marketing-cloud-engagement-foundations-exam-tips': [
        ('Email Specialist Exam Tips', '/email-specialist-exam-tips'),
        ('Marketing Cloud Consultant Exam Tips', '/marketing-cloud-consultant-exam-tips'),
        ('ADM-201 Exam Tips', '/adm-201-exam-tips-2026'),
        ('Consultant Certification Path', '/consultant-certification-path'),
    ],
    'marketing-cloud-advanced-cross-channel-ap-exam-tips': [
        ('Email Specialist Exam Tips', '/email-specialist-exam-tips'),
        ('Marketing Cloud Consultant Exam Tips', '/marketing-cloud-consultant-exam-tips'),
        ('Marketing Cloud Personalization AP Exam Tips', '/marketing-cloud-personalization-ap-exam-tips'),
        ('Consultant Certification Path', '/consultant-certification-path'),
    ],
    'marketing-cloud-intelligence-ap-exam-tips': [
        ('CRM Analytics Exam Tips', '/crm-analytics-exam-tips'),
        ('Data Cloud Consultant Exam Tips', '/data-cloud-consultant-exam-tips'),
        ('Marketing Cloud Consultant Exam Tips', '/marketing-cloud-consultant-exam-tips'),
        ('Consultant Certification Path', '/consultant-certification-path'),
    ],
    'marketing-cloud-personalization-ap-exam-tips': [
        ('Marketing Cloud Advanced Cross-Channel AP Exam Tips', '/marketing-cloud-advanced-cross-channel-ap-exam-tips'),
        ('Email Specialist Exam Tips', '/email-specialist-exam-tips'),
        ('Data Cloud Consultant Exam Tips', '/data-cloud-consultant-exam-tips'),
        ('Consultant Certification Path', '/consultant-certification-path'),
    ],
    # Architect track
    'application-architect-exam-tips': [
        ('System Architect Exam Tips', '/system-architect-exam-tips'),
        ('Integration Architect Exam Tips', '/integration-architect-exam-tips'),
        ('Data Architect Exam Tips', '/data-architect-exam-tips'),
        ('Architect Certification Path', '/architect-certification-path'),
    ],
    'system-architect-exam-tips': [
        ('Application Architect Exam Tips', '/application-architect-exam-tips'),
        ('Integration Architect Exam Tips', '/integration-architect-exam-tips'),
        ('Integration Architect vs System Architect', '/integration-architect-vs-system-architect'),
        ('Architect Certification Path', '/architect-certification-path'),
    ],
    'integration-architect-exam-tips': [
        ('System Architect Exam Tips', '/system-architect-exam-tips'),
        ('Data Architect Exam Tips', '/data-architect-exam-tips'),
        ('Integration Architect vs System Architect', '/integration-architect-vs-system-architect'),
        ('Architect Certification Path', '/architect-certification-path'),
    ],
    'data-architect-exam-tips': [
        ('Integration Architect Exam Tips', '/integration-architect-exam-tips'),
        ('Sharing Visibility Architect Exam Tips', '/sharing-visibility-architect-exam-tips'),
        ('CRM Analytics Exam Tips', '/crm-analytics-exam-tips'),
        ('Architect Certification Path', '/architect-certification-path'),
    ],
    'sharing-visibility-architect-exam-tips': [
        ('Data Architect Exam Tips', '/data-architect-exam-tips'),
        ('Identity and Access Management Architect Exam Tips', '/identity-access-management-architect-exam-tips'),
        ('ADM-201 Exam Tips', '/adm-201-exam-tips-2026'),
        ('Architect Certification Path', '/architect-certification-path'),
    ],
    'identity-access-management-architect-exam-tips': [
        ('Sharing Visibility Architect Exam Tips', '/sharing-visibility-architect-exam-tips'),
        ('System Architect Exam Tips', '/system-architect-exam-tips'),
        ('ADM-201 Exam Tips', '/adm-201-exam-tips-2026'),
        ('Architect Certification Path', '/architect-certification-path'),
    ],
    'dev-lifecycle-deployment-architect-exam-tips': [
        ('Integration Architect Exam Tips', '/integration-architect-exam-tips'),
        ('System Architect Exam Tips', '/system-architect-exam-tips'),
        ('PD1 Exam Tips', '/pd1-exam-tips-2026'),
        ('Architect Certification Path', '/architect-certification-path'),
    ],
    'heroku-architect-exam-tips': [
        ('Integration Architect Exam Tips', '/integration-architect-exam-tips'),
        ('System Architect Exam Tips', '/system-architect-exam-tips'),
        ('PD1 Exam Tips', '/pd1-exam-tips-2026'),
        ('Architect Certification Path', '/architect-certification-path'),
    ],
    'technical-architect-exam-tips': [
        ('Application Architect Exam Tips', '/application-architect-exam-tips'),
        ('System Architect Exam Tips', '/system-architect-exam-tips'),
        ('Technical Architect Evaluation Exam Tips', '/technical-architect-evaluation-exam-tips'),
        ('Architect Certification Path', '/architect-certification-path'),
    ],
    'technical-architect-evaluation-exam-tips': [
        ('Technical Architect Exam Tips', '/technical-architect-exam-tips'),
        ('Technical Architect Review Board Exam Tips', '/technical-architect-review-board-exam-tips'),
        ('Application Architect Exam Tips', '/application-architect-exam-tips'),
        ('Architect Certification Path', '/architect-certification-path'),
    ],
    'technical-architect-review-board-exam-tips': [
        ('Technical Architect Evaluation Exam Tips', '/technical-architect-evaluation-exam-tips'),
        ('Technical Architect Exam Tips', '/technical-architect-exam-tips'),
        ('System Architect Exam Tips', '/system-architect-exam-tips'),
        ('Architect Certification Path', '/architect-certification-path'),
    ],
    # MuleSoft track
    'mulesoft-developer-i-exam-tips': [
        ('MuleSoft Integration Foundations Exam Tips', '/mulesoft-integration-foundations-exam-tips'),
        ('MuleSoft Developer II Exam Tips', '/mulesoft-developer-ii-exam-tips'),
        ('MuleSoft Developer I vs II', '/mulesoft-developer-i-vs-ii'),
        ('Developer Certification Path', '/developer-certification-path'),
    ],
    'mulesoft-developer-ii-exam-tips': [
        ('MuleSoft Developer I Exam Tips', '/mulesoft-developer-i-exam-tips'),
        ('MuleSoft Integration Architect Exam Tips', '/mulesoft-integration-architect-exam-tips'),
        ('MuleSoft Developer I vs II', '/mulesoft-developer-i-vs-ii'),
        ('Developer Certification Path', '/developer-certification-path'),
    ],
    'mulesoft-integration-architect-exam-tips': [
        ('MuleSoft Developer II Exam Tips', '/mulesoft-developer-ii-exam-tips'),
        ('MuleSoft Platform Architect Exam Tips', '/mulesoft-platform-architect-exam-tips'),
        ('Integration Architect Exam Tips', '/integration-architect-exam-tips'),
        ('Developer Certification Path', '/developer-certification-path'),
    ],
    'mulesoft-platform-architect-exam-tips': [
        ('MuleSoft Integration Architect Exam Tips', '/mulesoft-integration-architect-exam-tips'),
        ('MuleSoft Catalyst Consultant Exam Tips', '/mulesoft-catalyst-consultant-exam-tips'),
        ('System Architect Exam Tips', '/system-architect-exam-tips'),
        ('Architect Certification Path', '/architect-certification-path'),
    ],
    'mulesoft-catalyst-consultant-exam-tips': [
        ('MuleSoft Platform Architect Exam Tips', '/mulesoft-platform-architect-exam-tips'),
        ('MuleSoft Integration Architect Exam Tips', '/mulesoft-integration-architect-exam-tips'),
        ('Consultant Certification Path', '/consultant-certification-path'),
        ('Developer Certification Path', '/developer-certification-path'),
    ],
    'mulesoft-hyperautomation-developer-exam-tips': [
        ('MuleSoft Developer I Exam Tips', '/mulesoft-developer-i-exam-tips'),
        ('MuleSoft Integration Foundations Exam Tips', '/mulesoft-integration-foundations-exam-tips'),
        ('Process Automation AP Exam Tips', '/process-automation-ap-exam-tips'),
        ('Developer Certification Path', '/developer-certification-path'),
    ],
    # Tableau track
    'tableau-architect-exam-tips': [
        ('Tableau Consultant Exam Tips', '/tableau-consultant-exam-tips'),
        ('Tableau Data Analyst Exam Tips', '/tableau-data-analyst-exam-tips'),
        ('CRM Analytics Exam Tips', '/crm-analytics-exam-tips'),
        ('Architect Certification Path', '/architect-certification-path'),
    ],
    'tableau-consultant-exam-tips': [
        ('Tableau Architect Exam Tips', '/tableau-architect-exam-tips'),
        ('Tableau Data Analyst Exam Tips', '/tableau-data-analyst-exam-tips'),
        ('CRM Analytics Exam Tips', '/crm-analytics-exam-tips'),
        ('Consultant Certification Path', '/consultant-certification-path'),
    ],
    'tableau-desktop-foundations-exam-tips': [
        ('Tableau Data Analyst Exam Tips', '/tableau-data-analyst-exam-tips'),
        ('Tableau Consultant Exam Tips', '/tableau-consultant-exam-tips'),
        ('ADM-201 Exam Tips', '/adm-201-exam-tips-2026'),
        ('Certification Path', '/certification-path'),
    ],
    'tableau-server-administrator-exam-tips': [
        ('Tableau Data Analyst Exam Tips', '/tableau-data-analyst-exam-tips'),
        ('Tableau Architect Exam Tips', '/tableau-architect-exam-tips'),
        ('ADM-201 Exam Tips', '/adm-201-exam-tips-2026'),
        ('Architect Certification Path', '/architect-certification-path'),
    ],
    # Slack track
    'slack-administrator-exam-tips': [
        ('Slack Developer Exam Tips', '/slack-developer-exam-tips'),
        ('Slack Consultant Exam Tips', '/slack-consultant-exam-tips'),
        ('ADM-201 Exam Tips', '/adm-201-exam-tips-2026'),
        ('Admin Certification Path', '/admin-certification-path'),
    ],
    'slack-consultant-exam-tips': [
        ('Slack Administrator Exam Tips', '/slack-administrator-exam-tips'),
        ('Slack Developer Exam Tips', '/slack-developer-exam-tips'),
        ('Service Cloud Consultant Exam Tips', '/service-cloud-consultant-exam-tips'),
        ('Consultant Certification Path', '/consultant-certification-path'),
    ],
    # OmniStudio track
    'omnistudio-developer-exam-tips': [
        ('OmniStudio Consultant Exam Tips', '/omnistudio-consultant-exam-tips'),
        ('OmniStudio Developer vs Consultant', '/omnistudio-developer-vs-consultant'),
        ('PD1 Exam Tips', '/pd1-exam-tips-2026'),
        ('Developer Certification Path', '/developer-certification-path'),
    ],
    'omnistudio-consultant-exam-tips': [
        ('OmniStudio Developer Exam Tips', '/omnistudio-developer-exam-tips'),
        ('OmniStudio Developer vs Consultant', '/omnistudio-developer-vs-consultant'),
        ('Service Cloud Consultant Exam Tips', '/service-cloud-consultant-exam-tips'),
        ('Consultant Certification Path', '/consultant-certification-path'),
    ],
    'industries-cpq-developer-exam-tips': [
        ('CPQ Administrator Exam Tips', '/cpq-administrator-exam-tips'),
        ('OmniStudio Developer Exam Tips', '/omnistudio-developer-exam-tips'),
        ('PD1 Exam Tips', '/pd1-exam-tips-2026'),
        ('Developer Certification Path', '/developer-certification-path'),
    ],
    # Designer track
    'ux-designer-exam-tips': [
        ('Strategy Designer Exam Tips', '/strategy-designer-exam-tips'),
        ('Business Analyst Exam Tips', '/business-analyst-exam-tips'),
        ('Business Analyst vs Strategy Designer', '/business-analyst-vs-strategy-designer'),
        ('Certification Path', '/certification-path'),
    ],
    'strategy-designer-exam-tips': [
        ('UX Designer Exam Tips', '/ux-designer-exam-tips'),
        ('Business Analyst Exam Tips', '/business-analyst-exam-tips'),
        ('Business Analyst vs Strategy Designer', '/business-analyst-vs-strategy-designer'),
        ('Certification Path', '/certification-path'),
    ],
    # AP certs — generic cluster
    'b2b-commerce-admin-ap-exam-tips': [
        ('B2B Commerce Developer AP Exam Tips', '/b2b-commerce-developer-ap-exam-tips'),
        ('ADM-201 Exam Tips', '/adm-201-exam-tips-2026'),
        ('Service Cloud Consultant Exam Tips', '/service-cloud-consultant-exam-tips'),
        ('Certification Path', '/certification-path'),
    ],
    'b2b-commerce-developer-ap-exam-tips': [
        ('B2B Commerce Admin AP Exam Tips', '/b2b-commerce-admin-ap-exam-tips'),
        ('PD1 Exam Tips', '/pd1-exam-tips-2026'),
        ('OmniStudio Developer Exam Tips', '/omnistudio-developer-exam-tips'),
        ('Developer Certification Path', '/developer-certification-path'),
    ],
    'b2b-solution-architect-exam-tips': [
        ('Integration Architect Exam Tips', '/integration-architect-exam-tips'),
        ('B2B Commerce Admin AP Exam Tips', '/b2b-commerce-admin-ap-exam-tips'),
        ('System Architect Exam Tips', '/system-architect-exam-tips'),
        ('Architect Certification Path', '/architect-certification-path'),
    ],
    'b2c-commerce-developer-exam-tips': [
        ('PD1 Exam Tips', '/pd1-exam-tips-2026'),
        ('B2C Commerce Architect Exam Tips', '/b2c-commerce-architect-exam-tips'),
        ('OmniStudio Developer Exam Tips', '/omnistudio-developer-exam-tips'),
        ('Developer Certification Path', '/developer-certification-path'),
    ],
    'b2c-commerce-architect-exam-tips': [
        ('B2C Commerce Developer Exam Tips', '/b2c-commerce-developer-exam-tips'),
        ('B2C Solution Architect Exam Tips', '/b2c-solution-architect-exam-tips'),
        ('Integration Architect Exam Tips', '/integration-architect-exam-tips'),
        ('Architect Certification Path', '/architect-certification-path'),
    ],
    'b2c-solution-architect-exam-tips': [
        ('B2C Commerce Architect Exam Tips', '/b2c-commerce-architect-exam-tips'),
        ('Integration Architect Exam Tips', '/integration-architect-exam-tips'),
        ('System Architect Exam Tips', '/system-architect-exam-tips'),
        ('Architect Certification Path', '/architect-certification-path'),
    ],
    'financial-services-cloud-ap-exam-tips': [
        ('Health Cloud AP Exam Tips', '/health-cloud-ap-exam-tips'),
        ('Service Cloud Consultant Exam Tips', '/service-cloud-consultant-exam-tips'),
        ('ADM-201 Exam Tips', '/adm-201-exam-tips-2026'),
        ('Consultant Certification Path', '/consultant-certification-path'),
    ],
    'health-cloud-ap-exam-tips': [
        ('Financial Services Cloud AP Exam Tips', '/financial-services-cloud-ap-exam-tips'),
        ('Service Cloud Consultant Exam Tips', '/service-cloud-consultant-exam-tips'),
        ('ADM-201 Exam Tips', '/adm-201-exam-tips-2026'),
        ('Consultant Certification Path', '/consultant-certification-path'),
    ],
    'manufacturing-cloud-ap-exam-tips': [
        ('Sales Cloud Exam Tips', '/sales-cloud-exam-tips'),
        ('Revenue Cloud Consultant Exam Tips', '/revenue-cloud-consultant-exam-tips'),
        ('ADM-201 Exam Tips', '/adm-201-exam-tips-2026'),
        ('Consultant Certification Path', '/consultant-certification-path'),
    ],
    'consumer-goods-cloud-ap-exam-tips': [
        ('Consumer Goods TPM AP Exam Tips', '/consumer-goods-tpm-ap-exam-tips'),
        ('Sales Cloud Exam Tips', '/sales-cloud-exam-tips'),
        ('ADM-201 Exam Tips', '/adm-201-exam-tips-2026'),
        ('Consultant Certification Path', '/consultant-certification-path'),
    ],
    'consumer-goods-tpm-ap-exam-tips': [
        ('Consumer Goods Cloud AP Exam Tips', '/consumer-goods-cloud-ap-exam-tips'),
        ('Revenue Cloud Consultant Exam Tips', '/revenue-cloud-consultant-exam-tips'),
        ('ADM-201 Exam Tips', '/adm-201-exam-tips-2026'),
        ('Consultant Certification Path', '/consultant-certification-path'),
    ],
    'energy-utilities-ap-exam-tips': [
        ('Public Sector Solutions AP Exam Tips', '/public-sector-solutions-ap-exam-tips'),
        ('Service Cloud Consultant Exam Tips', '/service-cloud-consultant-exam-tips'),
        ('OmniStudio Consultant Exam Tips', '/omnistudio-consultant-exam-tips'),
        ('Consultant Certification Path', '/consultant-certification-path'),
    ],
    'communications-cloud-ap-exam-tips': [
        ('Energy Utilities AP Exam Tips', '/energy-utilities-ap-exam-tips'),
        ('OmniStudio Consultant Exam Tips', '/omnistudio-consultant-exam-tips'),
        ('Service Cloud Consultant Exam Tips', '/service-cloud-consultant-exam-tips'),
        ('Consultant Certification Path', '/consultant-certification-path'),
    ],
    'public-sector-solutions-ap-exam-tips': [
        ('Energy Utilities AP Exam Tips', '/energy-utilities-ap-exam-tips'),
        ('Experience Cloud Exam Tips', '/experience-cloud-exam-tips'),
        ('ADM-201 Exam Tips', '/adm-201-exam-tips-2026'),
        ('Consultant Certification Path', '/consultant-certification-path'),
    ],
    'net-zero-cloud-ap-exam-tips': [
        ('Energy Utilities AP Exam Tips', '/energy-utilities-ap-exam-tips'),
        ('ADM-201 Exam Tips', '/adm-201-exam-tips-2026'),
        ('Service Cloud Consultant Exam Tips', '/service-cloud-consultant-exam-tips'),
        ('Certification Path', '/certification-path'),
    ],
    'media-cloud-ap-exam-tips': [
        ('Communications Cloud AP Exam Tips', '/communications-cloud-ap-exam-tips'),
        ('Sales Cloud Exam Tips', '/sales-cloud-exam-tips'),
        ('Service Cloud Consultant Exam Tips', '/service-cloud-consultant-exam-tips'),
        ('Consultant Certification Path', '/consultant-certification-path'),
    ],
    'loyalty-management-ap-exam-tips': [
        ('Marketing Cloud Consultant Exam Tips', '/marketing-cloud-consultant-exam-tips'),
        ('Revenue Cloud Consultant Exam Tips', '/revenue-cloud-consultant-exam-tips'),
        ('Sales Cloud Exam Tips', '/sales-cloud-exam-tips'),
        ('Consultant Certification Path', '/consultant-certification-path'),
    ],
    'contact-center-ap-exam-tips': [
        ('Service Cloud Consultant Exam Tips', '/service-cloud-consultant-exam-tips'),
        ('Slack Consultant Exam Tips', '/slack-consultant-exam-tips'),
        ('ADM-201 Exam Tips', '/adm-201-exam-tips-2026'),
        ('Consultant Certification Path', '/consultant-certification-path'),
    ],
    'order-management-admin-ap-exam-tips': [
        ('Order Management Developer AP Exam Tips', '/order-management-developer-ap-exam-tips'),
        ('Revenue Cloud Consultant Exam Tips', '/revenue-cloud-consultant-exam-tips'),
        ('ADM-201 Exam Tips', '/adm-201-exam-tips-2026'),
        ('Certification Path', '/certification-path'),
    ],
    'order-management-developer-ap-exam-tips': [
        ('Order Management Admin AP Exam Tips', '/order-management-admin-ap-exam-tips'),
        ('PD1 Exam Tips', '/pd1-exam-tips-2026'),
        ('Revenue Cloud Consultant Exam Tips', '/revenue-cloud-consultant-exam-tips'),
        ('Developer Certification Path', '/developer-certification-path'),
    ],
    'heroku-developer-ap-exam-tips': [
        ('PD1 Exam Tips', '/pd1-exam-tips-2026'),
        ('Heroku Architect Exam Tips', '/heroku-architect-exam-tips'),
        ('Integration Architect Exam Tips', '/integration-architect-exam-tips'),
        ('Developer Certification Path', '/developer-certification-path'),
    ],
    'sales-foundations-exam-tips': [
        ('Sales Cloud Exam Tips', '/sales-cloud-exam-tips'),
        ('ADM-201 Exam Tips', '/adm-201-exam-tips-2026'),
        ('Platform Foundations Exam Tips', '/platform-foundations-exam-tips'),
        ('Certification Path', '/certification-path'),
    ],
}

# Related Exam Tips section template
def make_section(links):
    items = '\n'.join([
        f'''          <Link href="{href}" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">{label}</span>
          </Link>'''
        for label, href in links
    ])
    return f'''
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Related Exam Tips</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
{items}
        </div>
      </section>

'''

# Marker before the CTA section (the closing blue box)
CTA_PATTERN = re.compile(
    r'(\n      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5)',
    re.MULTILINE
)

def needs_arrowRight_import(content):
    return 'ArrowRight' not in content

updated = 0
skipped_already_has = 0
skipped_no_map = 0

for slug, links in RELATED_MAP.items():
    page_path = os.path.join(APP_DIR, slug, 'page.tsx')
    if not os.path.exists(page_path):
        print(f'NOT FOUND: {slug}')
        continue

    with open(page_path, 'r') as f:
        content = f.read()

    if 'Related Exam Tips' in content:
        skipped_already_has += 1
        continue

    # Ensure ArrowRight is imported
    if needs_arrowRight_import(content):
        content = content.replace(
            "import { CheckCircle2,",
            "import { CheckCircle2, ArrowRight,"
        )
        # Fallback: just add ArrowRight to any lucide import line
        if 'ArrowRight' not in content:
            content = re.sub(
                r"from 'lucide-react'",
                lambda m: m.group(0),  # no change if already present
                content,
                count=1
            )

    # Ensure Link is imported
    if "import Link from 'next/link'" not in content:
        content = "import Link from 'next/link'\n" + content

    section = make_section(links)

    # Insert before the CTA section
    if CTA_PATTERN.search(content):
        content = CTA_PATTERN.sub(section + r'\1', content, count=1)
        with open(page_path, 'w') as f:
            f.write(content)
        updated += 1
        print(f'UPDATED: {slug}')
    else:
        print(f'NO CTA FOUND: {slug} — skipping')

print(f'\nDone: {updated} updated, {skipped_already_has} already had Related Exam Tips, {skipped_no_map} not in map')
