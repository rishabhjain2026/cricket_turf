import { useState } from "react";
import { Phone, MapPin, MessageCircle, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = encodeURIComponent(`Hi T20 Arena! I'm ${form.name}. ${form.message}`);
    window.open(`https://wa.me/919XXXXXXXXX?text=${whatsappMsg}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Get In Touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Contact <span className="gradient-text">Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Info + Map */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-6 flex items-center gap-4 hover-neon">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground">T20 Arena, Vidisha</p>
                <p className="text-sm text-muted-foreground">Near [Landmark], Vidisha, MP</p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 flex items-center gap-4 hover-neon">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground">+91 9XXXXXXXXX</p>
                <p className="text-sm text-muted-foreground">Call or WhatsApp us</p>
              </div>
            </div>

            <a
              href="https://wa.me/919XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-6 flex items-center gap-4 hover-neon cursor-pointer block"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Chat on WhatsApp</p>
                <p className="text-sm text-muted-foreground">Quick replies, instant booking</p>
              </div>
            </a>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden border border-border h-52">
              <iframe
                title="T20 Arena Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.0!2d77.81!3d23.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMxJzEyLjAiTiA3N8KwNDgnMzYuMCJF!5e0!3m2!1sen!2sin!4v1"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          {/* Inquiry form */}
          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">Send an Inquiry</h3>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">Your Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">Phone Number</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="+91 9876543210"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">Message</label>
              <textarea
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="I'd like to book a session..."
              />
            </div>
            <button
              type="submit"
              className="w-full gradient-primary py-4 rounded-xl font-display text-lg font-bold text-primary-foreground hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" /> Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
