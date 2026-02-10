import JobReducer from './JobSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer : {
        job : JobReducer
    }
})