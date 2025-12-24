import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";
import EventCard from "@/components/events/EventCard";
import ServiceCard from "@/components/services/ServiceCard";
import TestimonialCard from "@/components/testimonials/TestimonialCard";
import { Calendar, Heart, Mic2, PartyPopper, Palette, Volume2 } from "lucide-react";

import heroImage from "@/assets/hero-wedding.jpg";
import eventCorporate from "@/assets/event-corporate.jpg";
import eventConcert from "@/assets/event-concert.jpg";
import eventBirthday from "@/assets/event-birthday.jpg";

const featuredEvents = [
  {
    title: "Johnson & Smith Wedding",
    type: "Wedding",
    description: "An elegant outdoor ceremony with 300 guests, featuring custom floral arrangements and live orchestra.",
    image: heroImage,
  },
  {
    title: "TechCorp Annual Summit",
    type: "Corporate",
    description: "A three-day corporate event with keynote speakers, networking sessions, and gala dinner.",
    image: eventCorporate,
  },
  {
    title: "Summer Music Festival",
    type: "Concert",
    description: "A two-day outdoor music festival featuring 20+ artists and 10,000 attendees.",
    image: eventConcert,
  },
];

const services = [
  {
    icon: Heart,
    title: "Wedding Planning",
    description: "From intimate ceremonies to grand celebrations, we craft every detail of your perfect day.",
  },
  {
    icon: Calendar,
    title: "Corporate Events",
    description: "Professional conferences, product launches, and team building events that inspire.",
  },
  {
    icon: Mic2,
    title: "Concerts & Festivals",
    description: "Large-scale entertainment events with world-class production and artist management.",
  },
  {
    icon: PartyPopper,
    title: "Private Celebrations",
    description: "Birthday parties, anniversaries, and milestone events made memorable.",
  },
  {
    icon: Palette,
    title: "Stage & Decoration",
    description: "Stunning visual environments that transform venues into magical spaces.",
  },
  {
    icon: Volume2,
    title: "Sound & Lighting",
    description: "State-of-the-art audio-visual solutions for immersive event experiences.",
  },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Bride, Johnson Wedding",
    content: "MAD Presents Vizag made our wedding day absolutely perfect. Every detail was handled with such care and professionalism. I couldn't have asked for a better team.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CEO, TechCorp",
    content: "Our annual summit was flawlessly executed. The team's attention to detail and ability to handle complex logistics was impressive. Highly recommended!",
    rating: 5,
  },
  {
    name: "Amanda Rodriguez",
    role: "Event Director, MusicFest",
    content: "Working with MAD Presents Vizag on our festival was a game-changer. Their expertise in large-scale events and vendor coordination is unmatched.",
    rating: 5,
  },
];

const stats = [
  { number: "12+", label: "Events Completed" },
  { number: "3+", label: "Years Experience" },
  { number: "50+", label: "Team Members" },
  { number: "98%", label: "Client Satisfaction" },
];

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
        
        <div className="relative z-10 container-custom text-center py-20">
          <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-6 animate-fade-up">
            Premium Event Management
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-background mb-6 animate-fade-up animation-delay-100">
            We Plan,<br />
            <span className="text-accent">You Celebrate</span>
          </h1>
          <p className="text-background/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up animation-delay-200">
            Creating unforgettable moments and extraordinary experiences for weddings, 
            corporate events, concerts, and special celebrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-300">
            <Link to="/events">
              <Button variant="hero" size="xl">
                View Our Events
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="heroOutline" size="xl">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-background/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-background/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            subtitle="What We Offer"
            title="Our Services"
            description="From intimate gatherings to grand celebrations, we offer comprehensive event management services tailored to your vision."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="gold" size="lg">
                Explore All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      {/* <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Portfolio"
            title="Featured Events"
            description="Take a glimpse at some of our most memorable events that showcase our expertise and creativity."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event, index) => (
              <div
                key={index}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <EventCard {...event} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/events">
              <Button variant="gold" size="lg">
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      {/* <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            subtitle="Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it. Here's what our happy clients have to say about their experience with us."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-background mb-6">
            Ready to Create Something <span className="text-accent">Extraordinary?</span>
          </h2>
          <p className="text-background/80 text-lg max-w-2xl mx-auto mb-10">
            Let's bring your vision to life. Contact us today to start planning your next unforgettable event.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
