import { AuthLayout } from '../components/AuthLayout'
import { SignInForm } from '../components/SignInForm'

export function SignInPage() {
  return (
    <AuthLayout
      title="Welcome back"
      eyebrow="Sign in to continue learning, creating, and growing with ByteSpace."
      footerText="Don't have an account?"
      footerLinkLabel="Sign Up"
      footerLinkTo="/sign-up"
    >
      <SignInForm />
    </AuthLayout>
  )
}
