import { Badge } from "@/components/ui/badge";

export default function TanzaniaMapSection() {
  return (
    <section className="py-16 md:py-32 mb-32 md:mb-48">
      <div className="text-center mb-16 md:mb-24">
        <Badge variant="outline" className="border-primary/40 text-primary font-label uppercase tracking-widest text-xs mb-6">
          Geographic Journey
        </Badge>
        <h2 className="font-headline text-5xl md:text-6xl leading-tight">
          The Pulse of <br />
          <span className="text-primary italic">Tanzania</span>
        </h2>
      </div>

      <div className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-2xl group">
        <img
          alt="Tanzania Tourism Map"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src="/generated-1777077748791.webp"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-40" />
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 max-w-lg">
          <p className="text-on-surface-variant text-sm font-light">
            Explore key destinations with glowing markers — from the snow-capped peaks of Kilimanjaro to the pristine shores of Zanzibar.
          </p>
        </div>
      </div>
    </section>
  );
}
