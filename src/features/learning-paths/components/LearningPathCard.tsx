import { cn } from '@/lib/utils'
import type { LearningPathCardProps } from '../types'

export function LearningPathCard({ path, className }: LearningPathCardProps) {
  const Icon = path.icon

  return (
    <div
      className={cn(
        'w-[110px] h-[110px] sm:w-[118px] sm:h-[118px]',
        'bg-white border border-gray-200 rounded-xl sm:rounded-2xl',
        'flex flex-col items-center justify-center p-2 text-center',
        'transition-all duration-200 hover:border-gray-300 hover:shadow-xs',
        className
      )}
    >
      <div
        className="w-10 h-10 rounded-full bg-[#d2f801] flex items-center justify-center shrink-0 mb-2.5"
        aria-hidden="true"
      >
        <Icon className="w-5 h-5 text-gray-900" strokeWidth={2} />
      </div>
      <span className="text-[13px] sm:text-[14px] font-semibold text-gray-900 tracking-tight leading-tight line-clamp-1">
        {path.title}
      </span>
    </div>
  )
}
