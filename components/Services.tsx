import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      title: "Software Engineering",
      description: "Custom software solutions tailored to your needs",
    },
    {
      title: "Mechanical Engineering",
      description: "Innovative mechanical designs and prototypes",
    },
    {
      title: "Electrical Engineering",
      description: "Cutting-edge electrical systems and circuits",
    },
    {
      title: "Robotics",
      description: "Advanced robotics solutions for various industries",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
