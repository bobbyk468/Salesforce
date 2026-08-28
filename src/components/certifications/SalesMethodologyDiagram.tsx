/** Salesforce product knowledge vs. general sales methodology for Sales Foundations. */
export default function SalesMethodologyDiagram() {
  return (
    <figure id="sales-methodology-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">Product knowledge vs. sales methodology (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        Sales Foundations blends two distinct skill sets: <strong>Salesforce product knowledge</strong> (navigating
        Sales Cloud, logging activities) and <strong>customer-centric selling methodology</strong> (discovery, value
        proposition, team selling) — most exam scenarios test the intersection of both.
      </p>
      <svg role="img" aria-labelledby="sm-diagram-title" className="w-full max-w-3xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
        <title id="sm-diagram-title">Two overlapping circles: Salesforce product knowledge and sales methodology, with the exam testing the overlap of applying methodology within the Salesforce platform</title>
        <circle cx="230" cy="100" r="90" fill="#dbeafe" fillOpacity="0.7" stroke="#0b5cab" strokeWidth="2" />
        <circle cx="370" cy="100" r="90" fill="#ecfdf5" fillOpacity="0.7" stroke="#059669" strokeWidth="2" />
        <text x="170" y="70" textAnchor="middle" fill="#0f172a" fontWeight="700">Salesforce</text>
        <text x="170" y="88" textAnchor="middle" fill="#0f172a" fontWeight="700">Product</text>
        <text x="170" y="106" textAnchor="middle" fill="#334155">Sales Cloud nav,</text>
        <text x="170" y="122" textAnchor="middle" fill="#334155">activities, pipeline</text>
        <text x="430" y="70" textAnchor="middle" fill="#0f172a" fontWeight="700">Sales</text>
        <text x="430" y="88" textAnchor="middle" fill="#0f172a" fontWeight="700">Methodology</text>
        <text x="430" y="106" textAnchor="middle" fill="#334155">Discovery, value prop,</text>
        <text x="430" y="122" textAnchor="middle" fill="#334155">team selling</text>
        <text x="300" y="100" textAnchor="middle" fill="#0f172a" fontWeight="700" fontSize="10">Exam</text>
        <text x="300" y="114" textAnchor="middle" fill="#0f172a" fontWeight="700" fontSize="10">focus</text>
      </svg>
    </figure>
  )
}
