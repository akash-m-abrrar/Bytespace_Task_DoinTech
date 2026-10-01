import { cn } from '@/lib/utils'
import type { CourseManagementVisualProps } from '../types'

export function CourseManagementVisual({
  className,
}: CourseManagementVisualProps) {
  return (
    <div
      className={cn(
        'relative mx-auto w-full max-w-[480px]',
        'h-[390px] sm:h-[410px] lg:h-[430px]',
        'select-none',
        className,
      )}
    >
      {/* Soft lime glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-10%] left-[8%] h-64 w-64 rounded-full bg-[#d2f801]/30 blur-3xl"
      />

      {/* Soft blue glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-10%] right-[-10%] h-72 w-72 rounded-full bg-[#003be2]/10 blur-3xl"
      />

      {/* Main female creator */}
      <img
        src="/Doin_Assets_png/Image (1).png"
        alt="Creator managing courses on ByteSpace"
        className="
          absolute
          bottom-0
          left-[18%]
          z-10
          w-[255px]
          sm:left-[17%]
          sm:w-[275px]
          lg:left-[18%]
          lg:w-[290px]
          object-contain
          drop-shadow-2xl
        "
      />

      {/* Year to Date */}
      <img
        src="/Doin_Assets_png/Auto Layout Vertical (3).png"
        alt=""
        aria-hidden="true"
        className="
          absolute
          left-[0%]
          top-[30%]
          z-20
          w-[92px]
          sm:top-[29%]
          sm:w-[105px]
          lg:top-[28%]
          lg:w-[115px]
          drop-shadow-lg
        "
      />

      {/* Lime spring */}
      <img
        src="/Doin_Assets_png/green_spring-1.png"
        alt=""
        aria-hidden="true"
        className="
          absolute
          right-[12%]
          top-[23%]
          z-20
          w-[72px]
          sm:right-[10%]
          sm:w-[82px]
          lg:right-[9%]
          lg:w-[92px]
          drop-shadow-md
        "
      />

      {/* Happy Students */}
      <img
        src="/Doin_Assets_png/Auto Layout Vertical (4).png"
        alt=""
        aria-hidden="true"
        className="
          absolute
          bottom-[7%]
          right-[0%]
          z-30
          w-[145px]
          sm:w-[160px]
          lg:w-[175px]
          drop-shadow-xl
        "
      />
    </div>
  )
}