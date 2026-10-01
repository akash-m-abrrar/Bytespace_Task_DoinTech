import { SIGN_IN_FIELDS } from '../data/authContent'
import type { AuthFormProps } from '../types'

export function SignInForm({ className }: AuthFormProps) {
  return (
    <form
      className={className}
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="mb-2 text-sm font-medium text-[#003be2]">
        Welcome Back
      </div>

      <h2 className="max-w-[330px] text-[38px] font-bold leading-[1.08] tracking-tight text-gray-900 sm:text-[42px]">
        Welcome to
        <br />
        ByteSpace
      </h2>

      <div className="mt-10 space-y-5">
        {SIGN_IN_FIELDS.map((field) => (
          <div key={field.id}>
            <label
              htmlFor={`signin-${field.id}`}
              className="mb-2 block text-sm font-medium text-gray-800"
            >
              {field.label}
            </label>

            <input
              id={`signin-${field.id}`}
              type={field.type}
              placeholder={field.placeholder}
              className="
                h-12 w-full rounded-xl border border-gray-200
                bg-white px-5 text-sm text-gray-900
                outline-none placeholder:text-gray-400
                focus:border-[#003be2] focus:ring-1
                focus:ring-[#003be2]
              "
            />
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="
          mt-6 ml-auto block rounded-full
          bg-[#d2f801] px-7 py-3
          text-sm font-medium text-gray-900
          transition-colors hover:bg-[#c9ee00]
          focus:outline-none focus:ring-2
          focus:ring-[#d2f801] focus:ring-offset-2
        "
      >
        Continue
      </button>
    </form>
  )
}
