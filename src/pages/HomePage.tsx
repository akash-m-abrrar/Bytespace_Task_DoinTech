import { Navbar } from '@/components/layout/Navbar'
import { CompanyLogoStrip } from '@/components/sections/CompanyLogoStrip'
import { HeroSection } from '@/components/sections/HeroSection'
import { CourseDiscoverySection } from '@/features/course-discovery/components/CourseDiscoverySection'
import { LearningPathsSection } from '@/features/learning-paths/components/LearningPathsSection'
import { ProfessionalGrowthSection } from '@/features/professional-growth/components/ProfessionalGrowthSection'
import { CourseManagementSection } from '@/features/course-management/components/CourseManagementSection'

export function HomePage() {
  return (
    <main>
      <HeroSection navbar={<Navbar />} />
      <CompanyLogoStrip />
      <CourseDiscoverySection />
      <LearningPathsSection />
      <ProfessionalGrowthSection />
      <CourseManagementSection />
    </main>
  )
}
