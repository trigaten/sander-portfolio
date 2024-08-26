import React from "react";
import Image from "next/image";

export default function GardenHome() {
  return (
    <div className="flex items-center justify-center w-full p-4 mt-12 md:mt-48">
      <div className="flex flex-col md:flex-row w-full max-w-7xl">
        <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 font-skModernBold text-black">
            The Garden 🪴
          </h1>
        </div>
      </div>
    </div>
  );
}
