import type { FaqItem } from '@/lib/schema-data'

/**
 * Contact-page FAQ, shared by the visible accordion in page.tsx and the
 * FAQPage JSON-LD in layout.tsx. Google only credits marked-up answers that
 * are also visible on the page, so these two must read from one source.
 */
export const CONTACT_FAQS: FaqItem[] = [
  {
    question: 'How do I access the study materials?',
    answer:
      'Open any certification page and the material is there. Every on-page study guide, section weightage breakdown, exam tip, and set of 15 to 20 practice questions per exam is 100% free with no login, no sign-up, and no payment required. There is nothing to unlock and no email gate. Contact us only if you want the extended mock-exam bank, which is a separate paid request.',
  },
  {
    question: 'Are the questions up to date?',
    answer:
      'Yes. Fees, question counts, time limits, passing scores, and section weightage come from the issuer’s own published exam guides, and each certification page cites the source it used. We re-review pages as Salesforce changes exam outlines or renames credentials, and every page carries a visible "Last updated" date that matches its structured data. Always confirm the official exam guide on Trailhead Academy before you book, because Salesforce can change an outline between our reviews.',
  },
  {
    question: 'What certifications do you cover?',
    answer:
      'All 95 Salesforce and partner credentials across eleven role tracks: Administrator, Developer, Consultant, Architect, Marketing, Associate, Sales, Designer, Tableau, Accredited Professional, and Anthropic Claude partner certifications. That includes the full architect path up to CTA, the MuleSoft and Slack credentials, all 23 Accredited Professional exams, and retired exams such as AI Associate, which we keep as historical guides rather than delete.',
  },
  {
    question: 'Do you offer refunds?',
    answer:
      'There is nothing to refund on the free material, because the study guides, section breakdowns, and 15 to 20 practice questions per exam cost nothing and need no account. We also do not sell exam vouchers, so we cannot refund an exam fee: Salesforce and Pearson VUE handle booking, rescheduling, and retake fees directly, and our retake policy page explains their terms. If you paid us for an extended mock-exam bank and it is not what was described, contact us and we will put it right.',
  },
]
