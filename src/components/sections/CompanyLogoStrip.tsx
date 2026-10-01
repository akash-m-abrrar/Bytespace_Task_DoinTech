import { cn } from '@/lib/utils'

export interface CompanyLogoStripProps {
  className?: string
}

interface LogoItem {
  src: string
  name: string
}

const LOGOS: readonly LogoItem[] = [
  { src: '/Doin_Assets_png/logo-1.png', name: 'Logoipsum' },
  { src: '/Doin_Assets_png/logo-2.png', name: 'Logoipsum' },
  { src: '/Doin_Assets_png/logo-3.png', name: 'Logoipsum' },
  { src: '/Doin_Assets_png/logo-4.png', name: 'Logoipsum' },
  { src: '/Doin_Assets_png/logo-1.png', name: 'Logoipsum' },
]

export function CompanyLogoStrip({ className }: CompanyLogoStripProps) {
  return (
    <section
      aria-label="Partner and company logos"
      className={cn('w-full bg-[#F5F5F6] py-6 sm:py-8 md:py-10 lg:py-12', className)}
    >
      <div className="max-w-6xl mx-auto px-2 sm:px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-1 sm:gap-4 md:gap-8">
          {LOGOS.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-1 sm:gap-2 md:gap-2.5"
            >
              <img
                src={logo.src}
                alt=""
                aria-hidden="true"
                className="w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 object-contain select-none pointer-events-none"
              />
              <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold tracking-tight text-gray-700 select-none whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
