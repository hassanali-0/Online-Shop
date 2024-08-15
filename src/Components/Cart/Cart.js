import React from 'react'
import { Link } from 'react-router-dom'

export default function Cart() {
  return (

    <>

      <div className="container mt-5">
        <h3 className="text-center" style={{ fontSize: "45px", color: "black", fontFamily: "Poppins" }}>Your Cart is Empty</h3>
      </div>

      <div className="container my-5">
        <h3 className="text-center" style={{ fontSize: "45px", color: "black", fontFamily: "Poppins" }}>Shopping Cart</h3>
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
        <table className="mb-3" style={{ width: "100%", color: "black" }}>
          <tr>
            <td style={{ width: "40%" }}>
              <div style={{ display: "flex" }}>
                <img src='https://globexoutreach.webbrother.pk/wp-content/uploads/2024/08/iphone12.jpg' alt="" style={{ width: "7rem" }} />
                <div style={{ marginLeft: "20px" }}>
                  <h5>hi</h5>
                  <p>hi</p>
                  <h6 className="text-danger" style={{ marginBottom: "0", cursor: "pointer" }} >Remove</h6>
                </div>
              </div>
            </td>
            <td style={{ width: "20%", textAlign: "end" }}>$ 20</td>
            <td style={{ position: "relative" }}>
              <div style={{ border: "1px solid grey", borderRadius: "5px", width: "50%", padding: "10px", position: "absolute", right: 0, top: "46px" }}>
                <button style={{ border: "none", outline: "none", backgroundColor: "transparent" }} >-</button>
                <input type="text" style={{ border: "none", outline: "none", width: "80%", textAlign: "center" }} />
                <button style={{ border: "none", outline: "none", backgroundColor: "transparent" }} >+</button>
              </div>
            </td>
            <td style={{ width: "20%", textAlign: "end" }}>$ 20</td>
          </tr>
        </table>
      </div>

      <hr className="container" style={{ color: "black", width: "100%" }} />

      <div className="container mt-5" style={{ display: "flex", justifyContent: "space-between", color: "black", fontFamily: "Poppins" }}>
        <div>
          <button style={{ border: "1px solid grey", borderRadius: "5px", backgroundColor: "transparent", padding: "10px", color: "grey" }} >Clear Cart</button>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4 style={{ fontWeight: 500 }}>Subtotal</h4>
            <h4 style={{ fontWeight: 700 }}>$ 20</h4>
          </div>
          <p>Taxes and Shipping calculated at checkout</p>
          <button className="bg-primary text-white" style={{ border: "none", borderRadius: "5px", width: "100%", padding: "10px 80px" }}>Checkout</button>
          <br />
          <Link to="/products"><button className="mt-3" style={{ backgroundColor: "transparent", border: "none" }}><i class="fa-solid fa-arrow-left me-2"></i>Continue Shopping</button></Link>
        </div>
      </div>
    </>
  )
}
