import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../../Redux/productSlice'
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Lottie from 'lottie-react'
import pendingAnimationData from '../../loading.json'
import rejectedAnimationData from '../../error.json'
import { addItemsToCart } from '../../Redux/cartSlice'
import { toast } from "react-toastify"

export default function Home() {

  const dispatch = useDispatch()
  const { products, status, error } = useSelector((state) => state.products)
  const token = useSelector((state) => state.auth.token)
  const [selectedCategroy, setSelectedCategory] = useState("")

  useEffect(() => {

    dispatch(fetchProducts())

  }, [dispatch])

  const handleCategoryChange = (category) => {
    setSelectedCategory(selectedCategroy === category ? "" : category)
  }

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

  const handleAddToCart = (product) => {
    if (!token) {
      toast.error("Login First", {
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

    else {
      dispatch(addItemsToCart(product))
      toast.success("Product Added to Cart", {
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
    }
  }

  const filterProduct = selectedCategroy ? products.filter(product => product.category.toLowerCase() === selectedCategroy) : products

  return (
    <>
      <div className="container my-5" style={{ fontFamily: "Poppins" }}>
        <h3 className="text-center" style={{ fontSize: "45px", color: "black" }}>Our Products</h3>
      </div>

      <div className="d-flex">
        <div className="container ms-5" style={{ position: "sticky", top: "50px", height: "fit-content", width: "20%" }}>
          <ul className="list-group">
            <h5>Choose Category</h5>
            {
              ["Men's Clothing", "Electronics", "Women's Clothing", "Jewelery"].map((category, index) => (
                <li className="list-group-item">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id={`checkbox${index + 1}`} checked={selectedCategroy === category.toLowerCase()} onChange={() => handleCategoryChange(category.toLowerCase())} />
                    <label className="form-check-label" htmlFor={`checkbox${index + 1}`}>{category}</label>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>

        <div className="d-flex row" style={{ fontFamily: "Poppins", width: "80%" }}>
          {filterProduct.map((product) => {
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
                    <Button variant="primary" style={{ width: "100%" }} onClick={() => handleAddToCart(product)} >Add To Cart</Button>
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