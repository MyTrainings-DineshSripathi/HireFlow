import App from '@/App'
import React from 'react'
import { Route, Routes } from 'react-router'
import JobDetailedView from '../JobDetails/JobDetailedView'
import BrowseJobs from '../BrowseJobsComponent/BrowseJobs'
import SignIn from '../Forms/SignIn'
import SignUp from '../Forms/SignUp'
import PostAJob from '../Forms/PostAJob'

function RoutesComponent() {
  return (
    <Routes>
        <Route path='' element={<App/>}></Route>
        <Route path='/job-details/:jobId' element={<JobDetailedView />}></Route>
        <Route path='/jobs' element={<BrowseJobs />}>
          <Route path=':jobId' element={<JobDetailedView />}></Route>
        </Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/post-job' element={<PostAJob />}></Route>
    </Routes>
  )
}

export default RoutesComponent