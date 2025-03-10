import Image from "next/image";
import AboutDividerCTA from "@/components/AboutDividerCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AboutPage() {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We provide comprehensive land surveying and architectural design services, including boundary surveys, topographic mapping, 3D renderings, construction documentation, and integrated development solutions. Our services are tailored to meet the needs of land buyers, sellers, developers, and property owners.",
    },
    {
      question: "Which areas do you serve?",
      answer:
        "We primarily serve Sierra Leone, with our head office located in Freetown. However, we're equipped to handle projects throughout the country and can consider projects in neighboring West African countries on a case-by-case basis.",
    },
    {
      question: "What technology do you use for surveys?",
      answer:
        "We utilize advanced drone technology combined with state-of-the-art GPS and GIS systems for our surveys. This modern approach allows us to provide highly accurate measurements and detailed topographic data while being more time-efficient than traditional methods.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on scope and complexity. A basic land survey might take 1-2 weeks, while comprehensive architectural designs could take 4-8 weeks. We provide detailed timelines during initial consultations and keep clients informed throughout the process.",
    },
    {
      question: "Do you offer integrated services?",
      answer:
        "Yes, we specialize in providing integrated survey and design solutions. This means we can handle both the land surveying and architectural design aspects of your project, ensuring seamless coordination and more efficient project delivery.",
    },
  ];

  return (
    <>
      <main className="min-h-screen py-20 bg-gray-50">
        {/* About Section */}
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            About Regal Engineering & Design Solutions
          </h1>
          <div className="flex flex-col md:flex-row items-start gap-12 mb-24">
            <div className="md:w-1/2 relative group">
              <Image
                src="/images/about.jpg"
                alt="About Regal Engineering & Design Solutions"
                width={600}
                height={400}
                className="rounded-xl shadow-xl transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 rounded-xl transition-opacity duration-300 group-hover:bg-yellow-600/10"></div>
            </div>
            <div className="md:w-1/2 space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Regal Engineering & Design Solutions, a subsidiary of Regal
                Affluent Holding LLC, is a premier engineering and design firm
                committed to precision, innovation, and excellence. We deliver
                integrated solutions to land buyers, sellers, developers, and
                property owners throughout Sierra Leone, offering services that
                include accurate boundary and topographic surveys, conceptual
                designs, immersive 3D renderings, and permit drawings. By
                leveraging cutting-edge technology alongside expert design
                capabilities, we streamline the property acquisition and
                development process, ensuring our clients can make informed and
                confident decisions. With a client-centric approach and an
                unwavering commitment to integrity, we stand as a trusted
                partner in real estate development, urban planning, and
                construction—turning visions into reality.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto mt-20">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </main>
      <AboutDividerCTA />
    </>
  );
}
