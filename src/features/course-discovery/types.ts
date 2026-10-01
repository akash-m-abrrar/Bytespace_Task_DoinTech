export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced'

export interface Course {
  id: string
  title: string
  image: string
  instructor: string
  category: string
  isFeatured?: boolean
  rating: number
  lessons: number
  duration: string
  comments: number
  level: CourseLevel | string
  price: number
  period?: string
  studentAvatars?: string[]
  additionalStudents?: string
  students: number
}

export type Category = string

export interface CourseCardProps {
  course: Course
  className?: string
}

export interface CategoryTabsProps {
  categories: readonly string[]
  value: string
  onValueChange: (value: string) => void
  className?: string
  onMoreClick?: () => void
}

export interface CourseGridProps {
  courses: Course[]
  className?: string
}

export interface CourseDiscoverySectionProps {
  className?: string
}
