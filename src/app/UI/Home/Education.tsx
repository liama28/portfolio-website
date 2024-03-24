"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./components/LiIcon";
import SubLiIcon from "./components/SubLiIcon";

const Education = () => {
    const ref = useRef(null);
    const ref_pos1 = useRef(null);
    const ref_pos2 = useRef(null);
    const ref_pos3 = useRef(null);
    const ref_pos4 = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "center start"]
      // offset: [0.9, 0],
    });
    
    return (
        <div id="education" className="my-64">
          <h2
            // ref={ref}
            className="font-semibold text-5xl sm:text-6xl mb-24 w-full text-center text-white"
          >
            Education
          </h2>
    
          <div 
            ref={ref}
            className="mx-auto relative max-w-[650px]">
            <motion.div
              style={{
                scaleY: scrollYProgress,
                filter: "drop-shadow(0px 0px 8px #66CCFF)",
              }}
              className="absolute left-9 top-4 w-[4px] h-full bg-[#66CCFF] origin-top"
            />
    
            <ul className="w-full flex flex-col items-start justify-between ml-4">
              <li
                ref={ref_pos1}
                className="mr-8 sm:mr-0 sm:ml-[110px] ml-[70px] flex flex-col items-left justify-between"
              >
                <LiIcon reference={ref_pos1} enablePulse={false} />
                <div>
                  <h3 className="capitalize font-bold text-2xl sm:text-3xl text-white">
                    Iowa State University &nbsp;
                  </h3>
                  <h3 className="capitalize font-bold text-2xl sm:text-3xl text-[#66CCFF]">
                    BS, Cybersecurity Engineering
                  </h3>
                  <span className="capitalize text-white/75">
                    August 2019 - May 2023 | Ames, IA
                  </span>
                </div>
              </li>
    
              <li
                ref={ref_pos2}
                className="mr-8 sm:mr-0 mt-16 sm:ml-[110px] ml-[70px] flex flex-col items-left justify-between"
              >
                <SubLiIcon reference={ref_pos2} />
                <div>
                  <h3 className="capitalize font-bold text-2xl sm:text-3xl text-white">
                    CompTIA &nbsp;
                    <a
                      className="text-[#66CCFF]"
                    >
                      Security+
                    </a>
                  </h3>
                  <span className="capitalize text-white/75">
                    July 2023 - July 2026
                  </span>
                  <p className="w-full text-white">Candidate ID: COMP001022313147</p>
                </div>
              </li>
    
              <li
                ref={ref_pos3}
                className="mr-8 sm:mr-0 mt-16 sm:ml-[110px] ml-[70px] flex flex-col items-left justify-between"
              >
                <SubLiIcon reference={ref_pos3} />
                <div>
                  <h3 className="capitalize font-bold text-2xl sm:text-3xl text-white">
                    CompTIA &nbsp;
                    <a
                      className="text-[#66CCFF]"
                    >
                      Network+
                    </a>
                  </h3>
                  <span className="capitalize text-white/75">
                    August 2023 - August 2026
                  </span>
                  <p className="w-full text-white">Candidate ID: COMP001022313147</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      );
    };

export default Education