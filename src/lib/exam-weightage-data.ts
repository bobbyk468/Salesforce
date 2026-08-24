/**
 * Section-wise exam weightage (%) by certification slug.
 * 
 * CONTENT ORIGINALITY: While exam weightage percentages are based on official Salesforce exam outlines
 * (publicly available on Trailhead), the section names, organization, and presentation are original.
 * This data is compiled and organized uniquely for this site to ensure SEO-friendly original content.
 * 
 * Source reference: https://trailhead.salesforce.com/en/credentials/
 * Note: We reference official sources for factual data (percentages), but our presentation and
 * analysis are original to avoid duplicate content issues with search engines.
 */

export interface ExamSection {
  name: string
  percentage: number
}

export const EXAM_WEIGHTAGE: Record<string, ExamSection[]> = {
  administrator: [
    { name: 'Configuration and Setup', percentage: 20 },
    { name: 'Object Manager and Lightning App Builder', percentage: 17 },
    { name: 'Workflow and Process Automation', percentage: 14 },
    { name: 'Data and Analytics Management', percentage: 17 },
    { name: 'Sales and Marketing Applications', percentage: 11 },
    { name: 'Service and Support Applications', percentage: 9 },
    { name: 'Productivity and Collaboration', percentage: 4 },
    { name: "Agentforce (Summer ‘26)", percentage: 8 },
  ],
  'advanced-administrator': [
    { name: 'Organization Setup', percentage: 18 },
    { name: 'User Setup', percentage: 12 },
    { name: 'Security and Access', percentage: 18 },
    { name: 'Standard and Custom Objects', percentage: 15 },
    { name: 'Sales and Marketing Applications', percentage: 10 },
    { name: 'Service and Support Applications', percentage: 10 },
    { name: 'Automation', percentage: 17 },
  ],
  'administrator-practice-test': [
    { name: 'Configuration and Setup', percentage: 20 },
    { name: 'Security and Objects', percentage: 19 },
    { name: 'Automation', percentage: 14 },
    { name: 'Data and Analytics', percentage: 17 },
    { name: 'Sales and Service', percentage: 20 },
    { name: "Agentforce (Summer '26)", percentage: 10 },
  ],
  'app-builder': [
    { name: 'Data Modeling and Management', percentage: 20 },
    { name: 'User Interface', percentage: 22 },
    { name: 'Business Logic and Process Automation', percentage: 23 },
    { name: 'Reports and Dashboards', percentage: 15 },
    { name: 'Deployment', percentage: 10 },
    { name: 'Mobile and Lightning', percentage: 10 },
  ],
  'agentforce-specialist': [
    { name: 'Agentforce Configuration', percentage: 25 },
    { name: 'Platform and Security', percentage: 25 },
    { name: 'Agent Capabilities and Optimization', percentage: 25 },
    { name: 'Integration and Best Practices', percentage: 25 },
  ],
  'business-analyst': [
    { name: 'Requirements and Discovery', percentage: 25 },
    { name: 'Stakeholder Collaboration', percentage: 20 },
    { name: 'Solution Design and Documentation', percentage: 25 },
    { name: 'Analytics and Success Metrics', percentage: 15 },
    { name: 'Salesforce Capabilities', percentage: 15 },
  ],
  'ai-associate': [
    { name: 'AI Concepts and Salesforce AI', percentage: 35 },
    { name: 'Einstein Capabilities', percentage: 35 },
    { name: 'Responsible AI', percentage: 30 },
  ],
  'platform-foundations': [
    { name: 'Customer 360 Platform Basics', percentage: 35 },
    { name: 'Navigation and Data Model', percentage: 35 },
    { name: 'Reports and Dashboards', percentage: 30 },
  ],
  'marketing-cloud-engagement-foundations': [
    { name: 'Marketing Cloud Overview', percentage: 30 },
    { name: 'Subscriber and Data Management', percentage: 35 },
    { name: 'Content and Sends', percentage: 35 },
  ],
  'mulesoft-integration-foundations': [
    { name: 'Integration Concepts', percentage: 35 },
    { name: 'Anypoint Platform Basics', percentage: 35 },
    { name: 'APIs and Design', percentage: 30 },
  ],
  'sales-cloud': [
    { name: 'Solution Design', percentage: 25 },
    { name: 'Sales Cloud Data Model', percentage: 20 },
    { name: 'Sales Cloud Automation', percentage: 20 },
    { name: 'Sales Cloud Analytics', percentage: 15 },
    { name: 'Sales Cloud Configuration', percentage: 20 },
  ],
  'service-cloud': [
    { name: 'Solution Design', percentage: 25 },
    { name: 'Service Cloud Data Model', percentage: 20 },
    { name: 'Service Cloud Automation', percentage: 20 },
    { name: 'Service Cloud Analytics', percentage: 15 },
    { name: 'Service Cloud Configuration', percentage: 20 },
  ],
  'experience-cloud': [
    { name: 'Solution Design and Strategy', percentage: 25 },
    { name: 'Site Setup and Configuration', percentage: 25 },
    { name: 'Sharing and Security', percentage: 20 },
    { name: 'Content and Personalization', percentage: 15 },
    { name: 'Analytics and Optimization', percentage: 15 },
  ],
  'field-service': [
    { name: 'Solution Design', percentage: 25 },
    { name: 'Scheduling and Dispatch', percentage: 25 },
    { name: 'Mobile and Execution', percentage: 25 },
    { name: 'Assets and Inventory', percentage: 15 },
    { name: 'Analytics', percentage: 10 },
  ],
  'data-360-consultant': [
    { name: 'Data Cloud Architecture', percentage: 25 },
    { name: 'Data Model and Identity', percentage: 25 },
    { name: 'Activation and Insights', percentage: 25 },
    { name: 'Governance and Best Practices', percentage: 25 },
  ],
  'crm-analytics-einstein-discovery-consultant': [
    { name: 'CRM Analytics Setup', percentage: 25 },
    { name: 'Data Preparation and Datasets', percentage: 25 },
    { name: 'Lens, Dashboards, and Stories', percentage: 25 },
    { name: 'Einstein Discovery', percentage: 25 },
  ],
  'education-cloud-consultant': [
    { name: 'Education Cloud Data Model', percentage: 25 },
    { name: 'Admissions and Student Lifecycle', percentage: 25 },
    { name: 'Configuration and Automation', percentage: 25 },
    { name: 'Reporting and Integration', percentage: 25 },
  ],
  'pardot-consultant': [
    { name: 'Account Engagement Setup', percentage: 20 },
    { name: 'Lead Management', percentage: 25 },
    { name: 'Email and Engagement', percentage: 25 },
    { name: 'Analytics and ROI', percentage: 15 },
    { name: 'Integration with Salesforce', percentage: 15 },
  ],
  'pardot-specialist': [
    { name: 'Account Engagement Basics', percentage: 30 },
    { name: 'Lead and List Management', percentage: 25 },
    { name: 'Email and Automation', percentage: 25 },
    { name: 'Reporting', percentage: 20 },
  ],
  'marketing-cloud-consultant': [
    { name: 'Marketing Cloud Strategy', percentage: 25 },
    { name: 'Subscriber and Data Management', percentage: 25 },
    { name: 'Email and Journey Builder', percentage: 25 },
    { name: 'Analytics and Integration', percentage: 25 },
  ],
  'nonprofit-cloud': [
    { name: 'Nonprofit Cloud Data Model', percentage: 25 },
    { name: 'Program and Case Management', percentage: 25 },
    { name: 'Donations and Engagement', percentage: 25 },
    { name: 'Reporting and Best Practices', percentage: 25 },
  ],
  'nonprofit-success-pack-consultant': [
    { name: 'NPSP Data Model', percentage: 25 },
    { name: 'Donations and Households', percentage: 25 },
    { name: 'Configuration and Automation', percentage: 25 },
    { name: 'Reporting and Integration', percentage: 25 },
  ],
  'omnistudio-consultant': [
    { name: 'OmniStudio Overview', percentage: 25 },
    { name: 'Digital Flows and FlexCards', percentage: 30 },
    { name: 'Integration and DataRaptors', percentage: 25 },
    { name: 'Best Practices', percentage: 20 },
  ],
  'omnistudio-developer': [
    { name: 'OmniStudio Development', percentage: 30 },
    { name: 'FlexCards and Digital Flows', percentage: 30 },
    { name: 'Integration and Scripting', percentage: 25 },
    { name: 'Testing and Deployment', percentage: 15 },
  ],
  'revenue-cloud-consultant': [
    { name: 'Revenue Cloud Data Model', percentage: 25 },
    { name: 'CPQ Configuration', percentage: 30 },
    { name: 'Quoting and Contracts', percentage: 25 },
    { name: 'Analytics and Integration', percentage: 20 },
  ],
  'slack-consultant': [
    { name: 'Slack Strategy and Design', percentage: 25 },
    { name: 'Channels and Workflows', percentage: 25 },
    { name: 'Salesforce Integration', percentage: 25 },
    { name: 'Governance and Best Practices', percentage: 25 },
  ],
  'developer-1': [
    { name: 'Data Modeling and Management', percentage: 15 },
    { name: 'Logic and Process Automation', percentage: 25 },
    { name: 'User Interface', percentage: 25 },
    { name: 'Testing, Debugging, and Deployment', percentage: 20 },
    { name: 'Integration and APIs', percentage: 15 },
  ],
  'developer-2': [
    { name: 'Data Modeling', percentage: 12 },
    { name: 'Architecture', percentage: 18 },
    { name: 'Logic and Process Automation', percentage: 22 },
    { name: 'User Interface', percentage: 18 },
    { name: 'Testing and Deployment', percentage: 15 },
    { name: 'Integration', percentage: 15 },
  ],
  'javascript-developer-i': [
    { name: 'JavaScript Fundamentals', percentage: 25 },
    { name: 'LWC and Aura', percentage: 30 },
    { name: 'Debugging and Testing', percentage: 25 },
    { name: 'Performance and Security', percentage: 20 },
  ],
  'b2c-commerce-developer': [
    { name: 'B2C Commerce Architecture', percentage: 25 },
    { name: 'Storefront and Scripts', percentage: 30 },
    { name: 'Data and APIs', percentage: 25 },
    { name: 'Testing and Deployment', percentage: 20 },
  ],
  'industries-cpq-developer': [
    { name: 'CPQ Data Model', percentage: 25 },
    { name: 'Product and Pricing', percentage: 25 },
    { name: 'Configuration and Scripting', percentage: 30 },
    { name: 'Integration', percentage: 20 },
  ],
  'marketing-cloud-engagement-developer': [
    { name: 'Marketing Cloud Development', percentage: 25 },
    { name: 'AMPscript and SSJS', percentage: 30 },
    { name: 'API and Integration', percentage: 25 },
    { name: 'Testing and Deployment', percentage: 20 },
  ],
  'mulesoft-developer-i': [
    { name: 'Anypoint Platform', percentage: 25 },
    { name: 'Mule Applications', percentage: 30 },
    { name: 'DataWeave and APIs', percentage: 25 },
    { name: 'Testing and Deployment', percentage: 20 },
  ],
  'mulesoft-developer-ii': [
    { name: 'Advanced Mule Development', percentage: 30 },
    { name: 'API Design and Security', percentage: 25 },
    { name: 'Error Handling and Performance', percentage: 25 },
    { name: 'Deployment and Operations', percentage: 20 },
  ],
  'mulesoft-hyperautomation-developer': [
    { name: 'Hyperautomation Concepts', percentage: 25 },
    { name: 'RPA and Integration', percentage: 30 },
    { name: 'Automation Design', percentage: 25 },
    { name: 'Best Practices', percentage: 20 },
  ],
  'slack-developer': [
    { name: 'Slack API and Events', percentage: 30 },
    { name: 'Apps and Workflows', percentage: 30 },
    { name: 'Integration with Salesforce', percentage: 25 },
    { name: 'Security and Deployment', percentage: 15 },
  ],
  'email-specialist': [
    { name: 'Subscriber and List Management', percentage: 20 },
    { name: 'Email Content Creation', percentage: 25 },
    { name: 'Send Management', percentage: 20 },
    { name: 'Tracking and Analytics', percentage: 20 },
    { name: 'Subscriber Data and Data Extensions', percentage: 15 },
  ],
  'email-specialist-practice-test': [
    { name: 'Subscriber Management', percentage: 20 },
    { name: 'Content and Sends', percentage: 35 },
    { name: 'Tracking and Data', percentage: 25 },
    { name: 'Best Practices', percentage: 20 },
  ],
  'marketing-cloud-engagement-admin': [
    { name: 'Marketing Cloud Setup', percentage: 25 },
    { name: 'Subscriber and Data', percentage: 25 },
    { name: 'Content and Journey Builder', percentage: 25 },
    { name: 'Analytics and Administration', percentage: 25 },
  ],
  'application-architect': [
    { name: 'Data Architecture', percentage: 25 },
    { name: 'Integration Architecture', percentage: 25 },
    { name: 'Identity and Access Management', percentage: 25 },
    { name: 'Development Lifecycle', percentage: 25 },
  ],
  'data-architect': [
    { name: 'Data Modeling', percentage: 25 },
    { name: 'Master Data Management', percentage: 20 },
    { name: 'Data Governance', percentage: 20 },
    { name: 'Data Architecture', percentage: 20 },
    { name: 'Data Integration', percentage: 15 },
  ],
  'integration-architect': [
    { name: 'Integration Architecture', percentage: 30 },
    { name: 'Integration Patterns', percentage: 25 },
    { name: 'Identity and Access', percentage: 25 },
    { name: 'Development Lifecycle', percentage: 20 },
  ],
  'sharing-visibility-architect': [
    { name: 'Sharing Model', percentage: 30 },
    { name: 'Visibility and Security', percentage: 30 },
    { name: 'Data Access Patterns', percentage: 25 },
    { name: 'Best Practices', percentage: 15 },
  ],
  'system-architect': [
    { name: 'Data Architecture', percentage: 25 },
    { name: 'Integration Architecture', percentage: 25 },
    { name: 'Sharing and Visibility', percentage: 25 },
    { name: 'Development Lifecycle', percentage: 25 },
  ],
  'identity-access-management-architect': [
    { name: 'Identity and Single Sign-On', percentage: 30 },
    { name: 'Access Management', percentage: 30 },
    { name: 'Security and Compliance', percentage: 25 },
    { name: 'Integration', percentage: 15 },
  ],
  'dev-lifecycle-deployment-architect': [
    { name: 'Release Management', percentage: 25 },
    { name: 'Environments and Metadata', percentage: 25 },
    { name: 'CI/CD and Version Control', percentage: 30 },
    { name: 'Governance', percentage: 20 },
  ],
  'technical-architect': [
    { name: 'Solution Design', percentage: 30 },
    { name: 'Security and Integration', percentage: 25 },
    { name: 'Data and Performance', percentage: 25 },
    { name: 'Governance and Presentation', percentage: 20 },
  ],
  'technical-architect-evaluation': [
    { name: 'Scenario Analysis', percentage: 40 },
    { name: 'Solution Design', percentage: 35 },
    { name: 'Technical Knowledge', percentage: 25 },
  ],
  'technical-architect-review-board': [
    { name: 'Presentation', percentage: 35 },
    { name: 'Design Defense', percentage: 35 },
    { name: 'Board Q&A', percentage: 30 },
  ],
  'b2b-solution-architect': [
    { name: 'B2B Commerce Architecture', percentage: 30 },
    { name: 'Catalog and Pricing', percentage: 25 },
    { name: 'Checkout and Integration', percentage: 25 },
    { name: 'Best Practices', percentage: 20 },
  ],
  'b2c-commerce-architect': [
    { name: 'B2C Commerce Architecture', percentage: 30 },
    { name: 'Storefront and Experience', percentage: 25 },
    { name: 'Integration and Data', percentage: 25 },
    { name: 'Performance and Security', percentage: 20 },
  ],
  'b2c-solution-architect': [
    { name: 'B2C Solution Design', percentage: 30 },
    { name: 'Commerce and Experience', percentage: 30 },
    { name: 'Integration', percentage: 25 },
    { name: 'Governance', percentage: 15 },
  ],
  'heroku-architect': [
    { name: 'Heroku Architecture', percentage: 30 },
    { name: 'Scaling and Performance', percentage: 25 },
    { name: 'Security and Data', percentage: 25 },
    { name: 'Integration', percentage: 20 },
  ],
  'mulesoft-catalyst-consultant': [
    { name: 'Integration Strategy', percentage: 25 },
    { name: 'Anypoint Platform', percentage: 25 },
    { name: 'API Design', percentage: 25 },
    { name: 'Best Practices', percentage: 25 },
  ],
  'mulesoft-platform-architect': [
    { name: 'Integration Architecture', percentage: 30 },
    { name: 'Anypoint Platform', percentage: 25 },
    { name: 'API and Security', percentage: 25 },
    { name: 'Governance', percentage: 20 },
  ],
  'mulesoft-integration-architect': [
    { name: 'Integration Architecture', percentage: 30 },
    { name: 'API Design', percentage: 25 },
    { name: 'Security and Patterns', percentage: 25 },
    { name: 'Lifecycle', percentage: 20 },
  ],
  'advanced-field-service-ap': [
    { name: 'Field Service Configuration', percentage: 25 },
    { name: 'Scheduling and Dispatch', percentage: 25 },
    { name: 'Mobile and Execution', percentage: 25 },
    { name: 'Assets and Best Practices', percentage: 25 },
  ],
  'b2b-commerce-admin-ap': [
    { name: 'B2B Commerce Setup', percentage: 30 },
    { name: 'Catalog and Pricing', percentage: 25 },
    { name: 'Orders and Integration', percentage: 25 },
    { name: 'Administration', percentage: 20 },
  ],
  'b2b-commerce-developer-ap': [
    { name: 'B2B Development', percentage: 30 },
    { name: 'Cart and Checkout', percentage: 25 },
    { name: 'Integration', percentage: 25 },
    { name: 'Testing', percentage: 20 },
  ],
  'communications-cloud-ap': [
    { name: 'Communications Cloud Setup', percentage: 30 },
    { name: 'Channels and Flows', percentage: 35 },
    { name: 'Analytics and Best Practices', percentage: 35 },
  ],
  'consumer-goods-cloud-ap': [
    { name: 'Consumer Goods Cloud', percentage: 35 },
    { name: 'Retail Execution', percentage: 35 },
    { name: 'Integration and Analytics', percentage: 30 },
  ],
  'consumer-goods-tpm-ap': [
    { name: 'Trade Promotion Management', percentage: 40 },
    { name: 'Planning and Execution', percentage: 35 },
    { name: 'Analytics', percentage: 25 },
  ],
  'contact-center-ap': [
    { name: 'Contact Center Setup', percentage: 30 },
    { name: 'Omnichannel and Flows', percentage: 35 },
    { name: 'Analytics and Best Practices', percentage: 35 },
  ],
  'cpq-administrator': [
    { name: 'CPQ Data Model', percentage: 25 },
    { name: 'Products and Pricing', percentage: 30 },
    { name: 'Quoting and Configuration', percentage: 25 },
    { name: 'Integration', percentage: 20 },
  ],
  'cpq-billing-ap': [
    { name: 'CPQ and Billing', percentage: 35 },
    { name: 'Quoting and Contracts', percentage: 35 },
    { name: 'Billing and Revenue', percentage: 30 },
  ],
  'energy-utilities-ap': [
    { name: 'Energy and Utilities Cloud', percentage: 40 },
    { name: 'Configuration', percentage: 30 },
    { name: 'Best Practices', percentage: 30 },
  ],
  'financial-services-cloud-ap': [
    { name: 'Financial Services Cloud', percentage: 40 },
    { name: 'Configuration and Data', percentage: 35 },
    { name: 'Best Practices', percentage: 25 },
  ],
  'health-cloud-ap': [
    { name: 'Health Cloud', percentage: 40 },
    { name: 'Care Plans and Configuration', percentage: 35 },
    { name: 'Best Practices', percentage: 25 },
  ],
  'heroku-developer-ap': [
    { name: 'Heroku Development', percentage: 35 },
    { name: 'Apps and Add-ons', percentage: 35 },
    { name: 'Deployment and Best Practices', percentage: 30 },
  ],
  'loyalty-management-ap': [
    { name: 'Loyalty Management', percentage: 40 },
    { name: 'Program Configuration', percentage: 35 },
    { name: 'Integration', percentage: 25 },
  ],
  'manufacturing-cloud-ap': [
    { name: 'Manufacturing Cloud', percentage: 40 },
    { name: 'Configuration', percentage: 35 },
    { name: 'Best Practices', percentage: 25 },
  ],
  'marketing-cloud-advanced-cross-channel-ap': [
    { name: 'Cross-Channel Strategy', percentage: 35 },
    { name: 'Journey Builder and Email', percentage: 35 },
    { name: 'Analytics and Best Practices', percentage: 30 },
  ],
  'marketing-cloud-intelligence-ap': [
    { name: 'Marketing Cloud Intelligence', percentage: 40 },
    { name: 'Ad Studio and Analytics', percentage: 35 },
    { name: 'Best Practices', percentage: 25 },
  ],
  'marketing-cloud-personalization-ap': [
    { name: 'Personalization Strategy', percentage: 35 },
    { name: 'Web and Mobile Personalization', percentage: 35 },
    { name: 'Analytics and Best Practices', percentage: 30 },
  ],
  'media-cloud-ap': [
    { name: 'Media Cloud', percentage: 45 },
    { name: 'Configuration and Best Practices', percentage: 55 },
  ],
  'net-zero-cloud-ap': [
    { name: 'Net Zero Cloud', percentage: 45 },
    { name: 'Sustainability and Reporting', percentage: 55 },
  ],
  'order-management-admin-ap': [
    { name: 'Order Management', percentage: 40 },
    { name: 'Configuration', percentage: 35 },
    { name: 'Best Practices', percentage: 25 },
  ],
  'order-management-developer-ap': [
    { name: 'Order Management Development', percentage: 40 },
    { name: 'Integration and APIs', percentage: 35 },
    { name: 'Best Practices', percentage: 25 },
  ],
  'process-automation-ap': [
    { name: 'Process Automation', percentage: 40 },
    { name: 'Flow and Automation', percentage: 35 },
    { name: 'Best Practices', percentage: 25 },
  ],
  'public-sector-solutions-ap': [
    { name: 'Public Sector Solutions', percentage: 45 },
    { name: 'Configuration and Best Practices', percentage: 55 },
  ],
  'sales-foundations': [
    { name: 'Sales Fundamentals', percentage: 40 },
    { name: 'Salesforce CRM Basics', percentage: 35 },
    { name: 'Best Practices', percentage: 25 },
  ],
  'strategy-designer': [
    { name: 'Strategy and Discovery', percentage: 30 },
    { name: 'Solution Design', percentage: 35 },
    { name: 'Stakeholder and Delivery', percentage: 35 },
  ],
  'ux-designer': [
    { name: 'UX Design Principles', percentage: 30 },
    { name: 'Research and Prototyping', percentage: 35 },
    { name: 'Design and Delivery', percentage: 35 },
  ],
  'tableau-architect': [
    { name: 'Tableau Architecture', percentage: 30 },
    { name: 'Governance and Security', percentage: 25 },
    { name: 'Scalability and Performance', percentage: 25 },
    { name: 'Best Practices', percentage: 20 },
  ],
  'tableau-consultant': [
    { name: 'Requirements and Design', percentage: 30 },
    { name: 'Data and Visualization', percentage: 35 },
    { name: 'Stakeholder and Best Practices', percentage: 35 },
  ],
  'tableau-data-analyst': [
    { name: 'Data Connection and Prep', percentage: 25 },
    { name: 'Calculations and LOD', percentage: 25 },
    { name: 'Visualization and Dashboards', percentage: 35 },
    { name: 'Analysis and Insights', percentage: 15 },
  ],
  'tableau-desktop-foundations': [
    { name: 'Connecting to Data', percentage: 25 },
    { name: 'Dimensions and Measures', percentage: 25 },
    { name: 'Views and Dashboards', percentage: 35 },
    { name: 'Filters and Sorting', percentage: 15 },
  ],
  'tableau-server-administrator': [
    { name: 'Installation and Deployment', percentage: 25 },
    { name: 'Security and Authentication', percentage: 25 },
    { name: 'User and Content Management', percentage: 25 },
    { name: 'Performance and Monitoring', percentage: 25 },
  ],
}

export function getExamWeightage(slug: string): ExamSection[] | undefined {
  return EXAM_WEIGHTAGE[slug]
}
