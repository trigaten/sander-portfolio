import Image from "next/image";
import React from "react";
import Hero from "@/components/homepage/hero";
import LearnPrompting from "@/components/homepage/lp";
import GardenHome from "@/components/homepage/homeGarden";

export default function Home() {
  return (
    <div>
      <Hero />
      <LearnPrompting />
      <GardenHome />
      {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
    </div>
  );
}
