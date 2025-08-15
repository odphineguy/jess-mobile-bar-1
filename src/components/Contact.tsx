import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Instagram, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Let's Create Magic Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring mystical elegance to your event? Get in touch for a personalized quote
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                  <Phone className="w-6 h-6 text-primary" />
                  Get in Touch
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Call or text for immediate response and booking
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">(760) 718-9157</p>
                    <p className="text-sm text-muted-foreground">Call or text anytime</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Instagram className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">@mobile_bar_jess</p>
                    <p className="text-sm text-muted-foreground">Follow for latest events & cocktails</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Service Areas</p>
                    <p className="text-sm text-muted-foreground">LA, Orange County, Inland Empire</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Available 7 Days</p>
                    <p className="text-sm text-muted-foreground">Flexible scheduling for your event</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Buttons */}
            <div className="space-y-4">
              <Button 
                variant="elegant" 
                size="lg" 
                className="w-full"
                onClick={() => window.open("tel:760-718-9157")}
              >
                <Phone className="w-5 h-5" />
                Call (760) 718-9157
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full"
                onClick={() => window.open("sms:760-718-9157")}
              >
                <Phone className="w-5 h-5" />
                Send Text Message
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full"
                onClick={() => window.open("https://www.instagram.com/mobile_bar_jess", "_blank")}
              >
                <Instagram className="w-5 h-5" />
                Follow on Instagram
              </Button>
            </div>
          </div>

          {/* Booking Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-primary text-primary-foreground border-0">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Calendar className="w-6 h-6" />
                  Booking Information
                </CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  What to expect when you book with us
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">Consultation Call</h4>
                      <p className="text-sm text-primary-foreground/80">
                        We'll discuss your event details, guest count, and preferences
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">Custom Quote</h4>
                      <p className="text-sm text-primary-foreground/80">
                        Personalized pricing based on your specific needs and location
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">Menu Planning</h4>
                      <p className="text-sm text-primary-foreground/80">
                        Create a signature cocktail menu tailored to your event
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold">Event Day Magic</h4>
                      <p className="text-sm text-primary-foreground/80">
                        Professional setup, premium service, and unforgettable experience
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-foreground/10 rounded-lg p-4 mt-6">
                  <h4 className="font-semibold mb-2">Typical Booking Timeline</h4>
                  <p className="text-sm text-primary-foreground/80">
                    Book 2-4 weeks in advance for best availability. 
                    Rush bookings available with 48-hour notice.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-muted/30 rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Book Your Event?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Call now for immediate response and let's start planning your perfect cocktail experience
            </p>
            <Button 
              variant="elegant" 
              size="lg"
              onClick={() => window.open("tel:760-718-9157")}
            >
              <Phone className="w-5 h-5" />
              (760) 718-9157 - Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;