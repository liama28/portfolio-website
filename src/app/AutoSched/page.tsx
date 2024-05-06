"use client";
import Skill from "../UI/Home/components/Skill";
import Image from "next/image";
import { IoMdArrowRoundBack } from "react-icons/io";
import { BiLogoSpringBoot } from "react-icons/bi";

import { FaJava } from "react-icons/fa6";
import { TbCloudCog } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { SiPostman } from "react-icons/si";

export default function AutoSched() {
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
        <div className="pt-[100px] sm:pt-[200px] pb-10">
          <h2 className="font-semibold text-4xl sm:text-6xl text-center text-primary-100 mb-4">
            ISU Scheduling App
          </h2>
          <p className="text-xl text-200 mb-12">August 2021 - December 2021</p>
        </div>

        <h3 className="font-semibold text-3xl sm:text-4xl text-100 mb-6">
          Overview
        </h3>

        <div className="mb-10 text-lg text-100">
          <p className="mb-4">
            For this project, I worked with two other group members to create an
            application that can be used to help schedule meetings around
            everyone's schedule. The application allowed students to import
            their class schedules, create groups, and find openings that work
            for everyone. The front end of the application was an Android
            application, and the back end was comprised of a Linux server
            running {" "} 
            <a
              href="https://en.wikipedia.org/wiki/Spring_Boot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-100 hover:text-blue-200"
            >
              Spring Boot 
            </a>
             and MySQL.
          </p>

          <div className="flex justify-center my-10">
            <Image
              src="/AutoSched.png"
              alt="Android Scheduling Application"
              width={550}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        <h3 className="font-semibold text-3xl sm:text-4xl text-100 mb-6">
          My Role
        </h3>

        <div className="mb-10 text-lg text-100">
          <p className="mb-4">
            I lead the backend development. Configuring the Spring Boot web
            server, developing an API system for authentication and data
            retrieval, and architecting an SQL database.
          </p>
        </div>

        <h3 className="font-semibold text-3xl sm:text-4xl text-100 mb-6">
          Skills Developed
        </h3>

        <div className="flex flex-wrap gap-4 mb-14">
          <Skill text="Java" icon={<FaJava />} color="light" />
          <Skill text="Spring Boot" icon={<BiLogoSpringBoot />} color="light" />
          <Skill text="REST API" icon={<TbCloudCog />} color="light" />
          <Skill text="MySQL" icon={<GrMysql />} color="light" />
          <Skill text="Postman" icon={<SiPostman />} color="light" />
        </div>

        <h3 className="font-semibold text-3xl sm:text-4xl text-100 mb-6">
          Links
        </h3>

        {/* GITHUB REPO */}
        <figure className="mt-2 mb-10 shadow-md rounded-lg p-4 border border-gray-200 hover:bg-gray-100/5">
          <a
            href="https://github.com/liama28/AutoSched"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="flex">
              <div className="flex-1">
                <div className="text-lg font-semibold text-100">AutoSched</div>
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
                https://github.com/liama28/AutoSched
              </div>
            </div>
          </a>
        </figure>

      </div>
    </div>
  );
}
