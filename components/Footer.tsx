import Link from "next/link";
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="block">
              <h3 className="text-xl font-bold text-yellow-600">
                Regal Engineering & Design Solutions
              </h3>
              {/* <span className="text-sm text-gray-400">& Design Solutions</span> */}
            </Link>
            <p className="text-sm text-gray-400 pr-4">
              Precision. Innovation. Shaping Visions into Reality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-600">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["About", "Services", "Team", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={
                        item === "Contact"
                          ? "/#contact"
                          : `/${item.toLowerCase()}`
                      }
                      className="text-sm text-gray-400 hover:text-yellow-500 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-600">
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/land-surveying-services"
                  className="text-sm text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Land Surveying
                </Link>
              </li>
              <li>
                <Link
                  href="/services/architectural-design-services"
                  className="text-sm text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Architectural Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/integrated-survey-design-packages"
                  className="text-sm text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Integrated Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-600">
              Contact
            </h4>
            <address className="not-italic text-sm text-gray-400 space-y-2">
              <p>123 Fake Street</p>
              <p>Freetown, Sierra Leone</p>
              <p>Email: kwamahl@gmail.com</p>
              <p>Phone: +232 99 889 654</p>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Regal Engineering & Design Solutions.
              All rights reserved. Designed and developed by Joel Anthony.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
