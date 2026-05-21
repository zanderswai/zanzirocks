import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RiArrowRightLine, RiArrowDownLine, RiMapPinLine, RiCalendarLine, RiFlightTakeoffLine } from "@remixicon/react";
import { Link } from "react-router-dom";

const QUICK_FACTS = [
  { icon: RiMapPinLine, label: "Region", value: "Coastal Tanzania" },
  { icon: RiCalendarLine, label: "Best Time", value: "Jun–Oct · Dec–Feb" },
  { icon: RiFlightTakeoffLine, label: "Safari Access", value: "45 min by air" },
];

export default function ZanzibarHeroSection() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          alt="Zanzibar Island — Indian Ocean coastline"
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1644968519459-884c0c8b47d4?q=80&w=2671&auto=format&fit=crop"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
      </div>

      {/* Breadcrumb */}
      <div className="absolute top-8 left-8 md:left-16 flex items-center gap-2 font-label text-[10px] uppercase tracking-widest text-white/35 z-10">
        <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
        <span className="text-white/20">/</span>
        <Link to="/destinations" className="hover:text-white/60 transition-colors">Destinations</Link>
        <span className="text-white/20">/</span>
        <span className="text-primary/70">Zanzibar</span>
      </div>

      {/* Main content */}
      <div className="relative z-10 px-8 md:px-16 pb-20 max-w-5xl">
        <Badge
          variant="outline"
          className="border-primary/40 text-primary font-label uppercase tracking-[0.3em] text-[10px] mb-6"
        >
          Island Experience · Departure Hub
        </Badge>

        <h1 className="font-headline text-6xl md:text-8xl lg:text-[7rem] text-white leading-none mb-6 tracking-tight">
          Your Gateway <br />
          to{" "}
          <span className="italic text-primary">Everything.</span>
        </h1>

        <p className="text-white/55 text-base md:text-lg font-light max-w-xl mb-10 leading-relaxed">
          The spice-scented jewel of the Indian Ocean — and the launchpad for every
          safari in our collection. Stone Town, coral reefs, and the whole of
          Tanzania, all within reach.
        </p>

        {/* Quick facts strip */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-10">
          {QUICK_FACTS.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-2.5">
              <Icon className="size-3.5 text-primary shrink-0" />
              <span className="font-label text-[10px] uppercase tracking-widest text-white/35">
                {label}
              </span>
              <span className="w-px h-3 bg-white/15" />
              <span className="font-label text-[11px] text-white/75 font-bold">{value}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            className="bg-primary text-on-primary hover:bg-primary-container font-bold uppercase tracking-widest text-xs px-8 gap-2"
          >
            <Link to="/packages">
              Explore Packages
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
      <div className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2 z-10">
        <span className="font-label text-[9px] uppercase tracking-[0.4em] text-white/25 [writing-mode:vertical-lr]">
          Scroll
        </span>
        <RiArrowDownLine className="size-4 text-white/25 animate-bounce" />
      </div>
    </section>
  );
}
