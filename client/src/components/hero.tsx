import { Button } from "@/components/ui/button";
import drink3 from "@assets/drink3_1753667660053.jpg";

export default function Hero() {
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

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0 hero-overlay z-10"></div>
      <img 
        src={drink3}
        alt="Elegant mobile bar setup at luxury event" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="relative z-20 text-center text-white px-4 max-w-4xl animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          AN EXPERIENCE THAT LEAVES YOU
          <span className="block text-accent">THIRSTY FOR MORE</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light">
          Premium mobile bartending services across Los Angeles, Orange County & Inland Empire
        </p>
        <Button 
          onClick={scrollToContact}
          size="lg"
          className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
        >
          READY TO WORK WITH US?
        </Button>
      </div>
    </section>
  );
}
