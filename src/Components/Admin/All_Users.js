import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../../Redux/allUserSlice'
import Lottie from 'lottie-react'
import pendingAnimationData from '../../loading.json'
import rejectedAnimationData from '../../error.json'
import Card from "react-bootstrap/Card"

export default function All_Users() {

  const dispatch = useDispatch()
  const { users, status, error } = useSelector((state) => state.users)
  console.log(users.length)
  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  if (status === "loading") {
    return (
      <>
        <div className="d-flex justify-content-center align-items-center" style={{ height: "90vh" }}>
          <Lottie animationData={pendingAnimationData} autoplay={true} loop={true} style={{ width: "15%", height: "15%" }} />
          <p>Loading...</p>
        </div>
      </>
    )
  }

  if (status === 'failed') {
    return (
      <>
        <div className="d-flex justify-content-center align-items-center" style={{ height: "90vh" }}>
          <Lottie animationData={rejectedAnimationData} autoplay={true} loop={true} style={{ width: "15%", height: "15%" }} />
          <p><strong>Error:</strong>  {error}</p>
        </div>
      </>
    )
  }

  return (
    <>
      <div className='ms-5 mbl-margin' >
        <h2 style={{ margin: "1.25rem 0" }}>Users</h2>
        <div className="d-flex row" style={{ fontFamily: "Poppins" }}>
          {users.map((user) => {
            return (
              <>
                <Card style={{ width: "30rem", border: "none" }} className="mx-2 mb-5 p-3">
                  <Card.Body>

                    <Card.Text>
                      <span style={{ fontWeight: 600 }}>ID:</span>
                      <span className='text-primary' style={{ fontWeight: 600, textTransform: "capitalize" }}> {user.id}</span>
                    </Card.Text>

                    <Card.Text>
                      <span style={{ fontWeight: 600 }}>First Name:</span>
                      <span className=' text-primary' style={{ fontWeight: 600, textTransform: "capitalize" }}> {user.name.firstname}</span>
                    </Card.Text>

                    <Card.Text>
                      <span style={{ fontWeight: 600 }}>Last Name:</span>
                      <span className=' text-primary' style={{ fontWeight: 600, textTransform: "capitalize" }}> {user.name.lastname}</span>
                    </Card.Text>

                    <Card.Text>
                      <span style={{ fontWeight: 600 }}>Username:</span>
                      <span className=' text-primary' style={{ fontWeight: 600, textTransform: "capitalize" }}> {user.username}</span>
                    </Card.Text>

                    <Card.Text>
                      <span style={{ fontWeight: 600 }}>Eamil:</span>
                      <span className=' text-primary' style={{ fontWeight: 700 }}> {user.email}</span>
                    </Card.Text>

                    <Card.Text>
                      <span style={{ fontWeight: 600 }}>Password:</span>
                      <span className=' text-primary' style={{ fontWeight: 700 }}> {user.password}</span>
                    </Card.Text>

                  </Card.Body>
                </Card>
              </>
            )
          })
          }
        </div>
      </div>
    </>
  )
}
