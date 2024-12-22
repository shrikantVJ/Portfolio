import { Button } from "/components/ui/button"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-teal-500 rounded-full" />
            <span className="text-white font-semibold">Portfolio</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-300 hover:text-teal-500">Home</Link>
            <Link href="#about" className="text-gray-300 hover:text-teal-500">About</Link>
            <Link href="#skills" className="text-gray-300 hover:text-teal-500">Skills</Link>
            <Link href="#projects" className="text-gray-300 hover:text-teal-500">Projects</Link>
          </div>

          <Button className="bg-teal-500 hover:bg-teal-600 text-white">
            Contact
          </Button>
        </div>
      </div>
    </nav>
  )
}

