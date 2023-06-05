import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <React.Fragment>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </React.Fragment>
  )
}

export default Layout