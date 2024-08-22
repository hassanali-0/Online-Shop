import React from 'react'

export default function Add_New_User() {

  return (
    <>
      <div className='ms-5 mbl-margin'>

        <h2 style={{ margin: "1.25rem 0" }}>Add New User</h2>

        <form>

          <div className='d-flex' style={{ width: "100%" }}>

            <div className="mb-3" style={{ width: "50%" }}>
              <label for="firstName" className="form-label">First Name</label>
              <input type="text" className="form-control" id="firstName" />
            </div>

            <div className="mb-3 ms-5" style={{ width: "50%" }}>
              <label for="lastName" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="lastName" />
            </div>

          </div>

          <div className='d-flex' style={{ width: "100%" }}>

            <div className="mb-3" style={{ width: "50%" }}>
              <label for="username" className="form-label">Username</label>
              <input type="text" className="form-control" id="username" />
            </div>

            <div className="mb-3 mx-5" style={{ width: "50%" }}>
              <label for="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" />
            </div>

            <div className="mb-3" style={{ width: "50%" }}>
              <label for="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" />
            </div>

          </div>

          <button type="submit" className="btn btn-primary">Submit</button>

        </form>

      </div>
    </>
  )
}
