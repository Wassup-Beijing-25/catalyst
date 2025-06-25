import React from "react";

const HeroText = () => {
  return (
    <div className="relative">
      <span className="inline-flex items-center gap-2 text-sm font-medium px-4 py-1 border border-purple-700 rounded-full bg-white/10 text-purple-300">
        <span className="text-xs bg-purple-600 px-2 py-0.5 rounded-full text-white">
          NEW
        </span>
        Latest integration just arrived
      </span>
      <div className="text-4xl md:text-8xl font-semibold flex-col leading-tight">
        <div className="text-white/80">Catyalist</div>{" "}
        <div className="text-white -mt-2 mb-3">Grant Access</div>
        <img
          src="https://framerusercontent.com/images/fTvRR9UO6UHLEJxbKleRMkrgzgo.png?scale-down-to=512"
          alt=""
          className="absolute top-5 right-4 w-32 md:w-32 "
        />
        <img
          src="https://framerusercontent.com/images/F95XtBuIu9yRJpVFOQe6khYgo.png?scale-down-to=512"
          alt=""
          className="absolute top-48 -left-32 w-32 md:w-40 "
        />
        <img
          src="https://framerusercontent.com/images/fTvRR9UO6UHLEJxbKleRMkrgzgo.png?scale-down-to=512"
          alt=""
          className="absolute -top-48 -left-32 w-32 md:w-40 "
        />
      </div>
      <p className="text-white/70 text-lg max-w-md">
        Connect with investors and unlock grants to power your next big project
        — built for developers shaping the future.
      </p>
    </div>
  );
};

export default HeroText;
