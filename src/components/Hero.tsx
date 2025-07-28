import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Star, Award } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      ></div>
      
      {/* Elegant Overlay */}
      <div className="absolute inset-0 bg-gradient-overlay"></div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary-light/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
      
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
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-primary-foreground/90">5-Star Mobile Bar Service</span>
          </div>
          
          <p className="text-xl md:text-2xl mb-4 text-primary-foreground/90 font-light">
            Elevated Cocktail Experience
          </p>
          
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Bringing premium cocktails and mystical elegance to your special events across 
            Los Angeles, Orange County, and the Inland Empire
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span className="text-sm">Professional Bartenders</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-primary-foreground/30"></div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span className="text-sm">Premium Ingredients</span>
            </div>
          </div>

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
              className="border-primary-foreground text-primary bg-primary-foreground hover:bg-primary-foreground/90"
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

    </section>
  );
};

export default Hero;