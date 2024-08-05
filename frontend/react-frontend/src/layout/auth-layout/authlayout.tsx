import React from 'react'
import Sidebar from '../sidebar'
import { Outlet } from 'react-router-dom'

const Authlayout = () => {
  return (
    <div>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Authlayout
