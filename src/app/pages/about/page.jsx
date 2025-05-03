"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Github, Mail, Linkedin, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import MobileMenu from "@/self-component/mobile-menu"
import ProjectCard from "@/self-component/project-card"
import SkillBadge from "@/self-component/skill-badge"
import { Button } from "@/self-component/ui/button"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue

        const offsetTop = element.offsetTop
        const offsetHeight = element.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background gradient effect */}
      <div className="fixed inset-0 bg-gradient-radial from-purple-900/20 via-black to-black z-0"></div>

      {/* Animated particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold relative group">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Dev<span className="text-white">Folio</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className={`nav-link relative ${activeSection === item ? "active" : ""}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </nav>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} activeSection={activeSection} />

      <main>
        {/* Hero Section */}
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
                I build exceptional digital experiences that are fast, accessible, and designed with best practices.
                Let's create something amazing together.
              </p>

              <div className="flex space-x-4">
                <Button className="glow-button">Download CV</Button>
                <Button
                  variant="outline"
                  className="border-purple-500 hover:bg-purple-500/20 transition-all duration-300"
                >
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

        {/* About Section */}
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
                  I'm a full stack developer with a passion for creating beautiful, functional, and user-centered
                  digital experiences. With 5+ years of experience in the field, I am always looking for new and
                  innovative ways to bring my clients' visions to life.
                </p>

                <p className="text-gray-400">
                  I believe that design is about more than just making things look pretty – it's about solving problems
                  and creating intuitive, enjoyable experiences for users.
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

        {/* Skills Section */}
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
                  I've worked with a variety of technologies and frameworks to deliver high-quality solutions. My
                  expertise includes front-end and back-end development, responsive design, and performance
                  optimization.
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

        {/* Projects Section */}
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

        {/* Contact Section */}
        <section id="contact" className="py-20 relative bg-black/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">Get In Touch</h2>
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
                <h3 className="text-2xl font-bold">Let's work together</h3>

                <p className="text-gray-400">
                  I'm interested in freelance opportunities – especially ambitious or large projects. However, if you
                  have other requests or questions, don't hesitate to contact me.
                </p>

                <div className="space-y-4 pt-4">
                  <div className="contact-info-card">
                    <div className="contact-icon">
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
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Call Me</h4>
                      <p className="text-gray-400">+1 (123) 456-7890</p>
                    </div>
                  </div>

                  <div className="contact-info-card">
                    <div className="contact-icon">
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
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Email</h4>
                      <p className="text-gray-400">alex@example.com</p>
                    </div>
                  </div>

                  <div className="contact-info-card">
                    <div className="contact-icon">
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
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Location</h4>
                      <p className="text-gray-400">San Francisco, USA</p>
                    </div>
                  </div>
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
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <form className="contact-form">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="form-group">
                      <input type="text" placeholder="Name" className="form-input" />
                    </div>

                    <div className="form-group">
                      <input type="email" placeholder="Email" className="form-input" />
                    </div>
                  </div>

                  <div className="form-group mt-4">
                    <input type="text" placeholder="Subject" className="form-input" />
                  </div>

                  <div className="form-group mt-4">
                    <textarea placeholder="Message" className="form-input min-h-[150px]"></textarea>
                  </div>

                  <div className="mt-6">
                    <Button className="glow-button w-full">Send Message</Button>
                  </div>
                </form>

                <div className="absolute -z-10 -top-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-purple-500/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Alex Johnson. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
