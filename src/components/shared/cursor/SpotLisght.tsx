/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import useSpotlightEffect from "../../../hooks/useSpotlightEffect";

// Combine props with potential HTML canvas attributes

const SpotlightCursor = ({ config = {}, className, ...rest }: any) => {
  // Provide default configuration if not specified
  const spotlightConfig = {
    radius: 200,
    brightness: 0.15,
    color: "#ffffff",
    smoothing: 0.1,
    ...config,
  };

  const canvasRef = useSpotlightEffect(spotlightConfig);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] w-full h-full ${className}`}
      {...rest}
    />
  );
};

export default SpotlightCursor;
