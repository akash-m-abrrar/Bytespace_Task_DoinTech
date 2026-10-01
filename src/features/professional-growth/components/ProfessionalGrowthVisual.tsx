import type { ProfessionalGrowthVisualProps } from '../types'
import { cn } from '@/lib/utils'

export function ProfessionalGrowthVisual({
  className,
}: ProfessionalGrowthVisualProps) {
  return (
    <div
      className={cn(
        'relative mx-auto w-full max-w-[560px]',
        'h-[380px] sm:h-[420px] lg:h-[450px]',
        'select-none',
        className,
      )}
    >
      {/* Soft visual glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/40 blur-3xl"
      />

      {/* Featured course card */}
      <img
        src="/Doin_Assets_png/Course_Card_1.png"
        alt=""
        aria-hidden="true"
        className="
          absolute
          left-[3%]
          top-[4%]
          z-10
          w-[240px]
          sm:w-[275px]
          lg:w-[300px]
          drop-shadow-xl
        "
      />

      {/* Main student */}
      <img
        src="/Doin_Assets_png/Image.png"
        alt="Student learning online with headphones and a laptop"
        className="
          absolute
          bottom-0
          right-[5%]
          z-20
          w-[290px]
          sm:w-[325px]
          lg:w-[355px]
          object-contain
          drop-shadow-2xl
        "
      />

      {/* Learning progress */}
      <img
        src="/Doin_Assets_png/Auto Layout Vertical (2).png"
        alt=""
        aria-hidden="true"
        className="
          absolute
          right-[1%]
          top-[38%]
          z-30
          w-[145px]
          sm:w-[165px]
          lg:w-[180px]
          drop-shadow-xl
        "
      />

      {/* Lime decorative spring */}
      <img
        src="/Doin_Assets_png/green_spring-1.png"
        alt=""
        aria-hidden="true"
        className="
          absolute
          right-[1%]
          top-[8%]
          z-30
          w-[78px]
          sm:w-[92px]
          lg:w-[105px]
          drop-shadow-md
        "
      />
    </div>
  )
}
