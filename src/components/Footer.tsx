const Footer = () => (
  <footer className="border-t border-border py-10 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="font-display text-xl font-bold">
        <span className="gradient-text">T20</span> ARENA
      </div>
      <p className="text-sm text-muted-foreground text-center">
        © {new Date().getFullYear()} T20 Arena, Vidisha. All rights reserved.
      </p>
      <div className="flex gap-6 text-sm text-muted-foreground">
        <a href="#home" className="hover:text-primary transition-colors">Home</a>
        <a href="#facilities" className="hover:text-primary transition-colors">Facilities</a>
        <a href="#booking" className="hover:text-primary transition-colors">Booking</a>
        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
      </div>
    </div>
  </footer>
);

export default Footer;
