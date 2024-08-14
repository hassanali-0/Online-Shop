import { createSlice, createAsyncThunk } from '@reduxjs/toolkit' 

const initialState = {
    user: null,
    token: null,
    status: 'idle',
    error: null,
} 

export const loginUser = createAsyncThunk('auth/loginUser', async (thunkAPI) => {
    try {
        const response = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: "mor_2314",
                password: "83r5^_"
            }),
        })

        if (!response.ok) {
            const errorData = await response.json() 
            throw new Error(errorData.message || 'Login failed') 
        }

        const data = await response.json() 
        return data 
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message) 
    }
}
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.status = 'idle'
            state.token = null
            localStorage.removeItem('authToken') 
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.user = action.payload
                state.token = action.payload.token
                localStorage.setItem('authToken', action.payload.token)
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    }
})

export const { logout } = authSlice.actions
export default authSlice.reducer