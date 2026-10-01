export interface AuthLayoutProps {
  title: string
  eyebrow?: string
  children: React.ReactNode
  footerText: string
  footerLinkLabel: string
  footerLinkTo: string
  className?: string
}

export interface AuthField {
  id: string
  label: string
  type: 'text' | 'email' | 'password'
  placeholder: string
}

export interface AuthFormProps {
  className?: string
}
