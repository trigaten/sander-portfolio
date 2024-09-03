import React from "react";
import Image from "next/image";
import ProjectsHero from "@/components/projects/hero";
import projectBg from "@/../public/project.jpg";
import Navbar from "@/components/navbar/navbar";
import ProjectSection from "@/components/projects/projectSection";
import ProjectCard from "@/components/projects/projectCard";
import projectsResearch from "..";

export default function Projects() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 z-10">
        <Navbar variant="dark" />
      </div>
      <ProjectsHero />
      <div className="py-8 md:px-20 px-6">
        <div>
          <ProjectSection year="2021" />
          <div className="">
            {projectsResearch.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                stack={project.stack}
                date={project.date}
                link={project.link}
                description={project.description}
                image={project.image}
                research={project.research}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
