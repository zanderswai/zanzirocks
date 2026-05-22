import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RiArrowRightLine } from "@remixicon/react";
import { Link } from "react-router-dom";

const CHIPS = [
  { value: "1 Day", label: "Duration" },
  { value: "$550", label: "Adult" },
  { value: "$450", label: "Child" },
  { value: "Oct – Feb", label: "Best season" },
];

export default function WhaleSharkHeroSection() {
  return (
    <section className="relative w-full h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0">
        <img
          alt="Whale shark swimming in crystal clear Indian Ocean water"
          className="w-full h-full object-cover"
          src="https://plus.unsplash.com/premium_photo-1670349272577-58ee4aad079b?q=80&w=2670&auto=format&fit=crop"
        />
        <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-black/95 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
      </div>

      {/* Breadcrumb */}
      <div className="relative z-10 flex items-center gap-2 font-label text-[10px] uppercase tracking-widest text-white/35 px-8 md:px-16 pt-8">
        <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
        <span className="text-white/20">/</span>
        <Link to="/packages" className="hover:text-white/60 transition-colors">Packages</Link>
        <span className="text-white/20">/</span>
        <span className="text-primary/70">Mafia Whale Sharks</span>
      </div>

      <div className="relative z-10 mt-auto px-8 md:px-16 pb-16">
        <div className="max-w-5xl">
          <Badge
            variant="outline"
            className="border-primary/40 text-primary font-label uppercase tracking-[0.3em] text-[10px] mb-4"
          >
            Day Trip · From Zanzibar · Mafia Island Marine Park
          </Badge>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-[7rem] text-white leading-none tracking-tight text-shadow-hero mb-6">
            Swim with{" "}
            <span className="italic text-primary">Whale Sharks.</span>
          </h1>

          <div className="flex flex-wrap gap-2 mb-8">
            {CHIPS.map((chip, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/8 backdrop-blur-sm border border-white/12 rounded-full px-3 py-1.5"
              >
                <span className="font-headline text-sm text-primary">{chip.value}</span>
                <span className="font-label text-[9px] uppercase tracking-wider text-white/40">{chip.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <p className="text-white/55 text-sm font-light max-w-md leading-relaxed">
              The world's largest fish. A protected marine park. A single day that
              will stay with you for the rest of your life.
            </p>
            <div className="flex flex-wrap gap-3 shrink-0 sm:ml-auto">
              <Button
                asChild
                className="bg-primary text-on-primary hover:bg-primary-container font-bold uppercase tracking-widest text-xs px-8 gap-2"
              >
                <Link to="/contact">
                  Book This Trip <RiArrowRightLine data-icon="inline-end" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm font-label uppercase tracking-widest text-xs px-8"
              >
                <Link to="#itinerary">See Itinerary</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
