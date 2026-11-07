'use client'

import { useState } from 'react'
import Link from '@/components/AppLink'
import { ArrowRight, BookOpen } from 'lucide-react'
import type { GridCategory } from '@/lib/certification-grid-data'

/**
 * The full certification list, grouped by role behind a tab strip.
 *
 * Every card for every tab is rendered into the HTML and the inactive ones
 * are hidden with CSS, rather than mounted when their tab is picked. That
 * costs a larger homepage document, and buys two things worth more: all 90-odd
 * certification links are crawlable from the homepage, and switching tabs is
 * instant with no layout thrash.
 */
export default function CertificationGrid({ categories }: { categories: GridCategory[] }) {
  const [active, setActive] = useState(categories[0]?.slug ?? '')
  const total = categories.reduce((sum, category) => sum + category.certs.length, 0)

  return (
    <section className="py-16 px-4 sm:py-20" aria-labelledby="all-certs-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h2 id="all-certs-heading" className="text-3xl font-bold text-gray-900 md:text-4xl">
            Complete List of Salesforce Certifications
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            All {total} certifications with exam length, pass mark, cost and prerequisites.
            Every one links to free practice questions &mdash; no sign-up.
          </p>
        </div>

        {/* Tab strip */}
        <div className="mb-8 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Certification categories">
          {categories.map((category) => {
            const selected = category.slug === active
            return (
              <button
                key={category.slug}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls={`certs-panel-${category.slug}`}
                id={`certs-tab-${category.slug}`}
                onClick={() => setActive(category.slug)}
                className={`inline-flex min-h-11 items-center gap-2 rounded-lg border px-4 text-sm font-medium transition-colors ${
                  selected
                    ? 'border-salesforce-blue bg-salesforce-blue text-white shadow-sm'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-salesforce-blue/50 hover:text-salesforce-blue'
                }`}
              >
                {category.name}
                <span className={`rounded-full px-1.5 py-0.5 text-xs ${selected ? 'bg-white/20' : 'bg-gray-100 text-gray-600'}`}>
                  {category.certs.length}
                </span>
              </button>
            )
          })}
        </div>

        {categories.map((category) => (
          <div
            key={category.slug}
            id={`certs-panel-${category.slug}`}
            role="tabpanel"
            aria-labelledby={`certs-tab-${category.slug}`}
            hidden={category.slug !== active}
          >
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {category.certs.map((cert) => (
                <li key={cert.slug} className="h-full">
                  <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-lg">
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <h3 className="text-base font-bold leading-snug text-gray-900">
                        <Link href={cert.href} className="hover:text-salesforce-blue">
                          {cert.name}
                        </Link>
                      </h3>
                      {cert.level && (
                        <span className="flex-shrink-0 rounded-full bg-salesforce-blue/10 px-2.5 py-1 text-xs font-semibold text-salesforce-dark">
                          {cert.level}
                        </span>
                      )}
                    </div>

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
                      <Link
                        href={cert.href}
                        className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-salesforce-blue hover:text-salesforce-dark"
                      >
                        Practice questions
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                      {cert.studyGuideHref && (
                        <Link
                          href={cert.studyGuideHref}
                          className="inline-flex min-h-11 items-center gap-1 text-sm text-gray-600 hover:text-salesforce-blue"
                        >
                          <BookOpen className="h-4 w-4" aria-hidden="true" />
                          Study guide
                        </Link>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
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
