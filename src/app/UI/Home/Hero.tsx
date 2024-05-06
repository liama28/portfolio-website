"use client";

import { Link } from "react-scroll";
import React, { useState } from "react";
import { HiExternalLink, HiArrowNarrowRight } from "react-icons/hi";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import ParticlesContainer from "./ParticlesContainer";
import { ReactTyped } from "react-typed";

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="bg-200 w-full h-screen">
      {/* Particle Container */}
      <ParticlesContainer onParticlesLoaded={() => setIsLoaded(true)} />

      {/* --------------------- Text -------------------------- */}
      {/* Fade in content once particles are loaded */}
      <div
        className={`max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full relative z-1 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000 ease-in-out`}
      >
        {/* Heading */}
        <h1 className="text-100 text-5xl sm:text-8xl font-bold mb-3">
          Liam Anderson
        </h1>

        {/* Subheading / Title. Using React Typed */}
        <h2 className="text-primary-100 text-2xl sm:text-6xl font-bold mb-3">
          <ReactTyped
            strings={["Cybersecurity Engineer"]}
            typeSpeed={90}
            backSpeed={80}
            startWhenVisible={true}
          />
        </h2>

        {/* Short Blurb */}
        <p className="font-semibold text-200 py-4 mb-5 hidden sm:block">
          Welcome to my portfolio website! I've put this together to showcase my
          work and experience. Take a look around and please don't hesitate to
          contact me with any exciting opportunities.
        </p>

        {/* --------------------- Buttons -------------------------- */}
        {/* Resume */}
        <div className="flex gap-4">
          <a
            href="/Liam_Anderson_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex text-100 text-lg items-center font-semibold px-4 py-2.5 rounded-lg border-2 border-solid border-light hover:text-dark hover:bg-light"
          >
            Resume <HiExternalLink className="ml-1" />
          </a>

          {/* Smooth scroll down */}
          <Link
            className="group flex text-100 text-lg items-center font-semibold px-4 py-2.5 rounded-lg border-2 border-solid border-light hover:text-dark hover:bg-light cursor-pointer"
            to="about"
            smooth={true}
            duration={500}
            offset={-100}
          >
            View Work{" "}
            <HiArrowNarrowRight className="ml-1 group-hover:rotate-90 duration-300" />
          </Link>
        </div>

        {/* --------------------- Icon Links -------------------------- */}
        <div className="absolute bottom-0 left-0 sm:mb-14 mb-24 ml-8 flex gap-5">
          {/* GitHub */}
          <a
            href="https://github.com/liama28"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light hover:text-primary-100"
          >
            <FaGithub size={35} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/anderson-liam/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light hover:text-primary-100"
          >
            <FaLinkedinIn size={35} />
          </a>

          {/* Email */}
          <a
            href="mailto:liama28@gmail.com"
            className="text-light hover:text-primary-100"
          >
            <FaEnvelope size={35} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;