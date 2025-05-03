"use client"

import { motion } from "framer-motion"
import { Github, Mail, Linkedin } from "lucide-react"
import Image from "next/image"
import { Button } from "@/self-component/ui/button"

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-light text-purple-400">Hello, I'm</h2>
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Alex Johnson
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">Full Stack Developer</h2>
          </div>

          <p className="text-gray-400 text-lg max-w-lg">
            I build exceptional digital experiences that are fast, accessible, and designed with best practices. Let's
            create something amazing together.
          </p>

          <div className="flex space-x-4">
            <Button className="glow-button">Download CV</Button>
            <Button variant="outline" className="border-purple-500 hover:bg-purple-500/20 transition-all duration-300">
              Contact Me
            </Button>
          </div>

          <div className="flex space-x-4 pt-4">
            <a href="#" className="social-icon">
              <Github size={20} />
            </a>
            <a href="#" className="social-icon">
              <Linkedin size={20} />
            </a>
            <a href="#" className="social-icon">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl opacity-20 animate-pulse"></div>
            <div className="hero-image-container">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Developer Portrait"
                width={600}
                height={600}
                className="rounded-full object-cover border-4 border-purple-500/30"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-purple-400 flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center pt-1">
            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-scroll"></div>
          </div>
        </a>
      </div>
    </section>
  )
}
