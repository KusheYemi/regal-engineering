import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Contact Us
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {/* Contact Form */}
          <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <Input
                type="text"
                placeholder="Your Name"
                className="p-4 border border-gray-300 rounded-md"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="p-4 border border-gray-300 rounded-md"
              />
              <Textarea
                placeholder="Your Message"
                className="p-4 border border-gray-300 rounded-md"
              />
              <Button
                type="submit"
                className="w-full bg-black text-white py-3 text-lg rounded-md hover:bg-secondary transition"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="w-full md:w-1/3 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Our Contact Details
            </h3>
            <p className="text-gray-600 mb-3">
              <strong className="text-gray-800">Address:</strong> 123 Fake
              Street, Freetown, Sierra Leone
            </p>
            <p className="text-gray-600 mb-3">
              <strong className="text-gray-800">Email:</strong> info@example.com
            </p>
            <p className="text-gray-600">
              <strong className="text-gray-800">Phone:</strong> +232 76 000 000
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
