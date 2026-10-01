export interface Testimonial {
  id: string
  name: string
  role: string
  quote: string
  avatar: string
}

export interface TestimonialsSectionProps {
  className?: string
}

export interface TestimonialGridProps {
  testimonials: readonly Testimonial[]
  className?: string
}

export interface TestimonialCardProps {
  testimonial: Testimonial
  className?: string
}
