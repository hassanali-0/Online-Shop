import React from "react";

export default function Login() {
  return (
    <>
      <div className="container" style={{ fontFamily: "Poppins" }}>
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h1 className="card-title text-center mb-5 fw-bold fs-2">
                  Log In
                </h1>
                <form action="">
                  <div className="form-floating mb-3">
                    <input
                      type="name"
                      class="form-control"
                      id="floatingInput email"
                      name="username"
                      placeholder=""
                      required
                    />
                    <label htmlFor="floatingInput">User Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      class="form-control"
                      id="floatingPassword password"
                      name="password"
                      placeholder=""
                      required
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-primary btn-login text-uppercase fw-bold">
                      Log In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
