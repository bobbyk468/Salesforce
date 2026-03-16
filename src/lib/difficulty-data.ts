/**
 * Difficulty heatmap data per certification section.
 * Difficulty levels: Easy | Moderate | Hard | Trap
 * - Easy: Factual recall, most candidates answer correctly
 * - Moderate: Requires solid understanding, some candidates miss this
 * - Hard: Deep conceptual understanding required, many candidates struggle
 * - Trap: Frequently misunderstood; candidates are often confidently wrong
 */

export type DifficultyLevel = 'Easy' | 'Moderate' | 'Hard' | 'Trap'

export interface SectionDifficulty {
  sectionName: string
  difficulty: DifficultyLevel
  tip: string
}

export const DIFFICULTY_DATA: Record<string, SectionDifficulty[]> = {
  administrator: [
    { sectionName: 'Configuration and Setup', difficulty: 'Moderate', tip: 'Know OWD, profiles, and permission sets — the security model hierarchy trips up most candidates.' },
    { sectionName: 'Object Manager and Lightning App Builder', difficulty: 'Moderate', tip: 'Focus on relationship types (MD vs Lookup) and when to use each in a scenario.' },
    { sectionName: 'Workflow and Process Automation', difficulty: 'Trap', tip: 'Salesforce now favours Record-Triggered Flows over Process Builder — default to Flow as the answer.' },
    { sectionName: 'Data and Analytics Management', difficulty: 'Moderate', tip: 'Joined Reports and dashboard filter limitations (equality only) are high-frequency exam topics.' },
    { sectionName: 'Sales and Marketing Applications', difficulty: 'Easy', tip: 'Leads, Opportunities, and Campaigns are well-documented — practise scenario routing.' },
    { sectionName: 'Service and Support Applications', difficulty: 'Moderate', tip: 'Know Entitlements vs Service Contracts and Omni-Channel queue vs skills routing.' },
    { sectionName: 'Productivity and Collaboration', difficulty: 'Easy', tip: 'Lowest-weight section — Chatter, Files, and Calendar integration questions are straightforward.' },
  ],
  'advanced-administrator': [
    { sectionName: 'Organization Setup', difficulty: 'Moderate', tip: 'Multi-currency, locale, and fiscal year settings are often overlooked in study guides.' },
    { sectionName: 'User Setup', difficulty: 'Easy', tip: 'Delegated Administration and Login IP ranges are common scenario topics — know them precisely.' },
    { sectionName: 'Security and Access', difficulty: 'Hard', tip: 'Territory Management 2.0 is the highest-difficulty topic — assignment rules, model states, and sharing interaction.' },
    { sectionName: 'Standard and Custom Objects', difficulty: 'Moderate', tip: 'Schema Builder relationships and when to use junction objects vs hierarchical relationships.' },
    { sectionName: 'Sales and Marketing Applications', difficulty: 'Easy', tip: 'Advanced forecasting and collaborative forecasting hierarchy questions appear regularly.' },
    { sectionName: 'Service and Support Applications', difficulty: 'Moderate', tip: 'Advanced Case Management — branching Entitlement Processes and Omni-Channel skills-based routing.' },
    { sectionName: 'Automation', difficulty: 'Trap', tip: 'Before-Save vs After-Save vs Scheduled Paths in Record-Triggered Flows — a very common wrong answer area.' },
  ],
  'app-builder': [
    { sectionName: 'Data Modeling and Management', difficulty: 'Moderate', tip: 'OWD inheritance in Master-Detail relationships is frequently tested in scenarios.' },
    { sectionName: 'User Interface', difficulty: 'Moderate', tip: 'Lightning App Builder vs Classic App Builder differences and component visibility rules.' },
    { sectionName: 'Business Logic and Process Automation', difficulty: 'Trap', tip: 'Declarative-first principle: if Flow can solve it, that is the exam answer even if Apex would also work.' },
    { sectionName: 'Reports and Dashboards', difficulty: 'Easy', tip: 'Report types, joined reports, and dashboard filter limitations (equality-only) are the key sub-topics.' },
    { sectionName: 'Deployment', difficulty: 'Moderate', tip: 'Change Sets vs Metadata API vs Packages — know which to recommend for each deployment scenario.' },
    { sectionName: 'Mobile and Lightning', difficulty: 'Hard', tip: 'Salesforce Mobile App navigation is separate from Lightning App navigation — this distinction appears in several questions.' },
  ],
  'developer-1': [
    { sectionName: 'Data Modeling and Management', difficulty: 'Moderate', tip: 'SOQL relationship queries (parent-to-child, child-to-parent) and relationship field naming conventions.' },
    { sectionName: 'Logic and Process Automation', difficulty: 'Trap', tip: 'SOQL/DML inside loops — every loop in a code snippet should trigger a governor limit check.' },
    { sectionName: 'User Interface', difficulty: 'Moderate', tip: 'LWC component lifecycle hooks (@wire, @api, @track) and when each is appropriate.' },
    { sectionName: 'Testing, Debugging, and Deployment', difficulty: 'Hard', tip: 'System.assert() is required — coverage without assertions is meaningless. HttpCalloutMock for callout tests.' },
    { sectionName: 'Integration and APIs', difficulty: 'Hard', tip: 'REST vs SOAP, Named Credentials, and when to use each integration pattern in a scenario.' },
  ],
  'agentforce-specialist': [
    { sectionName: 'Agentforce Configuration', difficulty: 'Hard', tip: 'Topics, Instructions, and Actions are distinct concepts — confusing them is the most common failure point.' },
    { sectionName: 'Platform and Security', difficulty: 'Moderate', tip: 'Permission sets for agent access, Data Cloud connections, and org-wide security implications.' },
    { sectionName: 'Agent Capabilities and Optimization', difficulty: 'Trap', tip: 'Apex @InvocableMethod vs Auto-Launched Flow actions — know which to recommend per scenario.' },
    { sectionName: 'Integration and Best Practices', difficulty: 'Hard', tip: 'Data Cloud grounding vs standard object access — agents do not automatically access all Salesforce data.' },
  ],
  'sales-cloud': [
    { sectionName: 'Solution Design', difficulty: 'Hard', tip: 'Multi-org vs single-org decisions and when to recommend each architecture pattern.' },
    { sectionName: 'Sales Cloud Data Model', difficulty: 'Moderate', tip: 'Lead conversion field mapping and Opportunity-Account-Contact relationship structures.' },
    { sectionName: 'Sales Cloud Automation', difficulty: 'Trap', tip: 'Path vs Validation Rules vs Flows for guided selling — know the scenario context that triggers each.' },
    { sectionName: 'Sales Cloud Analytics', difficulty: 'Easy', tip: 'Forecast categories, collaborative forecasting, and report type selection for pipeline visibility.' },
    { sectionName: 'Sales Cloud Configuration', difficulty: 'Moderate', tip: 'Territory Management, opportunity teams, and account teams — when each applies.' },
  ],
  'service-cloud': [
    { sectionName: 'Solution Design', difficulty: 'Hard', tip: 'Choosing between CTI, Einstein Bots, and Omni-Channel for different contact centre scenarios.' },
    { sectionName: 'Service Cloud Data Model', difficulty: 'Moderate', tip: 'Case hierarchy, case teams, and when a case should be escalated vs reassigned.' },
    { sectionName: 'Service Cloud Automation', difficulty: 'Trap', tip: 'Entitlement Processes milestones and time-based actions vs Escalation Rules — candidates confuse these regularly.' },
    { sectionName: 'Service Cloud Analytics', difficulty: 'Easy', tip: 'Service-specific report types and SLA metric dashboards are straightforward if you know the data model.' },
    { sectionName: 'Service Cloud Configuration', difficulty: 'Moderate', tip: 'Knowledge article types, data categories, and visibility rules across channels.' },
  ],
  'ai-associate': [
    { sectionName: 'AI Fundamentals', difficulty: 'Easy', tip: 'Machine learning types (supervised, unsupervised, reinforcement) and common terms are well-covered by Trailhead.' },
    { sectionName: 'AI Capabilities in Salesforce', difficulty: 'Moderate', tip: 'Which Einstein feature belongs to which Salesforce product — memorise the product-to-feature mapping.' },
    { sectionName: 'Ethical AI and Bias', difficulty: 'Trap', tip: 'Types of bias (historical, representation, measurement) and Salesforce&apos;s five Trusted AI principles — high-frequency exam topics.' },
  ],
  'mulesoft-integration-foundations': [
    { sectionName: 'Integration Basics and API-Led Connectivity', difficulty: 'Moderate', tip: 'System/Process/Experience API layer allocation for scenarios is tested heavily.' },
    { sectionName: 'Anypoint Platform Overview', difficulty: 'Trap', tip: 'Design Center vs Studio vs Exchange vs Runtime Manager vs API Manager — know what each tool is for.' },
    { sectionName: 'Basic DataWeave and Flow Design', difficulty: 'Hard', tip: 'Output directives and payload navigation syntax — small syntax errors equal wrong answers in scenario questions.' },
  ],
}
