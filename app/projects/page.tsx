import Image from "next/image";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Commercial Complex Survey",
      description:
        "Comprehensive land survey for a major commercial development",
      image: "/images/land-survey.jpg",
      location: "Freetown, Sierra Leone",
      services: ["Land Survey", "3D Mapping"],
    },
    // Add more projects
  ];

  return (
    <main className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
          Our Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
