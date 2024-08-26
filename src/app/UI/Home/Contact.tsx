"use client";

import React, { useState } from "react";
import { FaCopy, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleEmailClick = () => {
    window.location.href = "mailto:liam@liama.dev";
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/anderson-liam/", "_blank");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("liam@liama.dev");
    toast.success("Email copied to clipboard!", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleMouseDown = () => {
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
  };

  return (
    <div
      id="contact"
      className="py-20 bg-gradient-to-r from-[#1B50E4] to-[#024588]"
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h2 className="text-5xl sm:text-6xl font-semibold mb-24 text-center text-light">
          Contact Me
        </h2>
        <div className="flex items-center justify-center mb-11">
          <button
            className="rounded-l-full max-sm:rounded-full flex sm:text-3xl text-2xl items-center font-semibold px-4 py-2.5 border-2 border-solid border-light text-light cursor-pointer hover:bg-light hover:text-dark hover:border-white"
            onClick={handleEmailClick}
          >
            <IoMail className="mr-2" /> liam@liama.dev
          </button>
          <button
            className={`hidden sm:block rounded-r-full sm:text-3xl text-2xl text-light px-4 sm:py-[13px] py-[14px] border-2 border-solid border-light cursor-pointer ${
              isClicked ? "" : "hover:bg-light hover:text-dark hover:border-white"
            }`}
            onClick={copyToClipboard}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          >
            <FaCopy />
          </button>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="rounded-full flex sm:text-3xl text-2xl items-center font-semibold px-4 py-2.5 border-2 border-solid border-light text-light cursor-pointer hover:bg-light hover:text-dark hover:border-white"
            onClick={handleLinkedInClick}
          >
            <FaLinkedin className="mr-2" /> /Anderson-Liam
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;