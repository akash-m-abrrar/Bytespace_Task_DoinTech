import type { AuthField } from '../types'

export const SIGN_UP_FIELDS: readonly AuthField[] = [
  {
    id: 'full-name',
    label: 'Full Name',
    type: 'text',
    placeholder: 'Jamie Davis',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'designer@example.com',
  },
  {
    id: 'password',
    label: 'Password',
    type: 'password',
    placeholder: '********',
  },
]

export const SIGN_IN_FIELDS: readonly AuthField[] = [
  {
    id: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'designer@example.com',
  },
  {
    id: 'password',
    label: 'Password',
    type: 'password',
    placeholder: '********',
  },
]
