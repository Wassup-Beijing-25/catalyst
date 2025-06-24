import React from "react";
import { motion } from "framer-motion";

const SeoLandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden gradient-bg text-white px-6 lg:px-20 py-10 flex flex-col justify-center">
      {/* Gradient + Grid Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full gradient-bg grid-overlay" />
      </div>

      {/* Main Section */}
      <main className="relative z-10 mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 text-sm font-medium px-4 py-1 border border-purple-700 rounded-full bg-white/10 text-purple-300">
            <span className="text-xs bg-purple-600 px-2 py-0.5 rounded-full text-white">
              NEW
            </span>
            Latest integration just arrived
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-white/80">Elevate your</span>{" "}
            <span className="text-white">SEO efforts.</span>
          </h1>
          <p className="text-white/70 text-lg max-w-md">
            Unlock the full potential of your website with our AI tool, designed
            to streamline and simplify SEO.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-3 rounded-md w-full sm:w-64 text-black"
            />
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition">
              Join waitlist
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center -mt-16 lg:justify-end">
          <motion.img
            src="https://framerusercontent.com/images/vB2MtWwZpfQllMWCRyLNFppKWyw.png?scale-down-to=1024"
            alt="3D cubes"
            className="w-[105%] object-contain drop-shadow-2xl"
            initial={{ y: 0 }}
            animate={{ y: [0, -40, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </main>
    </div>
  );
};

export default SeoLandingPage;
