import { useEffect, useState } from 'react'
import { Menu, ShoppingBag, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavItem {
  name: string
  href: string
  current?: boolean
}

const NAV_ITEMS: readonly NavItem[] = [
  { name: 'Home', href: '/', current: true },
  { name: 'Courses', href: '#courses' },
  { name: 'Creators', href: '#creators' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Track window scroll to toggle navbar styles
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])
  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            'flex items-center justify-between transition-all duration-300',
            isScrolled ? 'h-16 md:h-20' : 'h-20 md:h-24'
          )}
        >
          {/* Left: ByteSpace Logo */}
          <div className="flex items-center">
            <a
              href="/"
              className={cn(
                'flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 rounded-md transition-colors',
                isScrolled
                  ? 'focus-visible:ring-[#003be2]'
                  : 'focus-visible:ring-white'
              )}
              aria-label="ByteSpace Home"
            >
              <img
                src="/Doin_Assets_png/logo.png"
                alt="ByteSpace logo"
                className="h-8 w-auto object-contain"
              />
              <span
                className={cn(
                  'text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-200',
                  isScrolled ? 'text-gray-900' : 'text-white'
                )}
              >
                ByteSpace
              </span>
            </a>
          </div>

          {/* Center: Desktop Navigation */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center">
            <ul className="flex items-center gap-8 lg:gap-10">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={cn(
                      'text-sm lg:text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 rounded-sm',
                      isScrolled
                        ? item.current
                          ? 'text-[#003be2] font-semibold focus-visible:ring-[#003be2]'
                          : 'text-blue-900/80 hover:text-[#003be2] focus-visible:ring-[#003be2]'
                        : item.current
                          ? 'text-white font-semibold focus-visible:ring-white'
                          : 'text-white/80 hover:text-white focus-visible:ring-white'
                    )}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: Desktop Actions */}
          <div className="hidden md:flex items-center gap-5 lg:gap-6">
            <a
              href="#signin"
              className={cn(
                'text-sm lg:text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 rounded-sm',
                isScrolled
                  ? 'text-[#003be2] hover:text-blue-800 focus-visible:ring-[#003be2]'
                  : 'text-white/90 hover:text-white focus-visible:ring-white'
              )}
            >
              Sign In
            </a>
            <a
              href="#join"
              className={cn(
                'inline-flex items-center justify-center text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-sm focus:outline-none focus-visible:ring-2',
                isScrolled
                  ? 'bg-[#003be2] text-white hover:bg-blue-700 focus-visible:ring-[#003be2]'
                  : 'bg-white text-[#003be2] hover:bg-white/90 focus-visible:ring-white'
              )}
            >
              Join Us
            </a>
            <button
              type="button"
              aria-label="Shopping bag"
              className={cn(
                'transition-colors p-2 rounded-full focus:outline-none focus-visible:ring-2 cursor-pointer',
                isScrolled
                  ? 'text-[#003be2] hover:text-blue-800 focus-visible:ring-[#003be2]'
                  : 'text-white hover:text-white/80 focus-visible:ring-white'
              )}
            >
              <ShoppingBag className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Right: Shopping Bag + Hamburger Button */}
          <div className="flex md:hidden items-center gap-1.5">
            <button
              type="button"
              aria-label="Shopping bag"
              className={cn(
                'p-2 rounded-full focus:outline-none focus-visible:ring-2 cursor-pointer transition-colors',
                isScrolled
                  ? 'text-[#003be2] hover:text-blue-800 focus-visible:ring-[#003be2]'
                  : 'text-white hover:text-white/80 focus-visible:ring-white'
              )}
            >
              <ShoppingBag className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className={cn(
                'p-2 rounded-md focus:outline-none focus-visible:ring-2 cursor-pointer transition-colors',
                isScrolled
                  ? 'text-[#003be2] hover:text-blue-800 focus-visible:ring-[#003be2]'
                  : 'text-white hover:text-white/80 focus-visible:ring-white'
              )}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer / Sheet */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-50 md:hidden"
        >
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-[#003be2] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Drawer header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/15">
                <a
                  href="/"
                  className="flex items-center gap-2.5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <img
                    src="/Doin_Assets_png/logo.png"
                    alt="ByteSpace logo"
                    className="h-7 w-auto object-contain"
                  />
                  <span className="text-xl font-bold text-white tracking-tight">
                    ByteSpace
                  </span>
                </a>
                <button
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:text-white/80 p-1.5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
                >
                  <X className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>

              {/* Drawer navigation links */}
              <nav aria-label="Mobile main navigation" className="mt-6">
                <ul className="flex flex-col gap-2">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        aria-current={item.current ? 'page' : undefined}
                        className={cn(
                          'block px-3 py-2.5 text-base font-medium rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white',
                          item.current
                            ? 'bg-white/15 text-white font-semibold'
                            : 'text-white/80 hover:bg-white/10 hover:text-white'
                        )}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Drawer footer actions */}
            <div className="pt-6 border-t border-white/15 flex flex-col gap-3">
              <a
                href="#signin"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center py-2.5 text-base font-medium text-white/90 hover:text-white transition-colors"
              >
                Sign In
              </a>
              <a
                href="#join"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center text-center py-2.5 px-5 rounded-full bg-white text-[#003be2] font-semibold text-sm hover:bg-white/90 transition-colors shadow-sm"
              >
                Join Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
