import { Navbar } from '@/components/layout/Navbar'
import { HeroSection } from '@/components/sections/HeroSection'
import { CompanyLogoStrip } from '@/components/sections/CompanyLogoStrip'
import { CourseDiscoverySection } from '@/features/course-discovery/components/CourseDiscoverySection'
import { LearningPathsSection } from '@/features/learning-paths/components/LearningPathsSection'

export function HomePage() {
  return (
    <main>
      <HeroSection navbar={<Navbar />} />
      <CompanyLogoStrip />
      <CourseDiscoverySection />
      <LearningPathsSection />
    </main>
  )
}
