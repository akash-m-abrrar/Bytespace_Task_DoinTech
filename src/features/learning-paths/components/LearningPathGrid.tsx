import { cn } from '@/lib/utils'
import { LearningPathCard } from './LearningPathCard'
import type { LearningPathGridProps } from '../types'

export function LearningPathGrid({ paths, className }: LearningPathGridProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 lg:gap-5 justify-items-center w-full max-w-xs sm:max-w-md lg:max-w-4xl mx-auto',
        className
      )}
    >
      {paths.map((path) => (
        <LearningPathCard key={path.id} path={path} />
      ))}
    </div>
  )
}
