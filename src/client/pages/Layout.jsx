import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Navbar from '../component/navbar/navbar';
import Footer from '../component/footer/Footer';
import Sidebar from '../component/sidebar/sidebar';
const Layout = () => {
  return (
    <>
        <Navbar/>        
          <Outlet/>        
        <Footer/>    
    </>
  )
}

export default Layout