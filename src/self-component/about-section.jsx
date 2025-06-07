"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
                src="/images/prize.png"
                alt="About Me"
                width={600}
                height={800}
                className="rounded-lg object-cover border border-purple-500/30"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 p-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg shadow-glow">
              <div className="text-center">
                {/* <h3 className="text-2xl font-bold">5+</h3> */}
                <p className="text-sm">Fresher</p>
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
            <h3 className="text-2xl font-bold">
              A passionate developer creating innovative web solutions
            </h3>

            <p className="text-gray-400">
              I’m a full-stack web developer skilled in React.js, Next.js,
              Tailwind CSS, and Node.js, with hands-on experience building
              responsive UIs and scalable backends. I’ve worked with MongoDB,
              Firebase, Supabase, and integrated tools like NextAuth and OpenAI
              APIs. I also have basic knowledge of Android (Java) and Flutter.
              With a strong passion for building real-world solutions,
            </p>

            <p className="text-gray-400">
               I’ve
              participated in 10+ hackathons — winning 3 and being a finalist in
              7 — delivering impactful, team-based tech projects under tight
              deadlines.
              I believe that design is about more than just making things look
              pretty – it's about solving problems and creating intuitive,
              enjoyable experiences for users.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <p className="font-medium">Name:</p>
                </div>
                <p className="text-gray-400 pl-4">Shrikant Jadhav</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <p className="font-medium">Email:</p>
                </div>
                <p className="text-gray-400 pl-4">jadhashrikant@gmail.com</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <p className="font-medium">From:</p>
                </div>
                <p className="text-gray-400 pl-4">Kalyan, Mumbai - Maharashtra</p>
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
  );
}
