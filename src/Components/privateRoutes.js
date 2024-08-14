import React from 'react'  
import { Navigate, Outlet } from 'react-router-dom'  
import { useSelector } from 'react-redux'  
const PrivateRoutes = () => {
    const token = useSelector((state) => state.auth.token)
  if (token) {
    return <Outlet />  
  }
  else {
    return <Navigate to="/login" />  
  }
}

export default PrivateRoutes  