import Image from "next/image";
import Link from "next/link";
import React from "react";
// import './globals.css';
import Navbar from "./UI/Navbar";
import Home from "./UI/Home/Hero";
import About from './UI/Home/About'
import Footer from './UI/Footer'
import Experience from './UI/Home/Experience'
import Projects from './UI/Home/Projects'
import Skills from './UI/Home/Skills'
import Education from "./UI/Home/Education";
import Contact from './UI/Home/Contact'

export default function Page() {
  return (
    <div className='bg-100 h-full'>
      <div>
        
        <Navbar />
        <Home />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
