import Link from '@/components/AppLink'
import { CardIcon, CardIconSprite } from '@/components/CardIconSprite'
import type { GridCategory } from '@/lib/certification-grid-data'
import { EDITORIAL_CREDENTIALS, REVIEWER } from '@/lib/editorial-credentials'

/**
 * The full certification list, grouped by role. All category headings and
 * cards are visible in the initial server render, with no client filter state.
 */
export default function CertificationGrid({
  categories,
  headingLevel = 'h1',
}: {
  categories: GridCategory[]
  /**
   * The hub's main title is an H1; the secondary /certifications directory
   * can request H2 if it embeds this component beneath its own page title.
   */
  headingLevel?: 'h1' | 'h2'
}) {
  const total = categories.reduce((sum, category) => sum + category.certs.length, 0)
  const Heading = headingLevel
  const CardHeading = 'h3'

  return (
    <section className="py-16 px-4 sm:py-20" aria-labelledby="all-certs-heading">
      <CardIconSprite />
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <Heading id="all-certs-heading" className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Complete List of Salesforce Certifications: Free Practice Questions &amp; Study Guides
          </Heading>
          <p className="mt-3 text-lg text-gray-600">
            All {total} certifications with exam length, pass mark, cost and prerequisites.
            Every one links to free practice questions &mdash; no sign-up.
          </p>
        </div>

        {/*
          Jump bar. Plain anchors to the role sections below, server-rendered,
          so they work without JavaScript and give crawlers a visible table of
          contents for the page. They target the existing
          `certification-track-<slug>` ids rather than bare `#associate` ones:
          the prefix keeps them from colliding with any other id on a page
          this long, and nothing else links to the bare form.
        */}
        <nav aria-label="Jump to a certification track" className="mb-10">
          <p className="mb-3 text-center text-sm font-semibold uppercase tracking-wider text-gray-500">
            Jump to role track
          </p>
          <ul className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <li key={category.slug}>
                <a
                  href={`#certification-track-${category.slug}`}
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 text-sm font-medium text-gray-700 transition-colors hover:border-salesforce-blue hover:text-salesforce-blue"
                >
                  {category.name}
                  {/*
                    Reserved width and tabular figures: this count was the
                    only thing shifting on the page, because its width
                    changed when the webfont swapped in.
                  */}
                  <span className="inline-block min-w-[1.5rem] rounded-full bg-gray-100 px-1.5 py-0.5 text-center text-xs tabular-nums text-gray-600">
                    {category.certs.length}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mb-10 text-center text-sm font-medium text-gray-700">
          Reviewed by {EDITORIAL_CREDENTIALS.length}x Salesforce Certified practitioner {REVIEWER.name}
          {' — '}
          <a
            href={REVIEWER.profileUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="font-semibold text-salesforce-blue underline decoration-salesforce-blue/30 underline-offset-4 hover:text-salesforce-dark"
          >
            verify credentials
          </a>
        </p>

        {categories.map((category) => (
          /*
            Every track stays in the SSR DOM so crawlers see all 91 cards.
            Keep every track normally rendered as well: headless audit tools
            use rendered text extraction and skip content-visibility subtrees.
          */
          <section
            key={category.slug}
            id={`certification-track-${category.slug}`}
            className="mb-12 last:mb-0"
            aria-labelledby={`certification-track-${category.slug}-heading`}
          >
            <h2 id={`certification-track-${category.slug}-heading`} className="mb-5 border-b border-gray-200 pb-3 text-2xl font-bold text-gray-900">
              Salesforce {category.name} Certifications
            </h2>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {category.certs.map((cert) => (
                <li key={cert.slug} className="h-full">
                  <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-lg">
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <CardHeading className="text-base font-bold leading-snug text-gray-900">
                        <Link href={cert.href} className="hover:text-salesforce-blue">
                          {cert.name}
                        </Link>
                      </CardHeading>
                      {cert.level && (
                        <span className="flex-shrink-0 rounded-full bg-salesforce-blue/10 px-2.5 py-1 text-xs font-semibold text-salesforce-dark">
                          {cert.level}
                        </span>
                      )}
                    </div>

                    <p className="mb-4 text-sm leading-relaxed text-gray-600">
                      {cert.description}
                    </p>

                    <dl className="mb-4 space-y-1.5 text-sm">
                      {cert.questions && (
                        <div className="flex justify-between gap-3">
                          <dt className="text-gray-500">Questions</dt>
                          <dd className="font-medium text-gray-900">{cert.questions}</dd>
                        </div>
                      )}
                      {cert.passingScore && (
                        <div className="flex justify-between gap-3">
                          <dt className="text-gray-500">Pass mark</dt>
                          <dd className="font-medium text-gray-900">{cert.passingScore}</dd>
                        </div>
                      )}
                      {cert.duration && (
                        <div className="flex justify-between gap-3">
                          <dt className="text-gray-500">Time</dt>
                          <dd className="font-medium text-gray-900">{cert.duration}</dd>
                        </div>
                      )}
                      {cert.cost && (
                        <div className="flex justify-between gap-3">
                          <dt className="text-gray-500">Exam fee</dt>
                          <dd className="font-medium text-gray-900">{cert.cost}</dd>
                        </div>
                      )}
                      <div className="flex justify-between gap-3">
                        <dt className="flex-shrink-0 text-gray-500">Prerequisites</dt>
                        <dd className="truncate text-right font-medium text-gray-900" title={cert.prerequisites}>
                          {cert.prerequisites}
                        </dd>
                      </div>
                      {/*
                        Not every certification has published question count,
                        pass mark and duration in our data. Rather than show
                        a card that is mostly blank, or invent the numbers,
                        point at the page that carries what we do have.
                      */}
                      {!cert.questions && (
                        <p className="pt-1 text-xs text-gray-500">Exam format on the certification page</p>
                      )}
                    </dl>

                    <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-gray-100 pt-3">
                      {/*
                        Deep-link to the questions themselves. This used to
                        point at cert.href, the same URL as the card title
                        directly above it, so two links with different labels
                        went to the identical place and "Practice questions"
                        landed the reader at the top of the page instead of
                        the questions. Every cert page carries this anchor.
                      */}
                      <Link
                        href={`${cert.href}#practice-questions`}
                        aria-label={`${cert.name} practice questions and study guide`}
                        className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-salesforce-blue hover:text-salesforce-dark"
                      >
                        {cert.name} practice questions
                        <CardIcon name="arrow-right" />
                      </Link>
                      {cert.studyGuideHref && (
                        <Link
                          href={cert.studyGuideHref}
                          className="inline-flex min-h-11 items-center gap-1 text-sm text-gray-600 hover:text-salesforce-blue"
                        >
                          <CardIcon name="book-open" />
                          {cert.name} study guide
                        </Link>
                      )}
                      {/*
                        Salesforce's own page for the credential, so a reader
                        can verify the figures at source. nofollow because it
                        is a reference on a page that carries 91 of them, not
                        an editorial endorsement of each one.
                      */}
                      {cert.officialUrl && (
                        <a
                          href={cert.officialUrl}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          className="inline-flex min-h-11 items-center gap-1 text-sm text-gray-600 hover:text-salesforce-blue"
                        >
                          <CardIcon name="external-link" />
                          Official page
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <p className="mt-8 text-center text-sm text-gray-600">
          Exam details follow the official guides and can change.{' '}
          <Link href="/salesforce-certifications-list" className="inline-block py-1 font-semibold text-salesforce-blue hover:text-salesforce-dark">
            See the full list by role
          </Link>
        </p>
      </div>
    </section>
  )
}
