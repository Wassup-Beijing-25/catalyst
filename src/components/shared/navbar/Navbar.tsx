import { Book } from "lucide-react";

const Navbar = () => {
  return (
    <nav
      className="fixed w-full top-5 z-[500] mx-auto flex items-center 
    justify-between px-6 py-3 rounded-full bg-black/10 backdrop-blur-md shadow-md max-w-4xl mx-auto mt-6 border border-white/20"
    >
      {/* Left: Logo */}
      <div className="flex items-center gap-2 text-black dark:text-white font-medium">
        <div className="border border-0.5 border-gray-600 p-2 rounded-xl flex item-center justify-center">
          <div className="planet-wrapper">
            <div className="planet"></div>
          </div>
        </div>

        <span>Catyalst</span>
      </div>

      {/* Center: Links */}
      <ul className="flex gap-6 font- text-sm text-black dark:text-gray-300">
        <li className="hover:font-semibold cursor-pointer">About us</li>
        <li className="hover:font-semibold cursor-pointer">Contact us</li>
        <li className="hover:font-semibold cursor-pointer">Help & support</li>
      </ul>

      {/* Right: Buttons */}
      <div className="flex items-center gap-3">
        {/* <button className="px-5 py-1.5 rounded-full border border-white/50 text-sm font-medium text-white bg-white/10 backdrop-blur-md hover:bg-white/20">
          Sign up
        </button> */}
        {/* <button className="px-5 py-1.5 rounded-full bg-purple-400 text-sm font-semibold text-black hover:bg-white transition">
          Login
        </button> */}
        <button className="button">
          <div className="blob1"></div>
          <div className="blob2"></div>
          <div className="inner">Log in</div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
