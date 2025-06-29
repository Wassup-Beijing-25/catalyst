import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/shared/navbar/Navbar";

const channels = [
  { name: "General", id: "general" },
  { name: "Announcements", id: "announcements" },
  { name: "Dev Talk", id: "dev" },
  { name: "Ideas & Feedback", id: "feedback" },
];

const Community = () => {
  const [activeChannel, setActiveChannel] = useState("general");

  return (
    <div className="max-h-screen  bg-black relative overflow-hidden">
      {/* Navbar */}
      <div className="w-full justify-between items-center flex flex-col">
        <Navbar />
      </div>

      {/* Background Grid Effect */}
      <div className="absolute inset-0 opacity-[0.02] z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Glowing Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-3xl z-0" />

      {/* Layout with visual separation */}
      <div className="relative z-10 grid grid-cols-[360px_1fr] h-[90vh] mx-8 mt-10 gap-6">
        {/* Sidebar */}
        <div className="h-full rounded-2xl bg-gray-900/40 backdrop-blur-lg p-5 shadow-md border border-gray-800/40">
          <h2 className="text-white text-xl font-semibold mb-4">Channels</h2>
          <ul className="space-y-2">
            {channels.map((channel) => (
              <li
                key={channel.id}
                onClick={() => setActiveChannel(channel.id)}
                className={`cursor-pointer px-4 py-3 rounded-full text-lg transition-all duration-200 ${
                  activeChannel === channel.id
                    ? "bg-purple-500/20 text-purple-300 font-medium"
                    : "text-gray-400 hover:text-purple-200 hover:bg-purple-500/10"
                }`}
              >
                #{channel.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Chatbox */}
        <div className="h-[86%] mt-24 rounded-2xl bg-black/20 backdrop-blur-2xl p-6 flex flex-col justify-between shadow-lg border border-gray-800/30">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4 capitalize">
              #{activeChannel}
            </h2>

            {/* Chat Bubbles */}
            <div className="space-y-4 overflow-y-auto h-[50vh] pr-2 custom-scrollbar">
              {[...Array(10)].map((_, i) => {
                const isUser = i % 2 === 0;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`flex ${
                      isUser ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`
                        max-w-[70%] px-4 py-3 rounded-2xl border text-sm shadow-sm
                        ${
                          isUser
                            ? "bg-purple-600/20 border-purple-500/20 text-white rounded-br-none"
                            : "bg-gray-800/40 border-gray-700 text-gray-200 rounded-bl-none"
                        }
                      `}
                    >
                      <p className="font-medium mb-1 text-xs text-purple-300">
                        {isUser ? "You" : `@user${i + 1}`}
                      </p>
                      <p>
                        {isUser
                          ? "Here’s a message from me as the user."
                          : `Hi! This is message #${i + 1} from the community.`}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Input */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full p-3 rounded-xl bg-gray-900/60 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
