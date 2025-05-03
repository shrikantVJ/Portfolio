"use client"

import { motion } from "framer-motion"
import ProjectCard from "@/self-component/project-card"
import { Button } from "@/self-component/ui/button"

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with cart, checkout, and payment integration.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media performance tracking.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "Chart.js", "Tailwind CSS", "API Integration"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "AI Content Generator",
      description: "Tool that uses AI to generate marketing content and social posts.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "OpenAI API", "Node.js", "Express"],
      demoLink: "#",
      codeLink: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">My Projects</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} delay={index * 0.1} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="glow-button">View All Projects</Button>
        </div>
      </div>
    </section>
  )
}
