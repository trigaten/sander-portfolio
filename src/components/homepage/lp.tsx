import React from "react";
import Image1 from "@/../public/LP/image1.png";
import Image2 from "@/../public/LP/image2.png";
import Image3 from "@/../public/LP/image3.png";
import Image4 from "@/../public/LP/image4.png";
import Image from "next/image";
import Link from "next/link";

export default function LearnPrompting() {
  const images = [Image1, Image2, Image3];

  return (
    <>
      <div className="container mx-auto mt-8 px-8 md:px-4">
        {/* <div className="flex flex-wrap justify-center gap-6 w-full my-36">
          {images.map((img, index) => (
          <Link href="https://learnprompting.org/" target="_blank" key={index}>
            <div
              className="relative w-96 h-72 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <Image
                src={img}
                alt={`image${index + 1}`}
                className="transition-transform duration-300 hover:scale-110"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover"
                }} />
            </div>
          </Link>
        ))}
        </div> */}

        <div className="flex items-center justify-center w-full py-4 mt-4 md:mt-24">
          <div className="flex flex-col md:flex-row w-full max-w-7xl">
            <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
              <h1 className="text-3xl font-bold mb-2 font-skModernBold text-black">
                Learn Prompting
              </h1>
              <div className="flex items-center mb-4">
                <h2 className="text-md text-gray-500 font-skModernRegular mr-1">
                  December 2022 -
                </h2>
                <div className="flex items-center">
                  <div
                    className={`w-2 h-2 bg-green-600 rounded-full mr-[0.4rem] mt-1`}
                  ></div>
                  <span
                    className={`text-lg font-skModernRegular text-green-600`}
                  >
                    Present
                  </span>
                </div>
              </div>
              {/* <div className="flex items-center mb-2">
              <h2 className="text-lg text-gray-400 font-skModernRegular mr-2">
                December 2022 -
              </h2>
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 bg-green-600 rounded-full`}></div>
                <span
                  className={`text-lg font-skModernRegular text-green-600`}
                >
                  Present
                </span>
              </div>
            </div> */}
              <h3 className="text-md font-skModernRegular text-black mb-4">
                Co-Founder and CEO
              </h3>
              <Link
                href="https://learnprompting.org/"
                className="pt-3 text-green-600 hover:text-emerald-700 transition-colors duration-300 text-lg rounded font-skModernRegular"
                target="_blank"
              >
                Website
              </Link>
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
