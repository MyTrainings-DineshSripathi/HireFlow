import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    selectedJob : {}
}

const JobSlice = createSlice({
    name : 'job/slice',
    initialState,
    reducers : {
        setSelectedJob : (state, action) => {
            state.selectedJob = action.payload
        }
    }
})

export const { setSelectedJob } = JobSlice.actions
export default JobSlice.reducer