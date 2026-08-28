/** Education Cloud unified data model for the Education Cloud Consultant exam. */
export default function EducationDataModelDiagram() {
  return (
    <figure id="education-data-model-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">Education Cloud unified data model (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        A <strong>Contact</strong> tracks a person across their entire lifecycle — prospect, applicant, student,
        alumnus. <strong>Program Enrollment</strong> links them to a <strong>Program</strong> and its{' '}
        <strong>Terms/Courses</strong>, replacing the separate legacy EDA/Hierarchy objects with one connected model.
      </p>
      <svg role="img" aria-labelledby="edm-title" className="w-full max-w-4xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg">
        <title id="edm-title">Contact links via Program Enrollment to a Program, which has Terms and Courses; the same Contact record persists across the prospect-to-alumni lifecycle</title>
        <defs><marker id="edmArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        <rect x="16" y="68" width="140" height="64" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="86" y="92" textAnchor="middle" fill="#0f172a" fontWeight="700">Contact</text>
        <text x="86" y="110" textAnchor="middle" fill="#334155">Prospect → Alumnus</text>
        <path d="M 156 100 L 188 100" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#edmArrow)" />
        <rect x="196" y="68" width="180" height="64" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5" />
        <text x="286" y="92" textAnchor="middle" fill="#0f172a" fontWeight="600">Program Enrollment</text>
        <text x="286" y="110" textAnchor="middle" fill="#334155">Links person to program</text>
        <path d="M 376 100 L 408 100" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#edmArrow)" />
        <rect x="416" y="68" width="130" height="64" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
        <text x="481" y="92" textAnchor="middle" fill="#0f172a" fontWeight="600">Program</text>
        <text x="481" y="110" textAnchor="middle" fill="#334155">Degree/course of study</text>
        <path d="M 546 100 L 578 100" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#edmArrow)" />
        <rect x="586" y="68" width="98" height="64" rx="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
        <text x="635" y="92" textAnchor="middle" fill="#1e293b" fontWeight="600">Term &amp;</text>
        <text x="635" y="110" textAnchor="middle" fill="#1e293b" fontWeight="600">Course</text>
      </svg>
    </figure>
  )
}
