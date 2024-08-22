import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchUser = createAsyncThunk('users/fetchAllUsers', async () => {
    const response = await fetch('https://fakestoreapi.com/users')
    const data = await response.json()
    return data
})

const initialState = {
    users : [],
    status : 'idle',
    error : null
}

const allUserSlice = createSlice(
    {
        name : "users",
        initialState,
        reducers : {},
        extraReducers : (builder) => {
            builder
                .addCase(fetchUser.pending, (state) => {
                    state.status = "loading"
                })
                .addCase(fetchUser.fulfilled, (state,action) => {
                    state.status = "succeeded"
                    state.users = action.payload
                })
                .addCase(fetchUser.rejected, (state,action) => {
                    state.status = "failed"
                    state.error = action.error.message
                    
                })
        }
    }
)

export default allUserSlice.reducer