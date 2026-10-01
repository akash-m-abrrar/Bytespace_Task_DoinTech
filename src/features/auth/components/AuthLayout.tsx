import { Link } from 'react-router-dom'
import { GridBackground } from '@/components/common/GridBackground'
import { cn } from '@/lib/utils'
import type { AuthLayoutProps } from '../types'
import { AuthVisual } from './AuthVisual'

export function AuthLayout({
  title,
  eyebrow,
  children,
  footerText,
  footerLinkLabel,
  footerLinkTo,
  className,
}: AuthLayoutProps) {
  return (
    <main
      className={cn(
        'relative min-h-screen overflow-hidden bg-[#003be2]',
        className,
      )}
    >
      <GridBackground />

      {/* Decorative background elements */}
      <img
        src="/Doin_Assets_png/green_spring-1.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-5 -top-8 z-10 hidden w-24 lg:block"
      />

      <div className="relative z-20 mx-auto flex min-h-screen w-full max-w-[1440px] items-stretch">
        {/* Left side */}
        <div className="flex flex-1 flex-col px-6 py-8 sm:px-10 lg:px-12 xl:px-14">
          <Link to="/" aria-label="ByteSpace home" className="inline-flex w-fit">
            <img
              src="/Doin_Assets_png/logo.png"
              alt="ByteSpace"
              className="h-[31.5px] w-[28.87px] object-contain"
            />
          </Link>

          <div className="mt-14 max-w-[430px] text-white sm:mt-16 lg:mt-12">
            <h1 className="text-[28px] font-semibold leading-tight sm:text-[32px]">
              {title}
            </h1>

            {eyebrow && (
              <p className="mt-4 text-sm leading-6 text-white/85 sm:text-base">
                {eyebrow}
              </p>
            )}
          </div>

          <AuthVisual />
        </div>

        {/* Right side */}
        <div className="flex w-full items-center px-4 py-8 sm:px-8 lg:w-[510px] lg:px-0 lg:py-10 lg:pr-8 xl:w-[560px] xl:pr-12">
          <div className="w-full rounded-[24px] bg-white px-7 py-10 shadow-2xl sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            {children}

            <div className="mt-20 text-center text-sm text-gray-500">
              <span>{footerText} </span>

              <Link
                to={footerLinkTo}
                className="font-medium text-[#003be2] hover:underline"
              >
                {footerLinkLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
