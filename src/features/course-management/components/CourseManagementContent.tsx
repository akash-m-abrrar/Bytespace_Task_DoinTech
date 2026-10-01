import { cn } from '@/lib/utils'
import type { CourseManagementContentProps } from '../types'
import { CourseManagementFeatures } from './CourseManagementFeatures'

export function CourseManagementContent({
  heading,
  description,
  features,
  className,
}: CourseManagementContentProps) {
  return (
    <div
      className={cn(
        'flex max-w-xl flex-col justify-center lg:max-w-none',
        className,
      )}
    >
      <h2 className="text-[32px] font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-[36px] md:text-[40px] lg:text-[44px]">
        {heading}
      </h2>

      <p className="mt-5 max-w-lg text-[14px] leading-relaxed text-gray-500 sm:mt-6 sm:text-base">
        {description}
      </p>

      <CourseManagementFeatures features={features} />
    </div>
  )
}