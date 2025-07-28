import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import jessLogo from "@assets/Jess_1753667449194.png";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Gallery", id: "gallery" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-lg"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div 
          className="flex items-center cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <img 
            src={jessLogo} 
            alt="Jess's Mobile Bar Logo"
            className="h-12 w-12 rounded-lg mr-3 object-cover"
          />
          <div>
            <h1 className="text-xl font-bold text-primary">Jess's Mobile Bar</h1>
            <p className="text-sm text-muted-foreground">Premium Mobile Bartending</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:7607189157">
            <Button variant="outline" size="sm">
              <Phone className="h-4 w-4 mr-2" />
              (760) 718-9157
            </Button>
          </a>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-lg text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t">
                <a href="tel:7607189157">
                  <Button className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Call (760) 718-9157
                  </Button>
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
