import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Team() {
  const team = [
    {
      name: "Jane Doe",
      role: "CEO & Software Engineer",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "John Smith",
      role: "CTO & Mechanical Engineer",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Alice Johnson",
      role: "Lead Electrical Engineer",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Bob Williams",
      role: "Head of Robotics",
      image: "/placeholder.svg?height=100&width=100",
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-secondary-foreground mb-8">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <Avatar className="w-32 h-32 mx-auto mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold text-secondary mb-2">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
