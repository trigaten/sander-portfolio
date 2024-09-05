import Image from "next/image";
import React from "react";
import Hero from "@/components/homepage/hero";
import LearnPrompting from "@/components/homepage/lp";
import GardenHome from "@/components/homepage/homeGarden";
import HomeProjects from "@/components/homepage/homeprojects";

export default function Home() {
  return (
    <div>
      <Hero />
      <LearnPrompting />
      <HomeProjects />
      <GardenHome />
      {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
    </div>
  );
}
