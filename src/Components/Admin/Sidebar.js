import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { toast } from "react-toastify"
import { useDispatch } from 'react-redux'
import { logout } from '../../Redux/adminAuthSlice'

export default function Sidebar() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleAdminLogout = (e) => {
        dispatch(logout())
        navigate('/admin-login')
        toast.success("Logout Successfully", {
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
    return (
        <>
            <Navbar className='bg-light' >
                <Nav className="flex-column p-3" style={{ fontFamily: "Poppins" }}>
                    <Link to='dashboard' className='nav-link' >Dashboard</Link>
                    <Link to='all-users' className='nav-link' >All Users</Link>
                    <Link to='all-products' className='nav-link' >All Products</Link>
                    <Link to='add-new-user' className='nav-link' >Add New User</Link>
                    <Link to='add-new-product' className='nav-link' >Add New Product</Link>
                    <Link to="/admin-login" className='nav-link' onClick={handleAdminLogout}>Log Out</Link>
                </Nav>
            </Navbar>
        </>
    )
}
