export default function About() {
  return (
    <section id="about" className="py-16 bg-zinc-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          About <span className="text-teal-500">Me</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-zinc-900 rounded-lg p-6 shadow-lg">
            <p className="text-gray-300 mb-4">
              I am a passionate and creative designer with experience in web development, UI/UX design, and mobile app development. With a strong foundation in both design principles and technical implementation, I create engaging digital experiences that combine aesthetics with functionality.
            </p>
            <p className="text-gray-300 mb-4">
              My journey in digital design and development has equipped me with a comprehensive skill set that allows me to tackle complex projects and deliver innovative solutions. I believe in creating user-centered designs that not only look great but also provide intuitive and seamless experiences.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div>
                <h3 className="text-teal-500 font-semibold mb-2">Contact Details</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Email: contact@example.com</li>
                  <li>Phone: +1 234 567 890</li>
                  <li>Location: City, Country</li>
                </ul>
              </div>
              <div>
                <h3 className="text-teal-500 font-semibold mb-2">Specializations</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Web Design & Development</li>
                  <li>UI/UX Design</li>
                  <li>Mobile App Development</li>
                  <li>Graphic Design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

