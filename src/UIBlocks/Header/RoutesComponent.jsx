import App from '@/App'
import React from 'react'
import { Route, Routes } from 'react-router'
import JobDetailedView from '../JobDetails/JobDetailedView'

function RoutesComponent() {
  return (
    <Routes>
        <Route path='' element={<App/>}></Route>
        <Route path='/job-details/:jobId' element={<JobDetailedView />}></Route>
    </Routes>
  )
}

export default RoutesComponent