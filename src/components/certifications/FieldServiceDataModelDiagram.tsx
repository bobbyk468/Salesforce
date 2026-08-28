/** Field Service core data model for the Field Service exam: Work Order -> Service
 * Appointment -> Service Resource, connected to Territory and Work Type. */
export default function FieldServiceDataModelDiagram() {
  return (
    <figure id="fsl-data-model-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">Field Service core data model (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        A <strong>Work Order</strong> (built from a Work Type template) has one or more child{' '}
        <strong>Service Appointments</strong>. Each appointment is scheduled to a <strong>Service Resource</strong>{' '}
        whose <strong>Skills</strong> and <strong>Territory Membership</strong> the optimizer checks before assignment.
      </p>
      <svg role="img" aria-labelledby="fsl-title" className="w-full max-w-4xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
        <title id="fsl-title">Work Type templates a Work Order, which has child Service Appointments scheduled to a Service Resource matched by skill and territory</title>
        <defs><marker id="fslArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        <rect x="16" y="16" width="140" height="56" rx="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
        <text x="86" y="38" textAnchor="middle" fill="#1e293b" fontWeight="600">Work Type</text>
        <text x="86" y="56" textAnchor="middle" fill="#475569">Duration, skills, parts</text>
        <path d="M 86 72 L 86 100" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#fslArrow)" />
        <rect x="16" y="108" width="140" height="56" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="86" y="130" textAnchor="middle" fill="#0f172a" fontWeight="700">Work Order</text>
        <text x="86" y="148" textAnchor="middle" fill="#334155">The job to be done</text>
        <path d="M 156 136 L 188 136" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#fslArrow)" />
        <rect x="196" y="108" width="170" height="56" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5" />
        <text x="281" y="130" textAnchor="middle" fill="#0f172a" fontWeight="600">Service Appointment</text>
        <text x="281" y="148" textAnchor="middle" fill="#334155">Child record, one visit</text>
        <path d="M 366 136 L 398 136" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#fslArrow)" />
        <rect x="406" y="108" width="150" height="56" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
        <text x="481" y="130" textAnchor="middle" fill="#0f172a" fontWeight="600">Service Resource</text>
        <text x="481" y="148" textAnchor="middle" fill="#334155">The technician</text>
        <path d="M 481 108 L 481 72" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#fslArrow)" />
        <rect x="406" y="16" width="150" height="56" rx="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
        <text x="481" y="38" textAnchor="middle" fill="#1e293b" fontWeight="600">Skills &amp; Territory</text>
        <text x="481" y="56" textAnchor="middle" fill="#475569">Checked by optimizer</text>
        <path d="M 566 136 L 598 136" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#fslArrow)" />
        <rect x="606" y="108" width="90" height="56" rx="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
        <text x="651" y="130" textAnchor="middle" fill="#1e293b" fontWeight="600">Product</text>
        <text x="651" y="148" textAnchor="middle" fill="#475569">Required</text>
        <text x="350" y="200" textAnchor="middle" fill="#475569">Optimization service assigns based on Scheduling Policy weightings</text>
      </svg>
    </figure>
  )
}
