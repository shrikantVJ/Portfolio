"use client";
import React from "react";
import { BackgroundLines } from "@/../components/ui/bglines";
import { Button } from "@/../components/ui/button";
import Link from "next/link";
import Image from "next/image";
import RotatingText from "./RotatingText";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function HeroWithBackgroundLines() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background Lines Layer */}
      <BackgroundLines className="absolute inset-0 z-0" />

      {/* Main Content Layer */}
      <div className="relative z-10 text-center max-w-2xl space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          I'm a Creative
          <span className="block text-teal-400">Developer</span>
        </h1>

        <RotatingText
          texts={["React.Js", "Next.js", "Tailwind CSS", "3x Hackathon Winner"]}
          mainClassName="px-2 sm:px-2 md:px-3 text-grey bold overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          staggerFrom="last"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />

        <div className="flex justify-center gap-4">
          {/* GitHub Button */}
          <Link
            href="https://github.com/shrikantVJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-teal-500 hover:bg-teal-600 flex items-center gap-2">
              <FaGithub className="text-xl" />
              GitHub
            </Button>
          </Link>

          {/* LinkedIn Button */}
          <Link
            href="https://www.linkedin.com/in/shrikantvj" // <-- update your LinkedIn profile URL if needed
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
              <FaLinkedin className="text-xl" />
              LinkedIn
            </Button>
          </Link>
        </div>
        {/* Optional Profile Image */}
        {/* <div className="mt-10 relative group">
          <div className="absolute inset-0 flex items-center justify-center rounded-full bg-teal-500 scale-0 transition-transform duration-300 group-hover:scale-110"></div>
          <Image
            src="/images/shri.png"
            alt="Profile"
            width={500}
            height={500}
            className="relative rounded-2xl group-hover:z-10"
          />
        </div> */}
      </div>
    </section>
  );
}
