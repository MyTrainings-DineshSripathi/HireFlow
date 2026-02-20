import React from 'react'
import { useParams } from 'react-router'
import { jobs } from '@/DummyData/Dummy'
import { Building, Dot } from 'lucide-react'
import JobCard from '../JobCard/JobCard'
import JobDetails from './JobDetails'
import { useFormatPostedTime } from '@/CustomHooks/CustomTimeFormat'

function JobDetailedView() {
    const {jobId} = useParams()

    const job = jobs.find((job) => job.id == jobId)

    const similarJobs = jobs.filter((jobData) => ((jobData.title == job.title && jobData.id != job.id) || jobData.skills.some(skill => {
        console.log(job.skills.includes(skill))
        return  job.skills.includes(skill)
    })))

    console.log(similarJobs)

    console.log(job.skills.includes("Java", "Spring Boot", "Microservices"))

    console.log(jobId)
    return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* LEFT SECTION */}
            <div className="lg:col-span-2 space-y-6">

                {/* Job Header */}
                <div className="bg-white p-6 rounded-xl shadow-sm border ">
                    <h1 className="text-2xl font-bold text-gray-800">{job.title}</h1>

                    <div className="mt-2 text-gray-600">
                        <p className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
        
                            <span className="flex items-center justify-center h-9 w-9 rounded-lg bg-indigo-50 dark:bg-indigo-500/10">
                                <Building className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                            </span>

                            <span className="font-semibold tracking-wide text-gray-800 dark:text-white">
                                {job.company}
                            </span>

                        </p>
                        <p className="flex text-xs text-gray-400 mt-2">
                            Posted {useFormatPostedTime(job.postedAt)} <Dot/> {" "}
                            {new Date(job.postedAt).toDateString()}
                        </p>
                        <p className="flex text-sm mt-1">
                            {job.location} <Dot/> {job.experience} <Dot/> {job.type}
                        </p>
                        <p className="text-sm mt-1 font-semibold text-emerald-700">
                            Salary: {job.salary || "Not disclosed"}
                        </p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {job.skills.map((skill, index) => (
                        <span
                            key={index}
                            className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full"
                        >
                            {skill}
                        </span>
                        ))}
                    </div>
                </div>

                {/* Job Description */}
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <h2 className="text-lg font-semibold text-gray-800 mb-3">
                        Job Description
                    </h2>
                    <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                        {job.jobDescription.map((para, index) => (
                        <p key={index}>{para}</p>
                        ))}
                    </div>
                </div>

                {/* Roles & Responsibilities */}
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <h2 className="text-lg font-semibold text-gray-800 mb-3">
                        Roles & Responsibilities
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                        {job.rolesAndResponsibilities.map((role, index) => (
                        <li key={index}>{role}</li>
                        ))}
                    </ul>
                </div>

            </div>

            {/* RIGHT SIDEBAR */}
            <div className="space-y-6">

                {/* Apply Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition">
                        Apply Now
                    </button>

                    <div className="mt-4 text-sm text-gray-600">
                        <p>
                        <span className="font-medium">Experience:</span> {job.experience}
                        </p>
                        <p className="mt-2">
                        <span className="font-medium">Job Type:</span> {job.type}
                        </p>
                        <p className="mt-2">
                        <span className="font-medium">Location:</span> {job.location}
                        </p>
                        <p className="mt-2">
                        <span className="font-medium">Salary:</span> {job.salary || "Not disclosed"}
                        </p>
                    </div>
                </div>

                {/* Company Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <h2 className="text-lg font-semibold text-gray-800 mb-3">
                        About Company
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        {job.aboutCompany}
                    </p>

                    <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block text-blue-600 text-sm font-medium hover:underline"
                    >
                        Visit Company Website ?
                    </a>
                </div>

            </div>

        </div>
        <div className="mt-16">

    {/* Section Header */}
    <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-black tracking-tight">
            Similar Jobs
        </h1>

        <span className="text-sm text-gray-400">
            {similarJobs.length} opportunities
        </span>
    </div>

    {/* Divider */}
    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Jobs Grid */}
        <div className="grid gap-6 
                        sm:grid-cols-1 
                        md:grid-cols-2 
                        lg:grid-cols-3 
                        xl:grid-cols-4">

            {similarJobs.length > 0 ? (
            similarJobs.map((job) => (
                <div
                    key={job.id}
                    className="w-full transition-transform duration-300 hover:scale-[1.01]"
                >
                    <JobCard job={job} />
                </div>
            ))
            ) : (
            <div className="col-span-full text-center py-10 text-gray-400">
                No similar jobs found.
            </div>
            )}

        </div>

        </div>

        <section>
            <JobDetails></JobDetails>
        </section>
    </div>
    )
}

export default JobDetailedView