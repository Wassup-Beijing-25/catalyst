/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

const LeaderCard = ({ player, index }: any) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index }}
      className="relative bg-[#111]/60 backdrop-blur-md text-white rounded-xl p-5 shadow-lg border border-gray-800 w-full"
    >
      {/* Trophy icon top right */}
      <div className="absolute top-3 right-3">
        {player.place === 1 ? (
          <>
            <img
              src="https://cdn-icons-png.flaticon.com/128/11881/11881968.png"
              alt=""
              className="w-16 h-16 pt-"
            />
          </>
        ) : player.place === 2 ? (
          <>
            <img
              src="https://cdn-icons-png.flaticon.com/128/2502/2502698.png"
              alt=""
              className="w-12 h-12 pt-2"
            />
          </>
        ) : player.place === 3 ? (
          <>
            <img
              src="https://cdn-icons-png.flaticon.com/128/12860/12860355.png"
              alt=""
              className="w-12 h-12 pt-2"
            />
          </>
        ) : (
          <>
            <img
              src="https://cdn-icons-png.flaticon.com/128/12860/12860327.png"
              alt=""
              className="w-12 h-12 pt-2"
            />
          </>
        )}
      </div>

      {/* Avatar, name, and rank */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={`https://api.dicebear.com/7.x/identicon/svg?seed=${player.name}`}
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <div className="text-sm font-semibold">{player.name}</div>
          <div className="text-xs text-zinc-400 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-yellow-300"></span>
            {player.rank}
          </div>
        </div>
      </div>

      <h2 className="text-lg font-semibold text-white mb-1">Chat App</h2>
      <p className="text-gray-400 text-sm mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex justify-between text-xs mb-1 text-gray-400">
          <span>8 ETH</span>
          <span>100 ETH</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
          <motion.div
            className="bg-purple-500 h-full rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${8}%` }}
            transition={{ type: "spring", stiffness: 120 }}
          />
        </div>
      </div>

      <button
        className="p-3 w-full mb-2 rounded-xl backdrop-blur-lg border border-indigo-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/30 hover:scale-110
                     hover:-rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer 
                     hover:border-indigo-500/50 hover:bg-gradient-to-tr hover:from-indigo-500/10 hover:to-black/40 group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
        <div className="relative z-10 flex items-center justify-center gap-2">
          <FaCode className="text-sm" />
          View Details
        </div>
      </button>
      {/* Stats row */}
      <div className="flex justify-between text-xs text-zinc-300">
        {/* Lokal Stats */}
        <div className="flex flex-col items-center flex-1">
          <span className="text-white font-mono text-sm">{player.stats}</span>
          <span className="text-[10px] mt-0.5">Lokal stats</span>
          <div className="w-8 h-0.5 bg-orange-400 mt-1 rounded-full" />
        </div>
        {/* Winrate */}
        <div className="flex flex-col items-center flex-1">
          <span className="text-white font-mono text-sm">{player.winrate}</span>
          <span className="text-[10px] mt-0.5">Winrate</span>
          <div className="w-8 h-0.5 bg-green-500 mt-1 rounded-full" />
        </div>
        {/* KDA */}
        <div className="flex flex-col items-center flex-1">
          <span className="text-white font-mono text-sm">{player.kda}</span>
          <span className="text-[10px] mt-0.5">KDA</span>
          <div className="w-8 h-0.5 bg-indigo-400 mt-1 rounded-full" />
        </div>
      </div>
    </motion.div>
  );
};

export default LeaderCard;
