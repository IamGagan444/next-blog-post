import React from "react";
import { TypeEffect } from "./TypeEffect";


export function GridBackground() {
  return (
    <div className="h-[35rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
    
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {/* <p className="text-3xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
welcome to crypto uncle
      </p> */}
      <TypeEffect/>
    </div>
  );
}
