import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { CourseManagementFeaturesProps } from '../types'

export function CourseManagementFeatures({
  features,
  className,
}: CourseManagementFeaturesProps) {
  return (
    <ul className={cn('mt-7 flex flex-col gap-3.5', className)}>
      {features.map((feature) => (
        <li
          key={feature.id}
          className="flex items-center gap-3 text-sm text-gray-700 sm:text-base"
        >
          <span
            aria-hidden="true"
            className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#003be2]"
          >
            <Check
              className="h-2.5 w-2.5 text-white"
              strokeWidth={3}
            />
          </span>

          <span>{feature.label}</span>
        </li>
      ))}
    </ul>
  )
}