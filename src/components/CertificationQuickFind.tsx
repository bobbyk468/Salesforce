'use client'

import { useMemo, useState } from 'react'
import Link from '@/components/AppLink'

export type QuickFindCert = {
  slug: string
  name: string
  href: string
  examCode: string | null
  level: string | null
  roleName: string
}

const MAX_RESULTS = 12

/**
 * Name-and-code lookup for /certifications.
 *
 * That page is a directory of the eleven role hubs, not a list of all 95
 * cards: the cards live on the homepage. So this gives the same instant
 * find-by-code behaviour without publishing a second copy of the catalogue on
 * another indexable URL, which is what rendering the full grid here would do.
 *
 * It renders nothing until the reader types, and the role tiles underneath are
 * the server-rendered path through the same certifications.
 */
export default function CertificationQuickFind({ certs }: { certs: QuickFindCert[] }) {
  const [query, setQuery] = useState('')

  const haystacks = useMemo(
    () =>
      certs.map((cert) => ({
        cert,
        text: [cert.name, cert.examCode ?? '', cert.roleName, cert.level ?? '']
          .join(' ')
          .toLowerCase(),
      })),
    [certs]
  )

  const needle = query.trim().toLowerCase()
  const matches = needle
    ? haystacks.filter((entry) => entry.text.includes(needle)).slice(0, MAX_RESULTS)
    : []
  const totalMatches = needle
    ? haystacks.filter((entry) => entry.text.includes(needle)).length
    : 0

  return (
    <section className="mb-10 rounded-xl border border-gray-200 bg-gray-50/70 p-5 sm:p-6">
      <label htmlFor="cert-quick-find" className="mb-1.5 block text-base font-bold text-gray-900">
        Find a certification by name or exam code
      </label>
      <p className="mb-3 text-sm text-gray-600">
        All {certs.length} credentials, searchable by exam code as well as name: Plat-Admn-201,
        ADM-201, DEV-402, PD1, AI-201, Plat-Arch-201.
      </p>
      <input
        id="cert-quick-find"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        autoComplete="off"
        placeholder="Platform Administrator, ADM-201, architect…"
        className="min-h-11 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-salesforce-blue focus:outline-none focus:ring-2 focus:ring-salesforce-blue/30"
      />

      {needle !== '' && (
        <div className="mt-4" aria-live="polite">
          {matches.length === 0 ? (
            <p className="text-sm text-gray-600">
              No certification matches that name or code. Browse the role tracks below.
            </p>
          ) : (
            <>
              <p className="mb-2 text-sm text-gray-600">
                {totalMatches} match{totalMatches === 1 ? '' : 'es'}
                {totalMatches > matches.length ? `, showing the first ${matches.length}` : ''}.
              </p>
              <ul className="divide-y divide-gray-200 overflow-hidden rounded-lg border border-gray-200 bg-white">
                {matches.map(({ cert }) => (
                  <li key={cert.slug}>
                    <Link
                      href={cert.href}
                      className="flex min-h-11 flex-wrap items-center justify-between gap-x-3 gap-y-1 px-3 py-2.5 text-sm hover:bg-gray-50"
                    >
                      <span className="font-semibold text-gray-900">{cert.name}</span>
                      <span className="flex flex-wrap items-center gap-1.5">
                        {cert.examCode && (
                          <span className="rounded-full bg-salesforce-blue/10 px-2 py-0.5 text-xs font-semibold text-salesforce-dark">
                            {cert.examCode}
                          </span>
                        )}
                        <span className="rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs font-medium text-gray-600">
                          {cert.roleName}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </section>
  )
}
