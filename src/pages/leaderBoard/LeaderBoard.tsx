/* eslint-disable @typescript-eslint/no-explicit-any */
import Navbar from "../../components/shared/navbar/Navbar";
import LeaderCard from "../../components/main/leaderBorddash/leaderCard";
import LeaderTable from "../../components/main/leaderBorddash/leaderTable";
import LeaderFilter from "../../components/main/leaderBorddash/leaderFilter";
import { useState } from "react";
import { motion } from "framer-motion";

const topPlayers = [
  {
    name: "BabyKnight",
    stats: "42 - 21",
    winrate: "64%",
    kda: "1.23",
    rank: "Challenger",
    place: 1,
  },
  {
    name: "Rootless",
    stats: "42 - 21",
    winrate: "64%",
    kda: "1.23",
    rank: "Challenger",
    place: 2,
  },
  {
    name: "Teodorr2000",
    stats: "42 - 21",
    winrate: "64%",
    kda: "1.23",
    rank: "Challenger",
    place: 3,
  },
  {
    name: "Teodorr2000",
    stats: "42 - 21",
    winrate: "64%",
    kda: "1.23",
    rank: "Challenger",
    place: 4,
  },
];

const leaderboard = [
  {
    name: "Rens",
    stats: "42 - 21",
    winrate: "64%",
    kda: "1.23",
    rank: "Challenger",
  },
  {
    name: "Edwin",
    stats: "42 - 21",
    winrate: "64%",
    kda: "1.23",
    rank: "Challenger",
  },
  {
    name: "FlyWithMe",
    stats: "20 - 21",
    winrate: "49%",
    kda: "5.23",
    rank: "Challenger",
  },
  {
    name: "BigBob007",
    stats: "20 - 21",
    winrate: "49%",
    kda: "5.23",
    rank: "Grandmaster",
  },
  {
    name: "Pudge",
    stats: "20 - 21",
    winrate: "49%",
    kda: "5.23",
    rank: "Master",
  },
  {
    name: "n0nameplayer",
    stats: "12 - 21",
    winrate: "34%",
    kda: "1.23",
    rank: "Master",
  },
  {
    name: "Kimberly Mastrangelo",
    stats: "12 - 21",
    winrate: "34%",
    kda: "1.23",
    rank: "Gold",
  },
];

export default function Leaderboard() {
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

  const floatTransition: any = {
    repeat: Infinity,
    repeatType: "reverse",
    duration: 3,
    ease: "easeInOut",
  };

  return (
    <div className=" bg-black text-white relative px-5 sm:px-20 pt-32">
      <div className="w-full flex flex-col items-center">
        <Navbar />
      </div>

      {/* Background layer */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full gradient-bg grid-overlay" />
      </div>

      {/* Image 1 */}
      <motion.img
        src="https://framerusercontent.com/images/fTvRR9UO6UHLEJxbKleRMkrgzgo.png?scale-down-to=512"
        alt=""
        className="absolute top-48 right-4 w-32 md:w-32"
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
        className="absolute bottom-40 left-3 w-32 md:w-40"
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
      <LeaderFilter />

      <div className="sm:flex gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 sm:w-1/2">
          {topPlayers.map((player, index) => (
            <LeaderCard key={index} player={player} index={index} />
          ))}
        </div>

        <LeaderTable leaderboard={leaderboard} />
      </div>
    </div>
  );
}
