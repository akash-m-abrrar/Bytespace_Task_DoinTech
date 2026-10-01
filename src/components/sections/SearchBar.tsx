import { useState, type FormEvent } from 'react'
import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface SearchBarProps {
  className?: string
  placeholder?: string
  onSearch?: (query: string) => void
}

export function SearchBar({
  className,
  placeholder = 'Course, topic, creator',
  onSearch,
}: SearchBarProps) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSearch?.(query)
  }

  return (
    <form
      role="search"
      aria-label="Course search"
      onSubmit={handleSubmit}
      className={cn(
        'relative flex items-center justify-center gap-3 w-full max-w-lg mx-auto px-4',
        className
      )}
    >
      {/* Search Input Pill */}
      <div className="relative flex-1 flex items-center bg-white rounded-full px-5 py-3 sm:py-3.5 shadow-md shadow-blue-950/10 focus-within:ring-2 focus-within:ring-white">
        <Search
          className="w-5 h-5 text-gray-400 shrink-0 mr-3"
          aria-hidden="true"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          aria-label="Search course, topic, creator"
          className="w-full bg-transparent text-gray-800 placeholder:text-gray-400 text-sm sm:text-base outline-none font-normal"
        />
      </div>

      {/* Lime Search Button Pill */}
      <button
        type="submit"
        className="shrink-0 bg-[#d2f801] hover:bg-[#c2e600] active:scale-[0.98] text-black font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all duration-150 shadow-md shadow-black/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d2f801] cursor-pointer"
      >
        Search
      </button>
    </form>
  )
}
