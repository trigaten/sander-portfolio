import Image from "next/image";
import React from "react";
import Hero from "@/components/homepage/hero";
import LearnPrompting from "@/components/homepage/lp";
import Garden from "@/components/homepage/garden";
import HomeProjects from "@/components/homepage/homeprojects";
import { gardenImagesHome } from "..";

export default function Home() {
  return (
    <div>
      <Hero />
      <LearnPrompting />
      <HomeProjects />
      <Garden images={gardenImagesHome} />
      {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
    </div>
  );
}
