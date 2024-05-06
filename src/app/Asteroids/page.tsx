"use client";
import Image from "next/image";
import { IoMdArrowRoundBack } from "react-icons/io";
import { SiOpencv, SiProcessingfoundation } from "react-icons/si";
import Skill from "../UI/Home/components/Skill";

const Asteroids: React.FC = () => {
  const goBack = () => {
    window.history.go(-1);
  };

  return (
    <div className="min-h-screen bg-200">
      <header className="fixed top-0 left-0 right-0 h-[70px] flex items-center justify-between px-4 bg-[#1A1A1A]/80 text-100 z-10">
        <div className="pl-2 sm:pl-10">
          <button onClick={goBack}>
            <IoMdArrowRoundBack className="text-5xl hover:text-primary-100" />
          </button>
        </div>
      </header>

      <main className="max-w-[1000px] mx-auto px-8 pt-[100px] sm:pt-[200px] pb-10">
        <h2 className="mb-6 text-center text-4xl font-semibold text-primary-100 sm:text-6xl">
          Computer Vision Asteroids
        </h2>
        <p className="mb-12 text-xl text-200">January 2020 - May 2020</p>

        <section>
          <h3 className="mb-6 text-3xl font-semibold text-100 sm:text-4xl">Overview</h3>
          <div className="mb-10 text-lg text-100">
            <p className="mb-4">
              This project is a recreation of the classic arcade-style game Asteroids where the player controls a
              spaceship and attempts to avoid asteroids and blow them up. In the version my team and I developed, the
              ship is controlled by the player holding a model up to a camera and the spaceship will copy its movement
              and rotation. Using <a href="https://processing.org/" target="_blank" rel="noopener noreferrer" className="text-primary-100 hover:text-blue-200">Processing</a>, <a href="https://opencv.org/" target="_blank" rel="noopener noreferrer" className="text-primary-100 hover:text-blue-200">OpenCV</a>, and an <a href="https://en.wikipedia.org/wiki/Kinect" target="_blank" rel="noopener noreferrer" className="text-primary-100 hover:text-blue-200">Xbox Kinect</a>, the program grabs IR depth values to track objects held by the player to control the ship.
            </p>
            <div className="my-10 flex justify-center">
              <Image
                src="/AsteroidsGIF.gif"
                alt="Asteroids GIF"
                width={400}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        <section>
          <h3 className="mb-6 text-3xl font-semibold text-100 sm:text-4xl">My Role</h3>
          <div className="mb-10 text-lg text-100">
            <p className="mb-4">
              I led the computer vision portion of the project. I integrated the IR sensor, created algorithms for
              tracking objects, and translated data to coordinates and orientation.
            </p>
          </div>
          <div className="my-10 flex justify-center">
            <Image
              src="/KinectAsteroids.gif"
              alt="Kinect view"
              width={700}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </section>

        <section>
          <h3 className="mb-6 text-3xl font-semibold text-100 sm:text-4xl">Skills Developed</h3>
          <div className="mb-14 flex flex-wrap gap-4">
            <Skill text="Processing" icon={<SiProcessingfoundation />} color="light" />
            <Skill text="OpenCV" icon={<SiOpencv />} color="light" />
          </div>
        </section>

        <section>
          <h3 className="mb-6 text-3xl font-semibold text-100 sm:text-4xl">Links</h3>
          <figure className="mb-10 rounded-lg border border-gray-200 p-4 shadow-md hover:bg-gray-100/5">
            <a href="https://github.com/ColeHunt/Kinetic_Impact" target="_blank" rel="noopener noreferrer" className="block">
              <div className="flex">
                <div className="flex-1">
                  <div className="text-lg font-semibold text-100">Kinetic_Impact</div>
                  <div className="mt-2 text-200">GitHub Repo</div>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <div className="relative m-1 ml-1 mr-3 flex h-8 w-8 self-start">
                  <div className="h-full w-full">
                    <img
                      src="https://avatars.githubusercontent.com/u/57200229?v=4"
                      className="block h-7.5 w-7.5 rounded-full object-cover shadow-md transition-opacity duration-100 ease-out"
                    />
                  </div>
                  <div className="absolute bottom-[-2px] right-[-2px]">
                    <div className="h-full w-full">
                      <img
                        src="/github-dark-icon.png"
                        className="block h-3.5 w-3.5 rounded object-cover drop-shadow transition-opacity duration-100 ease-out"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">https://github.com/ColeHunt/Kinetic_Impact</div>
              </div>
            </a>
          </figure>
        </section>
      </main>
    </div>
  );
};

export default Asteroids;