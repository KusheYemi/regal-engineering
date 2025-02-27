import Link from "next/link";

export default function AboutDividerCTA() {
  return (
    <>
      {/* SVG Divider */}
      <div className="relative">
        <svg
          className="w-full h-24 md:h-32"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#CA8A04" // Using yellow-700 for a more elegant gold
            fillOpacity="1"
            d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,181.3C672,192,768,160,864,144C960,128,1056,128,1152,133.3C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Call-to-Action Section */}
      <section className="bg-yellow-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 to-yellow-800"></div>
        <div className="container mx-auto px-6 py-16 relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Experience the Difference
            </h2>
            <p className="text-lg md:text-xl text-yellow-50/90 mb-8 leading-relaxed">
              Discover our innovative approach and commitment to excellence in
              every project we undertake.
            </p>
            <Link href="/#contact">
              <button
                className="group px-8 py-3 bg-white text-yellow-700 font-semibold rounded-lg 
                             hover:bg-yellow-50 transition-all duration-300 
                             shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span className="flex items-center justify-center space-x-2">
                  Contact Us
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
