import { Card, CardContent } from "/components/ui/card"
import { Briefcase } from 'lucide-react'

const experiences = [
  {
    title: "Senior Web Developer",
    company: "Tech Company A",
    period: "2020 - Present",
    description: "Led development of multiple web applications using modern technologies."
  },
  {
    title: "UI/UX Designer",
    company: "Design Studio B",
    period: "2018 - 2020",
    description: "Created user-centered designs for various digital products."
  },
  {
    title: "Junior Developer",
    company: "Startup C",
    period: "2016 - 2018",
    description: "Developed and maintained web applications and mobile apps."
  }
]

export default function Experience() {
  return (
    <section className="py-16 bg-zinc-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          My <span className="text-teal-500">Experience</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-teal-500/10 rounded-lg">
                    <Briefcase className="w-6 h-6 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                    <p className="text-teal-500">{exp.company}</p>
                    <p className="text-gray-400 text-sm mt-1">{exp.period}</p>
                    <p className="text-gray-300 mt-2">{exp.description}</p>
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

