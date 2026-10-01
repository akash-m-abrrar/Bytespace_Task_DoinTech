import { cn } from '@/lib/utils'

interface FooterLink {
  label: string
  href: string
}

interface FooterColumn {
  links: readonly FooterLink[]
}

const footerColumns: readonly FooterColumn[] = [
  {
    links: [
      { label: 'Featured Courses', href: '#' },
      { label: 'Featured Categories', href: '#' },
      { label: 'Business', href: '#' },
      { label: 'IT', href: '#' },
      { label: 'Design', href: '#' },
    ],
  },
  {
    links: [
      { label: 'Development', href: '#' },
      { label: 'Marketing', href: '#' },
      { label: 'Photography', href: '#' },
      { label: 'Finance', href: '#' },
      { label: 'Sport', href: '#' },
    ],
  },
  {
    links: [
      { label: 'Become a Creator', href: '#' },
      { label: 'Affiliate Program', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Help', href: '#' },
      { label: 'About', href: '#' },
    ],
  },
]

const legalLinks: readonly FooterLink[] = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookies Settings', href: '#' },
]

export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        'bg-white px-6 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16',
        className,
      )}
    >
      <div className="mx-auto max-w-[1240px]">
        {/* Main footer content */}
        <div className="grid gap-10 lg:grid-cols-[2fr_0.75fr_0.75fr_0.75fr] lg:gap-8">
          {/* Newsletter */}
          <div>
            <a
              href="#"
              aria-label="ByteSpace home"
              className="inline-flex items-center gap-2"
            >
              <img
                src="/Doin_Assets_png/logo.png"
                alt=""
                aria-hidden="true"
                className="h-[31.5px] w-[28.87px] object-contain"
              />

              <span className="text-[24px] font-bold leading-none tracking-tight text-gray-900">
                ByteSpace
              </span>
            </a>

            <p className="mt-6 max-w-[560px] text-sm leading-5 text-gray-700">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <form
              className="mt-6 flex w-full max-w-[522px] items-center gap-6"
              onSubmit={(event) => event.preventDefault()}
            >
              <label htmlFor="footer-email" className="sr-only">
                Enter your email
              </label>

              <input
                id="footer-email"
                type="email"
                placeholder="Enter your email"
                className="
                  h-[54px]
                  min-w-0
                  flex-1
                  rounded-full
                  border
                  border-gray-300
                  bg-white
                  px-6
                  text-sm
                  text-gray-900
                  outline-none
                  placeholder:text-gray-500
                  focus:border-[#003be2]
                  focus:ring-1
                  focus:ring-[#003be2]
                "
              />

              <button
                type="submit"
                className="
                  h-[48px]
                  shrink-0
                  rounded-full
                  bg-[#d2f801]
                  px-7
                  text-base
                  font-medium
                  text-gray-900
                  transition-colors
                  hover:bg-[#c9ee00]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#d2f801]
                  focus:ring-offset-2
                "
              >
                Search
              </button>
            </form>

            <p className="mt-6 max-w-[540px] text-xs leading-5 text-gray-600">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Navigation 1 */}
          <nav
            aria-label="Footer navigation 1"
            className="lg:pt-[54px]"
          >
            <ul className="flex flex-col gap-5">
              {footerColumns[0].links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-700 transition-colors hover:text-[#003be2]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Navigation 2 */}
          <nav
            aria-label="Footer navigation 2"
            className="lg:pt-[54px]"
          >
            <ul className="flex flex-col gap-5">
              {footerColumns[1].links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-700 transition-colors hover:text-[#003be2]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Navigation 3 */}
          <nav
            aria-label="Footer navigation 3"
            className="lg:pt-[54px]"
          >
            <ul className="flex flex-col gap-5">
              {footerColumns[2].links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-700 transition-colors hover:text-[#003be2]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom divider */}
        <div className="mt-20 border-t border-gray-200 pt-6 sm:mt-24">
          <div className="flex flex-col gap-5 text-xs text-gray-700 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
            <p>@ 2023 ByteSpace. All rights reserved.</p>

            <nav aria-label="Legal navigation">
              <ul className="flex flex-wrap items-center gap-6">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="transition-colors hover:text-[#003be2]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}