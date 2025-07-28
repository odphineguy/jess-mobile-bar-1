import { Button } from "@/components/ui/button";
import drink2 from "@assets/drink2_1753667660052.jpg";

export default function About() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src={drink2}
              alt="Professional bartender crafting cocktails with precision" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              WHERE MIXOLOGY AND LUXURY MEET
            </h2>
            <div className="space-y-6 text-lg text-foreground leading-relaxed">
              <p>
                Here at <strong>Jess's Mobile Bar</strong>, we are all about the details.
              </p>
              <p>
                From handcrafted syrups and fresh garnishes to bringing everything needed to execute your cocktail menu with style and precision, we've got you covered.
              </p>
              <p>
                At Jess's Mobile Bar, customized service isn't just a buzzword, it's how we work. No two events are the same, which is why we build every package around you.
              </p>
              <p className="font-semibold text-primary">
                Your needs. Your style. Your guest list. Your flow.
              </p>
              <p>
                Whether you're looking for full-service bartending with all the essentials or a one-time consultation to elevate your in-house bar program, we bring expertise, creativity, and genuine care to every pour.
              </p>
            </div>
            
            {/* Decorative divider */}
            <div className="my-8 flex justify-center lg:justify-start">
              <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent rounded"></div>
            </div>
            
            <p className="text-center lg:text-left mb-6">
              <strong>Serving:</strong> Los Angeles • Orange County • Inland Empire
            </p>

            <Button 
              onClick={scrollToContact}
              className="btn-purple"
            >
              BOOK YOUR EVENT
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
