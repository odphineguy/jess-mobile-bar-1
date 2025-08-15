import { Phone, Instagram, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/jess-mobile-bar/lovable-uploads/9e9f8ba8-ec6a-489f-a2ab-b061834f47bc.png" 
                alt="Jess's Mobile Bar Logo" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">Jess's Mobile Bar</h3>
                <p className="text-primary-foreground/80">Elevated Cocktail Experience</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed">
              Bringing mystical elegance and premium cocktails to your special events 
              across Southern California.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-light" />
                <a 
                  href="tel:760-718-9157" 
                  className="hover:text-primary-light transition-smooth"
                >
                  (760) 718-9157
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-primary-light" />
                <a 
                  href="https://www.instagram.com/mobile_bar_jess" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-light transition-smooth"
                >
                  @mobile_bar_jess
                </a>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Service Areas</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary-light" />
                <span className="text-primary-foreground/80">Los Angeles County</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary-light" />
                <span className="text-primary-foreground/80">Orange County</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary-light" />
                <span className="text-primary-foreground/80">Inland Empire</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/70">
            © 2025 Jess's Mobile Bar. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;