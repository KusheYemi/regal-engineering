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
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-12">Our Team</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
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
