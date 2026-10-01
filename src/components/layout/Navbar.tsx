import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
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

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            'flex items-center justify-between transition-all duration-300',
            isScrolled ? 'h-16 md:h-20' : 'h-20 md:h-24',
          )}
        >
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="/"
              className={cn(
                'flex items-center gap-2.5 rounded-md transition-colors focus:outline-none focus-visible:ring-2',
                isScrolled
                  ? 'focus-visible:ring-[#003be2]'
                  : 'focus-visible:ring-white',
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
                  'text-xl font-bold tracking-tight transition-colors duration-200 sm:text-2xl',
                  isScrolled ? 'text-gray-900' : 'text-white',
                )}
              >
                ByteSpace
              </span>
            </a>
          </div>

          {/* Desktop Navigation: md and above */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center md:flex"
          >
            <ul className="flex items-center gap-8 lg:gap-10">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={cn(
                      'rounded-sm text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 lg:text-base',
                      isScrolled
                        ? item.current
                          ? 'font-semibold text-[#003be2] focus-visible:ring-[#003be2]'
                          : 'text-blue-900/80 hover:text-[#003be2] focus-visible:ring-[#003be2]'
                        : item.current
                          ? 'font-semibold text-white focus-visible:ring-white'
                          : 'text-white/80 hover:text-white focus-visible:ring-white',
                    )}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Actions: md and above */}
          <div className="hidden items-center gap-5 md:flex lg:gap-6">
            {/* Sign In */}
            <Link
              to="/sign-in"
              className={cn(
                'rounded-sm text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 lg:text-base',
                isScrolled
                  ? 'text-[#003be2] hover:text-blue-800 focus-visible:ring-[#003be2]'
                  : 'text-white/90 hover:text-white focus-visible:ring-white',
              )}
            >
              Sign In
            </Link>

            {/* Join Us → Sign Up */}
            <Link
              to="/sign-up"
              className={cn(
                'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition-all focus:outline-none focus-visible:ring-2',
                isScrolled
                  ? 'bg-[#003be2] text-white hover:bg-blue-700 focus-visible:ring-[#003be2]'
                  : 'bg-white text-[#003be2] hover:bg-white/90 focus-visible:ring-white',
              )}
            >
              Join Us
            </Link>

            {/* Shopping Bag */}
            <button
              type="button"
              aria-label="Shopping bag"
              className={cn(
                'cursor-pointer rounded-full p-2 transition-colors focus:outline-none focus-visible:ring-2',
                isScrolled
                  ? 'text-[#003be2] hover:text-blue-800 focus-visible:ring-[#003be2]'
                  : 'text-white hover:text-white/80 focus-visible:ring-white',
              )}
            >
              <ShoppingBag className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Actions: below md */}
          <div className="flex items-center gap-1.5 md:hidden">
            {/* Mobile Shopping Bag */}
            <button
              type="button"
              aria-label="Shopping bag"
              className={cn(
                'cursor-pointer rounded-full p-2 transition-colors focus:outline-none focus-visible:ring-2',
                isScrolled
                  ? 'text-[#003be2] hover:text-blue-800 focus-visible:ring-[#003be2]'
                  : 'text-white hover:text-white/80 focus-visible:ring-white',
              )}
            >
              <ShoppingBag className="h-5 w-5" aria-hidden="true" />
            </button>

            {/* Mobile Menu */}
            <button
              type="button"
              aria-label={
                mobileMenuOpen
                  ? 'Close navigation menu'
                  : 'Open navigation menu'
              }
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className={cn(
                'cursor-pointer rounded-md p-2 transition-colors focus:outline-none focus-visible:ring-2',
                isScrolled
                  ? 'text-[#003be2] hover:text-blue-800 focus-visible:ring-[#003be2]'
                  : 'text-white hover:text-white/80 focus-visible:ring-white',
              )}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-50 md:hidden"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />

          {/* Drawer */}
          <div className="fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col justify-between overflow-y-auto bg-[#003be2] p-6 shadow-2xl">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-white/15 pb-6">
                <a
                  href="/"
                  className="flex items-center gap-2.5"
                  onClick={closeMobileMenu}
                  aria-label="ByteSpace Home"
                >
                  <img
                    src="/Doin_Assets_png/logo.png"
                    alt="ByteSpace logo"
                    className="h-7 w-auto object-contain"
                  />

                  <span className="text-xl font-bold tracking-tight text-white">
                    ByteSpace
                  </span>
                </a>

                <button
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={closeMobileMenu}
                  className="cursor-pointer rounded-md p-1.5 text-white transition-colors hover:text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav
                aria-label="Mobile main navigation"
                className="mt-6"
              >
                <ul className="flex flex-col gap-2">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        onClick={closeMobileMenu}
                        aria-current={item.current ? 'page' : undefined}
                        className={cn(
                          'block rounded-lg px-3 py-2.5 text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white',
                          item.current
                            ? 'bg-white/15 font-semibold text-white'
                            : 'text-white/80 hover:bg-white/10 hover:text-white',
                        )}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Mobile Auth Actions */}
            <div className="flex flex-col gap-3 border-t border-white/15 pt-6">
              {/* Mobile Sign In */}
              <Link
                to="/sign-in"
                onClick={closeMobileMenu}
                className="py-2.5 text-center text-base font-medium text-white/90 transition-colors hover:text-white"
              >
                Sign In
              </Link>

              {/* Mobile Join Us → Sign Up */}
              <Link
                to="/sign-up"
                onClick={closeMobileMenu}
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-center text-sm font-semibold text-[#003be2] shadow-sm transition-colors hover:bg-white/90"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}