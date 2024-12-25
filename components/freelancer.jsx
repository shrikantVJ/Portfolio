import { Button } from "/components/ui/button";

export default function Freelancer() {
  return (
    <section className="py-20 bg-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.2)_50%,transparent_75%,transparent_100%)] bg-zinc-800" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            I Am Available For Freelancer.
          </h2>
          <p className="text-gray-400 mb-8">
            We provide high-quality clean solutions for your business solutions
          </p>
          <a href="#contact">
            <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6">
              Contact Me
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
