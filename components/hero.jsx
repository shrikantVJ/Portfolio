import { Button } from "/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              I'm a Creative
              <span className="block text-teal-500">Designer</span>
            </h1>
            <p className="text-gray-400 max-w-lg">
              Experienced front-end developer and UI/UX designer creating engaging digital experiences.
            </p>
            <div className="flex gap-4">
              <Button className="bg-teal-500 hover:bg-teal-600">
                Hire Me
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Download CV
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <Image
              src="/placeholder.svg"
              alt="Profile"
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

