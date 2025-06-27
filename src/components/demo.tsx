"use client";

import { Card } from "./card";
// import SpotlightCursor from "./shared/cursor/SpotLisght";
import { SplineScene } from "./splite";
import { Spotlight } from "./spotlight";

export function SplineSceneBasic() {
  return (
    <Card className="relative w-full h-screen  bg-black/[0.96] relative overflow-hidden">
      {/* <SpotlightCursor /> */}
      <Spotlight
      // className="-top-40 left-0 md:left-60 md:-top-20"
      // fill="white"
      />

      <div className="flex h-full">
        {/* Left content */}

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
}
