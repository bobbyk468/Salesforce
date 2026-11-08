import Link from '@/components/AppLink'
import { TOP_CERTIFICATIONS } from '@/lib/top-certifications'

/**
 * The twelve highest-demand certifications, linked with descriptive anchor
 * text. Rendered high on the homepage and again in the global footer.
 *
 * `variant` only changes the styling: "page" for the light homepage block,
 * "footer" for the dark footer column.
 */
export default function TopCertifications({
  variant = 'page',
}: {
  variant?: 'page' | 'footer'
}) {
  if (variant === 'footer') {
    return (
      <nav aria-labelledby="footer-top-certs" className="min-w-0">
        <h3 id="footer-top-certs" className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
          Top Salesforce certifications
        </h3>
        <ul className="space-y-1.5">
          {TOP_CERTIFICATIONS.map((cert) => (
            <li key={cert.href}>
              <Link
                href={cert.href}
                className="inline-block py-1 text-sm text-gray-300 hover:text-salesforce-light"
              >
                {cert.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  }

  return (
    <section className="bg-gray-50 px-4 py-12" aria-labelledby="top-certifications-heading">
      <div className="mx-auto max-w-5xl">
        <h2 id="top-certifications-heading" className="text-center text-2xl font-bold text-gray-900 md:text-3xl">
          Top 12 High-Demand Salesforce Certifications (2026)
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">
          The certifications candidates ask about most, each with free practice
          questions and a study guide.
        </p>
        <ul className="mt-7 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {TOP_CERTIFICATIONS.map((cert) => (
            <li key={cert.href}>
              <Link
                href={cert.href}
                className="flex min-h-11 items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 transition-colors hover:border-salesforce-blue hover:text-salesforce-blue"
              >
                {cert.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
