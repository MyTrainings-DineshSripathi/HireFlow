import { jobs } from "@/DummyData/Dummy"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    jobs : jobs, //jobs data
    selectedJob : {}, //selected Job
    search : "", // search text entered in searchbox
    searchedJobs : [],//filtered jobs based on search text (title, location, skill, company)
}

const JobSlice = createSlice({
    name : 'job/slice',
    initialState,
    reducers : {
        setSelectedJob : (state, action) => {
            state.selectedJob = action.payload
        },
        setSearch : (state, action) => {
            state.search = action.payload
            // filtering jobs from jobs data based on search text
            state.searchedJobs = state.jobs.filter((job) => job.title.toLowerCase().includes(state.search.toLowerCase()) || 
              job.skills.some((skill) => skill.toLowerCase().includes(state.search.toLowerCase()) ||
              job.location.toLowerCase().includes(state.search.toLowerCase()) ||
              job.company.toLowerCase().includes(state.search.toLowerCase())
            ))
        }
    }
})

export const { setSelectedJob, setSearch } = JobSlice.actions
export default JobSlice.reducer