"use client";
import Skill from "../UI/Home/components/Skill";
import { BiCodeCurly } from "react-icons/bi";
import { FaPython } from "react-icons/fa6";
import { GoCpu } from "react-icons/go";
import { PiGraph } from "react-icons/pi";
import { VscDebugReverseContinue } from "react-icons/vsc";
import { IoPerson } from "react-icons/io5";
import { GoProjectRoadmap } from "react-icons/go";
import { AiFillSecurityScan } from "react-icons/ai";

import { IoMdArrowRoundBack } from "react-icons/io";
import Image from "next/image";

export default function Capstone() {
  const goBack = () => {
    window.history.go(-1); // Go back to the previous page
  };

  return (
    <div className="min-h-screen w-full bg-200">
      <div className="fixed w-full h-[70px] flex justify-between items-center px-4 bg-[#1A1A1A]/80 text-100 z-10">
        <div className="pl-2 sm:pl-10">
          <button onClick={goBack}>
            <IoMdArrowRoundBack className="text-5xl hover:text-primary-100" />
          </button>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full px-8">
        <div className="sm:pt-[200px] pt-[100px] pb-10">
          <h2 className="font-semibold text-4xl sm:text-6xl text-center text-primary-100 mb-4">
            Adversarial Attacks on AI Malware Detection
          </h2>
          <p className="text-xl text-200 mb-12">August 2022 - May 2023</p>
        </div>

        <h3 className="font-semibold text-3xl sm:text-4xl text-100 mb-6">
          Overview
        </h3>

        <div className="mb-10 text-lg text-100">
          <p className="mb-4">
            During this two-semester-long capstone project, I worked with a
            group of five other undergraduates and a professor in computer
            engineering. We developed a tool to assess the robustness of AI
            security systems against{" "}
            <a
              href="https://en.wikipedia.org/wiki/Adversarial_machine_learning"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-100 hover:text-blue-200"
            >
              adversarial attacks
            </a>
            . The tool was developed for those researching machine-learning
            solutions to malware attacks. It helps test, evaluate, and
            strengthen malware detection software.
          </p>
          <p className="mb-4">
            The way robustness was measured was by its ability to detect{" "}
            <a
              href="https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)  "
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-100 hover:text-blue-200"
            >
              microarchitecture attacks
            </a>
             specially designed to evade detection. The software generates these
            evasive adversarial attacks by inserting artificial noise into the
            attack instructions to mimic benign power signatures and exploit the
            security system’s underlying machine-learning model.
          </p>

          <div className="flex justify-center my-10">
            <Image
              src="/Capstone_Overview.png"
              alt="Capstone Overview Diagram"
              width={800}
              height={400}
              className="rounded-lg shadow-md max-w-full"
            />
          </div>

          <p>
            To achieve the project goals, we had to first profile benign,
            malicious, and individual x86 instruction power signatures. Then we
            developed instruction insertion logic that took the attack structure
            and the effects on the signature into account to create these
            adversarial examples. Finally, we created a method to test and
            evaluate the model against these generated attacks.
          </p>

          <div className="flex justify-center my-10">
            <Image
              src="/Capstone_Diagram.png"
              alt="Capstone Software Diagram"
              width={800}
              height={400}
              className="rounded-lg shadow-md max-w-full"
            />
          </div>
        </div>

        <h3 className="font-semibold text-3xl sm:text-4xl text-100 mb-6">
          My Role
        </h3>

        <div className="mb-10 text-lg text-100">
          <p className="mb-4">
            I was responsible for leading the backend development of the
            project. I conducted experiments, developed testing systems, created
            the instruction insertion logic, and helped decide the project&#39;s
            direction.
          </p>
        </div>

        <h3 className="font-semibold text-3xl sm:text-4xl text-100 mb-6">
          Results
        </h3>

        <div className="mb-14 text-lg text-100">
          <p className="mb-4">
            Early on in the project, we successfully were able to create
            adversarial examples to fool the detection models. The challenge
            then became to optimize ways to alter power signatures and help
            create a more resilient model. We developed better data collection
            methods that were used to create a better model, discovered insights
            to alter power signatures, and created software for rapid testing.
          </p>
        </div>

        <h3 className="font-semibold text-3xl sm:text-4xl text-100 mb-6">
          Skills Developed
        </h3>

        <div className="flex flex-wrap gap-4 mb-14">
          <Skill text="C" icon={<BiCodeCurly />} color="light" />
          <Skill text="Python" icon={<FaPython />} color="light" />
          <Skill text="x86 Assembly" icon={<GoCpu />} color="light" />
          <Skill text="Machine Learning" icon={<PiGraph />} color="light" />
          <Skill
            text="Reverse Engineering"
            icon={<VscDebugReverseContinue />}
            color="light"
          />
          <Skill
            text="Malware Analysis"
            icon={<AiFillSecurityScan />}
            color="light"
          />
          <Skill text="Leadership" icon={<IoPerson />} color="light" />
          <Skill
            text="Project Management"
            icon={<GoProjectRoadmap />}
            color="light"
          />
        </div>

        <h3 className="font-semibold text-3xl sm:text-4xl text-100 mb-6">
          Links
        </h3>

        {/* IOWA STATE PROJECT PAGE */}
        <figure className="my-2 shadow-md rounded-lg p-4 border border-gray-200 hover:bg-gray-100/5">
          <a
            href="https://sdmay23-16.sd.ece.iastate.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="flex">
              <div className="flex-1">
                <div className="text-lg font-semibold text-100">
                  sdmay23-16 • Robustness of Microarchitecture Attacks/Malware
                  Detection Tools against Adversarial Artificial Intelligence
                  Attacks
                </div>
                <div className="mt-2 text-200">
                  Iowa State&#39;s senior design project page
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <img
                src="https://cdn.theme.iastate.edu/favicon/favicon.ico"
                alt="favicon"
                className="w-4 h-4 mr-2"
              />
              <div className="text-sm text-gray-500">
                https://sdmay23-16.sd.ece.iastate.edu/
              </div>
            </div>
          </a>
        </figure>

        {/* GITHUB REPO */}
        <figure className="my-2 shadow-md rounded-lg p-4 border border-gray-200 hover:bg-gray-100/5">
          <a
            href="https://github.com/liama28/sdmay23-16"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="flex">
              <div className="flex-1">
                <div className="text-lg font-semibold text-100">sdmay23-16</div>
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
                      alt="GitHub Avatar"
                    />
                  </div>
                </div>
                <div className="absolute bottom-[-2px] right-[-2px]">
                  <div className="w-full h-full">
                    <img
                      src="/github-dark-icon.png"
                      className="block object-cover rounded w-3.5 h-3.5 transition-opacity duration-100 ease-out filter drop-shadow"
                      alt="GitHub Avator"
                    />
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                https://github.com/liama28/sdmay23-16
              </div>
            </div>
          </a>
        </figure>

        {/* RESEARCH PAPER */}
        <figure className="my-2 shadow-md rounded-lg p-4 border border-gray-200 hover:bg-gray-100/5">
          <a
            href="https://www.researchgate.net/publication/361023378_MAD-EN_Microarchitectural_Attack_Detection_through_System-wide_Energy_Consumption"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="flex">
              <div className="flex-1">
                <div className="text-lg font-semibold text-100">
                  MAD-EN: Microarchitectural Attack Detection through
                  System-wide Energy Consumption
                </div>
                <div className="mt-2 text-200">
                  Research paper the project extends upon
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <div className="text-sm text-gray-500 hidden sm:block">
                https://www.researchgate.net/publication/361023378_MAD-EN_Microarchitectural_Attack_Detection_through_System-wide_Energy_Consumption
              </div>
            </div>
          </a>
        </figure>

        <div className="flex justify-center mt-24 mb-10">
          <Image
            src="/492_Poster_1440.png"
            alt="Adversarial Attacks on AI Malware Detection"
            width={1000}
            height={400}
            className="rounded-lg shadow-md max-w-full"
          />
        </div>
      </div>
    </div>
  );
}
