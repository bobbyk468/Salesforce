import Link from '@/components/AppLink'
import { BadgeCheck, ShieldCheck } from 'lucide-react'
import {
  EDITORIAL_CREDENTIALS,
  REVIEWER,
  getCredentialJsonLd,
} from '@/lib/editorial-credentials'

/**
 * Visible, crawlable statement of who reviews this content and what they
 * hold. The SEO audit's GEO check flagged that the site carried editorial
 * policy links and disclaimers but "no visible awards or credentials" — the
 * credentials existed only inside /team's JSON-LD, where a reader never sees
 * them.
 *
 * Every claim here comes from `editorial-credentials.ts`, the same data
 * /team renders, so the two cannot drift. It deliberately says one reviewer
 * and names the fourteen certifications actually held, rather than a rounder
 * but unverifiable "team of N professionals with N years".
 */
export default function EditorialCredentials() {
  return (
    <section
      className="bg-white px-4 py-12"
      aria-labelledby="editorial-credentials-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: REVIEWER.name,
            jobTitle: REVIEWER.jobTitle,
            url: 'https://www.trailblazeprep.com/team',
            sameAs: [REVIEWER.profileUrl, REVIEWER.linkedInUrl],
            hasCredential: getCredentialJsonLd(),
          }),
        }}
      />
      <div className="mx-auto max-w-3xl rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6 sm:p-8">
        <h3
          id="editorial-credentials-heading"
          className="flex items-center gap-2 text-xl font-bold text-gray-900"
        >
          <ShieldCheck className="h-5 w-5 flex-shrink-0 text-salesforce-blue" aria-hidden="true" />
          Verified by a Certified Salesforce Practitioner
        </h3>

        <div className="mt-5">
          <p className="text-sm font-semibold text-gray-900">Author and reviewer credentials</p>
          <p className="mt-1 text-sm text-gray-700">
            Written and technically reviewed by{' '}
            <Link href="/team" className="font-medium text-salesforce-blue hover:underline">
              {REVIEWER.name}
            </Link>
            , {REVIEWER.jobTitle}, who holds the {EDITORIAL_CREDENTIALS.length} Salesforce
            certifications below. They are listed on a public{' '}
            <a
              href={REVIEWER.profileUrl}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="font-medium text-salesforce-blue hover:underline"
            >
              Trailblazer profile
            </a>{' '}
            so you can check them yourself.
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {EDITORIAL_CREDENTIALS.map((credential) => (
              <li
                key={credential.label}
                title={credential.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700"
              >
                <BadgeCheck className="h-3.5 w-3.5 flex-shrink-0 text-salesforce-blue" aria-hidden="true" />
                {credential.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 border-t border-salesforce-blue/15 pt-5">
          <p className="text-sm font-semibold text-gray-900">Quality assurance</p>
          <p className="mt-1 text-sm text-gray-700">
            Question counts, pass marks, exam fees and retake fees are cross-checked
            against each credential&apos;s official Salesforce page, and every card links
            to that page so you can verify it at source. Exam objectives and fees change
            between release cycles; where Salesforce no longer publishes a figure, we say
            so rather than carry it forward. See our{' '}
            <Link href="/editorial-policy" className="font-medium text-salesforce-blue hover:underline">
              editorial policy
            </Link>{' '}
            for how corrections are handled.
          </p>
        </div>
      </div>
    </section>
  )
}
