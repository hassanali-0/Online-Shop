import React from 'react'
import { useSelector } from 'react-redux'

export default function Dashboard() {
  const { users } = useSelector((state) => state.users)
  const { products } = useSelector((state) => state.products)


  return (
    <>

      {/* ---------- Account ---------- */}

      <div className='mx-5 mbl-margin'>
        <h2 style={{ margin: "1.25rem 0" }}>DashBoard</h2>
        <h4 style={{ marginBottom: '1.5rem' }}>Accounts</h4>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>

          <div className='text-dark text-decoration-none'>
            <div style={{ boxShadow: "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)", borderRadius: "4px", padding: "20px" }}>
              <div className="d-flex justify-content-between align-items-center">
                <div style={{width: "50%"}}>
                  <h1>{users.length}</h1>
                </div>
                <div style={{width: "50%", textAlign: "end"}}>
                  <i class="fa-solid fa-users" style={{color: "black", fontSize: "240%"}}></i>
                </div>
              </div>
              <p className='mt-2'>Total Accounts</p>
            </div>
          </div>

          {/* <div className='text-dark text-decoration-none'>
            <div className="mx-4" style={{ boxShadow: "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)", borderRadius: "4px", padding: "20px" }}>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h1>{users.length}</h1>
                </div>
                <div>
                  <img src={Active} alt="" />
                </div>
              </div>
              <p>Active Accounts</p>
            </div>
          </div>

          <div className='text-dark text-decoration-none'>
            <div style={{ boxShadow: "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)", borderRadius: "4px", padding: "20px" }}>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h1>0</h1>
                </div>
                <div>
                  <img src={Blocked} alt="" />
                </div>
              </div>
              <p>Blocked Accounts</p>
            </div>
          </div> */}

        </div>
      </div>

      {/* ---------- Products ---------- */}

      <div className='mx-5 mbl-margin'>
        <h4 style={{ margin: '1.5rem 0' }}>Products</h4>
        <div className="parent" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>

        <div className='text-dark text-decoration-none'>
            <div style={{ boxShadow: "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)", borderRadius: "4px", padding: "20px" }}>
              <div className="d-flex justify-content-between align-items-center">
                <div style={{width: "50%"}}>
                  <h1>{products.length}</h1>
                </div>
                <div style={{width: "50%", textAlign: "end"}}>
                  <i class="fa-solid fa-boxes-stacked" style={{color: "black", fontSize: "240%"}}></i>
                </div>
              </div>
              <p className='mt-2'>Total Products</p>
            </div>
          </div>

          {/* <div className='text-dark text-decoration-none'>
            <div className="mx-4" style={{ boxShadow: "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)", borderRadius: "4px", padding: "20px" }}>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h1>25</h1>
                </div>
                <div>
                  <img src={Active} alt="" />
                </div>
              </div>
              <p>Active Accounts</p>
            </div>
          </div>

          <div className='text-dark text-decoration-none'>
            <div style={{ boxShadow: "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)", borderRadius: "4px", padding: "20px" }}>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h1>25</h1>
                </div>
                <div>
                  <img src={Blocked} alt="" />
                </div>
              </div>
              <p>Blocked Accounts</p>
            </div>
          </div> */}

        </div>
      </div>

    </>
  )
}
