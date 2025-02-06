import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function ServicesPage() {
  const services = [
    {
      title: "Software Engineering",
      description: "Custom software solutions tailored to your needs",
      details:
        "Our software engineering team specializes in developing robust, scalable applications using cutting-edge technologies. From web and mobile apps to enterprise software, we deliver solutions that drive business growth and efficiency.",
    },
    {
      title: "Mechanical Engineering",
      description: "Innovative mechanical designs and prototypes",
      details:
        "Our mechanical engineering experts bring ideas to life through advanced CAD design, simulation, and rapid prototyping. We specialize in product development, manufacturing optimization, and mechanical systems integration.",
    },
    {
      title: "Electrical Engineering",
      description: "Cutting-edge electrical systems and circuits",
      details:
        "Our electrical engineering team designs and develops state-of-the-art electrical systems, from PCB design to power distribution systems. We focus on energy efficiency, reliability, and innovative solutions for complex electrical challenges.",
    },
    {
      title: "Robotics",
      description: "Advanced robotics solutions for various industries",
      details:
        "Our robotics division combines expertise in mechanical, electrical, and software engineering to create intelligent robotic systems. We develop solutions for automation, exploration, and human-robot interaction across various industries.",
    },
  ];

  return (
    <>
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <div className="p-6 pt-0 flex-grow">
                  <p className="text-gray-600">{service.details}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
