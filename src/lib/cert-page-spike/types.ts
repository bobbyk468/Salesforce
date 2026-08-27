/** Matches PracticeQuestionsSection question shape (kept here to avoid importing client module into server data). */
export type SpikeSampleQuestion = {
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
  whyWrong?: string[]
}

/** Inline segments for lead copy and CTA paragraphs (text, links, bold). */
export type IntroSegment =
  | { type: 'text'; text: string }
  | { type: 'link'; href: string; label: string }
  | { type: 'strong'; text: string }

/**
 * Forward-compatible rich text format.
 * Supports both legacy segment arrays (IntroSegment[]) and markdown strings.
 * New content should use markdown strings for better authoring experience.
 *
 * Markdown syntax:
 * - **bold text** for strong emphasis
 * - *italic text* for em emphasis
 * - [link text](https://url.com) for internal/external links
 * - [email](mailto:user@example.com) for email links
 */
export type RichTextContent = IntroSegment[] | string

/** One titled paragraph block (Key Concepts / How to Pass sections). */
export type RichSectionBlock = {
  heading: string
  body: string
  /** When set, rendered instead of plain `body` (bold, internal links). */
  bodySegments?: IntroSegment[]
}

export type SharedCertCardAndContent = {
  /** First-hand exam observation rendered as an ExpertInsightCallout. Targets Google's E-E-A-T "Experience" signal. */
  expertInsight?: string
  /** Page-specific trap/readiness section used to reduce template similarity on priority cert pages. */
  differentiation?: CertDifferentiation
  certificationCard: {
    code: string
    description: string
    examDetails: {
      questions: number | string
      passingScore: string
      duration: string
      cost: string
    }
    topics: string[]
  }
  keyConcepts: {
    h2: string
    blocks: RichSectionBlock[]
  }
  scenarioTips: {
    h2: string
    intro: string
    blocks: RichSectionBlock[]
  }
  tocSections: { id: string; title: string }[]
  sampleQuestions: SpikeSampleQuestion[]
}

/** Persona-based “Who is this cert for?” section. */
export type WhoIsThisFor = {
  heading: string
  personas: { label: string; description: string }[]
}

/** “Is this exam hard?” difficulty and pass-rate section. */
export type ExamDifficulty = {
  heading: string
  summary: string
  bullets: string[]
  passRateGuidance: string
}

/** “Exam format explained” quick-reference grid + strategy. */
export type ExamFormat = {
  heading: string
  intro: string
  scenarioPercent?: string
  bestWayToPass: string[]
}

/** Page-specific exam traps and readiness signals for money-page differentiation. */
export type CertDifferentiation = {
  heading: string
  intro?: string
  commonTraps: { trap: string; fix: string }[]
  readinessBenchmarks: string[]
  whoShouldSkip?: string[]
  adjacentCerts?: { href: string; label: string; guidance: string }[]
}

/** AI Associate stack: intro paragraph component, key concepts before scenarios, FullQuestionBank CTA. */
export type AssociateSpikeBody = SharedCertCardAndContent & {
  template: 'associate'
  /** When set, replaces `CertIntroParagraph` above the fold CTA (custom lead copy with links). */
  introLead?: IntroSegment[]
  /** Second argument to `getPracticeQuestionsIntro` (e.g. click-to-reveal copy). */
  practiceQuestionsIntroSuffix?: string
  /** Optional “next certs” promo above RelatedCertifications */
  nextCertsAfter?: {
    heading: string
    intro: string
    links: { href: string; label: string }[]
  }
  /** Admin-style “Who is this cert for?” persona section. */
  whoIsThisFor?: WhoIsThisFor
  /** Admin-style “Is this exam hard?” difficulty section. */
  examDifficulty?: ExamDifficulty
  /** Admin-style “Exam format explained” section. */
  examFormat?: ExamFormat
}

export type MoreQuestionsParagraph =
  | { kind: 'text'; text: string }
  | { kind: 'segments'; segments: IntroSegment[] }

export type AppBuilderSpikeBody = SharedCertCardAndContent & {
  template: 'app-builder'
  introLead: IntroSegment[]
  ctaExamCode: string
  /** Second argument to getPracticeQuestionsIntro */
  practiceIntroSuffix: string
  moreQuestionsBlock: {
    h3: string
    paragraphs: MoreQuestionsParagraph[]
    ctaHref: string
    ctaLabel: string
  }
  afterCertSection: {
    id: string
    heading: string
    intro: string
    items: { lead: string; link: { href: string; label: string }; tail: string }[]
  }
  /** Admin-style "Who is this cert for?" persona section. */
  whoIsThisFor?: WhoIsThisFor
  /** Admin-style "Is this exam hard?" difficulty section. */
  examDifficulty?: ExamDifficulty
  /** Admin-style "Exam format explained" section. */
  examFormat?: ExamFormat
}

/** Administrator (ADM-201): bespoke layout lives in `AdministratorCertBody`; registry entry is a marker only. */
export type AdminSpikeBody = {
  template: 'admin'
}

/** Platform Developer I (PD1): bespoke layout lives in `Developer1CertBody`; registry entry is a marker only. */
export type PdiSpikeBody = {
  template: 'pd1'
}

/** Optional escape hatch: body loaded dynamically from `cert-bodies/<slug>.tsx` when listed in `legacy-cert-slugs.generated.ts`. */
export type LegacySpikeBody = {
  template: 'legacy'
}

export type CertSpikeBodyData =
  | AssociateSpikeBody
  | AppBuilderSpikeBody
  | AdminSpikeBody
  | PdiSpikeBody
  | LegacySpikeBody
