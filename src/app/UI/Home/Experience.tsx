"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./components/LiIcon";
import SubLiIcon from "./components/SubLiIcon";

const Experience = () => {
  const ref = useRef(null);
  const ref_pos1 = useRef(null);
  const ref_pos2 = useRef(null);
  const ref_pos3 = useRef(null);
  const ref_pos4 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
    // offset: [0.9, 0],
  });

  return (
    <div id="experience" className="my-64">
      <h2
        // ref={ref}
        className="font-semibold text-5xl sm:text-6xl mb-20 w-full text-center text-light"
      >
        Experience
      </h2>

      <div ref={ref} className="mx-auto relative max-w-[650px]">
        <motion.div
          style={{
            scaleY: scrollYProgress,
            filter: "drop-shadow(0px 0px 8px #66CCFF)",
          }}
          className="absolute left-9 top-4 w-[4px] h-full bg-primary-100 origin-top"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <li
            ref={ref_pos1}
            className="mr-8 sm:mr-0 sm:ml-[110px] ml-[70px] flex flex-col items-left justify-between"
          >
            <LiIcon reference={ref_pos1} enablePulse={true} />
            <div>
              <h3 className="capitalize font-bold text-2xl sm:text-3xl text-light">
                Security Analyst &nbsp;
                <a
                  href={"https://www.american-pcs.com"}
                  target="_blank"
                  className="text-primary-100 hover:underline"
                >
                  @ American PCS
                </a>
              </h3>
              <span className="capitalize text-200">
                February 2024 - Present | Council Bluffs, IA
              </span>
              <p className="w-full text-light">
                Responsible for everything security. This includes managing SIEM,
                EDR, and MDR solutions, investigating security alerts and
                reported events, as well as conducting penetration tests.
                Additionally, I contributed to the development of policies and
                procedures.
              </p>
            </div>
          </li>

          <li
            ref={ref_pos2}
            className="mr-8 sm:mr-0 mt-16 sm:ml-[110px] ml-[70px] flex flex-col items-left justify-between"
          >
            <LiIcon reference={ref_pos2} enablePulse={false} />
            <div>
              <h3 className="capitalize font-bold text-2xl sm:text-3xl text-light">
                Technical Support Specialist &nbsp;
                <a
                  href={"https://www.american-pcs.com"}
                  target="_blank"
                  className="text-primary-100 hover:underline"
                >
                  @ American PCS
                </a>
              </h3>
              <span className="capitalize text-200">
                October 2023 - February 2024 | Council Bluffs, IA
              </span>
              <p className="w-full text-light">
                Wearing many hats, I tackled a diverse array of challenges.
                Troubleshot a wide range of issues and managed various
                environments, IT infrastructure, and products.
              </p>
            </div>
          </li>

          <li
            ref={ref_pos3}
            className="mr-8 sm:mr-0 mt-16 sm:ml-[110px] ml-[70px] flex flex-col items-left justify-between"
          >
            <LiIcon reference={ref_pos3} enablePulse={false} />
            <div>
              <h3 className="capitalize font-bold text-2xl sm:text-3xl text-light">
                IT Security Intern &nbsp;
                <a
                  href={"https://leoadaly.com/"}
                  target="_blank"
                  className="text-primary-100 hover:underline"
                >
                  @ Leo A Daly
                </a>
              </h3>
              <span className="capitalize text-200">
                May 2022 - August 2022 | Omaha, NE
              </span>
              <p className="w-full text-light">
                In my second summer, I transitioned to the security team.
                Responsibilities included managing the secure service edge
                firewall, developing procedures and playbooks, and handling
                security events.
              </p>
            </div>
          </li>

          <li
            ref={ref_pos4}
            className="mr-8 sm:mr-0 mt-16 sm:ml-[110px] ml-[70px] flex flex-col items-left justify-between"
          >
            <LiIcon reference={ref_pos4} enablePulse={false} />
            <div>
              <h3 className="capitalize font-bold text-2xl sm:text-3xl text-light">
                IT Intern &nbsp;
                <a
                  href={"https://leoadaly.com/"}
                  target="_blank"
                  className="text-primary-100 hover:underline"
                >
                  @ Leo A Daly
                </a>
              </h3>
              <span className="capitalize text-200">
                June 2021 - August 2021 | Omaha, NE
              </span>
              <p className="w-full text-light">
                My first exposure to IT and a corporate environment: Managed IT
                equipment, administered Active Directory, workstations, and
                other infrastructure, while troubleshooting various technical
                issues.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
