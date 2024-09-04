import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  stack: string[];
  date: string;
  link: string;
  description: string;
  image: any;
  research: boolean;
}

export default function ProjectCard({
  title,
  stack,
  date,
  link,
  description,
  image,
  research,
}: ProjectCardProps) {
  return (
    <div className="grid grid-cols-2 gap-4 items-center justify-center mb-8">
      <div className="flex flex-col space-y-2">
        <h3 className="text-3xl font-skModernBold text-black">{title}</h3>
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
        <p className="text-sm text-gray-500 font-skModernRegular">{date}</p>
        <p className="mt-2 font-skModernRegular text-black">{description}</p>
        {research ? (
          <a
            href={link}
            className="mt-4   text-green-600 text-lg rounded font-skModernRegular"
          >
            Paper
          </a>
        ) : (
          <a
            href={link}
            className="mt-4   text-green-600 text-lg rounded font-skModernRegular"
          >
            Link
          </a>
        )}
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
