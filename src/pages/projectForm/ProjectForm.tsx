import { useState } from "react";
import FormQuestions from "../../components/main/projectFormQuestions/FormQuestions";
import Navbar from "../../components/shared/navbar/Navbar";
import { motion } from "framer-motion";

const ProjectForm = () => {
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
    <div>
      <div className="w-full justify-between items-center   flex flex-col">
        <Navbar />
      </div>
      <div className="bg-black  px-16 z-[1000]">
        <div
          style={{
            backgroundImage:
              "url('https://framerusercontent.com/images/J9PD0z8SzMHT2KxXQClbD5Q7PU.png')",
          }}
          className="border-b border-white/10 items-between rounded-2xl overflow-hidden shadow-lg"
        >
          <div className="relative h-[96vh] gradient-bg2 overflow-hidden  text-white  flex flex-col ">
            <div
              className="px-10"
              style={{
                backgroundImage:
                  "url('https://framerusercontent.com/images/J9PD0z8SzMHT2KxXQClbD5Q7PU.png')",
              }}
            >
              {/* Gradient + Grid Overlay */}
              <div className="absolute inset-0 z-0">
                <div className="w-full h-full gradient-bg2 grid-overlay" />
              </div>

              {/* Main Section */}
              <main className=" items-center">
                {/* Text Section */}
                <FormQuestions />
                {/* Right Image */}
              </main>
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
                className="absolute top-48 left-3 w-32 md:w-40"
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
              <motion.img
                src="https://framerusercontent.com/images/VcKoW6bgdvU8tkSgdHKKf2duo.png?scale-down-to=512"
                alt=""
                className="absolute bottom-10 right-32 w-32 md:w-40"
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
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;
