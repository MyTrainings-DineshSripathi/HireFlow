import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    selectedJob : {},
    search : ""
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
        }
    }
})

export const { setSelectedJob, setSearch } = JobSlice.actions
export default JobSlice.reducer