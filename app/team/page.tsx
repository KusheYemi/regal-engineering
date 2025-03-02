import Link from "next/link";
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
      slug: "jane-doe",
    },
    {
      name: "John Smith",
      role: "CTO & Mechanical Engineer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "John is an expert in mechanical engineering with a focus on sustainable design. He's been instrumental in developing our eco-friendly product line.",
      slug: "john-smith",
    },
    {
      name: "Alice Johnson",
      role: "Lead Electrical Engineer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Alice specializes in power systems and IoT devices. Her innovative designs have revolutionized our approach to smart home technology.",
      slug: "alice-johnson",
    },
    {
      name: "Bob Williams",
      role: "Head of Robotics",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Bob's expertise lies in AI and robotics. He leads our robotics division, developing cutting-edge solutions for industrial automation.",
      slug: "bob-williams",
    },
  ];

  return (
    <>
      <main className="min-h-screen py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Our Team
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Click on a team member to learn more about their expertise
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Link
                key={index}
                href={`/team/${member.slug}`}
                className="h-full"
              >
                <Card className="group transition transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer h-full flex flex-col">
                  <CardHeader className="flex items-center gap-4 p-4 border-l-4 border-yellow-500">
                    <Avatar className="w-20 h-20 flex-shrink-0">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-yellow-600 transition-colors">
                        {member.name}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {member.role}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 flex-grow">
                    <p className="text-gray-600">{member.bio}</p>
                    <span className="text-yellow-600 text-sm mt-4 inline-block group-hover:underline">
                      Read more →
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
