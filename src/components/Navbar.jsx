import React from 'react'
import logo from '../assets/images/image.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="border-b border-indigo-900">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
            {/* Лого и навигация вляво */}
                <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                    <Link to="/" className="flex flex-shrink-0 items-center mr-4">
                    <img className="h-10 w-auto" src={logo} alt="Logo" />
                    <span className="text-white text-xl font-bold ml-2"></span>
                    </Link>
                </div>

            {/* Навигационни линкове вдясно */}
                <div className="hidden md:flex md:items-center space-x-4">
                    <Link to="/" className="text-indigo-950 hover:bg-indigo-100 px-3 py-2 rounded-md text-sm font-medium">
                    Home
                    </Link>
                    <Link to="/view_all" className="text-indigo-950 hover:bg-indigo-100 px-3 py-2 rounded-md text-sm font-medium">
                    View All
                    </Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
