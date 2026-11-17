// scripts/verify-95-certs-accuracy-and-uniqueness.mjs
//
// Audits all 95 certification pages for the query-cluster mapping
// (fullTitle / shortTitle / examCodes), content uniqueness and factual
// accuracy.
//
// The cert list below is generated from the repo's own registry
// (src/lib/cert-alias-registry.ts + src/lib/cert-keyword-clusters.ts), which
// is the single source of truth for names and exam codes. Credentials whose
// issuer publishes no exam code -- the two composite Architect credentials,
// the two CTA stages, all 23 Accredited Professional designations and the four
// Claude credentials -- carry `codes: []` and are asserted to render no code
// rather than a placeholder.
//
// Usage: PORT=3100 npm run start, then
//   PORT=3100 node scripts/verify-95-certs-accuracy-and-uniqueness.mjs
// VERIFY_BASE_URL or argv[2] override PORT.
const BASE_URL =
  process.env.VERIFY_BASE_URL ||
  process.argv[2] ||
  `http://localhost:${process.env.PORT || 3100}`;

const ALL_95_CERTS = [
    {
      "slug": "platform-foundations",
      "full": "Salesforce Certified Platform Foundations",
      "short": "Platform Foundations",
      "codes": [
        "Plat-101"
      ]
    },
    {
      "slug": "ai-associate",
      "full": "Salesforce Certified AI Associate",
      "short": "AI Associate",
      "codes": [
        "AI-101"
      ]
    },
    {
      "slug": "marketing-cloud-engagement-foundations",
      "full": "Salesforce Certified Marketing Cloud Engagement Foundations",
      "short": "Marketing Cloud Engagement Foundations",
      "codes": [
        "MC-101"
      ]
    },
    {
      "slug": "mulesoft-integration-foundations",
      "full": "Salesforce Certified MuleSoft Integration Foundations",
      "short": "MuleSoft Integration Foundations",
      "codes": [
        "Mule-101"
      ]
    },
    {
      "slug": "administrator",
      "full": "Salesforce Certified Platform Administrator",
      "short": "Platform Administrator",
      "codes": [
        "Plat-Admn-201",
        "ADM-201"
      ]
    },
    {
      "slug": "advanced-administrator",
      "full": "Salesforce Certified Platform Administrator II",
      "short": "Platform Administrator II",
      "codes": [
        "Plat-Admn-301",
        "ADM-211"
      ]
    },
    {
      "slug": "app-builder",
      "full": "Salesforce Certified Platform App Builder",
      "short": "Platform App Builder",
      "codes": [
        "Plat-Admn-202",
        "DEV-402"
      ]
    },
    {
      "slug": "agentforce-specialist",
      "full": "Salesforce Certified Agentforce Specialist",
      "short": "Agentforce Specialist",
      "codes": [
        "AI-201"
      ]
    },
    {
      "slug": "business-analyst",
      "full": "Salesforce Certified Business Analyst",
      "short": "Business Analyst",
      "codes": [
        "BA-201"
      ]
    },
    {
      "slug": "cpq-administrator",
      "full": "Salesforce Certified CPQ Administrator",
      "short": "CPQ Administrator",
      "codes": [
        "Sales-Admn-202",
        "CPQ-211"
      ]
    },
    {
      "slug": "marketing-cloud-engagement-admin",
      "full": "Salesforce Certified Marketing Cloud Engagement Administrator",
      "short": "Marketing Cloud Engagement Administrator",
      "codes": [
        "MCE-Admn-201"
      ]
    },
    {
      "slug": "slack-administrator",
      "full": "Slack Certified Administrator",
      "short": "Slack Administrator",
      "codes": [
        "Slack-Admn-201"
      ]
    },
    {
      "slug": "developer-1",
      "full": "Salesforce Certified Platform Developer I",
      "short": "Platform Developer I",
      "codes": [
        "Plat-Dev-201",
        "PD1",
        "CRT-450"
      ]
    },
    {
      "slug": "developer-2",
      "full": "Salesforce Certified Platform Developer II",
      "short": "Platform Developer II",
      "codes": [
        "Plat-Dev-301",
        "PD2"
      ]
    },
    {
      "slug": "javascript-developer-i",
      "full": "Salesforce Certified JavaScript Developer I",
      "short": "JavaScript Developer I",
      "codes": [
        "JS-Dev-101",
        "CRT-600"
      ]
    },
    {
      "slug": "b2c-commerce-developer",
      "full": "Salesforce Certified B2C Commerce Developer",
      "short": "B2C Commerce Developer",
      "codes": [
        "Comm-Dev-101",
        "CRT-500"
      ]
    },
    {
      "slug": "industries-cpq-developer",
      "full": "Salesforce Certified Industries CPQ Developer",
      "short": "Industries CPQ Developer",
      "codes": [
        "Ind-Dev-201"
      ]
    },
    {
      "slug": "marketing-cloud-engagement-developer",
      "full": "Salesforce Certified Marketing Cloud Engagement Developer",
      "short": "Marketing Cloud Engagement Developer",
      "codes": [
        "MCE-Dev-201"
      ]
    },
    {
      "slug": "mulesoft-developer-i",
      "full": "Salesforce Certified MuleSoft Developer I",
      "short": "MuleSoft Developer I",
      "codes": [
        "Mule-Dev-201",
        "MCD - Level 1"
      ]
    },
    {
      "slug": "mulesoft-developer-ii",
      "full": "Salesforce Certified MuleSoft Developer II",
      "short": "MuleSoft Developer II",
      "codes": [
        "Mule-Dev-301",
        "MCD - Level 2"
      ]
    },
    {
      "slug": "mulesoft-hyperautomation-developer",
      "full": "Salesforce Certified MuleSoft Hyperautomation Developer",
      "short": "MuleSoft Hyperautomation Developer",
      "codes": [
        "Mule-Dev-202"
      ]
    },
    {
      "slug": "omnistudio-developer",
      "full": "Salesforce Certified OmniStudio Developer",
      "short": "OmniStudio Developer",
      "codes": [
        "Plat-Dev-210"
      ]
    },
    {
      "slug": "slack-developer",
      "full": "Slack Certified Developer",
      "short": "Slack Developer",
      "codes": [
        "Slack-Dev-201"
      ]
    },
    {
      "slug": "crm-analytics-einstein-discovery-consultant",
      "full": "Salesforce Certified CRM Analytics and Einstein Discovery Consultant",
      "short": "CRM Analytics and Einstein Discovery Consultant",
      "codes": [
        "CRMA-Con-201"
      ]
    },
    {
      "slug": "data-360-consultant",
      "full": "Salesforce Certified Data 360 Consultant",
      "short": "Data 360 Consultant",
      "codes": [
        "Data-Con-101"
      ]
    },
    {
      "slug": "education-cloud-consultant",
      "full": "Salesforce Certified Education Cloud Consultant",
      "short": "Education Cloud Consultant",
      "codes": [
        "ED-Con-101",
        "Edu-Con-201"
      ]
    },
    {
      "slug": "experience-cloud",
      "full": "Salesforce Certified Experience Cloud Consultant",
      "short": "Experience Cloud Consultant",
      "codes": [
        "EX-Con-101",
        "CRT-271"
      ]
    },
    {
      "slug": "field-service",
      "full": "Salesforce Certified Agentforce Field Service and Operations Consultant",
      "short": "Agentforce Field Service and Operations Consultant",
      "codes": [
        "FS-Con-101"
      ]
    },
    {
      "slug": "pardot-consultant",
      "full": "Salesforce Certified Marketing Cloud Account Engagement Consultant",
      "short": "Marketing Cloud Account Engagement Consultant",
      "codes": [
        "CRT-302",
        "MCAE-Con-201"
      ]
    },
    {
      "slug": "marketing-cloud-consultant",
      "full": "Salesforce Certified Marketing Cloud Engagement Consultant",
      "short": "Marketing Cloud Engagement Consultant",
      "codes": [
        "MCE-Con-201"
      ]
    },
    {
      "slug": "agentforce-life-sciences-consultant",
      "full": "Salesforce Certified Agentforce Life Sciences Consultant",
      "short": "Agentforce Life Sciences Consultant",
      "codes": [
        "Als-Con-201"
      ]
    },
    {
      "slug": "nonprofit-cloud",
      "full": "Salesforce Certified Agentforce Nonprofit Consultant",
      "short": "Agentforce Nonprofit Consultant",
      "codes": [
        "NP-Con-102"
      ]
    },
    {
      "slug": "nonprofit-success-pack-consultant",
      "full": "Salesforce Certified Nonprofit Success Pack (NPSP) Consultant",
      "short": "Nonprofit Success Pack (NPSP) Consultant",
      "codes": [
        "NP-Con-101"
      ]
    },
    {
      "slug": "omnistudio-consultant",
      "full": "Salesforce Certified OmniStudio Consultant",
      "short": "OmniStudio Consultant",
      "codes": [
        "Plat-Con-201"
      ]
    },
    {
      "slug": "public-sector-solutions-consultant",
      "full": "Salesforce Certified Public Sector Solutions Consultant",
      "short": "Public Sector Solutions Consultant",
      "codes": [
        "PubSec-Con-201"
      ]
    },
    {
      "slug": "revenue-cloud-consultant",
      "full": "Salesforce Certified Revenue Management Consultant",
      "short": "Revenue Management Consultant",
      "codes": [
        "Rev-Con-201"
      ]
    },
    {
      "slug": "sales-cloud",
      "full": "Salesforce Certified Agentforce Sales Consultant",
      "short": "Agentforce Sales Consultant",
      "codes": [
        "Sales-Con-201",
        "CRT-251"
      ]
    },
    {
      "slug": "service-cloud",
      "full": "Salesforce Certified Agentforce Service Consultant",
      "short": "Agentforce Service Consultant",
      "codes": [
        "Service-Con-201",
        "CRT-261"
      ]
    },
    {
      "slug": "slack-consultant",
      "full": "Slack Certified Consultant",
      "short": "Slack Consultant",
      "codes": [
        "Slack-Con-201"
      ]
    },
    {
      "slug": "email-specialist",
      "full": "Salesforce Certified Marketing Cloud Engagement Specialist",
      "short": "Marketing Cloud Engagement Specialist",
      "codes": [
        "MC-202",
        "CRT-550"
      ]
    },
    {
      "slug": "marketing-cloud-next-consultant",
      "full": "Salesforce Certified Marketing Cloud Next Consultant",
      "short": "Marketing Cloud Next Consultant",
      "codes": [
        "MC-Con-201"
      ]
    },
    {
      "slug": "pardot-specialist",
      "full": "Salesforce Certified Marketing Cloud Account Engagement Specialist",
      "short": "Marketing Cloud Account Engagement Specialist",
      "codes": [
        "MC-201"
      ]
    },
    {
      "slug": "application-architect",
      "full": "Salesforce Certified Application Architect",
      "short": "Application Architect",
      "codes": []
    },
    {
      "slug": "data-architect",
      "full": "Salesforce Certified Platform Data Architect",
      "short": "Platform Data Architect",
      "codes": [
        "Plat-Arch-201"
      ]
    },
    {
      "slug": "integration-architect",
      "full": "Salesforce Certified Platform Integration Architect",
      "short": "Platform Integration Architect",
      "codes": [
        "Plat-Arch-204"
      ]
    },
    {
      "slug": "sharing-visibility-architect",
      "full": "Salesforce Certified Platform Sharing and Visibility Architect",
      "short": "Platform Sharing and Visibility Architect",
      "codes": [
        "Plat-Arch-205"
      ]
    },
    {
      "slug": "system-architect",
      "full": "Salesforce Certified System Architect",
      "short": "System Architect",
      "codes": []
    },
    {
      "slug": "identity-access-management-architect",
      "full": "Salesforce Certified Platform Identity and Access Management Architect",
      "short": "Platform Identity and Access Management Architect",
      "codes": [
        "Plat-Arch-203"
      ]
    },
    {
      "slug": "dev-lifecycle-deployment-architect",
      "full": "Salesforce Certified Platform Development Lifecycle and Deployment Architect",
      "short": "Platform Development Lifecycle and Deployment Architect",
      "codes": [
        "Plat-Arch-202"
      ]
    },
    {
      "slug": "technical-architect",
      "full": "Salesforce Certified Technical Architect",
      "short": "Technical Architect",
      "codes": [
        "CTA"
      ]
    },
    {
      "slug": "technical-architect-evaluation",
      "full": "Salesforce Certified Technical Architect - Architect Evaluation",
      "short": "Technical Architect - Architect Evaluation",
      "codes": []
    },
    {
      "slug": "technical-architect-review-board",
      "full": "Salesforce Certified Technical Architect - Architect Review Board",
      "short": "Technical Architect - Architect Review Board",
      "codes": []
    },
    {
      "slug": "b2b-solution-architect",
      "full": "Salesforce Certified B2B Solution Architect",
      "short": "B2B Solution Architect",
      "codes": [
        "Arch-301"
      ]
    },
    {
      "slug": "b2c-commerce-architect",
      "full": "Salesforce Certified B2C Commerce Architect",
      "short": "B2C Commerce Architect",
      "codes": [
        "Arch-303"
      ]
    },
    {
      "slug": "b2c-solution-architect",
      "full": "Salesforce Certified B2C Solution Architect",
      "short": "B2C Solution Architect",
      "codes": [
        "Arch-302"
      ]
    },
    {
      "slug": "heroku-architect",
      "full": "Salesforce Certified Heroku Architect",
      "short": "Heroku Architect",
      "codes": [
        "Plat-Arch-206"
      ]
    },
    {
      "slug": "mulesoft-catalyst-consultant",
      "full": "Salesforce Certified MuleSoft Catalyst Consultant",
      "short": "MuleSoft Catalyst Consultant",
      "codes": [
        "Mule-Con-201"
      ]
    },
    {
      "slug": "mulesoft-platform-architect",
      "full": "Salesforce Certified MuleSoft Platform Architect",
      "short": "MuleSoft Platform Architect",
      "codes": [
        "Mule-Arch-201",
        "MCPA"
      ]
    },
    {
      "slug": "mulesoft-integration-architect",
      "full": "Salesforce Certified MuleSoft Platform Integration Architect",
      "short": "MuleSoft Platform Integration Architect",
      "codes": [
        "Mule-Arch-202",
        "MCIA"
      ]
    },
    {
      "slug": "advanced-field-service-ap",
      "full": "Salesforce Accredited Advanced Field Service Professional",
      "short": "Advanced Field Service Accredited Professional",
      "codes": [
        "AP-209"
      ]
    },
    {
      "slug": "b2b-commerce-admin-ap",
      "full": "Salesforce Accredited B2B Commerce Administrator Professional",
      "short": "B2B Commerce Administrator Accredited Professional",
      "codes": [
        "AP-201"
      ]
    },
    {
      "slug": "b2b-commerce-developer-ap",
      "full": "Salesforce Accredited B2B Commerce Developer Professional",
      "short": "B2B Commerce Developer Accredited Professional",
      "codes": []
    },
    {
      "slug": "communications-cloud-ap",
      "full": "Salesforce Accredited Agentforce Communications Professional",
      "short": "Agentforce Communications Professional",
      "codes": []
    },
    {
      "slug": "consumer-goods-cloud-ap",
      "full": "Salesforce Accredited Agentforce Consumer Goods Professional",
      "short": "Agentforce Consumer Goods Professional",
      "codes": []
    },
    {
      "slug": "consumer-goods-tpm-ap",
      "full": "Salesforce Accredited Consumer Goods Cloud: Trade Promotion Management Professional",
      "short": "Consumer Goods Cloud: Trade Promotion Management Accredited Professional",
      "codes": []
    },
    {
      "slug": "contact-center-ap",
      "full": "Salesforce Accredited Contact Center Professional",
      "short": "Contact Center Accredited Professional",
      "codes": []
    },
    {
      "slug": "cpq-billing-ap",
      "full": "Salesforce Accredited CPQ and Billing Consultant Professional",
      "short": "CPQ and Billing Consultant Accredited Professional",
      "codes": [
        "AP-223"
      ]
    },
    {
      "slug": "energy-utilities-ap",
      "full": "Salesforce Accredited Energy and Utilities Cloud Professional",
      "short": "Energy and Utilities Cloud Accredited Professional",
      "codes": []
    },
    {
      "slug": "financial-services-cloud-ap",
      "full": "Salesforce Accredited Agentforce Financial Services Professional",
      "short": "Agentforce Financial Services Professional",
      "codes": []
    },
    {
      "slug": "health-cloud-ap",
      "full": "Salesforce Accredited Agentforce Health Professional",
      "short": "Agentforce Health Professional",
      "codes": [
        "AP-211"
      ]
    },
    {
      "slug": "heroku-developer-ap",
      "full": "Salesforce Accredited Heroku Developer Professional",
      "short": "Heroku Developer Accredited Professional",
      "codes": [
        "AP-225"
      ]
    },
    {
      "slug": "loyalty-management-ap",
      "full": "Salesforce Accredited Loyalty Management Professional",
      "short": "Loyalty Management Accredited Professional",
      "codes": [
        "AP-212"
      ]
    },
    {
      "slug": "manufacturing-cloud-ap",
      "full": "Salesforce Accredited Agentforce Manufacturing Professional",
      "short": "Agentforce Manufacturing Professional",
      "codes": []
    },
    {
      "slug": "marketing-cloud-advanced-cross-channel-ap",
      "full": "Salesforce Accredited Marketing Cloud Advanced Cross Channel Professional",
      "short": "Marketing Cloud Advanced Cross Channel Accredited Professional",
      "codes": []
    },
    {
      "slug": "marketing-cloud-intelligence-ap",
      "full": "Salesforce Accredited Marketing Cloud Intelligence Professional",
      "short": "Marketing Cloud Intelligence Accredited Professional",
      "codes": []
    },
    {
      "slug": "marketing-cloud-personalization-ap",
      "full": "Salesforce Accredited Marketing Cloud Personalization Professional",
      "short": "Marketing Cloud Personalization Accredited Professional",
      "codes": []
    },
    {
      "slug": "media-cloud-ap",
      "full": "Salesforce Accredited Media Cloud Professional",
      "short": "Media Cloud Accredited Professional",
      "codes": []
    },
    {
      "slug": "net-zero-cloud-ap",
      "full": "Salesforce Accredited Net Zero Cloud Professional",
      "short": "Net Zero Cloud Accredited Professional",
      "codes": [
        "AP-218"
      ]
    },
    {
      "slug": "order-management-admin-ap",
      "full": "Salesforce Accredited Order Management Administrator Professional",
      "short": "Order Management Administrator Accredited Professional",
      "codes": []
    },
    {
      "slug": "order-management-developer-ap",
      "full": "Salesforce Accredited Order Management Developer Professional",
      "short": "Order Management Developer Accredited Professional",
      "codes": [
        "AP-220"
      ]
    },
    {
      "slug": "process-automation-ap",
      "full": "Salesforce Accredited Process Automation Professional",
      "short": "Process Automation Accredited Professional",
      "codes": []
    },
    {
      "slug": "public-sector-solutions-ap",
      "full": "Salesforce Accredited Agentforce 360 for Public Sector Professional",
      "short": "Agentforce 360 for Public Sector Professional",
      "codes": []
    },
    {
      "slug": "sales-foundations",
      "full": "Salesforce Certified Agentforce Sales Foundations",
      "short": "Agentforce Sales Foundations",
      "codes": [
        "Sales-101"
      ]
    },
    {
      "slug": "strategy-designer",
      "full": "Salesforce Certified Platform Strategy Designer",
      "short": "Platform Strategy Designer",
      "codes": [
        "Plat-UX-102"
      ]
    },
    {
      "slug": "ux-designer",
      "full": "Salesforce Certified Platform User Experience Designer",
      "short": "Platform User Experience Designer",
      "codes": [
        "Plat-UX-101"
      ]
    },
    {
      "slug": "tableau-architect",
      "full": "Tableau Certified Architect",
      "short": "Tableau Architect",
      "codes": [
        "Analytics-Arch-201"
      ]
    },
    {
      "slug": "tableau-consultant",
      "full": "Tableau Certified Consultant",
      "short": "Tableau Consultant",
      "codes": [
        "Analytics-Con-201"
      ]
    },
    {
      "slug": "tableau-next-consultant",
      "full": "Tableau Certified Next Consultant",
      "short": "Tableau Next Consultant",
      "codes": [
        "Analytics-Con-202"
      ]
    },
    {
      "slug": "tableau-data-analyst",
      "full": "Tableau Certified Data Analyst",
      "short": "Tableau Data Analyst",
      "codes": [
        "Analytics-DA-201"
      ]
    },
    {
      "slug": "tableau-desktop-foundations",
      "full": "Tableau Certified Desktop Foundations",
      "short": "Tableau Desktop Foundations",
      "codes": [
        "Analytics-101"
      ]
    },
    {
      "slug": "tableau-server-administrator",
      "full": "Tableau Certified Server Administrator",
      "short": "Tableau Server Administrator",
      "codes": [
        "Analytics-SA-201"
      ]
    },
    {
      "slug": "claude-certified-associate",
      "full": "Claude Certified Associate – Foundations",
      "short": "Claude Certified Associate – Foundations",
      "codes": []
    },
    {
      "slug": "claude-certified-developer",
      "full": "Claude Certified Developer – Foundations",
      "short": "Claude Certified Developer – Foundations",
      "codes": []
    },
    {
      "slug": "claude-certified-architect-foundations",
      "full": "Claude Certified Architect – Foundations",
      "short": "Claude Certified Architect – Foundations",
      "codes": []
    },
    {
      "slug": "claude-certified-architect-professional",
      "full": "Claude Certified Architect – Professional",
      "short": "Claude Certified Architect – Professional",
      "codes": []
    }
  ];

function stripTags(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

async function run() {
  let failures = 0;
  let passedPages = 0;

  console.log(`\nAuditing all ${ALL_95_CERTS.length} certifications on ${BASE_URL}...\n`);

  for (const cert of ALL_95_CERTS) {
    // 301s are kept deliberately: one canonical indexable URL per credential.
    // The script follows them rather than asking the site to serve both.
    const res = await fetch(`${BASE_URL}/certifications/${cert.slug}`, { redirect: 'follow' });
    const html = await res.text();
    const text = stripTags(html).toLowerCase();
    const pageErrors = [];

    if (res.status !== 200) pageErrors.push(`HTTP ${res.status}`);

    const phrases = [
      cert.full.toLowerCase(),
      `${cert.full.toLowerCase()} dumps`,
      `${cert.full.toLowerCase()} questions`,
      `${cert.short.toLowerCase()} dumps`,
      `${cert.short.toLowerCase()} questions`,
      ...cert.codes.flatMap((c) => [`${c.toLowerCase()} dumps`, `${c.toLowerCase()} questions`]),
    ];
    for (const p of phrases) {
      if (!text.includes(p)) pageErrors.push(`Missing phrase: "${p}"`);
    }

    // No placeholder or self-referential exam code in the Quick Facts table.
    // The card used to fall back to a hand-written label where the issuer
    // publishes no code: "(AP)" on all 23 Accredited Professionals, and the
    // credential's own name on the composite Architect and Designer cards.
    const codeField = text.match(/official exam name and code ([^|]{0,160})/)?.[1] ?? '';
    const placeholders = ['(ap)', `(${cert.short.toLowerCase()})`, `(${cert.full.toLowerCase()})`];
    for (const placeholder of placeholders) {
      if (codeField.includes(placeholder) && !cert.codes.some((c) => placeholder.includes(c.toLowerCase()))) {
        pageErrors.push(`Quick Facts renders placeholder exam code "${placeholder}"`);
      }
    }
    if (!cert.codes.length && /exam code [a-z0-9 ]*\(/.test(codeField)) {
      pageErrors.push(`Quick Facts shows a code for a credential with no published exam code`);
    }

    if (html.includes('&amp;apos;') || html.includes('&amp;amp;')) {
      pageErrors.push('Contains a double-escaped HTML entity');
    }
    if (text.includes('5x salesforce certified') || text.includes('5\u00d7 salesforce certified')) {
      pageErrors.push('Contains outdated 5x Salesforce Certified author badge');
    }
    if (text.includes('seles map') || text.includes('not been independently verified')) {
      pageErrors.push('Contains OCR corruption or an unverified repository disclaimer');
    }
    if (text.includes('70% discount retake voucher')) {
      pageErrors.push('Contains false 70% discount retake voucher claim');
    }
    if (text.includes('surprised me with how much it leans')) {
      pageErrors.push('Contains unattributed first-person anecdote');
    }
    if (/sample questions\s+\./i.test(text)) {
      pageErrors.push('Contains space-before-period typo');
    }

    const faqHeadings = (html.match(/<h2[^>]*>[^<]*(?:FAQ|Common Questions|Questions Candidates Ask)[^<]*<\/h2>/gi) || []).length;
    if (faqHeadings > 1) {
      pageErrors.push(`Contains ${faqHeadings} stacked FAQ H2 sections on the same page`);
    }

    // No duplicate consecutive headings.
    const headings = [...html.matchAll(/<h([23])[^>]*>([\s\S]*?)<\/h\1>/gi)]
      .map((m) => stripTags(m[2]).toLowerCase())
      .filter(Boolean);
    for (let i = 1; i < headings.length; i++) {
      if (headings[i] && headings[i] === headings[i - 1]) {
        pageErrors.push(`Duplicate consecutive heading: "${headings[i]}"`);
      }
    }

    if (pageErrors.length > 0) {
      failures += pageErrors.length;
      console.error(`FAIL /certifications/${cert.slug} (${pageErrors.length} issues):`);
      for (const err of pageErrors) console.error(`   - ${err}`);
    } else {
      passedPages++;
    }
  }

  console.log(`\n========================================`);
  console.log(`Audited ${ALL_95_CERTS.length} certification pages: ${passedPages}/95 passed cleanly.`);
  if (failures > 0) {
    console.error(`Total assertion failures: ${failures}`);
    process.exit(1);
  } else {
    console.log('All 95 certification pages passed mapping, uniqueness, and accuracy checks!');
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
