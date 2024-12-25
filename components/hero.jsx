import { Button } from "/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              I'm a Creative
              <span className="block text-teal-500">Developer</span>
            </h1>
            <p className="text-gray-400 max-w-lg">
              Experienced front-end developer and Android App developer creating
              engaging digital experiences.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://github.com/shrikantVJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-teal-500 hover:bg-teal-600">
                  Github
                </Button>
              </Link>
              <a href="/images/resume.pdf" download>
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-white/10"
                >
                  Download CV
                </Button>
              </a>
            </div>
          </div>
          <div className="relative group">
            {/* Background Circle */}
            <div className="absolute inset-0 flex items-center justify-center rounded-full bg-teal-500 scale-0 transition-transform duration-300 group-hover:scale-110">
              {/* This is the circle */}
            </div>
            {/* Image */}
            <Image
              src="/images/shri.png"
              alt="Profile"
              width={500}
              height={500}
              className="relative rounded-2xl group-hover:z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
