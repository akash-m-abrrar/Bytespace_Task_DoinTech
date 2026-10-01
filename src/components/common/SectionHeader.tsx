import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface SectionHeaderProps {
  title: ReactNode
  description?: ReactNode
  className?: string
  align?: 'center' | 'left'
  as?: 'h1' | 'h2'
  titleClassName?: string
  descriptionClassName?: string
}

export function SectionHeader({
  title,
  description,
  className,
  align = 'center',
  as: Component = 'h1',
  titleClassName,
  descriptionClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'max-w-4xl mx-auto px-4',
        align === 'center' ? 'text-center' : 'text-left',
        className
      )}
    >
      <Component
        className={cn(
          'text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.18] text-balance',
          titleClassName
        )}
      >
        {title}
      </Component>
      {description && (
        <p
          className={cn(
            'mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed',
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
