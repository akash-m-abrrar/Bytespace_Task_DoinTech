import { cn } from '@/lib/utils'

export interface GridBackgroundProps {
  className?: string
}

export function GridBackground({ className }: GridBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 z-0 bg-[#003be2] overflow-hidden',
        className
      )}
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: '64px 64px',
      }}
    />
  )
}
