import React from 'react'
import { quantityIncrement, quantityDecrement, clearCart } from '../../Redux/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from "react-toastify"

export default function Cart() {

  const cartItems = useSelector(state => state.cart.items)
  const subTotal = useSelector (state => state.cart.subTotal)
  const token = useSelector((state) => state.auth.token)
  const dispatch = useDispatch()

  const increment = (item) => {
    dispatch(
      quantityIncrement(
        {
          id : item.id
        }
      )
    )
  }

  const decrement = (item) => {
    dispatch(
      quantityDecrement(
        {
          id : item.id
        }
      )
    )
  }

  const clearCartHandler = () => {
    toast.info("Cart Cleared", {
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
    dispatch(clearCart())
  }

  return (
    <>
      {!token ? (
        <div className="container mt-5">
          <h3 className="text-center" style={{ color: "black", fontFamily: "Poppins" }}>You need to Login to see item in Cart </h3>
        </div>
      ) :
        cartItems.length === 0 ? (
          <div className="container mt-5">
            <h3 className="text-center" style={{ color: "black", fontFamily: "Poppins" }}>Your Cart is Empty</h3>
          </div>
        ) :
          (
            <>
              <div className="container my-5">
                <h3 className="text-center" style={{ color: "black", fontFamily: "Poppins" }}>Shopping Cart</h3>
              </div>

              <div className="container" style={{ display: "flex", justifyContent: "center", fontFamily: "Poppins" }}>
                <table style={{ width: "100%", color: "black" }}>
                  <tr>
                    <td style={{ width: "40%" }}>Product</td>
                    <td style={{ textAlign: "end", width: "20%" }}>Price</td>
                    <td style={{ textAlign: "end", width: "20%" }}>Quantituy</td>
                    <td style={{ textAlign: "end", width: "20%" }}>Total</td>
                  </tr>
                </table>
              </div>

              <hr className="container" style={{ color: "black", width: "100%" }} />

              <div className="container" style={{ fontFamily: "Poppins" }}>
                {cartItems.map(item => {
                  return (
                    <>
                      <table className="mb-5" style={{ width: "100%", color: "black" }}>
                        <tr>
                          <td style={{ width: "40%" }}>
                            <div style={{ display: "flex" }}>
                              <img src={item.image} alt="" style={{ width: "7rem" }} />
                              <div style={{ marginLeft: "20px" }}>
                                <h5>{item.title}</h5>
                                <p>{item.category}</p>
                                <h6 className="text-danger" style={{ marginBottom: "0", cursor: "pointer" }} >Remove</h6>
                              </div>
                            </div>
                          </td>
                          <td style={{ width: "20%", textAlign: "end" }}>$ {item.price}</td>
                          <td style={{ position: "relative" }}>
                            <div style={{ border: "1px solid grey", borderRadius: "5px", width: "50%", padding: "10px", position: "absolute", right: 0, top: "55px" }}>
                              <button style={{ border: "none", outline: "none", backgroundColor: "transparent" }} onClick={()=> decrement(item)} >-</button>
                              <input type="text" style={{ border: "none", outline: "none", width: "80%", textAlign: "center" }} value={item.quantity} />
                              <button style={{ border: "none", outline: "none", backgroundColor: "transparent" }} onClick={() => increment(item)} >+</button>
                            </div>
                          </td>
                          <td style={{ width: "20%", textAlign: "end" }}>$ {item.totalPrice}</td>
                        </tr>
                      </table>
                    </>
                  )
                })
                }
              </div>

              <hr className="container" style={{ color: "black", width: "100%" }} />

              <div className="container mt-5" style={{ display: "flex", justifyContent: "space-between", color: "black", fontFamily: "Poppins" }}>
                <div>
                  <button style={{ border: "1px solid grey", borderRadius: "5px", backgroundColor: "transparent", padding: "10px", color: "grey" }} onClick={clearCartHandler}>Clear Cart</button>
                </div>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h4 style={{ fontWeight: 500 }}>Subtotal</h4>
                    <h4 style={{ fontWeight: 700 }}>$ {subTotal}</h4>
                  </div>
                  <p>Taxes and Shipping calculated at checkout</p>
                  <button className="bg-primary text-white" style={{ border: "none", borderRadius: "5px", width: "100%", padding: "10px 80px" }}>Checkout</button>
                  <br />
                  <Link to="/products"><button className="mt-3" style={{ backgroundColor: "transparent", border: "none" }}><i className="fa-solid fa-arrow-left me-2"></i>Continue Shopping</button></Link>
                </div>
              </div>
            </>
          )
      }
    </>
  )
}
