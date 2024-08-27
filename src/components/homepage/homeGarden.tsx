"use client";
import React, { useState } from "react";
import Image from "next/legacy/image";
import image1 from "@/../public/gardenPhotos/home/image1.png";
import image2 from "@/../public/gardenPhotos/home/image2.png";
const gardenImages = [
  [image1, "Banana Plant Lobster Claw", "Latin Name", "Description"],
  [image2, "Blueberry Plant", "Latin Name", "Description"],
  [image1, "Banana Plant Lobster Claw", "Latin Name", "Description"],
  [image1, "Banana Plant Lobster Claw", "Latin Name", "Description"],
  [image1, "Banana Plant Lobster Claw", "Latin Name", "Description"],
  [image1, "Banana Plant Lobster Claw", "Latin Name", "Description"],
  [image1, "Banana Plant Lobster Claw", "Latin Name", "Description"],
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={`relative overflow-hidden rounded-lg ${className}`}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <Image
        src={image[0]}
        alt={image[1]}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 hover:scale-110"
      />
      {hoveredIndex === index && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
          <h3 className="text-xl font-bold mb-2">{image[1]}</h3>
          <p className="text-sm italic mb-2">{image[2]}</p>
          <p className="text-sm text-center">{image[3]}</p>
        </div>
      )}
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
