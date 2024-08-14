import React, { useState } from "react" 
import { useDispatch, useSelector } from "react-redux" 
import { loginUser } from "../../Redux/authSlice" 
import { useNavigate } from "react-router-dom" 

export default function Login() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { status, error } = useSelector((state) => state.auth)

  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('') 

  const handleSubmit = (e) => {
    e.preventDefault() 
    dispatch(loginUser({ username, password }))
      .then((action) => {
        if (loginUser.fulfilled.match(action)) {
          navigate('/') 
        }
      })
  }

  return (
    <div className="container" style={{ fontFamily: "Poppins" }}>
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              <h1 className="card-title text-center mb-5 fw-bold fs-2">Log In</h1>
              <form onSubmit={handleSubmit}>
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
                  <button
                    type="submit"
                    className="btn btn-primary btn-login text-uppercase fw-bold"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Logging in...' : 'Log In'}
                  </button>
                </div>
                {status === 'failed' && <p className="text-danger mt-2">Error: {error}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) 
}
