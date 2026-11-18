"use client";

import { AboutMe } from "@/components/AboutMe";
import { Navbar } from "@/components/Navbar";
import { TimeLine } from "@/components/TimeLine";

export default function Home() {
  return (
    <div className="w-full h-full gap-4 flex flex-col p-6">
      <Navbar />
      <AboutMe />
      <TimeLine />
    </div>
  );
}
