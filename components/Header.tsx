"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/regal-logo.jpg"
              alt="Regal Engineering Logo"
              width={35}
              height={35}
              className="h-auto w-auto"
              priority
            />
            <span className="text-xl font-bold font-heading bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent ml-2">
              Regal Engineering & Design Solutions
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Services", "About", "Team", "Projects", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={
                    item === "Home"
                      ? "/"
                      : item === "Contact"
                      ? "/#contact"
                      : `/${item.toLowerCase()}`
                  }
                  className="text-gray-600 hover:text-yellow-600 transition-colors duration-200 text-sm font-medium"
                >
                  {item}
                </Link>
              )
            )}
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
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {["Home", "Services", "About", "Team", "Projects", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={
                    item === "Home"
                      ? "/"
                      : item === "Contact"
                      ? "/#contact"
                      : `/${item.toLowerCase()}`
                  }
                  className="block text-gray-600 hover:text-yellow-600 transition-colors duration-200 text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              )
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
