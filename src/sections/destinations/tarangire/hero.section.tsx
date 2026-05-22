import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RiArrowRightLine } from "@remixicon/react";
import { Link } from "react-router-dom";

const CHIPS = [
  { value: "800+", label: "Elephants" },
  { value: "550+", label: "Bird species" },
  { value: "2,850 km²", label: "Park area" },
  { value: "Jun – Oct", label: "Peak season" },
];

export default function TarangireHeroSection() {
  return (
    <section className="relative w-full h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          alt="Elephants and ancient baobab trees in Tarangire National Park"
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1565639828644-ff8e088ebfa8?q=80&w=2670&auto=format&fit=crop"
        />
        <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black/95 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Breadcrumb */}
      <div className="relative z-10 flex items-center gap-2 font-label text-[10px] uppercase tracking-widest text-white/35 px-8 md:px-16 pt-8">
        <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
        <span className="text-white/20">/</span>
        <Link to="/destinations" className="hover:text-white/60 transition-colors">Destinations</Link>
        <span className="text-white/20">/</span>
        <span className="text-primary/70">Tarangire</span>
      </div>

      {/* Content — bottom-left */}
      <div className="relative z-10 mt-auto px-8 md:px-16 pb-16 max-w-4xl">
        <Badge
          variant="outline"
          className="border-primary/40 text-primary font-label uppercase tracking-[0.3em] text-[10px] mb-4"
        >
          Northern Circuit · Tanzania's Best-Kept Secret
        </Badge>

        <h1 className="font-headline text-6xl md:text-8xl lg:text-[7.5rem] text-white leading-none tracking-tight text-shadow-hero mb-6">
          Where the{" "}
          <span className="italic text-primary">Elephants</span>{" "}
          Rule.
        </h1>

        {/* Chip strip */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CHIPS.map((chip) => (
            <div
              key={chip.label}
              className="flex items-center gap-2 bg-white/8 backdrop-blur-sm border border-white/12 rounded-full px-3 py-1.5"
            >
              <span className="font-headline text-sm text-primary">{chip.value}</span>
              <span className="font-label text-[9px] uppercase tracking-wider text-white/40">{chip.label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start gap-4">
          <p className="text-white/55 text-sm font-light max-w-md leading-relaxed">
            Africa's highest elephant density. Baobab forests stretching to the
            horizon. A river that draws every living creature in the dry season —
            and a silence that reminds you how wild the world still is.
          </p>
          <div className="flex flex-wrap gap-3 shrink-0 sm:ml-auto">
            <Button
              asChild
              className="bg-primary text-on-primary hover:bg-primary-container font-bold uppercase tracking-widest text-xs px-8 gap-2"
            >
              <Link to="/packages">
                See Packages
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
      </div>
    </section>
  );
}
