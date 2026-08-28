/** Top chart types quick-reference for Tableau Desktop Foundations. */
export default function ChartTypesReferenceDiagram() {
  const charts = [
    { t: 'Bar Chart', s: 'Compare categories' },
    { t: 'Line Chart', s: 'Trends over time' },
    { t: 'Pie/Treemap', s: 'Part-to-whole' },
    { t: 'Scatter Plot', s: 'Correlation' },
    { t: 'Map', s: 'Geographic data' },
    { t: 'Histogram', s: 'Distribution' },
  ]
  return (
    <figure id="chart-types-reference-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">Chart type quick reference (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        Foundations exam questions frequently ask which chart best fits a scenario — matching data shape to chart
        type is the core skill tested.
      </p>
      <svg role="img" aria-labelledby="ctr-title" className="w-full max-w-3xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 620 160" xmlns="http://www.w3.org/2000/svg">
        <title id="ctr-title">Six chart types and their best use: bar for category comparison, line for trends, pie/treemap for part-to-whole, scatter for correlation, map for geography, histogram for distribution</title>
        {charts.map((c, i) => (
          <g key={c.t}>
            <rect x={16 + (i % 3) * 200} y={16 + Math.floor(i / 3) * 72} width="184" height="60" rx="8" fill={i % 2 === 0 ? '#dbeafe' : '#ecfdf5'} stroke={i % 2 === 0 ? '#0b5cab' : '#059669'} strokeWidth="1.5" />
            <text x={108 + (i % 3) * 200} y={16 + Math.floor(i / 3) * 72 + 26} textAnchor="middle" fill="#0f172a" fontWeight="700">{c.t}</text>
            <text x={108 + (i % 3) * 200} y={16 + Math.floor(i / 3) * 72 + 44} textAnchor="middle" fill="#334155">{c.s}</text>
          </g>
        ))}
      </svg>
    </figure>
  )
}
