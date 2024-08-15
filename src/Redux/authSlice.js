import { createSlice, createAsyncThunk } from '@reduxjs/toolkit' 

const initialState = {
    user: null,
    token: localStorage.getItem('authToken') || null,
    status: 'idle',
    error: null,
}

export const loginUser = createAsyncThunk('auth/loginUser', async (credentials, thunkAPI) => {
    try {
        const response = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials)
        })

        if (!response.ok) {
            const errorData = await response.json() 
            throw new Error(errorData.message) 
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
        },
        setToken: (state, action) => {
            state.token = action.payload
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

export const { logout, setToken } = authSlice.actions
export default authSlice.reducer