import React from 'react'
import { FaCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-gradient-to-r from-[#1B50E4] to-[#024588] py-3 text-200'>
            <p className='flex items-center px-4'>© Liam Anderson {new Date().getFullYear()}. {""}
                <a
                href="https://github.com/liama28/portfolio-website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-100 hover:text-blue-200 flex items-center"
                >
                 View source code   <FaGithub /> 
                </a>
            </p>
        </footer>
  )
}

export default Footer