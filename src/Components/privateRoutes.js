import React from 'react'  
import { Navigate, Outlet } from 'react-router-dom'  
// import { useSelector } from 'react-redux'  

const PrivateRoutes = () => {

    // const token = useSelector((state) => state.auth.token)

  if (localStorage.getItem('adminAuth')) {
    return <Outlet />
  }
  else if (localStorage.getItem('authToken')) {
    return <Navigate to="/admin-login" />
  }
  else {
    return <Navigate to="/admin-login" />
  }
}

export default PrivateRoutes  