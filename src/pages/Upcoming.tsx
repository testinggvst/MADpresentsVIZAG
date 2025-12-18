import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock } from "lucide-react";

import eventConcert from "@/assets/event-concert.jpg";
import eventCorporate from "@/assets/event-corporate.jpg";
import eventWeddingDecor from "@/assets/event-wedding-decor.jpg";

const upcomingEvents = [
  {
    title: "Winter Gala 2025",
    date: "January 15, 2025",
    time: "7:00 PM - 11:00 PM",
    location: "Grand Ballroom, The Plaza Hotel",
    description: "An enchanting evening of elegance, fine dining, and live entertainment. Join us for the most anticipated social event of the season.",
    image: eventWeddingDecor,
    category: "Gala",
  },
  {
    title: "Tech Innovation Summit",
    date: "February 8-10, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "Convention Center, Downtown",
    description: "Three days of inspiring talks, workshops, and networking with industry leaders. Early bird registration now open.",
    image: eventCorporate,
    category: "Corporate",
  },
  {
    title: "Spring Music Festival",
    date: "March 22-23, 2025",
    time: "2:00 PM - 10:00 PM",
    location: "Central Park Amphitheater",
    description: "A two-day celebration of music featuring renowned artists from around the world. Get your tickets before they sell out!",
    image: eventConcert,
    category: "Festival",
  },
  {
    title: "Charity Auction Night",
    date: "April 5, 2025",
    time: "6:30 PM - 10:00 PM",
    location: "Art Gallery, Museum District",
    description: "An exclusive evening supporting local charities featuring art auction, gourmet dining, and special performances.",
    image: eventWeddingDecor,
    category: "Charity",
  },
];

const Upcoming = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${eventCorporate})` }}
        />
        <div className="absolute inset-0 bg-primary/80" />
        
        <div className="relative z-10 container-custom text-center">
          <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-4 animate-fade-up">
            Save The Date
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-background mb-6 animate-fade-up animation-delay-100">
            Upcoming Events
          </h1>
          <p className="text-background/90 text-lg md:text-xl max-w-3xl mx-auto animate-fade-up animation-delay-200">
            Discover our upcoming events and be part of extraordinary experiences 
            crafted with passion and precision.
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="relative aspect-video md:aspect-auto">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-primary text-xs font-semibold px-3 py-1 rounded-full">
                        {event.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {event.description}
                    </p>
                    <div className="flex flex-wrap gap-4 mb-6 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar size={16} className="text-accent" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock size={16} className="text-accent" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin size={16} className="text-accent" />
                        {event.location}
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Link to="/contact">
                        <Button variant="gold">
                          Register Now
                        </Button>
                      </Link>
                      <Link to="/contact">
                        <Button variant="outline">
                          Contact for Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Planning Your Own Event?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Let us help you create an unforgettable experience. Contact us today 
            to discuss your vision and get a personalized quote.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="lg">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Upcoming;
