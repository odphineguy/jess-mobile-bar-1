import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import drink3 from "@assets/drink3_1753667660053.jpg";
import drink5 from "@assets/drink5_1753667660053.jpg";
import drink6 from "@assets/drink6_1753667660054.jpg";

export default function Gallery() {
  const galleryImages = [
    {
      src: drink3,
      alt: "Professional event bartending setup with elegant bar cart",
      caption: "Event Bartending",
    },
    {
      src: drink5,
      alt: "Artisanal cocktail preparation with fresh garnishes and premium ingredients",
      caption: "Cocktail Artistry",
    },
    {
      src: drink6,
      alt: "Luxury bar setup with premium spirits and sophisticated glassware",
      caption: "Luxury Setup",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
          OUR WORK IN ACTION
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl">
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-lg">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Integration */}
        <div className="text-center">
          <p className="text-lg text-foreground mb-6">
            Follow our journey and see more of our work on Instagram
          </p>
          
          <div className="bg-background rounded-xl p-8 shadow-lg mb-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Instagram post placeholders using uploaded images */}
              {[drink3, drink5, drink6, drink3].map((img, index) => (
                <div key={index} className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src={img} 
                    alt={`Instagram post ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            <p className="mt-4 text-muted-foreground">Recent posts from @mobile_bar_jess</p>
          </div>
          
          <a 
            href="https://www.instagram.com/mobile_bar_jess" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="btn-purple-outline">
              <ExternalLink className="h-4 w-4 mr-2" />
              Follow @mobile_bar_jess
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
