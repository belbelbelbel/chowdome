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
    <div className="bg-bg-img- bg-contain bg-no-repeat h-screen flex items-center justify-center w-screen text-white bg-black">
      <div className="w-[50%] bg-gradient-to-b from-black via-black to-orange-600 h-full">
        <div className=" h-[70%] flex items-center justify-center flex-col p-8 rounded-lg max-w-3xl z-50 relative mx-auto my-16">
          <h2 className="text-center text-[3.7rem] font-bold text-transparent bg-clip-text bg-gradient-to-l z-50 relative from-gray-300 via-orange-700 to-orange-500 mb-4">
            Chowdome Logistics
          </h2>
          <p className="text-lg text-gray-100 text-center tracking-[1px] leading-relaxed">
            Fast, secure, and hassle-free. Whether it&apos;s across the city or across borders, we deliver with precision and reliability. Your cargo, our commitment.
          </p>

          {isClient && (
            <div className="absolute top-[15rem] left-40">
              <Lottie animationData={animationData} loop={true} autoplay={true} className="w-[410px] absolute h-[410px]" />
            </div>
          )}
        </div>
      </div>
      <div className="w-[50%]">
        <Hero />
      </div>
    </div>
  );
}
