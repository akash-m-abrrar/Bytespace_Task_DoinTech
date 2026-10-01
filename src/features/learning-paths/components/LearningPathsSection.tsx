import { SectionHeader } from '@/components/common/SectionHeader'
import { LearningPathGrid } from './LearningPathGrid'
import { LEARNING_PATHS } from '../data/learningPaths'
import type { LearningPathsSectionProps } from '../types'
import { cn } from '@/lib/utils'

export function LearningPathsSection({ className }: LearningPathsSectionProps) {
  return (
    <section
      id="learning-paths"
      aria-label="Explore Diverse Learning Paths at Bytespace"
      className={cn('w-full bg-white py-14 sm:py-16 md:py-20 lg:py-24', className)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section Header */}
        <SectionHeader
          as="h2"
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
          titleClassName="text-gray-900 text-[28px] sm:text-[36px] md:text-[44px] lg:text-[44px] font-semibold tracking-tight"
          descriptionClassName="text-gray-500 font-normal mt-3 sm:mt-4 max-w-2xl text-center leading-relaxed"
          className="mb-10 sm:mb-12 lg:mb-14"
        />

        {/* Learning Paths Grid */}
        <LearningPathGrid paths={LEARNING_PATHS} />
      </div>
    </section>
  )
}
