import SectionHeading from "@/components/ui/SectionHeading";
import { Award, Users, Target, Heart } from "lucide-react";

import heroImage from "@/assets/hero-wedding.jpg";
import eventCorporate from "@/assets/event-corporate.jpg";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We pour our hearts into every event, treating each celebration as if it were our own.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Meticulous attention to detail ensures flawless execution from start to finish.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work closely with clients to understand and bring their unique vision to life.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for nothing less than exceptional results in everything we do.",
  },
];

const team = [
  {
    name: "Alexandra Sterling",
    role: "Founder & Creative Director",
    bio: "With 15+ years in luxury event planning, Alexandra brings unparalleled vision and expertise to every project.",
  },
  {
    name: "Marcus Chen",
    role: "Head of Operations",
    bio: "Marcus ensures seamless logistics and coordination, managing our team of 50+ professionals.",
  },
  {
    name: "Sophia Rodriguez",
    role: "Lead Event Designer",
    bio: "Award-winning designer who transforms spaces into breathtaking environments.",
  },
  {
    name: "David Thompson",
    role: "Technical Director",
    bio: "Expert in sound, lighting, and AV production for events of any scale.",
  },
];

const About = () => {
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
            Our Story
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-background mb-6 animate-fade-up animation-delay-100">
            About Elegance Events
          </h1>
          <p className="text-background/90 text-lg md:text-xl max-w-3xl mx-auto animate-fade-up animation-delay-200">
            For over a decade, we've been transforming dreams into reality, 
            creating unforgettable moments that last a lifetime.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-4">
                Who We Are
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Crafting Memories Since 2013
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Elegance Events was born from a simple belief: every celebration deserves to be extraordinary. 
                  What started as a small team with big dreams has grown into one of the region's most trusted 
                  event management companies.
                </p>
                <p>
                  Over the years, we've had the privilege of orchestrating over 500 events – from intimate 
                  garden weddings to large-scale corporate summits and music festivals. Each event has taught 
                  us something new and reinforced our commitment to excellence.
                </p>
                <p>
                  Today, our team of 50+ passionate professionals brings together creativity, precision, 
                  and dedication to ensure your event exceeds all expectations.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src={heroImage}
                  alt="Elegant event setup"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-accent text-primary p-6 rounded-lg shadow-xl">
                  <div className="font-display text-4xl font-bold">10+</div>
                  <div className="text-sm font-medium">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-card p-8 md:p-10 rounded-lg shadow-lg">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To create extraordinary events that bring people together, celebrate milestones, 
                and create lasting memories. We are committed to delivering exceptional experiences 
                through creativity, innovation, and unwavering attention to detail.
              </p>
            </div>
            <div className="bg-card p-8 md:p-10 rounded-lg shadow-lg">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and sought-after event management company, known for 
                transforming visions into reality and setting new standards of excellence in 
                the events industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Values"
            title="What Drives Us"
            description="Our core values guide everything we do, from the smallest details to the grandest celebrations."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
                  <value.icon size={32} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Team"
            title="Meet the Experts"
            description="A dedicated team of professionals committed to making your event extraordinary."
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-primary-foreground/10 backdrop-blur rounded-lg p-6 text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-24 h-24 rounded-full bg-accent/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-accent font-display text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-background mb-1">
                  {member.name}
                </h3>
                <p className="text-accent text-sm mb-3">{member.role}</p>
                <p className="text-background/70 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
