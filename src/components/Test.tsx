import React from "react";
import { motion } from "framer-motion";
import HeroText from "./shared/heroText/HeroText";

const SeoLandingPage: React.FC = () => {
  return (
    <div className="relative h-[96vh] overflow-hidden gradient-bg text-white  flex flex-col justify-center">
      <div
        className="px-10"
        style={{
          backgroundImage:
            "url('https://framerusercontent.com/images/J9PD0z8SzMHT2KxXQClbD5Q7PU.png')",
        }}
      >
        {/* Gradient + Grid Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full gradient-bg grid-overlay" />
        </div>

        {/* Main Section */}
        <main className="relative z-10 mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div className="space-y-6 pl-10 -mt-10 lg:pl-20 ">
            <HeroText />

            <div className="flex items-center gap-4">
              <button
                className="p-5 w-56 rounded-full backdrop-blur-lg border border-white/10 bg-gradient-to-tr from-black/60 to-black/40 
              shadow-lg hover:shadow-2xl hover:shadow-white/20 hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0 transition-all 
              duration-300 ease-out cursor-pointer hover:border-white/30 hover:bg-gradient-to-tr hover:from-white/10 hover:to-black/40 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                <div className="relative z-10">I'm an Investor</div>
              </button>

              <button className="p-5 w-56 rounded-full backdrop-blur-lg border border-indigo-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/30 hover:scale-110 hover:-rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-indigo-500/50 hover:bg-gradient-to-tr hover:from-indigo-500/10 hover:to-black/40 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                <div className="relative z-10">I'm a Developer</div>
              </button>
            </div>
          </div>

          {/* Right Image */}
        </main>
      </div>
    </div>
  );
};

export default SeoLandingPage;
