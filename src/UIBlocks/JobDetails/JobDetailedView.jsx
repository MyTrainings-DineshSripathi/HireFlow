import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { jobs } from '@/DummyData/Dummy'
import { Building } from 'lucide-react'

function JobDetailedView() {
    const {jobId} = useParams()

    const job = jobs.find((job) => job.id == jobId)

    const similarJobs = jobs.filter((jobData) => (jobData.title == job.title && jobData.id != job.id))

    console.log(similarJobs)

    console.log(job)

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

                    <p className="text-sm mt-1">
                    {job.location} • {job.experience} • {job.type}
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
                    Visit Company Website →
                </a>
                </div>

            </div>

        </div>
        <div>
            <h1>Similar jobs</h1>
        </div>
    </div>
    )
}

export default JobDetailedView