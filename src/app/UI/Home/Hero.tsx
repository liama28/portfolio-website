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
    <div className="bg-100 w-full h-screen">
      <ParticlesContainer onParticlesLoaded={() => setIsLoaded(true)} />
      <div
        className={`max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full relative z-1 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000 ease-in-out`}
      >
        <h1 className="text-200 text-5xl sm:text-8xl font-bold mb-2">
          Liam Anderson
        </h1>
        <h2 className="text-[#66CCFF] text-3xl sm:text-6xl font-bold mb-2">
          <ReactTyped
            strings={["Cybersecurity Engeer"]}
            typeSpeed={80}
            backSpeed={80}
            startWhenVisible={true}
          />
        </h2>
        <p className="text-200 py-4 max-w-[700px] mb-4">
          blah blah blah blah blah blah blah blah blah
        </p>
        <div className="flex gap-4">
          <a
            href="/Liam_Anderson_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex text-200 text-lg items-center font-semibold px-4 py-2.5 rounded-lg border-2 border-solid border-white hover:text-black hover:bg-white"
          >
            Resume <HiExternalLink className="ml-1" />
          </a>
          <Link 
            className="group flex text-200 text-lg items-center font-semibold px-4 py-2.5 rounded-lg border-2 border-solid border-white hover:text-black hover:bg-white"
            to="about"
            smooth={true}
            duration={500}
            offset={-175}
          >
            View Work{" "}
            <HiArrowNarrowRight className="ml-1 group-hover:rotate-90 duration-300" />
          </Link>
        </div>

        {/* Icon container */}
        <div className="absolute bottom-0 left-0 mb-14 ml-8 flex gap-5">
          <a
            href="https://github.com/liama28"
            target="_blank"
            rel="noopener noreferrer"
            className="text-200 hover:text-[#66CCFF]"
          >
            <FaGithub size={35} />
          </a>
          <a
            href="https://www.linkedin.com/in/anderson-liam/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-200 hover:text-[#66CCFF]"
          >
            <FaLinkedinIn size={35} />
          </a>
          <a
            href="mailto:liama28@gmail.com"
            className="text-200 hover:text-[#66CCFF]"
          >
            <FaEnvelope size={35} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
