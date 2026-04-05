/**
 * Official Salesforce-hosted imagery (Trailhead + developer.salesforce.com certification pages).
 * Used only as composited visuals in generated PNGs — attribute in-image; do not imply endorsement.
 */

export const SF_OFFICIAL = {
  trailheadFlogo:
    'https://trailhead.salesforce.com/assets/trailhead-og-flogo-9ac90ab0d1b86ea359e1f7b60f6081fa56f0e7d8b61abfffbf572fac2f5ace5a.png',
  adminRole:
    'https://developer.salesforce.com/resources2/certification-site/images/roles/administrator-role-picture3.png?v=1',
  developerRole:
    'https://developer.salesforce.com/resources2/certification-site/images/roles/developer-role-picture3.png',
  architectRole:
    'https://developer.salesforce.com/resources2/certification-site/images/roles/architect-role-picture3.png?v=1',
  consultantRole:
    'https://developer.salesforce.com/resources2/certification-site/images/roles/Amanda-card.png',
}

/** Thread id → artwork for main thread visuals */
export const THREAD_SF_IMAGE_URL = {
  'w1-thread-3-study-method': SF_OFFICIAL.adminRole,
  'w2-thread-1-pd1-roadmap': SF_OFFICIAL.developerRole,
  'w2-thread-2-pd1-apex': SF_OFFICIAL.developerRole,
  'w2-thread-3-pd1-vs-admin': SF_OFFICIAL.trailheadFlogo,
  'w3-thread-1-app-builder': SF_OFFICIAL.adminRole,
  'w3-thread-2-flow-tips': SF_OFFICIAL.adminRole,
  'w3-thread-3-cert-roadmap': SF_OFFICIAL.trailheadFlogo,
  'w4-thread-1-agentforce': SF_OFFICIAL.architectRole,
  'w4-thread-2-adm211': SF_OFFICIAL.adminRole,
  'w4-thread-3-salary-stats': SF_OFFICIAL.consultantRole,
}

/** Link-reply card: always Trailhead branding */
export const LINK_REPLY_SF_URL = SF_OFFICIAL.trailheadFlogo

/**
 * Pick Salesforce artwork for a daily tip from tweet text / tags.
 */
export function sfImageUrlForTipTweet(text) {
  const t = text.toLowerCase()
  if (t.includes('agentforce') || t.includes('#agentforce')) return SF_OFFICIAL.architectRole
  if (t.includes('pd1') || t.includes('#pd1') || t.includes('apex') || t.includes('soql') || t.includes('trigger'))
    return SF_OFFICIAL.developerRole
  if (t.includes('flow') || t.includes('#salesforceflow')) return SF_OFFICIAL.adminRole
  if (t.includes('mulesoft') || t.includes('#mulesoft')) return SF_OFFICIAL.trailheadFlogo
  if (t.includes('consultant') || t.includes('service cloud') || t.includes('career') || t.includes('salary'))
    return SF_OFFICIAL.consultantRole
  return SF_OFFICIAL.trailheadFlogo
}

export function getThreadSfImageUrl(threadId) {
  return THREAD_SF_IMAGE_URL[threadId] ?? SF_OFFICIAL.trailheadFlogo
}
