import React from 'react'  
import { Link } from 'react-router-dom'  
import Container from 'react-bootstrap/Container'  
import Nav from 'react-bootstrap/Nav'  
import Navbar from 'react-bootstrap/Navbar'  
import { useSelector } from 'react-redux'  

export default function Header(props) {
    // console.log("kjhjgf", localStorage.getItem("authToken"))
    const token = useSelector((state) => state.auth.token)
    return (
        <Navbar bg="light">
            <Container>
                <Link to="/" className='navbar-brand'>Online Shop</Link>
                {token ? (
                    <>
                        <Nav className="me-auto" style={{ fontFamily: "Poppins" }}>
                            <Link to="/products" className='nav-link' >Products</Link>
                            <Link to="/login" className='nav-link' onClick={props.logout} >Logout</Link>
                        </Nav>
                        <Link to="/cart">
                            <i class="fa-solid fa-cart-shopping text-dark" style={{ fontSize: 25, cursor: "pointer" }}></i>
                        </Link>
                    </>
                ) :
                    <>
                        <Link to="/login" className='nav-link' >Login</Link>
                     </>

                }
            </Container>
        </Navbar>







    )
}
