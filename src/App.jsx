import { useState } from 'react'
import './App.css'
import { jobs } from './DummyData/Dummy'
import JobDetails from './UIBlocks/JobDetails/JobDetails'
import JobCard from './UIBlocks/JobCard/JobCard'
import { useDispatch, useSelector } from 'react-redux'

function App() {

  const {selectedJob} = useSelector(state => state.job)
  const dispatch = useDispatch()

  return (
    <>
      <section>
        <JobDetails
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
              <JobCard
                key={job.id}
                job={job}
              />
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
            <JobCard
              key={job.id}
              job={job}
            />
          ))}
        </div>
      </section>

    </>
  )
}

export default App
