import { Outlet, useNavigate } from 'react-router-dom'
import {SideBar} from '../sidebar'
import { useAuth } from '../../hooks/useAuth'
import { useEffect } from 'react';

const Authlayout = () => {
  const navigate = useNavigate();
  const {accessToken} = useAuth();
  console.log(accessToken)

  useEffect(()=>{
    if (!accessToken || accessToken === undefined){
      navigate('/signin')
    }
  },[accessToken, navigate])

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <SideBar/>
      <Outlet/>
    </div>
  )
}

export default Authlayout
