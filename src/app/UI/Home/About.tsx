import React from "react";

const About = () => {
  return (
    <div id="about" className="relative sm:h-[650px] h-[800px]">
      {/* Skewed Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="w-full h-full bg-gradient-to-r from-[#1B50E4] to-[#024588] skew-y-6"></div>
      </div>

      <div className="relative max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full my-64">
        {/* Heading */}
        <h2 className="font-semibold text-5xl sm:text-6xl mb-16 w-full text-center text-white">
          About Me
        </h2>

        {/* Headshot and About Me Blurb */}
        <div className="flex flex-col md:flex-row items-center">
          <div
            className="w-64 h-64 bg-white rounded-full md:mr-14 order-2 md:order-1 flex-shrink-0 bg-cover"
            style={{
              backgroundImage: "url(/headshot.png)",
              backgroundPosition: "20% 40%",
              backgroundSize: "110%",
            }}
          />

          <div className="text-white sm:text-xl order-1 md:order-2 mb-8 md:mb-0">
            <p className="mb-4">
              I&#39;m an Iowa State graduate, holding a degree in Cybersecurity
              Engineering. With a diverse background spanning computer science,
              engineering, software development, and IT management, with a focus
              on cybersecurity.
            </p>
            <p>
              Driven by the intersection of defense and innovation, I thrive on
              the challenge of crafting elegant solutions to intricate problems.
              Currently, I serve as a Security Analyst at American PCS,
              stationed in Omaha, NE.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
