import React from "react";
import Skill from "./components/Skill";
import SkillGroup from "./components/SkillGroup";
import { SiNextdotjs } from "react-icons/si";
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
} from "react-icons/fa6";
import { GoCpu } from "react-icons/go";
import { MdOutlineSecurity } from "react-icons/md";
import { SiMacos, SiGnubash, SiPowershell } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { BiCodeCurly } from "react-icons/bi";
import { VscDebugReverseContinue } from "react-icons/vsc";

const Skills = () => {
  return (
    <div id="skills" className="max-w-[865px] mx-auto px-8 flex flex-col justify-center h-full">
      <h2 className="font-semibold text-5xl sm:text-6xl mb-24 w-full text-center text-light">
        Skills
      </h2>
      <h3 className="font-semibold text-3xl sm:text-4xl mb-6 text-primary-100">
        Proficient
      </h3>
      <div className="flex flex-wrap gap-4 mb-4">
        {/* <SkillGroup
          text="Cybersecurity"
          icon={<MdOutlineSecurity />}
          color="white"
          contents={
            <div className="flex flex-wrap gap-4 mb-4">
              <Skill text="Networking" icon={<FaNetworkWired />} color="white" /> 
              <Skill text="Networking" icon={<FaNetworkWired />} color="white" />
              <Skill text="Networking" icon={<FaNetworkWired />} color="white" />
            </div>
          }
        /> */}
        <Skill
          text="Cybersecurity"
          icon={<MdOutlineSecurity />}
          color="light"
        />
        <Skill text="Networking" icon={<FaNetworkWired />} color="light" />
        <Skill text="IT System Managment" icon={<FaComputer />} color="light" />
        <Skill text="Windows" icon={<FaWindows />} color="light" />
        <Skill
          text="MacOS"
          icon={<SiMacos className="text-3xl" />}
          color="light"
        />
        <Skill text="Linux" icon={<FaLinux />} color="light" />
        <Skill text="Python" icon={<FaPython />} color="light" />
        <Skill text="Bash" icon={<SiGnubash />} color="light" />
        <Skill text="C" icon={<BiCodeCurly />} color="light" />
        <Skill text="Git" icon={<FaGithub />} color="light" />
      </div>

      <h3 className="font-semibold text-3xl sm:text-4xl my-6 text-primary-100">
        Experienced
      </h3>
      <div className="flex flex-wrap gap-4 mb-4">
        <Skill
          text="Software Devleopment"
          icon={<FaLaptopCode />}
          color="light"
        />
        <Skill text="Next.js" icon={<SiNextdotjs />} color="light" />
        <Skill text="Java" icon={<FaJava />} color="light" />
        <Skill text="Assembly" icon={<GoCpu />} color="light" />
      </div>

      <h3 className="font-semibold text-3xl sm:text-4xl my-6 text-primary-100">
        Novice
      </h3>
      <div className="flex flex-wrap gap-4 mb-4">
        <Skill text="React" icon={<FaReact />} color="light" />
        <Skill text="HTML" icon={<FaHtml5 />} color="light" />
        <Skill text="CSS" icon={<FaCss3 />} color="light" />
        <Skill text="Javascript" icon={<IoLogoJavascript />} color="light" />
        <Skill text="PowerShell" icon={<SiPowershell />} color="light" />
        <Skill
          text="Reverse Engineering"
          icon={<VscDebugReverseContinue />}
          color="light"
        />
      </div>
    </div>
  );
};

export default Skills;
