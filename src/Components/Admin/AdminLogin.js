import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"
import { useDispatch, useSelector } from 'react-redux'
import { login, checkAdminAuth } from '../../Redux/adminAuthSlice'

export default function AdminLogin() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  useEffect(() => {
    dispatch(checkAdminAuth())
  }, [dispatch])

  const handleAdminSubmit = (e) => {
    e.preventDefault()
    if (username === "admin" && password === "admin") {
      dispatch(login({ username }))
      toast.success("Login Successfully", {
        style: {
          color: '#ffffff',
          fontFamily: 'Poppins',
          padding: '16px',
          marginTop: "35px"
        },
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
      navigate('/admin/dashboard')
    }
    else {
      toast.error("Invalid username or password", {
        style: {
          color: '#ffffff',
          fontFamily: 'Poppins',
          padding: '16px',
          marginTop: "35px",
        },
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      })
    }
  }

  return (
    <>
      {isAuthenticated  ? (
        <>
          <h3 className="text-center mt-5">You are already logged in</h3>
        </>
      ) :
        <>

          <div className="container" style={{ fontFamily: "Poppins" }}>
            <div className="row">
              <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div className="card border-0 shadow rounded-3 my-5">

                  <div className="card-body p-4 p-sm-5">
                    <h1 className="card-title text-center mb-5 fw-bold fs-2"> Admin Login</h1>
                    <form onSubmit={handleAdminSubmit}>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingUsername"
                          name="username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="Username"
                          required
                        />
                        <label htmlFor="floatingUsername">User Name</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="floatingPassword"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                          required
                        />
                        <label htmlFor="floatingPassword">Password</label>
                      </div>
                      <div className="d-grid">
                        <button type="submit" className="btn btn-primary btn-login text-uppercase fw-bold">Log In</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </>
  )
}
