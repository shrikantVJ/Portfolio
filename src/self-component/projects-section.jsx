"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/self-component/project-card";
import { Button } from "@/self-component/ui/button";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Digiclaim",
      description:
        "Digiclami is a digital platform designed to streamline municipal claims and complaints, enabling citizens to submit, track, and resolve issues with ease and transparency.",
      image: "/images/digiclami.webp",
      tags: ["React", "Next.js", "Node.js", "MongoDB", "Stripe"],
      demoLink: "https://digiclaim.vercel.app/dashboard",
      codeLink: "",
    },
    {
      title: "Marg.ai",
      description:
        "Marg.ai is an AI-powered career path navigator that helps students explore career options with virtual mentors, AI roadmaps, mock interviews, resume builders, and more.",
      image: "/images/marg.webp",
      tags: ["Next.js", "Chart.js", "Tailwind CSS", "API Integration"],
      demoLink: "https://marg-ai.vercel.app/",
      codeLink: "#",
    },
    {
      title: "CodePathshala",
      description:
        "An interactive learning platform that offers coding courses, mock tests, and personalized roadmaps to help students and professionals upskill in web development and programming.",
      image: "/images/bluecircle.webp",
      tags: ["React", "OpenAI API", "Node.js", "Express"],
      demoLink: "https://jobportal-liart.vercel.app/",
      codeLink: "#",
    },
      {
      title: "DishaMarg",
      description:
        "An AI-powered career guidance platform that provides personalized career recommendations and learning paths for students based on their skills and interests.",
      image: "/images/disha.webp",
      tags: ["React", "OpenAI API", "Node.js", "Express"],
      demoLink: "https://dishamarg.vercel.app/",
      codeLink: "#",
    },
      {
      title: "Green Meal",
      description:
        "A meal planning app that suggests healthy recipes based on dietary preferences and tracks nutritional intake, helping users lead a healthier lifestyle.",
      image: "/images/greenmeal.webp",
      tags: ["React", "OpenAI API", "Node.js", "Express"],
      demoLink: "https://technovate-app.vercel.app/",
      codeLink: "#",
    },
     {
      title: "Ticket Dada",
      description:
        "A frontend-only movie booking system built with Next.js and Tailwind CSS, inspired by BookMyShow. Users can browse movies, view showtimes, select seats, and generate booking summaries — all fully functional without backend or authentication.",
      image: "/images/Ticketdada.png",
      tags: ["React", "OpenAI API", "Node.js", "Express"],
      demoLink: "https://movie-ticket-booking-system-sage.vercel.app/",
      codeLink: "https://github.com/shrikantVJ/movie-ticket-booking-system",
    },
  ];

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
  );
}
