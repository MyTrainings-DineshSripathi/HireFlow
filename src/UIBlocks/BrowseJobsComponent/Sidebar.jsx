import { useFormatPostedTime } from '@/CustomHooks/CustomTimeFormat'
import React from 'react'
import { Link } from 'react-router'

function Sidebar({title, jobs}) {
  return (
    <section className="w-1/3 border-r overflow-y-auto p-4 bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>

        {jobs.map((job) => (
            <Link
                key={job.id}
                to={`${job.id}`}
                className="block mb-4 p-4 rounded-lg shadow hover:shadow-md transition bg-white"
            >
                <h3 className="font-semibold text-lg">{job.title}</h3>
                <p className="text-sm text-gray-600">{job.company}</p>
                <p className="text-sm text-gray-500">{job.location}</p>
                <p className="text-xs text-gray-400 mt-2">
                    Posted {useFormatPostedTime(job.postedAt)} •{" "}
                    {new Date(job.postedAt).toDateString()}
                </p>
            </Link>
        ))}
    </section>
  )
}

export default Sidebar