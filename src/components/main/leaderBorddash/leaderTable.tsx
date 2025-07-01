/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";
import { useState } from "react";

const LeaderTable = ({ leaderboard }: any) => {
  const [search, setSearch] = useState("");

  const filteredPlayers = leaderboard.filter((player: any) =>
    player.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="bg-[#111]/60 backdrop-blur-md text-white rounded-xl p-5 shadow-lg border border-gray-800  sm:w-1/2 overflow-x-auto">
        {/* 🔍 Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search player..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-64 px-4 py-2 rounded-lg bg-zinc-900 text-white placeholder-zinc-500 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-violet-600 transition"
          />
        </div>

        {/* 🧾 Table */}
        <table className="w-full text-sm table-auto border-collapse rounded-2xl">
          <thead className="bg-[#0d0d0d] text-zinc-400 rounded-2xl">
            <tr>
              <th className="px-4 py-3 text-left">Place</th>
              <th className="px-4 py-3 text-left">Player</th>
              <th className="px-4 py-3 text-left">Lokal stats</th>
              <th className="px-4 py-3 text-left">Winrate</th>
              <th className="px-4 py-3 text-left">KDA</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="rounded-2xl">
            {filteredPlayers.map((player: any, index: number) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
                className="hover:bg-zinc-800/60 border-t border-zinc-700 transition duration-200"
              >
                <td className="px-4 py-3">{index + 5}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://api.dicebear.com/7.x/identicon/svg?seed=${player.name}`}
                      alt="avatar"
                      className="w-8 h-8 rounded-full"
                    />
                    <span>{player.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3">{player.stats}</td>
                <td className="px-4 py-3">{player.winrate}</td>
                <td className="px-4 py-3">{player.kda}</td>
                <td className="px-4 py-3">
                  <button className="flex items-center gap-2 text-sm px-3 py-1 bg-violet-600 hover:bg-violet-700 transition rounded-md text-white">
                    <FaEye className="text-sm" />
                    View
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LeaderTable;
