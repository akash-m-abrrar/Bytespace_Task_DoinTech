import { cn } from '@/lib/utils'
import {
  CREATOR_CTA_DESCRIPTION,
  CREATOR_CTA_HEADING,
  CREATOR_CTA_LABEL,
} from '../data/creatorCta'
import type { CreatorCtaSectionProps } from '../types'
import { CreatorCtaContent } from './CreatorCtaContent'

export function CreatorCtaSection({
  className,
}: CreatorCtaSectionProps) {
  return (
    <section
      className={cn(
        'relative isolate overflow-hidden bg-[#003be2]',
        'min-h-[320px] py-10 sm:min-h-[330px] sm:py-12 lg:min-h-[350px] lg:py-14',
        className,
      )}
    >
      {/* Grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)
          `,
          backgroundSize: '78px 78px',
        }}
      />

      {/* Lime spring - top left */}
      <img
        src="/Doin_Assets_png/green_spring-1.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-6 -top-5 z-10 w-[92px] sm:w-[118px] lg:w-[145px]"
      />

      {/* White spring - top left/center */}
      <img
        src="/Doin_Assets_png/white-spring-2.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[14%] top-6 z-10 w-[58px] sm:w-[72px] lg:w-[82px]"
      />

      {/* Lime triangle - top right */}
      <img
        src="/Doin_Assets_png/green_triangle-2.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[16%] top-4 z-10 w-[70px] sm:w-[88px] lg:w-[105px]"
      />

      {/* White organic shape - right */}
      <img
        src="/Doin_Assets_png/white-mask-1.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 top-8 z-10 w-[110px] sm:w-[135px] lg:w-[160px]"
      />

      {/* White triangle - left */}
      <img
        src="/Doin_Assets_png/white_triangle-1.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-7 bottom-14 z-10 w-[75px] sm:w-[95px] lg:w-[115px]"
      />

      {/* Lime curved decoration - bottom left */}
      <img
        src="/Doin_Assets_png/green_triangle-2.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-12 left-[5%] z-10 w-[120px] rotate-[28deg] sm:w-[145px] lg:w-[170px]"
      />

      {/* Lime spring - bottom right */}
      <img
        src="/Doin_Assets_png/green_spring-1.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 right-6 z-10 w-[100px] rotate-[8deg] sm:right-8 sm:w-[125px] lg:right-12 lg:w-[150px]"
      />

      <CreatorCtaContent
        heading={CREATOR_CTA_HEADING}
        description={CREATOR_CTA_DESCRIPTION}
        ctaLabel={CREATOR_CTA_LABEL}
      />
    </section>
  )
}
