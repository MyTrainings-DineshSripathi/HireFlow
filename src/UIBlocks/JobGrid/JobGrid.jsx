import React from 'react'
import JobCard from '../JobCard/JobCard'

function JobGrid({title, jobs}) {
  return (
    <section className="mt-10 sm:mt-12 p-4">
        <h1 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold tracking-tight">
            {title}
        </h1>
        <div
            className="
            p-1
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            "
        >
            {jobs.map((job) => (
                <JobCard
                    key={job.id}
                    job={job}
                />
            ))}
        </div>
    </section>
  )
}

export default JobGrid