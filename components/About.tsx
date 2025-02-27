import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/images/about.jpg"
              alt="About Rael Engineering & Design Solutions"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <h2 className="text-3xl font-bold mb-4">
              About Regal Engineering & Design Solutions
            </h2>
            <p className="text-gray-600 mb-4">
              Regal Engineering & Design Solutions, a subsidiary of Regal
              Affluent Holding LLC, is a leading land surveying and
              architectural design company committed to precision, innovation,
              and excellence. We provide integrated solutions for land buyers,
              sellers, developers, and property owners in Sierra Leone, offering
              services such as boundary and topographic surveys, conceptual
              designs, 3D renderings, and permit drawings. Utilizing
              cutting-edge drone technology and expert design capabilities, we
              streamline the property acquisition and development process,
              ensuring our clients make informed decisions. With a
              client-centric approach and a commitment to integrity, we stand as
              a trusted partner in real estate development, urban planning, and
              construction, turning visions into reality.
            </p>
            {/* <p className="text-gray-600 mb-4">
              Founded in 2023, we&apos;ve quickly established ourselves as
              leaders in software, mechanical, and electrical engineering, as
              well as robotics. Our mission is to push the boundaries of
              what&apos;s possible and create solutions that shape the future.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
