import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Martini, Users, Sparkles, Phone, Mail } from "lucide-react";
import servicesBackground from "@/assets/services-background.jpg";
import serviceIcon1 from "@/assets/service-icon-1.jpg";
import serviceIcon2 from "@/assets/service-icon-2.jpg";
import serviceIcon3 from "@/assets/service-icon-3.jpg";

const Services = () => {
  const services = [
    {
      icon: <Martini className="w-8 h-8 text-primary" />,
      title: "Craft Cocktails",
      description: "Expertly crafted cocktails using premium spirits and fresh ingredients, tailored to your event's theme and guest preferences.",
      image: serviceIcon1
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Professional Bartenders",
      description: "Licensed and experienced bartenders who provide exceptional service and create memorable experiences for your guests.",
      image: serviceIcon2
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Custom Packages",
      description: "Personalized service packages designed to match your event size, style, and budget requirements.",
      image: serviceIcon3
    }
  ];

  return (
    <section id="services" className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${servicesBackground})` }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/95 backdrop-blur-sm"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Elevate your event with our premium mobile bar services. From intimate gatherings 
            to grand celebrations, we bring the perfect cocktail experience to you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group bg-card hover:shadow-elegant transition-smooth hover:-translate-y-2 overflow-hidden">
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3">
                    {service.icon}
                    <CardTitle className="text-lg font-semibold text-primary-foreground">{service.title}</CardTitle>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-card p-8 rounded-2xl border backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to Elevate Your Event?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
            Let's create an unforgettable cocktail experience for your special occasion. 
            Contact us today for a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="elegant" 
              size="lg"
              onClick={() => window.open("tel:760-718-9157")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:shadow-elegant transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Request Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;