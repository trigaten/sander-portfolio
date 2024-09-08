import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  stack: string[];
  date: string;
  link: string;
  description: string;
  image: any;
  research: boolean;
  home?: boolean;
}

const stackColors = [
  "bg-blue-700 text-white",
  "bg-green-700 text-white",
  "bg-yellow-700 text-white",
  "bg-red-700 text-white",
  "bg-purple-700 text-white",
  "bg-pink-700 text-white",
  "bg-indigo-700 text-white",
  "bg-teal-700 text-white",
];

export default function ProjectCard({
  title,
  stack,
  date,
  link,
  description,
  image,
  research,
  home,
}: ProjectCardProps) {
  if (home != true) {
    home = false;
  }

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10 lg:gap-20 items-start justify-center mb-8">
      <div className="flex flex-col space-y-2 order-2 md:order-1">
        <h3 className="text-2xl md:text-3xl font-skModernBold text-black">
          {title}
        </h3>
        <p className="text-sm md:text-md text-gray-500 font-skModernRegular pb-1">
          {date}
        </p>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech, index) => (
            <span
              key={index}
              className={`${
                stackColors[index % stackColors.length]
              } rounded-full px-2 py-1 text-xs md:text-sm font-skModernRegular`}
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="pt-2 font-skModernRegular text-black text-sm md:text-base">
          {description}
        </p>
        <Link
          href={link}
          className="pt-3 text-green-600 hover:text-emerald-700 transition-colors duration-300 text-base md:text-lg rounded font-skModernRegular"
          target="_blank"
        >
          {research ? "Paper" : "Link"}
        </Link>
      </div>
      <div className="order-1 md:order-2 w-full">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="rounded-lg w-full h-auto"
        />
      </div>
    </div>
  );
}
