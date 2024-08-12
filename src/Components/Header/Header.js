import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function Header() {
  return (
    <Navbar bg="light">
    <Container>
        <Link to="/" className='navbar-brand'>Online Shop</Link>
        <Nav className="me-auto" style={{ fontFamily: "Poppins" }}>
            {/* <Link to="/" className='nav-link'>Home</Link> */}
            <Link to="/products" className='nav-link' >Products</Link>
            <Link to="/login" className='nav-link' >Login</Link>
        </Nav>
        {/* <Badge badgeContent={1} color="primary"> */}
            <Link to="/cart">
                <i class="fa-solid fa-cart-shopping text-dark" style={{fontSize: 25, cursor:"pointer"}}></i>
            </Link>
        {/* </Badge> */}
    </Container>
</Navbar>







  )
}
