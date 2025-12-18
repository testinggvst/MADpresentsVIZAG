import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/events", label: "Past Events" },
  { href: "/upcoming", label: "Upcoming" },
  { href: "/gallery", label: "Gallery" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-2xl font-bold text-primary">
              Elegance<span className="text-accent">Events</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`gold-underline text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button variant="gold" size="lg">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium py-2 transition-colors ${
                    location.pathname === link.href
                      ? "text-accent"
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button variant="gold" className="w-full mt-2">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
