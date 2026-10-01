import { cn } from '@/lib/utils'
import type { CreatorCtaContentProps } from '../types'

export function CreatorCtaContent({
  heading,
  description,
  ctaLabel,
  className,
}: CreatorCtaContentProps) {
  return (
    <div
      className={cn(
        'relative z-20 mx-auto flex max-w-3xl flex-col items-center text-center',
        className,
      )}
    >
      <h2 className="max-w-2xl text-[30px] font-semibold leading-[1.12] tracking-tight text-white sm:text-[38px] md:text-[44px]">
        {heading}
      </h2>

      <p className="mt-6 max-w-3xl text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
        {description}
      </p>

      <button
        type="button"
        className="mt-7 rounded-full bg-[#d2f801] px-7 py-2.5 text-sm font-medium text-gray-900 transition-colors hover:bg-[#c8ed00] focus:outline-none focus:ring-2 focus:ring-[#d2f801] focus:ring-offset-2 focus:ring-offset-[#003be2]"
      >
        {ctaLabel}
      </button>
    </div>
  )
}
