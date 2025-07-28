import { ExternalLink, Phone } from "lucide-react";
import jessLogo from "@assets/Jess_1753667449194.png";

export default function Footer() {
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

  return (
    <footer className="purple-gradient text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src={jessLogo} 
                alt="Jess's Mobile Bar Logo"
                className="h-8 w-8 rounded mr-3 object-cover"
              />
              <h3 className="text-xl font-bold">Jess's Mobile Bar</h3>
            </div>
            <p className="text-accent mb-4">Premium mobile bartending services across Southern California.</p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/mobile_bar_jess" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-white transition-colors"
              >
                <ExternalLink className="h-6 w-6" />
              </a>
              <a 
                href="tel:7607189157" 
                className="text-accent hover:text-white transition-colors"
              >
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("home")}
                  className="text-accent hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-accent hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-accent hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("gallery")}
                  className="text-accent hover:text-white transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-accent hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-accent">
              <p><strong>Phone:</strong> (760) 718-9157</p>
              <p><strong>Service Areas:</strong></p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Los Angeles</li>
                <li>• Orange County</li>
                <li>• Inland Empire</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-accent/30 mt-8 pt-8 text-center text-accent">
          <p>&copy; 2024 Jess's Mobile Bar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
