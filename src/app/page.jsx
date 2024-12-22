import Navbar from '../../components/navbar'
import Hero from '../../components/hero'
import About from '../../components/about'
import Skills from '../../components/skills'
import Freelancer from '../../components/freelancer'
import Achievements from '../../components/achievements'
import Projects from '../../components/projects'
import Experience from '../../components/experience'
import Education from '../../components/education'
import Contact from '../../components/contact'
import Footer from '../../components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Freelancer />
      <Achievements />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}

