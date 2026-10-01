import type { CourseManagementFeature } from '../types'

export const COURSE_MANAGEMENT_HEADING = 'Create & Manage Courses Easily.'

export const COURSE_MANAGEMENT_DESCRIPTION =
  'ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.'

export const COURSE_MANAGEMENT_FEATURES: readonly CourseManagementFeature[] = [
  {
    id: 'share-expertise',
    label: 'Share Your Expertise',
  },
  {
    id: 'monetize-passion',
    label: 'Monetize Your Passion',
  },
  {
    id: 'flexibility-autonomy',
    label: 'Flexibility and Autonomy',
  },
  {
    id: 'build-community',
    label: 'Build a Community',
  },
]
