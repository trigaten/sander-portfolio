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
    <div className="grid grid-cols-2 gap-4 items-center">
      <div className="flex flex-col space-y-2">
        <h3 className="text-xl font-skModernBold">{title}</h3>
        <div className="flex space-x-2">
          {stack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 rounded-full px-2 py-1 text-sm font-skModernRegular"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-500 font-skModernRegular">{date}</p>
        <p className="mt-2 font-skModernRegular">{description}</p>
        {research ? (
          <a
            href={link}
            className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded font-skModernRegular"
          >
            Paper
          </a>
        ) : (
          <a
            href={link}
            className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded font-skModernRegular"
          >
            Link
          </a>
        )}
      </div>
      <div>
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
