"use client";
import React from "react";
import { SparklesCore } from "./sparkles";



function SparklesPreview({ title }) {
  return (
    // <div className="mt-0 lg:mt-20 w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
    //   <h2 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
    //     {title}
    //   </h2>
      <div className="hidden sm:block w-[40rem] h-40 relative rounded-full">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-amber-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-amber-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    // </div>
  );
}

export default SparklesPreview;