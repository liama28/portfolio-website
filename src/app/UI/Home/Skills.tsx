import React from "react";
import Skill from "./components/Skill";
import SkillGroup from "./components/SkillGroup";

// ----------------- ICONS ------------------------

// bi
import { SiNextdotjs, SiLatex } from "react-icons/si";

// fa6
import {
  FaPython,
  FaJava,
  FaNetworkWired,
  FaComputer,
  FaWindows,
  FaLinux,
  FaReact,
  FaHtml5,
  FaCss3,
  FaGithub,
  FaLaptopCode,
  FaBug,
  FaScaleUnbalanced,
} from "react-icons/fa6";

// go
import { GoCpu, GoFileDirectoryFill } from "react-icons/go";

import { MdOutlineSecurity } from "react-icons/md";
import { SiMacos, SiGnubash, SiPowershell } from "react-icons/si";

// gi
import { GiBrickWall, GiHammerBreak } from "react-icons/gi";

import { LuBinary } from "react-icons/lu";

// io5
import { IoLogoJavascript, IoDocumentText, IoWarning } from "react-icons/io5";

// bi
import { BiCodeCurly, BiLogoSpringBoot } from "react-icons/bi";

import { VscDebugReverseContinue } from "react-icons/vsc";
import { AiFillSecurityScan } from "react-icons/ai";
import { GrMysql } from "react-icons/gr";

// tb
import { TbBrandOffice, TbCloudCog, TbLogicAnd } from "react-icons/tb";

const Skills = () => {
  return (
    <div
      id="skills"
      className="max-w-[880px] mx-auto px-8 flex flex-col justify-center h-full"
    >
      {/* Header */}
      <h2 className="font-semibold text-5xl sm:text-6xl mb-16 w-full text-center text-light">
        Skills
      </h2>

      {/* Proficient */}
      <h3 className="font-semibold text-3xl sm:text-4xl mb-6 text-primary-100">
        Proficient
      </h3>
      <div className="flex flex-wrap gap-4 mb-4">
        <SkillGroup
          text="Cybersecurity"
          icon={<MdOutlineSecurity />}
          color="white"
          contents={
            <div className="flex flex-wrap gap-4 mb-4">
              <Skill text="Cryptography" icon={<LuBinary />} color="light" />
              <Skill text="Network Security" icon={<GiBrickWall />} color="light" />
              <Skill text="Vulnerability Assessment" icon={<FaBug />} color="light"/>
              <Skill text="Penetration Testing" icon={<GiHammerBreak />} color="light"/>
              <Skill text="Incident Response" icon={<IoWarning />} color="light"/>
              <Skill text="Malware Analysis" icon={<AiFillSecurityScan />} color="light"/>
              <Skill text="Risk Management" icon={<FaScaleUnbalanced />} color="light"/>
              <Skill text="Policies and Procedures" icon={<IoDocumentText />} color="light"/>
              <Skill text="Application Security" icon={<FaBug />} color="light"/>
            </div>
          }
        />
        {/* <Skill text="Cybersecurity" icon={<MdOutlineSecurity />} color="light"/> */}
        <Skill text="Networking" icon={<FaNetworkWired />} color="light" />
        <Skill text="IT System Managment" icon={<FaComputer />} color="light" />
        <Skill text="Active Directory" icon={<GoFileDirectoryFill />} color="light"/>
        <Skill text="Windows" icon={<FaWindows />} color="light" />
        <Skill text="MacOS" icon={<SiMacos className="text-3xl" />} color="light"/>
        <Skill text="Linux" icon={<FaLinux />} color="light" />
        <Skill text="Python" icon={<FaPython />} color="light" />
        <Skill text="Bash" icon={<SiGnubash />} color="light" />
        <Skill text="C" icon={<BiCodeCurly />} color="light" />
        <Skill text="Git" icon={<FaGithub />} color="light" />
        <Skill text="LaTeX" icon={<SiLatex />} color="light" />
        {/* <Skill text="Microsoft Office" icon={<TbBrandOffice />} color="light" /> */}
      </div>

      {/* Experienced */}
      <h3 className="font-semibold text-3xl sm:text-4xl my-6 text-primary-100">
        Experienced
      </h3>
      <div className="flex flex-wrap gap-4 mb-4">
        <Skill text="Software Development" icon={<FaLaptopCode />} color="light"/>
        <Skill text="Next.js" icon={<SiNextdotjs />} color="light" />
        <Skill text="Java" icon={<FaJava />} color="light" />
        <Skill text="Assembly" icon={<GoCpu />} color="light" />
        <Skill text="Spring Boot" icon={<BiLogoSpringBoot />} color="light" />
        <Skill text="VHDL" icon={<TbLogicAnd />} color="light" />
      </div>

      {/* Novice */}
      <h3 className="font-semibold text-3xl sm:text-4xl my-6 text-primary-100">
        Novice
      </h3>
      <div className="flex flex-wrap gap-4 mb-4">
        <Skill text="React" icon={<FaReact />} color="light" />
        <Skill text="HTML" icon={<FaHtml5 />} color="light" />
        <Skill text="CSS" icon={<FaCss3 />} color="light" />
        <Skill text="JavaScript" icon={<IoLogoJavascript />} color="light" />
        <Skill text="PowerShell" icon={<SiPowershell />} color="light" />
        <Skill text="Reverse Engineering" icon={<VscDebugReverseContinue />} color="light"/>
        <Skill text="REST API" icon={<TbCloudCog />} color="light" />
        <Skill text="MySQL" icon={<GrMysql />} color="light" />
      </div>
    </div>
  );
};

export default Skills;
