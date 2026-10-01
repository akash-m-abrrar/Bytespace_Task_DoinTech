import { useState, useMemo } from 'react'
import { SectionHeader } from '@/components/common/SectionHeader'
import { CategoryTabs } from './CategoryTabs'
import { CourseGrid } from './CourseGrid'
import { CATEGORIES, COURSES } from '../data/courses'
import type { CourseDiscoverySectionProps } from '../types'
import { cn } from '@/lib/utils'

export function CourseDiscoverySection({ className }: CourseDiscoverySectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('Featured')

  const filteredCourses = useMemo(() => {
    if (activeCategory === 'Featured') {
      return COURSES.filter((course) => course.isFeatured)
    }
    return COURSES.filter(
      (course) => course.category.toLowerCase() === activeCategory.toLowerCase()
    )
  }, [activeCategory])

  return (
    <section
      id="courses"
      aria-label="Course Discovery"
      className={cn('w-full bg-white py-14 sm:py-16 md:py-20 lg:py-24', className)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section Header */}
        <SectionHeader
          as="h2"
          title={
            <>
              Discover Your Passion, <br className="hidden sm:inline" />
              Build Your Skills
            </>
          }
          description="Unlock your creative potential and elevate your career with hands-on, expert-led courses designed for every skill level."
          titleClassName="text-gray-900 text-[28px] sm:text-[36px] md:text-[44px] lg:text-[44px] font-semibold tracking-tight"
          descriptionClassName="text-gray-500 font-normal mt-3 sm:mt-4 max-w-xl"
          className="mb-8 sm:mb-10 lg:mb-12"
        />

        {/* Category Tabs */}
        <CategoryTabs
          categories={CATEGORIES}
          value={activeCategory}
          onValueChange={setActiveCategory}
          className="mb-10 sm:mb-12 lg:mb-14"
        />

        {/* Courses Responsive Grid */}
        <CourseGrid courses={filteredCourses} />
      </div>
    </section>
  )
}
