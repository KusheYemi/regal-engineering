import Image from "next/image";
import AboutDividerCTA from "@/components/AboutDividerCTA";

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            About Regal Engineering & Design Solutions
          </h1>
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-1/2 relative group">
              <Image
                src="/images/about.jpg"
                alt="About Regal Engineering & Design Solutions"
                width={600}
                height={400}
                className="rounded-xl shadow-xl transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 rounded-xl transition-opacity duration-300 group-hover:bg-yellow-600/10"></div>
            </div>
            <div className="md:w-1/2 space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Regal Engineering & Design Solutions is an emerging land
                surveying and architectural design startup committed to
                precision, innovation, and excellence. We simplify the property
                acquisition and development process by offering integrated
                solutions tailored to land buyers, sellers, and developers.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Founded in Sierra Leone, we leverage advanced drone technology
                and expert design capabilities to provide high-accuracy land
                surveys and premium architectural designs. Our mission is to
                deliver reliable, data-driven insights and creative solutions
                that empower our clients to make informed real estate and
                development decisions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                At Regal Engineering & Design Solutions, we believe in a
                holistic approach to property development. By merging land
                surveying with architectural design, we ensure a seamless
                experience that enhances efficiency and project success for
                individuals, businesses, and municipalities alike.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to integrity, innovation, and client satisfaction
                drives everything we do. We&apos;re not just measuring
                land—we&apos;re shaping the future of real estate and
                construction in Sierra Leone.
              </p>
            </div>
          </div>
        </div>
      </main>
      <AboutDividerCTA />
    </>
  );
}
