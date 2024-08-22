import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useSelector } from 'react-redux'
export default function Header(props) {
    const token = useSelector((state) => state.auth.token)
    const isAuthenticated = useSelector((state) => state.adminAuth.isAuthenticated)
    return (

        <Navbar bg="light">
            <Container>
                <Link to="/" className='navbar-brand'>Online Shop</Link>
                <Nav className="me-auto" style={{ fontFamily: "Poppins" }}>
                    <Link to="/products" className='nav-link' >Products</Link>
                    {token ? (
                        <Link to="/login" className='nav-link' onClick={props.logout} >Logout</Link>
                    ) :
                        <Link to="/login" className='nav-link' >Login</Link>
                    }
                </Nav>
                <Link to="/cart" style={{ marginRight: "20px" }}>
                    <i className="fa-solid fa-cart-shopping text-dark" style={{ fontSize: 25, cursor: "pointer" }}></i>
                </Link>
                {isAuthenticated ? (
                    <Link to="/admin/dashboard" className='nav-link' >Dashboard</Link>
                ) :
                <Link to="/admin-login" className='nav-link' >Admin Login</Link>
                }
            </Container>
        </Navbar>
    )
}