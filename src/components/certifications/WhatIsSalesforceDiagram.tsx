/** High-level "What is Salesforce" architecture visual for Platform Foundations (Associate). */
export default function WhatIsSalesforceDiagram() {
  return (
    <figure id="what-is-salesforce-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">What is Salesforce? (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        Salesforce is a cloud CRM platform: your data lives in <strong>Objects</strong> (Accounts, Contacts,
        Opportunities), organized by <strong>Apps</strong>, viewed through <strong>Lightning Experience</strong>,
        and extended by clouds like Sales, Service, and Marketing on the same underlying platform.
      </p>
      <svg role="img" aria-labelledby="wis-title" className="w-full max-w-3xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
        <title id="wis-title">Data lives in Objects, organized into Apps, viewed through Lightning Experience, with Sales, Service, and Marketing Cloud layered on the same platform</title>
        <rect x="150" y="164" width="300" height="40" rx="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
        <text x="300" y="188" textAnchor="middle" fill="#1e293b" fontWeight="700">Objects (Accounts, Contacts, Opportunities)</text>
        <rect x="150" y="112" width="300" height="40" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="1.5" />
        <text x="300" y="136" textAnchor="middle" fill="#0f172a" fontWeight="700">Apps (group related objects/tabs)</text>
        <rect x="150" y="60" width="300" height="40" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5" />
        <text x="300" y="84" textAnchor="middle" fill="#0f172a" fontWeight="700">Lightning Experience (the UI)</text>
        <rect x="150" y="8" width="300" height="40" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
        <text x="300" y="32" textAnchor="middle" fill="#0f172a" fontWeight="700">Sales / Service / Marketing Cloud</text>
      </svg>
    </figure>
  )
}
