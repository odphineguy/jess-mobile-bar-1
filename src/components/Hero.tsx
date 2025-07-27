import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-light/20 via-transparent to-primary-dark/20"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/9e9f8ba8-ec6a-489f-a2ab-b061834f47bc.png" 
              alt="Jess's Mobile Bar Logo" 
              className="h-48 w-48 object-contain drop-shadow-2xl hover:drop-shadow-glow transition-smooth transform hover:scale-105"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Jess's Mobile Bar
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-primary-foreground/90">
            Elevated Cocktail Experience
          </p>
          
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
            Bringing premium cocktails and mystical elegance to your special events across 
            Los Angeles, Orange County, and the Inland Empire
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="elegant" 
              size="lg"
              onClick={() => window.open("tel:760-718-9157")}
              className="bg-background text-primary hover:bg-background/90 hover:shadow-elegant transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Call (760) 718-9157
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Mail className="w-5 h-5" />
              Get Quote
            </Button>
          </div>

          {/* Service Areas */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Los Angeles</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-primary-foreground/30"></div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Orange County</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-primary-foreground/30"></div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Inland Empire</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-foreground/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary-foreground/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;