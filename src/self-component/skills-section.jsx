"use client"

import { motion } from "framer-motion"
import SkillBadge from "@/self-component/skill-badge"

export default function SkillsSection() {
  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "CSS/SCSS", level: 85 },
    { name: "Node.js", level: 75 },
    { name: "UI/UX Design", level: 70 },
    { name: "TypeScript", level: 75 },
    { name: "Tailwind CSS", level: 85 },
  ]

  return (
    <section id="skills" className="py-20 relative bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">My Skills</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Technical Skills & Expertise</h3>

            <p className="text-gray-400">
              I've worked with a variety of technologies and frameworks to deliver high-quality solutions. My expertise
              includes front-end and back-end development, responsive design, and performance optimization.
            </p>

            <div className="space-y-6 pt-4">
              {skills.map((skill, index) => (
                <SkillBadge key={index} name={skill.name} level={skill.level} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="skill-card">
                <div className="skill-icon bg-purple-500/20 text-purple-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold">Web Development</h4>
                <p className="text-gray-400 text-sm">Creating responsive and interactive web applications</p>
              </div>

              <div className="skill-card">
                <div className="skill-icon bg-pink-500/20 text-pink-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                    <path d="M12 12 4.5 19.5"></path>
                    <path d="M12 12 9 6"></path>
                    <path d="M12 12 19.5 9"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold">UI/UX Design</h4>
                <p className="text-gray-400 text-sm">Creating intuitive and beautiful user interfaces</p>
              </div>

              <div className="skill-card">
                <div className="skill-icon bg-blue-500/20 text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 13a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5a5 5 0 0 0-5-5H7"></path>
                    <path d="M7 8a5 5 0 0 0-5 5"></path>
                    <path d="M22 8a5 5 0 0 0-5-5H7a5 5 0 0 0-5 5"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold">API Integration</h4>
                <p className="text-gray-400 text-sm">Connecting applications with third-party services</p>
              </div>

              <div className="skill-card">
                <div className="skill-icon bg-green-500/20 text-green-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 7h-3a2 2 0 0 1-2-2V2"></path>
                    <path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z"></path>
                    <path d="M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold">Database Design</h4>
                <p className="text-gray-400 text-sm">Creating efficient and scalable data structures</p>
              </div>
            </div>

            <div className="absolute -z-10 -bottom-20 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
