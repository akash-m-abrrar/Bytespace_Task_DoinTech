import { ProfessionalGrowthStats } from './ProfessionalGrowthStats'
import type { ProfessionalGrowthContentProps } from '../types'
import { cn } from '@/lib/utils'

export function ProfessionalGrowthContent({
  heading,
  description,
  stats,
  className,
}: ProfessionalGrowthContentProps) {
  return (
    <div className={cn('flex flex-col justify-center max-w-xl lg:max-w-none', className)}>
      <h2 className="text-gray-900 text-[32px] sm:text-[38px] md:text-[42px] lg:text-[44px] font-bold tracking-tight leading-[1.15]">
        {heading.includes('Professional Growth') ? (
          <>
            Your Path to Professional
            <br className="hidden sm:inline" /> Growth Starts Here!
          </>
        ) : (
          heading
        )}
      </h2>

      <p className="text-gray-500 text-base sm:text-lg leading-relaxed mt-5 sm:mt-6 max-w-lg">
        {description}
      </p>

      <div className="mt-8 sm:mt-10 lg:mt-12">
        <ProfessionalGrowthStats stats={stats} />
      </div>
    </div>
  )
}
