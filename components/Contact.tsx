"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FiMapPin, FiMail, FiPhone, FiSend } from "react-icons/fi";
import { sendEmail } from "@/app/actions/sendEmail";
import { useState } from "react";
import { Toaster, toast } from "sonner";

export default function Contact() {
  const [sending, setSending] = useState(false);

  async function handleSubmit(formData: FormData) {
    setSending(true);
    try {
      const result = await sendEmail(formData);
      if (result.success) {
        toast.success("Your message has been sent successfully.");
        // Reset form
        const form = document.getElementById("contactForm") as HTMLFormElement;
        form.reset();
      } else {
        throw new Error(result.error);
      }
    } catch (error: unknown) {
      toast.error(
        `Failed to send message: ${
          error instanceof Error ? error.message : "Please try again."
        }`
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <Toaster />
      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-gray-600">
              Have a question or project in mind? We&apos;d love to hear from
              you.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            {/* Contact Form */}
            <div className="w-full lg:w-2/3 bg-white p-8 md:p-10 rounded-2xl shadow-lg">
              <form
                id="contactForm"
                action={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    required
                    className="p-4 bg-gray-50 border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    className="p-4 bg-gray-50 border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                  />
                </div>
                <Input
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  required
                  className="p-4 bg-gray-50 border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={6}
                  className="p-4 bg-gray-50 border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all resize-none"
                />
                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-yellow-600 text-white py-6 text-lg rounded-lg hover:bg-yellow-700 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70"
                >
                  {sending ? "Sending..." : "Send Message"}
                  <FiSend className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="w-full lg:w-1/3 space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  Contact Information
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="mt-1">
                      <FiMapPin className="text-yellow-600" size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Our Location</p>
                      <p className="text-gray-600">
                        Onomake Drive, Motheim, Grafton, Freetown, Sierra Leone
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1">
                      <FiMail className="text-yellow-600" size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Email Us</p>
                      <a
                        href="mailto:kwamahl@gmail.com"
                        className="text-gray-600 hover:text-yellow-600 transition-colors"
                      >
                        kwamahl@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1">
                      <FiPhone className="text-yellow-600" size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Call Us</p>
                      <a
                        href="tel:+23276000000"
                        className="text-gray-600 hover:text-yellow-600 transition-colors"
                      >
                        +232 99 889 654
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
