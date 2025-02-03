"use client";
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import dynamic from "next/dynamic";
import animationData from "../components/lotties/Animation - 1738441076866.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="bg-bg-img- bg-contain bg-no-repeat h-screen flex  xl:gap-12 xl:flex-row flex-col items-center  w-screen text-white bg-black">
      <div className="xl:w-[50%] w-full bg-gradient-to-b from-black via-black to-orange-600 h-full">
        <div className=" xl:h-[70%] w-full h-full mt-[6rem] xl:mt-16 gap-3 xl:gap-0 flex items-center justify-center flex-col p-8 rounded-lg xl:max-w-3xl z-50 relative mx-auto my-16">
          <h2 className="text-left xl:text-center text-[3.4rem] tracking-[2px] xl:tracking-[0px]  md:text-[3.7rem] leading-[3.6rem] xl:leading-[4rem] font-bold text-transparent bg-clip-text bg-gradient-to-l z-50 relative from-gray-300 via-orange-700 to-orange-500 xl:mb-4">
            Chowdome Logistics
          </h2>
          <p className="xl:text-lg text-gray-100 xl:text-center text-[0.8rem] text-left tracking-[1px]  xl:leading-relaxed">
            Fast, secure, and seamless. Whether it&apos;s across the city or across borders, we deliver with precision and reliability. Your cargo, our commitment.
          </p>
          <div className="relative xl:hidden   flex z-50 xl:top-16 right-20">
            <button className="px-6 py-2 w-[10rem] md:w-[12rem] border-0 outline-0  tracking-[1.2px]  rounded-lg text-[1rem] xl:text-[1.1rem] text-white font-semibold bg-gradient-to-r from-gray-900 via-orange-700 to-orange-500 hover:opacity-90 transition duration-300 shadow-lg">
              Contact Us
            </button>
          </div>

          {isClient && (
            <div className="absolute xl:flex hidden top-[15rem] left-40">
              <Lottie animationData={animationData} loop={true} autoplay={true} className="xl:w-[410px] w-[270px] h-[270px] absolute xl:h-[410px]" />
            </div>
          )}
        </div>
      </div>
      <hr className="xl:hidden" />
      <div className="xl:w-[50%] w-full  ">
        <Hero />
      </div>
    </div>
  );
}