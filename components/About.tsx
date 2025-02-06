export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="About EngiTech Solutions"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <h2 className="text-3xl font-bold mb-4">
              About EngiTech Solutions
            </h2>
            <p className="text-gray-600 mb-4">
              EngiTech Solutions is a cutting-edge engineering start-up
              dedicated to solving complex problems with innovative technology.
              Our team of expert engineers brings diverse skills and experience
              to every project.
            </p>
            <p className="text-gray-600 mb-4">
              Founded in 2023, we&apos;ve quickly established ourselves as leaders in
              software, mechanical, and electrical engineering, as well as
              robotics. Our mission is to push the boundaries of what&apos;s possible
              and create solutions that shape the future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
