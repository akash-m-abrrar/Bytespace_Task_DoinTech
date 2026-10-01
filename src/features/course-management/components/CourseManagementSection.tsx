import { cn } from '@/lib/utils'
import {
  COURSE_MANAGEMENT_DESCRIPTION,
  COURSE_MANAGEMENT_FEATURES,
  COURSE_MANAGEMENT_HEADING,
} from '../data/courseManagement'
import type { CourseManagementSectionProps } from '../types'
import { CourseManagementContent } from './CourseManagementContent'
import { CourseManagementVisual } from './CourseManagementVisual'

export function CourseManagementSection({
  className,
}: CourseManagementSectionProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden bg-white',
        'py-14 sm:py-16 lg:py-20',
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#003be2]/10 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-8 px-6 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:px-10">
        <CourseManagementVisual />

        <CourseManagementContent
          heading={COURSE_MANAGEMENT_HEADING}
          description={COURSE_MANAGEMENT_DESCRIPTION}
          features={COURSE_MANAGEMENT_FEATURES}
        />
      </div>
    </section>
  )
}