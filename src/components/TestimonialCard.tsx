import { Star, CheckCircle } from 'lucide-react'
import type { StudentTestimonial } from '@/lib/testimonials-data'

interface TestimonialCardProps {
  testimonial: StudentTestimonial
  featured?: boolean
}

export default function TestimonialCard({
  testimonial,
  featured = false,
}: TestimonialCardProps) {
  const renderStars = (rating?: number) => {
    if (!rating) return null
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating
                ? 'fill-amber-400 text-amber-400'
                : 'text-gray-300'
            }`}
            aria-label={`${rating} stars out of 5`}
          />
        ))}
      </div>
    )
  }

  return (
    <div
      className={`relative rounded-lg border transition-all duration-200 ${
        featured
          ? 'bg-gradient-to-br from-blue-50 via-white to-blue-50/30 border-blue-200/60 shadow-md hover:shadow-lg'
          : 'bg-white border-gray-200/60 shadow-sm hover:shadow-md'
      } p-5 md:p-6`}
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-200">
            <CheckCircle className="h-3 w-3" aria-hidden="true" />
            Featured
          </span>
        </div>
      )}

      {/* Rating */}
      {testimonial.rating && (
        <div className="mb-3">{renderStars(testimonial.rating)}</div>
      )}

      {/* Story quote */}
      <blockquote className="text-gray-700 text-sm md:text-base leading-relaxed italic mb-4 relative pl-4">
        <span className="absolute left-0 text-gray-300 text-lg font-bold">"</span>
        {testimonial.story}
        <span className="ml-1 text-gray-300 text-lg font-bold">"</span>
      </blockquote>

      {/* Result highlight */}
      <div className="bg-emerald-50/50 border border-emerald-200/50 rounded-lg p-3 mb-4">
        <p className="text-xs md:text-sm text-emerald-900 font-medium">
          <span className="font-bold text-emerald-700">{testimonial.result}</span>
          {' • '}
          <span className="text-emerald-700">Studied {testimonial.timeToPass}</span>
        </p>
      </div>

      {/* Author info */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
          <p className="text-xs text-gray-600">
            {testimonial.role}
            {testimonial.company && ` • ${testimonial.company}`}
          </p>
        </div>
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-salesforce-blue to-salesforce-light flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {testimonial.name.charAt(0)}
        </div>
      </div>
    </div>
  )
}
