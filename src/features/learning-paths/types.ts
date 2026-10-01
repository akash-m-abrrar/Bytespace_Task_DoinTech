import type { LucideIcon } from 'lucide-react'

export interface LearningPath {
  id: string
  title: string
  icon: LucideIcon
}

export interface LearningPathsSectionProps {
  className?: string
}

export interface LearningPathGridProps {
  paths: readonly LearningPath[]
  className?: string
}

export interface LearningPathCardProps {
  path: LearningPath
  className?: string
}
