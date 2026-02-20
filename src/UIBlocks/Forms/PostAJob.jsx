import React from "react"
import { useForm } from "react-hook-form"
import { NavLink } from "react-router-dom"
import {
  Building2,
  Briefcase,
  MapPin,
  IndianRupee,
  FileText,
  Clock3,
  Link as LinkIcon,
  CalendarClock,
  Wrench,
} from "lucide-react"

function PostAJob() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      postedAt: new Date().toISOString().slice(0, 16),
      type: "Full Time",
    },
  })

  const onSubmit = (data) => {
    const payload = {
      title: data.title,
      company: data.company,
      location: data.location,
      experience: data.experience,
      type: data.type,
      salary: data.salary,
      skills: data.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean),
      postedAt: new Date(data.postedAt).toISOString(),
      jobDescription: data.jobDescription
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean),
      rolesAndResponsibilities: data.rolesAndResponsibilities
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean),
      aboutCompany: data.aboutCompany,
      url: data.url,
    }

    console.log("Post Job Data:", payload)
    reset()
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-black px-4 py-10">
      <div className="mx-auto w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-lg sm:p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">Post a New Job</h1>
          <p className="mt-2 text-sm text-gray-400">
            Create a complete listing with title, company info, skills, salary, and responsibilities.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-gray-300">Title</label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Frontend Developer"
                  {...register("title", { required: "Title is required" })}
                  className="h-11 w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 text-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              {errors.title && <p className="mt-1 text-xs text-red-400">{errors.title.message}</p>}
            </div>

            <div>
              <label className="mb-1 block text-sm text-gray-300">Company</label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="TechNova"
                  {...register("company", { required: "Company is required" })}
                  className="h-11 w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 text-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              {errors.company && <p className="mt-1 text-xs text-red-400">{errors.company.message}</p>}
            </div>

            <div>
              <label className="mb-1 block text-sm text-gray-300">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Bangalore, India"
                  {...register("location", { required: "Location is required" })}
                  className="h-11 w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 text-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              {errors.location && <p className="mt-1 text-xs text-red-400">{errors.location.message}</p>}
            </div>

            <div>
              <label className="mb-1 block text-sm text-gray-300">Experience</label>
              <div className="relative">
                <Clock3 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="0-2 Years"
                  {...register("experience", { required: "Experience is required" })}
                  className="h-11 w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 text-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              {errors.experience && <p className="mt-1 text-xs text-red-400">{errors.experience.message}</p>}
            </div>

            <div>
              <label className="mb-1 block text-sm text-gray-300">Type</label>
              <div className="relative">
                <Wrench className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <select
                  {...register("type", { required: "Type is required" })}
                  className="h-11 w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 text-sm text-white outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="Full Time" className="bg-slate-900">Full Time</option>
                  <option value="Part Time" className="bg-slate-900">Part Time</option>
                  <option value="Remote" className="bg-slate-900">Remote</option>
                  <option value="Contract" className="bg-slate-900">Contract</option>
                </select>
              </div>
              {errors.type && <p className="mt-1 text-xs text-red-400">{errors.type.message}</p>}
            </div>

            <div>
              <label className="mb-1 block text-sm text-gray-300">Salary</label>
              <div className="relative">
                <IndianRupee className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="?6,00,000 - ?10,00,000 / year"
                  {...register("salary", { required: "Salary is required" })}
                  className="h-11 w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 text-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              {errors.salary && <p className="mt-1 text-xs text-red-400">{errors.salary.message}</p>}
            </div>

            <div>
              <label className="mb-1 block text-sm text-gray-300">Posted At</label>
              <div className="relative">
                <CalendarClock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="datetime-local"
                  {...register("postedAt", { required: "Posted time is required" })}
                  className="h-11 w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 text-sm text-white outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              {errors.postedAt && <p className="mt-1 text-xs text-red-400">{errors.postedAt.message}</p>}
            </div>

            <div>
              <label className="mb-1 block text-sm text-gray-300">URL</label>
              <div className="relative">
                <LinkIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="url"
                  placeholder="https://technova.com/careers/frontend-developer"
                  {...register("url", { required: "Company URL is required" })}
                  className="h-11 w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 text-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              {errors.url && <p className="mt-1 text-xs text-red-400">{errors.url.message}</p>}
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm text-gray-300">Skills (comma separated)</label>
            <textarea
              rows={2}
              placeholder="HTML, CSS, JavaScript, React"
              {...register("skills", { required: "Skills are required" })}
              className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.skills && <p className="mt-1 text-xs text-red-400">{errors.skills.message}</p>}
          </div>

          <div>
            <label className="mb-1 block text-sm text-gray-300">Job Description (one point per line)</label>
            <div className="relative">
              <FileText className="absolute left-3 top-4 h-4 w-4 text-gray-400" />
              <textarea
                rows={5}
                placeholder="We are looking for a passionate Frontend Developer to build modern web applications."
                {...register("jobDescription", { required: "Job description is required" })}
                className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 pt-3 text-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            {errors.jobDescription && <p className="mt-1 text-xs text-red-400">{errors.jobDescription.message}</p>}
          </div>

          <div>
            <label className="mb-1 block text-sm text-gray-300">Roles and Responsibilities (one point per line)</label>
            <textarea
              rows={5}
              placeholder="Develop responsive UI using React."
              {...register("rolesAndResponsibilities", { required: "Roles and responsibilities are required" })}
              className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.rolesAndResponsibilities && (
              <p className="mt-1 text-xs text-red-400">{errors.rolesAndResponsibilities.message}</p>
            )}
          </div>

          <div>
            <label className="mb-1 block text-sm text-gray-300">About Company</label>
            <textarea
              rows={3}
              placeholder="TechNova is a fast-growing digital solutions company delivering scalable web and cloud applications."
              {...register("aboutCompany", { required: "About company is required" })}
              className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.aboutCompany && <p className="mt-1 text-xs text-red-400">{errors.aboutCompany.message}</p>}
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <button
              type="submit"
              className="h-11 flex-1 rounded-xl bg-indigo-600 font-semibold text-white shadow-lg transition-all hover:bg-indigo-500"
            >
              Publish Job
            </button>
            <NavLink
              to="/jobs"
              className="flex h-11 flex-1 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-sm font-semibold text-gray-200 transition-all hover:bg-white/10"
            >
              Browse Jobs
            </NavLink>
          </div>
        </form>
      </div>
    </section>
  )
}

export default PostAJob