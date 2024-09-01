"use client";
import React, { useState } from "react";
import Image from "next/image";
import image1 from "@/../public/gardenPhotos/home/image1.png";
import image2 from "@/../public/gardenPhotos/home/image2.png";
import image3 from "@/../public/gardenPhotos/home/image3.png";
import image4 from "@/../public/gardenPhotos/home/image4.png";
import image5 from "@/../public/gardenPhotos/home/image5.png";
import image6 from "@/../public/gardenPhotos/home/image6.png";
import image7 from "@/../public/gardenPhotos/home/image7.png";
const gardenImages = [
  [image1, "Banana Plant Lobster Claw", "Latin Name", "Description"],
  [image2, "Blueberry Plant", "Latin Name", "Description"],
  [image3, "Banana Plant Lobster Claw", "Latin Name", "Description"],
  [image4, "Banana Plant Lobster Claw", "Latin Name", "Description"],
  [image5, "Banana Plant Lobster Claw", "Latin Name", "Description"],
  [image6, "Banana Plant Lobster Claw", "Latin Name", "Description"],
  [image7, "Banana Plant Lobster Claw", "Latin Name", "Description"],
];

interface GardenImage {
  default: string;
  src: string;
  height: number;
  width: number;
  blurDataURL: string;
  blurWidth: number;
  blurHeight: number;
}

type GardenImageData = [GardenImage, string, string, string];

interface ImageCardProps {
  image: GardenImageData;
  index: number;
  className: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, index, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-lg ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={image[0]}
        alt={image[1]}
        className="transition-transform duration-300 ease-in-out group-hover:scale-110"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex flex-col justify-center items-center text-white p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
        <h3 className="text-xl font-bold mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
          {image[1]}
        </h3>
        <p className="text-sm italic mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ease-in-out delay-75">
          {image[2]}
        </p>
        <p className="text-sm text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ease-in-out delay-150">
          {image[3]}
        </p>
      </div>
    </div>
  );
};

export default function GardenHome() {
  return (
    <div className="flex items-center justify-center w-full p-4 mt-12 md:mt-24">
      <div className="flex flex-col w-full max-w-7xl">
        <h1 className="text-2xl md:text-4xl font-bold mb-8 font-skModernBold text-black">
          The Garden 🪴
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ImageCard
            image={gardenImages[0] as GardenImageData}
            index={0}
            className="col-span-2 md:col-span-2 h-96"
          />
          <ImageCard
            image={gardenImages[1] as GardenImageData}
            index={1}
            className="col-span-1 md:col-span-1 h-96"
          />
          <ImageCard
            image={gardenImages[2] as GardenImageData}
            index={2}
            className="col-span-1 md:col-span-1 h-96"
          />
          <ImageCard
            image={gardenImages[3] as GardenImageData}
            index={3}
            className="col-span-1 md:col-span-1 h-64"
          />
          <ImageCard
            image={gardenImages[4] as GardenImageData}
            index={4}
            className="col-span-1 md:col-span-1 h-64"
          />
          <ImageCard
            image={gardenImages[5] as GardenImageData}
            index={5}
            className="col-span-2 md:col-span-2 h-64"
          />
          <ImageCard
            image={gardenImages[6] as GardenImageData}
            index={6}
            className="col-span-2 md:col-span-4 h-68"
          />
        </div>
      </div>
    </div>
  );
}
