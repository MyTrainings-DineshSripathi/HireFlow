import { useState } from 'react'
import './App.css'
import { jobs } from './DummyData/Dummy'
import JobDetails from './UIBlocks/JobDetails/JobDetails'
import JobCard from './UIBlocks/JobCard/JobCard'
import { useDispatch, useSelector } from 'react-redux'
import JobGrid from './UIBlocks/JobGrid/JobGrid'

function App() {

  const {selectedJob, search} = useSelector(state => state.job)
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
            jobs={jobs.filter((job) => job.title.toLowerCase().includes(search.toLowerCase()) || 
              job.skills.some((skill) => skill.toLowerCase().includes(search.toLowerCase()) ||
              job.location.toLowerCase().includes(search.toLowerCase()) ||
              job.company.toLowerCase().includes(search.toLowerCase())
            ))}
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
