"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamData = {
  "jane-doe": {
    name: "Jane Doe",
    role: "CEO & Software Engineer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Jane has over 15 years of experience in software engineering and has led multiple successful startups. She's passionate about using technology to solve real-world problems.",
    fullBio: `Jane Doe is the visionary leader behind our company, bringing over 15 years of expertise in software engineering and business leadership. As CEO, she has successfully guided multiple startups from conception to market success, with a particular focus on innovative engineering solutions.

    Her academic background includes a Master's in Computer Science from MIT and an MBA from Stanford, providing her with the perfect blend of technical expertise and business acumen. Throughout her career, Jane has been recognized for her contributions to the tech industry, including being named in Forbes' 40 Under 40 list.

    Jane's leadership philosophy centers on fostering innovation while maintaining a strong focus on practical, client-centered solutions. She has been instrumental in developing our company's core technologies and establishing our reputation for excellence in the engineering sector.

    Key Achievements:
    • Led the development of our proprietary project management system
    • Secured over $10M in venture capital funding
    • Published numerous papers on sustainable engineering practices
    • Holds multiple patents in software engineering solutions
    
    Outside of work, Jane is an active mentor in women's tech initiatives and regularly speaks at international engineering conferences. She's passionate about promoting diversity in tech and engineering fields.`,
    education: [
      "Master of Business Administration, Stanford University",
      "Master of Science in Computer Science, MIT",
      "Bachelor of Science in Software Engineering, Georgia Tech",
    ],
    expertise: [
      "Software Architecture",
      "Business Strategy",
      "Team Leadership",
      "Project Management",
      "System Design",
      "Agile Methodologies",
    ],
    awards: [
      "Forbes 40 Under 40",
      "Women in Tech Leadership Award",
      "Innovation in Engineering Excellence Award",
    ],
  },
  "john-smith": {
    name: "John Smith",
    role: "CTO & Mechanical Engineer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "John is an expert in mechanical engineering with a focus on sustainable design. He's been instrumental in developing our eco-friendly product line.",
    fullBio: `John Smith serves as our Chief Technology Officer, bringing over two decades of mechanical engineering expertise to our team. His innovative approach to sustainable design has revolutionized our product development process and established new standards in eco-friendly engineering solutions.

    With a Ph.D. in Mechanical Engineering from Stanford University, John has dedicated his career to developing sustainable technologies that minimize environmental impact while maximizing efficiency. His research in renewable energy systems and sustainable manufacturing processes has been published in leading engineering journals.

    As CTO, John leads our technical strategy and oversees all engineering operations, ensuring that our solutions meet the highest standards of quality and sustainability. His vision has been crucial in developing our eco-friendly product line and implementing green manufacturing processes.

    Key Achievements:
    • Developed patented sustainable manufacturing processes
    • Led the creation of our zero-waste production facility
    • Pioneered new approaches to energy-efficient design
    • Successfully implemented IoT solutions in manufacturing
    
    John is also an adjunct professor at Stanford University, where he teaches advanced mechanical engineering courses and mentors the next generation of engineers.`,
    education: [
      "Ph.D. in Mechanical Engineering, Stanford University",
      "Master of Science in Sustainable Design, MIT",
      "Bachelor of Engineering, Cambridge University",
    ],
    expertise: [
      "Sustainable Design",
      "Mechanical Systems",
      "Green Manufacturing",
      "Renewable Energy",
      "Product Development",
      "IoT Integration",
    ],
    awards: [
      "Sustainable Technology Innovation Award",
      "Excellence in Green Engineering",
      "Global Sustainability Leadership Award",
    ],
  },
  "alice-johnson": {
    name: "Alice Johnson",
    role: "Lead Electrical Engineer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Alice specializes in power systems and IoT devices. Her innovative designs have revolutionized our approach to smart home technology.",
    fullBio: `Alice Johnson is our Lead Electrical Engineer, bringing over a decade of expertise in power systems and IoT technology. Her groundbreaking work in smart home automation and energy-efficient systems has established new industry standards and earned multiple patents.

    With a Ph.D. in Electrical Engineering from UC Berkeley, Alice has devoted her career to developing intelligent power systems that optimize energy consumption while enhancing user experience. Her research in IoT integration and smart grid technologies has been featured in leading technical publications.

    As Lead Electrical Engineer, Alice oversees all electrical system designs and IoT implementations, ensuring our solutions are both innovative and reliable. Her leadership has been crucial in developing our smart home product line and establishing our reputation in the IoT sector.

    Key Achievements:
    • Developed our flagship smart home automation system
    • Secured 5 patents in IoT and power management technologies
    • Led the development of our energy-efficient building solutions
    • Successfully implemented smart grid integration projects
    
    Alice is an active member of the IEEE and regularly contributes to electrical engineering conferences. She's particularly passionate about mentoring young women in STEM fields and leads our company's engineering internship program.`,
    education: [
      "Ph.D. in Electrical Engineering, UC Berkeley",
      "Master of Science in Electronics, MIT",
      "Bachelor of Engineering in Electrical Systems, Stanford University",
    ],
    expertise: [
      "Power Systems Design",
      "IoT Architecture",
      "Smart Home Technology",
      "Energy Management",
      "Circuit Design",
      "Embedded Systems",
    ],
    awards: [
      "IEEE Excellence in Engineering Award",
      "Smart Home Innovation Prize",
      "Women in Technology Leadership Award",
      "Energy Efficiency Innovation Award",
    ],
  },
  "bob-williams": {
    name: "Bob Williams",
    role: "Head of Robotics",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Bob's expertise lies in AI and robotics. He leads our robotics division, developing cutting-edge solutions for industrial automation.",
    fullBio: `Bob Williams heads our Robotics Division, bringing over 15 years of experience in robotics and artificial intelligence. His innovative work in industrial automation has transformed manufacturing processes across multiple industries and set new benchmarks for efficiency and precision.

    Holding a Ph.D. in Robotics from Carnegie Mellon University, Bob has dedicated his career to advancing the field of industrial robotics. His research in machine learning applications for robotic systems has been widely published and implemented in real-world applications.

    As Head of Robotics, Bob leads our team in developing next-generation automation solutions that combine AI with precise mechanical systems. His vision has been instrumental in creating adaptable robotic systems that can learn and optimize their performance in real-time.

    Key Achievements:
    • Developed our adaptive industrial robotics platform
    • Created AI-driven quality control systems
    • Pioneered machine learning integration in manufacturing
    • Led the development of collaborative robot safety protocols
    
    Bob frequently collaborates with major manufacturing companies and research institutions to advance the field of industrial robotics. He's also a visiting professor at Carnegie Mellon, where he helps shape the next generation of robotics engineers.`,
    education: [
      "Ph.D. in Robotics, Carnegie Mellon University",
      "Master of Science in Artificial Intelligence, Stanford University",
      "Bachelor of Science in Mechanical Engineering, MIT",
    ],
    expertise: [
      "Industrial Robotics",
      "Artificial Intelligence",
      "Machine Learning",
      "Automation Systems",
      "Robot Vision",
      "Control Systems",
    ],
    awards: [
      "Robotics Innovation Award",
      "AI in Manufacturing Excellence Prize",
      "Industrial Automation Leadership Award",
      "Outstanding Technical Achievement Award",
    ],
  },
  // Add other team members similarly...
};

export default function TeamMemberPage() {
  const { slug } = useParams();
  const member = teamData[slug as keyof typeof teamData];

  if (!member) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-2xl text-gray-800">Team member not found.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative bg-black text-white py-24">
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"
          style={{
            backgroundImage: `url(${member.image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundBlendMode: "overlay",
          }}
        ></div>
        <div className="relative container mx-auto px-6 flex items-center gap-8">
          <Avatar className="w-32 h-32 border-4 border-white/10">
            <AvatarImage src={member.image} alt={member.name} />
            <AvatarFallback>
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {member.name}
            </h1>
            <p className="text-xl text-gray-200">{member.role}</p>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-600 mb-8">{member.bio}</p>
            <div className="mt-8 whitespace-pre-line text-gray-700">
              {member.fullBio}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Education
              </h2>
              <ul className="space-y-2">
                {member.education.map((edu, index) => (
                  <li key={index} className="text-gray-600">
                    {edu}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Expertise
              </h2>
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Awards & Recognition
            </h2>
            <ul className="space-y-2">
              {member.awards.map((award, index) => (
                <li key={index} className="text-gray-600">
                  {award}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-br from-yellow-600 to-yellow-700 relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 py-16 relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want to Work with {member.name.split(" ")[0]}?
            </h2>
            <p className="text-xl text-yellow-50/90 mb-8">
              Get in touch to discuss your project needs and explore
              collaboration opportunities.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-yellow-700 
                       font-semibold rounded-lg hover:bg-yellow-50 transition-all 
                       duration-300 shadow-lg hover:shadow-xl transform 
                       hover:-translate-y-1 group"
            >
              <span className="mr-2">Contact Us</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
