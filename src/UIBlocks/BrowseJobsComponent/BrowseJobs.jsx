import Sidebar from './Sidebar'
import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Link } from 'react-router-dom'
// import { jobs } from '@/DummyData/Dummy'

function BrowseJobs() {
  const {jobs, searchedJobs, search} = useSelector(state => state.job)
  return (
    <main className="flex h-screen">
      
      {/* Left Section - Job List */}
      <>
        {search && <>
            <Sidebar 
              title={`Jobs found for ${search}`}
              jobs={searchedJobs}
            />
        </> || 
          <Sidebar 
            title={"All Jobs"}
            jobs={jobs}
          />}
      </>

      {/* Right Section - Job Details */}
      <section className="w-2/3 p-6 overflow-y-auto">
        <Outlet />
      </section>

    </main>
  )
}

export default BrowseJobs
