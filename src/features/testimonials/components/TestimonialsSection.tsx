import { cn } from '@/lib/utils'
import {
  TESTIMONIALS,
  TESTIMONIALS_DESCRIPTION,
  TESTIMONIALS_HEADING,
} from '../data/testimonials'
import type { TestimonialsSectionProps } from '../types'
import { TestimonialGrid } from './TestimonialGrid'

export function TestimonialsSection({
  className,
}: TestimonialsSectionProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden bg-white',
        'py-16 sm:py-20 lg:py-24',
        className,
      )}
    >
      {/* Soft lime glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-[#d2f801]/25 blur-3xl"
      />

      {/* Soft blue glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#003be2]/10 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="max-w-md text-[34px] font-semibold leading-[1.1] tracking-tight text-gray-950 sm:text-[42px] lg:text-[44px]">
              {TESTIMONIALS_HEADING}
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">
              {TESTIMONIALS_DESCRIPTION}
            </p>
          </div>
        </div>

        <TestimonialGrid
          testimonials={TESTIMONIALS}
          className="mt-12 sm:mt-14 lg:mt-16"
        />
      </div>
    </section>
  )
}
