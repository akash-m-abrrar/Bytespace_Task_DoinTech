import { AuthLayout } from '../components/AuthLayout'
import { SignUpForm } from '../components/SignUpForm'

export function SignUpPage() {
  return (
    <AuthLayout
      title="Sign up and come in"
      eyebrow="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
      footerText="Already have an account?"
      footerLinkLabel="Login"
      footerLinkTo="/sign-in"
    >
      <SignUpForm />
    </AuthLayout>
  )
}
