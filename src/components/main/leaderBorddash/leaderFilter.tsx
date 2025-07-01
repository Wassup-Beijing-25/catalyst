import React from "react";

const LeaderFilter = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Leaderboard</h1>
        <div className="gap-2 text-sm hidden sm:flex ">
          <button className="bg-zinc-800 px-3 py-1 rounded hover:bg-zinc-700">
            24h
          </button>
          <button className="bg-zinc-800 px-3 py-1 rounded hover:bg-zinc-700">
            7D
          </button>
          <button className="bg-zinc-800 px-3 py-1 rounded hover:bg-zinc-700">
            30D
          </button>
          <button className="bg-zinc-800 px-3 py-1 rounded hover:bg-zinc-700">
            Seasonal
          </button>
          <button className="bg-zinc-800 px-3 py-1 rounded hover:bg-zinc-700">
            Queue
          </button>
          <button className="bg-violet-600 px-3 py-1 rounded hover:bg-violet-500">
            Show my place
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeaderFilter;
