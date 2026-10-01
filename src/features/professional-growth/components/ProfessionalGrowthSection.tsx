import { cn } from '@/lib/utils'
import {
  GROWTH_STATS,
  PROFESSIONAL_GROWTH_DESCRIPTION,
  PROFESSIONAL_GROWTH_HEADING,
} from '../data/professionalGrowth'
import type { ProfessionalGrowthSectionProps } from '../types'
import { ProfessionalGrowthContent } from './ProfessionalGrowthContent'
import { ProfessionalGrowthVisual } from './ProfessionalGrowthVisual'

export function ProfessionalGrowthSection({
  className,
}: ProfessionalGrowthSectionProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden bg-white',
        'py-16 sm:py-20 lg:py-24',
        className,
      )}
    >
      {/* Soft ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-24 h-80 w-80 rounded-full bg-[#d2f801]/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#003be2]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-40 h-96 w-96 rounded-full bg-[#003be2]/10 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:px-12 xl:px-16">
        <ProfessionalGrowthContent
          heading={PROFESSIONAL_GROWTH_HEADING}
          description={PROFESSIONAL_GROWTH_DESCRIPTION}
          stats={GROWTH_STATS}
        />

        <ProfessionalGrowthVisual />
      </div>
    </section>
  )
}
