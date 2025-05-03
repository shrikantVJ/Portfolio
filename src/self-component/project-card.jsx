"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="project-card group"
    >
      <div className="relative overflow-hidden rounded-t-lg">
        <div className="aspect-video overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={800}
            height={600}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full flex justify-between items-center">
            <div className="flex space-x-2">
              {project.tags.slice(0, 2).map((tag, index) => (
                <span key={index} className="text-xs bg-purple-500/30 text-purple-300 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
              {project.tags.length > 2 && (
                <span className="text-xs bg-purple-500/30 text-purple-300 px-2 py-1 rounded">
                  +{project.tags.length - 2}
                </span>
              )}
            </div>
            <div className="flex space-x-2">
              <a
                href={project.codeLink}
                className="p-2 bg-black/50 text-white rounded-full hover:bg-purple-500/50 transition-colors"
              >
                <Github size={16} />
              </a>
              <a
                href={project.demoLink}
                className="p-2 bg-black/50 text-white rounded-full hover:bg-purple-500/50 transition-colors"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 bg-black/40 backdrop-blur-sm border border-purple-500/10 rounded-b-lg">
        <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-600 transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm">{project.description}</p>
      </div>
    </motion.div>
  )
}
