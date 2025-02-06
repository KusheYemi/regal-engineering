import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-12">
            About EngiTech Solutions
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <Image
              src="/images/about.jpg"
              alt="About EngiTech Solutions"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div className="md:w-1/2">
              <p className="text-gray-600 mb-4">
                EngiTech Solutions is a cutting-edge engineering start-up
                dedicated to solving complex problems with innovative
                technology. Our team of expert engineers brings diverse skills
                and experience to every project.
              </p>
              <p className="text-gray-600 mb-4">
                Founded in 2023, we&apos;ve quickly established ourselves as
                leaders in software, mechanical, and electrical engineering, as
                well as robotics. Our mission is to push the boundaries of
                what&apos;s possible and create solutions that shape the future.
              </p>
              <p className="text-gray-600 mb-4">
                At EngiTech Solutions, we believe in the power of
                interdisciplinary collaboration. By combining expertise from
                various engineering fields, we&apos;re able to tackle challenges
                from multiple angles and deliver comprehensive solutions that
                exceed expectations.
              </p>
              <p className="text-gray-600">
                Our commitment to innovation, quality, and client satisfaction
                drives everything we do. We&apos;re not just building products;
                we&apos;re building the future of engineering.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
