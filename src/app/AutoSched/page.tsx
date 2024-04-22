"use client";

import { IoMdArrowRoundBack } from "react-icons/io";
import Image from "next/image";

export default function AutoSched() {
  const goBack = () => {
    window.history.go(-1); // Go back to the previous page
  };

  return (
    <div className="min-h-screen w-full bg-200">
      <div className="fixed w-full h-[70px] flex justify-between items-center px-4 bg-[#1A1A1A]/80 text-100 z-10">
        <div className="pl-10">
          <button onClick={goBack}>
            <IoMdArrowRoundBack className="text-5xl hover:text-primary-100" />
          </button>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full">
        <div className="pt-[200px] pb-10">
          <h2 className="font-semibold text-5xl sm:text-6xl text-center text-primary-100 mb-12">
            ISU Scheduling App
          </h2>
          <h3 className="font-semibold text-3xl sm:text-4xl text-100 mb-8">
            Subheading
          </h3>
        </div>

        <div className="px-4 sm:px-0 mb-10">
          <p className="text-lg text-100 mb-4">
            Paragraph 1
          </p>
          <p className="text-lg text-100">
            Paragraph 2
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <Image
            src="/AutoSched.png"
            alt="Adversarial Attacks on AI Malware Detection"
            width={800}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
