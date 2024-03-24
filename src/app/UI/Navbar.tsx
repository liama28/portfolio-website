'use client'
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)
    return (
        <div className="fixed w-full h-[70px] flex justify-between items-center px-4 bg-[#1A1A1A]/80 text-100 z-10">

            {/* Name */}
            <div className='pl-2 sm:pl-10 text-lg font-lato'>
                <Link
                    to="top" // Arbitrary value since react-scroll needs a 'to' prop, but we will use the 'onClick' event for scrolling
                    smooth={true}
                    duration={500}
                    className="text-lg font-lato cursor-pointer"
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        });
                    }}
                >
                    <span style={{ fontWeight: 250}}>Liam</span> <span style={{ fontWeight: 700}}>Anderson</span>
                </Link>
            </div>

            {/* Menu */}
            <ul className='hidden md:flex pr-10'>
                <Link
                    to="top"
                    smooth={true}
                    duration={500}
                    className='px-4 cursor-pointer font-semibold hover:text-[#66CCFF]'
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        });
                    }}
                >
                    <li>
                        Home
                    </li>
                </Link>

                <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    offset={-175}
                    className='px-4 cursor-pointer font-semibold hover:text-[#66CCFF]'
                >
                    About
                </Link>

                <Link
                    to="education"
                    smooth={true}
                    duration={500}
                    offset={-175}
                    className='px-4 cursor-pointer font-semibold hover:text-[#66CCFF]'
                >
                    Education
                </Link>

                <Link
                    to="skills"
                    smooth={true}
                    duration={500}
                    offset={-175}
                    className='px-4 cursor-pointer font-semibold hover:text-[#66CCFF]'
                >
                    Skills
                </Link>

                <Link
                    to="projects"
                    smooth={true}
                    duration={500}
                    offset={-175}
                    className='px-4 cursor-pointer font-semibold hover:text-[#66CCFF]'
                >
                    Projects
                </Link>

                <Link
                    to="experience"
                    smooth={true}
                    duration={500}
                    offset={-175}
                    className='px-4 cursor-pointer font-semibold hover:text-[#66CCFF]'
                >
                    Experience
                </Link>

                <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-175}
                    className='px-4 cursor-pointer font-semibold hover:text-[#66CCFF]'
                >
                    Contact
                </Link>

            </ul>
            
            {/* Mobile Menu */}
            <div onClick={handleClick} className='md:hidden cursor-pointer z-10 text-2xl hover:text-[#66CCFF]'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            <ul className={!nav ? 'hidden' : ' md:hidden absolute top-0 left-0 w-full h-screen bg-black/75 flex flex-col justify-center items-center'}>
                <Link
                    className='px-4 cursor-pointer py-5 text-3xl hover:text-[#66CCFF]'
                    to="top" // Arbitrary value since react-scroll needs a 'to' prop, but we will use the 'onClick' event for scrolling
                    smooth={true}
                    duration={500}
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        });
                        handleClick();
                    }}
                >
                    <li>
                        Home
                    </li>
                </Link>

                <Link
                    className='px-4 cursor-pointer py-5 text-3xl hover:text-[#66CCFF]'
                    to="about"
                    smooth={true}
                    duration={500}
                    offset={-175}
                    onClick={() => {
                        handleClick();
                    }}
                >
                    <li>
                        About
                    </li>
                </Link>

                <Link
                    className='px-4 cursor-pointer py-5 text-3xl hover:text-[#66CCFF]'
                    to="education"
                    smooth={true}
                    duration={500}
                    offset={-175}
                    onClick={() => {
                        handleClick();
                    }}
                >
                    <li>
                        Education
                    </li>
                </Link>

                <Link
                    className='px-4 cursor-pointer py-5 text-3xl hover:text-[#66CCFF]'
                    to="skills"
                    smooth={true}
                    duration={500}
                    offset={-175}
                    onClick={() => {
                        handleClick();
                    }}
                >
                    <li>
                        Skills
                    </li>
                </Link>

                <Link
                    className='px-4 cursor-pointer py-5 text-3xl hover:text-[#66CCFF]'
                    to="projects"
                    smooth={true}
                    duration={500}
                    offset={-175}
                    onClick={() => {
                        handleClick();
                    }}
                >
                    <li>
                        Projects
                    </li>
                </Link>

                <Link
                    className='px-4 cursor-pointer py-5 text-3xl hover:text-[#66CCFF]'
                    to="experience"
                    smooth={true}
                    duration={500}
                    offset={-175}
                    onClick={() => {
                        handleClick();
                    }}
                >
                    <li>
                        Experience
                    </li>
                </Link>

                <Link
                    className='px-4 cursor-pointer py-5 text-3xl hover:text-[#66CCFF]'
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-175}
                    onClick={() => {
                        handleClick();
                    }}
                >
                    <li>
                        Contact
                    </li>
                </Link>
            </ul>
            
        </div>
  )
}

export default Navbar