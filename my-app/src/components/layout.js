import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Play from './Play'
import Sidebar from './Sidebar'
const Layout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Play />
      <Outlet />
    </>
  )
}

export default Layout