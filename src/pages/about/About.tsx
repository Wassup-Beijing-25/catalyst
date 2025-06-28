import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/shared/navbar/Navbar";
const About = () => {
  const [hoverOffset, setHoverOffset] = useState({ x: 0, y: 0 });
  const [activeImg, setActiveImg] = useState<string | null>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleImageMouseMove = (
    e: React.MouseEvent<HTMLImageElement>,
    id: string
  ) => {
    if (activeImg !== id) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setHoverOffset({ x: x * 0.8, y: y * 0.8 });
  };

  const floatTransition = {
    repeat: Infinity,
    repeatType: "reverse" as const,
    duration: 4,
    ease: "easeInOut",
  };

  const features = [
    {
      title: "Quadratic Funding",
      description: "Fair distribution based on community support, not just capital size",
      icon: "🎯",
      delay: 0.1
    },
    {
      title: "Anonymous Evaluation",
      description: "Protect builder privacy during evaluation for unbiased support",
      icon: "🔒",
      delay: 0.2
    },
    {
      title: "Transparent On-Chain",
      description: "All contributions and flows are verifiable on Aptos blockchain",
      icon: "⛓️",
      delay: 0.3
    },
    {
      title: "Trustless Coordination",
      description: "Remove gatekeepers from funding with decentralized governance",
      icon: "🌐",
      delay: 0.4
    }
  ];


  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
        <div className="w-full justify-between items-center   flex flex-col">
        <Navbar />
      </div>
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`
          }}
        />
      </div>

      {/* Ambient Purple Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-3xl" />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-40 right-20 w-24 h-24 bg-violet-500/10 rounded-full blur-2xl"
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 px-6 py-16">
        {/* Hero Section */}
        <motion.div
          className="max-w-6xl mx-auto mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mt-15 mb-16">
            <motion.h1 
              className="text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent tracking-tight"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              CATALYST
            </motion.h1>
            
            <motion.div
              className="w-20 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 80, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            />
            
            <motion.p 
              className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              The future of <span className="text-purple-300 font-medium">decentralized grant funding</span> on Aptos. 
              Empowering public good projects through transparent, community-driven evaluation and 
              <span className="text-purple-300 font-medium"> quadratic funding</span>.
            </motion.p>
          </div>
          

          {/* Interactive Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: feature.delay }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="relative h-56 rounded-2xl overflow-hidden border border-gray-800/50 bg-gray-900/20 backdrop-blur-sm group-hover:border-purple-500/30 transition-all duration-500">
                  {/* Subtle Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                    <div>
                      <motion.div 
                        className="text-3xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-300"
                        animate={activeCard === index ? { scale: 1.1 } : { scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {feature.icon}
                      </motion.div>
                      <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors duration-300 font-light">
                      {feature.description}
                    </p>
                  </div>

                  {/* Subtle Border Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border border-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={activeCard === index ? { boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" } : {}}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main Content Section */}
          <motion.div
            className="bg-gray-900/30 backdrop-blur-xl border border-gray-800/50 rounded-3xl p-8 lg:p-12 relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {/* Subtle Inner Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 via-transparent to-violet-500/5" />

            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <motion.h2 
                    className="text-3xl lg:text-4xl font-bold mb-8 text-white tracking-tight"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                  >
                    Revolutionizing Grant Funding
                  </motion.h2>
                  
                  <motion.div 
                    className="space-y-6 text-gray-400 leading-relaxed font-light"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.3 }}
                  >
                    <p>
                      <span className="text-purple-300 font-medium">Catalyst</span> represents the next evolution in 
                      decentralized funding. Built on the <span className="text-purple-300 font-medium">Aptos blockchain</span>, 
                      we're creating a transparent ecosystem where innovation thrives through community support.
                    </p>
                    
                    <p>
                      Our <span className="text-purple-300 font-medium">quadratic funding model</span> ensures that 
                      projects with genuine community backing receive proportional support, democratizing access to 
                      resources regardless of individual contribution size.
                    </p>
                    
                    <p>
                      By maintaining <span className="text-purple-300 font-medium">builder anonymity</span> during 
                      evaluation, we eliminate bias and promote merit-based funding decisions. Every transaction is 
                      verifiable on-chain, ensuring complete transparency and trust.
                    </p>
                  </motion.div>
                </div>

                <div className="relative">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div 
                      className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 text-center group hover:border-purple-500/30 transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-2xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">100%</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">Transparent</div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 text-center group hover:border-purple-500/30 transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-2xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">0</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">Gatekeepers</div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 text-center group hover:border-purple-500/30 transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-2xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">∞</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">Possibilities</div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 text-center group hover:border-purple-500/30 transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-2xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">24/7</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">Available</div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Images with Enhanced Effects */}
      <motion.img
        src="https://framerusercontent.com/images/fTvRR9UO6UHLEJxbKleRMkrgzgo.png?scale-down-to=512"
        alt=""
        className="absolute top-10 right-4 w-28 md:w-36 opacity-40 hover:opacity-70 transition-opacity duration-500"
        initial={{ y: 0, rotate: 0 }}
        animate={activeImg === "img1" ? {} : { y: [0, -12, 0], rotate: [0, 3, 0] }}
        transition={floatTransition}
        whileHover={{
          x: hoverOffset.x * 0.5,
          y: hoverOffset.y * 0.5,
          scale: 1.05,
          rotate: 5,
          transition: {
            type: "spring",
            stiffness: 30,
            damping: 8,
          },
        }}
        onMouseEnter={() => setActiveImg("img1")}
        onMouseLeave={() => setActiveImg(null)}
        onMouseMove={(e) => handleImageMouseMove(e, "img1")}
      />

      <motion.img
        src="https://framerusercontent.com/images/F95XtBuIu9yRJpVFOQe6khYgo.png?scale-down-to=512"
        alt=""
        className="absolute top-48 left-3 w-28 md:w-40 opacity-40 hover:opacity-70 transition-opacity duration-500"
        initial={{ y: 0, rotate: 0 }}
        animate={activeImg === "img2" ? {} : { y: [0, 10, 0], rotate: [0, -2, 0] }}
        transition={{...floatTransition, duration: 5}}
        whileHover={{
          x: hoverOffset.x * 0.5,
          y: hoverOffset.y * 0.5,
          scale: 1.05,
          rotate: -5,
          transition: {
            type: "spring",
            stiffness: 30,
            damping: 8,
          },
        }}
        onMouseEnter={() => setActiveImg("img2")}
        onMouseLeave={() => setActiveImg(null)}
        onMouseMove={(e) => handleImageMouseMove(e, "img2")}
      />

      <motion.img
        src="https://framerusercontent.com/images/VcKoW6bgdvU8tkSgdHKKf2duo.png?scale-down-to=512"
        alt=""
        className="absolute bottom-10 right-32 w-28 md:w-40 opacity-40 hover:opacity-70 transition-opacity duration-500"
        initial={{ y: 0, rotate: 0 }}
        animate={activeImg === "img3" ? {} : { y: [0, -8, 0], rotate: [0, 4, 0] }}
        transition={{...floatTransition, duration: 4.5}}
        whileHover={{
          x: hoverOffset.x * 0.5,
          y: hoverOffset.y * 0.5,
          scale: 1.05,
          rotate: 8,
          transition: {
            type: "spring",
            stiffness: 30,
            damping: 8,
          },
        }}
        onMouseEnter={() => setActiveImg("img3")}
        onMouseLeave={() => setActiveImg(null)}
        onMouseMove={(e) => handleImageMouseMove(e, "img3")}
      />

      {/* Subtle Cursor Glow */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-purple-400/30 rounded-full blur-sm pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      />
    </div>
  );
};

export default About;