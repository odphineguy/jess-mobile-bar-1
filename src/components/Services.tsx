import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Martini, Users, Calendar, Sparkles, Wine, Clock } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Martini className="w-8 h-8 text-primary" />,
      title: "Premium Cocktail Service",
      description: "Expertly crafted cocktails using premium spirits and fresh ingredients. Each drink is a work of art."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Private Events",
      description: "Weddings, birthday parties, corporate events, and intimate gatherings. We bring the bar to you."
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Event Planning Support",
      description: "Full consultation on drink menus, quantities, and timing to make your event seamless."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Signature Cocktails",
      description: "Custom cocktail creation for your special occasion. Personalized drinks that reflect your style."
    },
    {
      icon: <Wine className="w-8 h-8 text-primary" />,
      title: "Premium Bar Setup",
      description: "Complete mobile bar setup with elegant presentation, professional equipment, and stunning displays."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Flexible Timing",
      description: "Available for morning mimosa bars, afternoon celebrations, or late-night party service."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bringing mystical elegance and premium cocktails to your special moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border hover:shadow-elegant transition-smooth transform hover:scale-105 group"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-smooth">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground shadow-elegant">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Elevate Your Event?
            </h3>
            <p className="text-lg mb-6 text-primary-foreground/90">
              Let's create an unforgettable cocktail experience for your guests
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open("tel:760-718-9157")}
                className="bg-background text-primary px-6 py-3 rounded-lg font-semibold hover:bg-background/90 transition-smooth transform hover:scale-105"
              >
                Call (760) 718-9157
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="border border-primary-foreground text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-smooth"
              >
                Get Your Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;