import type { ReactNode } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { GridBackground } from '@/components/common/GridBackground'
import { SectionHeader } from '@/components/common/SectionHeader'
import { SearchBar } from '@/components/sections/SearchBar'
import { HeroVisual } from '@/components/sections/HeroVisual'
import { cn } from '@/lib/utils'

export interface HeroSectionProps {
  navbar?: ReactNode
  className?: string
}

export function HeroSection({ navbar, className }: HeroSectionProps) {
  return (
    <section
      className={cn(
        'relative h-screen min-h-[640px] bg-[#003be2] overflow-hidden flex flex-col',
        className
      )}
    >
      {/* Grid background */}
      <GridBackground />

      {/* Decorative 3D elements */}
      <img
        src="/Doin_Assets_png/green_spring-1.png"
        alt=""
        aria-hidden="true"
        className="
          absolute z-2 pointer-events-none select-none
          -left-10 top-[28%]
          sm:-left-4  sm:top-[30%]
          md:-left-2  md:top-[30%]
          lg:left-0   lg:top-[28%]
          w-[110px] sm:w-38.75 md:w-[195px] lg:w-[235px]
          drop-shadow-2xl
        "
      />

      <img
        src="/Doin_Assets_png/white-spring-2.png"
        alt=""
        aria-hidden="true"
        className="
          absolute z-[2] pointer-events-none select-none
          left-[3%] top-[60%]
          sm:left-[3%] sm:top-[60%]
          md:left-[3%] md:top-[58%]
          lg:left-[2%] lg:top-[56%]
          w-[44px] sm:w-[56px] md:w-[68px] lg:w-[80px]
          drop-shadow-xl
        "
      />

      <img
        src="/Doin_Assets_png/white_circle-1.png"
        alt=""
        aria-hidden="true"
        className="
          absolute z-[5] pointer-events-none select-none
          -left-10  bottom-[4%]
          sm:-left-4  sm:bottom-[4%]
          md:-left-2  md:bottom-[4%]
          lg:left-0   lg:bottom-[4%]
          w-[120px] sm:w-[165px] md:w-[205px] lg:w-[250px]
          drop-shadow-2xl
        "
      />

      <img
        src="/Doin_Assets_png/white-mask-2.png"
        alt=""
        aria-hidden="true"
        className="
          absolute z-[2] pointer-events-none select-none
          -right-6  top-[14%]
          sm:-right-2 sm:top-[15%]
          md:right-0  md:top-[15%]
          lg:right-0  lg:top-[14%]
          w-[80px] sm:w-[110px] md:w-[140px] lg:w-[170px]
          drop-shadow-2xl
        "
      />

      <img
        src="/Doin_Assets_png/white_triangle-1.png"
        alt=""
        aria-hidden="true"
        className="
          hidden sm:block
          absolute z-[2] pointer-events-none select-none
          right-[3%] top-[55%]
          md:right-[3%] md:top-[56%]
          lg:right-[2%] lg:top-[54%]
          w-[50px] sm:w-[62px] md:w-[72px] lg:w-[82px]
          drop-shadow-xl
        "
      />

      <img
        src="/Doin_Assets_png/white-spring-2.png"
        alt=""
        aria-hidden="true"
        className="
          absolute z-[5] pointer-events-none select-none
          right-[1%] bottom-[4%]
          sm:right-[2%] sm:bottom-[4%]
          md:right-[2%] md:bottom-[4%]
          lg:right-[1%] lg:bottom-[4%]
          w-[80px] sm:w-[110px] md:w-[140px] lg:w-[168px]
          drop-shadow-2xl
        "
      />

      {/* Navigation */}
      {navbar ?? <Navbar />}

      {/* Main content */}
      <div
        className="
          relative z-10
          flex-1 flex flex-col items-center
          pt-24 sm:pt-28 md:pt-32
          pb-0
          px-4 sm:px-6 lg:px-8
          max-w-7xl mx-auto w-full
        "
      >
        <SectionHeader
          title={
            <>
              Get Access to Hundreds{' '}
              <br className="hidden sm:inline" />
              Courses Available
            </>
          }
          description="Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses."
          className="mb-6 sm:mb-7 md:mb-8"
        />

        <SearchBar className="mb-4 sm:mb-5 md:mb-6" />

        <HeroVisual className="flex-1 w-full" />
      </div>
    </section>
  )
}
