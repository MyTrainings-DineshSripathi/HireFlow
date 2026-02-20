// import { useState } from 'react'
import './App.css'
// import { jobs } from './DummyData/Dummy'
import JobDetails from './UIBlocks/JobDetails/JobDetails'
// import JobCard from './UIBlocks/JobCard/JobCard'
import { useDispatch, useSelector } from 'react-redux'
import JobGrid from './UIBlocks/JobGrid/JobGrid'

function App() {

  const {selectedJob, search, jobs, searchedJobs} = useSelector(state => state.job)
  const dispatch = useDispatch()

  const recentJobs = jobs.filter(
                      (job) =>
                        new Date(job.postedAt) >=
                        new Date("2026-01-18T06:40:00Z")
                    )

  console.log(search)
  return (
    <>
      <section>
        <JobDetails
        ></JobDetails>
      </section>
      {search && <section>
          <JobGrid 
            title={`Jobs found for ${search}`}
            jobs={searchedJobs}
          />
      </section> || <>
        <JobGrid 
          title={"Recent Jobs"}
          jobs = {recentJobs}
        />
        <JobGrid 
          title={"All Jobs"}
          jobs={jobs}
        />
      </>}
    </>
  )
}

export default App
