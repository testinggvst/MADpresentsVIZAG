import { Link } from "react-router-dom";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, 
  Building, 
  Mic2, 
  PartyPopper, 
  Palette, 
  Volume2, 
  MapPin, 
  Users,
  Check
} from "lucide-react";

import heroImage from "@/assets/hero-wedding.jpg";
import eventCorporate from "@/assets/event-corporate.jpg";
import serviceSoundLighting from "@/assets/service-sound-lighting.jpg";

const services = [
  {
    icon: Heart,
    title: "Wedding Planning",
    description: "From intimate ceremonies to grand celebrations, we craft every detail of your perfect day with love and precision.",
    features: [
      "Complete wedding coordination",
      "Venue selection & booking",
      "Custom theme design",
      "Vendor management",
      "Day-of coordination",
      "Honeymoon planning assistance",
    ],
    image: heroImage,
  },
  {
    icon: Building,
    title: "Corporate Events",
    description: "Professional conferences, product launches, team building events, and galas that inspire and impress.",
    features: [
      "Conference & summit planning",
      "Product launch events",
      "Team building activities",
      "Award ceremonies",
      "Corporate galas",
      "Trade show management",
    ],
    image: eventCorporate,
  },
  {
    icon: Mic2,
    title: "Concerts & Festivals",
    description: "Large-scale entertainment events with world-class production, artist management, and unforgettable experiences.",
    features: [
      "Artist booking & management",
      "Stage design & production",
      "Crowd management",
      "Ticketing solutions",
      "Sponsorship coordination",
      "Security planning",
    ],
    image: serviceSoundLighting,
  },
  {
    icon: PartyPopper,
    title: "Private Celebrations",
    description: "Birthday parties, anniversaries, graduations, and milestone events made truly memorable.",
    features: [
      "Birthday parties (all ages)",
      "Anniversary celebrations",
      "Graduation parties",
      "Baby showers & gender reveals",
      "Engagement parties",
      "Retirement celebrations",
    ],
    image: heroImage,
  },
  {
    icon: Palette,
    title: "Stage & Decoration",
    description: "Stunning visual environments that transform any venue into a magical, Instagram-worthy space.",
    features: [
      "Custom theme development",
      "Floral arrangements",
      "Lighting design",
      "Props & backdrops",
      "Table settings & linens",
      "Entrance & stage decor",
    ],
    image: heroImage,
  },
  {
    icon: Volume2,
    title: "Sound & Lighting",
    description: "State-of-the-art audio-visual solutions for immersive event experiences of any scale.",
    features: [
      "Professional sound systems",
      "Intelligent lighting rigs",
      "LED walls & screens",
      "Live streaming setup",
      "DJ & music services",
      "Special effects (fog, confetti)",
    ],
    image: serviceSoundLighting,
  },
];

const additionalServices = [
  { icon: MapPin, title: "Venue Coordination", description: "Finding and booking the perfect venue for your event" },
  { icon: Users, title: "Guest Management", description: "RSVP tracking, seating arrangements, and hospitality" },
];

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${serviceSoundLighting})` }}
        />
        <div className="absolute inset-0 bg-primary/80" />
        
        <div className="relative z-10 container-custom text-center">
          <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-4 animate-fade-up">
            What We Offer
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-background mb-6 animate-fade-up animation-delay-100">
            Our Services
          </h1>
          <p className="text-background/90 text-lg md:text-xl max-w-3xl mx-auto animate-fade-up animation-delay-200">
            Comprehensive event management solutions tailored to bring 
            your vision to life with excellence and creativity.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-6">
                    <service.icon size={28} />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-foreground">
                        <Check size={18} className="text-accent shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant="gold" size="lg">
                      Get a Quote
                    </Button>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg shadow-2xl w-full"
                    />
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-lg -z-10" />
                    <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeading
            subtitle="And More"
            title="Additional Services"
            description="We offer a wide range of supplementary services to ensure every aspect of your event is covered."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8 flex items-start gap-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent shrink-0">
                    <service.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-background mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-background/80 text-lg max-w-2xl mx-auto mb-10">
            Contact us today for a free consultation and let's discuss how we can 
            make your event extraordinary.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl">
              Request a Free Quote
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
