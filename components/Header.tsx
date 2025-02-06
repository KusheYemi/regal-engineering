"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-background shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold font-heading text-foreground">
            EngiTech Solutions
          </div>

          <div className="flex items-center space-x-2">
            <ThemeToggle />
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

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-foreground hover:text-secondary">
              Home
            </Link>
            <Link
              href="/services"
              className="text-foreground hover:text-secondary"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-secondary"
            >
              About
            </Link>
            <Link href="/team" className="text-foreground hover:text-secondary">
              Team
            </Link>
            <Link
              href="/#contact"
              className="text-foreground hover:text-secondary"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link
              href="/"
              className="block text-foreground hover:text-secondary"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block text-foreground hover:text-secondary"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block text-foreground hover:text-secondary"
            >
              About
            </Link>
            <Link
              href="/team"
              className="block text-foreground hover:text-secondary"
            >
              Team
            </Link>
            <Link
              href="/#contact"
              className="block text-foreground hover:text-secondary"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
