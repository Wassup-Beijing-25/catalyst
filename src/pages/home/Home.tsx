import { motion } from "framer-motion";
import Navbar from "../../components/shared/navbar/Navbar";
import SeoLandingPage from "../../components/Test";

const Home = () => {
  return (
    <div>
      {" "}
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
          <SeoLandingPage />
          <div className="flex absolute right-0 top-5 justify-center -mb-1 z-[100] lg:justify-end">
            <motion.img
              src="https://framerusercontent.com/images/vB2MtWwZpfQllMWCRyLNFppKWyw.png?scale-down-to=1024"
              alt="3D cubes"
              className="w-[85%] object-contain drop-shadow-2xl"
              initial={{ y: 0 }}
              animate={{ y: [0, -40, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
