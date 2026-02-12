import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { jobs } from '@/DummyData/Dummy'

function BrowseJobs() {
  return (
    <main className="flex h-screen">
      
      {/* Left Section - Job List */}
      <section className="w-1/3 border-r overflow-y-auto p-4 bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">Available Jobs</h2>

        {jobs.map((job) => (
          <Link
            key={job.id}
            to={`${job.id}`}
            className="block mb-4 p-4 rounded-lg shadow hover:shadow-md transition bg-white"
          >
            <h3 className="font-semibold text-lg">{job.title}</h3>
            <p className="text-sm text-gray-600">{job.company}</p>
            <p className="text-sm text-gray-500">{job.location}</p>
          </Link>
        ))}
      </section>

      {/* Right Section - Job Details */}
      <section className="w-2/3 p-6 overflow-y-auto">
        <Outlet />
      </section>

    </main>
  )
}

export default BrowseJobs
