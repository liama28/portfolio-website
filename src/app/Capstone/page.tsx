"use client";

import { IoMdArrowRoundBack } from "react-icons/io";
import Image from "next/image";

export default function Capstone() {
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
            Adversarial Attacks on AI Malware Detection
          </h2>
          <h3 className="font-semibold text-3xl sm:text-4xl text-100 mb-8">
            Subheading
          </h3>
        </div>

        <div className="px-4 sm:px-0 mb-10">
          <p className="text-lg text-100 mb-4">
            Artificial Intelligence (AI) has revolutionized the field of
            cybersecurity, enabling more advanced and efficient malware
            detection systems. However, these AI-based systems are not immune to
            attacks. Adversarial attacks, in particular, pose a significant
            threat to the integrity and reliability of AI malware detection.
          </p>
          <p className="text-lg text-100">
            In this project, we explore the vulnerabilities of AI-based malware
            detection systems and investigate various adversarial attack
            techniques. By understanding the weaknesses and limitations of these
            systems, we aim to develop more robust and resilient solutions to
            combat malware threats.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <Image
            src="/492_Poster_1440.png"
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
