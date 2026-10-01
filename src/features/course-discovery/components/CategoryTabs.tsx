import { cn } from '@/lib/utils'
import type { CategoryTabsProps } from '../types'

export function CategoryTabs({
  categories,
  value,
  onValueChange,
  className,
  onMoreClick,
}: CategoryTabsProps) {
  return (
    <div className={cn('w-full flex justify-center', className)}>
      {/* Pill tab bar — plain div with role="tablist" for full layout control */}
      <div
        role="tablist"
        aria-label="Course categories"
        className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 w-full max-w-5xl"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={value === category}
            onClick={() => onValueChange(category)}
            className={cn(
              'rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2',
              'text-xs sm:text-sm font-medium',
              'transition-all duration-150 cursor-pointer',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d2f801]',
              value === category
                ? 'bg-[#d2f801] text-black font-semibold'
                : 'bg-[#F5F5F6] text-gray-700 hover:bg-gray-200 hover:text-gray-900'
            )}
          >
            {category}
          </button>
        ))}

        {/* + More Action Pill */}
        <button
          type="button"
          onClick={onMoreClick}
          aria-label="View more categories"
          className={cn(
            'inline-flex items-center justify-center',
            'rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2',
            'text-xs sm:text-sm font-medium',
            'bg-[#F5F5F6] text-gray-700',
            'hover:bg-gray-200 hover:text-gray-900',
            'transition-all duration-150 cursor-pointer',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d2f801]'
          )}
        >
          + More
        </button>
      </div>
    </div>
  )
}
