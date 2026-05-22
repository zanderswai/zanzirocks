import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RiArrowRightLine } from "@remixicon/react";
import { Link } from "react-router-dom";

export default function SerengetiHeroSection() {
  return (
    <section className="relative w-full h-screen flex flex-col overflow-hidden">
      {/* Full-bleed background — maximum image, minimal treatment */}
      <div className="absolute inset-0">
        <img
          alt="Serengeti National Park — the Great Migration"
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1721840432289-d0041522103d?q=80&w=2670&auto=format&fit=crop"
        />
        {/* Gradient only at very bottom — let the image breathe */}
        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/95 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
      </div>

      {/* Breadcrumb */}
      <div className="relative z-10 flex items-center gap-2 font-label text-[10px] uppercase tracking-widest text-white/35 px-8 md:px-16 pt-8">
        <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
        <span className="text-white/20">/</span>
        <Link to="/destinations" className="hover:text-white/60 transition-colors">Destinations</Link>
        <span className="text-white/20">/</span>
        <span className="text-primary/70">Serengeti</span>
      </div>

      {/* Content — pushed to very bottom of the screen */}
      <div className="relative z-10 mt-auto px-8 md:px-16 pb-16">
        <div className="max-w-5xl">
          {/* Overline */}
          <Badge
            variant="outline"
            className="border-primary/40 text-primary font-label uppercase tracking-[0.3em] text-[10px] mb-4"
          >
            Northern Circuit · Tanzania's Icon
          </Badge>

          {/* Headline — very large, takes full width */}
          <h1 className="font-headline text-6xl md:text-8xl lg:text-[8rem] text-white leading-none tracking-tight text-shadow-hero mb-6">
            The Great <span className="italic text-primary">Migration.</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            <p className="text-white/55 text-base font-light max-w-xl leading-relaxed">
              1.5 million wildebeest. 200,000 zebra. A cycle of birth, movement,
              and river crossings that has played out across the Serengeti plains
              for tens of thousands of years — and is still happening right now.
            </p>
            <div className="flex flex-wrap gap-3 shrink-0">
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
        </div>
      </div>
    </section>
  );
}
