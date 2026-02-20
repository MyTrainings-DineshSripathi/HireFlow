import React from "react"
import { useForm } from "react-hook-form"
import { NavLink } from "react-router-dom"
import { Mail, Lock, Github } from "lucide-react"

function SignIn() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log("Login Data:", data)
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-black px-4">

      <div className="w-full max-w-md bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl shadow-2xl">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
          <p className="text-gray-400 mt-2 text-sm">
            Sign in to continue to HireFlow
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Email */}
          <div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="email"
                placeholder="Email address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
                className="w-full h-11 rounded-xl bg-white/5 border border-white/10 pl-10 pr-4 text-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                })}
                className="w-full h-11 rounded-xl bg-white/5 border border-white/10 pl-10 pr-4 text-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
            {errors.password && (
              <p className="text-red-400 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">
            {/* <label className="flex items-center gap-2 text-gray-400">
              <input type="checkbox" className="accent-indigo-600" />
              Remember me
            </label> */}

            <NavLink
              to="/forgot-password"
              className="text-indigo-400 hover:text-indigo-300 font-medium"
            >
              Forgot password?
            </NavLink>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full h-11 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition-all text-white font-semibold shadow-lg"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-gray-400 text-xs">OR</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* OAuth Buttons */}
        <div className="space-y-3">

          {/* Google */}
          <button
            className="w-full h-11 rounded-xl bg-white text-black font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="h-5 w-5"
            />
            Continue with Google
          </button>

          {/* GitHub */}
          <button
            className="w-full h-11 rounded-xl bg-gray-800 text-white font-semibold flex items-center justify-center gap-2 hover:bg-gray-700 transition"
          >
            <Github className="h-5 w-5" />
            Continue with GitHub
          </button>

        </div>

        {/* Signup Link */}
        <p className="text-center text-sm text-gray-400 mt-8">
          Don’t have an account?{" "}
          <NavLink
            to="/signup"
            className="text-indigo-400 hover:text-indigo-300 font-semibold"
          >
            Create one
          </NavLink>
        </p>

      </div>
    </section>
  )
}

export default SignIn
