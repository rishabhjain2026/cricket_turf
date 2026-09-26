import { useState } from "react";
import { CalendarDays, Clock, IndianRupee } from "lucide-react";

const timeSlots = [
  { time: "6:00 AM - 8:00 AM", price: 800, label: "Morning" },
  { time: "8:00 AM - 10:00 AM", price: 800, label: "Morning" },
  { time: "10:00 AM - 12:00 PM", price: 600, label: "Midday" },
  { time: "4:00 PM - 6:00 PM", price: 1000, label: "Evening" },
  { time: "6:00 PM - 8:00 PM", price: 1200, label: "Prime" },
  { time: "8:00 PM - 10:00 PM", price: 1200, label: "Prime" },
];

const sports = ["Cricket", "Pickleball"];

const BookingSection = () => {
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [selectedSport, setSelectedSport] = useState("Cricket");

  return (
    <section id="booking" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Reserve Your Spot</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Book Your <span className="gradient-text">Session</span>
          </h2>
        </div>

        <div className="glass-card rounded-3xl p-6 md:p-10">
          {/* Sport selector */}
          <div className="flex gap-3 mb-8">
            {sports.map((sport) => (
              <button
                key={sport}
                onClick={() => setSelectedSport(sport)}
                className={`px-6 py-3 rounded-xl font-display font-semibold text-sm transition-all ${
                  selectedSport === sport
                    ? "gradient-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {sport}
              </button>
            ))}
          </div>

          {/* Time slots */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {timeSlots.map((slot, i) => (
              <button
                key={i}
                onClick={() => setSelectedSlot(i)}
                className={`flex items-center justify-between p-5 rounded-xl border transition-all ${
                  selectedSlot === i
                    ? "neon-border bg-primary/10"
                    : "border-border hover:border-primary/30"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div className="text-left">
                    <p className="font-medium text-foreground">{slot.time}</p>
                    <p className="text-xs text-muted-foreground">{slot.label}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-primary font-display font-bold text-lg">
                  <IndianRupee className="w-4 h-4" />
                  {slot.price}
                </div>
              </button>
            ))}
          </div>

          <button
            className="w-full gradient-primary py-4 rounded-xl font-display text-lg font-bold text-primary-foreground hover:opacity-90 transition-opacity animate-pulse-glow"
          >
            <CalendarDays className="w-5 h-5 inline mr-2" />
            Book Now {selectedSlot !== null && `— ₹${timeSlots[selectedSlot].price}`}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
