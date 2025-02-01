import Hero from "@/components/Hero";
import { Bebas_Neue } from "next/font/google";

export default function Home() {
  return (
    <div className="bg-bg-img- bg-contain bg-no-repeat h-screen   flex items-center justify-center w-screen text-white  bg-black">
      <div className={`w-[50%]  bg-gradient-to-b from-black via-black to-orange-600 h-full`}>
        <div className="bgm-gray-100/80 h-[85%] flex items-center justify-center flex-col p-8 rounded-lg  max-w-3xl z-50 relative mx-auto my-10">
          <h2 className="text-center text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-l z-50 relative from-gray-300 via-orange-700 to-orange-500 mb-6">
            Chowdome Logistics
          </h2>
          <p className="text-lg text-gray-100 text-center leading-relaxed">
            fast, secure, and hassle-free. Whether it's across the city or across borders, we deliver with precision and reliability. Your cargo, our commitment.
          </p>
        </div>
      </div>
      <div className="w-[50%]">
        <Hero />
      </div>
    </div>
  );
}
