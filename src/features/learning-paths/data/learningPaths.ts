import {
  Palette,
  Code2,
  Laptop,
  Building2,
  Megaphone,
  Camera,
} from 'lucide-react'
import type { LearningPath } from '../types'

export const LEARNING_PATHS: readonly LearningPath[] = [
  {
    id: 'design',
    title: 'Design',
    icon: Palette,
  },
  {
    id: 'development',
    title: 'Development',
    icon: Code2,
  },
  {
    id: 'it-software',
    title: 'IT & Software',
    icon: Laptop,
  },
  {
    id: 'business',
    title: 'Business',
    icon: Building2,
  },
  {
    id: 'marketing',
    title: 'Marketing',
    icon: Megaphone,
  },
  {
    id: 'photography',
    title: 'Photography',
    icon: Camera,
  },
]
