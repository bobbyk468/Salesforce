/** NPSP vs. Nonprofit Cloud migration architecture for the NPSP Consultant exam. */
export default function NPSPMigrationDiagram() {
  return (
    <figure id="npsp-migration-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">NPSP vs. Nonprofit Cloud architecture (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        <strong>NPSP</strong> is a managed package layered on standard Salesforce objects (Household Account,
        Opportunity-as-donation). <strong>Nonprofit Cloud</strong> is the newer, natively-built industry solution on
        Data Cloud/Flow. Existing NPSP orgs remain fully supported — this isn't a forced migration.
      </p>
      <svg role="img" aria-labelledby="npsp-title" className="w-full max-w-3xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
        <title id="npsp-title">NPSP is a managed package on standard objects; Nonprofit Cloud is a newer native industry solution on Data Cloud and Flow; both remain supported, existing NPSP orgs are not forced to migrate</title>
        <rect x="16" y="16" width="260" height="96" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="146" y="40" textAnchor="middle" fill="#0f172a" fontWeight="700">NPSP (legacy, widely deployed)</text>
        <text x="146" y="60" textAnchor="middle" fill="#334155">Managed package on standard</text>
        <text x="146" y="76" textAnchor="middle" fill="#334155">objects (Household Account,</text>
        <text x="146" y="92" textAnchor="middle" fill="#334155">Opportunity = donation)</text>
        <rect x="324" y="16" width="260" height="96" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
        <text x="454" y="40" textAnchor="middle" fill="#0f172a" fontWeight="700">Nonprofit Cloud (newer)</text>
        <text x="454" y="60" textAnchor="middle" fill="#334155">Native industry solution built</text>
        <text x="454" y="76" textAnchor="middle" fill="#334155">on Data Cloud + Flow, own</text>
        <text x="454" y="92" textAnchor="middle" fill="#334155">data model</text>
        <rect x="90" y="132" width="420" height="48" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
        <text x="300" y="152" textAnchor="middle" fill="#0f172a" fontWeight="600">Both are actively supported —</text>
        <text x="300" y="168" textAnchor="middle" fill="#0f172a" fontWeight="600">choose based on project timeline and existing investment</text>
      </svg>
    </figure>
  )
}
