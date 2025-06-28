"use client";
import { motion } from "framer-motion";
import { Card } from "./card";
// import SpotlightCursor from "./shared/cursor/SpotLisght";
import { SplineScene } from "./splite";

export function SplineSceneBasic() {
  return (
    <Card className="relative w-full h-screen bg-black/[0.96] relative overflow-hidden">
      {/* <SpotlightCursor /> */}

      <div style={{
            backgroundImage:
              "url('https://framerusercontent.com/images/J9PD0z8SzMHT2KxXQClbD5Q7PU.png')",
          }} className="flex h-full">
            {" "}
            <div className="absolute inset-0 z-0">
          <div className="w-full h-full gradient-bg grid-overlay" />
        </div>
        {/* Left content */}
        <div className="flex-1 flex flex-col justify-center px-16 z-10">
          <div className="max-w-2xl space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-purple-900/30 border border-purple-500/20 rounded-full">
              <span className="text-purple-300 text-sm font-medium">
                🚀 Built on Aptos Blockchain
              </span>
            </div>
            <div className="flex absolute right-0 top-5 justify-center -mb-1 z-[100] lg:justify-end">
           
          </div>

            {/* Main heading */}
            <div className="space-y-6">
              <h1 className="text-6xl font-bold text-white leading-tight">
                Fund the
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  {" "}Future{" "}
                </span>
                of Web3
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Discover groundbreaking projects, support innovation, and shape the decentralized future through our comprehensive grant platform.
              </p>
            </div>
            

            {/* Stats */}
            <div className="flex gap-12 py-6">
              <div>
                <div className="text-3xl font-bold text-white">$2.5M+</div>
                <div className="text-sm text-gray-400">Total Grants Distributed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">150+</div>
                <div className="text-sm text-gray-400">Projects Funded</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-400">Active Backers</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-6 pt-4">
              <button
                className="p-5 w-56 rounded-full backdrop-blur-lg border border-white/10 bg-gradient-to-tr from-black/60 to-black/40 
              shadow-lg hover:shadow-2xl hover:shadow-white/20 hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0 transition-all 
              duration-300 ease-out cursor-pointer hover:border-white/30 hover:bg-gradient-to-tr hover:from-white/10 hover:to-black/40 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                <div className="relative z-10 text-white">explore projects</div>
              </button>

              <button className="p-5 w-56 rounded-full backdrop-blur-lg border border-indigo-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/30 hover:scale-110 hover:-rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-indigo-500/50 hover:bg-gradient-to-tr hover:from-indigo-500/10 hover:to-black/40 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                <div className="relative z-10 text-white">back a project</div>
              </button>
            </div>

            {/* Features */}
            <div className="pt-8 space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Transparent funding process powered by blockchain</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Community-driven project evaluation</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Milestone-based grant distribution</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
          
          {/* Overlay gradient for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none"></div>
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>
    </Card>
  );
}