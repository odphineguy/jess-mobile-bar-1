import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, MapPin, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventDate: "",
    location: "",
    serviceType: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await apiRequest("POST", "/api/contact", formData);
      toast({
        title: "Thank you for your inquiry!",
        description: "We'll contact you soon to discuss your event.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        eventDate: "",
        location: "",
        serviceType: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit your inquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            READY TO MIX UP<br />SOME MAGIC?
          </h2>
          <p className="text-xl md:text-2xl font-light text-foreground">Let's talk!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="text-primary text-xl mr-4" />
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <a 
                      href="tel:7607189157" 
                      className="text-primary hover:text-primary/80 transition-colors text-lg"
                    >
                      (760) 718-9157
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-primary text-xl mr-4" />
                  <div>
                    <p className="font-semibold text-foreground">Service Areas</p>
                    <p className="text-muted-foreground">Los Angeles • Orange County • Inland Empire</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="text-primary text-xl mr-4" />
                  <div>
                    <p className="font-semibold text-foreground">Follow Us</p>
                    <a 
                      href="https://www.instagram.com/mobile_bar_jess" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      @mobile_bar_jess
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-background shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a href="tel:7607189157" className="block">
                  <Button className="w-full btn-purple">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                </a>
                <a href="sms:7607189157" className="block">
                  <Button variant="outline" className="w-full">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Send Text
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-background shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">Request a Quote</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div>
                  <Label htmlFor="eventDate">Event Date</Label>
                  <Input
                    id="eventDate"
                    name="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div>
                  <Label htmlFor="location">Event Location</Label>
                  <Select onValueChange={(value) => handleSelectChange("location", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Service Area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="los-angeles">Los Angeles</SelectItem>
                      <SelectItem value="orange-county">Orange County</SelectItem>
                      <SelectItem value="inland-empire">Inland Empire</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="serviceType">Service Type</Label>
                  <Select onValueChange={(value) => handleSelectChange("serviceType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consultation">Consultation Services</SelectItem>
                      <SelectItem value="byob">BYOB Experience</SelectItem>
                      <SelectItem value="full-service">Full Service Package</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message">Tell us about your event</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Event details, guest count, special requests..."
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full btn-purple"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Request"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
