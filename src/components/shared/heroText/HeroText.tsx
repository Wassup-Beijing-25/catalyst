import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const HeroText = () => {
  const [hoverOffset, setHoverOffset] = useState({ x: 0, y: 0 });
  const [activeImg, setActiveImg] = useState<string | null>(null);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLImageElement>,
    id: string
  ) => {
    if (activeImg !== id) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setHoverOffset({
      x: x * 0.6,
      y: y * 0.6,
    });
  };

  const floatTransition = {
    repeat: Infinity,
    repeatType: "reverse",
    duration: 3,
    ease: "easeInOut",
  };

  return (
    <div className="relative">
      <span className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 border border-purple-900 rounded-full bg-white/10 text-purple-300">
        <div className="text-xs bg-purple-800 px-2 py-0.5 rounded-full text-white">
          NEW
        </div>
        Latest integration just arrived
      </span>

      <div className="text-4xl md:text-8xl font-semibold flex-col leading-tight">
        <div className="text-white/80">Catyalist</div>
        <div className="text-white -mt-2 mb-3">Grant Access</div>

        {/* Image 1 */}
        <motion.img
          src="https://framerusercontent.com/images/fTvRR9UO6UHLEJxbKleRMkrgzgo.png?scale-down-to=512"
          alt=""
          className="absolute top-5 right-4 w-32 md:w-32"
          initial={{ y: 0 }}
          animate={activeImg === "img1" ? {} : { y: [0, -10, 0] }}
          transition={floatTransition}
          whileHover={{
            x: hoverOffset.x,
            y: hoverOffset.y,
            transition: {
              type: "spring",
              stiffness: 30,
              damping: 8,
            },
          }}
          onMouseEnter={() => setActiveImg("img1")}
          onMouseLeave={() => setActiveImg(null)}
          onMouseMove={(e) => handleMouseMove(e, "img1")}
        />

        {/* Image 2 */}
        <motion.img
          src="https://framerusercontent.com/images/F95XtBuIu9yRJpVFOQe6khYgo.png?scale-down-to=512"
          alt=""
          className="absolute top-48 -left-32 w-32 md:w-40"
          initial={{ y: 0 }}
          animate={activeImg === "img2" ? {} : { y: [0, 10, 0] }}
          transition={floatTransition}
          whileHover={{
            x: hoverOffset.x,
            y: hoverOffset.y,
            transition: {
              type: "spring",
              stiffness: 30,
              damping: 8,
            },
          }}
          onMouseEnter={() => setActiveImg("img2")}
          onMouseLeave={() => setActiveImg(null)}
          onMouseMove={(e) => handleMouseMove(e, "img2")}
        />

        {/* Image 3 */}
        {/* <motion.img
          src="https://framerusercontent.com/images/fTvRR9UO6UHLEJxbKleRMkrgzgo.png?scale-down-to=512"
          alt=""
          className="absolute -top-48 -left-32 w-32 md:w-40"
          initial={{ y: 0 }}
          animate={activeImg === "img3" ? {} : { y: [0, -8, 0] }}
          transition={floatTransition}
          whileHover={{
            x: hoverOffset.x,
            y: hoverOffset.y,
            transition: {
              type: "spring",
              stiffness: 30,
              damping: 8,
            },
          }}
          onMouseEnter={() => setActiveImg("img3")}
          onMouseLeave={() => setActiveImg(null)}
          onMouseMove={(e) => handleMouseMove(e, "img3")}
        /> */}
      </div>

      <p className="text-white/70 text-lg max-w-md">
        Connect with investors and unlock grants to power your next big project
        — built for developers shaping the future.
      </p>
    </div>
  );
};

export default HeroText;
