import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src="/jess-mobile-bar/lovable-uploads/9e9f8ba8-ec6a-489f-a2ab-b061834f47bc.png" 
            alt="Jess's Mobile Bar Logo" 
            className="h-12 w-12 object-contain"
          />
          <div>
            <h1 className="text-xl font-bold text-foreground">Jess's Mobile Bar</h1>
            <p className="text-sm text-muted-foreground">Elevated Cocktail Experience</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-foreground hover:text-primary transition-smooth"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-foreground hover:text-primary transition-smooth"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("areas")}
            className="text-foreground hover:text-primary transition-smooth"
          >
            Service Areas
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-foreground hover:text-primary transition-smooth"
          >
            Contact
          </button>
          <Button variant="elegant" onClick={() => window.open("tel:760-718-9157")}>
            <Phone className="w-4 h-4" />
            Book Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-smooth text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-primary transition-smooth text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("areas")}
                className="text-foreground hover:text-primary transition-smooth text-left"
              >
                Service Areas
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-smooth text-left"
              >
                Contact
              </button>
              <Button variant="elegant" onClick={() => window.open("tel:760-718-9157")} className="w-fit">
                <Phone className="w-4 h-4" />
                Book Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;