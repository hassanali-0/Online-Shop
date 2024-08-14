import React from "react"  
import { BrowserRouter, Route, Routes } from "react-router-dom"  
import Header from "./Components/Header/Header"  
import Home from "./Components/Home/Home"  
import Products from "./Components/Products/Products"  
import Cart from "./Components/Cart/Cart"  
import Login from "./Components/Login/Login"  
import { logout } from "./Redux/authSlice"  
import { useDispatch } from "react-redux"  
import PrivateRoutes from "./Components/privateRoutes"  
import 'bootstrap/dist/css/bootstrap.min.css'  
import './App.css'

export default function App() {
  
  const dispatch = useDispatch()
  const handleLogOut = () => {
    dispatch(logout())
  }
  return (
    <BrowserRouter>
    <Header logout = {handleLogOut} />
    <Routes>
      <Route element={ <PrivateRoutes />}>
      <Route path="/" element = { <Home /> } />
      <Route path="/products" element = { <Products /> } />
      <Route path="/cart" element = { <Cart /> } />
      </Route>
      <Route path="/login" element = { <Login /> } />
    </Routes>
    </BrowserRouter>
  )  
}
