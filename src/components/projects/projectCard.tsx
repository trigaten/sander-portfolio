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
    <div className="grid grid-cols-2 gap-20 items-top justify-center mb-8">
      <div className="flex flex-col space-y-2">
        <h3 className="text-3xl font-skModernBold text-black">{title}</h3>
        <p className="text-md text-gray-500 font-skModernRegular pb-1">
          {date}
        </p>
        <div className="flex space-x-2">
          {stack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 rounded-full px-2 py-1 text-sm text-black font-skModernRegular"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="pt-2 font-skModernRegular text-black">{description}</p>
        <Link
          href={link}
          className="pt-3 text-green-600 hover:text-emerald-700 transition-colors duration-300 text-lg rounded font-skModernRegular"
          target="_blank"
        >
          {research ? "Paper" : "Link"}
        </Link>
      </div>
      <div>
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
