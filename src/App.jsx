import { useState } from 'react'
import './App.css'
import { jobs } from './DummyData/Dummy'
import JobDetails from './UIBlocks/JobDetails/JobDetails'

function App() {

  const [selectedJob, setSelectedJob] = useState({})

  const handleJobCardClick = (job) => {
    setSelectedJob(job)
  }

  return (
    <>
      <section>
        <JobDetails
          jobData = {selectedJob}
          updateJobData = {setSelectedJob}
        ></JobDetails>
      </section>
      <section className="mt-10 sm:mt-12 p-4">
        <h1 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold tracking-tight">
          Recent Jobs
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
          {jobs
            .filter(
              (job) =>
                new Date(job.postedAt) >=
                new Date("2026-01-18T06:40:00Z")
            )
            .map((job) => (
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
            ))}
        </div>
      </section>
      <section className="mt-10 sm:mt-14">
        {/* Section Header */}
        <div className="mb-5 sm:mb-7 flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
            All Jobs
          </h1>

          {/* Optional: future filter / count slot */}
          <span className="hidden sm:block text-sm text-muted-foreground">
            {jobs.length} open positions
          </span>
        </div>

        {/* Jobs Grid */}
        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >
          {jobs.map((job) => (
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
                duration-200
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              {/* Job Title */}
              <h2 className="text-base sm:text-lg font-semibold leading-snug group-hover:text-primary transition-colors">
                {job.title}
              </h2>

              {/* Company + Meta */}
              <div className="mt-3 sm:mt-4 flex items-center justify-between gap-4 text-sm">
                <div className="space-y-0.5">
                  <div className="font-medium">
                    {job.company}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {job.location}
                  </div>
                </div>

                {/* Experience Badge */}
                <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                  {job.experience}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </>
  )
}

export default App
