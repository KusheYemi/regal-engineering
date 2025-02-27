import { Button } from "@/components/ui/button";
import Link from "next/link";
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div
        className={`absolute inset-0 z-0 ${styles.heroBackground}`}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Precision. Innovation.
          <br />
          <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Shaping Visions into Reality
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto">
          Building the future of Sierra Leone, one project at a time
        </p>
        <div className="flex items-center justify-center">
          <Link href="/about">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-yellow-700 hover:bg-yellow-50 px-8 py-6 text-lg font-semibold transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
