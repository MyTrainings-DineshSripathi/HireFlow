import JobReducer from './JobSlice'
import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './userSlice'

export const store = configureStore({
    reducer : {
        job : JobReducer,
        user : UserReducer
    }
})