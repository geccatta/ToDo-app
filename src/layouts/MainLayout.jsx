import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Navbar/>
      </div>
      <div className='flex-1'>
        <Outlet/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default MainLayout
