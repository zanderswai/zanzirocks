import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RiArrowRightLine, RiArrowDownLine } from "@remixicon/react";
import { Link } from "react-router-dom";

const STATS = [
  { value: "30,893 km²", label: "Park Area" },
  { value: "~45 min",    label: "Fly from Zanzibar" },
  { value: "Africa's #1", label: "Largest Standalone Park" },
  { value: "10+",        label: "Big Game Species" },
];

export default function NyerereHeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          alt="Nyerere National Park — Africa's largest wilderness"
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1695367255234-2cb7fbc6425b?q=80&w=2670&auto=format&fit=crop"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      </div>

      {/* Breadcrumb */}
      <div className="absolute top-8 left-8 md:left-16 flex items-center gap-2 font-label text-[10px] uppercase tracking-widest text-white/35 z-10">
        <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
        <span className="text-white/20">/</span>
        <Link to="/destinations" className="hover:text-white/60 transition-colors">Destinations</Link>
        <span className="text-white/20">/</span>
        <span className="text-primary/70">Nyerere</span>
      </div>

      {/* Centered content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <Badge
          variant="outline"
          className="border-primary/40 text-primary font-label uppercase tracking-[0.3em] text-[10px] mb-6"
        >
          Southern Circuit · Safari Destination
        </Badge>

        <h1 className="font-headline text-6xl md:text-8xl lg:text-[7rem] text-white leading-none mb-6 tracking-tight text-shadow-hero">
          Africa's Largest <br />
          <span className="italic text-primary">National Park.</span>
        </h1>

        <p className="text-white/55 text-base md:text-lg font-light max-w-2xl mx-auto mb-12 leading-relaxed">
          Wilder, less crowded, and 45 minutes from Zanzibar by air.
          The Rufiji River winds through elephant country, and a boat safari
          puts you face-to-face with hippos and crocodiles in their element.
        </p>

        {/* Stat chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center px-5 py-3 rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm"
            >
              <span className="font-headline text-xl text-primary leading-none">{value}</span>
              <span className="font-label text-[9px] uppercase tracking-widest text-white/40 mt-1">{label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <Button
            asChild
            className="bg-primary text-on-primary hover:bg-primary-container font-bold uppercase tracking-widest text-xs px-8 gap-2"
          >
            <Link to="/packages/nyerere-fly-in-safari-3-days">
              Book Fly-In Safari
              <RiArrowRightLine data-icon="inline-end" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm font-label uppercase tracking-widest text-xs px-8"
          >
            <Link to="/contact">Plan My Trip</Link>
          </Button>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <RiArrowDownLine className="size-5 text-white/25 animate-bounce" />
        <span className="font-label text-[9px] uppercase tracking-[0.4em] text-white/20">
          Explore
        </span>
      </div>
    </section>
  );
}
