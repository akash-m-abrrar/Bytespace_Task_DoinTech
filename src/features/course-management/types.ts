export interface CourseManagementFeature {
  id: string
  label: string
}

export interface CourseManagementContentProps {
  heading: string
  description: string
  features: readonly CourseManagementFeature[]
  className?: string
}

export interface CourseManagementFeaturesProps {
  features: readonly CourseManagementFeature[]
  className?: string
}

export interface CourseManagementVisualProps {
  className?: string
}

export interface CourseManagementSectionProps {
  className?: string
}
