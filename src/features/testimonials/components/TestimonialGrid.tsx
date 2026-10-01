import { cn } from '@/lib/utils'
import type { TestimonialGridProps } from '../types'
import { TestimonialCard } from './TestimonialCard'

export function TestimonialGrid({
  testimonials,
  className,
}: TestimonialGridProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3',
        className,
      )}
    >
      {testimonials.map((testimonial) => (
        <TestimonialCard
          key={testimonial.id}
          testimonial={testimonial}
        />
      ))}
    </div>
  )
}
