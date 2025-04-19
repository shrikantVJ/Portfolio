'use client'

import React from "react"
import { Boxes } from "@/../../components/ui/bgbox"
import { Card, CardContent } from "@/../../components/ui/card"
import { HoverEffect } from "@/../../components/ui/uicard"
import { CodeIcon, Code2, Database, Smartphone, Layout } from "lucide-react"
import { cn } from "@/../../components/lib/utils"

const frontendSkills = [
  { title: "React.js", icon: CodeIcon },
  { title: "Next.js", icon: Code2 },
  { title: "Tailwind CSS", icon: Smartphone },
  { title: "ShadCN UI", icon: Layout },
  { title: "HTML5 & CSS3", icon: Code2 },
  { title: "JavaScript", icon: CodeIcon },
]

const backendSkills = [
  { title: "Node.js", icon: CodeIcon },
  { title: "MongoDB", icon: Database },
  { title: "Clerk Auth", icon: CodeIcon },
]

const tools = [
  "Visual Studio",
  "VS Code",
  "MongoDB Atlas",
  "Google Cloud for APIs",
  "GitHub",
  "chatGPT",
  "vercel",
  "V0"
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-slate-900 relative overflow-hidden rounded-lg">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none [mask-image:radial-gradient(transparent,white)]">
        <Boxes />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          My <span className="text-teal-500">Skills</span>
        </h2>

        {/* Frontend Skills */}
        <h3 className="text-2xl font-semibold text-white mb-6">Frontend Development</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {frontendSkills.map((skill, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800 hover:border-teal-500 transition duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-teal-500/10 rounded-lg">
                    <skill.icon className="w-6 h-6 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{skill.title}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Backend Skills */}
        <h3 className="text-2xl font-semibold text-white mb-6">Backend Development</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {backendSkills.map((skill, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800 hover:border-teal-500 transition duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-teal-500/10 rounded-lg">
                    <skill.icon className="w-6 h-6 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{skill.title}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools Section */}
        <h3 className="text-2xl font-semibold text-white text-center mb-4">Tools I Use</h3>
        <div className="flex flex-wrap justify-center gap-3 text-sm text-white mb-16">
          {tools.map((tool, index) => (
            <span
              key={index}
              className="bg-teal-500/10 border border-teal-500 text-teal-300 px-3 py-1 rounded-full hover:bg-teal-500 hover:text-white transition"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
