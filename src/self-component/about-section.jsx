"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="about-image-container">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="About Me"
                width={600}
                height={800}
                className="rounded-lg object-cover border border-purple-500/30"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 p-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg shadow-glow">
              <div className="text-center">
                <h3 className="text-2xl font-bold">5+</h3>
                <p className="text-sm">Years Experience</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">A passionate developer creating innovative web solutions</h3>

            <p className="text-gray-400">
              I'm a full stack developer with a passion for creating beautiful, functional, and user-centered digital
              experiences. With 5+ years of experience in the field, I am always looking for new and innovative ways to
              bring my clients' visions to life.
            </p>

            <p className="text-gray-400">
              I believe that design is about more than just making things look pretty – it's about solving problems and
              creating intuitive, enjoyable experiences for users.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <p className="font-medium">Name:</p>
                </div>
                <p className="text-gray-400 pl-4">Alex Johnson</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <p className="font-medium">Email:</p>
                </div>
                <p className="text-gray-400 pl-4">alex@example.com</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <p className="font-medium">From:</p>
                </div>
                <p className="text-gray-400 pl-4">San Francisco, USA</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <p className="font-medium">Freelance:</p>
                </div>
                <p className="text-gray-400 pl-4">Available</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
