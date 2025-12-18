import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold">
              Elegance<span className="text-accent">Events</span>
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Creating unforgettable moments and extraordinary experiences for over a decade. 
              Your vision, our expertise.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-accent">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Services" },
                { href: "/events", label: "Past Events" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-accent">Our Services</h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <span>Wedding Planning</span>
              <span>Corporate Events</span>
              <span>Concerts & Festivals</span>
              <span>Birthday Celebrations</span>
              <span>Stage & Decoration</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-accent">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:+1234567890" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                <Phone size={16} />
                +1 (234) 567-890
              </a>
              <a href="mailto:hello@eleganceevents.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                <Mail size={16} />
                hello@eleganceevents.com
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin size={16} className="mt-1 shrink-0" />
                <span>123 Event Street, Suite 100<br />New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Elegance Events. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
