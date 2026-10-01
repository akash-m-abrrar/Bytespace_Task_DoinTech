import { Navbar } from '@/components/layout/Navbar'
import { HeroSection } from '@/components/sections/HeroSection'
import { CompanyLogoStrip } from '@/components/sections/CompanyLogoStrip'

export function HomePage() {
  return (
    <main>
      <HeroSection navbar={<Navbar />} />
      <CompanyLogoStrip />
    </main>
  )
}
