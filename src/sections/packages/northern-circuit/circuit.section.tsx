import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { RiArrowRightLine } from "@remixicon/react";
import { cn } from "@/lib/utils";

type Stop = {
  day: string;
  name: string;
  slug: string;
  tag: string;
  tagClass: string;
  image: string;
  alt: string;
  headline: string;
  keyFacts: string[];
};

const STOPS: Stop[] = [
  {
    day: "Day 1–2",
    name: "Tarangire",
    slug: "destinations/tarangire",
    tag: "Hidden Gem",
    tagClass: "text-orange-400 border-orange-400/30",
    image: "https://images.unsplash.com/photo-1565639828644-ff8e088ebfa8?q=80&w=800&auto=format&fit=crop",
    alt: "Elephant herd under baobab trees in Tarangire",
    headline: "800 elephants. Ancient baobabs. Zero crowds.",
    keyFacts: ["Africa's highest elephant density", "1,000-year-old baobab forest", "Optional bush walk"],
  },
  {
    day: "Day 2–3",
    name: "Serengeti",
    slug: "destinations/serengeti",
    tag: "Bucket List",
    tagClass: "text-amber-400 border-amber-400/30",
    image: "https://images.unsplash.com/photo-1721840432289-d0041522103d?q=80&w=800&auto=format&fit=crop",
    alt: "Wildebeest herd crossing the Serengeti at golden hour",
    headline: "1.5 million wildebeest. One endless plain.",
    keyFacts: ["Great Migration (year-round)", "Big cat sightings daily", "Overnight on the plains"],
  },
  {
    day: "Day 4",
    name: "Ngorongoro",
    slug: "destinations/ngorongoro",
    tag: "World Famous",
    tagClass: "text-primary border-primary/30",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop",
    alt: "Ngorongoro Crater panorama",
    headline: "600m descent. The world's greatest wildlife arena.",
    keyFacts: ["~25,000 animals on crater floor", "One of Africa's last wild rhino", "Full-day crater descent"],
  },
];

export default function NorthernCircuitSection() {
  return (
    <section className="mb-32 md:mb-48">
      <div className="mb-14">
        <Badge
          variant="outline"
          className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-4"
        >
          The Circuit
        </Badge>
        <h2 className="font-headline text-4xl md:text-5xl leading-tight">
          Arusha → Tarangire → Serengeti{" "}
          <span className="italic text-primary">→ Ngorongoro.</span>
        </h2>
        <p className="text-on-surface-variant text-sm font-light mt-4 max-w-xl leading-relaxed">
          The northern circuit is a journey, not a list. Each park flows into the
          next — the landscape changes, the animals change, and by the end you
          understand Tanzania in a way that a single-park visit never allows.
        </p>
      </div>

      {/* Route progression indicator */}
      <div className="relative mb-10 hidden md:flex items-center gap-0">
        {STOPS.map((stop, i) => (
          <div key={stop.name} className="flex items-center flex-1">
            <div className="flex flex-col items-center gap-1.5 w-full">
              <div className={cn(
                "w-3 h-3 rounded-full border-2 border-primary",
                i === 2 ? "bg-primary" : "bg-transparent",
              )} />
              <span className="font-label text-[8px] uppercase tracking-widest text-primary/70">{stop.day}</span>
              <span className="font-headline text-sm text-on-surface">{stop.name}</span>
            </div>
            {i < STOPS.length - 1 && (
              <div className="flex-1 h-px bg-primary/30 mx-2 mt-[-24px]" />
            )}
          </div>
        ))}
        <div className="flex items-center gap-1 ml-4 mt-[-24px]">
          <RiArrowRightLine className="size-4 text-primary/40" />
          <span className="font-label text-[8px] uppercase tracking-widest text-on-surface-variant/40">Return Arusha</span>
        </div>
      </div>

      {/* Destination cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {STOPS.map((stop) => (
          <Link
            key={stop.name}
            to={`/${stop.slug}`}
            className="group relative block rounded-2xl overflow-hidden h-[380px]"
          >
            <img
              src={stop.image}
              alt={stop.alt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="font-label text-[8px] uppercase tracking-widest text-on-surface-variant/40">{stop.day}</span>
                <span className={cn("font-label text-[8px] uppercase tracking-widest border rounded-full px-2 py-0.5", stop.tagClass)}>
                  {stop.tag}
                </span>
              </div>
              <h3 className="font-headline text-2xl text-white leading-tight">{stop.name}</h3>
              <p className="text-white/55 text-xs font-light leading-snug">{stop.headline}</p>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500">
                <ul className="overflow-hidden flex flex-col gap-1.5 pt-2">
                  {stop.keyFacts.map((fact) => (
                    <li key={fact} className="flex items-start gap-2 text-[11px] text-white/55 font-light">
                      <span className="mt-[3px] size-1.5 rounded-full bg-primary shrink-0" />
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-2 mt-1">
                <span className="font-label text-[8px] uppercase tracking-widest text-white/25">Explore</span>
                <RiArrowRightLine className="size-3 text-white/25 group-hover:text-primary transition-colors" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Separator className="mt-16 bg-outline-variant/10" />
    </section>
  );
}
