import { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaThumbsUp, FaThumbsDown } from "react-icons/fa";

interface ProjectCardProps {
  title?: string;
  description?: string;
  votes?: { up: number; down: number };
  progress?: { current: number; total: number };
  category?: "Defi" | "Gaming" | "NFT" | "Earn" | "Learn" | "DAO";
}

const categoryColorMap: Record<ProjectCardProps["category"], string> = {
  Defi: "bg-pink-500/20 text-pink-400 border-pink-400/30",
  Gaming: "bg-blue-500/20 text-blue-400 border-blue-400/30",
  NFT: "bg-yellow-400/20 text-yellow-300 border-yellow-300/30",
  Earn: "bg-green-500/20 text-green-400 border-green-400/30",
  Learn: "bg-purple-500/20 text-purple-400 border-purple-400/30",
  DAO: "bg-red-500/20 text-red-400 border-red-400/30",
};

export default function ProjectCard({
  title = "Multi-language Editor",
  description = "Switch between all supported languages",
  votes = { up: 12, down: 3 },
  progress = { current: 35, total: 100 },
  category = "Learn",
}: ProjectCardProps) {
  const [upVotes, setUpVotes] = useState(votes.up);
  const [downVotes, setDownVotes] = useState(votes.down);

  const percentage = (progress.current / progress.total) * 100;
  const badgeStyles = categoryColorMap[category];

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 12 }}
      className="relative bg-[#111]/60 backdrop-blur-md text-white rounded-xl p-5 shadow-lg border border-gray-800 w-full"
    >
      {/* Category Badge */}
      <div
        className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full border ${badgeStyles}`}
      >
        {category}
      </div>

      <h2 className="text-lg font-semibold text-white mb-1">{title}</h2>
      <p className="text-gray-400 text-sm mb-4">{description}</p>

      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex justify-between text-xs mb-1 text-gray-400">
          <span>{progress.current} ETH</span>
          <span>{progress.total} ETH</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
          <motion.div
            className="bg-purple-500 h-full rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ type: "spring", stiffness: 120 }}
          />
        </div>
      </div>

      {/* Action button */}
      <button
        className="p-3 w-full rounded-xl backdrop-blur-lg border border-indigo-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/30 hover:scale-110
       hover:-rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer 
       hover:border-indigo-500/50 hover:bg-gradient-to-tr hover:from-indigo-500/10 hover:to-black/40 group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
        <div className="relative z-10 flex items-center justify-center gap-2">
          <FaCode className="text-sm" />
          {title}
        </div>
      </button>

      {/* Like / Dislike */}
      <div className="flex mt-5 items-center justify-between text-sm gap-4">
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={() => setUpVotes((v) => v + 1)}
          className="flex items-center gap-1 text-green-400 hover:underline"
        >
          <FaThumbsUp /> {upVotes}
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={() => setDownVotes((v) => v + 1)}
          className="flex items-center gap-1 text-red-400 hover:underline"
        >
          <FaThumbsDown /> {downVotes}
        </motion.button>
      </div>
    </motion.div>
  );
}
