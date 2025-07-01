/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaShareAlt, FaTrash } from "react-icons/fa";
import Navbar from "../../components/shared/navbar/Navbar";

const initialChannels = [
  { name: "General", id: "general" },
  { name: "Announcements", id: "announcements" },
  { name: "Dev Talk", id: "dev" },
  { name: "Ideas & Feedback", id: "feedback" },
];

const Community = () => {
  const [channels, setChannels] = useState(initialChannels);
  const [activeChannel, setActiveChannel] = useState("general");
  const [messages, setMessages] = useState([
    { user: "bot", text: "Welcome to the community!", reactions: {} },
  ]);
  const [input, setInput] = useState("");
  const [newChannel, setNewChannel] = useState("");
  const [channelSearch, setChannelSearch] = useState("");
  const [showTyping, setShowTyping] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const messagesEndRef = useRef<any>(null);

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages((prev) => [
      ...prev,
      { user: "you", text: input, reactions: {} },
    ]);
    setInput("");

    setShowTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          user: "community-bot",
          text: "Thanks for sharing! 😊",
          reactions: {},
        },
      ]);
      setShowTyping(false);
    }, 1000);
  };

  const addReaction = (index: any, emoji: any) => {
    setMessages((prev) => {
      const updated = [...prev];
      const reactions: any = { ...updated[index].reactions };
      reactions[emoji] = (reactions[emoji] || 0) + 1;
      updated[index] = { ...updated[index], reactions };
      return updated;
    });
  };

  // const handleCreateChannel = () => {
  //   const trimmed = newChannel.trim();
  //   if (trimmed && !channels.find((c) => c.id === trimmed.toLowerCase())) {
  //     const newChan = { name: trimmed, id: trimmed.toLowerCase() };
  //     setChannels((prev) => [...prev, newChan]);
  //     setActiveChannel(newChan.id);
  //     setNewChannel("");
  //   }
  // };

  const handleDeleteChannel = (id) => {
    setChannels((prev) => prev.filter((ch) => ch.id !== id));
    if (activeChannel === id && channels.length > 1) {
      const fallback = channels.find((c) => c.id !== id)?.id || "general";
      setActiveChannel(fallback);
    }
  };

  const handleShareChannel = (name) => {
    navigator.clipboard.writeText(`#${name}`);
    alert(`Channel #${name} copied to clipboard!`);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, showTyping]);

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
    <>
      <div className="w-full justify-between items-center flex flex-col">
        <Navbar />
      </div>

      <div className="max-h-screen bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] z-0">
          <div className="absolute inset-0" />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/10 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-3xl z-0" />

        <div className="relative z-10 grid grid-cols-[360px_1fr] h-[90vh] mx-8 mt-10 gap-6">
          <div className="h-full rounded-2xl p-5 shadow-md border border-gray-800/40 flex flex-col z-[100] backdrop-blur-sm bg-black/20">
            <h2 className="text-white text-xl font-semibold mb-4">Channels</h2>

            <input
              type="text"
              placeholder="Search channels..."
              value={channelSearch}
              onChange={(e) => setChannelSearch(e.target.value)}
              className="w-full mb-4 px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-700"
            />

            <div className="space-y-2 flex-1  flex-col justify-center items-center">
              {channels
                .filter((channel) =>
                  channel.name
                    .toLowerCase()
                    .includes(channelSearch.toLowerCase())
                )
                .map((channel) => (
                  <div
                    key={channel.id}
                    className={` flex justify-between p-3 w-full mb-3 rounded-full  hover:shadow-2xl hover:shadow-indigo-500/30 hover:scale-110
                           hover:-rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer 
                           hover:border-indigo-500/50 hover:bg-gradient-to-tr hover:from-indigo-500/10 hover:to-black/40 group relative overflow-hidden items-center px-4 py-3 rounded-full text-lg transition-all duration-200 cursor-pointer group  ${
                             activeChannel === channel.id
                               ? `bg-purple-500/10  text-purple-300 font-medium`
                               : `text-gray-400 hover:text-purple-200 hover:bg-purple-500/10 border border-transparent hover:backdrop-blur-lg hover:border hover:border-indigo-500/20 hover:bg-gradient-to-tr 
                        from-black/60 to-black/40 shadow-lg`
                           }`}
                    onClick={() => setActiveChannel(channel.id)}
                  >
                    <div className="flex items-center gap-3 text-base">
                      <img
                        src={`https://api.dicebear.com/7.x/${"identicon"}/svg?seed=${
                          channel.name
                        }`}
                        alt={channel.name}
                        className="w-6 h-6 "
                      />
                      <span>#{channel.name}</span>
                    </div>

                    <span className="flex gap-3 opacity-0 group-hover:opacity-100 transition">
                      <FaShareAlt
                        className="hover:text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShareChannel(channel.name);
                        }}
                      />
                      <FaTrash
                        className="hover:text-red-500"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteChannel(channel.id);
                        }}
                      />
                    </span>
                  </div>
                ))}
            </div>

            {/* <div className="mt-4">
              <input
                type="text"
                placeholder="New channel name..."
                value={newChannel}
                onChange={(e) => setNewChannel(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleCreateChannel()}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-700"
              />
              <button
                onClick={handleCreateChannel}
                className="mt-2 w-full py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white transition"
              >
                Create Channel
              </button>
            </div> */}
          </div>

          <div className="h-[86%] z-[100] mt-24 rounded-2xl bg-black/20 backdrop-blur-sm  flex flex-col justify-between shadow-lg border border-gray-800/30">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 capitalize border-b border-gray-900 pb-2 p-6">
                #{activeChannel}
              </h2>
              <div className="space-y-4 overflow-y-auto h-[50vh] pr-2 custom-scrollbar p-6">
                {messages.map((msg, i) => {
                  const isUser = msg.user === "you";
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.03, type: "spring" }}
                      className={`flex ${
                        isUser ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`flex items-end gap-2 max-w-[75%] ${
                          isUser ? "flex-row-reverse" : ""
                        }`}
                      >
                        <img
                          src={`https://api.dicebear.com/7.x/${
                            isUser ? "bottts" : "identicon"
                          }/svg?seed=${msg.user}`}
                          className="w-9 h-9 rounded-full shadow-md"
                          alt="avatar"
                        />
                        <div
                          className={`relative px-5 py-3 rounded-2xl border shadow-md text-sm whitespace-pre-wrap ${
                            isUser
                              ? "bg-purple-700/30 border-purple-600/30 text-white rounded-br-none"
                              : "bg-gray-900/60 border-gray-700 text-gray-200 rounded-bl-none"
                          }`}
                        >
                          <p className="font-semibold mb-1 text-xs text-purple-300">
                            {msg.user === "you" ? "You" : `@${msg.user}`}
                          </p>
                          <p>{msg.text}</p>
                          <div className="mt-2 flex gap-2 text-xs text-gray-400">
                            {Object.entries({
                              ...msg.reactions,
                              "❤️": 0,
                              "👍": 0,
                              "😂": 0,
                            }).map(([emoji, count]) => (
                              <button
                                key={emoji}
                                onClick={() => addReaction(i, emoji)}
                                className="hover:text-white px-2 py-1 bg-black/20 rounded-full border border-gray-700/40"
                              >
                                {emoji} {count > 0 ? count : ""}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
                {showTyping && (
                  <div className="flex justify-start">
                    <div className="px-4 py-3 rounded-2xl bg-gray-800/50 border border-gray-700 text-sm text-gray-300 flex items-center gap-1 animate-pulse">
                      <span className="animate-bounce">●</span>
                      <span className="animate-bounce delay-150">●</span>
                      <span className="animate-bounce delay-300">●</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            <div className="mt-4 flex gap-2 items-center">
              <input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="w-full p-3 rounded-xl bg-gray-900/60 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
              <button
                onClick={sendMessage}
                className="p-3 rounded-full bg-gradient-to-tr from-purple-500 to-purple-700 hover:brightness-110 transition shadow-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-5 h-5 rotate-45"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6.75 6.75L19.5 4.5"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Background layer */}
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full gradient-bg grid-overlay" />
          </div>

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
        </div>
      </div>
    </>
  );
};

export default Community;
