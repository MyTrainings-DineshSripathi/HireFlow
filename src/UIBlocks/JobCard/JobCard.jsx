import { setSelectedJob } from '@/data/slices/JobSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

function JobCard({job}) {

    const dispatch = useDispatch()

    const handleJobCardClick = (job) => {
        console.log("clicked job : >>", job)
        dispatch(setSelectedJob(job))
    }
  return (
    <div
        onClick={() => handleJobCardClick(job)}
        key={job.id}
        className="
            group
            flex
            flex-col
            justify-between
            rounded-xl
            border
            border-border
            bg-card
            p-4 sm:p-5
            transition-all
            hover:-translate-y-1
            hover:shadow-lg
        "
        >
        {/* Title */}
        <h2 className="text-base sm:text-lg font-semibold leading-snug group-hover:text-primary">
            {job.title}
        </h2>

        {/* Meta */}
        <div className="mt-3 sm:mt-4 flex items-center justify-between gap-4 text-sm">
            <div className="space-y-0.5">
            <div className="font-medium">{job.company}</div>
            <div className="text-xs sm:text-sm text-muted-foreground">
                {job.location}
            </div>
            </div>

            <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold">
            {job.experience}
            </span>
        </div>
    </div>
  )
}

export default JobCard