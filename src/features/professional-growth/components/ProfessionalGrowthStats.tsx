import type { ProfessionalGrowthStatsProps } from '../types'
import { cn } from '@/lib/utils'

export function ProfessionalGrowthStats({ stats, className }: ProfessionalGrowthStatsProps) {
  return (
    <div
      role="list"
      aria-label="ByteSpace statistics"
      className={cn('flex items-center gap-8 sm:gap-12 md:gap-14 lg:gap-16', className)}
    >
      {stats.map((stat) => (
        <div key={stat.id} role="listitem" className="flex flex-col">
          <span className="text-[32px] sm:text-[38px] md:text-[44px] font-bold text-[#003be2] tracking-tight leading-none">
            {stat.value}
          </span>
          <span className="text-gray-500 font-medium text-sm sm:text-base mt-2">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  )
}
