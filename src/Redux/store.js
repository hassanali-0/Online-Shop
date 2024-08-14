import { configureStore } from "@reduxjs/toolkit";
import productReducer from './productSlice'
import authSlice from "./authSlice";
const store = configureStore(
    {
        reducer : {
            products : productReducer,
            auth : authSlice

        }
    }
)

export default store