import { Card, CardContent } from "/components/ui/card"
import { GraduationCap } from 'lucide-react'

const education = [
  {
    degree: "BCA",
    institution: "Kavikulguru Kalidas Sanskrit University",
    year: "2023 - 2026"
  },
  {
    degree: "HSC",
    institution: "M. K. College Mumbai University",
    year: "2022 - 2023"
  },
  {
    degree: "JAVA and Android App Development Program",
    institution: "Inters elite",
    year: "2023 - 2024"
  }
]

export default function Education() {
  return (
    <section className="py-16 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          My <span className="text-teal-500">Education</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((item, index) => (
            <Card key={index} className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-teal-500/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.degree}</h3>
                    <p className="text-gray-400">{item.institution}</p>
                    <p className="text-teal-500 mt-2">{item.year}</p>
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

