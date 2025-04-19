"use client";
import React from "react";
import { BackgroundLines } from "@/../components/ui/bglines";
import { Button } from "@/../components/ui/button";
import Link from "next/link";
import Image from "next/image";

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
        <p className="text-gray-300 text-lg">
          Experienced Web developer creating engaging digital experiences. <br />
          3× Hackathon winner and 8× Finalist.
        </p>
        <div className="flex justify-center gap-4"><Link
            href="https://github.com/shrikantVJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-teal-500 hover:bg-teal-600">
              GitHub
            </Button>
          </Link>
          <a href="/images/resume.pdf" download>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white/10"
            >
              Download CV
            </Button>
          </a>
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
