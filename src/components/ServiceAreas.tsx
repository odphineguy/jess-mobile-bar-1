import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Star } from "lucide-react";

const ServiceAreas = () => {
  const areas = [
    {
      name: "Los Angeles",
      description: "Serving all of LA County including Hollywood, Beverly Hills, Santa Monica, and Downtown LA",
      highlights: ["Hollywood Events", "Beverly Hills Parties", "Santa Monica Celebrations", "Downtown Corporate Events"],
      travelTime: "0-45 mins"
    },
    {
      name: "Orange County",
      description: "Complete Orange County coverage from Newport Beach to Anaheim and everywhere in between",
      highlights: ["Newport Beach Weddings", "Irvine Corporate Events", "Anaheim Celebrations", "Laguna Beach Parties"],
      travelTime: "30-60 mins"
    },
    {
      name: "Inland Empire",
      description: "Riverside and San Bernardino counties including Palm Springs, Riverside, and San Bernardino",
      highlights: ["Palm Springs Resorts", "Riverside Venues", "San Bernardino Events", "Desert Celebrations"],
      travelTime: "45-90 mins"
    }
  ];

  return (
    <section id="areas" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Service Areas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bringing premium mobile bar service across Southern California's most prestigious locations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {areas.map((area, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border hover:shadow-elegant transition-smooth transform hover:scale-105 group h-full"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-foreground mb-2">
                  {area.name}
                </CardTitle>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{area.travelTime} travel</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {area.description}
                </CardDescription>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <Star className="w-4 h-4 text-primary" />
                    Popular Locations
                  </h4>
                  <ul className="space-y-1">
                    {area.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coverage Map Notice */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-center text-primary-foreground shadow-elegant">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Extensive Coverage Area
          </h3>
          <p className="text-lg mb-6 text-primary-foreground/90 max-w-3xl mx-auto">
            From the beaches of Malibu to the deserts of Palm Springs, we bring our premium 
            mobile bar service to your venue. Travel fees may apply for distant locations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 bg-primary-foreground/20 px-4 py-2 rounded-lg">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">100+ Miles Coverage</span>
            </div>
            <div className="flex items-center gap-2 bg-primary-foreground/20 px-4 py-2 rounded-lg">
              <Clock className="w-5 h-5" />
              <span className="font-medium">Flexible Scheduling</span>
            </div>
            <div className="flex items-center gap-2 bg-primary-foreground/20 px-4 py-2 rounded-lg">
              <Star className="w-5 h-5" />
              <span className="font-medium">Premium Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;