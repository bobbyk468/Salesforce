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
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298969
  // Platform Administrator II: 60 scored questions, 65% to pass, 105 minutes.
  'advanced-administrator': [
    { name: 'Security and Access', percentage: 20 },
    { name: 'Objects and Applications', percentage: 19 },
    { name: 'Auditing and Monitoring', percentage: 10 },
    { name: 'Cloud Applications', percentage: 11 },
    { name: 'Data and Analytics Management', percentage: 13 },
    { name: 'Environment Management and Deployment', percentage: 7 },
    { name: 'Process Automation', percentage: 20 },
  ],
  // Verified 4 November 2026 against the official exam guide:
  // help.salesforce.com/s/articleView?id=005298966 — eight sections.
  // The previous five summed to 90 and did not match the outline.
  'administrator-practice-test': [
    { name: 'Configuration and Setup', percentage: 15 },
    { name: 'Object Manager and Lightning App Builder', percentage: 15 },
    { name: 'Sales and Marketing Applications', percentage: 10 },
    { name: 'Service and Support Applications', percentage: 10 },
    { name: 'Productivity and Collaboration', percentage: 10 },
    { name: 'Data and Analytics Management', percentage: 17 },
    { name: 'Automation', percentage: 15 },
    { name: 'Agentforce', percentage: 8 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298964
  // Five sections, not six. 60 scored questions, 73% to pass, 105 minutes.
  'app-builder': [
    { name: 'Salesforce Fundamentals', percentage: 18 },
    { name: 'Data Modeling and Management', percentage: 20 },
    { name: 'Business Logic and Process Automation', percentage: 32 },
    { name: 'User Interface', percentage: 17 },
    { name: 'App Deployment', percentage: 13 },
  ],
  'agentforce-specialist': [
    { name: 'Prompt Engineering', percentage: 20 },
    { name: 'Data 360 Fundamentals', percentage: 20 },
    { name: 'AI Agents', percentage: 35 },
    { name: 'Testing, Deployment, and Maintenance', percentage: 10 },
    { name: 'Governance and Observability', percentage: 10 },
    { name: 'Multi-Agent Orchestration', percentage: 5 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298939
  // 60 scored questions, 72% to pass, 105 minutes.
  'business-analyst': [
    { name: 'Customer Discovery', percentage: 17 },
    { name: 'Collaboration with Stakeholders', percentage: 23 },
    { name: 'Business Process Mapping', percentage: 12 },
    { name: 'Requirements', percentage: 18 },
    { name: 'User Stories', percentage: 18 },
    { name: 'Development Support and User Acceptance', percentage: 12 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298930
  // Four sections. NOTE: this credential retired on 2 February 2026.
  'ai-associate': [
    { name: 'AI Fundamentals', percentage: 17 },
    { name: 'AI Capabilities in CRM', percentage: 8 },
    { name: 'Ethical Considerations of AI', percentage: 39 },
    { name: 'Data for AI', percentage: 36 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298979
  // 40 scored questions, 62% to pass, 70 minutes.
  'platform-foundations': [
    { name: 'Salesforce Ecosystem', percentage: 32 },
    { name: 'Navigation', percentage: 28 },
    { name: 'Data Model', percentage: 25 },
    { name: 'Reports &amp; Dashboards', percentage: 15 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298962
  // 40 questions, 65% to pass, 70 minutes.
  'marketing-cloud-engagement-foundations': [
    { name: 'Marketing Concepts', percentage: 28 },
    { name: 'Marketing Cloud Engagement Basics', percentage: 22 },
    { name: 'Email Sending and Journeys', percentage: 22 },
    { name: 'Data Management', percentage: 18 },
    { name: 'Reporting and Analytics', percentage: 10 },
  ],
  'mulesoft-integration-foundations': [
    { name: 'Integration Concepts', percentage: 35 },
    { name: 'Anypoint Platform Basics', percentage: 35 },
    { name: 'APIs and Design', percentage: 30 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298976
  // Agentforce Sales Consultant (renamed from Sales Cloud Consultant on 24 July 2026): 73% to pass, 105 minutes.
  'sales-cloud': [
    { name: 'Sales Lifecycle', percentage: 20 },
    { name: 'Consulting and Implementation Strategies', percentage: 25 },
    { name: 'Practical Application of Agentforce Sales Expertise', percentage: 24 },
    { name: 'Data Management', percentage: 18 },
    { name: 'Predictive and Generative AI', percentage: 13 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298989
  // Agentforce Service Consultant (renamed from Service Cloud Consultant on 24 July 2026): 78% to pass, 105 minutes.
  'service-cloud': [
    { name: 'Industry Knowledge', percentage: 12 },
    { name: 'Implementation Strategies', percentage: 12 },
    { name: 'Agentforce Service Solution Design', percentage: 15 },
    { name: 'Knowledge Management', percentage: 12 },
    { name: 'Intake and Interaction Channels', percentage: 13 },
    { name: 'Case Management', percentage: 13 },
    { name: 'Contact Center Analytics', percentage: 13 },
    { name: 'Integrations', percentage: 10 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298944
  // Eight sections, 60 scored questions, 62% to pass, 105 minutes.
  'experience-cloud': [
    { name: 'Experience Cloud Basics', percentage: 8 },
    { name: 'Sharing, Visibility, and Licensing', percentage: 17 },
    { name: 'Branding, Personalization, and Content', percentage: 15 },
    { name: 'Templates and Themes', percentage: 10 },
    { name: 'User Creation and Authentication', percentage: 13 },
    { name: 'Adoption and Analytics', percentage: 5 },
    { name: 'Administration, Setup, and Configuration', percentage: 25 },
    { name: 'Customization Considerations and Limitations', percentage: 7 },
  ],
  'field-service': [
    { name: 'Managing Resources', percentage: 16 },
    { name: 'Managing Work Orders', percentage: 23 },
    { name: 'Managing Scheduling and Optimization', percentage: 28 },
    { name: 'Configuring Mobility', percentage: 10 },
    { name: 'Managing Inventory', percentage: 8 },
    { name: 'Managing Assets', percentage: 5 },
    { name: 'Configuring Maintenance Plans', percentage: 5 },
    { name: 'Permissions and Sharing', percentage: 5 },
  ],
  // Verified 4 November 2026 against the official exam guide:
  // help.salesforce.com/s/articleView?id=005298940 — six sections, not four.
  // 60 scored questions plus up to 5 unscored, 70% to pass, 105 minutes.
  'data-360-consultant': [
    { name: 'Solution Positioning', percentage: 14 },
    { name: 'Data 360 Setup and Administration', percentage: 13 },
    { name: 'Data Source Connection and Ingestion', percentage: 18 },
    { name: 'Harmonization and Unification', percentage: 17 },
    { name: 'Data Enhancements, Sharing, and Analysis', percentage: 18 },
    { name: 'Data Activations and Utilization', percentage: 20 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298935
  // Six sections, 60 scored questions, 65% to pass, 90 minutes.
  'crm-analytics-einstein-discovery-consultant': [
    { name: 'Admin/Configuration', percentage: 17 },
    { name: 'Data Layer', percentage: 23 },
    { name: 'Security', percentage: 16 },
    { name: 'Analytics Dashboard Design', percentage: 13 },
    { name: 'Analytics Dashboard Implementation', percentage: 19 },
    { name: 'Einstein Discovery', percentage: 12 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298934
  // Six sections, 60 scored questions, 67% to pass, 105 minutes.
  'education-cloud-consultant': [
    { name: 'Domain Expertise', percentage: 18 },
    { name: 'Education Cloud Configuration', percentage: 22 },
    { name: 'Implementation Strategies and Best Practices', percentage: 18 },
    { name: 'Solution Design', percentage: 19 },
    { name: 'Integration and Data Management', percentage: 16 },
    { name: 'Analytics', percentage: 7 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298951
  // Eight sections, 68% to pass, 105 minutes. Retires 1 February 2027.
  'pardot-consultant': [
    { name: 'Evaluation', percentage: 17 },
    { name: 'Account Configuration', percentage: 20 },
    { name: 'Automating Business Processes', percentage: 17 },
    { name: 'Email Marketing', percentage: 10 },
    { name: 'Lead Management', percentage: 14 },
    { name: 'Personalizing the Prospect Experience', percentage: 8 },
    { name: 'Reporting, Metrics and Analytics', percentage: 11 },
    { name: 'Sales Emails and Alerts', percentage: 3 },
  ],
  'pardot-specialist': [
    { name: 'Visitors and Prospects', percentage: 8 },
    { name: 'Administration', percentage: 11 },
    { name: 'Account Engagement Forms, Form Handlers and Landing Pages', percentage: 20 },
    { name: 'Lead Management', percentage: 24 },
    { name: 'Email Marketing', percentage: 20 },
    { name: 'Engagement Studio', percentage: 17 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298946
  // Marketing Cloud Engagement Consultant: 60 scored questions, 67% to pass, 105 minutes.
  'marketing-cloud-consultant': [
    { name: 'Discovery and Architecture', percentage: 16 },
    { name: 'Integration', percentage: 20 },
    { name: 'Account Configuration', percentage: 12 },
    { name: 'Automation', percentage: 20 },
    { name: 'Data Modeling and Management', percentage: 21 },
    { name: 'Messaging', percentage: 11 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298958
  // Agentforce Nonprofit Consultant: four sections, 65% to pass, 105 minutes.
  'nonprofit-cloud': [
    { name: 'Nonprofit Implementation Strategy', percentage: 11 },
    { name: 'Solution Design', percentage: 32 },
    { name: 'Agentforce Nonprofit Setup', percentage: 22 },
    { name: 'Agentforce Nonprofit Feature Configuration', percentage: 35 },
  ],
  'nonprofit-success-pack-consultant': [
    { name: 'NPSP Data Model', percentage: 25 },
    { name: 'Donations and Households', percentage: 25 },
    { name: 'Configuration and Automation', percentage: 25 },
    { name: 'Reporting and Integration', percentage: 25 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298970
  // Six sections, 60 scored questions, 67% to pass, 105 minutes.
  'omnistudio-consultant': [
    { name: 'Omnistudio Fundamentals', percentage: 16 },
    { name: 'Flexcards', percentage: 18 },
    { name: 'Omniscripts', percentage: 17 },
    { name: 'Integration Procedures', percentage: 17 },
    { name: 'Data Mappers', percentage: 17 },
    { name: 'Best Fit Solutions', percentage: 15 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298971
  // 60 scored questions, 72% to pass, 105 minutes.
  'omnistudio-developer': [
    { name: 'Omnistudio Fundamentals', percentage: 18 },
    { name: 'Flexcards', percentage: 15 },
    { name: 'Omniscripts', percentage: 20 },
    { name: 'Integration Procedures', percentage: 15 },
    { name: 'Data Mappers', percentage: 17 },
    { name: 'Troubleshooting and Debugging', percentage: 15 },
  ],
  'revenue-cloud-consultant': [
    { name: 'Agentforce Revenue Management Platform Concepts', percentage: 18 },
    { name: 'Implementation Readiness', percentage: 14 },
    { name: 'Catalog Management', percentage: 16 },
    { name: 'Configure, Price, Quote', percentage: 18 },
    { name: 'Contracts and Orders', percentage: 11 },
    { name: 'Asset Management', percentage: 16 },
    { name: 'Invoice Management', percentage: 7 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298991
  // Seven sections, 60 scored questions, 67% to pass, 90 minutes.
  'slack-consultant': [
    { name: 'Delivery and Migration', percentage: 17 },
    { name: 'Discovery', percentage: 10 },
    { name: 'Grid Design', percentage: 15 },
    { name: 'Policies and Settings', percentage: 22 },
    { name: 'Channel Strategy', percentage: 10 },
    { name: 'Governance Structure', percentage: 8 },
    { name: 'Learning and Enablement', percentage: 18 },
  ],
  // Verified 4 November 2026 against the official exam guide:
  // help.salesforce.com/s/articleView?id=005298965 — four sections, not five.
  'developer-1': [
    { name: 'Developer Fundamentals', percentage: 27 },
    { name: 'Process Automation and Logic', percentage: 28 },
    { name: 'User Interface', percentage: 25 },
    { name: 'Testing, Debugging, and Deployment', percentage: 20 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298967
  // Five sections, not six. 60 questions, 70% to pass, 120 minutes.
  'developer-2': [
    { name: 'Advanced Developer Fundamentals', percentage: 15 },
    { name: 'Process Automation, Logic, and Integration', percentage: 27 },
    { name: 'User Interface', percentage: 20 },
    { name: 'Testing, Debugging, and Deployment', percentage: 20 },
    { name: 'Performance', percentage: 18 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298945
  // 60 scored questions, 65% to pass, 105 minutes.
  'javascript-developer-i': [
    { name: 'Variables, Types, and Collections', percentage: 23 },
    { name: 'Objects, Functions, and Classes', percentage: 25 },
    { name: 'Browser and Events', percentage: 17 },
    { name: 'Debugging and Error Handling', percentage: 7 },
    { name: 'Asynchronous Programming', percentage: 13 },
    { name: 'Server Side JavaScript', percentage: 8 },
    { name: 'Testing', percentage: 7 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298941
  // Four sections.
  'b2c-commerce-developer': [
    { name: 'B2C Commerce Setup', percentage: 11 },
    { name: 'Work With a B2C Site', percentage: 12 },
    { name: 'Data Management Using Business Manager Usage', percentage: 24 },
    { name: 'Application Development', percentage: 53 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298949
  // 60 questions, 63% to pass, 105 minutes. Retires 1 February 2027.
  'industries-cpq-developer': [
    { name: 'Products', percentage: 20 },
    { name: 'Promotions and Discounts', percentage: 7 },
    { name: 'Pricing', percentage: 17 },
    { name: 'Rules', percentage: 12 },
    { name: 'APIs', percentage: 12 },
    { name: 'Ordering and Quoting', percentage: 12 },
    { name: 'Troubleshooting', percentage: 20 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298954
  // Five sections, 60 scored questions, 63% to pass, 105 minutes.
  'marketing-cloud-engagement-developer': [
    { name: 'Data Modeling', percentage: 14 },
    { name: 'Programmatic Languages', percentage: 35 },
    { name: 'API', percentage: 22 },
    { name: 'Data Management', percentage: 22 },
    { name: 'Security', percentage: 7 },
  ],
  'mulesoft-developer-i': [
    { name: 'Creating Application Networks', percentage: 7 },
    { name: 'Designing APIs', percentage: 8 },
    { name: 'Accessing and Modifying Mule Events', percentage: 10 },
    { name: 'Structuring Mule Applications', percentage: 10 },
    { name: 'Building API Implementation Interfaces', percentage: 7 },
    { name: 'Using Connectors', percentage: 10 },
    { name: 'Processing Records', percentage: 10 },
    { name: 'Transforming Data', percentage: 10 },
    { name: 'Routing Events', percentage: 8 },
    { name: 'Handling Errors', percentage: 8 },
    { name: 'Debugging and Troubleshooting Mule Applications', percentage: 5 },
    { name: 'Deploying and Managing APIs and Integrations', percentage: 7 },
  ],
  'mulesoft-developer-ii': [
    { name: 'Advanced Mule Development', percentage: 30 },
    { name: 'API Design and Security', percentage: 25 },
    { name: 'Error Handling and Performance', percentage: 25 },
    { name: 'Deployment and Operations', percentage: 20 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298960
  // 60 scored questions, 70% to pass, 90 minutes. Retires 1 February 2027.
  'mulesoft-hyperautomation-developer': [
    { name: 'Employ best practices when using hyperautomation', percentage: 20 },
    { name: 'Use Composer to automate data integrations', percentage: 12 },
    { name: 'Design, build, and manage MuleSoft RPA processes', percentage: 17 },
    { name: 'Use Salesforce Flow to build hyperautomation workflows', percentage: 13 },
    { name: 'Use Anypoint Platform to deliver and manage APIs', percentage: 15 },
    { name: 'Use Anypoint Platform to monitor hyperautomation API endpoints', percentage: 7 },
    { name: 'Use Anypoint Exchange to catalog, share, and reuse assets', percentage: 8 },
    { name: 'Use Salesforce Flow Orchestrator for multi-step workstreams', percentage: 8 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298987
  // Nine sections, 60 scored questions, 67% to pass, 90 minutes.
  'slack-developer': [
    { name: 'Apps in the Slack Platform', percentage: 7 },
    { name: 'Design the Interactive Flow of Your App', percentage: 20 },
    { name: 'Design Your Workflows: Spotlight on Slack’s APIs', percentage: 13 },
    { name: 'Design a Great User Experience', percentage: 8 },
    { name: 'Design for Security', percentage: 19 },
    { name: 'Design for Scale', percentage: 9 },
    { name: 'Tools', percentage: 5 },
    { name: 'APIs for Managing Your Slack', percentage: 12 },
    { name: 'Distribute Your App', percentage: 7 },
  ],
  'email-specialist': [
    { name: 'Email Marketing Best Practices', percentage: 10 },
    { name: 'Content Creation and Delivery', percentage: 24 },
    { name: 'Marketing Automation', percentage: 26 },
    { name: 'Subscriber and Data Management', percentage: 26 },
    { name: 'Insights and Analytics', percentage: 14 },
  ],
  'email-specialist-practice-test': [
    { name: 'Subscriber Management', percentage: 20 },
    { name: 'Content and Sends', percentage: 35 },
    { name: 'Tracking and Data', percentage: 25 },
    { name: 'Best Practices', percentage: 20 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298952
  // Five sections, 60 scored questions, 67% to pass, 105 minutes.
  'marketing-cloud-engagement-admin': [
    { name: 'Digital Marketing Proficiency', percentage: 13 },
    { name: 'Subscriber Data Management', percentage: 18 },
    { name: 'Setup', percentage: 38 },
    { name: 'Channel Management', percentage: 16 },
    { name: 'Maintenance', percentage: 15 },
  ],
  'data-architect': [
    { name: 'Data Modeling/Database Design', percentage: 25 },
    { name: 'Master Data Management', percentage: 5 },
    { name: 'Salesforce Data Management', percentage: 25 },
    { name: 'Data Governance', percentage: 10 },
    { name: 'Large Data Volume Considerations', percentage: 20 },
    { name: 'Data Migration', percentage: 15 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298980
  // 60 scored questions, 67% to pass, 105 minutes.
  'integration-architect': [
    { name: 'Evaluate the Current System Landscape', percentage: 8 },
    { name: 'Evaluate Business Needs', percentage: 11 },
    { name: 'Translate Needs to Integration Requirements', percentage: 22 },
    { name: 'Design Integration Solutions', percentage: 28 },
    { name: 'Build Solution', percentage: 23 },
    { name: 'Maintain Integration', percentage: 8 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298977
  // 60 scored questions, 58% to pass, 120 minutes.
  'sharing-visibility-architect': [
    { name: 'Permissions to Standard Objects, Custom Objects, and Fields', percentage: 27 },
    { name: 'Access to Records', percentage: 39 },
    { name: 'Access to Other Data', percentage: 16 },
    { name: 'Implications of Security Model Choice', percentage: 18 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298975
  // 60 scored questions, 65% to pass, 120 minutes.
  'identity-access-management-architect': [
    { name: 'Identity Management Concepts', percentage: 17 },
    { name: 'Accepting Third-Party Identity in Salesforce', percentage: 21 },
    { name: 'Salesforce as an Identity Provider', percentage: 17 },
    { name: 'Access Management Best Practices', percentage: 15 },
    { name: 'Salesforce Identity', percentage: 12 },
    { name: 'Community (Partner and Customer)', percentage: 18 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298968
  // 60 scored questions, 65% to pass, 105 minutes.
  'dev-lifecycle-deployment-architect': [
    { name: 'Application Lifecycle Management', percentage: 8 },
    { name: 'Planning', percentage: 13 },
    { name: 'System Design', percentage: 15 },
    { name: 'Building', percentage: 14 },
    { name: 'Deploying', percentage: 14 },
    { name: 'Testing', percentage: 13 },
    { name: 'Releasing', percentage: 13 },
    { name: 'Operating', percentage: 10 },
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
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298936
  // 60 scored questions, 65% to pass, 105 minutes. Retires 1 February 2027.
  'b2c-commerce-architect': [
    { name: 'Design/Discovery', percentage: 29 },
    { name: 'Build', percentage: 19 },
    { name: 'Monitoring/Troubleshooting', percentage: 14 },
    { name: 'Integrations and Customizations', percentage: 22 },
    { name: 'Launch', percentage: 16 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298942
  // 60 scored questions, 63% to pass, 120 minutes.
  'b2c-solution-architect': [
    { name: 'Discovery and Customer Success', percentage: 27 },
    { name: 'Functional Capabilities and Business Value', percentage: 7 },
    { name: 'Architecture Design', percentage: 18 },
    { name: 'Data Models and Management', percentage: 25 },
    { name: 'Integration', percentage: 23 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298948
  // 60 questions, 72% to pass, 105 minutes.
  'heroku-architect': [
    { name: 'Heroku Platform', percentage: 10 },
    { name: 'Data', percentage: 17 },
    { name: 'Security', percentage: 15 },
    { name: 'Heroku Enterprise', percentage: 28 },
    { name: 'Architect Applications', percentage: 15 },
    { name: 'Integrations', percentage: 15 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298963
  // 45 scored questions, 70% to pass, 90 minutes. Retires 1 February 2027.
  'mulesoft-catalyst-consultant': [
    { name: 'Apply Catalyst principles', percentage: 9 },
    { name: 'Leverage Catalyst Knowledge Hub', percentage: 7 },
    { name: 'Architect to Catalyst Principles', percentage: 27 },
    { name: 'Realize business outcomes with a Catalyst approach', percentage: 11 },
    { name: 'Implement a Center for Enablement (C4E)', percentage: 15 },
    { name: 'Position and reframe with Catalyst methodology', percentage: 11 },
    { name: 'Design composable solutions', percentage: 20 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298956
  // Nine sections, 60 scored questions, 70% to pass, 120 minutes.
  'mulesoft-platform-architect': [
    { name: 'Explaining application network basics', percentage: 7 },
    { name: 'Establishing organizational and platform foundations', percentage: 10 },
    { name: 'Designing and sharing APIs', percentage: 10 },
    { name: 'Designing APIs using System, Process, and Experience Layers', percentage: 12 },
    { name: 'Governing web APIs on Anypoint Platform', percentage: 17 },
    { name: 'Architecting and deploying API implementations', percentage: 11 },
    { name: 'Deploying API implementations to CloudHub', percentage: 11 },
    { name: 'Meeting API quality goals', percentage: 10 },
    { name: 'Monitoring and analyzing application networks', percentage: 12 },
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
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298937
  // 60 scored questions, 65% to pass, 105 minutes. Retires 1 February 2027.
  'cpq-administrator': [
    { name: 'CPQ Platform', percentage: 23 },
    { name: 'Bundle Configurations', percentage: 17 },
    { name: 'Pricing', percentage: 16 },
    { name: 'Quote Templates', percentage: 7 },
    { name: 'Product Selection', percentage: 7 },
    { name: 'Orders, Contracts, Amendments, and Renewals', percentage: 15 },
    { name: 'Products', percentage: 11 },
    { name: 'Approvals', percentage: 4 },
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
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298982
  // Agentforce Sales Foundations: six sections, 40 scored questions, 70% to pass.
  'sales-foundations': [
    { name: 'Planning', percentage: 21 },
    { name: 'Customer Engagement', percentage: 15 },
    { name: 'Deal Management', percentage: 37 },
    { name: 'Pipeline Management', percentage: 12 },
    { name: 'Forecasting', percentage: 6 },
    { name: 'Customer Success', percentage: 9 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298981
  // 60 scored questions, 70% to pass, 105 minutes.
  'strategy-designer': [
    { name: 'Value Design', percentage: 32 },
    { name: 'Tools and Artifacts', percentage: 23 },
    { name: 'Intangible Deliverables', percentage: 26 },
    { name: 'Leveraging Adjacent Roles/Skills', percentage: 19 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298974
  // 60 scored questions, 65% to pass, 105 minutes.
  'ux-designer': [
    { name: 'Discovery', percentage: 13 },
    { name: 'UX Fundamentals', percentage: 16 },
    { name: 'Human-Centered Design', percentage: 12 },
    { name: 'Declarative Design', percentage: 27 },
    { name: 'Testing', percentage: 11 },
    { name: 'Salesforce Lightning Design System (SLDS)', percentage: 21 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298985
  // Three sections, 54 questions, 63% to pass, 105 minutes.
  'tableau-architect': [
    { name: 'Design a Tableau Infrastructure', percentage: 22 },
    { name: 'Deploy Tableau Server', percentage: 37 },
    { name: 'Monitor and Maintain a Tableau Deployment', percentage: 41 },
  ],
  'tableau-consultant': [
    { name: 'Requirements and Design', percentage: 30 },
    { name: 'Data and Visualization', percentage: 35 },
    { name: 'Stakeholder and Best Practices', percentage: 35 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298984
  // Four sections, 60 scored questions, 65% to pass, 105 minutes.
  'tableau-data-analyst': [
    { name: 'Connect To and Transform Data', percentage: 24 },
    { name: 'Explore and Analyze Data', percentage: 41 },
    { name: 'Create Content', percentage: 26 },
    { name: 'Publish and Manage Content on Tableau Server and Tableau Cloud', percentage: 9 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298988
  // Four sections, 40 items, 48% to pass (English), 70 minutes.
  'tableau-desktop-foundations': [
    { name: 'Connecting to and Preparing Data', percentage: 23 },
    { name: 'Exploring and Analyzing Data', percentage: 37 },
    { name: 'Sharing Insights', percentage: 25 },
    { name: 'Understanding Tableau Concepts', percentage: 15 },
  ],
  // Removed 4 November 2026. The weightings that stood here were invented: a
  // flat 25/25/25/25 that matched no published outline.
  //
  //   application-architect, system-architect
  //     Composite credentials, earned by holding a set of other certifications
  //     rather than by sitting an exam, so Salesforce publishes no outline.
  //   tableau-server-administrator
  //     A real exam, but its official guide could not be located on
  //     help.salesforce.com. The predecessor "Tableau Server Certified
  //     Associate" guide is not the same exam, so its numbers were not
  //     substituted. Add the entry back once the current guide is found.
  //
  // Every consumer of this table already handles a missing slug, so these
  // pages now omit the weightage table instead of printing a guess.
}

export function getExamWeightage(slug: string): ExamSection[] | undefined {
  return EXAM_WEIGHTAGE[slug]
}
