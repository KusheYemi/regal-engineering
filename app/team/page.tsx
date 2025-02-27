import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function TeamPage() {
  const team = [
    {
      name: "Jane Doe",
      role: "CEO & Software Engineer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Jane has over 15 years of experience in software engineering and has led multiple successful startups. She's passionate about using technology to solve real-world problems.",
    },
    {
      name: "John Smith",
      role: "CTO & Mechanical Engineer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "John is an expert in mechanical engineering with a focus on sustainable design. He's been instrumental in developing our eco-friendly product line.",
    },
    {
      name: "Alice Johnson",
      role: "Lead Electrical Engineer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Alice specializes in power systems and IoT devices. Her innovative designs have revolutionized our approach to smart home technology.",
    },
    {
      name: "Bob Williams",
      role: "Head of Robotics",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Bob's expertise lies in AI and robotics. He leads our robotics division, developing cutting-edge solutions for industrial automation.",
    },
  ];

  return (
    <>
      <main className="min-h-screen py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Our Team
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="transition transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <CardHeader className="flex items-center gap-4 p-4 border-l-4 border-yellow-500">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-xl font-semibold text-gray-800">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {member.role}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
