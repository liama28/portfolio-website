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
      <h2 className="font-semibold text-5xl sm:text-6xl mb-24 w-full text-center text-white">
        Skills
      </h2>
      <h3 className="font-semibold text-3xl sm:text-4xl mb-6 text-[#66CCFF]">
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
          color="white"
        />
        <Skill text="Networking" icon={<FaNetworkWired />} color="white" />
        <Skill text="IT System Managment" icon={<FaComputer />} color="white" />
        <Skill text="Windows" icon={<FaWindows />} color="white" />
        <Skill
          text="MacOS"
          icon={<SiMacos className="text-3xl" />}
          color="white"
        />
        <Skill text="Linux" icon={<FaLinux />} color="white" />
        <Skill text="Python" icon={<FaPython />} color="white" />
        <Skill text="Bash" icon={<SiGnubash />} color="white" />
        <Skill text="C" icon={<BiCodeCurly />} color="white" />
        <Skill text="Git" icon={<FaGithub />} color="white" />
      </div>

      <h3 className="font-semibold text-3xl sm:text-4xl my-6 text-[#66CCFF]">
        Experienced
      </h3>
      <div className="flex flex-wrap gap-4 mb-4">
        <Skill
          text="Software Devleopment"
          icon={<FaLaptopCode />}
          color="white"
        />
        <Skill text="Next.js" icon={<SiNextdotjs />} color="white" />
        <Skill text="Java" icon={<FaJava />} color="white" />
        <Skill text="Assembly" icon={<GoCpu />} color="white" />
      </div>

      <h3 className="font-semibold text-3xl sm:text-4xl my-6 text-[#66CCFF]">
        Novice
      </h3>
      <div className="flex flex-wrap gap-4 mb-4">
        <Skill text="React" icon={<FaReact />} color="white" />
        <Skill text="HTML" icon={<FaHtml5 />} color="white" />
        <Skill text="CSS" icon={<FaCss3 />} color="white" />
        <Skill text="Javascript" icon={<IoLogoJavascript />} color="white" />
        <Skill text="PowerShell" icon={<SiPowershell />} color="white" />
        <Skill
          text="Reverse Engineering"
          icon={<VscDebugReverseContinue />}
          color="white"
        />
      </div>
    </div>
  );
};

export default Skills;
