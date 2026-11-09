/**
 * Salesforce program rules that are the same for every credential.
 *
 * These were previously written as prose on each page that needed them, which
 * is how /salesforce-exam-retake-policy came to say "no mandatory waiting
 * period, no published limit" while /salesforce-certification-cost said "1-day
 * wait, then 14 days, maximum 6 attempts per year" — and neither matched
 * Salesforce. Both now read from here.
 *
 * Verified 9 November 2026 against Salesforce's own help articles. Update the
 * facts and the dates together, or not at all.
 */

export const RETAKE_POLICY = {
  /** help.salesforce.com/s/articleView?id=005298880 */
  sourceUrl: 'https://help.salesforce.com/s/articleView?id=005298880&language=en_US&type=1',
  sourceLabel: 'Salesforce: Retake Policy for Certification Exams',
  verifiedOn: '9 November 2026',
  attemptsPerCycle: 3,
  waitAfterFirstFail: '24 hours',
  waitAfterSecondFail: '14 days',
  afterThirdFail: 'the next release cycle',
  retakeFeeShare: '50% of the original exam price',
  foundationsRetakeFee: 'no retake fee',
  summary:
    'Within each release cycle you get 3 attempts at the same exam. After a first failure you wait 24 hours, after a second you wait 14 days, and after a third you wait until the next release cycle begins. Attempts reset when the new cycle starts.',
} as const

export const MAINTENANCE_POLICY = {
  /** help.salesforce.com/s/articleView?id=005298841 */
  sourceUrl: 'https://help.salesforce.com/s/articleView?id=005298841&language=en_US&type=1',
  sourceLabel: 'Salesforce: Maintain Your Salesforce Certification',
  verifiedOn: '9 November 2026',
  badgesPerYear: 1,
  summary:
    'Every certification requires one maintenance badge per year. Badges are released with a Spring, Summer or Winter cycle depending on the credential, and are due one year from the date they become available. Missing the deadline expires the certification.',
} as const

/**
 * Composite architect credentials. Neither has an exam of its own: Salesforce
 * grants them once the component certifications are held. Three pages on this
 * site previously gave three different component lists, and one claimed
 * System Architect needed a final proctored exam.
 */
export const COMPOSITE_ARCHITECT_CREDENTIALS = {
  'application-architect': {
    name: 'Application Architect',
    components: ['data-architect', 'sharing-visibility-architect', 'app-builder', 'developer-1'],
  },
  'system-architect': {
    name: 'System Architect',
    components: [
      'integration-architect',
      'identity-access-management-architect',
      'dev-lifecycle-deployment-architect',
      'developer-1',
    ],
  },
} as const
