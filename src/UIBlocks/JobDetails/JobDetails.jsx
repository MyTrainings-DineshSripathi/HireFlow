import { Check, CircleX, Cross } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router'

function JobDetails({jobData, updateJobData}) {
    console.log(jobData)

    const navigate = useNavigate()

    const closeDialog = () => {
        updateJobData({})
    }
    
  return (
    <>
        {jobData?.title && 
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">

            <div className="relative w-full max-w-lg rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl shadow-black/40 p-8 animate-[scaleIn_.3s_ease]">

                {/* Close Button */}
                <button
                    onClick={closeDialog}
                    className="absolute top-4 right-5 text-white/70 hover:text-white transition-transform hover:rotate-90"
                >
                    <CircleX />
                </button>

                {/* Header */}
                <div className="mb-6">
                <h2 className="text-2xl font-bold text-white">
                    {jobData.title}
                </h2>
                <p className="text-sm text-indigo-200/80 mt-1">
                    {jobData.company} • {jobData.location}
                </p>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 text-xs rounded-full bg-indigo-500/20 text-indigo-200">
                    {jobData.type}
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-indigo-500/20 text-indigo-200">
                    {jobData.experience}
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-indigo-500/20 text-indigo-200">
                    {new Date(jobData.postedAt).toDateString()}
                </span>
                </div>

                {/* Skills */}
                <div className="flex flex-col flex-wrap gap-2 mb-8">
                    <div className='text-indigo-200/80'>Expecting Skills</div>
                    <div className='flex flex-wrap gap-2 mb-8'>
                        {jobData.skills.map((skill, index) => (
                            <span
                            key={skill + index}
                            className="px-3 py-1 text-xs font-semibold rounded-full bg-white/10 border border-white/20 text-white"
                            >
                            {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* roles & response */}
                <div className="flex flex-col flex-wrap gap-2 mb-8">
                    <div className='text-indigo-200/80'>Roles & Responsibilities</div>
                    <div className='text-white'>
                        {jobData.rolesAndResponsibilities.map((rnr, index) => <p className='ms-1 flex gap-1' key={rnr+index}>
                            <span className='text-indigo-100/20'><Check></Check></span><span>{rnr}</span>
                        </p>)}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-3">
                <a href={jobData.url} target='_blank' className="px-5 py-2 rounded-xl text-sm font-semibold bg-gradient-to-br from-cyan-400 to-indigo-500 text-black hover:scale-105 transition-all shadow-lg shadow-indigo-500/30">
                    Apply Now
                </a>
                
                <button
                    onClick={() => {
                        navigate(`/job-details/${jobData.id}`)
                    }}
                    className="px-5 py-2 rounded-xl text-sm border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all">
                    Know More
                </button>
                </div>

            </div>
        </div>
        }
    </>
  )
}

export default JobDetails