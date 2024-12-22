import { Card, CardContent } from "/components/ui/card"
import Image from "next/image"

export default function Achievements() {
  return (
    <section className="py-16 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          My <span className="text-teal-500">Achievements</span>
        </h2>
        <div className="max-w-2xl mx-auto">
          <Card className="bg-zinc-800 border-zinc-700">
            <CardContent className="p-6">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 relative">
                  <Image
                    src="/placeholder.svg"
                    alt="Achievement"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Professional Certification
                </h3>
                <p className="text-gray-400">
                  Completed advanced certification in web development and design
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

