import { combineReducers, configureStore } from "@reduxjs/toolkit" 
import productReducer from './productSlice' 
import authSlice from "./authSlice" 
import cartSlice from "./cartSlice" 
import adminAuthSlice from "./adminAuthSlice" 
import allUserSlice from "./allUserSlice" 
import { persistStore, persistReducer } from 'redux-persist' 
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
    key: "root",
    storage,
} 

const rootReducer = combineReducers({
    products: productReducer,
    auth: authSlice,
    cart: cartSlice,
    adminAuth: adminAuthSlice,
    users: allUserSlice,
}) 

const persistedReducer = persistReducer(persistConfig, rootReducer) 
export const store = configureStore({
    reducer: persistedReducer,  
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false,
        }),
}) 

export const persistor = persistStore(store)  