/** Related guides for internal linking — used on study guides, vs pages, and hub pages. */
export function getRelatedGuides(currentSlug: string): { href: string; anchorText: string }[] {
  const guides: Record<string, { href: string; anchorText: string }[]> = {
    'ux-designer-vs-strategy-designer': [
      { href: '/platform-foundations-vs-ai-associate', anchorText: 'Platform Foundations vs AI Associate' },
      { href: '/app-builder-vs-developer-i', anchorText: 'App Builder vs Developer I' },
      { href: '/how-to-study-for-salesforce-certification', anchorText: 'How to study for certification' },
    ],
    'mulesoft-integration-foundations-study-guide': [
      { href: '/mulesoft-developer-i-vs-integration-foundations', anchorText: 'MuleSoft Developer I vs Integration Foundations' },
      { href: '/mulesoft-developer-i-study-guide', anchorText: 'MuleSoft Developer I study guide' },
      { href: '/how-to-study-for-salesforce-certification', anchorText: 'How to study for certification' },
    ],
    'pardot-consultant-vs-marketing-cloud-consultant': [
      { href: '/pardot-specialist-vs-pardot-consultant', anchorText: 'Pardot Specialist vs Consultant' },
      { href: '/marketing-cloud-admin-vs-developer', anchorText: 'Marketing Cloud Admin vs Developer' },
      { href: '/pardot-consultant-study-guide', anchorText: 'Pardot Consultant study guide' },
    ],
    'system-architect-vs-application-architect': [
      { href: '/how-to-become-salesforce-architect', anchorText: 'How to become a Salesforce Architect' },
      { href: '/application-architect-study-guide', anchorText: 'Application Architect study guide' },
      { href: '/b2b-vs-b2c-solution-architect', anchorText: 'B2B vs B2C Solution Architect' },
    ],
    'business-analyst-study-guide': [
      { href: '/ux-designer-vs-strategy-designer', anchorText: 'UX Designer vs Strategy Designer' },
      { href: '/which-salesforce-certification-first', anchorText: 'Which cert first?' },
      { href: '/salesforce-certification-difficulty', anchorText: 'Certification difficulty ranking' },
    ],
    'platform-foundations-vs-ai-associate': [
      { href: '/ux-designer-vs-strategy-designer', anchorText: 'UX Designer vs Strategy Designer' },
      { href: '/app-builder-vs-developer-i', anchorText: 'App Builder vs Developer I' },
      { href: '/which-salesforce-certification-first', anchorText: 'Which cert first?' },
    ],
    'is-salesforce-certification-worth-it': [
      { href: '/salesforce-certification-difficulty', anchorText: 'Certification difficulty ranking' },
      { href: '/which-salesforce-certification-first', anchorText: 'Which cert first?' },
      { href: '/salesforce-free-certification', anchorText: 'Free certification options' },
    ],
    'education-cloud-vs-nonprofit-cloud-consultant': [
      { href: '/nonprofit-cloud-consultant-study-guide', anchorText: 'Nonprofit Cloud study guide' },
      { href: '/education-cloud-consultant-study-guide', anchorText: 'Education Cloud study guide' },
      { href: '/which-salesforce-certification-first', anchorText: 'Which cert first?' },
    ],
    'salesforce-free-certification': [
      { href: '/is-salesforce-certification-worth-it', anchorText: 'Is certification worth it?' },
      { href: '/salesforce-certification-voucher', anchorText: 'Vouchers & discounts' },
      { href: '/platform-foundations-study-guide', anchorText: 'Platform Foundations study guide' },
    ],
    'how-to-become-salesforce-architect': [
      { href: '/system-architect-vs-application-architect', anchorText: 'System vs Application Architect' },
      { href: '/technical-architect-study-guide', anchorText: 'Technical Architect study guide' },
      { href: '/salesforce-certification-difficulty', anchorText: 'Certification difficulty ranking' },
    ],
    'field-service-vs-service-cloud-consultant': [
      { href: '/service-cloud-consultant-study-guide', anchorText: 'Service Cloud study guide' },
      { href: '/which-salesforce-certification-first', anchorText: 'Which cert first?' },
      { href: '/how-to-become-salesforce-consultant', anchorText: 'Become a Consultant' },
    ],
    'pardot-specialist-vs-pardot-consultant': [
      { href: '/pardot-consultant-vs-marketing-cloud-consultant', anchorText: 'Pardot vs Marketing Cloud Consultant' },
      { href: '/pardot-specialist-study-guide', anchorText: 'Pardot Specialist study guide' },
      { href: '/marketing-cloud-admin-vs-developer', anchorText: 'Marketing Cloud Admin vs Developer' },
    ],
    'cpq-admin-vs-revenue-cloud-consultant': [
      { href: '/revenue-cloud-consultant-study-guide', anchorText: 'Revenue Cloud study guide' },
      { href: '/b2b-solution-architect-study-guide', anchorText: 'B2B Solution Architect study guide' },
      { href: '/which-salesforce-certification-first', anchorText: 'Which cert first?' },
    ],
    'tableau-data-analyst-study-guide': [
      { href: '/crm-analytics-study-guide', anchorText: 'CRM Analytics study guide' },
      { href: '/which-salesforce-certification-first', anchorText: 'Which cert first?' },
      { href: '/salesforce-certification-difficulty', anchorText: 'Certification difficulty ranking' },
    ],
    'app-builder-vs-developer-i': [
      { href: '/platform-foundations-vs-ai-associate', anchorText: 'Platform Foundations vs AI Associate' },
      { href: '/javascript-developer-i-vs-pd1', anchorText: 'JavaScript Developer I vs PD1' },
      { href: '/how-to-become-salesforce-developer', anchorText: 'Become a Developer' },
    ],
    'salesforce-certification-passing-score': [
      { href: '/salesforce-exam-retake-policy', anchorText: 'Exam retake policy' },
      { href: '/salesforce-certification-voucher', anchorText: 'Vouchers & discounts' },
      { href: '/how-to-study-for-salesforce-certification', anchorText: 'How to study for certification' },
    ],
    'marketing-cloud-admin-vs-developer': [
      { href: '/pardot-consultant-vs-marketing-cloud-consultant', anchorText: 'Pardot vs Marketing Cloud Consultant' },
      { href: '/pardot-specialist-vs-pardot-consultant', anchorText: 'Pardot Specialist vs Consultant' },
      { href: '/marketing-cloud-engagement-developer-study-guide', anchorText: 'Marketing Cloud Developer study guide' },
    ],
    'mulesoft-developer-i-vs-integration-foundations': [
      { href: '/mulesoft-integration-foundations-study-guide', anchorText: 'MuleSoft Integration Foundations study guide' },
      { href: '/mulesoft-developer-i-study-guide', anchorText: 'MuleSoft Developer I study guide' },
      { href: '/app-builder-vs-developer-i', anchorText: 'App Builder vs Developer I' },
    ],
    'salesforce-certification-validity': [
      { href: '/salesforce-certification-maintenance', anchorText: 'Certification maintenance' },
      { href: '/salesforce-certification-exam-day-tips', anchorText: 'Exam day tips' },
      { href: '/how-to-register-salesforce-exam', anchorText: 'How to register for exam' },
    ],
    'salesforce-exam-retake-policy': [
      { href: '/salesforce-certification-passing-score', anchorText: 'Passing score by tier' },
      { href: '/salesforce-certification-voucher', anchorText: '50% off retake vouchers' },
      { href: '/salesforce-certification-exam-day-tips', anchorText: 'Exam day tips' },
    ],
    'b2b-vs-b2c-solution-architect': [
      { href: '/system-architect-vs-application-architect', anchorText: 'System vs Application Architect' },
      { href: '/b2b-solution-architect-study-guide', anchorText: 'B2B Solution Architect study guide' },
      { href: '/how-to-become-salesforce-architect', anchorText: 'How to become an Architect' },
    ],
    'javascript-developer-i-vs-pd1': [
      { href: '/app-builder-vs-developer-i', anchorText: 'App Builder vs Developer I' },
      { href: '/mulesoft-developer-i-vs-integration-foundations', anchorText: 'MuleSoft Developer I vs Integration Foundations' },
      { href: '/how-to-become-salesforce-developer', anchorText: 'Become a Developer' },
    ],
  }
  return guides[currentSlug] ?? []
}
