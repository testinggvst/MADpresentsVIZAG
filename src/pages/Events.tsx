import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import EventCard from "@/components/events/EventCard";
import { Button } from "@/components/ui/button";

import heroImage from "@/assets/hero-wedding.jpg";
import eventCorporate from "@/assets/Holi.jpeg";
import eventConcert from "@/assets/Holi.jpeg";
import eventBirthday from "@/assets/event-birthday.jpg";
import eventWeddingDecor from "@/assets/IMG_8214.jpg";

const categories = ["All", "New Year Eve","Beach Festival"];

const events = [
  {
    title: "Cheers 2024 ",
    type: "New Year Eve",
    description: "An elegant outdoor night celebrating love with live music, gourmet dining, and stunning decor.",
    image: heroImage,
  },
  {
    title: "Holi Utsav",
    type: "Beach Festival",
    description: "A holi celebration on the beach with vibrant colors, music, dance, and festive food stalls.",
    image: eventCorporate,
  }
  // {
  //   title: "Summer Music Festival",
  //   type: "Concert",
  //   description: "A two-day outdoor music festival featuring 20+ artists and 10,000 enthusiastic attendees.",
  //   image: eventConcert,
  // },
  // {
  //   title: "Emma's Sweet 16",
  //   type: "Birthday",
  //   description: "A magical celebration with custom decorations, live entertainment, and unforgettable moments.",
  //   image: eventBirthday,
  // },
  // {
  //   title: "Royal Indian Wedding",
  //   type: "Wedding",
  //   description: "A grand traditional wedding celebration spanning three days with 500+ guests and exquisite decor.",
  //   image: eventWeddingDecor,
  // },
  // {
  //   title: "Innovation Conference 2024",
  //   type: "Corporate",
  //   description: "An inspiring conference featuring industry leaders, workshops, and breakthrough product launches.",
  //   image: eventCorporate,
  // },
  // {
  //   title: "Rock the Night Festival",
  //   type: "Concert",
  //   description: "A high-energy rock concert featuring legendary bands and state-of-the-art production.",
  //   image: eventConcert,
  // },
  // {
  //   title: "Golden Anniversary Celebration",
  //   type: "Private",
  //   description: "An intimate 50th anniversary celebration honoring five decades of love and togetherness.",
  //   image: heroImage,
  // },
  // {
  //   title: "Garden Wedding Reception",
  //   type: "Wedding",
  //   description: "A romantic garden wedding with fairy lights, custom florals, and a dreamy atmosphere.",
  //   image: eventWeddingDecor,
  // },
];

const Events = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredEvents = activeCategory === "All"
    ? events
    : events.filter(event => event.type === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${eventConcert})` }}
        />
        <div className="absolute inset-0 bg-primary/80" />
        
        <div className="relative z-10 container-custom text-center">
          <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-4 animate-fade-up">
            Our Portfolio
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-background mb-6 animate-fade-up animation-delay-100">
            Past Events
          </h1>
          <p className="text-background/90 text-lg md:text-xl max-w-3xl mx-auto animate-fade-up animation-delay-200">
            Explore our collection of successfully executed events that showcase 
            our expertise, creativity, and commitment to excellence.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "gold" : "outline"}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <div
                key={index}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <EventCard {...event} />
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No events found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Want Your Event Featured Here?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Let us create an extraordinary event that will be remembered for years to come.
          </p>
          <Button variant="gold" size="lg" asChild>
            <a href="/contact">Start Planning Your Event</a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Events;
