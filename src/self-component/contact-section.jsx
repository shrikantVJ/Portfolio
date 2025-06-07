"use client"

import { motion } from "framer-motion"
import { Github, Mail, Linkedin } from "lucide-react"
import { Button } from "@/self-component/ui/button"

export default function ContactSection() {
  return (
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
              I'm interested in freelance opportunities – especially ambitious or large projects. However, if you have
              other requests or questions, don't hesitate to contact me.
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
                  <p className="text-gray-400">+91 8104475493</p>
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
                  <p className="text-gray-400">jadhashrikant@gmail.com</p>
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
                  <p className="text-gray-400">Kalyan, Mumbai - Maharashtra</p>
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
  )
}
