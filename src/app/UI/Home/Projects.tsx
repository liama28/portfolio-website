"use client";
import React from "react";
import { cn } from "../utils/cn";
import ImageScroller from "../utils/ImageScroller";
import { BentoGrid, BentoGridItem } from "./components/bento-grid";
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
      <h2 className="font-semibold text-5xl sm:text-6xl mb-24 w-full text-center text-white">
        Projects
      </h2>

      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
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

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const Project01Header = () => (
  <div className="flex flex-1 w-full h-[50px] rounded-xl bg-dot-white/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-white/[0.2] bg-black">
    <ImageScroller
      imageSrc="492_Poster.png"
      imageAlt="Project 1 Scrolling Header"
    />
  </div>
);

const Project02Header = () => (
  <div className="flex flex-1 w-full h-[50px] rounded-xl bg-dot-white/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-white/[0.2] bg-black">
    <ImageScroller
      imageSrc="AutoSched.png"
      imageAlt="Project 2 Scrolling Header"
    />
  </div>
);

const items = [
  {
    title: "Capstone: Adversarial Attacks on AI Malware Detection",
    description: "blah blah blah blah",
    header: <Project01Header />,
    className: "md:col-span-2 cursor-pointer",
    icon: <IconVirus className="h-4 w-4 text-neutral-500" />,
    linkUrl: "/Project01/",
  },
  {
    title: "ISU Scheduling App",
    description: "blah blah blah blah",
    header: <Project02Header />,
    className: "md:col-span-1 cursor-pointer",
    icon: <IconCalendarMonth className="h-4 w-4 text-neutral-500" />,
    linkUrl: "/Project02/",
  },
  {
    title: "MISP Architecture Design and Implementation",
    description: "blah blah blah blah",
    header: <Skeleton />,
    className: "md:col-span-1 cursor-pointer",
    icon: <IconCpu className="h-4 w-4 text-neutral-500" />,
    linkUrl: "/Project03/",
  },
  {
    title: "Computer Vision Astroids",
    description: "blah blah blah blah",
    header: <Skeleton />,
    className: "md:col-span-1 cursor-pointer",
    icon: <IconEye className="h-4 w-4 text-neutral-500" />,
    linkUrl: "/Project04/",
  },
  {
    title: "Roomba Microcontroller Integration",
    description: "blah blah blah blah",
    header: <Skeleton />,
    className: "md:col-span-1 cursor-pointer",
    icon: <IconRobot className="h-4 w-4 text-neutral-500" />,
    linkUrl: "/Project05/",
  },
];

export default Projects;
