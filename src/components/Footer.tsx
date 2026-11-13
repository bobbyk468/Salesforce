import Link from '@/components/AppLink'
import { Award, Mail, ExternalLink, MessageCircle } from 'lucide-react'
import { ACTIVE_SOCIAL_PROFILES, AUTHOR_NAME, SITE_NAME, WHATSAPP_LINK } from '@/lib/constants'
import TopCertifications from '@/components/TopCertifications'
import type { SocialProfile } from '@/lib/constants'

/** Brand glyphs, keyed to match SOCIAL_PROFILES. */
const SOCIAL_ICON_PATHS: Record<SocialProfile['key'], string> = {
  x: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.835L1.254 2.25H8.08l4.259 5.631L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z',
  linkedin: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z',
  youtube: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z',
  instagram: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z',
  facebook: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z',
}

export default function Footer() {
  return (
    <footer data-nosnippet className="no-print bg-salesforce-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Brand + inbound link to home (fixes "Too Few Inbound Internal Links") */}
          <div className="col-span-1 md:col-span-2">
            <Link prefetch={false} href="/" className="flex items-center space-x-2 mb-4 group inline-flex">
              <Award className="h-8 w-8 text-salesforce-light group-hover:text-white transition-colors" />
              <span className="text-xl font-bold">
                Trailblaze<span className="text-salesforce-light"> Prep</span>
              </span>
            </Link>
            <p className="text-gray-300 mb-4">
              Your comprehensive resource for Salesforce certification preparation.
              Practice questions, study guides, and exam-style practice tests for all Salesforce certifications.
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-5 w-5" />
                <Link href="/contact#contact-form" className="hover:text-salesforce-light">
                  Contact form
                </Link>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MessageCircle className="h-5 w-5 text-[#25D366]" />
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="hover:text-salesforce-light flex items-center gap-1"
                >
                  <span>Chat on WhatsApp</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-lg font-semibold mb-4">Quick Links</p>
            <ul className="space-y-2">
              <li>
                <Link prefetch={false} href="/" className="inline-block py-1 text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/about" className="inline-block py-1 text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/team" className="inline-block py-1 text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  Editorial Team
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/editorial-policy" className="inline-block py-1 text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  Editorial Policy
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/certifications/administrator#practice-questions" className="inline-block py-1 text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  Platform Administrator (ADM-201) practice questions
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/certifications/developer-1" className="inline-block py-1 text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  Developer study guide
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/certifications/application-architect" className="inline-block py-1 text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  Architect certification
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/certifications/ux-designer" className="inline-block py-1 text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  Designer certification
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/contact" className="inline-block py-1 text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/html-sitemap" className="inline-block py-1 text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  HTML Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Certifications */}
          <div>
            <p className="text-lg font-semibold mb-4">Popular Certifications</p>
            <ul className="space-y-2">
              <li>
                <Link prefetch={false} href="/certifications/administrator" className="inline-block py-1 text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  Platform Administrator (Plat-Admn-201) study guide
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/certifications/developer-1" className="inline-block py-1 text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  PD1 study guide
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/certifications/app-builder" className="inline-block py-1 text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  App Builder study guide
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/certifications/service-cloud" className="inline-block py-1 text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  Service Cloud study guide
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/certifications/agentforce-specialist#practice-questions" className="inline-block py-1 text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  Agentforce Specialist practice questions
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/certifications/ai-associate#practice-questions" className="inline-block py-1 text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  AI Associate practice questions
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/certifications/sales-cloud#practice-questions" className="inline-block py-1 text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  Sales Cloud Consultant practice questions
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/certifications/data-360-consultant#practice-questions" className="inline-block py-1 text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  Data Cloud Consultant practice questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Certification Paths */}
          <div className="md:col-start-3">
            <p className="text-lg font-semibold mb-4">Cert Paths &amp; Resources</p>
            <ul className="space-y-2">
              <li>
                <Link prefetch={false} href="/how-to-become-salesforce-administrator" className="inline-block py-1 text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  How to become a Salesforce Admin
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/admin-certification-path" className="inline-block py-1 text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  Admin certification path
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/developer-certification-path" className="inline-block py-1 text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  Developer certification path
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/architect-certification-path" className="inline-block py-1 text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  Architect certification path
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/salesforce-certification-cost" className="inline-block py-1 text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  Exam fees &amp; costs
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/salesforce-certification-report-2026" className="inline-block py-1 text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  2026 Certification Benchmark Report
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/salesforce-certification-salary" className="inline-block py-1 text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  Certification salary guide
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/salesforce-certification-roi-calculator" className="inline-block py-1 text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  Certification ROI calculator
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/become-cta" className="inline-block py-1 text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  How to become a CTA
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/certifications/administrator#adm201-traps" className="inline-block py-1 text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  ADM-201 exam tips &amp; cheat sheet
                </Link>
              </li>
            </ul>
          </div>

          {/*
            The twelve certifications we most want ranking, linked from the
            footer of every page so internal link equity flows into them from
            the whole site. Shared with the homepage block via
            TOP_CERTIFICATIONS so the two cannot drift.
          */}
          <TopCertifications variant="footer" />
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-gray-300 text-sm mb-4">
            <strong className="text-gray-300">Disclaimer:</strong> This site is an independent preparation resource and is not affiliated with, endorsed by, or sponsored by Salesforce, Inc. Salesforce, Trailblazer, Trailhead, and all other Salesforce marks are trademarks of salesforce.com, inc. "Trailblaze Prep" is not affiliated with or endorsed by Salesforce's Trailblazer program. We provide exam-style practice questions and study materials aligned with official exam outlines to help you prepare; we do not offer braindumps or real exam questions.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <Link prefetch={false} href="/terms" className="inline-block py-1 text-gray-300 hover:text-salesforce-light transition-colors">
              Terms of Use
            </Link>
            <Link prefetch={false} href="/privacy" className="inline-block py-1 text-gray-300 hover:text-salesforce-light transition-colors">
              Privacy Policy
            </Link>
            <Link prefetch={false} href="/editorial-policy" className="inline-block py-1 text-gray-300 hover:text-salesforce-light transition-colors">
              Editorial Policy
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-4 md:mt-0">
            {ACTIVE_SOCIAL_PROFILES.map((profile) => (
              <a
                key={profile.key}
                href={profile.url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center space-x-1 py-1 text-gray-300 hover:text-salesforce-light"
                aria-label={`${profile.scope === 'person' ? AUTHOR_NAME : SITE_NAME} on ${
                  profile.key === 'x' ? 'X (Twitter)' : profile.label
                }`}
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={SOCIAL_ICON_PATHS[profile.key]} />
                </svg>
                <span>{profile.label}</span>
              </a>
            ))}
            <a
              href="https://trailhead.salesforce.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center space-x-1 py-1 text-gray-300 hover:text-salesforce-light"
            >
              <span>Trailhead</span>
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="https://www.salesforce.com/trailblazer/certification"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center space-x-1 py-1 text-gray-300 hover:text-salesforce-light"
            >
              <span>Official Certs</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
