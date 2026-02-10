import type { Metadata } from 'next'

// Minimal test to verify metadata.description renders correctly
export const metadata: Metadata = {
  title: 'Test Meta Description',
  description: 'This is a test description that should appear in the meta tag.',
}

export default function TestMetaPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Meta Description Test Page</h1>
        <p className="text-gray-600">
          View page source (Ctrl+U / Cmd+U) and search for &quot;name=&quot;description&quot;&quot;
        </p>
        <p className="text-sm text-gray-500 mt-2">
          If you see the meta description tag, the issue is in getCertMetadata helper.
          <br />
          If you don&apos;t see it, the issue is in layout.tsx.
        </p>
      </div>
    </div>
  )
}
