import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      slug: "surveying-services",
      title: "Surveying Services",
      description: "Precision surveys for informed property decisions.",
      details: `At Regal Engineering & Design Solutions, precision is the cornerstone of every successful development. Our state-of-the-art land surveying services combine advanced drone technology, GIS mapping, and industry-standard tools like Autodesk Civil 3D to deliver high-accuracy boundary surveys, detailed topographic assessments, and precise construction staking. We also offer subdivision planning and legally sound land descriptions, ensuring every measurement meets the highest standards of precision and regulatory compliance. Driven by innovation and a commitment to integrity, we empower land buyers, sellers, and developers to make informed, confident decisions. At Regal Engineering, every project is executed with passion and an unwavering focus on quality, blending modern technology with deep industry expertise to provide solutions that are both innovative and practical. Whether you're launching a new development or enhancing an existing one, our comprehensive suite of engineering solutions is designed to lay the foundation for your success.`,
    },
    {
      slug: "architectural-design-services",
      title: "Architectural Design Services",
      description: "Innovative designs tailored to your vision.",
      details: `At Regal Engineering & Design Solutions, our architectural design services seamlessly blend creative vision with engineering excellence to transform ideas into inspiring, functional spaces. We provide a comprehensive range of solutions—from conceptual designs and immersive 3D renderings to meticulously detailed floor and site plans—that capture the essence of your vision. In close collaboration with experienced engineering firms, we develop robust structural layouts and permit drawings that streamline the approval process, ensuring that every design meets both aesthetic and practical standards. Our unwavering commitment to precision, innovation, and client satisfaction means that each project is executed with passion and an uncompromising focus on quality. Leveraging modern technology and deep industry expertise, we tailor our designs to meet the unique demands of residential, commercial, and mixed-use developments, creating spaces that are as striking as they are functional. Whether you're embarking on a new development or enhancing an existing one, let Regal Engineering & Design Solutions lay the foundation for your success with architectural services designed to deliver exceptional outcomes.`,
    },
    {
      slug: "integrated-survey-design-packages",
      title: "Integrated Survey & Design Packages",
      description: "Seamless solutions from land assessment to design.",
      details:
        "We streamline the development process by integrating land surveying with architectural design. This comprehensive approach helps property owners, developers, and municipalities save time and reduce costs while ensuring regulatory compliance and project success.",
    },
  ];

  return (
    <main className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={`/services/${service.slug}`}
              className="h-full"
            >
              <Card
                className="bg-white border-gray-100 transition-all duration-300 transform 
                             hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-500/5 
                             cursor-pointer h-full flex flex-col"
              >
                <CardHeader className="p-6 border-l-4 border-yellow-500">
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <p className="text-gray-600">
                    {service.details.substring(0, 100)}...
                  </p>
                  <span className="text-yellow-600 text-sm mt-4 inline-block group-hover:underline">
                    Learn more →
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Modernized Wave Divider */}
      <div className="relative mt-24">
        <svg
          className="w-full h-24 md:h-32"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#CA8A04"
            fillOpacity="0.9"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,128C672,128,768,160,864,165.3C960,171,1056,149,1152,149.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Modernized CTA Section */}
      <section className="bg-gradient-to-br from-yellow-600 to-yellow-700 relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 py-20 relative">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your Vision into Reality?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let&apos;s discuss your project and explore how we can help.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-yellow-700 
                       font-semibold rounded-lg hover:bg-gray-50 transition-all 
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
