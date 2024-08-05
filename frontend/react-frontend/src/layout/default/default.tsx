import React from 'react'
import Sidebar from '../sidebar'
import { Outlet } from 'react-router-dom'
import Header from '../Header'

const Defaultlayout = () => {
  return (
    <div>
        <Header/>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Defaultlayout
