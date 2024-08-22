import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAuthenticated : false,
    user : null
}
const adminAuth = createSlice(
    {
        name : "adminAuth",
        initialState,
        reducers : {
            login: (state, action) => {
                state.isAuthenticated = true
                state.user = action.payload.username
                localStorage.setItem('adminAuth', JSON.stringify({ username: action.payload.username }))
            },
            logout: (state) => {
                state.isAuthenticated = false
                state.user = null
                localStorage.removeItem('adminAuth')
            },
            checkAdminAuth: (state) => {
                const adminAuth = JSON.parse(localStorage.getItem('adminAuth'))
                if (adminAuth) {
                    state.isAuthenticated = true
                    state.username = adminAuth.username
                }
            }
        }
    }
)

export const { login, logout, checkAdminAuth } = adminAuth.actions
export default adminAuth.reducer