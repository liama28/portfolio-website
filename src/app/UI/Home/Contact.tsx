"use client";
import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleEmailClick = () => {
    window.location.href = "mailto:Liama28@gmail.com";
  };

  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/anderson-liam/", "_blank");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("Liama28@gmail.com");
    toast.success("Email copied to clipboard!", {
      position: "top-center",
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
    <div id="contact" className="py-44 bg-gradient-to-r from-[#1B50E4] to-[#024588]">
    <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
      <h2 className="font-semibold text-5xl sm:text-6xl mb-24 w-full text-center text-white">
        Contact Me
      </h2>

      <div className="flex items-center justify-center mb-11">
        <div
          className="rounded-l-full flex sm:text-3xl text-2xl items-center font-semibold px-4 py-2.5 border-2 border-solid border-white text-white cursor-pointer hover:bg-white hover:text-black"
          onClick={handleEmailClick}
        >
          <IoIosMail style={{ marginRight: "8px" }} /> Liama28@gmail.com
        </div>
        <div
          className={`rounded-r-full sm:text-3xl text-2xl text-white px-4 sm:py-[13px] py-[14px] border-2 border-solid border-white cursor-point  ${
            isClicked ? "" : "hover:bg-white hover:text-black"
          }`}
          onClick={copyToClipboard}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <FaCopy />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div
          className="rounded-full flex sm:text-3xl text-2xl items-center font-semibold px-4 py-2.5 border-2 border-solid border-white text-white cursor-pointer hover:bg-white hover:text-black"
          onClick={handleLinkedinClick}
        >
          <FaLinkedin style={{ marginRight: "8px" }} /> /Anderson-Liam
        </div>
      </div>

      <ToastContainer />
    </div>
    </div>
  );
};

export default Contact;
