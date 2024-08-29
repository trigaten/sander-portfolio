import React from "react";
import Image1 from "@/../public/LP/image1.png";
import Image2 from "@/../public/LP/image2.png";
import Image3 from "@/../public/LP/image3.png";
import Image4 from "@/../public/LP/image4.png";
import Image from "next/image";

export default function LearnPrompting() {
  const images = [Image1, Image2, Image3];

  return (
    <>
      <div className="container mx-auto px-4 mt-8">
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative w-96 h-72 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={img}
                alt={`image${index + 1}`}
                className="transition-transform duration-300 hover:scale-110"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center w-full p-4 mt-4 md:mt-24">
          <div className="flex flex-col md:flex-row w-full max-w-7xl">
            <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
              <h1 className="text-2xl md:text-4xl font-bold mb-4 font-skModernBold text-black">
                Learn Prompting
              </h1>
              <div className="flex items-center mb-2">
                <h2 className="text-lg text-gray-400 font-skModernRegular mr-2">
                  December 2022 -
                </h2>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-1"></div>
                  <span className="text-sm font-skModernRegular text-green-600">
                    Present
                  </span>
                </div>
              </div>
              <h3 className="text-sm font-skModernRegular text-black mb-4">
                Co-Founder and CEO
              </h3>
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-lg md:text-xl text-gray-600 font-skModernRegular">
                Learn Prompting is a comprehensive guide to understanding and
                mastering the art of prompt engineering. It covers various
                techniques and strategies to effectively communicate with AI
                models, helping you get the most out of AI-powered tools and
                applications. Whether you're a beginner or an experienced user,
                this resource will enhance your skills in crafting prompts for
                optimal results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
