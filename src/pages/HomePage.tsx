import { Navbar } from '@/components/layout/Navbar'
import { HeroSection } from '@/components/sections/HeroSection'

export function HomePage() {
  return (
    <main>
      <HeroSection navbar={<Navbar />} />
    </main>
  )
}
