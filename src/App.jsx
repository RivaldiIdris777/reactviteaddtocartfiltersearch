import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./client/pages/Layout";
import Home from './client/pages/Home';
import Detailsproduct from './client/pages/Detailsproduct';
import Cart from './client/pages/Cart';
import Payment from './client/pages/Payment';
import Login from './client/pages/Login';
import Register from './client/pages/Register';
import ForgotPassword from './client/pages/ForgotPassword';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>} />
              <Route path="/:slug" element={<Detailsproduct />} />
              <Route path="cart" element={<Cart />} />
              <Route path="payment" element={<Payment />} />              
            </Route>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forgotpassword" element={<ForgotPassword/>} />
        </Routes>      
      </BrowserRouter>
    </>
  )
}

export default App