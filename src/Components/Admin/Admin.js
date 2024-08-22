import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import AllUser from './All_Users'
import AllProducts from './All_Products'
import NewUser from './Add_New_User'
import NewProduct from './Add_New_Product'

export default function Admin() {
    return (
        <div className='d-flex'>
            <div className="bg-light" style={{ position: "sticky", top: "50px", height: "100vh", width: "15%" }}>
                <Sidebar></Sidebar>
            </div>
            <div className='p-5' style={{ width: "85%" }}>
                <Routes>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="all-users" element={<AllUser />} />
                    <Route path="all-products" element={<AllProducts />} />
                    <Route path="add-new-user" element={<NewUser />} />
                    <Route path="add-new-product" element={<NewProduct />} />
                </Routes>
            </div>
        </div>
    )
}
