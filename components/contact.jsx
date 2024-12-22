import { Button } from "/components/ui/button"
import { Input } from "/components/ui/input"
import { Textarea } from "/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "/components/ui/card"

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
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                  <Input id="name" placeholder="Your Name" className="bg-zinc-800 border-zinc-700 text-white" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                  <Input id="email" type="email" placeholder="your@email.com" className="bg-zinc-800 border-zinc-700 text-white" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">Subject</label>
                <Input id="subject" placeholder="Subject" className="bg-zinc-800 border-zinc-700 text-white" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                <Textarea id="message" placeholder="Your message" className="bg-zinc-800 border-zinc-700 text-white" rows={4} />
              </div>
              <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

