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
  // Verified 9 November 2026 against the official exam guide:
  // help.salesforce.com/s/articleView?id=005298966 - eight sections, 60 scored
  // questions, 105 minutes, 68% to pass (English). These weights took effect
  // with the 15 December 2025 outline refresh; the previous set
  // (Config 20 / Object Manager 17 / Workflow 14 / Sales 11 / Service 9 /
  // Productivity 4) predates it and must not be reintroduced.
  administrator: [
    { name: 'Configuration and Setup', percentage: 15 },
    { name: 'Object Manager and Lightning App Builder', percentage: 15 },
    { name: 'Sales and Marketing Applications', percentage: 10 },
    { name: 'Service and Support Applications', percentage: 10 },
    { name: 'Productivity and Collaboration', percentage: 10 },
    { name: 'Data and Analytics Management', percentage: 17 },
    { name: 'Automation', percentage: 15 },
    { name: 'Agentforce', percentage: 8 },
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
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298924
  // Already matched the guide; 60 scored questions, 72% to pass, 105 minutes.
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
    { name: 'Reports & Dashboards', percentage: 15 },
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
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298976
  // Agentforce Sales Consultant (renamed from Sales Cloud Consultant on 24 July 2026): 73% to pass, 105 minutes.
  // 60 scored questions (plus up to five unscored), per the guide above.
  'sales-cloud': [
    { name: 'Sales Lifecycle', percentage: 20 },
    { name: 'Consulting and Implementation Strategies', percentage: 25 },
    { name: 'Practical Application of Agentforce Sales Expertise', percentage: 24 },
    { name: 'Data Management', percentage: 18 },
    { name: 'Predictive and Generative AI', percentage: 13 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298989
  // Agentforce Service Consultant (renamed from Service Cloud Consultant on 24 July 2026): 78% to pass, 105 minutes.
  // 60 scored questions (plus up to five unscored), per the guide above.
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
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298947
  // Verified 13 November 2026: help.salesforce.com/s/articleView?id=005305357
  // 60 scored questions (plus up to 5 unscored), 62% to pass, 105 minutes.
  // Prerequisite: Salesforce Certified Platform Administrator. No prior entry existed for this slug.
  'agentforce-life-sciences-consultant': [
    { name: 'Foundations and Administration', percentage: 36 },
    { name: 'Engagement Execution', percentage: 28 },
    { name: 'Engagement Planning', percentage: 21 },
    { name: 'Sampling Inventory Management', percentage: 15 },
  ],
  // Agentforce Field Service and Operations Consultant (renamed 24 July 2026). Already matched the guide; 63% to pass, 105 minutes.
  // 60 scored questions (plus up to five unscored), per the guide above.
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
  // 60 scored questions (plus up to five unscored), per the guide above.
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
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298953
  // Marketing Cloud Account Engagement Specialist. Already matched the guide; 72% to pass, 90 minutes.
  // 60 scored questions (plus up to five unscored), per the guide above.
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
  // 60 scored questions (plus up to five unscored), per the guide above.
  'nonprofit-cloud': [
    { name: 'Nonprofit Implementation Strategy', percentage: 11 },
    { name: 'Solution Design', percentage: 32 },
    { name: 'Agentforce Nonprofit Setup', percentage: 22 },
    { name: 'Agentforce Nonprofit Feature Configuration', percentage: 35 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298973
  // Six sections, ~60 questions, 67% to pass, 105 minutes. Retires 1 February 2027.
  'nonprofit-success-pack-consultant': [
    { name: 'Domain Expertise', percentage: 20 },
    { name: 'Nonprofit Cloud Product Configuration', percentage: 22 },
    { name: 'Implementation Strategies and Best Practices', percentage: 18 },
    { name: 'Solution Design', percentage: 20 },
    { name: 'Integration and Data Management', percentage: 15 },
    { name: 'Analytics', percentage: 5 },
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
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298978
  // Agentforce Revenue Management Consultant. Already matched the guide; 63% to pass, 105 minutes.
  // 60 scored questions (plus up to five unscored), per the guide above.
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
  // 60 scored questions, 68% to pass, 105 minutes.
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
  // 60 scored questions, 65% to pass, 105 minutes.
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
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298959
  // MuleSoft Developer. Already matched the guide; 70% to pass, 120 minutes.
  // 60 scored questions (plus up to five unscored), per the guide above.
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
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298955
  // Five sections, 60 questions, 70% to pass, 120 minutes.
  'mulesoft-developer-ii': [
    { name: 'Expose production-ready Anypoint Platform-managed APIs', percentage: 13 },
    { name: 'Implement maintainable and modular Mule applications and Maven builds', percentage: 25 },
    { name: 'Implement monitorable Mule applications', percentage: 15 },
    { name: 'Implement performant and reliable Mule applications', percentage: 27 },
    { name: 'Secure data at rest and in transit', percentage: 20 },
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
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298950
  // Marketing Cloud Engagement Specialist. Already matched the guide; 67% to pass, 90 minutes.
  // 60 scored questions (plus up to five unscored), per the guide above.
  'email-specialist': [
    { name: 'Email Marketing Best Practices', percentage: 10 },
    { name: 'Content Creation and Delivery', percentage: 24 },
    { name: 'Marketing Automation', percentage: 26 },
    { name: 'Subscriber and Data Management', percentage: 26 },
    { name: 'Insights and Analytics', percentage: 14 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298950
  // Mirrors the Marketing Cloud Engagement Specialist outline, the exam this practice test is for.
  'email-specialist-practice-test': [
    { name: 'Email Marketing Best Practices', percentage: 10 },
    { name: 'Content Creation and Delivery', percentage: 24 },
    { name: 'Marketing Automation', percentage: 26 },
    { name: 'Subscriber and Data Management', percentage: 26 },
    { name: 'Insights and Analytics', percentage: 14 },
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
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298972
  // Platform Data Architect. Already matched the guide; 58% to pass, 105 minutes.
  // 60 scored questions (plus up to five unscored), per the guide above.
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
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005299472
  // 60 questions, 58% to pass, 120 minutes. Retires 1 February 2027.
  'b2b-solution-architect': [
    { name: 'Discovery and Customer Success', percentage: 25 },
    { name: 'Data Governance and Integration', percentage: 26 },
    { name: 'Design', percentage: 29 },
    { name: 'Delivery', percentage: 12 },
    { name: 'Operationalize the Solution', percentage: 8 },
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
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298957
  // MuleSoft Platform Integration Architect: ten sections, 70% to pass, 120 minutes.
  // 60 scored questions (plus up to five unscored), per the guide above.
  'mulesoft-integration-architect': [
    { name: 'Initiating integration solutions on the Anypoint Platform', percentage: 8 },
    { name: 'Designing for the runtime plane technology architecture', percentage: 15 },
    { name: 'Designing architecture using integration paradigms', percentage: 10 },
    { name: 'Designing and developing Mule applications', percentage: 15 },
    { name: 'Designing automated tests for Mule applications', percentage: 5 },
    { name: 'Designing integration solutions to meet persistence requirements', percentage: 10 },
    { name: 'Designing integration solutions to meet reliability requirements', percentage: 8 },
    { name: 'Designing integration solutions to meet performance requirements', percentage: 7 },
    { name: 'Designing integration solutions to meet security requirements', percentage: 8 },
    { name: 'Applying DevOps practices and operating integration solutions', percentage: 14 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298778
  // Salesforce Accredited B2B Commerce Administrator Professional: 60 questions, 75% to pass, 90 minutes.
  'b2b-commerce-admin-ap': [
    { name: 'Salesforce B2B Commerce Basics', percentage: 15 },
    { name: 'Salesforce B2B Commerce App', percentage: 20 },
    { name: 'Storefront Deployment', percentage: 20 },
    { name: 'Product Organization and Administration', percentage: 15 },
    { name: 'Content Integration', percentage: 7 },
    { name: 'Storefront Management', percentage: 17 },
    { name: 'Advanced Topics', percentage: 6 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298777
  // Salesforce Accredited B2B Commerce Developer Professional: 60 questions, 68% to pass, 75 minutes.
  'b2b-commerce-developer-ap': [
    { name: 'Checkout Flow Development', percentage: 10 },
    { name: 'Reference Implementations', percentage: 15 },
    { name: 'Basic Lightning Web Component Development', percentage: 20 },
    { name: 'Advanced Lightning Web Component Development', percentage: 30 },
    { name: 'Data Management', percentage: 15 },
    { name: 'Error Handling and Diagnostics', percentage: 10 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298788
  // Salesforce Accredited Agentforce Communications Professional: 55 questions, 56% to pass, 90 minutes.
  'communications-cloud-ap': [
    { name: 'Discovery', percentage: 24 },
    { name: 'Planning and Design', percentage: 60 },
    { name: 'Delivery', percentage: 16 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298797
  // Salesforce Accredited Agentforce Consumer Goods Professional: 33 scored questions, plus up to five additional unscored questions; 64% to pass, 60 minutes. Salesforce guide 005298797 says the exam contains 33 multiple-choice/multiple-select questions and may add up to five unscored questions.
  'consumer-goods-cloud-ap': [
    { name: 'Data Setup', percentage: 36 },
    { name: 'Visit Execution', percentage: 36 },
    { name: 'Platform', percentage: 10 },
    { name: 'Visit Planning', percentage: 6 },
    { name: 'Integrations', percentage: 6 },
    { name: 'Analytics', percentage: 6 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298798
  // 62 questions, 66% to pass, 75 minutes. Retires 1 February 2027.
  'consumer-goods-tpm-ap': [
    { name: 'Discovery', percentage: 32 },
    { name: 'Design', percentage: 36 },
    { name: 'Implement', percentage: 32 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298802
  // 60 questions, 66% to pass, 75 minutes. Retires 1 February 2027.
  'contact-center-ap': [
    { name: 'Discovery', percentage: 20 },
    { name: 'Design', percentage: 29 },
    { name: 'Implement', percentage: 41 },
    { name: 'Deploy', percentage: 10 },
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
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298810
  // 50 questions, 60% to pass, 75 minutes. Retires 1 February 2027.
  'energy-utilities-ap': [
    { name: 'Discovery', percentage: 13 },
    { name: 'Solution Design', percentage: 36 },
    { name: 'Implementation', percentage: 38 },
    { name: 'Test and Deploy Energy and Utilities Cloud Solutions', percentage: 13 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298804
  // Salesforce Accredited Agentforce Financial Services Professional: 50 questions, 56% to pass, 75 minutes.
  'financial-services-cloud-ap': [
    { name: 'Discovery', percentage: 12 },
    { name: 'Define/Design', percentage: 42 },
    { name: 'Delivery', percentage: 46 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298822
  // Ten sections, 60 questions, 68% to pass, 90 minutes. Retires 1 February 2027.
  'heroku-developer-ap': [
    { name: 'Heroku Platform: Apps and Runtime', percentage: 12 },
    { name: 'Heroku Platform: Building and Deployment', percentage: 8 },
    { name: 'Heroku Platform: Operations', percentage: 12 },
    { name: 'Heroku Platform: Elements', percentage: 3 },
    { name: 'Continuous Delivery: Pipelines, Review Apps and CI', percentage: 10 },
    { name: 'Data: Key-Value Store, Postgres and Data Clips', percentage: 8 },
    { name: 'Data: Kafka and Add-ons', percentage: 8 },
    { name: 'Security: SSL, Certs and ACM', percentage: 13 },
    { name: 'Integrations: Heroku Connect, API and Webhooks', percentage: 13 },
    { name: 'Architecting Apps: Twelve-Factor Methodology', percentage: 13 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298842
  // 50 questions, 69% to pass, 75 minutes. Retires 1 February 2027.
  'loyalty-management-ap': [
    { name: 'Strategies and Design', percentage: 16 },
    { name: 'Loyalty Program and Process Configuration', percentage: 52 },
    { name: 'Integration', percentage: 22 },
    { name: 'On-Going Loyalty Management', percentage: 10 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298852
  // 50 questions, 70% to pass, 75 minutes. Retires 1 February 2027.
  'marketing-cloud-personalization-ap': [
    { name: 'Solution Overview', percentage: 16 },
    { name: 'Setup & Administration', percentage: 6 },
    { name: 'Data Integration', percentage: 14 },
    { name: 'Sitemap', percentage: 18 },
    { name: 'Segmentation', percentage: 18 },
    { name: 'Einstein Capabilities', percentage: 10 },
    { name: 'Activation', percentage: 18 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298844
  // 60 questions, 66% to pass, 75 minutes. Retires 1 February 2027.
  'media-cloud-ap': [
    { name: 'Discovery', percentage: 27 },
    { name: 'Design', percentage: 53 },
    { name: 'Implement', percentage: 20 },
  ],
  // Verified 4 November 2026: help.salesforce.com/s/articleView?id=005298982
  // Agentforce Sales Foundations: six sections, 60 scored questions, 70% to pass, 105 minutes.
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
  // Verified 13 November 2026: help.salesforce.com/s/articleView?id=005298990
  // 60 scored questions (+ up to 5 unscored), 65% to pass, 105 minutes.
  'slack-administrator': [
    { name: 'Governance, Security and Compliance', percentage: 22 },
    { name: 'App and AI Administration and Automations', percentage: 20 },
    { name: 'Fundamentals', percentage: 18 },
    { name: 'Workspace and Org Management', percentage: 17 },
    { name: 'User Lifecycle Management', percentage: 13 },
    { name: 'Enabling Slack Success (Analytics and Adoption)', percentage: 10 },
  ],
  // Removed 4 November 2026 because no official outline could be found.
  //
  // The weightings here were invented — round numbers summing to 100 that
  // matched no published guide. Unlike the entries above, these are ordinary
  // exams that should have an outline; their guides simply are not reachable.
  // help.salesforce.com renders through a JavaScript app that its own search
  // does not index usefully, and web search returns only third-party prep
  // sites, which disagree with each other. Rather than pick one of those, or
  // keep the invented numbers, the entries are gone and the pages omit the
  // weightage table. Add each one back when its guide turns up, with the
  // article ID in a comment as everywhere else here.
  //
  //   Eleven Accredited Professional credentials, all of which retire on
  //   1 February 2027 and whose exams closed on 31 August 2026:
  //     advanced-field-service-ap, cpq-billing-ap, health-cloud-ap,
  //     manufacturing-cloud-ap, marketing-cloud-advanced-cross-channel-ap,
  //     marketing-cloud-intelligence-ap, net-zero-cloud-ap,
  //     order-management-admin-ap, order-management-developer-ap,
  //     process-automation-ap, public-sector-solutions-ap
  //
  //   Two exams that are still live, so these are worth chasing:
  //     mulesoft-integration-foundations, tableau-consultant
  //
  // Also removed 4 November 2026, same reason:
  //
  //   technical-architect, technical-architect-evaluation,
  //   technical-architect-review-board
  //     The Certified Technical Architect is assessed by a review board, not a
  //     weighted multiple-choice exam: a scenario, a presentation and judges'
  //     questions across 135 minutes. The guide
  //     (help.salesforce.com/s/articleView?id=005299002) names the domains the
  //     judges cover — System Architecture, Security, Data, Solution
  //     Architecture, Integration — and publishes no percentage for any of
  //     them, so there is nothing here to be right about.
  //
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
