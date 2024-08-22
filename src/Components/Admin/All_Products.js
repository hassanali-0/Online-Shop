import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../../Redux/productSlice'
import Card from "react-bootstrap/Card"
import Lottie from 'lottie-react'
import pendingAnimationData from '../../loading.json'
import rejectedAnimationData from '../../error.json'

export default function Home() {

  const dispatch = useDispatch()
  const { products, status, error } = useSelector((state) => state.products)

  useEffect(() => {

    dispatch(fetchProducts())

  }, [dispatch])


  if (status === "Loading") {
    return (
      <>
        <div className='d-flex justify-content-center align-items-center' style={{ height: "90vh" }}>
          <Lottie animationData={pendingAnimationData} autoplay={true} loop={true} style={{ width: "15%", height: "15%" }} />
          <p>Loading...</p>
        </div>
      </>
    )
  }

  if (status === "Failed") {
    return (
      <>
        <div className='d-flex justify-content-center align-items-center' style={{ height: "90vh" }}>
          <Lottie animationData={rejectedAnimationData} autoplay={true} loop={true} style={{ width: "15%", height: "15%" }} />
          <p><strong>Error:</strong>  {error}</p>
        </div>
      </>
    )
  }

  return (
    <>
      <div className='ms-5 mbl-margin' >
        <h2 style={{ margin: "1.25rem 0" }}>Products</h2>
        <div className="d-flex row" style={{ fontFamily: "Poppins" }}>
          {products.map((product) => {
            return (
              <>
                <Card style={{ width: "30rem", border: "none" }} className="mx-2 mb-5 p-3">
                  <Card.Img variant="top" src={product.image} style={{ width: "15rem", height: '15rem' }} />
                  <Card.Body>
                    <Card.Title style={{ fontSize: "17px", fontWeihgt: 700 }}>{product.title}</Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: 600 }}>Category:</span>
                      <span style={{ fontWeight: 600, textTransform: "capitalize" }}> {product.category}</span>
                    </Card.Text>
                    <Card.Text style={{ fontSize: "20px" }}>
                      <span style={{ fontWeight: 600 }}>Price:</span>
                      <span style={{ fontWeight: 600 }}> $ {product.price}</span>
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