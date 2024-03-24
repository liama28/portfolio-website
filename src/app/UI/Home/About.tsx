import React from 'react'

const About = () => {
  return (
    <div id="about" className='relative h-[750px]'>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="w-full h-full bg-gradient-to-r from-[#1B50E4] to-[#024588] skew-y-6"></div>
      </div>

      <div className="relative max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full my-64">
        <h2 className="font-semibold text-5xl sm:text-6xl mb-24 w-full text-center text-white">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center">
          <div className="w-[256px] h-[256px] bg-white rounded-full md:mr-14 order-2 md:order-1"></div>
          <div className="text-white order-1 md:order-2 mb-8 md:mb-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Nullam facilisis nisi non risus accumsan, vel congue diam bibendum.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About