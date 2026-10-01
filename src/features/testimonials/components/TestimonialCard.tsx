import { cn } from '@/lib/utils'
import type { TestimonialCardProps } from '../types'

export function TestimonialCard({
  testimonial,
  className,
}: TestimonialCardProps) {
  return (
    <article
      className={cn(
        'rounded-[20px] border border-gray-100 bg-white p-5',
        'shadow-[0_8px_30px_rgba(15,23,42,0.04)]',
        'sm:p-6',
        className,
      )}
    >
      <div className="flex items-center">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="h-16 w-16 rounded-full object-cover"
        />
      </div>

      <div className="mt-5">
        <h3 className="text-base font-semibold text-gray-900 sm:text-lg">
          {testimonial.name}
        </h3>

        <p className="mt-1 text-sm font-medium text-[#003be2]">
          {testimonial.role}
        </p>
      </div>

      <p className="mt-7 text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">
        {testimonial.quote}
      </p>
    </article>
  )
}
