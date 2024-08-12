import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import Login from "./Components/Login/Login";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element = { <Home /> } />
      <Route path="/products" element = { <Products /> } />
      <Route path="/cart" element = { <Cart /> } />
      <Route path="/login" element = { <Login /> } />
    </Routes>
    </BrowserRouter>
  );
}
