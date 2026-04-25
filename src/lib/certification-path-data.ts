/**
 * Certification paths: foundational → intermediate → advanced (and specialist/AP).
 * Covers all major tracks and scenarios for planning your certification journey.
 */

export type PathStage = 'foundational' | 'intermediate' | 'advanced' | 'specialist' | 'architect' | 'ap'

export interface PathPrerequisite {
  name: string
  href: string
}

export interface PathNode {
  name: string
  href: string
  note?: string
  /** Prerequisites for this exam (other exams to complete first). Exam-wise, not section-wise. */
  prerequisites?: PathPrerequisite[]
}

export interface PathStageGroup {
  stage: PathStage
  label: string
  description?: string
  nodes: PathNode[]
}

export interface CertificationPath {
  id: string
  name: string
  description: string
  stages: PathStageGroup[]
}

const base = (slug: string) => `/certifications/${slug}`

export const CERTIFICATION_PATHS: CertificationPath[] = [
  {
    id: 'platform-admin',
    name: 'Platform Administrator',
    description: 'From basics to advanced administration and configuration.',
    stages: [
      {
        stage: 'foundational',
        label: 'Start here',
        description: 'Build core platform knowledge.',
        nodes: [
          { name: 'Platform Foundations', href: base('platform-foundations') },
          { name: 'Sales Foundations', href: base('sales-foundations'), note: 'Optional for sales-focused roles' },
        ],
      },
      {
        stage: 'intermediate',
        label: 'Core Admin',
        description: 'Primary administrator credential.',
        nodes: [
          { name: 'Platform Administrator (ADM-201)', href: base('administrator'), prerequisites: [{ name: 'Platform Foundations', href: base('platform-foundations') }] },
          { name: 'Platform App Builder', href: base('app-builder'), note: 'Often taken with or after Admin', prerequisites: [{ name: 'Platform Foundations', href: base('platform-foundations') }] },
        ],
      },
      {
        stage: 'advanced',
        label: 'Advanced Admin',
        description: 'Deep administration and optimization.',
        nodes: [
          { name: 'Platform Administrator II (ADM-211)', href: base('advanced-administrator'), prerequisites: [{ name: 'Platform Administrator (ADM-201)', href: base('administrator') }] },
        ],
      },
      {
        stage: 'specialist',
        label: 'Specialist options',
        description: 'Branch into related roles.',
        nodes: [
          { name: 'Business Analyst', href: base('business-analyst'), prerequisites: [{ name: 'Platform Administrator', href: base('administrator') }] },
          { name: 'CPQ Administrator', href: base('cpq-administrator'), prerequisites: [{ name: 'Platform Administrator', href: base('administrator') }] },
          { name: 'Slack Administrator', href: base('slack-administrator'), prerequisites: [{ name: 'Platform Administrator', href: base('administrator') }] },
          { name: 'Agentforce Specialist', href: base('agentforce-specialist'), prerequisites: [{ name: 'Platform Administrator', href: base('administrator') }] },
        ],
      },
    ],
  },
  {
    id: 'platform-developer',
    name: 'Platform Developer',
    description: 'From app building to advanced development.',
    stages: [
      {
        stage: 'foundational',
        label: 'Foundations',
        nodes: [
          { name: 'Platform Foundations', href: base('platform-foundations') },
          { name: 'Platform App Builder', href: base('app-builder'), prerequisites: [{ name: 'Platform Foundations', href: base('platform-foundations') }] },
        ],
      },
      {
        stage: 'intermediate',
        label: 'Developer I & II',
        nodes: [
          { name: 'Platform Developer I', href: base('developer-1'), prerequisites: [{ name: 'Platform App Builder', href: base('app-builder') }] },
          { name: 'Platform Developer II', href: base('developer-2'), prerequisites: [{ name: 'Platform Developer I', href: base('developer-1') }] },
        ],
      },
      {
        stage: 'specialist',
        label: 'Specialist developers',
        nodes: [
          { name: 'JavaScript Developer I', href: base('javascript-developer-i'), prerequisites: [{ name: 'Platform Developer I', href: base('developer-1') }] },
          { name: 'OmniStudio Developer', href: base('omnistudio-developer'), prerequisites: [{ name: 'Platform Developer I', href: base('developer-1') }] },
          { name: 'OmniStudio Consultant', href: base('omnistudio-consultant'), prerequisites: [{ name: 'OmniStudio Developer', href: base('omnistudio-developer') }] },
          { name: 'Slack Developer', href: base('slack-developer'), prerequisites: [{ name: 'Platform Developer I', href: base('developer-1') }] },
        ],
      },
    ],
  },
  {
    id: 'architect-cta',
    name: 'Architect (CTA path)',
    description: 'From domain architect to Technical Architect (CTA).',
    stages: [
      {
        stage: 'foundational',
        label: 'Base certs',
        description: 'Admin or Developer base recommended first.',
        nodes: [
          { name: 'Platform Administrator', href: base('administrator') },
          { name: 'Platform Developer I', href: base('developer-1') },
        ],
      },
      {
        stage: 'architect',
        label: 'Domain architects',
        description: 'Pick the path that fits your focus.',
        nodes: [
          { name: 'Data Architect', href: base('data-architect'), prerequisites: [{ name: 'Platform Administrator', href: base('administrator') }, { name: 'Platform Developer I', href: base('developer-1') }] },
          { name: 'Sharing & Visibility Architect', href: base('sharing-visibility-architect'), prerequisites: [{ name: 'Platform Administrator', href: base('administrator') }, { name: 'Platform Developer I', href: base('developer-1') }] },
          { name: 'Identity & Access Mgmt Architect', href: base('identity-access-management-architect'), prerequisites: [{ name: 'Platform Administrator', href: base('administrator') }] },
          { name: 'Dev Lifecycle & Deployment Architect', href: base('dev-lifecycle-deployment-architect'), prerequisites: [{ name: 'Platform Developer I', href: base('developer-1') }, { name: 'Platform Developer II', href: base('developer-2') }] },
        ],
      },
      {
        stage: 'advanced',
        label: 'Application or System Architect',
        nodes: [
          { name: 'Application Architect', href: base('application-architect'), prerequisites: [{ name: 'Data Architect', href: base('data-architect') }, { name: 'Sharing & Visibility Architect', href: base('sharing-visibility-architect') }] },
          { name: 'System Architect', href: base('system-architect'), prerequisites: [{ name: 'Identity & Access Mgmt Architect', href: base('identity-access-management-architect') }, { name: 'Dev Lifecycle & Deployment Architect', href: base('dev-lifecycle-deployment-architect') }] },
        ],
      },
      {
        stage: 'architect',
        label: 'Technical Architect (CTA)',
        description: 'Evaluation then Review Board.',
        nodes: [
          { name: 'Technical Architect (CTA)', href: base('technical-architect'), prerequisites: [{ name: 'Application Architect', href: base('application-architect') }, { name: 'System Architect', href: base('system-architect') }] },
          { name: 'CTA - Architect Evaluation', href: base('technical-architect-evaluation'), prerequisites: [{ name: 'Technical Architect (CTA)', href: base('technical-architect') }] },
          { name: 'CTA - Architect Review Board', href: base('technical-architect-review-board'), prerequisites: [{ name: 'CTA - Architect Evaluation', href: base('technical-architect-evaluation') }] },
        ],
      },
    ],
  },
  {
    id: 'sales-service-consultant',
    name: 'Sales & Service Cloud Consultant',
    description: 'Consultant credentials for CRM implementation.',
    stages: [
      {
        stage: 'foundational',
        label: 'Foundation',
        nodes: [
          { name: 'Platform Foundations', href: base('platform-foundations') },
          { name: 'Platform Administrator', href: base('administrator'), note: 'Strongly recommended' },
          { name: 'Platform App Builder', href: base('app-builder'), note: 'Alternative to Admin' },
        ],
      },
      {
        stage: 'intermediate',
        label: 'Consultant',
        nodes: [
          { name: 'Sales Cloud Consultant', href: base('sales-cloud'), prerequisites: [{ name: 'Platform Foundations', href: base('platform-foundations') }, { name: 'Platform Administrator', href: base('administrator') }] },
          { name: 'Service Cloud Consultant', href: base('service-cloud'), prerequisites: [{ name: 'Platform Foundations', href: base('platform-foundations') }, { name: 'Platform Administrator', href: base('administrator') }] },
        ],
      },
      {
        stage: 'specialist',
        label: 'Related consultants',
        nodes: [
          { name: 'Experience Cloud Consultant', href: base('experience-cloud'), prerequisites: [{ name: 'Platform Administrator', href: base('administrator') }, { name: 'Platform Developer I', href: base('developer-1') }] },
          { name: 'Data Cloud Consultant', href: base('data-360-consultant'), prerequisites: [{ name: 'Platform Administrator', href: base('administrator') }, { name: 'Sales Cloud Consultant', href: base('sales-cloud') }] },
          { name: 'Revenue Cloud Consultant', href: base('revenue-cloud-consultant'), prerequisites: [{ name: 'Sales Cloud Consultant', href: base('sales-cloud') }, { name: 'CPQ Administrator', href: base('cpq-administrator') }] },
          { name: 'Field Service Consultant', href: base('field-service'), prerequisites: [{ name: 'Platform Administrator', href: base('administrator') }, { name: 'Service Cloud Consultant', href: base('service-cloud') }] },
          { name: 'Education Cloud Consultant', href: base('education-cloud-consultant'), prerequisites: [{ name: 'Platform Administrator', href: base('administrator') }, { name: 'Service Cloud Consultant', href: base('service-cloud') }] },
          { name: 'Nonprofit Cloud Consultant', href: base('nonprofit-cloud'), prerequisites: [{ name: 'Platform Administrator', href: base('administrator') }, { name: 'Sales Cloud Consultant', href: base('sales-cloud') }] },
          { name: 'Nonprofit Success Pack (NPSP)', href: base('nonprofit-success-pack-consultant'), prerequisites: [{ name: 'Nonprofit Cloud Consultant', href: base('nonprofit-cloud') }] },
        ],
      },
    ],
  },
  {
    id: 'marketing-cloud',
    name: 'Marketing Cloud',
    description: 'From foundations to admin, consultant, and developer.',
    stages: [
      {
        stage: 'foundational',
        label: 'Foundations',
        nodes: [
          { name: 'Marketing Cloud Engagement Foundations', href: base('marketing-cloud-engagement-foundations') },
        ],
      },
      {
        stage: 'intermediate',
        label: 'Specialist & Admin',
        nodes: [
          { name: 'Marketing Cloud Email Specialist', href: base('email-specialist'), prerequisites: [{ name: 'Marketing Cloud Engagement Foundations', href: base('marketing-cloud-engagement-foundations') }] },
          { name: 'Marketing Cloud Engagement Admin', href: base('marketing-cloud-engagement-admin'), prerequisites: [{ name: 'Marketing Cloud Engagement Foundations', href: base('marketing-cloud-engagement-foundations') }] },
        ],
      },
      {
        stage: 'advanced',
        label: 'Consultant & Developer',
        nodes: [
          { name: 'Marketing Cloud Engagement Consultant', href: base('marketing-cloud-consultant'), prerequisites: [{ name: 'Marketing Cloud Email Specialist', href: base('email-specialist') }, { name: 'Marketing Cloud Engagement Admin', href: base('marketing-cloud-engagement-admin') }] },
          { name: 'Marketing Cloud Engagement Developer', href: base('marketing-cloud-engagement-developer'), prerequisites: [{ name: 'Marketing Cloud Engagement Foundations', href: base('marketing-cloud-engagement-foundations') }, { name: 'Platform Developer I', href: base('developer-1') }] },
        ],
      },
      {
        stage: 'ap',
        label: 'Accredited Professional (AP)',
        nodes: [
          { name: 'Marketing Cloud Advanced Cross Channel AP', href: base('marketing-cloud-advanced-cross-channel-ap'), prerequisites: [{ name: 'Marketing Cloud Engagement Consultant', href: base('marketing-cloud-consultant') }] },
          { name: 'Marketing Cloud Intelligence AP', href: base('marketing-cloud-intelligence-ap'), prerequisites: [{ name: 'Marketing Cloud Engagement Admin', href: base('marketing-cloud-engagement-admin') }] },
          { name: 'Marketing Cloud Personalization AP', href: base('marketing-cloud-personalization-ap'), prerequisites: [{ name: 'Marketing Cloud Engagement Consultant', href: base('marketing-cloud-consultant') }] },
        ],
      },
    ],
  },
  {
    id: 'pardot',
    name: 'Account Engagement (Pardot)',
    description: 'Marketing automation and B2B demand gen.',
    stages: [
      {
        stage: 'foundational',
        label: 'Optional base',
        nodes: [
          { name: 'Platform Foundations', href: base('platform-foundations'), note: 'Optional' },
        ],
      },
      {
        stage: 'intermediate',
        label: 'Specialist → Consultant',
        nodes: [
          { name: 'Account Engagement (Pardot) Specialist', href: base('pardot-specialist') },
          { name: 'Account Engagement (Pardot) Consultant', href: base('pardot-consultant'), prerequisites: [{ name: 'Account Engagement (Pardot) Specialist', href: base('pardot-specialist') }] },
        ],
      },
    ],
  },
  {
    id: 'tableau',
    name: 'Tableau',
    description: 'From desktop foundations to architect.',
    stages: [
      {
        stage: 'foundational',
        label: 'Foundations',
        nodes: [
          { name: 'Tableau Desktop Foundations', href: base('tableau-desktop-foundations') },
        ],
      },
      {
        stage: 'intermediate',
        label: 'Analyst & Admin',
        nodes: [
          { name: 'Tableau Data Analyst', href: base('tableau-data-analyst'), prerequisites: [{ name: 'Tableau Desktop Foundations', href: base('tableau-desktop-foundations') }] },
          { name: 'Tableau Server Administrator', href: base('tableau-server-administrator'), prerequisites: [{ name: 'Tableau Desktop Foundations', href: base('tableau-desktop-foundations') }] },
        ],
      },
      {
        stage: 'advanced',
        label: 'Consultant → Architect',
        nodes: [
          { name: 'Tableau Consultant', href: base('tableau-consultant'), prerequisites: [{ name: 'Tableau Data Analyst', href: base('tableau-data-analyst') }, { name: 'Tableau Server Administrator', href: base('tableau-server-administrator') }] },
          { name: 'Tableau Architect', href: base('tableau-architect'), prerequisites: [{ name: 'Tableau Consultant', href: base('tableau-consultant') }] },
        ],
      },
    ],
  },
  {
    id: 'mulesoft',
    name: 'MuleSoft',
    description: 'Integration from foundations to architect.',
    stages: [
      {
        stage: 'foundational',
        label: 'Foundations',
        nodes: [
          { name: 'MuleSoft Integration Foundations', href: base('mulesoft-integration-foundations') },
        ],
      },
      {
        stage: 'intermediate',
        label: 'Developer I & II',
        nodes: [
          { name: 'MuleSoft Developer I', href: base('mulesoft-developer-i'), prerequisites: [{ name: 'MuleSoft Integration Foundations', href: base('mulesoft-integration-foundations') }] },
          { name: 'MuleSoft Developer II', href: base('mulesoft-developer-ii'), prerequisites: [{ name: 'MuleSoft Developer I', href: base('mulesoft-developer-i') }] },
          { name: 'MuleSoft Hyperautomation Developer', href: base('mulesoft-hyperautomation-developer'), prerequisites: [{ name: 'MuleSoft Developer I', href: base('mulesoft-developer-i') }] },
        ],
      },
      {
        stage: 'specialist',
        label: 'Consultant',
        nodes: [
          { name: 'MuleSoft Catalyst Consultant', href: base('mulesoft-catalyst-consultant'), prerequisites: [{ name: 'MuleSoft Developer I', href: base('mulesoft-developer-i') }] },
        ],
      },
      {
        stage: 'architect',
        label: 'Architect',
        nodes: [
          { name: 'MuleSoft Integration Architect', href: base('mulesoft-integration-architect'), prerequisites: [{ name: 'MuleSoft Developer II', href: base('mulesoft-developer-ii') }] },
          { name: 'MuleSoft Platform Architect', href: base('mulesoft-platform-architect'), prerequisites: [{ name: 'MuleSoft Integration Architect', href: base('mulesoft-integration-architect') }] },
        ],
      },
    ],
  },
  {
    id: 'designer',
    name: 'Designer',
    description: 'Strategy and UX design credentials.',
    stages: [
      {
        stage: 'foundational',
        label: 'Optional base',
        nodes: [
          { name: 'Platform Foundations', href: base('platform-foundations'), note: 'Recommended' },
        ],
      },
      {
        stage: 'intermediate',
        label: 'Design certs',
        nodes: [
          { name: 'Platform Strategy Designer', href: base('strategy-designer'), prerequisites: [{ name: 'Platform Foundations', href: base('platform-foundations') }] },
          { name: 'User Experience (UX) Designer', href: base('ux-designer'), prerequisites: [{ name: 'Platform Foundations', href: base('platform-foundations') }] },
        ],
      },
    ],
  },
  {
    id: 'commerce',
    name: 'Commerce (B2B & B2C)',
    description: 'B2B and B2C Commerce roles.',
    stages: [
      {
        stage: 'foundational',
        label: 'Platform base',
        nodes: [
          { name: 'Platform Administrator', href: base('administrator'), note: 'Common base' },
          { name: 'Platform Developer I', href: base('developer-1'), note: 'Alternative base' },
        ],
      },
      {
        stage: 'intermediate',
        label: 'Commerce roles',
        nodes: [
          { name: 'B2C Commerce Developer', href: base('b2c-commerce-developer'), prerequisites: [{ name: 'Platform Developer I', href: base('developer-1') }] },
          { name: 'B2C Solution Architect', href: base('b2c-solution-architect'), prerequisites: [{ name: 'B2C Commerce Developer', href: base('b2c-commerce-developer') }] },
          { name: 'B2C Commerce Architect', href: base('b2c-commerce-architect'), prerequisites: [{ name: 'B2C Solution Architect', href: base('b2c-solution-architect') }] },
          { name: 'B2B Solution Architect', href: base('b2b-solution-architect'), prerequisites: [{ name: 'Platform Administrator', href: base('administrator') }, { name: 'Sales Cloud Consultant', href: base('sales-cloud') }] },
        ],
      },
      {
        stage: 'ap',
        label: 'Commerce AP',
        nodes: [
          { name: 'B2B Commerce Admin AP', href: base('b2b-commerce-admin-ap'), prerequisites: [{ name: 'Platform Administrator', href: base('administrator') }] },
          { name: 'B2B Commerce Developer AP', href: base('b2b-commerce-developer-ap'), prerequisites: [{ name: 'Platform Developer I', href: base('developer-1') }] },
        ],
      },
    ],
  },
  {
    id: 'industry-ap',
    name: 'Industry & Accredited Professional (AP)',
    description: 'Industry-specific and AP credentials (often after Admin or Consultant).',
    stages: [
      {
        stage: 'foundational',
        label: 'Typical prerequisites',
        description: 'Most APs expect Admin or Consultant experience.',
        nodes: [
          { name: 'Platform Administrator', href: base('administrator') },
          { name: 'Sales or Service Cloud Consultant', href: base('sales-cloud') },
        ],
      },
      {
        stage: 'ap',
        label: 'Industry & functional APs',
        nodes: [
          { name: 'Health Cloud AP', href: base('health-cloud-ap'), prerequisites: [{ name: 'Platform Administrator', href: base('administrator') }, { name: 'Service Cloud Consultant', href: base('service-cloud') }] },
          { name: 'Financial Services Cloud AP', href: base('financial-services-cloud-ap'), prerequisites: [{ name: 'Platform Administrator', href: base('administrator') }, { name: 'Sales Cloud Consultant', href: base('sales-cloud') }] },
          { name: 'Consumer Goods Cloud AP', href: base('consumer-goods-cloud-ap'), prerequisites: [{ name: 'Platform Administrator', href: base('administrator') }] },
          { name: 'Consumer Goods TPM AP', href: base('consumer-goods-tpm-ap'), prerequisites: [{ name: 'Platform Administrator', href: base('administrator') }] },
          { name: 'Manufacturing Cloud AP', href: base('manufacturing-cloud-ap'), prerequisites: [{ name: 'Platform Administrator', href: base('administrator') }] },
          { name: 'Energy and Utilities AP', href: base('energy-utilities-ap'), prerequisites: [{ name: 'Platform Administrator', href: base('administrator') }] },
          { name: 'Net Zero Cloud AP', href: base('net-zero-cloud-ap'), prerequisites: [{ name: 'Platform Administrator', href: base('administrator') }] },
          { name: 'Public Sector Solutions AP', href: base('public-sector-solutions-ap'), prerequisites: [{ name: 'Platform Administrator', href: base('administrator') }] },
          { name: 'Contact Center AP', href: base('contact-center-ap'), prerequisites: [{ name: 'Platform Administrator', href: base('administrator') }, { name: 'Service Cloud Consultant', href: base('service-cloud') }] },
          { name: 'Communications Cloud AP', href: base('communications-cloud-ap'), prerequisites: [{ name: 'Platform Administrator', href: base('administrator') }] },
          { name: 'Advanced Field Service AP', href: base('advanced-field-service-ap'), prerequisites: [{ name: 'Field Service Consultant', href: base('field-service') }] },
          { name: 'CPQ and Billing AP', href: base('cpq-billing-ap'), prerequisites: [{ name: 'Platform Administrator', href: base('administrator') }, { name: 'CPQ Administrator', href: base('cpq-administrator') }] },
          { name: 'Order Management Admin AP', href: base('order-management-admin-ap'), prerequisites: [{ name: 'Platform Administrator', href: base('administrator') }] },
          { name: 'Order Management Developer AP', href: base('order-management-developer-ap'), prerequisites: [{ name: 'Platform Developer I', href: base('developer-1') }] },
          { name: 'Process Automation AP', href: base('process-automation-ap'), prerequisites: [{ name: 'Platform Administrator', href: base('administrator') }] },
          { name: 'Loyalty Management AP', href: base('loyalty-management-ap'), prerequisites: [{ name: 'Platform Administrator', href: base('administrator') }] },
          { name: 'Media Cloud AP', href: base('media-cloud-ap'), prerequisites: [{ name: 'Marketing Cloud Engagement Consultant', href: base('marketing-cloud-consultant') }] },
          { name: 'Heroku Developer AP', href: base('heroku-developer-ap'), prerequisites: [{ name: 'Platform Developer I', href: base('developer-1') }] },
        ],
      },
    ],
  },
  {
    id: 'ai-analytics',
    name: 'AI & Analytics',
    description: 'AI and analytics-focused credentials.',
    stages: [
      {
        stage: 'foundational',
        label: 'AI & Analytics base',
        nodes: [
          { name: 'AI Associate', href: base('ai-associate') },
          { name: 'Platform Foundations', href: base('platform-foundations'), note: 'Optional' },
        ],
      },
      {
        stage: 'intermediate',
        label: 'Analytics',
        nodes: [
          { name: 'CRM Analytics & Einstein Discovery Consultant', href: base('crm-analytics-einstein-discovery-consultant'), prerequisites: [{ name: 'Platform Administrator', href: base('administrator') }] },
        ],
      },
    ],
  },
  {
    id: 'integration-heroku',
    name: 'Integration & Heroku',
    description: 'Integration Architect and Heroku.',
    stages: [
      {
        stage: 'foundational',
        label: 'Base',
        nodes: [
          { name: 'Platform Developer I', href: base('developer-1') },
        ],
      },
      {
        stage: 'architect',
        label: 'Architects',
        nodes: [
          { name: 'Integration Architect', href: base('integration-architect'), prerequisites: [{ name: 'Platform Developer I', href: base('developer-1') }, { name: 'Platform Developer II', href: base('developer-2') }] },
          { name: 'Heroku Architect', href: base('heroku-architect'), prerequisites: [{ name: 'Platform Developer I', href: base('developer-1') }, { name: 'Heroku Developer AP', href: base('heroku-developer-ap') }] },
        ],
      },
    ],
  },
]

export function getPathById(id: string): CertificationPath | undefined {
  return CERTIFICATION_PATHS.find((p) => p.id === id)
}
