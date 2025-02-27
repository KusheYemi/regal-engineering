"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

const servicesData = {
  "land-surveying-services": {
    title: "Land Surveying Services",
    description: "Precision surveys for informed property decisions.",
    details: `At Regal Engineering & Design Solutions, our land surveying services are the cornerstone of every successful development project. We deliver precise, high-accuracy boundary surveys, detailed topographic surveys, and construction staking using advanced drone technology and GIS mapping. Our offerings extend to subdivision planning and legally sound land descriptions, ensuring that every measurement and delineation meets the highest standards of precision and regulatory compliance. By combining innovative techniques with a commitment to integrity and client-centric solutions, we empower land buyers, sellers, and developers to make informed, confident decisions.`,
    image: "../images/land-survey.jpg",
  },
  "architectural-design-services": {
    title: "Architectural Design Services",
    description: "Innovative designs tailored to your vision.",
    details: `Our architectural design services merge creative vision with engineering excellence to transform ideas into inspiring, functional spaces. We offer comprehensive solutions including conceptual designs, immersive 3D renderings, and meticulous floor and site plans that capture the essence of your vision. In partnership with experienced engineering firms, we provide robust structural layouts and permit drawings that streamline the approval process. Focused on precision, innovation, and client satisfaction, our designs are tailored to meet the unique demands of residential, commercial, and mixed-use developments, ensuring each project is both aesthetically striking and practically sound.`,
    image: "../images/architect-design.jpg",
  },
  "integrated-survey-design-packages": {
    title: "Integrated Survey & Design Packages",
    description: "Seamless solutions from land assessment to design.",
    details: `Experience the efficiency of a seamless development process with our integrated survey and design packages. This comprehensive service combines the accuracy of our land surveying expertise with the creative prowess of our architectural design team, providing a one-stop solution for property development. Ideal for residential and commercial projects, land subdivision, and feasibility studies, our bundled offerings are designed to reduce timelines, lower costs, and simplify project management. By integrating precise surveying data with innovative design strategies, we deliver cohesive, forward-thinking solutions that set the foundation for successful, sustainable development.`,
    image: "../images/achitectural-design.jpg",
  },
};

export default function ServicePage() {
  const { slug } = useParams();
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-2xl text-gray-800">Service not found.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative bg-black text-white py-24">
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"
          style={{
            backgroundImage: `url(${service.image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundBlendMode: "overlay",
          }}
        ></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            {service.description}
          </p>
        </div>
      </header>

      {/* Service Details */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <p className="text-gray-700 leading-relaxed">{service.details}</p>
          <p className="text-gray-700 leading-relaxed">
            At Regal Engineering, our commitment to excellence means every
            project is executed with precision, passion, and an unwavering focus
            on quality. Our blend of modern technology and deep industry
            expertise ensures that you receive solutions that are both
            innovative and practical.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Whether you&apos;re embarking on a new development or enhancing an
            existing one, our services are designed to provide you with the best
            possible outcomes. Let us help you lay the foundation for success
            with our comprehensive suite of engineering solutions.
          </p>
        </div>
      </section>

      {/* Modern Section Divider */}
      <div className="relative mt-20">
        <svg
          className="w-full h-24 md:h-32"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#CA8A04" // Changed to yellow-600 for golden color
            fillOpacity="0.9"
            d="M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,144C672,128,768,128,864,144C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Modernized CTA Section */}
      <section className="bg-gradient-to-br from-yellow-700 to-yellow-800 relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 py-16 relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Ready to Begin Your Project?
            </h2>
            <p className="text-xl text-yellow-50/90 mb-8">
              Contact us today to discuss your service needs and receive a
              personalized consultation.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-yellow-700 
                       font-semibold rounded-lg hover:bg-yellow-50 transition-all 
                       duration-300 shadow-lg hover:shadow-xl transform 
                       hover:-translate-y-1 group"
            >
              <span className="mr-2">Contact Us</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
