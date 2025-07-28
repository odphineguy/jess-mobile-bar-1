import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Martini, Sparkles } from "lucide-react";
import drink1 from "@assets/drink1_1753667660044.jpg";

export default function Services() {
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

  const services = [
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "CONSULTATION SERVICES",
      description: "Expert advice to elevate your existing bar program. Menu development, staff training, and flow optimization to maximize your beverage service.",
    },
    {
      icon: <Martini className="h-8 w-8 text-primary" />,
      title: "SIGNATURE COCKTAIL EXPERIENCE (BYOB)",
      description: "You provide the spirits, we provide the expertise. Complete bar setup with professional bartending, premium mixers, and stunning presentation.",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "EXPERIENCE + LIQUOR & MIXERS",
      description: "The complete package. Premium spirits, professional bartending, full bar setup, and everything needed for an unforgettable experience.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header with background image */}
        <div className="relative mb-16 rounded-xl overflow-hidden">
          <img 
            src={drink1}
            alt="Luxury bar setup with premium spirits and glassware" 
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 hero-overlay flex items-center justify-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white text-center">
              CHOOSE YOUR<br />
              <span className="text-accent">EXPERIENCE</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-muted shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-primary">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Button 
                  onClick={scrollToContact}
                  className="w-full btn-purple"
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
