import TestimonialCard from '@/components/TestimonialCard'
import { getFeaturedTestimonials } from '@/lib/testimonials-data'

interface Props {
  slug: string
}

export default function CertTestimonialsSection({ slug }: Props) {
  const testimonials = getFeaturedTestimonials(slug, 1)
  if (testimonials.length === 0) return null

  return (
    <div id="student-reviews" className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-1">Example Study Journeys</h2>
      <p className="text-sm text-gray-500 mb-4">
        Illustrative examples showing common study strategies, timelines, and outcomes reported by candidates who passed this exam.
      </p>
      <div className="grid gap-4">
        {testimonials.map((t, i) => (
          <TestimonialCard key={t.name} testimonial={t} featured={i === 0} />
        ))}
      </div>
    </div>
  )
}
