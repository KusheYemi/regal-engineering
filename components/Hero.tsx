import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold font-heading mb-4">
          Innovative Engineering Solutions
        </h1>
        <p className="text-xl mb-8">
          Building the future, one project at a time
        </p>
        <Button variant="secondary" size="lg">
          Learn More
        </Button>
      </div>
    </section>
  );
}
