import React from "react";
import Image from "next/image";
import projectBg from "@/../public/blogs/ExampleBlog.png";

export default function BlogsHero() {
  return (
    <header className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={projectBg}
          alt="Project background"
          className="brightness-[.65]"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>

      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
        <div className="flex flex-col py-4 sm:py-6 md:py-8 gap-y-2 sm:gap-y-3 md:gap-y-4 px-4 sm:px-6 md:px-20 w-full">
          <div className="flex w-full md:w-[55%]">
            <span className="bg-[#4545a3] rounded-full px-3 py-1 text-xs sm:text-sm text-white font-skModernRegular">
              AI/ML
            </span>
          </div>
          <div className="w-full md:w-[55%]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-skModernBold text-white leading-tight">
              From Beginner to Pro: Mastering AI Concepts One Step at a Time
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-y-2 sm:gap-y-0">
            <p className="text-sm sm:text-base md:text-xl font-skModernRegular text-white w-full md:w-[55%] text-left">
              A concise guide on how Learn Prompting can help you learn prompt
              engineering and learn how to use LLMs effectively.
            </p>
            <p className="text-sm sm:text-base md:text-xl font-skModernLight text-white w-full md:w-[55%] text-left sm:text-right">
              22 Aug 2024 • 5 mins read
            </p>
          </div>
          <div className="flex space-x-1 pt-2 sm:pt-3 md:pt-5">
            <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-white rounded-full"></div>
            <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 border-2 border-white rounded-full"></div>
            <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 border-2 border-white rounded-full"></div>
          </div>
        </div>
      </div>
    </header>
  );
}