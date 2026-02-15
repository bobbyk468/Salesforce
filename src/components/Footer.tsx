import Link from 'next/link'
import { Award, Mail, ExternalLink, MessageCircle } from 'lucide-react'
import { CONTACT_EMAIL, SITE_NAME, WHATSAPP_LINK } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-salesforce-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand + inbound link to home (fixes "Too Few Inbound Internal Links") */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4 group inline-flex">
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
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-salesforce-light">
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MessageCircle className="h-5 w-5 text-[#25D366]" />
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
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
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/certifications/administrator" className="text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  Administrator practice questions
                </Link>
              </li>
              <li>
                <Link href="/certifications/developer-1" className="text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  Developer study guide
                </Link>
              </li>
              <li>
                <Link href="/certifications/application-architect" className="text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  Architect certification
                </Link>
              </li>
              <li>
                <Link href="/certifications/ux-designer" className="text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  Designer certification
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Certifications */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Certifications</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/certifications/administrator" className="text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  Admin (ADM-201) study guide
                </Link>
              </li>
              <li>
                <Link href="/certifications/app-builder" className="text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  App Builder practice questions
                </Link>
              </li>
              <li>
                <Link href="/certifications/sales-cloud" className="text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  Sales Cloud Consultant practice questions
                </Link>
              </li>
              <li>
                <Link href="/certifications/service-cloud" className="text-gray-300 hover:text-salesforce-light transition-colors duration-200">
                  Service Cloud Consultant study guide
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-gray-400 text-sm mb-4">
            <strong className="text-gray-300">Disclaimer:</strong> This site is an independent preparation resource and is not affiliated with, endorsed by, or sponsored by Salesforce, Inc. Salesforce, Trailblazer, Trailhead, and all other Salesforce marks are trademarks of salesforce.com, inc. "Trailblaze Prep" is not affiliated with or endorsed by Salesforce's Trailblazer program. We provide exam-style practice questions and study materials aligned with official exam outlines to help you prepare; we do not offer braindumps or real exam questions.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <Link href="/terms" className="text-gray-400 hover:text-salesforce-light transition-colors">
              Terms of Use
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-salesforce-light transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a
              href="https://trailhead.salesforce.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-salesforce-light flex items-center space-x-1"
            >
              <span>Trailhead</span>
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="https://www.salesforce.com/trailblazer/certification"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-salesforce-light flex items-center space-x-1"
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
