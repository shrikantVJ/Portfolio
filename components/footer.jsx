import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2023 Your Name. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-teal-500 transition-colors">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-teal-500 transition-colors">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="hover:text-teal-500 transition-colors">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="hover:text-teal-500 transition-colors">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="hover:text-teal-500 transition-colors">
              <Github size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

