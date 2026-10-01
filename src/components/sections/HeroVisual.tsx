import { cn } from '@/lib/utils'

export interface HeroVisualProps {
  className?: string
}

/**
 * HeroVisual — the lower visual composition of the Hero.
 *
 * This component receives its height from the parent via flex-1.
 * All children are absolutely positioned within this relative container.
 *
 * Layer order:
 *   z-[2]  small lime spring accent (near Progress card)
 *   z-10   lime arch (Ellipse 7) — bottom-anchored
 *   z-20   student image — bottom-anchored, centered
 *   z-30   three floating info cards
 *
 * Positioning strategy:
 *   • Arch & student:  bottom-0, left-1/2 -translate-x-1/2
 *   • Cards:           left/right % + bottom % relative to this container
 *     (percentages chosen so cards align with student's upper/lower body
 *      across every breakpoint)
 */
export function HeroVisual({ className }: HeroVisualProps) {
  return (
    /*
     * w-full inherits parent width; height comes from flex-1 in the parent.
     * overflow-visible lets the lime spring accent peek into surrounding area.
     */
    <div className={cn('relative w-full overflow-visible', className)}>

      {/* ── Small lime spring near "Learning Progress" card ─────── */}
      <img
        src="/Doin_Assets_png/green_spring-1.png"
        alt="" aria-hidden="true"
        className="
          absolute z-[2] pointer-events-none select-none drop-shadow-lg
          top-[4%]
          right-[7%]  sm:right-[8%]  md:right-[9%]  lg:right-[10%]
          w-[44px] sm:w-[55px] md:w-[65px] lg:w-[75px]
        "
      />

      {/* ── 1. LIME ARCH — bottom anchored, centred ─────────────── */}
      <img
        src="/Doin_Assets_png/Ellipse 7.png"
        alt="" aria-hidden="true"
        className="
          absolute z-10 pointer-events-none select-none
          bottom-0 left-1/2 -translate-x-1/2
          w-[300px]  sm:w-[420px]  md:w-[540px]  lg:w-[660px]
          h-auto object-contain
        "
      />

      {/* ── 2. STUDENT IMAGE — bottom anchored, centred ──────────── */}
      <img
        src="/Doin_Assets_png/Image.png"
        alt="Student learning online with headphones and laptop"
        className="
          absolute z-20 pointer-events-none select-none
          bottom-0 left-1/2 -translate-x-1/2
          w-[185px]  sm:w-[250px]  md:w-[320px]  lg:w-[390px]
          h-auto object-contain
        "
      />

      {/*
        ── 3. FLOATING CARDS

        Vertical anchor (bottom %) calibration:
          The student image aspect ratio is 722 × 515 ≈ 1.40 : 1.

          At each breakpoint, student height ≈ width / 1.40:
            sm  250 / 1.40 = 178 px
            md  320 / 1.40 = 229 px
            lg  390 / 1.40 = 279 px

          Container height (flex-1 receives whatever remains after title +
          search ≈ 280–380 px depending on viewport).

          We want UI/UX and Progress cards to sit at roughly the student's
          shoulder area (≈ top 30% of student = 70% from bottom of student):
            lg: 279 × 0.70 = 195 px → as % of ~380 px container ≈ 51%

          Happy Students card sits at student's lower-chest / waist
          (≈ top 60% of student = 40% from student bottom):
            lg: 279 × 0.40 = 112 px → ≈ 29% of container

          These are coarse percentages refined by breakpoint.
      */}

      {/* Card A: UI/UX Design (upper-left of student) */}
      <div
        className="
          absolute z-30
          left-[2%]  sm:left-[3%]  md:left-[4%]  lg:left-[6%]
          bottom-[44%] sm:bottom-[46%] md:bottom-[48%] lg:bottom-[50%]
          bg-white rounded-2xl px-4 py-3 shadow-2xl
          hover:-translate-y-1 transition-transform duration-300
        "
      >
        <p className="text-[13px] sm:text-sm md:text-base font-bold text-gray-900 leading-tight">
          UI/UX Design
        </p>
        <p className="text-[10px] sm:text-[11px] md:text-xs font-medium text-gray-500 mt-0.5 whitespace-nowrap">
          200 Courses &bull; 1000+ Students
        </p>
      </div>

      {/* Card B: Learning Progress 55% (upper-right of student) */}
      <div
        className="
          absolute z-30
          right-[2%]  sm:right-[3%]  md:right-[4%]  lg:right-[6%]
          bottom-[44%] sm:bottom-[46%] md:bottom-[48%] lg:bottom-[50%]
          bg-white rounded-2xl px-4 sm:px-5 py-3 sm:py-4 shadow-2xl
          w-[136px] sm:w-[155px] md:w-[175px] lg:w-[195px]
          hover:-translate-y-1 transition-transform duration-300
        "
      >
        <p className="text-[10px] sm:text-[11px] md:text-xs font-medium text-gray-600">
          Learning Progress
        </p>
        <p className="text-2xl sm:text-[26px] md:text-3xl font-extrabold text-gray-900 mt-1 leading-none">
          55%
        </p>
        <div className="w-full bg-gray-100 rounded-full h-[5px] sm:h-[6px] mt-2 overflow-hidden">
          <div
            className="bg-[#d2f801] h-full rounded-full"
            style={{ width: '55%' }}
          />
        </div>
      </div>

      {/* Card C: Happy Students (lower-left of student) */}
      <div
        className="
          absolute z-30
          left-[2%]  sm:left-[3%]  md:left-[4%]  lg:left-[5%]
          bottom-[16%] sm:bottom-[18%] md:bottom-[20%] lg:bottom-[22%]
          bg-white rounded-2xl p-3 sm:p-3.5 shadow-2xl
          hover:-translate-y-1 transition-transform duration-300
        "
      >
        <img
          src="/Doin_Assets_png/Auto Layout Vertical.png"
          alt="Happy Students — 4.5 rating with over 2 000 students"
          className="w-[128px] sm:w-[145px] md:w-[162px] lg:w-[178px] h-auto object-contain"
        />
      </div>

    </div>
  )
}
