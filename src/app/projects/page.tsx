import react from "react";
import Image from "next/image";
import ProjectsHero from "@/components/projects/hero";
import projectBg from "@/../public/project.jpg";
import Navbar from "@/components/navbar/navbar";

export default function Projects() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 z-10">
        <Navbar variant="dark" />
      </div>
      
      <header className="relative w-full h-[420px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={projectBg}
            alt="Project background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="brightness-[.65]"
            quality={100}
          />
        </div>
        
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
          <h1 className="text-4xl font-skModernRegular text-white py-8 md:px-20">Projects & Research</h1>
        </div>
      </header>
    </div>
  );
}
