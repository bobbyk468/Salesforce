import { RELEASE_DATE_DISPLAY } from './release-data'

export const CONTACT_EMAIL = 'km.krishnamohan25@gmail.com'
export const WHATSAPP_LINK = 'https://api.whatsapp.com/send?phone=918807570951&text=Hello%2C%0A%0A%20%20%20%20%20%20%20%20Drop%20us%20your%20query'

/** Site brand name: used in header, footer, metadata, and schema. */
export const SITE_NAME = 'Trailblaze Prep'
export const SITE_DEFAULT_TITLE = `Free Salesforce Exam Practice Tests | ${SITE_NAME}`
export const SITE_DEFAULT_DESCRIPTION =
  'Free Salesforce practice exams and study guides for Admin, Developer, Consultant, Architect, MuleSoft and Tableau certifications.'

/** Shown on cert pages and About for E-E-A-T; update when content is refreshed. */
export const CONTENT_LAST_UPDATED = RELEASE_DATE_DISPLAY

/**
 * Social profiles for the footer and Organization `sameAs`.
 *
 * To light one up sitewide, set its `url` to the live profile and leave the
 * rest alone: an entry with an empty `url` is skipped everywhere, so there are
 * never dead links in the footer or bogus URLs in structured data.
 */
export type SocialProfile = {
  /** Stable key used to pick the icon in the footer. */
  key: 'x' | 'linkedin' | 'youtube' | 'instagram' | 'facebook'
  /** Display label, also used for the accessible name. */
  label: string
  /** Live profile URL, or '' while the profile does not exist yet. */
  url: string
}

export const SOCIAL_PROFILES: SocialProfile[] = [
  { key: 'x', label: '@trailblazeprep', url: 'https://x.com/trailblazeprep' },
  // Paste the company page URL here once it is live, e.g.
  // 'https://www.linkedin.com/company/trailblazeprep'
  { key: 'linkedin', label: 'LinkedIn', url: '' },
  { key: 'youtube', label: 'YouTube', url: '' },
  { key: 'instagram', label: 'Instagram', url: '' },
  { key: 'facebook', label: 'Facebook', url: '' },
]

/** Only the profiles that actually exist, in config order. */
export const ACTIVE_SOCIAL_PROFILES: SocialProfile[] = SOCIAL_PROFILES.filter(
  (profile) => profile.url.trim().length > 0
)

/** Social profile URLs for Organization schema (`sameAs`). */
export const SOCIAL_LINKS: string[] = ACTIVE_SOCIAL_PROFILES.map((p) => p.url)
