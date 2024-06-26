"use client";
import React, { useState } from "react";
import { cn } from "../utils/cn";
import ImageScroller from "../utils/ImageScroller";
import { BentoGrid, BentoGridItem } from "./components/bento-grid";
import Image from "next/image";

// Icons
import {
 IconVirus,
 IconCalendarMonth,
 IconCpu,
 IconEye,
 IconRobot,
} from "@tabler/icons-react";

const Projects = () => {
 return (
   <div id="projects" className="my-64">
     {/* Heading */}
     <h2 className="font-semibold text-5xl sm:text-6xl mb-24 w-full text-center text-light">
       Projects
     </h2>

     {/* Grid */}
     <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
       {projectItems.map((item, index) => (
         <BentoGridItem
           key={index}
           title={item.title}
           description={item.description}
           header={item.header}
           className={item.className}
           icon={item.icon}
           linkUrl={item.linkUrl}
         />
       ))}
     </BentoGrid>
   </div>
 );
};

// Project Headers
const Project01Header = () => (
 <div className="flex flex-1 w-full h-[50px] rounded-xl bg-dot-white/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-white/[0.2] bg-dark">
   <ImageScroller
     imageSrc="/492_Poster.png"
     imageAlt="Project 1 Scrolling Header"
   />
 </div>
);

const Project02Header = () => (
 <div className="flex flex-1 w-full h-[50px] rounded-xl bg-dot-white/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-white/[0.2] bg-dark">
   <ImageScroller
     imageSrc="/AutoSched.png"
     imageAlt="Project 2 Scrolling Header"
   />
 </div>
);

const Project03Header = () => (
 <div className="flex flex-1 w-full h-[50px] rounded-xl bg-dot-white/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-white/[0.2] bg-dark">
   <ImageScroller
     imageSrc="/MIPS_CPU.png"
     imageAlt="Project 3 Scrolling Header"
   />
 </div>
);

// Asteroids Header
const Project04Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="flex flex-1 w-full h-[50px] rounded-xl bg-dot-white/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-white/[0.2] bg-dark cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src="/Asteroids.png"
        alt="Project 4 Header"
        width={500}
        height={500} 
        className={cn(
          "w-full h-full object-cover rounded-xl",
          isHovered && "opacity-0"
        )}
      />
      {isHovered && (
        <Image
          src="/AsteroidsGIF.gif"
          alt="Project 4 Header"
          width={500}
          height={500}
          // className="w-full h-full object-cover rounded-xl"
        />
      )}
    </div>
  );
};


const Project05Header = () => (
 <div className="flex flex-1 w-full h-[50px] rounded-xl bg-dot-white/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-white/[0.2] bg-dark">
   <ImageScroller
     imageSrc="/CyBot.png"
     imageAlt="Project 5 Scrolling Header"
   />
 </div>
);

// Project Items
const projectItems = [
 {
   title: "Capstone: Adversarial Attacks on AI Malware Detection",
   description: "August 2022 - May 2023",
   header: <Project01Header />,
   className: "md:col-span-2 cursor-pointer",
   icon: <IconVirus className="h-4 w-4 text-neutral-500" />,
   linkUrl: "/Capstone/",
 },
 {
   title: "ISU Scheduling App",
   description: "August 2021 - December 2021",
   header: <Project02Header />,
   className: "md:col-span-1 cursor-pointer",
   icon: <IconCalendarMonth className="h-4 w-4 text-neutral-500" />,
   linkUrl: "/AutoSched/",
 },
 {
   title: "MIPS Architecture Design and Implementation",
   description: "October 2021 - December 2021",
   header: <Project03Header />,
   className: "md:col-span-1 cursor-pointer",
   icon: <IconCpu className="h-4 w-4 text-neutral-500" />,
   linkUrl: "/MIPS/",
 },
 {
   title: "Computer Vision Asteroids",
   description: "January 2020 - May 2020",
   header: <Project04Header />,
   className: "md:col-span-1 cursor-pointer",
   icon: <IconEye className="h-4 w-4 text-neutral-500" />,
   linkUrl: "/Asteroids/",
 },
 {
   title: "Roomba Microcontroller Integration",
   description: "January 2021 - May 2021",
   header: <Project05Header />,
   className: "md:col-span-1 cursor-pointer",
   icon: <IconRobot className="h-4 w-4 text-neutral-500" />,
   linkUrl: "/Roomba/",
 },
];

export default Projects;