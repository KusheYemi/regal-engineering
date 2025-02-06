"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">
            EngiTech Solutions
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-800 hover:text-blue-600">
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-800 hover:text-blue-600"
            >
              Services
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-blue-600">
              About
            </Link>
            <Link href="/team" className="text-gray-800 hover:text-blue-600">
              Team
            </Link>
            <Link
              href="/#contact"
              className="text-gray-800 hover:text-blue-600"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link href="/" className="block text-gray-800 hover:text-blue-600">
              Home
            </Link>
            <Link
              href="/services"
              className="block text-gray-800 hover:text-blue-600"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block text-gray-800 hover:text-blue-600"
            >
              About
            </Link>
            <Link
              href="/team"
              className="block text-gray-800 hover:text-blue-600"
            >
              Team
            </Link>
            <Link
              href="/#contact"
              className="block text-gray-800 hover:text-blue-600"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
