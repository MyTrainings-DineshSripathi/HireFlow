import { createSlice } from "@reduxjs/toolkit";

const userData =  {
    isLoggedIn : false,
    role : null,
}

const UserSlice = createSlice({
    name : 'user/slice',
    initialState : userData, 
    reducers : {
        setUserData : (state, action) => {
            state.isLoggedIn = action.payload.isLoggedIn
            state.role = action.payload.role
        }
    }
})


export const {setUserData} = UserSlice.actions
export default UserSlice.reducer