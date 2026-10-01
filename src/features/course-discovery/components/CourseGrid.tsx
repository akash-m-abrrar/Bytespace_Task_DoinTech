import type { CourseGridProps } from '../types'
import { CourseCard } from './CourseCard'
import { cn } from '@/lib/utils'

export function CourseGrid({ courses, className }: CourseGridProps) {
  if (courses.length === 0) {
    return (
      <div className="w-full text-center py-16 text-gray-500">
        <p className="text-base sm:text-lg font-medium">No courses found in this category.</p>
        <p className="text-sm text-gray-400 mt-1">Please try another category or check back soon.</p>
      </div>
    )
  }

  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 w-full',
        className
      )}
    >
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  )
}
