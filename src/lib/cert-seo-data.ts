import type { Metadata } from 'next'
import { CERTIFICATION_CATEGORIES } from './certifications-data'
import { getCertPrimaryName, getCertFormerName } from './cert-name-aliases'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://trailblazeprep.com'

/** Build slug -> display name from certification categories (first occurrence wins) */
function buildSlugToTitle(): Record<string, string> {
  const map: Record<string, string> = {}
  for (const cat of CERTIFICATION_CATEGORIES) {
    for (const item of cat.items) {
      const slug = item.href.replace('/certifications/', '').replace(/\/$/, '')
      if (!map[slug]) map[slug] = item.name
    }
  }
  return map
}

const slugToTitle = buildSlugToTitle()

/** Official "Salesforce Certified X" display name. Uses getCertPrimaryName so all pages use naming standard. */
function slugToDisplayName(slug: string): string {
  const fromCategories = slugToTitle[slug]
  const fallback =
    fromCategories ||
    slug
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ') + ' Certification'
  return getCertPrimaryName(slug, fallback)
}

/** Exam code for metadata and intro; add more as needed. */
export const SLUG_TO_EXAM_CODE: Record<string, string> = {
  administrator: 'ADM-201',
  'advanced-administrator': 'ADM-211',
  'developer-1': 'PD1',
  'developer-2': 'PD2',
  'app-builder': 'App Builder',
  'administrator-practice-test': 'ADM-201 Practice',
  'email-specialist-practice-test': 'Email Specialist Practice',
  'sales-cloud': 'Sales Cloud Consultant',
  'service-cloud': 'Service Cloud Consultant',
  'technical-architect': 'CTA',
  'technical-architect-evaluation': 'CTA Evaluation',
  'technical-architect-review-board': 'CTA Review Board',
}

/** Short title for <title>: under 60 chars to avoid truncation in SERPs. Front-loads "Practice Questions" for intent. */
function getCertMetaTitle(slug: string): string {
  const brand = ' | Trailblaze Prep'
  const maxMain = 60 - brand.length // 47 chars for main part
  const examCode = SLUG_TO_EXAM_CODE[slug]
  const certName = slugToDisplayName(slug)
  const primaryName = getCertPrimaryName(slug, certName)
  const shortTitles: Record<string, string> = {
    administrator: 'Salesforce Certified Platform Administrator Practice Questions & Study Guide',
    'advanced-administrator': 'Salesforce Certified Advanced Administrator Practice Questions & Study Guide',
    'sales-cloud': 'Salesforce Certified Sales Cloud Consultant Practice Questions & Study Guide',
    'service-cloud': 'Salesforce Certified Service Cloud Consultant Practice Questions & Study Guide',
    'app-builder': 'Salesforce Certified Platform App Builder Practice Questions & Study Guide',
    'developer-1': 'Salesforce Certified Platform Developer I Practice Questions & Study Guide',
    'developer-2': 'Salesforce Certified Platform Developer II Practice Questions & Study Guide',
    'email-specialist': 'Salesforce Certified Marketing Cloud Email Specialist Practice Questions & Study Guide',
    'data-architect': 'Salesforce Certified Data Architect Practice Questions & Study Guide',
    'pardot-specialist': 'Salesforce Certified Account Engagement (Pardot) Specialist Practice Questions & Study Guide',
    'experience-cloud': 'Salesforce Certified Experience Cloud Consultant Practice Questions & Study Guide',
    'javascript-developer-i': 'Salesforce Certified JavaScript Developer I Practice Questions & Study Guide',
    'integration-architect': 'Salesforce Certified Integration Architect Practice Questions & Study Guide',
    'application-architect': 'Salesforce Certified Application Architect Practice Questions & Study Guide',
  }
  const main = shortTitles[slug]
  if (main) return main.length <= maxMain ? main + brand : main.slice(0, maxMain - 3) + '...' + brand
  
  // Fallback: primaryName + Practice Questions & Study Guide
  const baseName = primaryName.replace(/\s*\([^)]+\)\s*$/, '').trim() || primaryName
  const hasCodeInName = examCode && primaryName.includes(examCode)
  const displayName = examCode && !hasCodeInName ? `${baseName} (${examCode})` : primaryName
  let title = `${displayName} Practice Questions & Study Guide` + brand
  if (title.length > 60) title = title.slice(0, 57) + '...'
  return title
}

/** Unique meta description 140–160 chars for certification pages. Rendered as <meta name="description" content="..."> in <head>. */
export function getCertMetaDescription(slug: string): string {
  const certName = slugToDisplayName(slug)
  const examCode = SLUG_TO_EXAM_CODE[slug]
  const formerName = getCertFormerName(slug)
  const templates: Record<string, string> = {
    administrator:
      'Salesforce Certified Platform Administrator (ADM-201)—formerly Salesforce Certified Administrator. Section-wise exam weightage, 500+ practice questions, study tips. Pass on your first try.',
    'sales-cloud':
      'Prepare for Sales Cloud Consultant certification with practice questions, exam weightage breakdown, solution design strategies, and expert study tips.',
    'service-cloud':
      'Prepare for Service Cloud Consultant certification with practice questions, section-wise weightage, and implementation strategies.',
    'app-builder':
      'Prepare for Platform App Builder with section-wise exam weightage, practice questions, and declarative development study tips.',
    'developer-1':
      'Prepare for Platform Developer I (PD1) with exam weightage, Apex and LWC practice questions, and study strategies.',
  }
  const custom = templates[slug]
  if (custom) return custom.length > 160 ? custom.slice(0, 157) + '...' : custom
  const primaryName = getCertPrimaryName(slug, certName)
  const base =
    examCode
      ? `Prepare for the ${primaryName} exam with section-wise weightage, practice questions, and study tips. Aligned with official outlines.`
      : `Prepare for the ${primaryName} exam with section-wise weightage, practice questions, and study tips. Aligned with official outlines.`
  const desc = formerName
    ? `${primaryName}${examCode ? ` (${examCode})` : ''}—formerly ${formerName}. Section-wise weightage, practice questions, study tips.`
    : base
  return desc.length > 160 ? desc.slice(0, 157) + '...' : desc
}

/** SEO metadata for a certification page: unique title <60 chars (absolute), description 140–160, canonical. */
export function getCertMetadata(slug: string): Metadata {
  const certName = slugToDisplayName(slug)
  const examCode = SLUG_TO_EXAM_CODE[slug]
  const titleForMeta = getCertMetaTitle(slug)
  const descForMeta = getCertMetaDescription(slug)
  const canonicalUrl = `${baseUrl}/certifications/${slug}`
  const primaryName = getCertPrimaryName(slug, certName)
  const formerNameForKeywords = getCertFormerName(slug)
  const keywords =
    slug === 'administrator'
      ? 'Salesforce Certified Administrator, Salesforce Administrator Certification, ADM-201, Salesforce Administrator exam, practice questions, exam weightage, study guide'
      : `${primaryName}, Salesforce certification, practice questions, exam weightage, study guide${examCode ? `, ${examCode}` : ''}${formerNameForKeywords ? `, ${formerNameForKeywords}` : ''}`
  // Use CONTENT_LAST_UPDATED for modified time (January 2025 = 2025-01-30)
  const publishedTime = '2025-01-01T00:00:00Z'
  const modifiedTime = '2025-01-30T00:00:00Z'
  
  return {
    title: { absolute: titleForMeta },
    description: descForMeta,
    keywords,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: titleForMeta,
      description: descForMeta,
      type: 'article',
      url: canonicalUrl,
      publishedTime,
      modifiedTime,
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${primaryName} - Practice Questions & Study Guide`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: titleForMeta,
      description: descForMeta,
      images: [`${baseUrl}/og-image.png`],
    },
    other: {
      'article:published_time': publishedTime,
      'article:modified_time': modifiedTime,
    },
  }
}

export interface BreadcrumbItem {
  name: string
  url: string
}

/**
 * Breadcrumb items for a certification page.
 * With role: Home > Certifications > [Role] > Cert Name (links to role hub and All Certifications).
 * Without role: Home > Certifications > Cert Name.
 */
export function getCertBreadcrumb(
  slug: string,
  certTitle: string,
  roleSlug?: string,
  roleName?: string
): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [
    { name: 'Home', url: baseUrl },
    { name: 'Certifications', url: `${baseUrl}/certifications` },
  ]
  if (roleSlug && roleName) {
    items.push({ name: roleName, url: `${baseUrl}/certifications/role/${roleSlug}` })
  }
  items.push({ name: certTitle, url: `${baseUrl}/certifications/${slug}` })
  return items
}

export interface FaqItem {
  question: string
  answer: string
}

/** Default FAQ for any certification page (2–3 questions for FAQPage schema) */
function getCertFaqName(slug: string, certTitle: string): string {
  const primary = getCertPrimaryName(slug, certTitle)
  const code = SLUG_TO_EXAM_CODE[slug]
  return code ? `${primary} (${code})` : primary
}

// Cert-specific FAQs - unique questions per certification for SEO
const CERT_SPECIFIC_FAQS: Record<string, FaqItem[]> = {
  administrator: [
    {
      question: 'Is there a prerequisite for the Salesforce Certified Platform Administrator exam?',
      answer: 'No, there is no formal prerequisite. However, Salesforce recommends 6+ months of hands-on experience as a Salesforce Administrator and completion of the Platform Fundamentals trail on Trailhead before taking the exam.',
    },
    {
      question: 'How difficult is the Platform Administrator certification exam?',
      answer: 'The Platform Administrator exam is considered intermediate-level. It covers a broad range of topics including configuration, security, automation, and analytics. With proper preparation using Trailhead, hands-on practice, and practice questions, most candidates with 6+ months of experience can pass.',
    },
  ],
  'app-builder': [
    {
      question: 'What is the difference between Platform Administrator and Platform App Builder certifications?',
      answer: 'Platform Administrator focuses on day-to-day administration, security, and user management. Platform App Builder focuses on declarative development—building custom applications using clicks, not code. App Builder is ideal for those who want to build custom apps without programming.',
    },
    {
      question: 'Do I need programming experience for the Platform App Builder exam?',
      answer: 'No, the Platform App Builder certification focuses on declarative (no-code) development. You should be comfortable with data modeling, relationships, automation tools like Flow, and Lightning App Builder, but no programming knowledge is required.',
    },
  ],
  'sales-cloud': [
    {
      question: 'Is the Sales Cloud Consultant certification required for consulting roles?',
      answer: 'While not always required, the Sales Cloud Consultant certification is highly valued for consulting and implementation roles. It demonstrates expertise in designing and implementing Sales Cloud solutions, which is essential for client-facing positions.',
    },
    {
      question: 'What experience do I need before taking the Sales Cloud Consultant exam?',
      answer: 'Salesforce recommends having the Platform Administrator certification and hands-on experience implementing Sales Cloud solutions. You should be comfortable with lead management, opportunity management, forecasting, and territory management.',
    },
  ],
  'service-cloud': [
    {
      question: 'What topics are most important for the Service Cloud Consultant exam?',
      answer: 'Solution Design (25%) is the largest section, followed by Case and Knowledge Management, Omnichannel, and Service Analytics. Focus on understanding how to design service solutions that meet business requirements, configure case management, and set up knowledge bases.',
    },
    {
      question: 'Do I need the Platform Administrator certification before Service Cloud Consultant?',
      answer: 'Yes, Salesforce requires the Platform Administrator certification as a prerequisite for the Service Cloud Consultant exam. You should also have hands-on experience configuring Service Cloud features like cases, knowledge, and Omnichannel.',
    },
  ],
  'developer-1': [
    {
      question: 'What programming languages do I need to know for Platform Developer I?',
      answer: 'You need to know Apex (Salesforce\'s Java-like language) and JavaScript for Lightning Web Components. Experience with Java, C#, or similar object-oriented languages is helpful, but you can learn Apex through Trailhead and hands-on practice.',
    },
    {
      question: 'How much coding experience do I need for Platform Developer I?',
      answer: 'While some programming experience is helpful, you can learn Apex and Lightning Web Components through Trailhead. The exam focuses on understanding when to use code vs declarative tools, governor limits, testing, and basic Apex/LWC concepts rather than advanced programming.',
    },
  ],
  'data-architect': [
    {
      question: 'What certifications do I need before Data Architect?',
      answer: 'You need both Application Architect and System Architect certifications before you can earn the Data Architect credential. The Data Architect certification is part of the Technical Architect path.',
    },
    {
      question: 'How difficult is the Data Architect certification?',
      answer: 'The Data Architect certification is advanced-level and requires deep knowledge of data modeling, LDV (Large Data Volume), identity management, and integration patterns. It\'s one of the most challenging Salesforce certifications and requires years of implementation experience.',
    },
  ],
  'technical-architect': [
    {
      question: 'What is the difference between Technical Architect Evaluation and Review Board?',
      answer: 'The Technical Architect Evaluation is a written exam with scenario-based and multiple-choice questions. The Review Board is a presentation where you design a solution for a scenario and defend it before a board of CTAs. You must pass the Evaluation before taking the Review Board.',
    },
    {
      question: 'How long does it take to become a Certified Technical Architect (CTA)?',
      answer: 'Most candidates take 1-2 years after earning Application Architect and System Architect. The CTA path requires extensive experience, multiple certifications, and significant preparation for both the Evaluation and Review Board.',
    },
  ],
  'ai-associate': [
    {
      question: 'Do I need technical experience for the AI Associate certification?',
      answer: 'No, the AI Associate certification is designed for business users and doesn\'t require technical or programming experience. It focuses on understanding AI concepts, Einstein capabilities, and responsible AI practices.',
    },
    {
      question: 'What Salesforce products are covered in the AI Associate exam?',
      answer: 'The exam covers Einstein capabilities across Sales Cloud, Service Cloud, Marketing Cloud, and Commerce Cloud. You should understand what each Einstein product does, when to use it, and responsible AI principles.',
    },
  ],
  'platform-foundations': [
    {
      question: 'Is Platform Foundations a good starting point for Salesforce certifications?',
      answer: 'Yes, Platform Foundations is designed as an entry-level certification for users with up to 6 months of experience. It validates foundational knowledge and is often a stepping stone to the Platform Administrator certification.',
    },
    {
      question: 'What topics are covered in the Platform Foundations exam?',
      answer: 'The exam covers Customer 360 Platform basics, navigation and data model (Account, Contact, Lead, Opportunity), and reports and dashboards. It\'s a broad overview rather than deep technical knowledge.',
    },
  ],
  // Additional certifications
  'advanced-administrator': [
    {
      question: 'What is the difference between Platform Administrator and Advanced Administrator?',
      answer: 'Platform Administrator focuses on core administration tasks. Advanced Administrator covers advanced topics like complex sharing scenarios, advanced automation, cross-object reporting, and organization-wide settings. You need Platform Administrator first.',
    },
    {
      question: 'How much experience do I need for Advanced Administrator?',
      answer: 'Salesforce recommends having the Platform Administrator certification and 12+ months of admin experience. You should be comfortable with complex sharing, advanced automation, and cross-object functionality.',
    },
  ],
  'developer-2': [
    {
      question: 'What is the difference between Platform Developer I and Platform Developer II?',
      answer: 'Platform Developer I focuses on basic Apex, LWC, and testing. Platform Developer II covers advanced topics like design patterns, architecture, advanced Apex, async processing, and package development. You need PD1 first.',
    },
    {
      question: 'How difficult is Platform Developer II compared to Developer I?',
      answer: 'Platform Developer II is significantly more challenging. It requires deep understanding of design patterns, architecture decisions, advanced Apex concepts, and best practices. Most candidates need 2+ years of development experience.',
    },
  ],
  'javascript-developer-i': [
    {
      question: 'Do I need Platform Developer I before JavaScript Developer I?',
      answer: 'While not required, Platform Developer I is highly recommended. JavaScript Developer I focuses specifically on JavaScript, LWC, and Aura, so having PD1 knowledge helps, but you can take it independently if you have strong JavaScript skills.',
    },
    {
      question: 'What JavaScript concepts are most important for JavaScript Developer I?',
      answer: 'Focus on ES6+ features (arrow functions, promises, async/await), DOM manipulation, JavaScript debugging, LWC lifecycle hooks and decorators, and testing with Jest. The exam is heavily JavaScript-focused.',
    },
  ],
  'experience-cloud': [
    {
      question: 'What is Experience Cloud (formerly Community Cloud)?',
      answer: 'Experience Cloud allows you to create branded portals for customers, partners, or employees. It enables self-service, collaboration, and engagement outside your main Salesforce org.',
    },
    {
      question: 'Do I need Platform Administrator before Experience Cloud Consultant?',
      answer: 'Yes, Platform Administrator is required. You should also have hands-on experience configuring Experience Cloud sites, sharing sets, audiences, and community features.',
    },
  ],
  'field-service': [
    {
      question: 'What is Field Service Cloud used for?',
      answer: 'Field Service Cloud manages mobile workforce operations including scheduling, dispatch, work orders, service appointments, and mobile execution. It\'s ideal for companies with field technicians or service teams.',
    },
    {
      question: 'Do I need Platform Administrator before Field Service Consultant?',
      answer: 'Yes, Platform Administrator is required. You should also have hands-on experience with Field Service features like scheduling, dispatch, mobile app, and work order management.',
    },
  ],
  'data-cloud-consultant': [
    {
      question: 'What is Data Cloud (formerly Customer Data Platform)?',
      answer: 'Data Cloud unifies customer data from multiple sources, creates a single customer identity, and activates that data across Salesforce clouds for personalized experiences.',
    },
    {
      question: 'What experience do I need for Data Cloud Consultant?',
      answer: 'You should have Salesforce CRM experience and understanding of data management, marketing, or analytics. Hands-on experience with Data Cloud setup, identity resolution, and activation is recommended.',
    },
  ],
  'crm-analytics-einstein-discovery-consultant': [
    {
      question: 'What is CRM Analytics (formerly Tableau CRM)?',
      answer: 'CRM Analytics is Salesforce\'s analytics platform that provides AI-powered insights, dashboards, and data visualization directly within Salesforce. It includes Einstein Discovery for predictive analytics.',
    },
    {
      question: 'Do I need Tableau experience for CRM Analytics Consultant?',
      answer: 'No, CRM Analytics is different from Tableau. However, understanding data visualization, analytics concepts, and having Salesforce Administrator knowledge is helpful.',
    },
  ],
  'education-cloud-consultant': [
    {
      question: 'What is Education Cloud used for?',
      answer: 'Education Cloud helps educational institutions manage student lifecycle from admissions to graduation, including applications, enrollment, courses, programs, and student engagement.',
    },
    {
      question: 'Do I need education industry experience for Education Cloud Consultant?',
      answer: 'While helpful, it\'s not required. You need Platform Administrator certification and should understand educational processes. Hands-on experience with Education Cloud features is recommended.',
    },
  ],
  'pardot-consultant': [
    {
      question: 'What is Account Engagement (formerly Pardot)?',
      answer: 'Account Engagement is Salesforce\'s B2B marketing automation platform that helps marketers generate leads, nurture prospects, and measure marketing ROI through integration with Salesforce CRM.',
    },
    {
      question: 'Do I need Platform Administrator before Pardot Consultant?',
      answer: 'Yes, Platform Administrator is required. You should also have hands-on experience with Account Engagement features like lead scoring, automation, email campaigns, and Salesforce integration.',
    },
  ],
  'marketing-cloud-consultant': [
    {
      question: 'What is Marketing Cloud Engagement?',
      answer: 'Marketing Cloud Engagement (formerly Email Studio) is Salesforce\'s email and cross-channel marketing platform for B2C marketing, including email, SMS, push notifications, and journey orchestration.',
    },
    {
      question: 'What experience do I need for Marketing Cloud Consultant?',
      answer: 'You need Platform Administrator certification and hands-on Marketing Cloud experience. You should understand email marketing, journey builder, subscriber management, and cross-channel marketing strategies.',
    },
  ],
  'nonprofit-cloud': [
    {
      question: 'What is Nonprofit Cloud?',
      answer: 'Nonprofit Cloud helps nonprofit organizations manage programs, cases, donations, and engagement. It includes features for program management, case management, and donor engagement.',
    },
    {
      question: 'Do I need nonprofit experience for Nonprofit Cloud Consultant?',
      answer: 'While helpful, it\'s not required. You need Platform Administrator certification and should understand nonprofit operations. Hands-on experience with Nonprofit Cloud or NPSP is recommended.',
    },
  ],
  'nonprofit-success-pack-consultant': [
    {
      question: 'What is the Nonprofit Success Pack (NPSP)?',
      answer: 'NPSP is a free, open-source Salesforce solution for nonprofits that includes data model, automation, and features for managing donors, households, donations, and programs.',
    },
    {
      question: 'What\'s the difference between Nonprofit Cloud and NPSP Consultant?',
      answer: 'Nonprofit Cloud is Salesforce\'s native solution. NPSP is a managed package built on Salesforce. The NPSP Consultant cert focuses on implementing and configuring the NPSP package.',
    },
  ],
  'omnistudio-consultant': [
    {
      question: 'What is OmniStudio?',
      answer: 'OmniStudio is a Salesforce Industries solution that enables declarative development of guided experiences, digital flows, and flexible cards for industry-specific use cases.',
    },
    {
      question: 'Do I need Platform Administrator before OmniStudio Consultant?',
      answer: 'Yes, Platform Administrator is recommended. You should have hands-on experience with OmniStudio features like OmniScripts, FlexCards, and DataRaptors.',
    },
  ],
  'revenue-cloud-consultant': [
    {
      question: 'What is Revenue Cloud?',
      answer: 'Revenue Cloud combines CPQ (Configure, Price, Quote) and Billing to manage the entire quote-to-cash process, including product configuration, pricing, quoting, contracts, and billing.',
    },
    {
      question: 'Do I need CPQ experience for Revenue Cloud Consultant?',
      answer: 'Yes, Revenue Cloud Consultant requires deep CPQ knowledge plus Billing expertise. You should have Platform Administrator certification and hands-on CPQ/Billing experience.',
    },
  ],
  'slack-consultant': [
    {
      question: 'What is Slack integration with Salesforce?',
      answer: 'Slack integration enables teams to collaborate, receive Salesforce notifications, and take actions on Salesforce records directly from Slack channels and workflows.',
    },
    {
      question: 'Do I need Salesforce experience for Slack Consultant?',
      answer: 'Yes, you should understand Salesforce basics and have Slack admin experience. The certification focuses on integrating Slack with Salesforce and designing collaboration solutions.',
    },
  ],
  'slack-administrator': [
    {
      question: 'What does a Slack Administrator do?',
      answer: 'Slack Administrators configure Slack workspaces, manage channels, set up permissions, configure integrations (including Salesforce), and ensure security and compliance.',
    },
    {
      question: 'Do I need Salesforce knowledge for Slack Administrator?',
      answer: 'While helpful, Salesforce knowledge isn\'t required. You need Slack admin experience. However, understanding Salesforce integration is valuable for the exam.',
    },
  ],
  'email-specialist': [
    {
      question: 'What is Marketing Cloud Email Specialist?',
      answer: 'The Email Specialist certification validates skills in Marketing Cloud Email Studio, including email creation, subscriber management, send management, and email analytics.',
    },
    {
      question: 'Do I need Marketing Cloud Consultant before Email Specialist?',
      answer: 'No, Email Specialist is a standalone certification. However, having Marketing Cloud experience and understanding email marketing best practices is essential.',
    },
  ],
  'marketing-cloud-engagement-admin': [
    {
      question: 'What is Marketing Cloud Engagement Admin?',
      answer: 'Marketing Cloud Engagement Admin focuses on administrative tasks like setup, subscriber management, content creation, journey builder, and analytics within Marketing Cloud.',
    },
    {
      question: 'What\'s the difference between Marketing Cloud Admin and Consultant?',
      answer: 'Admin focuses on day-to-day administration and configuration. Consultant focuses on strategy, solution design, and implementing Marketing Cloud solutions for clients.',
    },
  ],
  'marketing-cloud-engagement-foundations': [
    {
      question: 'Is Marketing Cloud Engagement Foundations a good starting point?',
      answer: 'Yes, it\'s an entry-level certification for Marketing Cloud. It covers basics like Marketing Cloud overview, subscriber management, and content creation. No prior Marketing Cloud experience required.',
    },
    {
      question: 'What topics are covered in Marketing Cloud Engagement Foundations?',
      answer: 'The exam covers Marketing Cloud overview (30%), subscriber and data management (35%), and content and sends (35%). It\'s a broad introduction to Marketing Cloud concepts.',
    },
  ],
  'mulesoft-integration-foundations': [
    {
      question: 'Is MuleSoft Integration Foundations a good starting point?',
      answer: 'Yes, it\'s an entry-level certification for MuleSoft. It covers integration concepts, Anypoint Platform basics, and API design. No prior MuleSoft experience required, but basic IT knowledge helps.',
    },
    {
      question: 'What topics are covered in MuleSoft Integration Foundations?',
      answer: 'The exam covers integration concepts (35%), Anypoint Platform basics (35%), and APIs and design (30%). It focuses on concepts rather than deep technical implementation.',
    },
  ],
  'mulesoft-developer-i': [
    {
      question: 'What programming experience do I need for MuleSoft Developer I?',
      answer: 'You need programming experience (Java, JavaScript, or similar). You should understand APIs, data transformation, and basic integration concepts. MuleSoft uses DataWeave for transformations.',
    },
    {
      question: 'What is MuleSoft used for?',
      answer: 'MuleSoft Anypoint Platform enables API-led connectivity, allowing organizations to connect applications, data, and devices through APIs and integration solutions.',
    },
  ],
  'mulesoft-developer-ii': [
    {
      question: 'What is the difference between MuleSoft Developer I and II?',
      answer: 'Developer I focuses on building basic Mule applications and APIs. Developer II covers advanced topics like error handling, performance optimization, API design patterns, and deployment strategies.',
    },
    {
      question: 'Do I need MuleSoft Developer I before Developer II?',
      answer: 'While not strictly required, Developer I is highly recommended. Developer II assumes you have Developer I knowledge and builds on it with advanced concepts.',
    },
  ],
  'mulesoft-hyperautomation-developer': [
    {
      question: 'What is MuleSoft Hyperautomation?',
      answer: 'Hyperautomation combines RPA (Robotic Process Automation), integration, and automation to automate complex business processes across systems.',
    },
    {
      question: 'Do I need RPA experience for Hyperautomation Developer?',
      answer: 'Yes, you should understand RPA concepts and tools. The certification focuses on combining RPA with MuleSoft integration to create end-to-end automation solutions.',
    },
  ],
  'mulesoft-catalyst-consultant': [
    {
      question: 'What does a MuleSoft Catalyst Consultant do?',
      answer: 'MuleSoft Catalyst Consultants help organizations design integration strategies, recommend API-led connectivity approaches, and guide MuleSoft platform adoption.',
    },
    {
      question: 'Do I need MuleSoft Developer certifications before Catalyst Consultant?',
      answer: 'While not required, having MuleSoft Developer knowledge is helpful. The Catalyst Consultant focuses on strategy and consulting rather than deep technical implementation.',
    },
  ],
  'mulesoft-platform-architect': [
    {
      question: 'What is MuleSoft Platform Architect?',
      answer: 'MuleSoft Platform Architect designs integration architectures using Anypoint Platform, focusing on API-led connectivity, platform governance, and enterprise integration patterns.',
    },
    {
      question: 'Do I need MuleSoft Developer II before Platform Architect?',
      answer: 'Yes, MuleSoft Developer II is recommended. Platform Architect requires deep understanding of MuleSoft architecture, patterns, and platform capabilities.',
    },
  ],
  'mulesoft-integration-architect': [
    {
      question: 'What is the difference between Platform Architect and Integration Architect?',
      answer: 'Platform Architect focuses on Anypoint Platform architecture and governance. Integration Architect focuses on designing complex integration solutions, API design, and integration patterns.',
    },
    {
      question: 'Do I need Platform Architect before Integration Architect?',
      answer: 'Yes, MuleSoft Platform Architect is typically required. Integration Architect builds on platform knowledge with deeper focus on integration solution design.',
    },
  ],
  'b2c-commerce-developer': [
    {
      question: 'What is B2C Commerce (formerly Commerce Cloud)?',
      answer: 'B2C Commerce is Salesforce\'s e-commerce platform for B2C retailers. It enables businesses to create online storefronts, manage products, and process orders.',
    },
    {
      question: 'What programming languages do I need for B2C Commerce Developer?',
      answer: 'You need JavaScript knowledge for storefront customization, ISML (Commerce Cloud\'s templating language), and understanding of e-commerce concepts. Java knowledge is also helpful.',
    },
  ],
  'b2c-commerce-architect': [
    {
      question: 'What does a B2C Commerce Architect do?',
      answer: 'B2C Commerce Architects design e-commerce architectures, plan storefront experiences, integrate with external systems, and ensure performance, security, and scalability.',
    },
    {
      question: 'Do I need B2C Commerce Developer before Architect?',
      answer: 'Yes, B2C Commerce Developer is typically required. Architect builds on development knowledge with focus on architecture, integration patterns, and enterprise design.',
    },
  ],
  'b2c-solution-architect': [
    {
      question: 'What is B2C Solution Architect?',
      answer: 'B2C Solution Architect designs end-to-end B2C solutions combining B2C Commerce with Experience Cloud, integrating commerce, marketing, and customer engagement.',
    },
    {
      question: 'What certifications do I need before B2C Solution Architect?',
      answer: 'You typically need B2C Commerce Architect and Experience Cloud Consultant. The certification focuses on designing integrated B2C customer experiences.',
    },
  ],
  'b2b-solution-architect': [
    {
      question: 'What is B2B Solution Architect?',
      answer: 'B2B Solution Architect designs B2B commerce solutions, focusing on catalog management, pricing, buyer groups, contracts, and B2B-specific commerce features.',
    },
    {
      question: 'What experience do I need for B2B Solution Architect?',
      answer: 'You need B2B Commerce experience and architect-level knowledge. Understanding B2B commerce patterns, catalog management, and buyer journeys is essential.',
    },
  ],
  'b2b-commerce-admin-ap': [
    {
      question: 'What is B2B Commerce Admin Accredited Professional?',
      answer: 'B2B Commerce Admin AP validates skills in configuring and administering B2B Commerce, including catalog setup, pricing, buyer groups, and order management.',
    },
    {
      question: 'Do I need Platform Administrator before B2B Commerce Admin AP?',
      answer: 'Yes, Platform Administrator is recommended. You should have hands-on B2B Commerce experience configuring catalogs, pricing, and buyer management.',
    },
  ],
  'b2b-commerce-developer-ap': [
    {
      question: 'What is B2B Commerce Developer Accredited Professional?',
      answer: 'B2B Commerce Developer AP validates skills in developing and customizing B2B Commerce solutions, including cart customization, checkout flows, and API integration.',
    },
    {
      question: 'Do I need Platform Developer I before B2B Commerce Developer AP?',
      answer: 'Yes, Platform Developer I is recommended. You should have B2B Commerce development experience and understand B2B commerce APIs and customization.',
    },
  ],
  'industries-cpq-developer': [
    {
      question: 'What is Industries CPQ Developer?',
      answer: 'Industries CPQ Developer focuses on developing CPQ solutions for Salesforce Industries (Financial Services, Health, etc.), including industry-specific product configuration and pricing.',
    },
    {
      question: 'Do I need CPQ Administrator before Industries CPQ Developer?',
      answer: 'Yes, CPQ Administrator knowledge is essential. You should also have Platform Developer I and understanding of Salesforce Industries solutions.',
    },
  ],
  'marketing-cloud-engagement-developer': [
    {
      question: 'What is Marketing Cloud Engagement Developer?',
      answer: 'Marketing Cloud Engagement Developer focuses on developing Marketing Cloud solutions using AMPscript, SSJS (Server-Side JavaScript), and Marketing Cloud APIs.',
    },
    {
      question: 'What programming languages do I need for Marketing Cloud Developer?',
      answer: 'You need JavaScript knowledge for SSJS and understanding of AMPscript (Marketing Cloud\'s scripting language). HTML/CSS knowledge is also helpful for email development.',
    },
  ],
  'slack-developer': [
    {
      question: 'What does a Slack Developer do?',
      answer: 'Slack Developers build Slack apps, create workflows, integrate Slack with external systems (including Salesforce), and customize Slack experiences using Slack APIs.',
    },
    {
      question: 'What programming experience do I need for Slack Developer?',
      answer: 'You need JavaScript/Node.js knowledge and understanding of REST APIs. Experience with Slack APIs, Events API, and building Slack apps is essential.',
    },
  ],
  'omnistudio-developer': [
    {
      question: 'What is OmniStudio Developer?',
      answer: 'OmniStudio Developer focuses on developing OmniStudio solutions including OmniScripts, FlexCards, DataRaptors, and integration procedures for Salesforce Industries.',
    },
    {
      question: 'What programming experience do I need for OmniStudio Developer?',
      answer: 'You need JavaScript knowledge for OmniStudio scripting. Understanding of OmniStudio components, DataRaptors, and integration procedures is essential.',
    },
  ],
  'cpq-administrator': [
    {
      question: 'What is CPQ Administrator?',
      answer: 'CPQ Administrator validates skills in configuring Salesforce CPQ (Configure, Price, Quote), including products, pricing rules, quote configuration, and CPQ automation.',
    },
    {
      question: 'Do I need Platform Administrator before CPQ Administrator?',
      answer: 'Yes, Platform Administrator is required. You should have hands-on CPQ experience configuring products, price rules, and quote processes.',
    },
  ],
  'business-analyst': [
    {
      question: 'What does a Salesforce Business Analyst do?',
      answer: 'Salesforce Business Analysts gather requirements, analyze business processes, design Salesforce solutions, and bridge the gap between business stakeholders and technical teams.',
    },
    {
      question: 'Do I need technical experience for Business Analyst certification?',
      answer: 'No, Business Analyst focuses on business analysis skills rather than technical implementation. However, understanding Salesforce capabilities is essential.',
    },
  ],
  'agentforce-specialist': [
    {
      question: 'What is Agentforce?',
      answer: 'Agentforce is Salesforce\'s AI-powered agent solution that helps automate customer interactions using AI agents that can answer questions and perform tasks.',
    },
    {
      question: 'Do I need Platform Administrator before Agentforce Specialist?',
      answer: 'Yes, Platform Administrator knowledge is recommended. You should have hands-on experience configuring and optimizing AI agents in Salesforce.',
    },
  ],
  'application-architect': [
    {
      question: 'What is Application Architect?',
      answer: 'Application Architect is part of the Technical Architect path. It focuses on data architecture, integration architecture, identity and access management, and development lifecycle.',
    },
    {
      question: 'What certifications do I need before Application Architect?',
      answer: 'You typically need multiple intermediate certifications (Administrator, Developer I, etc.) and years of implementation experience. Application Architect is advanced-level.',
    },
  ],
  'integration-architect': [
    {
      question: 'What is Integration Architect?',
      answer: 'Integration Architect designs integration solutions, understands integration patterns, and ensures secure, scalable integrations between Salesforce and external systems.',
    },
    {
      question: 'Do I need Application Architect before Integration Architect?',
      answer: 'Yes, Application Architect is typically required. Integration Architect is part of the Technical Architect path and requires deep integration expertise.',
    },
  ],
  'sharing-visibility-architect': [
    {
      question: 'What is Sharing and Visibility Architect?',
      answer: 'Sharing and Visibility Architect designs secure, scalable sharing models, understands data access patterns, and ensures proper visibility and security in Salesforce orgs.',
    },
    {
      question: 'Do I need Application Architect before Sharing and Visibility Architect?',
      answer: 'Yes, Application Architect is typically required. Sharing and Visibility Architect requires deep understanding of Salesforce security and sharing models.',
    },
  ],
  'system-architect': [
    {
      question: 'What is System Architect?',
      answer: 'System Architect is part of the Technical Architect path. It focuses on data architecture, integration architecture, sharing and visibility, and development lifecycle.',
    },
    {
      question: 'What certifications do I need before System Architect?',
      answer: 'You need Application Architect and multiple other certifications. System Architect is advanced-level and requires years of complex implementation experience.',
    },
  ],
  'identity-access-management-architect': [
    {
      question: 'What is Identity and Access Management Architect?',
      answer: 'Identity and Access Management Architect designs identity solutions, SSO implementations, user provisioning, and ensures secure access management across systems.',
    },
    {
      question: 'Do I need Application Architect before Identity Architect?',
      answer: 'Yes, Application Architect and System Architect are typically required. Identity Architect requires deep understanding of identity, SSO, and security.',
    },
  ],
  'dev-lifecycle-deployment-architect': [
    {
      question: 'What is Development Lifecycle and Deployment Architect?',
      answer: 'Dev Lifecycle and Deployment Architect designs deployment strategies, CI/CD pipelines, release management, and ensures proper governance for Salesforce deployments.',
    },
    {
      question: 'Do I need Application Architect before Dev Lifecycle Architect?',
      answer: 'Yes, Application Architect and System Architect are typically required. Dev Lifecycle Architect requires deep understanding of DevOps, CI/CD, and deployment.',
    },
  ],
  'technical-architect-evaluation': [
    {
      question: 'What is Technical Architect Evaluation?',
      answer: 'Technical Architect Evaluation is the first step to becoming a CTA. It\'s a written exam with scenario-based questions testing your ability to design secure, scalable solutions.',
    },
    {
      question: 'What certifications do I need before Technical Architect Evaluation?',
      answer: 'You need Application Architect and System Architect. The Evaluation tests your ability to design solutions for complex scenarios under time pressure.',
    },
  ],
  'technical-architect-review-board': [
    {
      question: 'What is Technical Architect Review Board?',
      answer: 'Technical Architect Review Board is the final step to become a CTA. You present and defend a solution design before a board of Certified Technical Architects.',
    },
    {
      question: 'Do I need to pass Technical Architect Evaluation before Review Board?',
      answer: 'Yes, you must pass the Technical Architect Evaluation first. The Review Board tests your communication skills and ability to defend architectural decisions.',
    },
  ],
  'heroku-architect': [
    {
      question: 'What is Heroku Architect?',
      answer: 'Heroku Architect designs cloud-native application architectures on Heroku, focusing on scaling, performance, security, and integration with Salesforce and other systems.',
    },
    {
      question: 'What experience do I need for Heroku Architect?',
      answer: 'You need Heroku development experience and architect-level knowledge. Understanding cloud architecture, scaling strategies, and Heroku platform capabilities is essential.',
    },
  ],
  'heroku-developer-ap': [
    {
      question: 'What is Heroku Developer Accredited Professional?',
      answer: 'Heroku Developer AP validates skills in developing and deploying applications on Heroku, including dyno management, add-ons, buildpacks, and deployment strategies.',
    },
    {
      question: 'What programming experience do I need for Heroku Developer AP?',
      answer: 'You need programming experience (Ruby, Node.js, Python, Java, etc.) and understanding of cloud application development. Heroku supports multiple languages.',
    },
  ],
  'tableau-architect': [
    {
      question: 'What is Tableau Architect?',
      answer: 'Tableau Architect designs enterprise Tableau architectures, plans governance, security, scalability, and ensures optimal performance for Tableau Server and Tableau Cloud deployments.',
    },
    {
      question: 'What experience do I need for Tableau Architect?',
      answer: 'You need Tableau Server administration experience and architect-level knowledge. Understanding enterprise analytics architecture and Tableau platform capabilities is essential.',
    },
  ],
  'tableau-consultant': [
    {
      question: 'What does a Tableau Consultant do?',
      answer: 'Tableau Consultants design Tableau solutions, gather requirements, create visualizations, build dashboards, and help organizations leverage Tableau for analytics.',
    },
    {
      question: 'Do I need Tableau experience for Tableau Consultant?',
      answer: 'Yes, you need Tableau Desktop and Server experience. The certification focuses on consulting skills, solution design, and stakeholder engagement.',
    },
  ],
  'tableau-data-analyst': [
    {
      question: 'What is Tableau Data Analyst?',
      answer: 'Tableau Data Analyst validates skills in analyzing data, creating calculations, building visualizations, and designing dashboards using Tableau Desktop.',
    },
    {
      question: 'What\'s the difference between Tableau Desktop Foundations and Data Analyst?',
      answer: 'Desktop Foundations is entry-level covering basics. Data Analyst is intermediate-level covering advanced calculations, LOD expressions, and complex visualizations.',
    },
  ],
  'tableau-desktop-foundations': [
    {
      question: 'Is Tableau Desktop Foundations a good starting point?',
      answer: 'Yes, it\'s an entry-level certification for Tableau. It covers connecting to data, creating basic visualizations, and building simple dashboards. No prior Tableau experience required.',
    },
    {
      question: 'What topics are covered in Tableau Desktop Foundations?',
      answer: 'The exam covers connecting to data (25%), dimensions and measures (25%), views and dashboards (35%), and filters and sorting (15%).',
    },
  ],
  'tableau-server-administrator': [
    {
      question: 'What does a Tableau Server Administrator do?',
      answer: 'Tableau Server Administrators install, configure, and manage Tableau Server, including user management, security, content management, and performance monitoring.',
    },
    {
      question: 'Do I need Tableau Desktop experience before Server Administrator?',
      answer: 'While helpful, it\'s not required. Server Administrator focuses on server administration rather than visualization creation. System administration knowledge is more important.',
    },
  ],
  'ux-designer': [
    {
      question: 'What does a Salesforce UX Designer do?',
      answer: 'Salesforce UX Designers design user experiences on the Salesforce platform, conduct research, create prototypes, and ensure accessible, user-friendly interfaces.',
    },
    {
      question: 'Do I need Salesforce technical knowledge for UX Designer?',
      answer: 'While helpful, deep technical knowledge isn\'t required. You need UX/design experience and understanding of Salesforce platform capabilities and constraints.',
    },
  ],
  'strategy-designer': [
    {
      question: 'What does a Strategy Designer do?',
      answer: 'Strategy Designers use design methods to create experience strategies on the Salesforce platform, focusing on discovery, solution design, and stakeholder engagement.',
    },
    {
      question: 'What experience do I need for Strategy Designer?',
      answer: 'You need design and strategy experience, understanding of design thinking, and knowledge of Salesforce platform capabilities. Technical implementation knowledge is helpful but not required.',
    },
  ],
  'sales-foundations': [
    {
      question: 'What is Sales Foundations?',
      answer: 'Sales Foundations validates foundational sales knowledge and Salesforce CRM basics, focusing on sales processes, customer-centric methodology, and using Salesforce for sales.',
    },
    {
      question: 'Is Sales Foundations a good starting point?',
      answer: 'Yes, it\'s designed for sales professionals new to Salesforce. It covers sales fundamentals and basic Salesforce CRM usage. No technical knowledge required.',
    },
  ],
  // Accredited Professional certifications
  'advanced-field-service-ap': [
    {
      question: 'What is Advanced Field Service Accredited Professional?',
      answer: 'Advanced Field Service AP validates advanced skills in Field Service configuration, scheduling optimization, mobile execution, and field service best practices.',
    },
    {
      question: 'Do I need Field Service Consultant before Advanced Field Service AP?',
      answer: 'While not required, Field Service Consultant knowledge is helpful. You should have advanced Field Service experience and Platform Administrator certification.',
    },
  ],
  'communications-cloud-ap': [
    {
      question: 'What is Communications Cloud Accredited Professional?',
      answer: 'Communications Cloud AP validates skills in configuring Communications Cloud for SMS, voice, and messaging channels, including channel setup and flow configuration.',
    },
    {
      question: 'Do I need Platform Administrator before Communications Cloud AP?',
      answer: 'Yes, Platform Administrator is recommended. You should have hands-on Communications Cloud experience configuring channels and messaging flows.',
    },
  ],
  'consumer-goods-cloud-ap': [
    {
      question: 'What is Consumer Goods Cloud Accredited Professional?',
      answer: 'Consumer Goods Cloud AP validates skills in configuring Consumer Goods Cloud for retail execution, including visit management, surveys, orders, and retail analytics.',
    },
    {
      question: 'What experience do I need for Consumer Goods Cloud AP?',
      answer: 'You need Platform Administrator certification and Consumer Goods Cloud experience. Understanding retail execution and field sales processes is essential.',
    },
  ],
  'consumer-goods-tpm-ap': [
    {
      question: 'What is Consumer Goods TPM Accredited Professional?',
      answer: 'Consumer Goods TPM AP validates skills in Trade Promotion Management, including promotion planning, budget management, execution tracking, and TPM analytics.',
    },
    {
      question: 'Do I need Consumer Goods Cloud AP before TPM AP?',
      answer: 'While helpful, it\'s not required. However, understanding Consumer Goods Cloud and trade promotion management processes is essential.',
    },
  ],
  'contact-center-ap': [
    {
      question: 'What is Contact Center Accredited Professional?',
      answer: 'Contact Center AP validates skills in configuring Contact Center solutions, including omnichannel routing, flows, and contact center analytics.',
    },
    {
      question: 'Do I need Service Cloud Consultant before Contact Center AP?',
      answer: 'While helpful, it\'s not required. You need Platform Administrator certification and Contact Center configuration experience.',
    },
  ],
  'cpq-billing-ap': [
    {
      question: 'What is CPQ and Billing Accredited Professional?',
      answer: 'CPQ and Billing AP validates skills in configuring both CPQ and Billing solutions, including quoting, contracts, billing processes, and revenue recognition.',
    },
    {
      question: 'Do I need CPQ Administrator before CPQ and Billing AP?',
      answer: 'Yes, CPQ Administrator knowledge is essential. You should also have Billing experience and understand the quote-to-cash process.',
    },
  ],
  'energy-utilities-ap': [
    {
      question: 'What is Energy and Utilities Accredited Professional?',
      answer: 'Energy and Utilities AP validates skills in configuring Energy and Utilities Cloud, including service territory management, work orders, and asset management.',
    },
    {
      question: 'What experience do I need for Energy and Utilities AP?',
      answer: 'You need Platform Administrator certification and Energy and Utilities Cloud experience. Understanding utility operations and field service is helpful.',
    },
  ],
  'financial-services-cloud-ap': [
    {
      question: 'What is Financial Services Cloud Accredited Professional?',
      answer: 'Financial Services Cloud AP validates skills in configuring Financial Services Cloud, including household management, financial accounts, goals, and FSC data model.',
    },
    {
      question: 'Do I need Platform Administrator before Financial Services Cloud AP?',
      answer: 'Yes, Platform Administrator is required. You should have Financial Services Cloud experience and understand financial services industry processes.',
    },
  ],
  'health-cloud-ap': [
    {
      question: 'What is Health Cloud Accredited Professional?',
      answer: 'Health Cloud AP validates skills in configuring Health Cloud, including care plans, care teams, patient management, and health care workflows.',
    },
    {
      question: 'What experience do I need for Health Cloud AP?',
      answer: 'You need Platform Administrator certification and Health Cloud experience. Understanding healthcare processes and care management is helpful.',
    },
  ],
  'loyalty-management-ap': [
    {
      question: 'What is Loyalty Management Accredited Professional?',
      answer: 'Loyalty Management AP validates skills in configuring loyalty programs, including program setup, points management, rewards, and member engagement.',
    },
    {
      question: 'Do I need Platform Administrator before Loyalty Management AP?',
      answer: 'Yes, Platform Administrator is recommended. You should have Loyalty Management experience and understand loyalty program operations.',
    },
  ],
  'manufacturing-cloud-ap': [
    {
      question: 'What is Manufacturing Cloud Accredited Professional?',
      answer: 'Manufacturing Cloud AP validates skills in configuring Manufacturing Cloud, including work orders, production management, and manufacturing operations.',
    },
    {
      question: 'What experience do I need for Manufacturing Cloud AP?',
      answer: 'You need Platform Administrator certification and Manufacturing Cloud experience. Understanding manufacturing processes and operations is essential.',
    },
  ],
  'marketing-cloud-advanced-cross-channel-ap': [
    {
      question: 'What is Marketing Cloud Advanced Cross-Channel Accredited Professional?',
      answer: 'Marketing Cloud Advanced Cross-Channel AP validates advanced skills in cross-channel marketing, including journey orchestration, email, SMS, and multi-channel strategies.',
    },
    {
      question: 'Do I need Marketing Cloud Consultant before Advanced Cross-Channel AP?',
      answer: 'Yes, Marketing Cloud Consultant knowledge is recommended. You should have advanced Marketing Cloud experience and cross-channel marketing expertise.',
    },
  ],
  'marketing-cloud-intelligence-ap': [
    {
      question: 'What is Marketing Cloud Intelligence Accredited Professional?',
      answer: 'Marketing Cloud Intelligence AP validates skills in Marketing Cloud Intelligence (formerly Datorama), including data models, insights, Ad Studio, and marketing analytics.',
    },
    {
      question: 'What experience do I need for Marketing Cloud Intelligence AP?',
      answer: 'You need Marketing Cloud experience and understanding of marketing analytics. Experience with Marketing Cloud Intelligence platform is essential.',
    },
  ],
  'marketing-cloud-personalization-ap': [
    {
      question: 'What is Marketing Cloud Personalization Accredited Professional?',
      answer: 'Marketing Cloud Personalization AP validates skills in personalization strategy, web and mobile personalization, and creating personalized customer experiences.',
    },
    {
      question: 'Do I need Marketing Cloud Consultant before Personalization AP?',
      answer: 'Yes, Marketing Cloud Consultant knowledge is recommended. You should have Marketing Cloud Personalization experience and personalization strategy expertise.',
    },
  ],
  'media-cloud-ap': [
    {
      question: 'What is Media Cloud Accredited Professional?',
      answer: 'Media Cloud AP validates skills in configuring Media Cloud, including media management, content distribution, and media industry-specific features.',
    },
    {
      question: 'What experience do I need for Media Cloud AP?',
      answer: 'You need Platform Administrator certification and Media Cloud experience. Understanding media industry processes and content management is helpful.',
    },
  ],
  'net-zero-cloud-ap': [
    {
      question: 'What is Net Zero Cloud Accredited Professional?',
      answer: 'Net Zero Cloud AP validates skills in configuring Net Zero Cloud for sustainability tracking, including carbon tracking, goals, and sustainability reporting.',
    },
    {
      question: 'Do I need Platform Administrator before Net Zero Cloud AP?',
      answer: 'Yes, Platform Administrator is recommended. You should have Net Zero Cloud experience and understand sustainability tracking and reporting.',
    },
  ],
  'order-management-admin-ap': [
    {
      question: 'What is Order Management Admin Accredited Professional?',
      answer: 'Order Management Admin AP validates skills in configuring Order Management, including orchestration, fulfillment, and order management workflows.',
    },
    {
      question: 'What experience do I need for Order Management Admin AP?',
      answer: 'You need Platform Administrator certification and Order Management experience. Understanding order fulfillment and supply chain processes is helpful.',
    },
  ],
  'order-management-developer-ap': [
    {
      question: 'What is Order Management Developer Accredited Professional?',
      answer: 'Order Management Developer AP validates skills in developing Order Management solutions, including customization, API integration, and order management development.',
    },
    {
      question: 'Do I need Platform Developer I before Order Management Developer AP?',
      answer: 'Yes, Platform Developer I is recommended. You should have Order Management development experience and understand Order Management APIs.',
    },
  ],
  'process-automation-ap': [
    {
      question: 'What is Process Automation Accredited Professional?',
      answer: 'Process Automation AP validates skills in Flow, Process Builder, and automation best practices, including designing and implementing automation solutions.',
    },
    {
      question: 'Do I need Platform Administrator before Process Automation AP?',
      answer: 'Yes, Platform Administrator is recommended. You should have extensive Flow and Process Builder experience and understand automation patterns.',
    },
  ],
  'public-sector-solutions-ap': [
    {
      question: 'What is Public Sector Solutions Accredited Professional?',
      answer: 'Public Sector Solutions AP validates skills in configuring Public Sector Solutions, including government-specific features, compliance, and public sector workflows.',
    },
    {
      question: 'What experience do I need for Public Sector Solutions AP?',
      answer: 'You need Platform Administrator certification and Public Sector Solutions experience. Understanding government processes and compliance is helpful.',
    },
  ],
  'administrator-practice-test': [
    {
      question: 'What is the Platform Administrator Practice Test?',
      answer: 'The Practice Test is a non-proctored exam that simulates the real Platform Administrator exam. It helps you assess readiness and identify knowledge gaps before taking the actual exam.',
    },
    {
      question: 'Does the Practice Test count toward certification?',
      answer: 'No, the Practice Test does not count toward certification. It\'s a study tool to help you prepare. You still need to pass the actual Platform Administrator exam to earn the certification.',
    },
  ],
  'email-specialist-practice-test': [
    {
      question: 'What is the Email Specialist Practice Test?',
      answer: 'The Practice Test is a non-proctored exam that simulates the real Marketing Cloud Email Specialist exam. It helps you assess readiness before taking the actual certification exam.',
    },
    {
      question: 'Does the Practice Test count toward certification?',
      answer: 'No, the Practice Test does not count toward certification. It\'s a study tool. You still need to pass the actual Email Specialist exam to earn the certification.',
    },
  ],
  'pardot-specialist': [
    {
      question: 'What is Account Engagement (Pardot) Specialist?',
      answer: 'Account Engagement Specialist validates skills in Account Engagement basics, lead management, email automation, and reporting. It\'s a foundational certification for Pardot users.',
    },
    {
      question: 'Do I need Platform Administrator before Pardot Specialist?',
      answer: 'While not required, Platform Administrator knowledge is helpful. You should have Account Engagement (Pardot) experience and understand B2B marketing automation.',
    },
  ],
}

export function getCertFaq(slug: string, certTitle: string): FaqItem[] {
  const faqName = getCertFaqName(slug, certTitle)
  const formerName = getCertFormerName(slug)
  const formerlyPhrase = formerName ? `—formerly ${formerName}—` : ''
  
  // Get cert-specific FAQs if available
  const certSpecificFaqs = CERT_SPECIFIC_FAQS[slug] || []
  
  // Base FAQs (always included)
  const baseFaqs: FaqItem[] = [
    {
      question: `What is covered on the ${faqName} exam?`,
      answer: formerName
        ? `The ${faqName} exam${formerlyPhrase} covers section-wise weightage as shown above. Use the exam topics and practice questions on this page to align your study with the official outline.`
        : `This page shows the section-wise exam weightage so you know exactly which topics carry the most weight. Use the exam topics and practice questions above to align your study with the official outline.`,
    },
    {
      question: `How do I prepare for the ${faqName} certification?`,
      answer: formerName
        ? `Use the exam tips, prerequisites, and study strategy on this ${faqName} study guide${formerlyPhrase} Focus first on the highest-weighted sections, then take the sample practice questions. Schedule the exam when you consistently score well on practice tests.`
        : `Use the exam tips, prerequisites, and study strategy on this page. Focus first on the highest-weighted sections, then take the sample practice questions. Schedule the exam when you consistently score well on practice tests.`,
    },
    {
      question: `Where can I find the official exam outline for ${faqName}?`,
      answer: `Salesforce publishes exam guides and outlines on Trailhead (trailhead.salesforce.com). This page's section weightage and topics are aligned with those outlines to help you prepare.`,
    },
  ]
  
  // Combine cert-specific FAQs with base FAQs
  // Insert cert-specific FAQs after the first base FAQ for better SEO
  return [
    baseFaqs[0],
    ...certSpecificFaqs,
    baseFaqs[1],
    baseFaqs[2],
  ]
}

/** JSON-LD BreadcrumbList for a certification page */
export function getCertBreadcrumbJsonLd(
  slug: string,
  certTitle: string,
  roleSlug?: string,
  roleName?: string
) {
  const items = getCertBreadcrumb(slug, certTitle, roleSlug, roleName)
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/** JSON-LD FAQPage for a certification page */
export function getCertFaqJsonLd(slug: string, certTitle: string) {
  const faqs = getCertFaq(slug, certTitle)
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}

/** Single H1 per cert page: Practice Questions & Exam Study Guide for intent-based SEO. */
export function getCertH1Text(slug: string): string {
  const certName = slugToDisplayName(slug)
  const primaryName = getCertPrimaryName(slug, certName)
  const examCode = SLUG_TO_EXAM_CODE[slug]
  const namePart = examCode ? `${primaryName} (${examCode})` : primaryName
  return `${namePart} Practice Questions & Exam Study Guide`
}

/** H2 for "About this exam" section: About the [Cert Name] ([Exam Code]) Exam */
export function getCertAboutExamHeading(slug: string): string {
  const primaryName = getCertPrimaryName(slug, slugToDisplayName(slug))
  const examCode = SLUG_TO_EXAM_CODE[slug]
  return examCode ? `About the ${primaryName} (${examCode}) Exam` : `About the ${primaryName} Exam`
}

/** H3 for exam weightage section: [Cert Name] Exam Weightage by Section */
export function getCertExamWeightageHeading(slug: string): string {
  const primaryName = getCertPrimaryName(slug, slugToDisplayName(slug))
  return `${primaryName} Exam Weightage by Section`
}

/** H2 for practice questions section: [Cert Name] Practice Questions (With Explanations) */
export function getCertPracticeQuestionsHeading(slug: string): string {
  const primaryName = getCertPrimaryName(slug, slugToDisplayName(slug))
  return `${primaryName} Practice Questions (With Explanations)`
}

/** H2 for FAQ section: [Cert Name] ([Exam Code]) Exam FAQs */
export function getCertFaqHeading(slug: string): string {
  const primaryName = getCertPrimaryName(slug, slugToDisplayName(slug))
  const examCode = SLUG_TO_EXAM_CODE[slug]
  return examCode ? `${primaryName} (${examCode}) Exam FAQs` : `${primaryName} Exam FAQs`
}

/** WebPage JSON-LD for certification pages so validators detect schema. */
export function getCertWebPageJsonLd(
  slug: string,
  certTitle: string,
  roleSlug?: string,
  roleName?: string
) {
  const breadcrumb = getCertBreadcrumb(slug, certTitle, roleSlug, roleName)
  const title = getCertMetaTitle(slug)
  const description = getCertMetaDescription(slug)
  const url = `${baseUrl}/certifications/${slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    publisher: { '@type': 'Organization', name: 'Trailblaze Prep', url: baseUrl },
    breadcrumb: getCertBreadcrumbJsonLd(slug, certTitle, roleSlug, roleName),
  }
}

export { slugToDisplayName }
