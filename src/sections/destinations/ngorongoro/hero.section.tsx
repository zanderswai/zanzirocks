import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RiArrowRightLine } from "@remixicon/react";
import { Link } from "react-router-dom";

export default function NgorongoroHeroSection() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-end items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          alt="Ngorongoro Crater — the world's largest intact volcanic caldera"
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2668&auto=format&fit=crop"
        />
        {/* Strong bottom-right gradient for right-aligned text */}
        <div className="absolute inset-0 bg-gradient-to-tl from-black/90 via-black/30 to-black/5" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-transparent" />
      </div>

      {/* Breadcrumb — left */}
      <div className="absolute top-8 left-8 md:left-16 flex items-center gap-2 font-label text-[10px] uppercase tracking-widest text-white/35 z-10">
        <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
        <span className="text-white/20">/</span>
        <Link to="/destinations" className="hover:text-white/60 transition-colors">Destinations</Link>
        <span className="text-white/20">/</span>
        <span className="text-primary/70">Ngorongoro</span>
      </div>

      {/* Content — bottom-right */}
      <div className="relative z-10 text-right px-8 md:px-16 pb-20 max-w-3xl">
        <Badge
          variant="outline"
          className="border-primary/40 text-primary font-label uppercase tracking-[0.3em] text-[10px] mb-5 ml-auto"
        >
          Northern Circuit · UNESCO World Heritage
        </Badge>

        <h1 className="font-headline text-6xl md:text-8xl text-white leading-none mb-5 tracking-tight text-shadow-hero">
          The World's Largest <br />
          <span className="italic text-primary">Intact Caldera.</span>
        </h1>

        <p className="text-white/55 text-base font-light mb-10 leading-relaxed max-w-lg ml-auto">
          One hundred square miles. Six hundred metres deep. A permanent
          community of lions, elephants, rhinos, and flamingos that never
          needs to migrate — because everything they need is already inside.
        </p>

        <div className="flex flex-wrap justify-end gap-3">
          <Button
            asChild
            className="bg-primary text-on-primary hover:bg-primary-container font-bold uppercase tracking-widest text-xs px-8 gap-2"
          >
            <Link to="/packages/serengeti-ngorongoro-safari-3-days">
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
    </section>
  );
}
