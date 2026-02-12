import App from '@/App'
import React from 'react'
import { Route, Routes } from 'react-router'
import JobDetailedView from '../JobDetails/JobDetailedView'
import BrowseJobs from '../BrowseJobsComponent/BrowseJobs'

function RoutesComponent() {
  return (
    <Routes>
        <Route path='' element={<App/>}></Route>
        <Route path='/job-details/:jobId' element={<JobDetailedView />}></Route>
        <Route path='/jobs' element={<BrowseJobs />}>
          <Route path=':jobId' element={<JobDetailedView />}></Route>
        </Route>
    </Routes>
  )
}

export default RoutesComponent