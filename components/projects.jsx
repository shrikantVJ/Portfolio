import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "/components/ui/card";

const projects = [
  {
    title: "Gaming Wordpress",
    image: "/images/project/Screenshot 2024-12-18 120901.png",
    category: "Web Design",
    link: "https://example.com/gaming-wordpress", // Replace with your link
  },
  {
    title: "Disney + Hotstar Clone",
    image: "/images/project/Screenshot 2024-11-08 172526.png",
    category: "Web Design",
    link: "https://github.com/shrikantVJ/Growintern-Task-2-Disney-Hostar-clone", // Replace with your link
  },
  {
    title: "Space Info Web",
    image: "/images/project/Screenshot 2024-11-08 171214.png",
    category: "Web Design",
    link: "https://github.com/shrikantVJ/Space-Web", // Replace with your link
  },
];

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
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full object-cover cursor-pointer"
                />
              </Link>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="text-gray-400">{project.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
