// scripts/verify-all-95-certs-seo.mjs
// Usage: Start production server on http://localhost:3000, then run:
// node scripts/verify-all-95-certs-seo.mjs

import { parseDocument, DomUtils } from "htmlparser2";
import { selectAll, selectOne } from "css-select";

const BASE_URL = process.env.VERIFY_BASE_URL || process.argv[2] || "http://localhost:3000";
const TWENTY_QUESTION_PAGES = new Set([
  "platform-foundations", "administrator", "advanced-administrator", "app-builder",
  "agentforce-specialist", "developer-1", "developer-2", "marketing-cloud-consultant",
  "nonprofit-cloud", "public-sector-solutions-consultant", "revenue-cloud-consultant",
  "marketing-cloud-next-consultant", "application-architect", "system-architect",
]);

function content(selector, document) {
  const element = selectOne(selector, document);
  return element ? DomUtils.textContent(element).replace(/\s+/g, " ").trim() : "";
}
let failures = 0;
let passed = 0;
// Pages rendering the generated "how many questions / passing score" FAQ.
// Pages with a hand-written FAQ on the same ground, retired exams, the two
// component-only architect credentials, the three CTA board formats and the
// four unverified Claude credentials all skip it by design; the exact count is
// asserted at the end so a change that silently drops it everywhere fails.
const formatFaqPages = [];
const EXPECTED_FORMAT_FAQ_PAGES = 45;

function assertCheck(condition, label, detail = "") {
  if (condition) {
    passed++;
  } else {
    failures++;
    console.error(`[FAIL] ${label}${detail ? " -> " + detail : ""}`);
  }
}

// Per-page keyword cluster: the exact strings every one of the 95 pages must
// render for the bare name, vendor-prefixed name, "... certification",
// "... dumps" and every official/legacy code and numeral alias.
// Mirrors src/lib/cert-keyword-clusters.ts.
const CLUSTER_MAP = {
  "platform-foundations": { bare: "Platform Foundations", vendor: "Salesforce", aliases: ["Plat-101", "Salesforce Associate"] },
  "ai-associate": { bare: "AI Associate", vendor: "Salesforce", aliases: ["AI-101"] },
  "marketing-cloud-engagement-foundations": { bare: "Marketing Cloud Engagement Foundations", vendor: "Salesforce", aliases: ["MC-101", "Marketing Associate"] },
  "mulesoft-integration-foundations": { bare: "MuleSoft Integration Foundations", vendor: "Salesforce", aliases: ["Mule-101", "MuleSoft Associate"] },
  "administrator": { bare: "Platform Administrator", vendor: "Salesforce", aliases: ["Plat-Admn-201", "ADM-201", "Salesforce Administrator"] },
  "advanced-administrator": { bare: "Advanced Administrator", vendor: "Salesforce", aliases: ["Plat-Admn-301", "ADM-211", "Platform Administrator II", "Platform Administrator 2"] },
  "app-builder": { bare: "Platform App Builder", vendor: "Salesforce", aliases: ["Plat-Admn-202", "DEV-402", "App Builder"] },
  "agentforce-specialist": { bare: "Agentforce Specialist", vendor: "Salesforce", aliases: ["AI-201", "Agent Force Specialist", "AI Specialist"] },
  "business-analyst": { bare: "Business Analyst", vendor: "Salesforce", aliases: ["BA-201"] },
  "cpq-administrator": { bare: "CPQ Administrator", vendor: "Salesforce", aliases: ["Sales-Admn-202", "CPQ-211", "CPQ Specialist"] },
  "marketing-cloud-engagement-admin": { bare: "Marketing Cloud Engagement Administrator", vendor: "Salesforce", aliases: ["MCE-Admn-201", "Marketing Cloud Administrator"] },
  "slack-administrator": { bare: "Slack Administrator", vendor: "Salesforce", aliases: ["Slack-Admn-201", "Slack Certified Administrator"] },
  "developer-1": { bare: "Platform Developer I", vendor: "Salesforce", aliases: ["Plat-Dev-201", "PD1", "Platform Developer 1", "CRT-450"] },
  "developer-2": { bare: "Platform Developer II", vendor: "Salesforce", aliases: ["Plat-Dev-301", "PD2", "Platform Developer 2"] },
  "javascript-developer-i": { bare: "JavaScript Developer I", vendor: "Salesforce", aliases: ["JS-Dev-101", "CRT-600", "JavaScript Developer 1"] },
  "b2c-commerce-developer": { bare: "B2C Commerce Developer", vendor: "Salesforce", aliases: ["Comm-Dev-101", "CRT-500"] },
  "industries-cpq-developer": { bare: "Industries CPQ Developer", vendor: "Salesforce", aliases: ["Ind-Dev-201", "Vlocity CPQ Developer"] },
  "marketing-cloud-engagement-developer": { bare: "Marketing Cloud Engagement Developer", vendor: "Salesforce", aliases: ["MCE-Dev-201", "Marketing Cloud Developer"] },
  "mulesoft-developer-i": { bare: "MuleSoft Developer I", vendor: "Salesforce", aliases: ["Mule-Dev-201", "MuleSoft Developer 1"] },
  "mulesoft-developer-ii": { bare: "MuleSoft Developer II", vendor: "Salesforce", aliases: ["Mule-Dev-301", "MuleSoft Developer 2"] },
  "mulesoft-hyperautomation-developer": { bare: "MuleSoft Hyperautomation Developer", vendor: "Salesforce", aliases: ["Mule-Dev-202", "MuleSoft Hyperautomation Specialist"] },
  "omnistudio-developer": { bare: "OmniStudio Developer", vendor: "Salesforce", aliases: ["Plat-Dev-210"] },
  "slack-developer": { bare: "Slack Developer", vendor: "Salesforce", aliases: ["Slack-Dev-201", "Slack Certified Developer"] },
  "crm-analytics-einstein-discovery-consultant": { bare: "CRM Analytics and Einstein Discovery Consultant", vendor: "Salesforce", aliases: ["CRM Analytics Consultant", "Einstein Discovery Consultant"] },
  "data-360-consultant": { bare: "Data 360 Consultant", vendor: "Salesforce", aliases: ["Data-Con-101", "Data Cloud Consultant"] },
  "education-cloud-consultant": { bare: "Education Cloud Consultant", vendor: "Salesforce", aliases: [] },
  "experience-cloud": { bare: "Experience Cloud Consultant", vendor: "Salesforce", aliases: ["CRT-271", "Community Cloud Consultant"] },
  "field-service": { bare: "Field Service Consultant", vendor: "Salesforce", aliases: ["FS-Con-101", "Agentforce Field Service and Operations Consultant"] },
  "pardot-consultant": { bare: "Marketing Cloud Account Engagement Consultant", vendor: "Salesforce", aliases: ["CRT-302", "Pardot Consultant"] },
  "marketing-cloud-consultant": { bare: "Marketing Cloud Engagement Consultant", vendor: "Salesforce", aliases: ["MCE-Con-201", "Marketing Cloud Consultant"] },
  "agentforce-life-sciences-consultant": { bare: "Agentforce Life Sciences Consultant", vendor: "Salesforce", aliases: ["Als-Con-201", "Life Sciences Cloud Consultant"] },
  "nonprofit-cloud": { bare: "Nonprofit Cloud Consultant", vendor: "Salesforce", aliases: ["NP-Con-102", "Agentforce Nonprofit Consultant"] },
  "nonprofit-success-pack-consultant": { bare: "Nonprofit Success Pack (NPSP) Consultant", vendor: "Salesforce", aliases: ["NP-Con-101", "NPSP Consultant"] },
  "omnistudio-consultant": { bare: "OmniStudio Consultant", vendor: "Salesforce", aliases: ["Plat-Con-201"] },
  "public-sector-solutions-consultant": { bare: "Public Sector Solutions Consultant", vendor: "Salesforce", aliases: ["PubSec-Con-201"] },
  "revenue-cloud-consultant": { bare: "Revenue Management Consultant", vendor: "Salesforce", aliases: ["Rev-Con-201", "Revenue Cloud Consultant"] },
  "sales-cloud": { bare: "Agentforce Sales Consultant", vendor: "Salesforce", aliases: ["Sales-Con-201", "CRT-251", "Sales Cloud Consultant"] },
  "service-cloud": { bare: "Agentforce Service Consultant", vendor: "Salesforce", aliases: ["Service-Con-201", "CRT-261", "Service Cloud Consultant"] },
  "slack-consultant": { bare: "Slack Consultant", vendor: "Salesforce", aliases: ["Slack-Con-201", "Slack Certified Consultant"] },
  "email-specialist": { bare: "Marketing Cloud Engagement Specialist", vendor: "Salesforce", aliases: ["MC-202", "CRT-550", "Marketing Cloud Email Specialist"] },
  "marketing-cloud-next-consultant": { bare: "Marketing Cloud Next Consultant", vendor: "Salesforce", aliases: ["MC-Con-201"] },
  "pardot-specialist": { bare: "Marketing Cloud Account Engagement Specialist", vendor: "Salesforce", aliases: ["MC-201", "Pardot Specialist"] },
  "application-architect": { bare: "Application Architect", vendor: "Salesforce", aliases: [] },
  "data-architect": { bare: "Data Architect", vendor: "Salesforce", aliases: ["Plat-Arch-201", "Platform Data Architect"] },
  "integration-architect": { bare: "Integration Architect", vendor: "Salesforce", aliases: ["Plat-Arch-204", "Platform Integration Architect"] },
  "sharing-visibility-architect": { bare: "Sharing and Visibility Architect", vendor: "Salesforce", aliases: ["Plat-Arch-205", "Platform Sharing and Visibility Architect"] },
  "system-architect": { bare: "System Architect", vendor: "Salesforce", aliases: [] },
  "identity-access-management-architect": { bare: "Identity and Access Management Architect", vendor: "Salesforce", aliases: ["Plat-Arch-203", "Platform Identity and Access Management Architect"] },
  "dev-lifecycle-deployment-architect": { bare: "Development Lifecycle and Deployment Architect", vendor: "Salesforce", aliases: ["Plat-Arch-202", "Platform Development Lifecycle and Deployment Architect"] },
  "technical-architect": { bare: "Technical Architect", vendor: "Salesforce", aliases: ["CTA"] },
  "technical-architect-evaluation": { bare: "Technical Architect - Architect Evaluation", vendor: "Salesforce", aliases: ["CTA Architect Evaluation"] },
  "technical-architect-review-board": { bare: "Technical Architect - Architect Review Board", vendor: "Salesforce", aliases: ["CTA Review Board"] },
  "b2b-solution-architect": { bare: "B2B Solution Architect", vendor: "Salesforce", aliases: ["Arch-301"] },
  "b2c-commerce-architect": { bare: "B2C Commerce Architect", vendor: "Salesforce", aliases: ["Arch-303"] },
  "b2c-solution-architect": { bare: "B2C Solution Architect", vendor: "Salesforce", aliases: ["Arch-302"] },
  "heroku-architect": { bare: "Heroku Architect", vendor: "Salesforce", aliases: ["Plat-Arch-206"] },
  "mulesoft-catalyst-consultant": { bare: "MuleSoft Catalyst Consultant", vendor: "Salesforce", aliases: ["Mule-Con-201"] },
  "mulesoft-platform-architect": { bare: "MuleSoft Platform Architect", vendor: "Salesforce", aliases: ["Mule-Arch-201", "MuleSoft Platform Architect I"] },
  "mulesoft-integration-architect": { bare: "MuleSoft Platform Integration Architect", vendor: "Salesforce", aliases: ["Mule-Arch-202", "MuleSoft Integration Architect"] },
  "advanced-field-service-ap": { bare: "Advanced Field Service Accredited Professional", vendor: "Salesforce", aliases: ["Advanced Field Service AP"] },
  "b2b-commerce-admin-ap": { bare: "B2B Commerce Administrator Accredited Professional", vendor: "Salesforce", aliases: ["B2B Commerce for Administrators Accredited Professional"] },
  "b2b-commerce-developer-ap": { bare: "B2B Commerce Developer Accredited Professional", vendor: "Salesforce", aliases: ["B2B Commerce for Developers Accredited Professional"] },
  "communications-cloud-ap": { bare: "Communications Cloud Accredited Professional", vendor: "Salesforce", aliases: ["Agentforce Communications", "Agentforce Communications Accredited Professional"] },
  "consumer-goods-cloud-ap": { bare: "Consumer Goods Cloud Accredited Professional", vendor: "Salesforce", aliases: ["Agentforce Consumer Goods", "Agentforce Consumer Goods Accredited Professional"] },
  "consumer-goods-tpm-ap": { bare: "Consumer Goods Cloud TPM Accredited Professional", vendor: "Salesforce", aliases: ["Trade Promotion Management Accredited Professional"] },
  "contact-center-ap": { bare: "Contact Center Accredited Professional", vendor: "Salesforce", aliases: ["Contact Center AP"] },
  "cpq-billing-ap": { bare: "CPQ and Billing Consultant Accredited Professional", vendor: "Salesforce", aliases: ["CPQ and Billing AP"] },
  "energy-utilities-ap": { bare: "Energy and Utilities Cloud Accredited Professional", vendor: "Salesforce", aliases: ["Energy and Utilities AP"] },
  "financial-services-cloud-ap": { bare: "Financial Services Cloud Accredited Professional", vendor: "Salesforce", aliases: ["Agentforce Financial Services", "Agentforce Financial Services Accredited Professional"] },
  "health-cloud-ap": { bare: "Health Cloud Accredited Professional", vendor: "Salesforce", aliases: ["Agentforce Health", "Agentforce Health Accredited Professional"] },
  "heroku-developer-ap": { bare: "Heroku Developer Accredited Professional", vendor: "Salesforce", aliases: ["Heroku Developer AP"] },
  "loyalty-management-ap": { bare: "Loyalty Management Accredited Professional", vendor: "Salesforce", aliases: ["Loyalty Management AP"] },
  "manufacturing-cloud-ap": { bare: "Manufacturing Cloud Accredited Professional", vendor: "Salesforce", aliases: ["Agentforce Manufacturing", "Agentforce Manufacturing Accredited Professional"] },
  "marketing-cloud-advanced-cross-channel-ap": { bare: "Marketing Cloud Advanced Cross Channel Accredited Professional", vendor: "Salesforce", aliases: ["Advanced Cross Channel AP"] },
  "marketing-cloud-intelligence-ap": { bare: "Marketing Cloud Intelligence Accredited Professional", vendor: "Salesforce", aliases: ["Datorama", "Datorama Accredited Professional"] },
  "marketing-cloud-personalization-ap": { bare: "Marketing Cloud Personalization Accredited Professional", vendor: "Salesforce", aliases: ["Interaction Studio", "Interaction Studio Accredited Professional"] },
  "media-cloud-ap": { bare: "Media Cloud Accredited Professional", vendor: "Salesforce", aliases: ["Media Cloud AP"] },
  "net-zero-cloud-ap": { bare: "Net Zero Cloud Accredited Professional", vendor: "Salesforce", aliases: ["Net Zero Cloud AP"] },
  "order-management-admin-ap": { bare: "Order Management Administrator Accredited Professional", vendor: "Salesforce", aliases: ["Order Management Administrator AP"] },
  "order-management-developer-ap": { bare: "Order Management Developer Accredited Professional", vendor: "Salesforce", aliases: ["Order Management Developer AP"] },
  "process-automation-ap": { bare: "Process Automation Accredited Professional", vendor: "Salesforce", aliases: ["Process Automation AP"] },
  "public-sector-solutions-ap": { bare: "Public Sector Solutions Accredited Professional", vendor: "Salesforce", aliases: ["Agentforce 360", "Agentforce 360 for Public Sector Professional"] },
  "sales-foundations": { bare: "Agentforce Sales Foundations", vendor: "Salesforce", aliases: ["Sales-101", "Sales Foundations", "Sales Representative"] },
  "strategy-designer": { bare: "Platform Strategy Designer", vendor: "Salesforce", aliases: ["Plat-UX-102", "Strategy Designer"] },
  "ux-designer": { bare: "Platform User Experience Designer", vendor: "Salesforce", aliases: ["Plat-UX-101", "UX Designer", "User Experience Designer"] },
  "tableau-architect": { bare: "Tableau Architect", vendor: "Salesforce", aliases: ["Analytics-Arch-201", "Tableau Certified Architect"] },
  "tableau-consultant": { bare: "Tableau Consultant", vendor: "Salesforce", aliases: ["Analytics-Con-201", "Tableau Certified Consultant"] },
  "tableau-next-consultant": { bare: "Tableau Next Consultant", vendor: "Salesforce", aliases: ["Analytics-Con-202"] },
  "tableau-data-analyst": { bare: "Tableau Data Analyst", vendor: "Salesforce", aliases: ["Analytics-DA-201", "Tableau Certified Data Analyst"] },
  "tableau-desktop-foundations": { bare: "Tableau Desktop Foundations", vendor: "Salesforce", aliases: ["Analytics-101", "Tableau Desktop Specialist"] },
  "tableau-server-administrator": { bare: "Tableau Server Administrator", vendor: "Salesforce", aliases: ["Analytics-SA-201", "Tableau Server Certified Associate"] },
  "claude-certified-associate": { bare: "Claude Certified Associate", vendor: "Anthropic", aliases: ["Claude Associate", "Claude Associate Foundations"] },
  "claude-certified-developer": { bare: "Claude Certified Developer", vendor: "Anthropic", aliases: ["Claude Developer", "Claude Developer Foundations"] },
  "claude-certified-architect-foundations": { bare: "Claude Certified Architect", vendor: "Anthropic", aliases: ["Claude Architect Foundations"] },
  "claude-certified-architect-professional": { bare: "Claude Certified Architect", vendor: "Anthropic", aliases: ["Claude Architect Professional"] },
};

// Explicit per-page verification spec for all 95 certification pages (#1 to #95)
const PAGE_SPECS = {
  // Track 1: Associate & Foundations (#1 - #4)
  "platform-foundations": { title: ["Platform Foundations", "Plat-101"], must: ["Plat-101", "62%", "32%", "28%", "Dynamic Forms", "AgentExchange"], forbid: ["All four sections are 25%"] },
  "ai-associate": { title: ["AI Associate"], must: ["AI-101", "Retired", "39%", "36%", "17%", "8%"], forbid: [] },
  "marketing-cloud-engagement-foundations": { title: ["Marketing Cloud Engagement Foundations", "MC-101"], must: ["MC-101", "65%", "28%", "22%"], forbid: ["around 62%", "overview (30%)"] },
  "mulesoft-integration-foundations": { title: ["MuleSoft Integration Foundations", "Mule-101"], must: ["Mule-101", "70%", "$75", "20%", "18%"], forbid: ["Integration Concepts and Anypoint Platform are 70%", "$200 fee"] },

  // Track 2: Administrator (#5 - #12)
  "administrator": { title: ["Salesforce Platform Administrator", "ADM-201"], must: ["Plat-Admn-201", "ADM-201", "68%", "Pearson VUE", "Trailhead Academy"], forbid: ["Webassessor/Kryterion"] },
  "advanced-administrator": { title: ["Platform Administrator II", "Plat-Admn-301"], must: ["Plat-Admn-301", "ADM-211", "65%", "Security and Access", "Process Automation"], forbid: ["Security and Organization Setup are heavily weighted"] },
  "app-builder": { title: ["Platform App Builder", "Plat-Admn-202"], must: ["Plat-Admn-202", "DEV-402", "73%", "32%", "Agentforce", "three times a year"], forbid: ["once a year on Trailhead"] },
  "agentforce-specialist": { title: ["Agentforce Specialist", "AI-201"], must: ["AI-201", "Agent Force Specialist", "72%", "35%", "Agent Script", "Model Context Protocol", "Agent-to-Agent"], forbid: ["3-Week Agentforce Specialist Study Plan"] },
  "business-analyst": { title: ["Business Analyst", "BA-201"], must: ["BA-201", "72%", "Collaboration with Stakeholders", "23%"], forbid: ["Requirements and Solution Design are 50%", "anu suipe ana choose"] },
  "cpq-administrator": { title: ["CPQ Administrator", "Sales-Admn-202"], must: ["Sales-Admn-202", "CPQ-211", "2027", "CPQ Platform", "23%", "17%"], forbid: ["Bundle Configurations (25%), Pricing (20%), and Quote Templates (15%)"] },
  "marketing-cloud-engagement-admin": { title: ["Marketing Cloud Engagement Administrator", "MCE-Admn-201"], must: ["MCE-Admn-201", "67%", "Setup", "38%"], forbid: ["All four sections are 25%", "90-minute time limit"] },
  "slack-administrator": { title: ["Slack Administrator", "Slack-Admn-201"], must: ["Slack-Admn-201", "65%", "Governance, Security and Compliance", "22%"], forbid: ["no published pass markdiscount"] },

  // Track 3: Developer (#13 - #23)
  "developer-1": { title: ["Platform Developer", "Plat-Dev-201"], must: ["Plat-Dev-201", "PD1", "68%", "28%", "27%", "Agentforce for Developers"], forbid: ["Logic and User Interface are 50% combined", "Logic and Process Automation (38%)"] },
  "developer-2": { title: ["Platform Developer II", "Plat-Dev-301"], must: ["Plat-Dev-301", "PD2", "70%", "$200", "27%"], forbid: ["Exam fee: $400", "Design Patterns (25%)"] },
  "javascript-developer-i": { title: ["JavaScript Developer", "JS-Dev-101"], must: ["JS-Dev-101", "CRT-600", "65%", "Objects, Functions, and Classes", "25%", "23%"], forbid: ["LWC and Aura are 30%"] },
  "b2c-commerce-developer": { title: ["B2C Commerce Developer", "CRT-500"], must: ["Comm-Dev-101", "CRT-500", "65%", "Application Development", "53%"], forbid: ["B2C Commerce Architecture and Storefront/Scripts are 55%", "SFRA Architecture & Cartridges"] },
  "industries-cpq-developer": { title: ["Industries CPQ Developer", "Ind-Dev-201"], must: ["Ind-Dev-201", "2027", "63%", "Products", "Troubleshooting", "20%"], forbid: ["Product Catalogue Management"] },
  "marketing-cloud-engagement-developer": { title: ["Marketing Cloud Engagement Developer", "MCE-Dev-201"], must: ["MCE-Dev-201", "63%", "Programmatic Languages", "35%", "Marketing Cloud Engagement Specialist"], forbid: ["~67% passing score", "Marketing Cloud Development and AMPscript/SSJS are 55%"] },
  "mulesoft-developer-i": { title: ["MuleSoft Developer", "Mule-Dev-201"], must: ["Mule-Dev-201", "70%", "120", "Transforming Data", "10%"], forbid: ["Mule Applications and DataWeave are 55%"] },
  "mulesoft-developer-ii": { title: ["MuleSoft Developer II", "Mule-Dev-301"], must: ["Mule-Dev-301", "70%", "27%", "25%", "Maven"], forbid: ["Advanced Mule Development is 30%"] },
  "mulesoft-hyperautomation-developer": { title: ["MuleSoft Hyperautomation Developer", "Mule-Dev-202"], must: ["Mule-Dev-202", "2027", "70%", "20%", "17%"], forbid: ["Process Automation Design"] },
  "omnistudio-developer": { title: ["OmniStudio Developer", "Plat-Dev-210"], must: ["Plat-Dev-210", "72%", "Omniscripts", "Data Mappers", "20%", "18%", "17%"], forbid: ["OmniStudio Development and FlexCards/Digital Flows are 60%", "using th..."] },
  "slack-developer": { title: ["Slack", "Developer", "Slack-Dev-201"], must: ["Slack-Dev-201", "67%", "90", "20%", "19%"], forbid: ["60 questions in 105 minutes", "~68% passing score", "Key takeaway: chat.</"] },

  // Track 4: Consultant (#24 - #39)
  "crm-analytics-einstein-discovery-consultant": { title: ["CRM Analytics", "Einstein Discovery", "Consultant"], must: ["65%", "90", "Data Layer", "23%"], forbid: ["All four sections are 25%", "60 questions in 105 minutes"] },
  "data-360-consultant": { title: ["Data 360 Consultant", "Data-Con-101"], must: ["Data-Con-101", "Data Cloud", "70%", "Data Activations and Utilization", "20%", "Zero-Copy"], forbid: ["above the 62% threshold"] },
  "education-cloud-consultant": { title: ["Education Cloud Consultant"], must: ["2027", "August 31, 2026", "July 24, 2026", "22%", "19%"], forbid: [] },
  "experience-cloud": { title: ["Experience Cloud Consultant", "CRT-271"], must: ["CRT-271", "62%", "25%", "17%"], forbid: ["passing score of 65%"] },
  "field-service": { title: ["Agentforce Field Service", "FS-Con-101"], must: ["FS-Con-101", "Agentforce Field Service and Operations Consultant", "63%", "28%", "23%", "Managing Assets", "Configuring Maintenance Plans", "Permissions and Sharing"], forbid: ["Scheduling and Mobile are 50%", "Field Service Applications"] },
  "pardot-consultant": { title: ["Account Engagement Consultant", "CRT-302"], must: ["CRT-302", "2027", "68%", "Account Configuration", "20%", "17%"], forbid: ["Focus heavily on Account Engagement Settings and Lead Management as they carry the highest weightage (41% combined)"] },
  "marketing-cloud-consultant": { title: ["Marketing Cloud Engagement Consultant", "MCE-Con-201"], must: ["MCE-Con-201", "67%", "Data Modeling and Management", "21%", "Marketing Cloud Engagement Administrator"], forbid: ["All four sections are 25%", "You need Platform Administrator certification"] },
  "agentforce-life-sciences-consultant": { title: ["Agentforce Life Sciences Consultant", "Als-Con-201"], must: ["Als-Con-201", "62%", "36%", "28%", "Platform Administrator"], forbid: ["No prerequisite listed in this guide"] },
  "nonprofit-cloud": { title: ["Agentforce Nonprofit Consultant", "NP-Con-102"], must: ["NP-Con-102", "65%", "35%", "32%"], forbid: ["Nonprofit Cloud Data Model and Program/Case are 50%", "~68%"] },
  "nonprofit-success-pack-consultant": { title: ["Nonprofit Success Pack (NPSP) Consultant"], must: ["NP-Con-101", "2027", "67%", "105"], forbid: ["this exam remains active", "90-minute time limit"] },
  "omnistudio-consultant": { title: ["OmniStudio Consultant", "Plat-Con-201"], must: ["Plat-Con-201", "67%", "Flexcards", "Data Mappers", "Omnistudio Fundamentals", "Best Fit Solutions", "18%", "17%"], forbid: ["OmniStudio Overview and Digital Flows/FlexCards are 55%"] },
  "public-sector-solutions-consultant": { title: ["Public Sector Solutions Consultant", "PubSec-Con-201"], must: ["PubSec-Con-201", "72%", "Foundational Knowledge of the Product", "36%", "32%"], forbid: ["Passing score: Not published"] },
  "revenue-cloud-consultant": { title: ["Revenue Management Consultant", "Rev-Con-201"], must: ["Rev-Con-201", "63%", "18%", "16%"], forbid: ["CPQ Configuration and Quoting/Contracts are 55%"] },
  "sales-cloud": { title: ["Agentforce Sales Consultant", "Sales-Con-201"], must: ["Sales-Con-201", "CRT-251", "73%", "25%", "24%", "Predictive and Generative AI"], forbid: ["passing score of 65%"] },
  "service-cloud": { title: ["Agentforce Service Consultant", "Service-Con-201"], must: ["Service-Con-201", "CRT-261", "78%", "15%", "13%"], forbid: [] },
  "slack-consultant": { title: ["Slack Consultant", "Slack-Con-201"], must: ["Slack-Con-201", "67%", "90", "22%", "18%"], forbid: [] },

  // Track 5: Marketing (#40 - #42)
  "email-specialist": { title: ["Marketing Cloud Engagement Specialist", "CRT-550"], must: ["MC-202", "CRT-550", "67%", "90", "26%", "24%"], forbid: ["Email Content and Send Management are 45%", "4-Week Email Specialist Study Plan"] },
  "marketing-cloud-next-consultant": { title: ["Marketing Cloud Next Consultant", "MC-Con-201"], must: ["MC-Con-201", "72%", "Campaign Design, Flow Orchestration", "30%", "25%"], forbid: [] },
  "pardot-specialist": { title: ["Marketing Cloud Account Engagement Specialist", "MC-201"], must: ["MC-201", "72%", "90", "Lead Management", "24%", "20%"], forbid: ["Account Engagement Basics and Lead/List Management are 55%"] },

  // Track 6: Architect (#43 - #59)
  "application-architect": { title: ["Application Architect"], must: ["Platform App Builder", "Platform Developer", "Platform Data Architect", "Platform Sharing and Visibility Architect"], forbid: ["Identity and Access: SSO, federation"] },
  "data-architect": { title: ["Platform Data Architect", "Plat-Arch-201"], must: ["Plat-Arch-201", "58%", "25%", "20%"], forbid: ["All four domains are 25%"] },
  "integration-architect": { title: ["Platform Integration Architect", "Plat-Arch-204"], must: ["Plat-Arch-204", "67%", "28%", "23%", "22%"], forbid: ["Yes, Application Architect is typically required", "Integration Architecture and Patterns are 55%"] },
  "sharing-visibility-architect": { title: ["Platform Sharing & Visibility Architect", "Plat-Arch-205"], must: ["Plat-Arch-205", "58%", "39%", "27%"], forbid: ["(27%): 27%"] },
  "system-architect": { title: ["System Architect"], must: ["Platform Developer", "Platform Integration Architect", "Platform Identity and Access Management Architect", "Platform Development Lifecycle and Deployment Architect"], forbid: [] },
  "identity-access-management-architect": { title: ["Platform Identity & Access Architect", "Plat-Arch-203"], must: ["Plat-Arch-203", "65%", "21%", "18%", "17%"], forbid: [] },
  "dev-lifecycle-deployment-architect": { title: ["Platform Dev Lifecycle & Deployment Architect"], must: ["Plat-Arch-202", "65%", "15%", "14%"], forbid: [] },
  "technical-architect": { title: ["Technical Architect (CTA)"], must: ["$6,000", "$1,500", "$4,500", "Application Architect", "System Architect"], forbid: ["5 domain exams (with 2 overlapping)"] },
  "technical-architect-evaluation": { title: ["Technical Architect - Architect Evaluation"], must: ["135", "$1,500", "Application Architect", "System Architect"], forbid: ["approximately 60 multiple-choice questions and a 120-minute time limit", "two proctored multiple-choice assessments"] },
  "technical-architect-review-board": { title: ["Technical Architect - Architect Review Board"], must: ["$4,500", "$2,250", "Technical Architect - Architect Evaluation"], forbid: [] },
  "b2b-solution-architect": { title: ["B2B Solution Architect"], must: ["Arch-301", "2027", "58%", "29%", "26%", "25%"], forbid: [] },
  "b2c-commerce-architect": { title: ["B2C Commerce Architect", "Arch-303"], must: ["Arch-303", "2027", "65%", "105", "29%", "22%"], forbid: ["120 minutes"] },
  "b2c-solution-architect": { title: ["B2C Solution Architect", "Arch-302"], must: ["Arch-302", "63%", "27%", "25%", "23%", "Platform App Builder", "Data Architect", "Integration Architect"], forbid: [] },
  "heroku-architect": { title: ["Heroku Architect", "Plat-Arch-206"], must: ["Plat-Arch-206", "72%", "28%", "17%"], forbid: [] },
  "mulesoft-catalyst-consultant": { title: ["MuleSoft Catalyst Consultant", "Mule-Con-201"], must: ["Mule-Con-201", "2027", "45", "90", "70%"], forbid: ["60 questions, 120 mins"] },
  "mulesoft-platform-architect": { title: ["MuleSoft Platform Architect", "Mule-Arch-201"], must: ["Mule-Arch-201", "70%", "17%", "12%"], forbid: ["58% passing score"] },
  "mulesoft-integration-architect": { title: ["MuleSoft Platform Integration Architect"], must: ["Mule-Arch-202", "70%", "15%", "14%"], forbid: ["Integration Architecture is 30%"] },

  // Track 7: Accredited Professional (#60 - #82)
  "advanced-field-service-ap": { title: ["Advanced Field Service Accredited Professional"], must: ["2027", "46", "75", "73%", "31%", "22%"], forbid: [] },
  "b2b-commerce-admin-ap": { title: ["B2B Commerce Administrator"], must: ["75%", "20%", "17%"], forbid: ["B2B Commerce Setup is 30%", "Pass/Fail result"] },
  "b2b-commerce-developer-ap": { title: ["B2B Commerce Developer"], must: ["68%", "30%", "20%"], forbid: ["B2B Development is 30%", "Pass/Fail result"] },
  "communications-cloud-ap": { title: ["Agentforce Communications"], must: ["56%", "60%", "24%"], forbid: ["Channels and Flows are 35%", "Standard Salesforce Pr...?"] },
  "consumer-goods-cloud-ap": { title: ["Agentforce Consumer Goods"], must: ["33", "60 min", "64%", "36%"], forbid: ["60 multiple-choice questions in 90 minutes", "Consumer Goods Cloud and Retail Execution are 70%"] },
  "consumer-goods-tpm-ap": { title: ["Consumer Goods Cloud TPM Accredited Professional"], must: ["2027", "62", "75", "66%", "36%", "32%"], forbid: [] },
  "contact-center-ap": { title: ["Contact Center Accredited Professional"], must: ["2027", "66%", "75", "41%", "29%"], forbid: [] },
  // Historical facts from Salesforce Help 005298796.
  "cpq-billing-ap": { title: ["CPQ and Billing Consultant Accredited Professional"], must: ["2027", "74%", "60 min", "Revenue Management Consultant"], forbid: [] },
  "energy-utilities-ap": { title: ["Energy and Utilities Cloud Accredited Professional"], must: ["2027", "50", "75", "60%", "38%", "36%"], forbid: ["service territory management, work orders"] },
  "financial-services-cloud-ap": { title: ["Agentforce Financial Services"], must: ["50", "75 min", "56%", "46%", "42%"], forbid: ["60 multiple-choice questions in 90 minutes", "Financial Services Cloud is 40%"] },
  "health-cloud-ap": { title: ["Agentforce Health"], must: ["63%", "42%", "11%", "5%"], forbid: ["Passing score: Not published", "Health Cloud is 40%"] },
  "heroku-developer-ap": { title: ["Heroku Developer Accredited Professional"], must: ["2027", "68%", "13%", "12%"], forbid: ["Pass 3 timed 40-question mocks"] },
  "loyalty-management-ap": { title: ["Loyalty Management Accredited Professional"], must: ["2027", "50", "75", "69%", "52%", "22%"], forbid: [] },
  "manufacturing-cloud-ap": { title: ["Agentforce Manufacturing"], must: ["50", "75 min", "68%", "38%", "28%"], forbid: ["~65%", "Manufacturing Cloud is 40%"] },
  "marketing-cloud-advanced-cross-channel-ap": { title: ["Marketing Cloud Advanced Cross Channel AP"], must: ["2027", "40", "60 min", "67%", "25%", "23%"], forbid: ["You&amp;apos;ll", "Cross-Channel Strategy"] },
  "marketing-cloud-intelligence-ap": { title: ["Marketing Cloud Intelligence Accredited Professional"], must: ["2027", "40", "60%", "13%", "12%"], forbid: [] },
  "marketing-cloud-personalization-ap": { title: ["Marketing Cloud Personalization Accredited Professional"], must: ["2027", "50", "75", "70%", "18%", "16%"], forbid: [] },
  "media-cloud-ap": { title: ["Media Cloud Accredited Professional"], must: ["2027", "75", "66%", "53%", "27%", "20%"], forbid: ["Passing score is 70%"] },
  "net-zero-cloud-ap": { title: ["Net Zero Cloud Accredited Professional"], must: ["2027", "55", "75", "61%", "45%", "31%", "24%"], forbid: ["Sustainability and Reporting"] },
  "order-management-admin-ap": { title: ["Order Management Administrator Accredited Professional"], must: ["2027", "67%", "27%", "25%"], forbid: ["Pass/Fail"] },
  "order-management-developer-ap": { title: ["Order Management Developer Accredited Professional"], must: ["2027", "70%", "23%", "17%"], forbid: ["Pass/Fail", "storefront-to-order creatio..."] },
  "process-automation-ap": { title: ["Process Automation Accredited Professional"], must: ["2027", "68%", "32%", "27%", "23%", "18%"], forbid: ["Passing score is 70%"] },
  "public-sector-solutions-ap": { title: ["Agentforce 360 Public Sector"], must: ["50", "75 min", "70%", "45%", "36%", "19%"], forbid: ["Passing score: Not published"] },

  // Track 8: Sales (#83)
  "sales-foundations": { title: ["Agentforce Sales Foundations", "Sales-101"], must: ["Sales-101", "40", "105", "70%", "$75", "37%", "21%"], forbid: ["Sales Fundamentals and Salesforce CRM Basics are 75%", "$150 fee", "about 25 correct answers"] },

  // Track 9: Designer (#84 - #85)
  "strategy-designer": { title: ["Platform Strategy Designer", "Plat-UX-102"], must: ["Plat-UX-102", "70%", "32%", "26%", "23%", "19%"], forbid: ["Strategy and Discovery + Solution Design are 65%", "70% discount retake voucher"] },
  "ux-designer": { title: ["Platform User Experience Designer", "Plat-UX-101"], must: ["Plat-UX-101", "65%", "Declarative Design", "27%", "21%"], forbid: ["Research and Prototyping + Design and Delivery are 70%", "~65%"] },

  // Track 10: Tableau (#86 - #91)
  "tableau-architect": { title: ["Tableau", "Architect", "Analytics-Arch-201"], must: ["Analytics-Arch-201", "$400", "63%", "41%", "37%", "22%"], forbid: ["$250", "Tableau Architecture is 30%"] },
  // Outline from Salesforce Help 005298993 (Tableau 2024.2).
  "tableau-consultant": { title: ["Tableau Certified Consultant"], must: ["Analytics-Con-201", "$200", "63%", "22%", "40%", "16%"], forbid: ["$250"] },
  "tableau-next-consultant": { title: ["Tableau Next Consultant", "Analytics-Con-202"], must: ["Analytics-Con-202", "65%", "Agentic Experiences", "25%", "20%"], forbid: ["No section weightage table is published"] },
  "tableau-data-analyst": { title: ["Tableau Data Analyst", "Analytics-DA-201"], must: ["Analytics-DA-201", "$200", "65%", "41%", "26%", "24%"], forbid: ["$250", "Data Connection/Prep and Calculations are 50%"] },
  "tableau-desktop-foundations": { title: ["Tableau Desktop Foundations", "Analytics-101"], must: ["Analytics-101", "$75", "48%", "37%", "25%"], forbid: ["$100"] },
  // Outline from Salesforce Help 005298998 (Tableau 2022.3).
  "tableau-server-administrator": { title: ["Tableau Server Administrator"], must: ["Analytics-SA-201", "$200", "64%", "50", "20%", "26%", "36%", "12%", "6%"], forbid: ["$250", "Passing score: Not published"] },

  // Track 11: Claude (#92 - #95)
  "claude-certified-associate": { title: ["Claude Certified Associate – Foundations"], must: ["Claude Certified Associate"], forbid: [] },
  "claude-certified-developer": { title: ["Claude Certified Developer – Foundations"], must: ["Claude Certified Developer"], forbid: [] },
  "claude-certified-architect-foundations": { title: ["Claude Certified Architect – Foundations"], must: ["Claude Certified Architect"], forbid: [] },
  "claude-certified-architect-professional": { title: ["Claude Certified Architect – Professional"], must: ["Claude Certified Architect"], forbid: [] },
};

async function verifySingleCertPage(slug) {
  const url = `${BASE_URL}/certifications/${slug}`;
  const res = await fetch(url);
  assertCheck(res.status === 200, `[${slug}] HTTP 200`, `Got status ${res.status}`);
  if (res.status !== 200) return;

  const html = await res.text();

  const document = parseDocument(html);
  const rawTitle = content("head > title", document);
  assertCheck(rawTitle.length > 10 && rawTitle.length <= 60,
    `[${slug}] <title> <= 60 chars`, `Found (${rawTitle.length} chars): "${rawTitle}"`);
  assertCheck(selectAll("main h1", document).length === 1, `[${slug}] Exactly one H1`);
  const h2s = selectAll("main h2", document).map(DomUtils.textContent);
  assertCheck(h2s.length === new Set(h2s).size, `[${slug}] No duplicate H2s`);

  // 2. Global forbidden strings across all 95 pages
  for (const forbidden of [
    "Show 5 more questions",
    "Show 10 more questions",
    "km.krishnamohan25@gmail.com",
    "Webassessor/Kryterion",
    "You&amp;apos;ll",
    "no published pass markdiscount",
    ">Questions Candidates Ask<",
    ">FAQs From Candidates<",
    ">Section Weightings to Prioritise<",
    ">Where the Exam Weight Falls<",
    ">Which Sections Carry the Most Weight<",
  ]) {
    assertCheck(!html.includes(forbidden), `[${slug}] Excludes "${forbidden}"`);
  }

  // Verify question headings in the SSR practice section, excluding script payloads.
  const questionNumbers = selectAll("#practice-questions h3", document)
    .map((heading) => DomUtils.textContent(heading).match(/^Question (\d+):/))
    .filter(Boolean)
    .map((match) => Number(match[1]));
  const minimum = TWENTY_QUESTION_PAGES.has(slug) ? 20 : 15;
  for (let q = 1; q <= minimum; q++) {
    assertCheck(questionNumbers[q - 1] === q, `[${slug}] SSR Question ${q} rendered`);
  }

  // 4. Page-specific assertions for this exact slug
  const spec = PAGE_SPECS[slug];
  for (const t of spec.title) {
    assertCheck(
      rawTitle.toLowerCase().includes(t.toLowerCase()),
      `[${slug}] <title> includes "${t}"`,
      `Title: "${rawTitle}"`
    );
  }
  for (const m of spec.must) {
    assertCheck(html.includes(m), `[${slug}] HTML includes "${m}"`);
  }
  for (const f of spec.forbid) {
    assertCheck(!html.includes(f), `[${slug}] HTML excludes "${f}"`);
  }

  // 5. Keyword-cluster coverage: the seven GSC search-intent patterns.
  const cluster = CLUSTER_MAP[slug];
  assertCheck(Boolean(cluster), `[${slug}] Has a CLUSTER_MAP entry`);
  if (!cluster) return;
  const lowerHtml = html.toLowerCase();
  const bare = cluster.bare.toLowerCase();
  const vendor = cluster.vendor.toLowerCase();
  assertCheck(lowerHtml.includes(`${bare} certification`), `[${slug}] Includes "${cluster.bare} certification"`);
  assertCheck(lowerHtml.includes(`${vendor} ${bare}`), `[${slug}] Includes "${cluster.vendor} ${cluster.bare}"`);
  assertCheck(lowerHtml.includes(`${bare} dumps`), `[${slug}] Includes "${cluster.bare} dumps"`);
  assertCheck(lowerHtml.includes(`${vendor} ${bare} dumps`), `[${slug}] Includes "${cluster.vendor} ${cluster.bare} dumps"`);
  for (const alias of cluster.aliases) {
    assertCheck(lowerHtml.includes(alias.toLowerCase()), `[${slug}] Includes alias "${alias}"`);
  }
  // The NDA-compliant comparison section, its table and its FAQ answer.
  const dumpsSection = selectOne("#practice-vs-dumps", document);
  assertCheck(Boolean(dumpsSection), `[${slug}] Renders the practice-vs-dumps section`);
  if (dumpsSection) {
    const sectionText = DomUtils.textContent(dumpsSection).replace(/\s+/g, " ").toLowerCase();
    assertCheck(sectionText.includes(`${bare} dumps`), `[${slug}] Dumps section names "${cluster.bare} dumps"`);
    assertCheck(sectionText.includes(`${vendor} ${bare} dumps`), `[${slug}] Dumps section names "${cluster.vendor} ${cluster.bare} dumps"`);
    assertCheck(selectAll("tbody tr", dumpsSection).length >= 4, `[${slug}] Dumps comparison table has 4+ rows`);
    assertCheck(/code of conduct/i.test(DomUtils.textContent(selectOne("h2", dumpsSection) ?? dumpsSection)),
      `[${slug}] Dumps section H2 cites the exam code of conduct`);
  }
  const faqSectionText = content("#faq", document).toLowerCase();
  assertCheck(faqSectionText.includes(`instead of ${bare} dumps`), `[${slug}] Visible FAQ answers the dumps question`);
  const faqSchema = selectAll('script[type="application/ld+json"]', document)
    .map((node) => DomUtils.textContent(node))
    .filter((text) => text.includes('"FAQPage"'))
    .join(" ")
    .toLowerCase();
  assertCheck(faqSchema.includes(`instead of ${bare} dumps`), `[${slug}] FAQPage JSON-LD carries the dumps question`);
  // Naming-variant disambiguation lead near the top of the page.
  const namingLead = content("[data-cert-naming-lead]", document).toLowerCase();
  assertCheck(namingLead.includes(`${vendor} ${bare} certification`),
    `[${slug}] Naming lead states "${cluster.vendor} ${cluster.bare} certification"`);
  // The naming lead belongs in the line directly under the H1. Placing it
  // after the H1 but further down the page put it past the quick-facts and
  // weightage tables, well outside the opening copy a searcher reads, so the
  // gap is bounded rather than merely signed.
  const h1Index = html.search(/<h1[\s>]/);
  const leadIndex = html.indexOf("data-cert-naming-lead");
  const MAX_GAP = 1200;
  assertCheck(h1Index !== -1 && leadIndex > h1Index && leadIndex - h1Index < MAX_GAP,
    `[${slug}] Naming lead sits directly under the H1`,
    `h1 at ${h1Index}, lead at ${leadIndex}, gap ${leadIndex - h1Index} (max ${MAX_GAP})`);
  // Jump link for the dumps section, so it can earn a SERP sitelink and
  // readers can reach it from the table of contents.
  const tocLinks = selectAll('nav[aria-label="Table of contents"] a[href^="#"]', document)
    .map((a) => a.attribs.href.slice(1));
  assertCheck(tocLinks.includes("practice-vs-dumps"),
    `[${slug}] Table of contents links to #practice-vs-dumps`);
  // The table of contents must list sections in the order the page renders
  // them, or the scroll-spy highlights the wrong entry. CertTableOfContents
  // picks its tail order from a proxy (whether the page has a FAQ entry); this
  // is what proves the proxy still holds on every page.
  const positions = tocLinks
    .map((id) => ({ id, at: html.indexOf(`id="${id}"`) }))
    .filter((x) => x.at !== -1);
  const inDocumentOrder = [...positions].sort((a, b) => a.at - b.at).map((x) => x.id);
  assertCheck(JSON.stringify(positions.map((x) => x.id)) === JSON.stringify(inDocumentOrder),
    `[${slug}] Table of contents is in document order`,
    `TOC: ${positions.map((x) => x.id).join(" > ")} | DOM: ${inDocumentOrder.join(" > ")}`);

  // 5b. The four universal-template checks: the same disambiguation intro,
  // dumps section and dumps FAQ on every page, no generic track banner left,
  // and no section heading repeated immediately by its own subheading.
  const textOnly = content("main", document);
  assertCheck(textOnly.includes("You are in the right place whether you searched for"),
    `[${slug}] Renders the shared disambiguation intro`);
  assertCheck(!textOnly.includes("New to this track? Our"),
    `[${slug}] No generic "New to this track?" banner`);
  assertCheck(textOnly.includes("Official Exam Code of Conduct: Practice Questions vs. Unofficial"),
    `[${slug}] Renders the dumps code-of-conduct section`);
  assertCheck(textOnly.includes("Why should I use practice questions instead of"),
    `[${slug}] Renders the dumps FAQ question`);
  const headings = selectAll("main h2, main h3", document)
    .map((h) => DomUtils.textContent(h).replace(/\s+/g, " ").trim().toLowerCase())
    .filter(Boolean);
  const repeated = headings.filter((h, i) => i > 0 && h === headings[i - 1]);
  assertCheck(repeated.length === 0,
    `[${slug}] No heading repeated immediately by the next one`,
    repeated.join(" | "));

  // 6. The generated exam-format FAQ: a snippet-shaped answer stating scored
  // questions, duration, passing score and fee in one sentence.
  const visibleFaq = content("#faq", document);
  if (visibleFaq.includes("How many questions is the")) {
    formatFaqPages.push(slug);
    const stated = visibleFaq.match(
      /exam is (\d+) scored questions in (\d+) minutes(?:, with a (\d+%) passing score)?, and the registration fee is (free|\$[\d,]+ USD)/,
    );
    assertCheck(Boolean(stated), `[${slug}] Format FAQ states questions, duration and fee`,
      `Answer: ${visibleFaq.slice(visibleFaq.indexOf("How many questions is the"), visibleFaq.indexOf("How many questions is the") + 260)}`);
    if (stated) {
      // Every figure must already appear elsewhere on the page (Quick Facts,
      // the fees section), so the FAQ can never drift from the tables above it.
      const main = content("main", document);
      const occurrences = (needle) => main.split(needle).length - 1;
      if (stated[3]) {
        assertCheck(occurrences(stated[3]) >= 2,
          `[${slug}] Format FAQ pass mark ${stated[3]} agrees with the rest of the page`);
      }
      assertCheck(occurrences(`${stated[1]} `) >= 2,
        `[${slug}] Format FAQ question count ${stated[1]} appears elsewhere on the page`);
    }
    assertCheck(faqSchema.includes("how many questions is the"),
      `[${slug}] Format FAQ is in the FAQPage JSON-LD`);
  }
}

async function verifyHomepageAndRedirects() {
  const homeRes = await fetch(`${BASE_URL}/`);
  const homeHtml = await homeRes.text();
  assertCheck(homeRes.status === 200, "[Homepage] HTTP 200");
  const homepage = parseDocument(homeHtml);
  const cards = selectAll('section[id^="certification-track-"] li > div', homepage);
  assertCheck(cards.length === 95, "[Homepage] 95 certification cards", `Found ${cards.length}`);
  assertCheck(selectAll("main time", homepage).some((node) => DomUtils.textContent(node) === "14 November 2026"),
    "[Homepage] Last updated 14 November 2026");
  const retirementCards = cards.filter((card) => /retires Feb 1, 2027/.test(DomUtils.textContent(card)));
  assertCheck(retirementCards.length === 24, "[Homepage] 24 retirement badges",
    `Found ${retirementCards.length}`);
  const cardByHref = new Map(cards.map((card) => [selectOne("h3 a", card)?.attribs.href, card]));
  for (const slug of Object.keys(PAGE_SPECS)) {
    assertCheck(cardByHref.has(`/certifications/${slug}`), `[Homepage] ${slug} card`);
  }
  for (const [slug, code, questions, minutes, score, fee] of [
    ["administrator", "Plat-Admn-201 / ADM-201", "60", "105 min", "68%", "$200"],
    ["app-builder", "Plat-Admn-202 / DEV-402", "60", "105 min", "73%", "$200"],
    ["developer-1", "Plat-Dev-201", "60", "105 min", "68%", "$200"],
    ["developer-2", "Plat-Dev-301", "60", "120 min", "70%", "$200"],
    ["agentforce-specialist", "AI-201", "60", "105 min", "72%", "$200"],
    ["sales-cloud", "Sales-Con-201", "60", "105 min", "73%", "$200"],
    ["service-cloud", "Service-Con-201", "60", "105 min", "78%", "$200"],
    ["data-360-consultant", "Data-Con-101", "60", "105 min", "70%", "$200"],
    ["slack-administrator", "Slack-Admn-201", "60", "105 min", "65%", "$200"],
    ["sales-foundations", "Sales-101", "40", "105 min", "70%", "$75"],
    ["public-sector-solutions-consultant", "PubSec-Con-201", "60", "105 min", "72%", "$150"],
  ]) {
    const card = cardByHref.get(`/certifications/${slug}`);
    if (!card) continue;
    const values = new Map(selectAll("dl dt", card).map((term) => [
      DomUtils.textContent(term),
      DomUtils.textContent(DomUtils.nextElementSibling(term)),
    ]));
    assertCheck(DomUtils.textContent(card).includes(code), `[Homepage] ${slug} code ${code}`);
    for (const [label, value] of [["Questions", questions], ["Time", minutes], ["Pass mark", score], ["Exam fee", fee]]) {
      const actual = values.get(label) ?? "";
      assertCheck(actual === value || (label === "Exam fee" && actual.startsWith(`${value} (`)),
        `[Homepage] ${slug} ${label}`, `Expected ${value}, got ${actual}`);
    }
  }
  const roleHubs = [
    "consultant", "administrator", "developer", "architect", "marketing",
    "accredited-professional", "associate", "sales", "designer", "tableau",
  ];
  const footerLinks = new Set(selectAll("footer a[href]", homepage).map((link) => link.attribs.href));
  for (const slug of [
    "administrator", "app-builder", "developer-1", "agentforce-specialist", "sales-cloud", "service-cloud",
    "data-360-consultant", "integration-architect", "data-architect", "system-architect", "application-architect",
    "technical-architect",
  ]) {
    assertCheck(footerLinks.has(`/certifications/${slug}`), `[Footer] Links to ${slug}`);
  }
  for (const role of roleHubs) {
    const path = `/certifications/role/${role}`;
    assertCheck(footerLinks.has(path), `[Footer] Links to ${path}`);
    const res = await fetch(`${BASE_URL}${path}`);
    assertCheck(res.status === 200, `[Role hub] ${path} HTTP 200`);
    const hub = parseDocument(await res.text());
    if (role === "marketing") {
      const marketingHub = content("main", hub);
      for (const term of ["90 minutes", "67% passing", "Marketing Automation (26%)", "Subscriber and Data Management (26%)"]) {
        assertCheck(marketingHub.includes(term), `[Role hub] Marketing FAQ includes ${term}`);
      }
    }
    for (const slug of ({
      consultant: ["public-sector-solutions-consultant", "marketing-cloud-next-consultant"],
      marketing: ["marketing-cloud-next-consultant"],
    }[role] ?? [])) {
      assertCheck(Boolean(selectOne(`main a[href="/certifications/${slug}"]`, hub)),
        `[Role hub] ${role} lists ${slug}`);
    }
  }
  for (const path of [
    "/salesforce-certification-exam-day-tips", "/how-to-register-salesforce-exam", "/salesforce-exam-retake-policy",
  ]) {
    const res = await fetch(`${BASE_URL}${path}`);
    const page = parseDocument(await res.text());
    const text = content("main", page);
    assertCheck(res.status === 200 && /Trailhead Academy/i.test(text) && /Pearson VUE|OnVUE/i.test(text),
      `[Exam logistics] ${path} uses Trailhead Academy and Pearson VUE`);
  }

  for (const [oldPath, targetPath] of [
    ["/adm-201-study-guide", "/certifications/administrator"],
    ["/adm-201-exam-tips", "/certifications/administrator"],
    ["/b2c-commerce-developer-study-guide", "/certifications/b2c-commerce-developer"],
    ["/business-analyst-study-guide", "/certifications/business-analyst"],
    ["/nonprofit-cloud-consultant-study-guide", "/certifications/nonprofit-cloud"],
    ["/nonprofit-success-pack-consultant-study-guide", "/certifications/nonprofit-success-pack-consultant"],
    ["/revenue-cloud-consultant-exam-tips", "/certifications/revenue-cloud-consultant"],
    ["/certifications/platform-administrator", "/certifications/administrator"],
    ["/certifications/platform-app-builder", "/certifications/app-builder"],
    ["/certifications/platform-developer-1", "/certifications/developer-1"],
    ["/certifications/platform-developer-i", "/certifications/developer-1"],
    ["/certifications/platform-developer-2", "/certifications/developer-2"],
    ["/certifications/platform-developer-ii", "/certifications/developer-2"],
    ["/certifications/agentforce-sales-consultant", "/certifications/sales-cloud"],
    ["/certifications/sales-cloud-consultant", "/certifications/sales-cloud"],
    ["/certifications/agentforce-service-consultant", "/certifications/service-cloud"],
    ["/certifications/service-cloud-consultant", "/certifications/service-cloud"],
    ["/certifications/data-cloud-consultant", "/certifications/data-360-consultant"],
    ["/certifications/field-service-consultant", "/certifications/field-service"],
    ["/certifications/experience-cloud-consultant", "/certifications/experience-cloud"],
    ["/certifications/account-engagement-consultant", "/certifications/pardot-consultant"],
    ["/certifications/account-engagement-specialist", "/certifications/pardot-specialist"],
    ["/certifications/marketing-cloud-email-specialist", "/certifications/email-specialist"],
    ["/certifications/marketing-cloud-engagement-consultant", "/certifications/marketing-cloud-consultant"],
    ["/certifications/nonprofit-cloud-consultant", "/certifications/nonprofit-cloud"],
    ["/certifications/claude-certified-associate-foundations", "/certifications/claude-certified-associate"],
    ["/certifications/claude-certified-developer-foundations", "/certifications/claude-certified-developer"],
    ["/b2c-commerce-developer-exam-tips", "/certifications/b2c-commerce-developer"],
    ["/business-analyst-exam-tips", "/certifications/business-analyst"],
    ["/nonprofit-cloud-exam-tips", "/certifications/nonprofit-cloud"],
  ]) {
    const r = await fetch(`${BASE_URL}${oldPath}`, { redirect: "manual" });
    const loc = r.headers.get("location") || "";
    assertCheck(
      (r.status === 301 || r.status === 308) && loc !== "" && new URL(loc, BASE_URL).pathname === targetPath,
      `[Redirect] ${oldPath} -> ${targetPath}`,
      `Status: ${r.status}, Location: ${loc}`
    );
  }
}

(async () => {
  const slugs = Object.keys(PAGE_SPECS);
  assertCheck(slugs.length === 95, "Verifier covers 95 certification slugs");
  console.log(`Verifying all ${slugs.length} certification pages individually...`);
  for (const slug of slugs) {
    await verifySingleCertPage(slug);
  }
  assertCheck(formatFaqPages.length === EXPECTED_FORMAT_FAQ_PAGES,
    `Generated exam-format FAQ renders on ${EXPECTED_FORMAT_FAQ_PAGES} pages`,
    `Rendered on ${formatFaqPages.length}: ${formatFaqPages.join(", ")}`);
  await verifyHomepageAndRedirects();
  console.log("\n==========================================");
  console.log(`Checks passed: ${passed} | Checks failed: ${failures}`);
  if (failures === 0) {
    console.log("SUCCESS: All 95 certification pages, homepage cards, role hubs, exam logistics pages, and permanent redirects passed with 0 failures!");
    process.exit(0);
  } else {
    console.error(`FAILED: ${failures} check(s) failed.`);
    process.exit(1);
  }
})();
