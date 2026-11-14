import { getCertAlias, getCertCodes } from '@/lib/cert-alias-registry'

/**
 * One keyword cluster per certification page.
 *
 * Every `/certifications/[slug]` page has to answer the same seven search
 * intents: the bare exam name, the vendor-prefixed name, the "Certified" name,
 * the "... certification" phrasing, the "... dumps" phrasing, the legacy exam
 * name (including Arabic/Roman numeral variants) and every official or legacy
 * exam code. The table below is the single source of truth for those strings;
 * `scripts/verify-all-95-certs-seo.mjs` asserts each one renders in the HTML.
 *
 * `bare`    - the exam name a searcher types, without "Salesforce Certified".
 * `vendor`  - the vendor prefix ("Salesforce", or "Anthropic" for Claude exams).
 * `aliases` - official codes, legacy codes, legacy names and numeral variants.
 *
 * Names and codes already held in `cert-alias-registry` (the <title>, H1 and
 * credential JSON-LD read from it) are folded in at lookup time, so the two
 * tables cannot contradict each other on a page.
 */
export interface CertKeywordCluster {
  bare: string
  vendor: string
  aliases: string[]
}

export const CERT_KEYWORD_CLUSTERS: Record<string, CertKeywordCluster> = {
  'platform-foundations': { bare: "Platform Foundations", vendor: 'Salesforce', aliases: ["Plat-101", "Salesforce Associate"] },
  'ai-associate': { bare: "AI Associate", vendor: 'Salesforce', aliases: ["AI-101"] },
  'marketing-cloud-engagement-foundations': { bare: "Marketing Cloud Engagement Foundations", vendor: 'Salesforce', aliases: ["MC-101", "Marketing Associate"] },
  'mulesoft-integration-foundations': { bare: "MuleSoft Integration Foundations", vendor: 'Salesforce', aliases: ["Mule-101", "MuleSoft Associate"] },
  'administrator': { bare: "Platform Administrator", vendor: 'Salesforce', aliases: ["Plat-Admn-201", "ADM-201", "Salesforce Administrator"] },
  'advanced-administrator': { bare: "Advanced Administrator", vendor: 'Salesforce', aliases: ["Plat-Admn-301", "ADM-211", "Platform Administrator II", "Platform Administrator 2"] },
  'app-builder': { bare: "Platform App Builder", vendor: 'Salesforce', aliases: ["Plat-Admn-202", "DEV-402", "App Builder"] },
  'agentforce-specialist': { bare: "Agentforce Specialist", vendor: 'Salesforce', aliases: ["AI-201", "Agent Force Specialist", "AI Specialist"] },
  'business-analyst': { bare: "Business Analyst", vendor: 'Salesforce', aliases: ["BA-201"] },
  'cpq-administrator': { bare: "CPQ Administrator", vendor: 'Salesforce', aliases: ["Sales-Admn-202", "CPQ-211", "CPQ Specialist"] },
  'marketing-cloud-engagement-admin': { bare: "Marketing Cloud Engagement Administrator", vendor: 'Salesforce', aliases: ["MCE-Admn-201", "Marketing Cloud Administrator"] },
  'slack-administrator': { bare: "Slack Administrator", vendor: 'Salesforce', aliases: ["Slack-Admn-201", "Slack Certified Administrator"] },
  'developer-1': { bare: "Platform Developer I", vendor: 'Salesforce', aliases: ["Plat-Dev-201", "PD1", "Platform Developer 1", "CRT-450"] },
  'developer-2': { bare: "Platform Developer II", vendor: 'Salesforce', aliases: ["Plat-Dev-301", "PD2", "Platform Developer 2"] },
  'javascript-developer-i': { bare: "JavaScript Developer I", vendor: 'Salesforce', aliases: ["JS-Dev-101", "CRT-600", "JavaScript Developer 1"] },
  'b2c-commerce-developer': { bare: "B2C Commerce Developer", vendor: 'Salesforce', aliases: ["Comm-Dev-101", "CRT-500"] },
  'industries-cpq-developer': { bare: "Industries CPQ Developer", vendor: 'Salesforce', aliases: ["Ind-Dev-201", "Vlocity CPQ Developer"] },
  'marketing-cloud-engagement-developer': { bare: "Marketing Cloud Engagement Developer", vendor: 'Salesforce', aliases: ["MCE-Dev-201", "Marketing Cloud Developer"] },
  'mulesoft-developer-i': { bare: "MuleSoft Developer I", vendor: 'Salesforce', aliases: ["Mule-Dev-201", "MuleSoft Developer 1"] },
  'mulesoft-developer-ii': { bare: "MuleSoft Developer II", vendor: 'Salesforce', aliases: ["Mule-Dev-301", "MuleSoft Developer 2"] },
  'mulesoft-hyperautomation-developer': { bare: "MuleSoft Hyperautomation Developer", vendor: 'Salesforce', aliases: ["Mule-Dev-202", "MuleSoft Hyperautomation Specialist"] },
  'omnistudio-developer': { bare: "OmniStudio Developer", vendor: 'Salesforce', aliases: ["Plat-Dev-210"] },
  'slack-developer': { bare: "Slack Developer", vendor: 'Salesforce', aliases: ["Slack-Dev-201", "Slack Certified Developer"] },
  'crm-analytics-einstein-discovery-consultant': { bare: "CRM Analytics and Einstein Discovery Consultant", vendor: 'Salesforce', aliases: ["CRM Analytics Consultant", "Einstein Discovery Consultant"] },
  'data-360-consultant': { bare: "Data 360 Consultant", vendor: 'Salesforce', aliases: ["Data-Con-101", "Data Cloud Consultant"] },
  'education-cloud-consultant': { bare: "Education Cloud Consultant", vendor: 'Salesforce', aliases: [] },
  'experience-cloud': { bare: "Experience Cloud Consultant", vendor: 'Salesforce', aliases: ["CRT-271", "Community Cloud Consultant"] },
  'field-service': { bare: "Field Service Consultant", vendor: 'Salesforce', aliases: ["FS-Con-101", "Agentforce Field Service and Operations Consultant"] },
  'pardot-consultant': { bare: "Marketing Cloud Account Engagement Consultant", vendor: 'Salesforce', aliases: ["CRT-302", "Pardot Consultant"] },
  'marketing-cloud-consultant': { bare: "Marketing Cloud Engagement Consultant", vendor: 'Salesforce', aliases: ["MCE-Con-201", "Marketing Cloud Consultant"] },
  'agentforce-life-sciences-consultant': { bare: "Agentforce Life Sciences Consultant", vendor: 'Salesforce', aliases: ["Als-Con-201", "Life Sciences Cloud Consultant"] },
  'nonprofit-cloud': { bare: "Nonprofit Cloud Consultant", vendor: 'Salesforce', aliases: ["NP-Con-102", "Agentforce Nonprofit Consultant"] },
  'nonprofit-success-pack-consultant': { bare: "Nonprofit Success Pack (NPSP) Consultant", vendor: 'Salesforce', aliases: ["NP-Con-101", "NPSP Consultant"] },
  'omnistudio-consultant': { bare: "OmniStudio Consultant", vendor: 'Salesforce', aliases: ["Plat-Con-201"] },
  'public-sector-solutions-consultant': { bare: "Public Sector Solutions Consultant", vendor: 'Salesforce', aliases: ["PubSec-Con-201"] },
  'revenue-cloud-consultant': { bare: "Revenue Management Consultant", vendor: 'Salesforce', aliases: ["Rev-Con-201", "Revenue Cloud Consultant"] },
  'sales-cloud': { bare: "Agentforce Sales Consultant", vendor: 'Salesforce', aliases: ["Sales-Con-201", "CRT-251", "Sales Cloud Consultant"] },
  'service-cloud': { bare: "Agentforce Service Consultant", vendor: 'Salesforce', aliases: ["Service-Con-201", "CRT-261", "Service Cloud Consultant"] },
  'slack-consultant': { bare: "Slack Consultant", vendor: 'Salesforce', aliases: ["Slack-Con-201", "Slack Certified Consultant"] },
  'email-specialist': { bare: "Marketing Cloud Engagement Specialist", vendor: 'Salesforce', aliases: ["MC-202", "CRT-550", "Marketing Cloud Email Specialist"] },
  'marketing-cloud-next-consultant': { bare: "Marketing Cloud Next Consultant", vendor: 'Salesforce', aliases: ["MC-Con-201"] },
  'pardot-specialist': { bare: "Marketing Cloud Account Engagement Specialist", vendor: 'Salesforce', aliases: ["MC-201", "Pardot Specialist"] },
  'application-architect': { bare: "Application Architect", vendor: 'Salesforce', aliases: [] },
  'data-architect': { bare: "Data Architect", vendor: 'Salesforce', aliases: ["Plat-Arch-201", "Platform Data Architect"] },
  'integration-architect': { bare: "Integration Architect", vendor: 'Salesforce', aliases: ["Plat-Arch-204", "Platform Integration Architect"] },
  'sharing-visibility-architect': { bare: "Sharing and Visibility Architect", vendor: 'Salesforce', aliases: ["Plat-Arch-205", "Platform Sharing and Visibility Architect"] },
  'system-architect': { bare: "System Architect", vendor: 'Salesforce', aliases: [] },
  'identity-access-management-architect': { bare: "Identity and Access Management Architect", vendor: 'Salesforce', aliases: ["Plat-Arch-203", "Platform Identity and Access Management Architect"] },
  'dev-lifecycle-deployment-architect': { bare: "Development Lifecycle and Deployment Architect", vendor: 'Salesforce', aliases: ["Plat-Arch-202", "Platform Development Lifecycle and Deployment Architect"] },
  'technical-architect': { bare: "Technical Architect", vendor: 'Salesforce', aliases: ["CTA"] },
  'technical-architect-evaluation': { bare: "Technical Architect - Architect Evaluation", vendor: 'Salesforce', aliases: ["CTA Architect Evaluation"] },
  'technical-architect-review-board': { bare: "Technical Architect - Architect Review Board", vendor: 'Salesforce', aliases: ["CTA Review Board"] },
  'b2b-solution-architect': { bare: "B2B Solution Architect", vendor: 'Salesforce', aliases: ["Arch-301"] },
  'b2c-commerce-architect': { bare: "B2C Commerce Architect", vendor: 'Salesforce', aliases: ["Arch-303"] },
  'b2c-solution-architect': { bare: "B2C Solution Architect", vendor: 'Salesforce', aliases: ["Arch-302"] },
  'heroku-architect': { bare: "Heroku Architect", vendor: 'Salesforce', aliases: ["Plat-Arch-206"] },
  'mulesoft-catalyst-consultant': { bare: "MuleSoft Catalyst Consultant", vendor: 'Salesforce', aliases: ["Mule-Con-201"] },
  'mulesoft-platform-architect': { bare: "MuleSoft Platform Architect", vendor: 'Salesforce', aliases: ["Mule-Arch-201", "MuleSoft Platform Architect I"] },
  'mulesoft-integration-architect': { bare: "MuleSoft Platform Integration Architect", vendor: 'Salesforce', aliases: ["Mule-Arch-202", "MuleSoft Integration Architect"] },
  'advanced-field-service-ap': { bare: "Advanced Field Service Accredited Professional", vendor: 'Salesforce', aliases: ["Advanced Field Service AP"] },
  'b2b-commerce-admin-ap': { bare: "B2B Commerce Administrator Accredited Professional", vendor: 'Salesforce', aliases: ["B2B Commerce for Administrators Accredited Professional"] },
  'b2b-commerce-developer-ap': { bare: "B2B Commerce Developer Accredited Professional", vendor: 'Salesforce', aliases: ["B2B Commerce for Developers Accredited Professional"] },
  'communications-cloud-ap': { bare: "Communications Cloud Accredited Professional", vendor: 'Salesforce', aliases: ["Agentforce Communications", "Agentforce Communications Accredited Professional"] },
  'consumer-goods-cloud-ap': { bare: "Consumer Goods Cloud Accredited Professional", vendor: 'Salesforce', aliases: ["Agentforce Consumer Goods", "Agentforce Consumer Goods Accredited Professional"] },
  'consumer-goods-tpm-ap': { bare: "Consumer Goods Cloud TPM Accredited Professional", vendor: 'Salesforce', aliases: ["Trade Promotion Management Accredited Professional"] },
  'contact-center-ap': { bare: "Contact Center Accredited Professional", vendor: 'Salesforce', aliases: ["Contact Center AP"] },
  'cpq-billing-ap': { bare: "CPQ and Billing Consultant Accredited Professional", vendor: 'Salesforce', aliases: ["CPQ and Billing AP"] },
  'energy-utilities-ap': { bare: "Energy and Utilities Cloud Accredited Professional", vendor: 'Salesforce', aliases: ["Energy and Utilities AP"] },
  'financial-services-cloud-ap': { bare: "Financial Services Cloud Accredited Professional", vendor: 'Salesforce', aliases: ["Agentforce Financial Services", "Agentforce Financial Services Accredited Professional"] },
  'health-cloud-ap': { bare: "Health Cloud Accredited Professional", vendor: 'Salesforce', aliases: ["Agentforce Health", "Agentforce Health Accredited Professional"] },
  'heroku-developer-ap': { bare: "Heroku Developer Accredited Professional", vendor: 'Salesforce', aliases: ["Heroku Developer AP"] },
  'loyalty-management-ap': { bare: "Loyalty Management Accredited Professional", vendor: 'Salesforce', aliases: ["Loyalty Management AP"] },
  'manufacturing-cloud-ap': { bare: "Manufacturing Cloud Accredited Professional", vendor: 'Salesforce', aliases: ["Agentforce Manufacturing", "Agentforce Manufacturing Accredited Professional"] },
  'marketing-cloud-advanced-cross-channel-ap': { bare: "Marketing Cloud Advanced Cross Channel Accredited Professional", vendor: 'Salesforce', aliases: ["Advanced Cross Channel AP"] },
  'marketing-cloud-intelligence-ap': { bare: "Marketing Cloud Intelligence Accredited Professional", vendor: 'Salesforce', aliases: ["Datorama", "Datorama Accredited Professional"] },
  'marketing-cloud-personalization-ap': { bare: "Marketing Cloud Personalization Accredited Professional", vendor: 'Salesforce', aliases: ["Interaction Studio", "Interaction Studio Accredited Professional"] },
  'media-cloud-ap': { bare: "Media Cloud Accredited Professional", vendor: 'Salesforce', aliases: ["Media Cloud AP"] },
  'net-zero-cloud-ap': { bare: "Net Zero Cloud Accredited Professional", vendor: 'Salesforce', aliases: ["Net Zero Cloud AP"] },
  'order-management-admin-ap': { bare: "Order Management Administrator Accredited Professional", vendor: 'Salesforce', aliases: ["Order Management Administrator AP"] },
  'order-management-developer-ap': { bare: "Order Management Developer Accredited Professional", vendor: 'Salesforce', aliases: ["Order Management Developer AP"] },
  'process-automation-ap': { bare: "Process Automation Accredited Professional", vendor: 'Salesforce', aliases: ["Process Automation AP"] },
  'public-sector-solutions-ap': { bare: "Public Sector Solutions Accredited Professional", vendor: 'Salesforce', aliases: ["Agentforce 360", "Agentforce 360 for Public Sector Professional"] },
  'sales-foundations': { bare: "Agentforce Sales Foundations", vendor: 'Salesforce', aliases: ["Sales-101", "Sales Foundations", "Sales Representative"] },
  'strategy-designer': { bare: "Platform Strategy Designer", vendor: 'Salesforce', aliases: ["Plat-UX-102", "Strategy Designer"] },
  'ux-designer': { bare: "Platform User Experience Designer", vendor: 'Salesforce', aliases: ["Plat-UX-101", "UX Designer", "User Experience Designer"] },
  'tableau-architect': { bare: "Tableau Architect", vendor: 'Salesforce', aliases: ["Analytics-Arch-201", "Tableau Certified Architect"] },
  'tableau-consultant': { bare: "Tableau Consultant", vendor: 'Salesforce', aliases: ["Analytics-Con-201", "Tableau Certified Consultant"] },
  'tableau-next-consultant': { bare: "Tableau Next Consultant", vendor: 'Salesforce', aliases: ["Analytics-Con-202"] },
  'tableau-data-analyst': { bare: "Tableau Data Analyst", vendor: 'Salesforce', aliases: ["Analytics-DA-201", "Tableau Certified Data Analyst"] },
  'tableau-desktop-foundations': { bare: "Tableau Desktop Foundations", vendor: 'Salesforce', aliases: ["Analytics-101", "Tableau Desktop Specialist"] },
  'tableau-server-administrator': { bare: "Tableau Server Administrator", vendor: 'Salesforce', aliases: ["Analytics-SA-201", "Tableau Server Certified Associate"] },
  'claude-certified-associate': { bare: "Claude Certified Associate", vendor: 'Anthropic', aliases: ["Claude Associate", "Claude Associate Foundations"] },
  'claude-certified-developer': { bare: "Claude Certified Developer", vendor: 'Anthropic', aliases: ["Claude Developer", "Claude Developer Foundations"] },
  'claude-certified-architect-foundations': { bare: "Claude Certified Architect", vendor: 'Anthropic', aliases: ["Claude Architect Foundations"] },
  'claude-certified-architect-professional': { bare: "Claude Certified Architect", vendor: 'Anthropic', aliases: ["Claude Architect Professional"] },}

/** An alias is an exam code when it has no spaces and carries a digit: "Plat-Admn-201", "PD1". */
function isExamCode(alias: string): boolean {
  return !alias.includes(' ') && /\d/.test(alias)
}

export interface ResolvedCertCluster {
  /** Bare exam name, e.g. "Platform Administrator". */
  bare: string
  /** Vendor prefix, e.g. "Salesforce". */
  vendor: string
  /** "Salesforce Platform Administrator". */
  vendorName: string
  /** "Salesforce Certified Platform Administrator" (no double "Certified"/"Accredited"). */
  certifiedName: string
  /** Current code first, then legacy codes: ["Plat-Admn-201", "ADM-201"]. */
  codes: string[]
  /** Legacy and variant credential names, without the codes. */
  legacyNames: string[]
  /** Every code and alias, for the disambiguation lead. */
  aliases: string[]
  /** The exact "... dumps" phrases a searcher types, for the NDA section. */
  dumpPhrases: string[]
  /** JSON-LD `alternateName`. */
  alternateNames: string[]
  /** JSON-LD `keywords`. */
  keywords: string[]
}

/**
 * The resolved cluster for a slug, or undefined when the slug is not a
 * certification page. Merges the table above with `cert-alias-registry`.
 */
export function getCertKeywordCluster(slug: string): ResolvedCertCluster | undefined {
  const cluster = CERT_KEYWORD_CLUSTERS[slug]
  if (!cluster) return undefined
  const { bare, vendor } = cluster
  const registry = getCertAlias(slug)

  const codes = [...new Set([...getCertCodes(slug), ...cluster.aliases.filter(isExamCode)])]
  const legacyNames = [
    ...new Set(
      [
        ...cluster.aliases.filter((alias) => !isExamCode(alias)),
        ...(registry?.bare && registry.bare !== bare ? [registry.bare] : []),
        ...(registry?.former ?? []),
        ...(registry?.searchAliases ?? []),
      ].filter((name) => name !== bare && name !== `${vendor} ${bare}`),
    ),
  ]

  const vendorName = `${vendor} ${bare}`
  const certifiedName = /\bcertified\b|\baccredited\b/i.test(bare)
    ? vendorName
    : `${vendor} Certified ${bare}`

  const dumpPhrases = [
    `${bare} dumps`,
    `${vendorName} dumps`,
    ...codes.map((code) => `${code} dumps`),
    ...legacyNames.map((name) => `${name} dumps`),
  ]

  const alternateNames = [...new Set([bare, vendorName, certifiedName, ...legacyNames, ...codes])]

  const keywords = [...new Set([
    bare,
    vendorName,
    certifiedName,
    `${bare} certification`,
    `${vendorName} certification`,
    `${bare} study guide`,
    `${bare} practice questions`,
    `${bare} dumps`,
    `${vendorName} dumps`,
    ...codes,
    ...legacyNames,
  ])]

  return {
    bare,
    vendor,
    vendorName,
    certifiedName,
    codes,
    legacyNames,
    aliases: [...codes, ...legacyNames],
    dumpPhrases,
    alternateNames,
    keywords,
  }
}

/** Readable list: "a, b and c". */
export function listNames(names: string[]): string {
  if (names.length <= 1) return names[0] ?? ''
  return `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}`
}

/**
 * The NDA-compliance FAQ item appended to every certification page's visible
 * FAQ and FAQPage JSON-LD, so "<name> dumps" queries land on an answer that
 * states the credential risk instead of on a braindump site.
 */
export function getDumpsFaqItem(slug: string): { question: string; answer: string } | undefined {
  const cluster = getCertKeywordCluster(slug)
  if (!cluster) return undefined
  const { bare, vendorName, codes } = cluster
  const codeSuffix = codes.length ? ` (${codes[0]} dumps)` : ''
  return {
    question: `Why should I use practice questions instead of ${bare} dumps or ${vendorName} dumps?`,
    answer:
      `Using ${bare} dumps or ${vendorName} dumps${codeSuffix} violates the certification ` +
      `non-disclosure agreement (NDA) and can result in permanent credential revocation. In addition, ` +
      `braindumps often contain outdated answers from older release cycles. Practicing with original, ` +
      `scenario-based ${bare} practice questions and worked explanations prepares you for the live ` +
      `proctored exam safely.`,
  }
}

/**
 * The naming-variant lead that sits directly under each page's H1.
 *
 * It states the five query forms a candidate actually types, in their own
 * words, then every exam code and legacy alias. Naming all of them in the
 * opening lines is what lets one URL answer all seven search-intent clusters,
 * and placing it under the H1 keeps it in the copy a searcher reads first.
 *
 * Returns undefined for credentials with no cluster entry.
 */
export function getCertNamingLeadText(slug: string): string | undefined {
  const cluster = getCertKeywordCluster(slug)
  if (!cluster) return undefined
  const { bare, vendorName, certifiedName, aliases } = cluster
  // certifiedName collapses to vendorName for credentials whose own name
  // already says "Certified" or "Accredited", so the list is deduped rather
  // than naming the same phrasing twice.
  const searchedFor = [
    ...new Set([
      bare,
      vendorName,
      certifiedName,
      `${bare} certification`,
      `${vendorName} certification`,
    ]),
  ]
  // An alias already named among the five query forms is not repeated in the
  // second sentence: sales-cloud carries "Salesforce Certified Agentforce
  // Sales Consultant" in both lists otherwise.
  const extraAliases = aliases.filter((alias) => !searchedFor.includes(alias))
  const aliasSentence = extraAliases.length
    ? ` The same exam is also listed and searched for as ${listNames(extraAliases)} \u2014 every one of ` +
      `those names and codes points to this one ${bare} certification guide.`
    : ''
  const searchedForList =
    searchedFor.length > 1
      ? `${searchedFor.slice(0, -1).join(', ')} or ${searchedFor[searchedFor.length - 1]}`
      : searchedFor[0]
  return (
    `${bare} is the exam behind the ${certifiedName} credential, and this page is the ` +
    `${bare} certification study guide for it. You are in the right place whether you searched ` +
    `for ${searchedForList}.${aliasSentence}`
  )
}
