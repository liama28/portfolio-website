"use client";
import Skill from "../UI/Home/components/Skill";
import { GoCpu } from "react-icons/go";
import { TbLogicAnd } from "react-icons/tb";

import { IoMdArrowRoundBack } from "react-icons/io";
import Image from "next/image";

export default function MIPS() {
  const goBack = () => {
    window.history.go(-1); // Go back to the previous page
  };

  return (
    <div className="min-h-screen w-full bg-200">
      <div className="fixed w-full h-[70px] flex justify-between items-center px-4 bg-[#1A1A1A]/80 text-100 z-10">
        <div className="pl-10">
          <button onClick={goBack}>
            <IoMdArrowRoundBack className="text-5xl hover:text-primary-100" />
          </button>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full">
        <div className="pt-[200px] pb-10">
          <h2 className="font-semibold text-5xl sm:text-6xl text-center text-primary-100 mb-4">
            MISP Architecture Design and Implementation
          </h2>
          <p className="text-xl text-200 mb-12">October 2021 - December 2021</p>
        </div>

        <h3 className="font-semibold text-3xl sm:text-4xl text-100 mb-6">
          Overview
        </h3>

        <div className="mb-10 text-lg text-100">
          <p className="mb-4">
            Collaborating with a partner, I spearheaded the development and
            testing of an {" "}
            <a
              href="https://en.wikipedia.org/wiki/MIPS_architecture"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-100 hover:text-blue-200"
            >
              MIPS
            </a>
             processor using {" "}
            <a
              href="https://en.wikipedia.org/wiki/VHDL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-100 hover:text-blue-200"
            >
              VHDL
            </a>
            . The CPU was a 32-bit
            five-stage processor, designed to MIPS architecture standards while
            optimizing for performance and efficiency.
          </p>
          <p className="mb-4">
            In addition to the hardware development, we wrote various assembly
            programs to test the functionality and performance of our processor.
            These programs ranged from complex control flow and data
            manipulation tasks to sorting algorithms.
          </p>

          <div className="flex justify-center my-10">
            <Image
              src="/MIPS_CPU.png"
              alt="MIPS CPU Diagram"
              width={1000}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        <h3 className="font-semibold text-3xl sm:text-4xl text-100 mb-6">
          Skills Developed
        </h3>

        <div className="flex flex-wrap gap-4 mb-14">
          <Skill text="Assembly" icon={<GoCpu />} color="light" />
          <Skill text="VHDL" icon={<TbLogicAnd />} color="light" />
          <Skill text="Microarchitecture" icon={<GoCpu />} color="light" />
        </div>

        <h3 className="font-semibold text-3xl sm:text-4xl text-100 mb-6">
          Links
        </h3>

        
        {/* GITHUB REPO */}
        <figure className="mt-2 mb-10 shadow-md rounded-lg p-4 border border-gray-200 hover:bg-gray-100/5">
          <a
            href="https://github.com/liama28/CPRE381_Project"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="flex">
              <div className="flex-1">
                <div className="text-lg font-semibold text-100">CPRE381_Project</div>
                <div className="mt-2 text-200">GitHub Repo</div>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <div className="flex self-start h-8 w-8 m-1 ml-1 mr-3 relative">
                <div>
                  <div className="w-full h-full">
                    <img
                      src="https://avatars.githubusercontent.com/u/57200229?v=4"
                      className="block object-cover rounded-full w-7.5 h-7.5 transition-opacity duration-100 ease-out shadow-md"
                    />
                  </div>
                </div>
                <div className="absolute bottom-[-2px] right-[-2px]">
                  <div className="w-full h-full">
                    <img
                      src="/github-dark-icon.png"
                      className="block object-cover rounded w-3.5 h-3.5 transition-opacity duration-100 ease-out filter drop-shadow"
                    />
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                https://github.com/liama28/CPRE381_Project
              </div>
            </div>
          </a>
        </figure>
      </div>
    </div>
  );
}
