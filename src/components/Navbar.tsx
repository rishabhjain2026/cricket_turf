import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Facilities", href: "#facilities" },
  { label: "Booking", href: "#booking" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#home" className="font-display text-2xl font-bold tracking-wider">
          <span className="gradient-text">T20</span>{" "}
          <span className="text-foreground">ARENA</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            className="gradient-primary px-5 py-2 rounded-lg text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Book Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass-card mt-2 mx-4 rounded-xl p-6 animate-fade-in-up">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-foreground font-medium hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setMobileOpen(false)}
            className="block mt-4 gradient-primary text-center px-5 py-3 rounded-lg font-semibold text-primary-foreground"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
