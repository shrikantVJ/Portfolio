import Image from "next/image"
import { Card, CardContent } from "/components/ui/card"

const projects = [
  {
    title: "Project 1",
    image: "/placeholder.svg",
    category: "Web Design"
  },
  {
    title: "Project 2",
    image: "/placeholder.svg",
    category: "UI/UX"
  },
  {
    title: "Project 3",
    image: "/placeholder.svg",
    category: "Mobile App"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-zinc-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          My <span className="text-teal-500">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="text-gray-400">{project.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

