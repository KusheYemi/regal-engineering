import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Land Surveying Services",
      description:
        "Precision boundary surveys, topographic mapping, and legal land descriptions.",
    },
    {
      title: "Architectural Design Services",
      description:
        "Conceptual designs, 3D renderings, and detailed floor and site plans.",
    },
    {
      title: "Integrated Survey & Design Packages",
      description:
        "Seamless land surveying and architectural solutions for property development.",
    },
  ];

  return (
    <>
      <main className="min-h-screen py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Our Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="flex flex-col bg-white rounded-lg shadow-md transform transition duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
              >
                <CardHeader className="border-b border-gray-200 bg-gray-50 p-4 border-l-4 border-yellow-500">
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Modern Section Divider */}
        <div className="mt-20 mb-0 h-24 bg-gradient-to-b from-transparent to-yellow-500/20"></div>

        {/* Call-to-Action (CTA) Section */}
        <section className="bg-gradient-to-br from-yellow-600 to-yellow-700 py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your Vision into Reality?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Contact us today for a consultation or free quote.
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
        </section>
      </main>
    </>
  );
}
