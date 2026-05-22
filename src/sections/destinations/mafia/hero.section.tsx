import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RiArrowRightLine, RiArrowDownLine } from "@remixicon/react";
import { Link } from "react-router-dom";

const CHIPS = [
  { value: "$550",      label: "Adults / person" },
  { value: "~50 min",   label: "Flight from Zanzibar" },
  { value: "Oct–Feb",   label: "Peak whale shark season" },
  { value: "MPA",       label: "Marine Protected Area" },
];

export default function MafiaHeroSection() {
  return (
    <section className="relative w-full h-screen flex items-end justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          alt="Mafia Island — Indian Ocean marine reserve"
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=2574&auto=format&fit=crop"
        />
        {/* Ocean-depth gradient: deep at bottom, lighter at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
      </div>

      {/* Breadcrumb */}
      <div className="absolute top-8 left-8 md:left-16 flex items-center gap-2 font-label text-[10px] uppercase tracking-widest text-white/35 z-10">
        <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
        <span className="text-white/20">/</span>
        <Link to="/destinations" className="hover:text-white/60 transition-colors">Destinations</Link>
        <span className="text-white/20">/</span>
        <span className="text-primary/70">Mafia Island</span>
      </div>

      {/* Content — anchored to bottom, centre-aligned */}
      <div className="relative z-10 text-center pb-16 px-6 max-w-4xl w-full">
        <Badge
          variant="outline"
          className="border-primary/40 text-primary font-label uppercase tracking-[0.3em] text-[10px] mb-5"
        >
          Coastal Island · Day Trip from Zanzibar
        </Badge>

        <h1 className="font-headline text-6xl md:text-8xl lg:text-[7rem] text-white leading-none mb-5 tracking-tight text-shadow-hero">
          Swim With <br />
          <span className="italic text-primary">Giants.</span>
        </h1>

        <p className="text-white/55 text-base md:text-lg font-light max-w-xl mx-auto mb-10 leading-relaxed">
          A 50-minute morning flight from Zanzibar. A boat ride into open ocean.
          And then — a whale shark glides beneath you, 8 metres long and utterly
          indifferent to your presence. This is Mafia Island.
        </p>

        {/* Chips row */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {CHIPS.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center px-5 py-3 rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm"
            >
              <span className="font-headline text-lg text-primary leading-none">{value}</span>
              <span className="font-label text-[9px] uppercase tracking-widest text-white/40 mt-1">{label}</span>
            </div>
          ))}
        </div>

        <Button
          asChild
          className="bg-primary text-on-primary hover:bg-primary-container font-bold uppercase tracking-widest text-xs px-10 gap-2"
        >
          <Link to="/packages/mafia-island-whale-shark-adventure-day-trip">
            Book Day Trip
            <RiArrowRightLine data-icon="inline-end" />
          </Link>
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2 z-10">
        <RiArrowDownLine className="size-5 text-white/25 animate-bounce" />
      </div>
    </section>
  );
}
