import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import Login from "./Components/Login/Login";
import AdminLogin from "./Components/Admin/AdminLogin";
import Admin from "./Components/Admin/Admin";
import { logout, setToken } from "./Redux/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify"
import { clearCart } from "./Redux/cartSlice";
import PrivateRoutes from "./Components/privateRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export default function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    if (token) {
      dispatch(setToken(token))
    }
  }, [dispatch])

  const handleLogOut = () => {
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
    dispatch(logout())
    dispatch(clearCart())
  }

  return (
    <BrowserRouter>
      <Header logout={handleLogOut} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/admin/*" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
