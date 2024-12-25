import { Card, CardContent, CardHeader, CardTitle } from "/components/ui/card";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-zinc-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Contact <span className="text-teal-500">Me</span>
        </h2>
        <Card className="max-w-2xl mx-auto bg-zinc-900 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Get in Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 text-gray-400">
              <li>
                <span className="block text-white font-semibold">Email:</span>
                <a
                  href="mailto:your-email@example.com"
                  className="text-teal-500 hover:underline"
                >
                  jadhashrikant@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-white font-semibold">Phone:</span>
                <a
                  href="tel:+1234567890"
                  className="text-teal-500 hover:underline"
                >
                  +91 81044 75493
                </a>
              </li>
              <li>
                <span className="block text-white font-semibold">Location:</span>
                <span className="text-gray-400">
                  kalyan-Bhiwandi Road, Kalyan, Maharashtra, India
                </span>
              </li>
              <li>
                <span className="block text-white font-semibold">LinkedIn:</span>
                <a
                  href="https://www.linkedin.com/in/shrikant-jadhav-569330270"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-500 hover:underline"
                >
                  linkedin.com/in/shrikant-jadhav-569330270
                </a>
              </li>
              <li>
                <span className="block text-white font-semibold">GitHub:</span>
                <a
                  href="https://github.com/shrikantVJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-500 hover:underline"
                >
                  github.com/shrikantVJ
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
