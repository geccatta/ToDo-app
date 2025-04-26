import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-indigo-900 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <p className="text-white text-sm">© 2025 Created by Genadi Iliev. All rights reserved.</p>
                <div className="flex gap-4">
                    <FaGithub className="text-white text-2xl hover:text-indigo-300 cursor-pointer" 
                                onClick={() => window.open("https://github.com/geccatta")}></FaGithub>
                    <FaLinkedin className="text-white text-2xl hover:text-indigo-300 cursor-pointer" 
                                onClick={() => window.open("https://www.linkedin.com/in/geiliev/")}></FaLinkedin>
                                
                </div>
            </div>
        </footer>
    )
}

export default Footer
