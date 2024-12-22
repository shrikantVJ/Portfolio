import { Card, CardContent } from "/components/ui/card"
import { HashIcon as Html, CodepenIcon as Css3, Database, Smartphone, Code2, Layout } from 'lucide-react'

const skills = [
  {
    title: "Web Development",
    icon: Html,
    description: "Creating responsive and dynamic web applications"
  },
  {
    title: "Professional Certified Courses",
    icon: Css3,
    description: "Certified in modern web technologies"
  },
  {
    title: "Android App Development",
    icon: Smartphone,
    description: "Building native Android applications"
  },
  {
    title: "UI/UX Design & Graphics",
    icon: Layout,
    description: "Creating user-centered design solutions"
  },
  {
    title: "C/C++ Core & Data Structure",
    icon: Code2,
    description: "Strong foundation in programming fundamentals"
  },
  {
    title: "Database Management",
    icon: Database,
    description: "Efficient data organization and management"
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-zinc-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          My <span className="text-teal-500">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-teal-500/10 rounded-lg">
                    <skill.icon className="w-6 h-6 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{skill.title}</h3>
                    <p className="text-gray-400">{skill.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

